// Writes public/sitemap.xml from the routes plus every teacher and program slug.
// Slugs are read with a regex so this runs in plain Node without bundling image imports.
import { readFileSync, writeFileSync } from "node:fs";

const SITE_URL = "https://maplekeymusic.ca";

const slugsIn = (file) =>
  [...readFileSync(new URL(`../src/data/${file}`, import.meta.url), "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map(
    (m) => m[1],
  );

const pages = [
  { path: "/", priority: "1.0" },
  { path: "/programs", priority: "0.9" },
  { path: "/teachers", priority: "0.9" },
  { path: "/register", priority: "0.8" },
  { path: "/testimonials", priority: "0.6" },
  { path: "/pre-register", priority: "0.5" },
  { path: "/refer", priority: "0.5" },
  { path: "/resources", priority: "0.5" },
  { path: "/articles", priority: "0.5" },
  { path: "/apply", priority: "0.4" },
  ...slugsIn("programs.ts").map((slug) => ({ path: `/programs/${slug}`, priority: "0.8" })),
  ...slugsIn("teachers.ts").map((slug) => ({ path: `/teacher-bio/${slug}`, priority: "0.7" })),
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path, priority }) =>
      `  <url><loc>${SITE_URL}${path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`sitemap.xml: ${pages.length} URLs`);
