import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
import ts from "typescript";

const source = await readFile(
  new URL("../src/components/AnimatedHeroBackground.tsx", import.meta.url),
  "utf8",
);

// Gerçek bileşenin efektini kontrollü tarayıcı ve zamanlayıcılarla çalıştır.
function mount(width, reducedMotion = false) {
  const events = new EventTarget();
  const media = new EventTarget();
  const timers = new Map();
  const state = [];
  let effect;
  let threshold;
  const react = {
    createElement: () => null,
    useState(initial) {
      const slot = state.push(initial) - 1;
      return [initial, (value) => {
        state[slot] = typeof value === "function" ? value(state[slot]) : value;
      }];
    },
    useEffect(callback) { effect = callback; },
  };
  const exports = {};
  vm.runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React },
  }).outputText, {
    exports,
    React: react,
    require(name) {
      if (name === "react") return react;
      if (name === "framer-motion") return { useReducedMotion: () => reducedMotion };
      if (name === "next/image") return { default: () => null };
      throw new Error(`Unexpected import: ${name}`);
    },
    window: {
      matchMedia(query) {
        threshold = Number(query.match(/min-width:\s*(\d+)px/)[1]);
        media.matches = width >= threshold;
        return media;
      },
      addEventListener: events.addEventListener.bind(events),
      removeEventListener: events.removeEventListener.bind(events),
    },
    setInterval(callback) { const id = Symbol(); timers.set(id, callback); return id; },
    clearInterval(id) { timers.delete(id); },
  });
  exports.AnimatedHeroBackground();
  const cleanup = effect();
  return {
    state,
    interact() { events.dispatchEvent(new Event("pointerdown")); },
    tick() { timers.forEach((callback) => callback()); },
    resize(nextWidth) {
      media.matches = nextWidth >= threshold;
      media.dispatchEvent(new Event("change"));
    },
    cleanup() { cleanup?.(); },
  };
}

for (const width of [390, 768, 1024, 1279]) {
  const hero = mount(width);
  hero.interact();
  hero.tick();
  assert.deepEqual(hero.state, [0, false], `${width}px: ilk görsel sabit kalmalı.`);
  hero.cleanup();
}
const desktop = mount(1280);
assert.deepEqual(desktop.state, [0, false], "Etkileşim öncesi tek görsel kalmalı.");
desktop.interact();
desktop.tick();
assert.deepEqual(desktop.state, [1, true], "1280px: etkileşim sonrası carousel dönmeli.");
desktop.resize(1279);
desktop.interact();
desktop.tick();
assert.deepEqual(desktop.state, [0, false], "Daralınca rotasyon durup ilk görsele dönmeli.");
desktop.resize(1280);
desktop.tick();
assert.deepEqual(desktop.state, [0, false], "Genişleyince yeni etkileşim beklenmeli.");
desktop.interact();
desktop.tick();
assert.deepEqual(desktop.state, [1, true], "Genişleyince carousel yeniden çalışabilmeli.");
desktop.cleanup();
desktop.resize(1279);
desktop.interact();
desktop.tick();
assert.deepEqual(desktop.state, [1, true], "Unmount sonrası hiçbir işlem çalışmamalı.");
const reduced = mount(1536, true);
reduced.interact();
reduced.tick();
assert.deepEqual(reduced.state, [0, false], "Reduced motion rotasyonu kapatmalı.");
reduced.cleanup();
assert.match(
  source,
  /fetchPriority=\{i === 0 \? "high" : "auto"\}/,
  "İlk hero görseli yüksek indirme önceliği kullanmalı.",
);

console.log("Mobil hero davranışı doğru.");
