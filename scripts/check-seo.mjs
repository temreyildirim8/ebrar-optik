import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const dist = new URL("../dist/", import.meta.url);
const read = (file) => readFile(new URL(file, dist), "utf8");
const sitemap = await read("sitemap.xml");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, 9, "Sitemap dokuz sayfa içermeli.");
assert.equal([...sitemap.matchAll(/<changefreq>weekly<\/changefreq>/g)].length, 9,
  "Dokuz sayfanın tamamı haftalık güncelleme sıklığı bildirmeli.");
assert(!sitemap.includes("<lastmod>"), "Gerçek değişim tarihi yokken lastmod üretilmemeli.");
assert(!urls.some((url) => url.endsWith("/kvkk")), "KVKK sitemap dışında kalmalı.");

const robots = await read("robots.txt");
assert.match(robots, /User-Agent: \*\s+Allow: \//);
assert(robots.includes("Sitemap: https://ebrar-optik.com/sitemap.xml"));

for (const url of urls) {
  const path = new URL(url).pathname;
  const html = await read(path === "/" ? "index.html" : `${path.slice(1)}.html`);
  assert(html.includes(`rel="canonical" href="${url}"`), `${path}: canonical yanlış.`);
  assert.match(html, /name="robots" content="index, follow"/);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  assert(schemas.some((schema) => schema["@graph"]?.some((entity) =>
    entity["@type"]?.includes("Optician") && entity.name && entity.address,
  )), `${path}: işletme schema eksik.`);
  if (path !== "/") {
    const breadcrumb = schemas.find((schema) => schema["@type"] === "BreadcrumbList");
    assert(breadcrumb, `${path}: breadcrumb schema eksik.`);
    assert.equal(breadcrumb.itemListElement.length, 2);
    assert.equal(breadcrumb.itemListElement[0].position, 1);
    assert.equal(breadcrumb.itemListElement[0].item, "https://ebrar-optik.com");
    assert.equal(breadcrumb.itemListElement[1].position, 2);
    assert.equal(breadcrumb.itemListElement[1].item, url);
    assert.match(html, /<nav aria-label="Sayfa konumu"/);
  }
}
assert.match(await read("kvkk.html"), /name="robots" content="noindex, nofollow"/);
console.log("SEO doğrulandı: dokuz canonical, JSON-LD, breadcrumb, robots ve sitemap.");
