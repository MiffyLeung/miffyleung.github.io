import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { renderToString } from "react-dom/server";
import { App } from "../src/App";
import { routes, resolveRoute } from "../src/routes";

assert.equal(routes.length, 16);
assert.equal(new Set(routes.map((route) => route.path)).size, routes.length);
for (const route of routes) {
  assert.equal(resolveRoute(route.path.slice(0, -1) || "/"), route);
  const rendered = renderToString(<App path={route.path} />);
  const built = await readFile(join("dist", route.path, "index.html"), "utf8");
  assert.equal((rendered.match(/<h1[ >]/g) ?? []).length, 1, route.path);
  assert.ok(
    built.includes(`<div id="root">${rendered}</div>`),
    `Prerendered content differs: ${route.path}`,
  );
  assert.ok(
    built.includes(`https://miffyleung.github.io${route.path}`),
    `Missing canonical: ${route.path}`,
  );
}
const home = renderToString(<App path="/" />);
assert.equal((home.match(/class="gallery-case/g) ?? []).length, 9);
assert.ok(home.includes("Hi! I&#x27;m"));
assert.ok(home.includes('id="living-svg"'));
const thinking = renderToString(<App path="/thinking/" />);
assert.ok(thinking.includes("Everything exists"));
assert.equal((thinking.match(/data-world-node=/g) ?? []).length, 8);
assert.equal((thinking.match(/data-story-step=/g) ?? []).length, 4);
const about = renderToString(<App path="/about/" />);
assert.equal((about.match(/data-atlas-node=/g) ?? []).length, 5);
assert.ok(about.includes('id="working-model"'));
assert.equal(resolveRoute("/does-not-exist/"), undefined);
assert.ok(
  renderToString(<App path="/does-not-exist/" />).includes(
    "That page has moved.",
  ),
);
console.log(
  "All 16 routes, nine projects, both maps and prerendered content passed.",
);
