# lucasfeng7.github.io

Personal portfolio site — [lucasfeng7.github.io](https://lucasfeng7.github.io)

Built with [Astro](https://astro.build). Static output, deployed to GitHub Pages by the
workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build into dist/
npm run preview     # serve the build
npm run check       # type-check
```

## Structure

```
src/
  content/projects/*.mdx   one file per project (case study), with frontmatter
  content.config.ts        project frontmatter schema
  pages/                    routes
  components/               Figure, FigureRow, SpecTable, VideoFigure, ProjectCard, ...
  layouts/BaseLayout.astro  <head>, nav, footer
  assets/projects/{p1,p2}/  optimized at build time by astro:assets
  lib/site.ts               name, email, links
scripts/make_bump_charts.py regenerates the two Visuo-Tactile Bumps analysis charts
public/
  resume.pdf, media/*.mp4, favicon.svg
```

## Adding / editing a project

Edit or add an `.mdx` file in `src/content/projects/`. Put images in
`src/assets/projects/<key>/` and reference them by `<key>/<file>` in `<Figure src=…>`.

## First-time deploy

1. Create a **public** GitHub repo named exactly `lucasfeng7.github.io`.
2. `git remote add origin https://github.com/lucasfeng7/lucasfeng7.github.io.git`
3. `git push -u origin main`
4. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site publishes at `https://lucasfeng7.github.io` a minute or two after the push.

To use a custom domain later: add a `public/CNAME` file with the domain, set `site` in
`astro.config.mjs`, and point DNS at GitHub Pages.
