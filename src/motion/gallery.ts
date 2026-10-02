import { $, $$ } from "./dom";
import type { MotionScope, MotionPreference } from "./scope";

export function mountProjectGallery(scope: MotionScope) {
  /* Progressive gallery: all work stays in the DOM, with no timed rotation. */
  (() => {
    const track = document.getElementById("selected-projects")!;
    const toolbar = document.getElementById("showcase-toolbar")!;
    const controls = document.getElementById("showcase-controls")!;
    if (!track || !toolbar || !controls) return;
    const cards = Array.from(
      track.querySelectorAll<HTMLElement>(":scope > .gallery-case"),
    );
    if (!cards.length) return;
    const viewButtons = Array.from(
      toolbar.querySelectorAll<HTMLButtonElement>("[data-work-view]"),
    );
    const prev = controls.querySelector<HTMLButtonElement>(".showcase-prev")!;
    const next = controls.querySelector<HTMLButtonElement>(".showcase-next")!;
    const count = document.getElementById("showcase-count")!;
    const current = document.getElementById("showcase-current")!;
    const live = document.getElementById("showcase-live")!;
    const bar = controls.querySelector<HTMLElement>(".showcase-progress span")!;
    const hint = document.getElementById("showcase-hint")!;
    const mobile = window.matchMedia("(max-width: 760px)");
    let mode: "gallery" | "carousel" = "gallery";
    let index = 0;
    let settleTimer = 0;
    let scrollFrame = 0;
    let lastAnnounced = -1;
    const label = (i: number) => cards[i].dataset.label || `Project ${i + 1}`;
    const isReduced = () =>
      document.documentElement.dataset.motion === "off" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const inset = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;
    function projectPosition(i: number) {
      const rect = track.getBoundingClientRect();
      const card = cards[i].getBoundingClientRect();
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      return Math.max(
        0,
        Math.min(max, track.scrollLeft + card.left - rect.left - inset()),
      );
    }
    function nearest() {
      const max = track.scrollWidth - track.clientWidth;
      if (max <= 1 || track.scrollLeft <= 2) return 0;
      if (track.scrollLeft >= max - 3) return cards.length - 1;
      let best = 0,
        distance = Infinity;
      cards.forEach((card, i) => {
        const d = Math.abs(projectPosition(i) - track.scrollLeft);
        if (d < distance) {
          distance = d;
          best = i;
        }
      });
      return best;
    }
    function update(announce = false) {
      if (mode !== "carousel") return;
      index = nearest();
      count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(cards.length).padStart(2, "0")}`;
      current.textContent = label(index);
      bar.style.width = `${100 / cards.length}%`;
      bar.style.transform = `translateX(${index * 100}%)`;
      prev.setAttribute("aria-disabled", String(index === 0));
      next.setAttribute("aria-disabled", String(index === cards.length - 1));
      cards.forEach((card, i) =>
        card.classList.toggle("is-current-project", i === index),
      );
      if (announce && index !== lastAnnounced) {
        live.textContent = `${label(index)}, project ${index + 1} of ${cards.length}.`;
        lastAnnounced = index;
      }
    }
    function goTo(i: number, immediate = false) {
      if (mode !== "carousel") return;
      const safe = Math.max(0, Math.min(cards.length - 1, i));
      track.scrollTo({
        left: projectPosition(safe),
        behavior: immediate || isReduced() ? "instant" : "smooth",
      });
      scope.clearTimeout(settleTimer);
      settleTimer = scope.timeout(
        () => update(true),
        immediate || isReduced() ? 70 : 500,
      );
    }
    function setView(view: "gallery" | "carousel") {
      mode = view;
      track.dataset.view = view;
      toolbar.hidden = false;
      controls.hidden = view !== "carousel";
      viewButtons.forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.workView === view),
        ),
      );
      hint.textContent =
        view === "gallery"
          ? `All ${cards.length} projects. One gallery.`
          : mobile.matches
            ? "Swipe to explore. Nothing auto-advances."
            : "Scroll sideways, or use the arrows.";
      track.setAttribute("role", view === "carousel" ? "region" : "list");
      if (view === "carousel") {
        track.setAttribute("aria-roledescription", "carousel");
        track.setAttribute(
          "aria-label",
          "All projects. Swipe or use the previous and next buttons.",
        );
      } else {
        track.removeAttribute("aria-roledescription");
        track.setAttribute("aria-label", "All projects");
      }
      cards.forEach((card, i) => {
        card.setAttribute("role", view === "carousel" ? "group" : "listitem");
        if (view === "carousel") {
          card.setAttribute("aria-roledescription", "slide");
          card.setAttribute(
            "aria-label",
            `${i + 1} of ${cards.length}: ${label(i)}`,
          );
        } else {
          card.removeAttribute("aria-roledescription");
          card.removeAttribute("aria-label");
        }
      });
      live.textContent = "";
      lastAnnounced = -1;
      scope.frame(() => {
        track.scrollTo({ left: 0, behavior: "instant" });
        index = 0;
        update(false);
      });
    }
    viewButtons.forEach((button) =>
      scope.listen(button, "click", () =>
        setView(
          button.dataset.workView === "carousel" ? "carousel" : "gallery",
        ),
      ),
    );
    scope.listen(prev, "click", () => {
      if (prev.getAttribute("aria-disabled") !== "true") goTo(index - 1);
    });
    scope.listen(next, "click", () => {
      if (next.getAttribute("aria-disabled") !== "true") goTo(index + 1);
    });
    scope.listen(
      track,
      "scroll",
      () => {
        if (mode !== "carousel") return;
        if (!scrollFrame)
          scrollFrame = scope.frame(() => {
            scrollFrame = 0;
            update();
          });
        scope.clearTimeout(settleTimer);
        settleTimer = scope.timeout(() => update(true), 160);
      },
      { passive: true },
    );
    scope.listen(track, "focusin", (event) => {
      if (mode !== "carousel") return;
      const card = (event.target as Element).closest<HTMLElement>(
        ".gallery-case",
      );
      if (card && cards.includes(card)) goTo(cards.indexOf(card), true);
    });
    scope.listen(track, "keydown", (event) => {
      if (
        mode !== "carousel" ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      )
        return;
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
        return;
      const active = (event.target as Element).closest<HTMLElement>(
        ".gallery-case",
      );
      if (!active) return;
      event.preventDefault();
      const from = cards.indexOf(active);
      const target =
        event.key === "Home"
          ? 0
          : event.key === "End"
            ? cards.length - 1
            : Math.max(
                0,
                Math.min(
                  cards.length - 1,
                  from + (event.key === "ArrowRight" ? 1 : -1),
                ),
              );
      cards[target]
        .querySelector<HTMLAnchorElement>(".gallery-primary")!
        .focus({ preventScroll: true });
      goTo(target, true);
    });
    // Resizing never switches the reader into a mode that hides other projects.
    scope.listen(mobile, "change", () => {
      hint.textContent =
        mode === "gallery"
          ? `All ${cards.length} projects. One gallery.`
          : mobile.matches
            ? "Swipe to explore. Nothing auto-advances."
            : "Scroll sideways, or use the arrows.";
      scope.frame(() => update());
    });
    if ("ResizeObserver" in window)
      scope
        .resize(() => {
          if (mode === "carousel") scope.frame(() => update());
        })
        .observe(track);
    setView("gallery");
  })();
}
