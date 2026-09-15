# Graph Report - ebrar-optik  (2026-09-15)

## Corpus Check
- 60 files · ~249,305 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 387 nodes · 504 edges · 26 communities (21 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `842e339b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app/page.tsx
- seo.ts
- dependencies
- compilerOptions
- File Map
- layout.tsx
- devDependencies
- components.json
- Ebrar Optik SEO ve Gözlük Rehberi Planı
- CookieConsent.tsx
- Ebrar Optik Görsel İçerik Planı
- Phase 1 Plan 1: Subtle Fade + Slide on Key Elements Summary
- Ebrar Optik - Showroom Web Sitesi
- Design Context
- generate-favicon-ico.js
- ProtectedImage.tsx
- Ebrar Optik Görsel İçerik Görevleri
- generate-below-footer.js
- ContentProtectionProvider.tsx
- generate-og-image.js
- check-mobile-hero.mjs
- check-seo.mjs
- vercel.json
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `File Map` - 14 edges
3. `buildPageMetadata()` - 11 edges
4. `cn()` - 11 edges
5. `Ebrar Optik SEO ve Gözlük Rehberi Planı` - 11 edges
6. `Ebrar Optik Görsel İçerik Planı` - 11 edges
7. `ServicePageLayout()` - 10 edges
8. `business` - 10 edges
9. `Ebrar Optik - Showroom Web Sitesi` - 10 edges
10. `include` - 9 edges

## Surprising Connections (you probably didn't know these)
- `ServicePageLayout()` --calls--> `buildBreadcrumbSchema()`  [EXTRACTED]
  src/components/ServicePageLayout.tsx → src/lib/schema.ts
- `ServicePageLayout()` --calls--> `buildFaqPageSchema()`  [EXTRACTED]
  src/components/ServicePageLayout.tsx → src/lib/schema.ts
- `CardHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardTitle()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts
- `CardDescription()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/card.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (26 total, 5 thin omitted)

### Community 0 - "app/page.tsx"
Cohesion: 0.10
Nodes (28): metadata, AnimatedHeroBackground(), images, FadeIn, HeroReveal, Parallax, RevealProps, ScaleIn (+20 more)

### Community 1 - "seo.ts"
Cohesion: 0.10
Nodes (18): metadata, metadata, metadata, metadata, metadata, metadata, dynamic, metadata (+10 more)

### Community 2 - "dependencies"
Cohesion: 0.06
Nodes (31): @base-ui/react, class-variance-authority, clsx, lucide-react, next, dependencies, @base-ui/react, class-variance-authority (+23 more)

### Community 3 - "compilerOptions"
Cohesion: 0.06
Nodes (30): dist/dev/types/**/*.ts, dist/types/**/*.ts, dom, dom.iterable, esnext, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts (+22 more)

### Community 4 - "File Map"
Cohesion: 0.07
Nodes (23): Açık, Notlar, SEO off-site checklist, Tamamlandı, Doğrulama (tüm kod task’ları bitince), Ebrar Optik SEO İyileştirme Planı, File Map, Global Constraints (+15 more)

### Community 5 - "layout.tsx"
Cohesion: 0.14
Nodes (15): metadata, jsonLd, metadata, metadata, SssPage(), FloatingSocialButtons(), Footer(), Navigation() (+7 more)

### Community 6 - "devDependencies"
Cohesion: 0.09
Nodes (23): babel-plugin-react-compiler, eslint, eslint-config-next, devDependencies, babel-plugin-react-compiler, eslint, eslint-config-next, png-to-ico (+15 more)

### Community 7 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 8 - "Ebrar Optik SEO ve Gözlük Rehberi Planı"
Cohesion: 0.11
Nodes (18): Başlangıç durumu ve varsayımlar, Blogun amacı ve sayfa yapısı, Ebrar Optik SEO ve Gözlük Rehberi Planı, Faz 1 — Görünürlüğü ölç ve fırsatları seç, Faz 2 — Google İşletme Profili’ni tamamla, Faz 3 — Müşteri eylemlerini doğrula, Faz 4 — Mevcut hizmet sayfalarını güçlendir, Faz 5 — Üç yazılık Gözlük Rehberi (+10 more)

### Community 9 - "CookieConsent.tsx"
Cohesion: 0.18
Nodes (14): cerezTercihleriniSifirla(), CookieConsent(), Decision, getServerSnapshot(), getSnapshot(), kaydet(), listeners, notify() (+6 more)

### Community 10 - "Ebrar Optik Görsel İçerik Planı"
Cohesion: 0.14
Nodes (14): Amaç, Başarı ölçütleri, Dekoratif illüstrasyon komutu, Dosya ve performans kuralları, Ebrar Optik Görsel İçerik Planı, Fotoğraf düzenleme komutları, Görsel yaklaşım, Ortak gerçek fotoğraf düzenleme komutu (+6 more)

### Community 11 - "Phase 1 Plan 1: Subtle Fade + Slide on Key Elements Summary"
Cohesion: 0.15
Nodes (12): Commits, Deviations from Plan, Objective, One-liner, Phase 1 Plan 1: Subtle Fade + Slide on Key Elements Summary, Self-Check: PASSED, Success Criteria Met, Task 1: Animate key elements in AboutSection (+4 more)

### Community 12 - "Ebrar Optik - Showroom Web Sitesi"
Cohesion: 0.17
Nodes (11): Build, Dağıtım (Deployment), Ebrar Optik - Showroom Web Sitesi, Geliştirme, Kurulum, Lisans, Mevcut Bileşenler, Ortam Değişkenleri (+3 more)

### Community 13 - "Design Context"
Cohesion: 0.20
Nodes (9): Aesthetic Direction, Brand Personality, Color Reference, Design Context, Design Principles, Impeccable Design Context, Spacing Scale, Technical Notes (+1 more)

### Community 14 - "generate-favicon-ico.js"
Cohesion: 0.25
Nodes (8): fs, generateIco(), icoPath, path, sharp, sizes, svgBuffer, svgPath

### Community 15 - "ProtectedImage.tsx"
Cohesion: 0.31
Nodes (6): ProtectedImage(), ProtectedImageProps, Watermark(), WatermarkProps, useImageProtection(), UseImageProtectionOptions

### Community 16 - "Ebrar Optik Görsel İçerik Görevleri"
Cohesion: 0.22
Nodes (8): Checkpoint: Görsel onayı, Checkpoint: Teknik kalite, Ebrar Optik Görsel İçerik Görevleri, Task 1: Gerçek çekimleri toplama, Task 2: Görsel seçimi ve düzenleme, Task 3: Görselleri web için hazırlama, Task 4: Hizmet sayfalarına entegrasyon, Task 5: Ana sayfa ve SSS entegrasyonu

### Community 17 - "generate-below-footer.js"
Cohesion: 0.33
Nodes (3): path, sharp, src

### Community 18 - "ContentProtectionProvider.tsx"
Cohesion: 0.60
Nodes (4): ContentProtectionProvider(), useKeyboardProtection(), useTextProtection(), UseTextProtectionOptions

### Community 19 - "generate-og-image.js"
Cohesion: 0.50
Nodes (4): fs, generateOGImage(), path, sharp

### Community 22 - "vercel.json"
Cohesion: 0.50
Nodes (3): headers, rewrites, $schema

## Knowledge Gaps
- **212 isolated node(s):** `$schema`, `style`, `rsc`, `tsx`, `config` (+207 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `business` connect `layout.tsx` to `app/page.tsx`, `seo.ts`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `dependencies`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `$schema`, `style`, `rsc` to the rest of the system?**
  _212 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09634146341463415 - nodes in this community are weakly interconnected._
- **Should `seo.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10121457489878542 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.0625 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._