# Ebrar Optik SEO İyileştirme Planı

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Yerel aramalarda (Kırıkkale optik / gözlük / lens) görünürlüğü artırmak; teknik SEO hijyeni, zengin schema, indexlenebilir hizmet sayfaları ve ölçüm altyapısını tek seferde tamamlamak.

**Architecture:** Site Next.js 15 App Router + `output: 'export'` (statik). Metadata ve JSON-LD layout/page seviyesinde kalır; yeni sayfalar statik route olarak eklenir. `public/sitemap.xml` ve `public/robots.txt` kaldırılıp build-time `app/sitemap.ts` / `app/robots.ts` ile üretilir. Off-site işler (Search Console, Google İşletme) kod dışı checklist olarak planın sonunda yer alır.

**Tech Stack:** Next.js 15.2.8, React 18, TypeScript, Tailwind 4, schema.org JSON-LD, Vercel static hosting

## Global Constraints

- `output: 'export'` ve `images.unoptimized: true` korunur; SSR-only API / middleware eklenmez
- Dil: `lang="tr"`; tüm kullanıcıya dönük metin Türkçe
- NAP (Name / Address / Phone) tek kaynak: `src/lib/business.ts` — site, schema, iletişim aynı değerleri kullanır
- Marka görünümü bozulmaz; hero’da “dashboard” veya ekstra kart yığını eklenmez
- KVKK sayfası `noindex, nofollow` kalır
- Commit yalnızca kullanıcı isterse; plan adımlarında commit önerisi vardır ama otomatik çalıştırılmaz
- Yeni bağımlılık eklenmez (next-seo, analytics SDK vb. yok); GA4 gerekirse sadece `next/script` + env

---

## File Map

| Dosya | Sorumluluk |
|-------|------------|
| `src/lib/business.ts` | NAP, geo, sosyal URL, opening hours — tek kaynak |
| `src/lib/seo.ts` | Ortak metadata helper, site URL, default OG |
| `src/lib/schema.ts` | Organization / Optician / FAQPage JSON-LD builders |
| `src/app/layout.tsx` | Root metadata (twitter, robots), schema script, tek `<main>` |
| `src/app/page.tsx` | Canonical; nested `<main>` kaldırılır |
| `src/app/sitemap.ts` | Build-time sitemap (tüm public URL’ler) |
| `src/app/robots.ts` | Build-time robots.txt |
| `src/components/sections/HeroSection.tsx` | H1’e yerel anahtar kelime desteği |
| `src/components/sections/FaqSection.tsx` | Ana sayfa veya `/sss` SSS içeriği |
| `src/components/ServicePageLayout.tsx` | Hizmet landing ortak şablon |
| `src/app/gozluk/page.tsx` | Reçeteli gözlük landing |
| `src/app/gunes-gozlugu/page.tsx` | Güneş gözlüğü landing |
| `src/app/lens/page.tsx` | Lens landing |
| `src/app/kirikkale-optik/page.tsx` | Yerel SEO hub sayfası |
| `src/app/sss/page.tsx` | SSS + FAQPage schema |
| `src/components/Navigation.tsx` / `Footer.tsx` | Yeni sayfa linkleri + logo alt |
| `vercel.json` | Asset cache headers |
| `public/sitemap.xml`, `public/robots.txt` | Silinir (çatışma önleme) |

---

### Task 1: Business + SEO helpers (tek kaynak)

**Files:**
- Create: `src/lib/business.ts`
- Create: `src/lib/seo.ts`

**Interfaces:**
- Produces: `business` const, `SITE_URL`, `buildPageMetadata({ title, description, path })`

- [ ] **Step 1: `src/lib/business.ts` oluştur**

```ts
export const business = {
  name: "Ebrar Optik",
  legalName: "Ebrar Optik",
  url: "https://ebrar-optik.com",
  telephone: "+90-506-371-00-71",
  telephoneDisplay: "0506 371 00 71",
  email: "ebraroptik@gmail.com",
  priceRange: "$$",
  address: {
    streetAddress: "Ovacık Mahallesi, Hürriyet Caddesi No: 54/A",
    addressLocality: "Kırıkkale Merkez",
    addressRegion: "Kırıkkale",
    postalCode: "71200",
    addressCountry: "TR",
  },
  geo: {
    latitude: 39.8441708,
    longitude: 33.5033221,
  },
  mapsUrl:
    "https://www.google.com/maps/place/Ebrar+Optik/@39.8441708,33.5033221,17z",
  sameAs: [
    "https://www.instagram.com/ebrar.optik71",
    "https://www.facebook.com/ebraroptik",
  ],
  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ] as const,
    opens: "09:00",
    closes: "19:30",
  },
  areaServed: "Kırıkkale",
} as const;
```

