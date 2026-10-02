export const $ = <T extends Element = HTMLElement>(
  s: string,
  root: ParentNode = document,
) => root.querySelector<T>(s)!;
export const $$ = <T extends Element = HTMLElement>(
  s: string,
  root: ParentNode = document,
) => Array.from(root.querySelectorAll<T>(s));
