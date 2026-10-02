type PortfolioEventMap = GlobalEventHandlersEventMap & {
  visibilitychange: Event;
  pageswap: PageTransitionEvent;
  pagereveal: PageTransitionEvent;
};

/** Own the browser resources created by one mounted portfolio page. */
export function createMotionScope() {
  const controller = new AbortController();
  const observers: Array<IntersectionObserver | ResizeObserver> = [];
  const frames = new Set<number>();
  const timers = new Set<number>();
  const animations: Animation[] = [];
  return {
    listen<K extends keyof PortfolioEventMap>(
      target: EventTarget,
      type: K,
      callback: (event: PortfolioEventMap[K]) => void,
      options: AddEventListenerOptions = {},
    ) {
      target.addEventListener(type, callback as EventListener, {
        ...options,
        signal: controller.signal,
      });
    },
    intersection(
      callback: IntersectionObserverCallback,
      options?: IntersectionObserverInit,
    ) {
      const observer = new IntersectionObserver(callback, options);
      observers.push(observer);
      return observer;
    },
    resize(callback: ResizeObserverCallback) {
      const observer = new ResizeObserver(callback);
      observers.push(observer);
      return observer;
    },
    frame(callback: FrameRequestCallback) {
      const id = requestAnimationFrame((time) => {
        frames.delete(id);
        callback(time);
      });
      frames.add(id);
      return id;
    },
    cancelFrame(id: number) {
      cancelAnimationFrame(id);
      frames.delete(id);
    },
    timeout(callback: () => void, delay: number) {
      const id = window.setTimeout(() => {
        timers.delete(id);
        callback();
      }, delay);
      timers.add(id);
      return id;
    },
    clearTimeout(id: number) {
      window.clearTimeout(id);
      timers.delete(id);
    },
    animate(
      element: Element,
      keyframes: Keyframe[],
      options: KeyframeAnimationOptions,
    ) {
      const animation = element.animate(keyframes, options);
      animations.push(animation);
      return animation;
    },
    dispose() {
      controller.abort();
      observers.forEach((observer) => observer.disconnect());
      frames.forEach(cancelAnimationFrame);
      timers.forEach(window.clearTimeout);
      animations.forEach((animation) => animation.cancel());
    },
  };
}

export type MotionScope = ReturnType<typeof createMotionScope>;
export interface MotionPreference {
  media: MediaQueryList;
  reduced: () => boolean;
}
