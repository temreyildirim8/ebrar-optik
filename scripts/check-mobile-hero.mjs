import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(
  new URL("../src/components/AnimatedHeroBackground.tsx", import.meta.url),
  "utf8",
);

assert.match(
  source,
  /shouldReduceMotion\s*\|\|\s*!window\.matchMedia\("\(min-width: 768px\)"\)\.matches/,
  "Mobilde hero rotasyonu kapalı olmalı.",
);
assert.match(
  source,
  /fetchPriority=\{i === 0 \? "high" : "auto"\}/,
  "İlk hero görseli yüksek indirme önceliği kullanmalı.",
);

console.log("Mobil hero davranışı doğru.");
