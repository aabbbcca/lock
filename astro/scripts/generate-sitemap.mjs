import fs from "node:fs";
import path from "node:path";
import astroConfig from "../astro.config.mjs";

const site = String(astroConfig.site || "").replace(/\/+$/, "");
const distDir = path.resolve(process.cwd(), "dist");
const sitemapPath = path.join(distDir, "sitemap.xml");

if (!site) {
  throw new Error("Astro config site is missing. Set `site` in astro.config.mjs.");
}

function collectHtmlRoutes(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(...collectHtmlRoutes(fullPath));
      continue;
    }

    if (!entry.isFile() || entry.name !== "index.html") {
      continue;
    }

    const relativeDir = path.relative(distDir, path.dirname(fullPath)).replace(/\\/g, "/");
    const routePath = relativeDir ? `/${relativeDir}/` : "/";
    routes.push({
      routePath,
      lastmod: fs.statSync(fullPath).mtime.toISOString()
    });
  }

  return routes;
}

const routes = collectHtmlRoutes(distDir).sort((a, b) => a.routePath.localeCompare(b.routePath));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
];

for (const route of routes) {
  xml.push("  <url>");
  xml.push(`    <loc>${site}${route.routePath}</loc>`);
  xml.push(`    <lastmod>${route.lastmod}</lastmod>`);
  xml.push("  </url>");
}

xml.push("</urlset>");
fs.writeFileSync(sitemapPath, `${xml.join("\n")}\n`, "utf8");

console.log(`Generated sitemap with ${routes.length} URLs at ${sitemapPath}`);
