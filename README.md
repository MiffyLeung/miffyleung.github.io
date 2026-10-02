# Miffy Leung — Portfolio

Live site: https://miffyleung.github.io/

This folder is connected to `MiffyLeung/miffyleung.github.io`. GitHub Pages publishes the `main` branch from the repository root.

## Files

- `index.html`: the homepage, with all nine selected projects.
- `work/<project>/index.html`: each complete project or context page.
- `thinking/index.html`: the thinking behind the work.
- `about/index.html`: biography and professional journey.
- `resume/index.html`: résumé, including print / save PDF support.
- `assets/site.css` and `assets/site.js`: shared styles and motion.
- `assets/`: original project images and the new abstract homepage illustration.
- `miffy-work-first-portfolio.html`: the untouched original portfolio, preserved as a reference.

All routes are ordinary folders with an `index.html`, so direct links and refreshes work on GitHub Pages without a router service.

## Local preview

Open a terminal in this folder and run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000/. Use the local server for previews because assets and navigation use site-root paths.

## Publishing edits

Commit your edits and push `main` to `origin`. GitHub Pages will publish them automatically. No forced push or credentials stored in this folder are needed.

## Motion and access

The site respects the system's reduced-motion preference and the reader's Motion switch. Motion uses brief entrance gestures, artwork interaction and supported browser page transitions. Content and route links remain accessible without JavaScript.

Design direction: existing paper, rust and serif identity, refined with editorial composition and restrained tactile motion. Motion guidance references https://github.com/iart-ai/motion-design-skills.