- [ ] **Step 2: `src/lib/seo.ts` oluştur**

```ts
import type { Metadata } from "next";
import { business } from "./business";

export const SITE_URL = business.url;

type PageMetaInput = {
  title: string;
  description: string;
  path: string; // örn. "/gozluk" veya "/"
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Ebrar Optik - Kırıkkale'nin Güvenilir Optik Mağazası",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: hata yok (veya yalnızca önceden var olan, bu dosyalarla ilgili olmayan hatalar)

---

### Task 2: Schema builders

**Files:**
- Create: `src/lib/schema.ts`

**Interfaces:**
- Consumes: `business` from `src/lib/business.ts`
- Produces: `buildLocalBusinessGraph()`, `buildFaqPageSchema(faqs)`

- [ ] **Step 1: `src/lib/schema.ts` yaz**

```ts
import { business } from "./business";

export type FaqItem = { question: string; answer: string };

export function buildLocalBusinessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${business.url}/#organization`,
        name: business.name,
        url: business.url,
        logo: {
          "@type": "ImageObject",
          url: `${business.url}/assets/logo-v2-icon.png`,
          width: 512,
          height: 512,
        },
        image: `${business.url}/og-image.jpg`,
        sameAs: [...business.sameAs],
      },
      {
        "@type": ["Optician", "Store"],
        "@id": `${business.url}/#localbusiness`,
        name: business.name,
        description:
          "Kırıkkale'de profesyonel göz sağlığı hizmetleri, gözlük ve lens satışı.",
        url: business.url,
        telephone: business.telephone,
        email: business.email,
        priceRange: business.priceRange,
        image: `${business.url}/og-image.jpg`,
        hasMap: business.mapsUrl,
        areaServed: {
          "@type": "City",
          name: business.areaServed,
        },
        address: {
          "@type": "PostalAddress",
          ...business.address,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [...business.openingHours.days],
            opens: business.openingHours.opens,
            closes: business.openingHours.closes,
          },
        ],
        parentOrganization: { "@id": `${business.url}/#organization` },
      },
    ],
  };
}

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: PASS (yeni dosyalar için)

---

### Task 3: Root layout metadata + schema + tek main

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `buildPageMetadata`, `buildLocalBusinessGraph`, `business`

- [ ] **Step 1: `layout.tsx` metadata’yı helpers’a taşı**

Root `metadata` şunları içermeli:
- `metadataBase: new URL(business.url)`
- Mevcut title/description (veya `buildPageMetadata` ile home defaults)
- `twitter` card (Task 1 helper)
- `robots: { index: true, follow: true }`
- `icons` aynı kalsın
- JSON-LD: inline object yerine `buildLocalBusinessGraph()`
- `<keywords>` alanını kaldır veya bırakma (Google yok sayıyor; şişirmeye gerek yok)

- [ ] **Step 2: Nested `<main>` düzelt**

`layout.tsx` zaten `<main id="main-content">` sarıyor. `page.tsx` içindeki dış `<main className="flex min-h-screen flex-col">` → `<div className="flex min-h-screen flex-col">` yap.

- [ ] **Step 3: Home canonical koru**

`page.tsx` metadata:

```ts
export const metadata = buildPageMetadata({
  title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
  description:
    "Görüşünüze değer katıyoruz. Ebrar Optik, Kırıkkale'de profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu ile hizmetinizde.",
  path: "/",
});
```

Not: Root layout title ile çakışmayı önlemek için ya layout’ta generic title template kullan (`title: { default, template: "%s | Ebrar Optik" }`) ya da home metadata’yı yalnızca layout’ta tut, page’de sadece `alternates.canonical` bırak. Tercih: layout’ta `title.template`, page’de full home metadata.

- [ ] **Step 4: Build doğrula**

Run: `npm run build`
Expected: başarı; `dist/index.html` içinde tek `role="main"` / tek anlamlı main; JSON-LD’de `"@type":["Optician","Store"]`

---

### Task 4: robots + sitemap (build-time)

**Files:**
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Delete: `public/robots.txt`
- Delete: `public/sitemap.xml`

**Interfaces:**
- Consumes: `SITE_URL`, bilinen route listesi

- [ ] **Step 1: `src/app/robots.ts`**

```ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/kvkk"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
```

- [ ] **Step 2: `src/app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/kirikkale-optik", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gozluk", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gunes-gozlugu", priority: 0.8, changeFrequency: "monthly" },
  { path: "/lens", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sss", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
```

