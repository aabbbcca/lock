# Astro Version

This folder contains an Astro version of the current locksmith site.

## Run

1. Install Node.js 20+
2. Run:

```bash
npm install
npm run dev
```

## Included pages

- `/`
- `/electronic-page/`
- `/product/[id]/`

The Astro project reads product data directly from `../product/product-data.js` so the product catalog stays in one source of truth.
