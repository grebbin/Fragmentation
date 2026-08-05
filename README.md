# Fragmented Reality

A plain HTML, CSS, and JavaScript scrollytelling website.

## Open locally

You can open `index.html` directly in a browser. For local development with automatic refresh:

```sh
npm run dev
```

## Structure

```text
index.html             page entry
script.js              small JavaScript entry point
src/js/main.js         application bootstrap
src/js/content.js      chapter and story content data
src/js/navigation.js   main/side navigation and sound controls
src/js/sections.js     section HTML builders
src/js/scrollytelling.js Scrollama and animation state
src/js/forest-map.js   D3 map rendering
src/js/pseudorelief-model.js Three.js model rendering
src/js/utils.js        shared JavaScript helpers
docs/annotated/        commented JavaScript learning copy
src/styles/            tokens, global, navigation, and section CSS
public/media/          video, PNG, SVG, and map assets
src/assets/fonts/      local Work Sans, Georgia, and Flor DeRuina fonts
```

The project’s typography, spacing, colour, and responsive rules are documented in [STYLEGUIDE.md](./STYLEGUIDE.md).

The JavaScript is explained in [docs/annotated/README.md](./docs/annotated/README.md). Its commented copy is not loaded by the website, so the modular files in `src/js/` remain clean production sources.

No compilation is required. The optional Vite command is only a convenient local server.

For GitHub Pages, publish the repository root directly; `index.html` is already the finished site.