Not: Landing sayfalar henüz yokken sitemap’e eklemek 404 üretir. **Ya Task 5–7 ile aynı PR’da deploy et, ya da sitemap’e yalnızca mevcut route’ları koyup landing’ler gelince genişlet.** Tercih: Task 4’ü Task 7’den sonra uygula veya tek commit’te hepsini çıkar.

- [ ] **Step 3: Eski static dosyaları sil**

```bash
rm public/robots.txt public/sitemap.xml
```

- [ ] **Step 4: Build + çıktı kontrol**

Run: `npm run build && ls dist/robots.txt dist/sitemap.xml && head -40 dist/sitemap.xml`
Expected: dosyalar var; URL’ler `https://ebrar-optik.com/...`; `/kvkk` sitemap’te yok

---

### Task 5: Hero H1 + nav/footer hijyen

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`
- Modify: `src/components/Navigation.tsx`
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Hero H1’i yerel sinyalle güçlendir (markayı ezmeden)**

Mevcut:
`Görüşünüze Değer Katıyoruz`

Önerilen:
- H1: `Kırıkkale Optik | Görüşünüze Değer Katıyoruz` **veya**
- H1 aynı kalsın; hemen altındaki `<p>` ilk cümlesi: `Kırıkkale'nin güvenilir optik mağazası — profesyonel göz sağlığı...`

Tercih (daha az agresif): H1’i değiştirme; supporting sentence’a “Kırıkkale optik” doğal geçsin (zaten kısmen var). Ek: `aria`-dostu görünmez değil, gerçek metin.

Alternatif dengeli H1:
```tsx
<h1 id="hero-heading" className="...">
  Kırıkkale&apos;de Güvenilir Optik
</h1>
<p className="...">
  Görüşünüze değer katıyoruz. Profesyonel göz sağlığı hizmetleri ve geniş
  çerçeve koleksiyonu ile hizmetinizdeyiz.
</p>
```

Marka testi: nav’daki logo hâlâ hero’daki baskın marka sinyali; H1 hizmet+konum.

- [ ] **Step 2: Nav logo**

`Navigation.tsx` içinde `alt=""` → `alt="Ebrar Optik"` (parent’ta `aria-label` var; çifte okuma riski için ya `alt=""` + aria-label kalsın ya da alt doldurup aria-label’ı kaldır. Tercih: `alt="Ebrar Optik"`, `aria-label` kaldır.)

Ana sayfa linklerini `#` yerine `/` yap (canonical path). Hash linkler (`#hakkimizda`) ana sayfada kalır; alt sayfalardan çalışsın diye `/#hakkimizda` kullan.

```ts
const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#hizmetler", label: "Hizmetler" },
  { href: "/#cerceveler", label: "Çerçeveler" },
  { href: "/#iletisim", label: "İletişim" },
];
```

- [ ] **Step 3: Footer aynı path düzeltmesi + hizmet linkleri**

Footer’a “Hizmetler” alt listesi ekle:
- `/gozluk` — Reçeteli Gözlük
- `/gunes-gozlugu` — Güneş Gözlüğü
- `/lens` — Lens
- `/kirikkale-optik` — Kırıkkale Optik
- `/sss` — Sıkça Sorulan Sorular

- [ ] **Step 4: Görsel smoke**

Run: `npm run dev` → `/`, mobil menü, footer linkleri
Expected: hash scroll ana sayfada çalışır; alt sayfadan `/#hizmetler` ana sayfa bölümüne gider

---

### Task 6: Ortak hizmet sayfa şablonu

**Files:**
- Create: `src/components/ServicePageLayout.tsx`
- Create: `src/lib/service-pages.ts` (içerik verisi)

**Interfaces:**
- Produces: `ServicePageLayout({ title, intro, sections, ctaHref })`
- Consumes: mevcut `ContactSection` veya basit CTA → `/#iletisim`

- [ ] **Step 1: İçerik verisi**

`src/lib/service-pages.ts` içinde her sayfa için:
- `slug`, `title`, `description` (meta), `h1`, `intro` (2–3 paragraf), `bullets` (faydalar), `related` (diğer slug’lar)

Metinler unique olmalı; ana sayfadaki ServicesSection cümlelerini birebir kopyalama. Her sayfada “Kırıkkale” doğal geçsin.

- [ ] **Step 2: Layout bileşeni**

Sunucu bileşeni (client gerekmez). Yapı:
1. Breadcrumb: Ana Sayfa → Hizmet
2. H1 + intro
3. 3–5 bullet / kısa bölüm (tek sütun; card spam yok)
4. CTA: “Randevu / İletişim” → `/#iletisim` veya `tel:` + WhatsApp
5. Related links

