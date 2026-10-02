import { $, $$ } from "./dom";
import type { MotionScope, MotionPreference } from "./scope";

export function mountThinkingMap(
  scope: MotionScope,
  { media, reduced }: MotionPreference,
) {
  if ($("#world-map")) {
    const clamp = (n: number, a = 0, b = 1) => Math.max(a, Math.min(b, n));
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const smooth = (t: number) => t * t * (3 - 2 * t);
    const worldStates = [
      {
        xy: [
          [485, 275],
          [735, 300],
          [275, 125],
          [250, 470],
          [730, 125],
          [695, 475],
          [455, 480],
          [780, 475],
        ],
        opacity: [1, 0.85, 0, 0, 0, 0.32, 0, 0],
        edges: [0.8, 0, 0, 0, 0.32, 0, 0, 0, 0, 0, 0],
      },
      {
        xy: [
          [510, 285],
          [780, 300],
          [305, 120],
          [235, 390],
          [690, 110],
          [730, 490],
          [450, 510],
          [795, 480],
        ],
        opacity: [1, 1, 1, 1, 1, 0.75, 0.07, 0],
        edges: [0.7, 0.65, 0.65, 0.65, 0.5, 0.08, 0, 0, 0, 0.3, 0.1],
      },
      {
        xy: [
          [505, 265],
          [780, 290],
          [305, 120],
          [230, 390],
          [690, 110],
          [730, 495],
          [455, 495],
          [810, 475],
        ],
        opacity: [1, 0.85, 0.48, 0.5, 0.48, 0.3, 1, 0],
        edges: [0.6, 0.28, 0.28, 0.28, 0.15, 1, 0, 0, 0, 0.15, 0.4],
      },
      {
        xy: [
          [375, 265],
          [450, 100],
          [225, 135],
          [225, 465],
          [760, 130],
          [815, 445],
          [520, 475],
          [740, 290],
        ],
        opacity: [1, 0.55, 0.3, 0.3, 0.3, 0.18, 1, 1],
        edges: [0.18, 0.14, 0.14, 0.12, 0.05, 1, 1, 1, 0, 0.12, 0.15],
      },
    ];
    const worldPairs = [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [0, 5],
      [0, 6],
      [0, 7],
      [6, 7],
      [7, 0],
      [2, 4],
      [3, 6],
    ];
    const worldNodes = $$<SVGElement>("[data-world-node]");
    const worldEdges = $$<SVGPathElement>("#world-edges path");
    const storyBeats = $$("[data-story-step]");
    const worldNotes = [
      "What matters to them?",
      "Who else shapes their experience?",
      "What do we know — and what are we assuming?",
      "A prototype gives the question back to people.",
    ];
    const statusNotes = [
      "Listen before designing",
      "Understand the surrounding system",
      "Question my own connections",
      "Make it tangible. Keep learning.",
    ];
    let worldProgress = 0;
    function curvedPath(a: number[], b: number[], i: number) {
      const mx = (a[0] + b[0]) / 2,
        my = (a[1] + b[1]) / 2;
      const bend = i % 2 ? -32 : 32;
      return `M${a[0].toFixed(2)} ${a[1].toFixed(2)} Q${(mx + bend).toFixed(2)} ${(my - bend).toFixed(2)} ${b[0].toFixed(2)} ${b[1].toFixed(2)}`;
    }
    function drawWorld(value: number) {
      worldProgress = clamp(value, 0, 3);
      const base = Math.min(2, Math.floor(worldProgress)),
        t = smooth(worldProgress - base);
      const a = worldStates[base],
        b = worldStates[base + 1];
      const xy = a.xy.map((p, i) => [
        lerp(p[0], b.xy[i][0], t),
        lerp(p[1], b.xy[i][1], t),
      ]);
      worldNodes.forEach((el, i) => {
        el.setAttribute(
          "transform",
          `translate(${xy[i][0].toFixed(2)} ${xy[i][1].toFixed(2)})`,
        );
        el.style.opacity = lerp(a.opacity[i], b.opacity[i], t).toFixed(3);
      });
      worldEdges.forEach((el, i) => {
        const [u, v] = worldPairs[i];
        el.setAttribute("d", curvedPath(xy[u], xy[v], i));
        el.style.opacity = lerp(a.edges[i], b.edges[i], t).toFixed(3);
        const selected =
          (worldProgress > 1.2 && i === 5) ||
          (worldProgress > 2.15 && [6, 7].includes(i));
        el.classList.toggle("is-chosen", selected);
        el.style.strokeDasharray = selected
          ? "none"
          : i === 4
            ? ".008 .012"
            : ".025 .012";
      });
      const current = Math.round(worldProgress);
      $("#world-note").textContent = worldNotes[current];
      $("#story-count").textContent =
        String(current + 1).padStart(2, "0") + " / 04";
      $("#story-status").textContent =
        String(current + 1).padStart(2, "0") + " / " + statusNotes[current];
      $("#story-fill").style.transform = `scaleX(${(worldProgress + 1) / 4})`;
      $("#world-focus").style.opacity = (
        worldProgress < 1
          ? 0
          : worldProgress < 2
            ? (worldProgress - 1) * 0.22
            : 0.22 * (3 - worldProgress)
      ).toFixed(3);
      $("#world-contour").style.opacity = (
        0.15 +
        0.13 * Math.sin((worldProgress / 3) * Math.PI)
      ).toFixed(3);
      storyBeats.forEach((el, i) =>
        el.classList.toggle("is-current", i === current),
      );
      $("#world-map").dataset.stage = String(current);
      $("#world-map").dataset.progress = worldProgress.toFixed(3);
    }

    let scheduled = false,
      visible = true,
      hoverStory: number | null = null;
    const finePointer = matchMedia("(hover: hover) and (pointer: fine)");
    function renderMap() {
      scheduled = false;
      if (!visible || document.hidden) return;
      const vh = innerHeight,
        vw = innerWidth;
      $("#world-map").setAttribute(
        "viewBox",
        vw <= 700 ? "90 20 850 620" : "0 0 1000 660",
      );
      const line =
        vw <= 700
          ? Math.min(vh - 100, 104 + 310 + (vh - 414) * 0.48)
          : 80 + (vh - 80) * 0.5;
      const centers = storyBeats.map((el) => {
        const r = el.getBoundingClientRect();
        return r.top + r.height * 0.5;
      });
      let progress = 0;
      if (line >= centers[3]) progress = 3;
      else if (line > centers[0])
        for (let i = 0; i < 3; i++)
          if (line >= centers[i] && line < centers[i + 1]) {
            progress = i + (line - centers[i]) / (centers[i + 1] - centers[i]);
            break;
          }
      drawWorld(reduced() ? 3 : hoverStory === null ? progress : hoverStory);
    }
    function scheduleMap() {
      if (visible && !scheduled) {
        scheduled = true;
        scope.frame(renderMap);
      }
    }
    if ("IntersectionObserver" in window)
      scope
        .intersection(([entry]) => {
          visible = entry.isIntersecting;
          if (visible) {
            scope.listen(window, "scroll", scheduleMap, { passive: true });
            scheduleMap();
          } else removeEventListener("scroll", scheduleMap);
        })
        .observe($("#playground"));
    else scope.listen(window, "scroll", scheduleMap, { passive: true });
    scope.listen(window, "resize", scheduleMap, { passive: true });
    scope.listen(document, "visibilitychange", scheduleMap);
    scope.listen(media, "change", scheduleMap);
    scope.listen($("#motion-toggle"), "click", scheduleMap);
    storyBeats.forEach((el, i) => {
      scope.listen(el, "pointerenter", (event) => {
        if (finePointer.matches && event.pointerType !== "touch") {
          hoverStory = i;
          scheduleMap();
        }
      });
      scope.listen(el, "pointerleave", () => {
        hoverStory = null;
        scheduleMap();
      });
    });
    drawWorld(reduced() ? 3 : 0);
    scheduleMap();
  }
}
