import { $, $$ } from "./dom";
import type { MotionScope, MotionPreference } from "./scope";

export function mountLivingDiagram(
  scope: MotionScope,
  { media, reduced }: MotionPreference,
) {
  if ($("#living-svg")) {
    const hero = $(".identity-hero");
    const livingNodes = [
      $("#living-people"),
      $("#living-context"),
      $("#living-possibility"),
    ];
    const livingWires = $$<SVGPathElement>("#living-wires path");
    let heroRAF = 0,
      lastTime: number | null = null,
      elapsed = 0;
    let heroInView = true;
    function drawLiving(time: number) {
      const phase = time / 1000;
      const gather = 0.5 - 0.5 * Math.cos((phase * Math.PI) / 4.8);
      const positions = [
        [70 + 42 * gather, 76 + 14 * Math.sin(phase * 0.64)],
        [333 - 30 * gather, 44 + 13 * Math.sin(phase * 0.72 + 1.5)],
        [327 - 20 * gather, 116 + 10 * Math.sin(phase * 0.69 + 3.5)],
      ];
      livingNodes.forEach((el, i) =>
        el.setAttribute(
          "transform",
          `translate(${positions[i][0].toFixed(2)} ${positions[i][1].toFixed(2)})`,
        ),
      );
      livingWires.forEach((el, i) => {
        const [x, y] = positions[i];
        el.setAttribute(
          "d",
          `M220 77 Q${(220 + x) / 2} ${(77 + y) / 2 + (i === 0 ? 25 : -20)} ${x} ${y}`,
        );
        el.style.opacity = (0.42 + 0.4 * gather).toFixed(3);
      });
      $("#living-asterisk").setAttribute(
        "transform",
        `rotate(${(phase * 13) % 360}) scale(${1 + 0.05 * Math.sin(phase * 1.3)})`,
      );
      const travel = (phase * 0.2) % 1;
      const a = [220, 77],
        b = positions[0],
        ctrl = [(220 + b[0]) / 2, (77 + b[1]) / 2 + 25];
      const px =
        (1 - travel) ** 2 * a[0] +
        2 * (1 - travel) * travel * ctrl[0] +
        travel ** 2 * b[0];
      const py =
        (1 - travel) ** 2 * a[1] +
        2 * (1 - travel) * travel * ctrl[1] +
        travel ** 2 * b[1];
      $("#living-packet").setAttribute("cx", px.toFixed(2));
      $("#living-packet").setAttribute("cy", py.toFixed(2));
      $("#living-svg").dataset.frame = String(Math.round(time));
    }
    function canPlayHero() {
      return (
        !reduced() &&
        !document.hidden &&
        !document.querySelector("dialog[open]") &&
        heroInView
      );
    }
    function tickHero(now: number) {
      heroRAF = 0;
      if (!canPlayHero()) {
        lastTime = null;
        return;
      }
      if (lastTime !== null) elapsed += Math.min(64, now - lastTime);
      lastTime = now;
      drawLiving(elapsed);
      heroRAF = scope.frame(tickHero);
    }
    function updateHeroState() {
      const r = hero.getBoundingClientRect();
      heroInView = r.bottom > 80 && r.top < window.innerHeight;
      const playing = canPlayHero();
      document.documentElement.dataset.heroPlaying = playing ? "on" : "off";
      if (playing && !heroRAF) {
        lastTime = null;
        heroRAF = scope.frame(tickHero);
      } else if (!playing && heroRAF) {
        scope.cancelFrame(heroRAF);
        heroRAF = 0;
        lastTime = null;
      }
    }
    if ("IntersectionObserver" in window) {
      scope
        .intersection(() => updateHeroState(), { threshold: 0 })
        .observe(hero);
    }
    scope.listen(document, "visibilitychange", updateHeroState);
    scope.listen($("#motion-toggle"), "click", updateHeroState);
    scope.listen(media, "change", updateHeroState);

    drawLiving(0);
    updateHeroState();
  }
}