Mevcut tipografi/renk token’larını kullan (`stone`, `brand`).

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`

---

### Task 7: Landing sayfaları (4 route)

**Files:**
- Create: `src/app/gozluk/page.tsx`
- Create: `src/app/gunes-gozlugu/page.tsx`
- Create: `src/app/lens/page.tsx`
- Create: `src/app/kirikkale-optik/page.tsx`

**Interfaces:**
- Consumes: `buildPageMetadata`, `ServicePageLayout`, `service-pages` data

- [ ] **Step 1: `/gozluk`**

Meta örneği:
- title: `Reçeteli Gözlük | Ebrar Optik Kırıkkale`
- description: `Kırıkkale'de reçeteli optik gözlük. Yüz şeklinize ve yaşam tarzınıza uygun çerçeve seçimi, cam ve montaj hizmeti.`

- [ ] **Step 2: `/gunes-gozlugu`**

Meta: UV koruma, numaralı güneş gözlüğü, Kırıkkale vurgusu.

- [ ] **Step 3: `/lens`**

Meta: günlük/haftalık/aylık/renkli lens.

- [ ] **Step 4: `/kirikkale-optik` (yerel hub)**

Bu sayfa diğer üçüne link verir; adres, saat, harita özeti, “neden Ebrar Optik” kısa blok. Amaç: `Kırıkkale optik` sorgusu.

Her sayfada:

```ts
export const metadata = buildPageMetadata({ title, description, path });
```

- [ ] **Step 5: Ana sayfa ServicesSection kartlarını linkle**

Her service card’ı ilgili landing’e `<a href=...>` veya Next `Link` ile bağla (eş olmayanlar `#iletisim` kalabilir: bakım/onarım).

Eşleme:
- Reçeteli Optik Gözlük → `/gozluk`
- Güneş Gözlüğü / Numaralı Güneş Gözlüğü → `/gunes-gozlugu`
- Lens Çeşitleri → `/lens`
- Diğerleri → `/#iletisim` veya `/sss`

- [ ] **Step 6: Build**

Run: `npm run build`
Expected: `dist/gozluk/index.html`, `gunes-gozlugu`, `lens`, `kirikkale-optik` üretilir; her birinde unique `<title>`

---

### Task 8: SSS sayfası + FAQPage schema

**Files:**
- Create: `src/lib/faqs.ts`
- Create: `src/app/sss/page.tsx`
- Optional: `src/components/sections/FaqSection.tsx` (ana sayfaya 3 soruluk özet)

- [ ] **Step 1: FAQ içeriği (en az 6 soru)**

Örnek sorular:
1. Kırıkkale’de optik muayene yapıyor musunuz? (reçete / yönlendirme gerçeğine göre dürüst cevap)
2. Numaralı güneş gözlüğü yaptırabilir miyim?
3. Lens denemesi / satış koşulları nedir?
4. Çalışma saatleriniz nedir?
5. Randevu gerekli mi? WhatsApp?
6. Çocuk gözlüğü seçiminde nelere dikkat ediyorsunuz?

Cevaplar kısa, doğru, NAP ile uyumlu.

- [ ] **Step 2: `/sss` page**

- `buildPageMetadata({ title: "Sıkça Sorulan Sorular | Ebrar Optik", ... path: "/sss" })`
- Sayfada `Script` veya `<script type="application/ld+json">` ile `buildFaqPageSchema(faqs)`
- Görünür accordion şart değil; semantic `<h2>` soru + `<p>` cevap yeterli (a11y + SEO)

- [ ] **Step 3: Build + schema doğrula**

Run: `npm run build && rg -n "FAQPage" dist/sss/index.html`
Expected: FAQPage JSON-LD mevcut

---

### Task 9: KVKK metadata helper’a geçir + Contact NAP sync

**Files:**
- Modify: `src/app/kvkk/page.tsx`
- Modify: `src/components/sections/ContactSection.tsx` (telefon/adres hardcode → `business`)

- [ ] **Step 1: KVKK**

```ts
export const metadata = buildPageMetadata({
  title: "KVKK Aydınlatma Metni | Ebrar Optik",
  description: "...",
  path: "/kvkk",
  noIndex: true,
});
```

- [ ] **Step 2: ContactSection** adres/tel/email/maps’i `business`’tan oku (string drift önleme)

- [ ] **Step 3: Build**

---

### Task 10: Cache headers (performans / CWV)

