# Miffy Leung — Portfolio

Live site: [miffyleung.github.io](https://miffyleung.github.io/)

React 19, TypeScript and Vite. The existing design, nine projects, original SVG motion, Thinking map, biography map and full case-study copy are preserved.

## Local development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. All pages are defined in `src/routes.ts` and link through ordinary URLs.

## Editing

- `src/components/Hero.tsx`: personal introduction and homepage links.
- `src/components/ProjectGallery.tsx`: the nine projects and their existing artwork.
- `src/components/Header.tsx` and `Footer.tsx`: shared navigation and contact links.
- `src/pages/`: Thinking, My story, résumé and complete case studies.
- `src/components/LivingDiagram.tsx`, `ThinkingMap.tsx` and `WorkingModel.tsx`: original SVG illustrations.
- `src/motion/`: typed animation and interaction logic. One React effect owns listeners, observers, animation frames and timers; it cleans them up on unmount.
- `src/styles.css`: the preserved paper, rust and serif design, responsive layouts and print styles.
- `public/assets/`: original project images and favicon.
- `public/miffy-work-first-portfolio.html`: the untouched original portfolio.

Motion respects the system’s reduced-motion preference and the reader’s switch. The homepage loop pauses off screen or when the tab is hidden. The gallery never advances automatically.

## Checks and production preview

```sh
npm run build
npm run check
npm run preview
```

The build prerenders every route from the same React components used in the browser. Each page contains its complete content, title and metadata before JavaScript loads. Direct links, refreshes and the original project URLs work on GitHub Pages. Native links retain browser back/forward behaviour and supported page transitions.

`npm run check` verifies all 16 routes, the nine project entries, both maps and the prerendered output. TypeScript uses strict checking. A dedicated 404 page helps visitors return to the portfolio.

## Publishing

Commit source edits and push `main` to `MiffyLeung/miffyleung.github.io`. `.github/workflows/pages.yml` installs the locked dependencies, checks types, builds, verifies the output and publishes `dist` through GitHub Actions. Do not manually edit `dist`; it is regenerated.

The repository’s Pages source is **GitHub Actions**. The prior static versions remain recoverable in Git history. No credentials are stored in this project.

References: [React hydration](https://react.dev/reference/react-dom/client/hydrateRoot), [Vite deployment](https://vite.dev/guide/static-deploy.html#github-pages), [motion guidance](https://github.com/iart-ai/motion-design-skills).
