![Jeff Doolittle: I help make good software professionals great!](/assets/og_image.png "Jeff Doolittle: I help make good software professionals great!")

[jeffdoolittle.com](https://jeffdoolittle.com)

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:4300/` in your browser.

## Building

```bash
npm run build     # output to dist/
npm run preview   # serve dist/ at localhost:3000 (requires build first)
```

## Stack

- [Astro 5](https://astro.build/) — static site generator
- [@astrojs/netlify](https://docs.astro.build/en/guides/deploy/netlify/) — Netlify adapter
- [astro-pagefind](https://github.com/shishkin/astro-pagefind) — search
- Content: `src/content/blog/` (Markdown + MDX)
- Pages: `src/pages/`
- Layouts: `src/layouts/`
- Components: `src/components/`