**Files:**
- Modify: `vercel.json`

- [ ] **Step 1: Asset kurallarını sıkılaştır**

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.(webp|jpg|jpeg|png|svg|ico)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

HTML hâlâ `max-age=0` (içerik güncellemeleri hemen görünsün).

---

### Task 11: Analytics (opsiyonel, tek script)

**Files:**
- Modify: `src/app/layout.tsx`
- Optional: `.env.example` → `NEXT_PUBLIC_GA_MEASUREMENT_ID`

- [ ] **Step 1: Kullanıcıdan Measurement ID iste** (yoksa bu task’ı atla)

- [ ] **Step 2: `next/script` strategy=`afterInteractive` ile gtag ekle; ID yoksa render etme**

KVKK sayfasında da yüklenir; gerekirse cookie banner ayrı iş (bu planın dışında — yasal metin zaten KVKK’da).

---

### Task 12: İçerik fazı — 2 rehber yazısı (sonraki sprint)

**Files (ileride):**
- Create: `src/app/rehber/page.tsx` (liste)
- Create: `src/app/rehber/cocuk-gozlugu/page.tsx`
- Create: `src/app/rehber/lens-kullanimi/page.tsx`
- Modify: `src/app/sitemap.ts` (yeni URL’ler)

Kapsam bu planda **iskelet + 1. yazı outline** ile sınırlı tutulabilir; tam blog CMS yok.

- [ ] **Step 1: Outline’ları `docs/seo-content-outlines.md` dosyasına yaz** (H2 yapısı, hedef sorgu, 600–900 kelime hedefi)
- [ ] **Step 2: İlk rehberi yayınla veya ertele** — ürün kararı; implementasyon ayrı PR

Bu task kod zorunlu değil; plan kapsamını kapatmak için checklist olarak durur.

---

### Task 13: Off-site checklist (kod dışı)

Deploy sonrası / paralel:

- [ ] Google Search Console: property `https://ebrar-optik.com` → sitemap gönder
- [ ] Bing Webmaster: aynı sitemap
- [ ] Google İşletme Profili: NAP = `business.ts`, kategori Optik / Gözlükçü, fotoğraflar, ürünler, çalışma saatleri
- [ ] GBP ↔ site URL eşlemesi; `hasMap` ile aynı konum
- [ ] Instagram/Facebook bio’da site linki
- [ ] İlk index kontrolü: `site:ebrar-optik.com` (birkaç gün sonra)
- [ ] Rich Results Test: ana sayfa Optician + `/sss` FAQPage
- [ ] Yorum toplama süreci (WhatsApp sonrası kısa istek) — schema `aggregateRating` **yalnızca gerçek yorumlar** gelince eklenir (sahte rating yok)

---

## Doğrulama (tüm kod task’ları bitince)

```bash
npm run build
npx tsc --noEmit
# dist altında:
# - robots.txt, sitemap.xml
# - gozluk, gunes-gozlugu, lens, kirikkale-optik, sss
rg -n "Optician|FAQPage|summary_large_image" dist/index.html dist/sss/index.html
```

Manuel:
1. View-source: tek `<main>`
2. OG debugger / Twitter card validator (deploy URL)
3. Lighthouse SEO ≥ mevcut skor; CLS bozulmasın
4. Mobilde nav `/#` linkleri

---

## Uygulama sırası (bağımlılık)

```
Task 1 → Task 2 → Task 3 → Task 5
                ↘ Task 6 → Task 7 → Task 8 → Task 4 → Task 9 → Task 10
Task 11 (opsiyonel, ID gerekir)
Task 12 (sonraki sprint)
Task 13 (deploy sonrası / paralel)
```

Task 4’ü Task 7–8’den **sonra** çalıştır (sitemap 404 üretmesin).

---

## Self-review

| Öneri (önceki analiz) | Task |
|----------------------|------|
| Twitter cards | 1, 3 |
| Optician schema + image/hasMap/areaServed | 2, 3 |
| Çift main | 3 |
| Dinamik sitemap / robots | 4 |
| robots metadata | 1, 3 |
| Cache headers | 10 |
| Logo alt / nav path | 5 |
| Landing sayfalar | 6, 7 |
| SSS + FAQ schema | 8 |
| NAP tutarlılığı | 1, 9 |
| Hero yerel sinyal | 5 |
| Analytics | 11 |
| Blog/rehber | 12 |
| GSC / GBP / yorumlar | 13 |
| keywords meta kaldırma | 3 |

Placeholder yok; aggregateRating bilerek Task 13’e (gerçek veri şartı) bırakıldı.
