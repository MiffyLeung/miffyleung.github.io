import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { renderToString } from "react-dom/server";
import { App } from "../src/App";
import { routes } from "../src/routes";

const template = await readFile("dist/index.html", "utf8");
const escape = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        character
      ]!,
  );

async function writeRoute(
  path: string,
  title: string,
  description: string,
  bodyClass: string,
  file = "index.html",
) {
  const canonical = `https://miffyleung.github.io${path}`;
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(
      "</head>",
      `<meta name="description" content="${escape(description)}"><link rel="canonical" href="${canonical}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="website"></head>`,
    )
    .replace(/<body[^>]*>/, `<body class="${bodyClass}">`)
    .replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(<App path={path} />)}</div>`,
    );
  const directory = file === "404.html" ? "dist" : join("dist", path);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, file), html);
}

for (const route of routes)
  await writeRoute(route.path, route.title, route.description, route.bodyClass);
await writeRoute(
  "/not-found/",
  "Page not found · Miffy Leung",
  "Return to Miffy Leung’s portfolio.",
  "routed-page",
  "404.html",
);
console.log(`Prerendered ${routes.length} portfolio routes and a 404 page.`);
