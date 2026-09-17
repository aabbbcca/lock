# Astro Version

This folder contains an Astro version of the current locksmith site.

## Run

1. Install Node.js 22.12.0 or newer
2. Run:

```bash
npm install
npm run dev
```

## Included pages

- `/`
- `/electronic-page/`
- `/product/[id]/`

The Astro project keeps its electronic product data in `src/lib/legacy-product-data.js`.

## Cloudflare Workers deployment

Use the repository root (the directory containing `wrangler.jsonc`) as the
Cloudflare build root, with these settings:

- Build command: `npm ci --prefix astro && npm run build --prefix astro`
- Deploy command: `npx wrangler deploy`
- Node.js version: `22.16.0` (specified in the root `.node-version`)

The build generates the static site and sitemap in `astro/dist`. Wrangler
uploads that directory. The `name` in `wrangler.jsonc` must match the Worker
name in Cloudflare; it currently defaults to `lock`.

To validate locally after building, run `npx wrangler deploy --dry-run` from
the repository root. This does not publish the site.
