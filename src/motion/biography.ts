import { $, $$ } from "./dom";
import type { MotionScope, MotionPreference } from "./scope";

export function mountBiographyMap(
  scope: MotionScope,
  { reduced }: MotionPreference,
) {
  // The biography map follows the paragraph in view; reading never waits for animation.
  if ($("[data-atlas-node]")) {
    const entries = $$("[data-journey-step]");
    let lastIndex = -1;
    const select = (index: number) => {
      if (index === lastIndex) return;
      lastIndex = index;
      entries.forEach((e, i) => e.classList.toggle("is-current", i === index));
      $$("[data-atlas-node]").forEach((e) => {
        const n = Number(e.dataset.atlasNode);
        e.classList.toggle("has-context", n <= index);
        e.classList.toggle("is-current", n === index);
      });
      $$("[data-atlas-edge]").forEach((e) =>
        e.classList.toggle("has-context", Number(e.dataset.atlasEdge) <= index),
      );
      $("#atlas-count").textContent =
        `${String(index + 1).padStart(2, "0")} / 05`;
      $("#atlas-current").textContent =
        entries[index].querySelector("h3")!.textContent;
    };
    select(0);
    let atlasVisible = true,
      atlasScheduled = false;
    function updateAtlas() {
      atlasScheduled = false;
      if (!atlasVisible) return;
      let nearest = 0,
        distance = Infinity;
      entries.forEach((entry, i) => {
        const r = entry.getBoundingClientRect(),
          d = Math.abs(r.top + r.height * 0.4 - innerHeight * 0.52);
        if (d < distance) {
          distance = d;
          nearest = i;
        }
      });
      select(nearest);
    }
    function scheduleAtlas() {
      if (atlasVisible && !atlasScheduled) {
        atlasScheduled = true;
        scope.frame(updateAtlas);
      }
    }
    if ("IntersectionObserver" in window)
      scope
        .intersection(([entry]) => {
          atlasVisible = entry.isIntersecting;
          if (atlasVisible) {
            scope.listen(window, "scroll", scheduleAtlas, { passive: true });
            scheduleAtlas();
          } else removeEventListener("scroll", scheduleAtlas);
        })
        .observe($(".journey-layout"));
    else scope.listen(window, "scroll", scheduleAtlas, { passive: true });
    scope.listen(window, "resize", scheduleAtlas, { passive: true });
    scheduleAtlas();
    $$("[data-atlas-node]").forEach((e) =>
      scope.listen(e, "click", () => {
        const i = Number(e.dataset.atlasNode);
        select(i);
        entries[i].scrollIntoView({
          block: "center",
          behavior: reduced() ? "instant" : "smooth",
        });
      }),
    );
  }
}
