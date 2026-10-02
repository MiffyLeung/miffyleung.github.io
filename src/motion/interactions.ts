import { $, $$ } from "./dom";
import { mountBiographyMap } from "./biography";
import { mountThinkingMap } from "./thinking";
import { mountLivingDiagram } from "./living";
import { mountProjectGallery } from "./gallery";
import { createMotionScope } from "./scope";

export function mountInteractions() {
  const scope = createMotionScope();
  document.documentElement.classList.add("js");
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  let manualMotion = false;
  try {
    manualMotion = localStorage.getItem("portfolio-motion") === "off";
  } catch (_) {}
  function reduced() {
    return manualMotion || media.matches;
  }
  function syncMotion() {
    const off = reduced();
    document.documentElement.dataset.motion = off ? "off" : "on";
    $("#route-motion").textContent =
      `@view-transition{navigation:${off ? "none" : "auto"}}`;
    $("#motion-label").textContent = off ? "Motion off" : "Motion on";
    $("#motion-toggle").setAttribute("aria-pressed", String(!off));
    $("#motion-toggle").setAttribute(
      "aria-label",
      off ? "Turn decorative motion on" : "Turn decorative motion off",
    );
    if (off) {
      document.getAnimations().forEach((a) => {
        if (a.effect?.getComputedTiming().iterations !== Infinity) a.finish();
      });
    }
  }
  scope.listen($("#motion-toggle"), "click", () => {
    manualMotion = !manualMotion;
    try {
      localStorage.setItem("portfolio-motion", manualMotion ? "off" : "on");
    } catch (_) {}
    syncMotion();
  });
  scope.listen(media, "change", syncMotion);
  syncMotion();
  // Keep shared old links working after the move to real, reloadable routes.
  if (location.pathname === "/") {
    const old = location.hash;
    const map: Record<string, string> = {
      "#about": "/about/",
      "#playground": "/thinking/",
      "#resume": "/resume/",
      "#case-color": "/work/color-identity/",
    };
    const path =
      map[old] ||
      (old.startsWith("#project/")
        ? "/work/" + old.slice(9) + "/"
        : old.startsWith("#case-")
          ? "/work/" + old.slice(6) + "/"
          : null);
    if (path) location.replace(path);
  }
  const printButton = $(".print-resume");
  if (printButton) scope.listen(printButton, "click", () => window.print());
  const reveals = $$(".gallery-case,.study-cover,[data-reveal]");
  if ("IntersectionObserver" in window) {
    const reveal = scope.intersection(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in-view");
          if (!reduced())
            scope.animate(
              entry.target,
              [
                { opacity: 0.15, transform: "translateY(18px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 600, easing: "cubic-bezier(.22,1,.36,1)" },
            );
          reveal.unobserve(entry.target);
        }),
      { threshold: 0.08 },
    );
    reveals.forEach((e) => reveal.observe(e));
    scope
      .intersection(([e]) =>
        $("#site-header").classList.toggle("scrolled", !e.isIntersecting),
      )
      .observe($("#header-sentinel"));
    const toc = $$<HTMLAnchorElement>('.study-toc a[href^="#"]');
    const chapter = scope.intersection(
      (entries) => {
        const current = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current)
          toc.forEach((a) => {
            const active = a.hash === "#" + current.target.id;
            a.classList.toggle("active", active);
            if (active) a.setAttribute("aria-current", "location");
            else a.removeAttribute("aria-current");
          });
      },
      { rootMargin: "-18% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    toc.forEach((a) => {
      const section = document.getElementById(a.hash.slice(1));
      if (section) chapter.observe(section);
    });
  } else reveals.forEach((e) => e.classList.add("is-in-view"));
  // A brief opening gesture complements the original living diagram below.
  if (!reduced()) {
    $$(".hero-inner,.perspectives").forEach((e, i) =>
      scope.animate(
        e,
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "none" },
        ],
        {
          duration: 850,
          delay: i * 100,
          easing: "cubic-bezier(.22,1,.36,1)",
          fill: "backwards",
        },
      ),
    );
  }
  mountBiographyMap(scope, { media, reduced });
  mountThinkingMap(scope, { media, reduced });
  mountLivingDiagram(scope, { media, reduced });
  mountProjectGallery(scope);
  return () => {
    scope.dispose();
    document.documentElement.classList.remove("js");
  };
}
