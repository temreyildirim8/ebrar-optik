# SEO off-site checklist

Kod dışı, işletme sahibinin yapacağı işler. Devam eden içerik planı:
`superpowers/plans/2026-08-26-seo-icerik-plani.md`

## Tamamlandı

- [x] Google Search Console: `https://ebrar-optik.com` property → sitemap gönderildi
- [x] Bing Webmaster: doğrulama dosyası sitede (`public/BingSiteAuth.xml`)
- [x] Yandex Webmaster: doğrulama dosyası sitede (`public/yandex_*.htm`)
- [x] Google İşletme Profili oluşturuldu
- [x] `www.ebrar-optik.com` → apex 308 kalıcı yönlendirme (Vercel Domains)
- [x] GA4 kuruldu (`G-QD5C0Z5B4L`), KVKK uyumlu çerez rızası arkasında

## Açık

- [ ] GBP: en az 10 fotoğraf (dış cephe, vitrin, iç mekan, çalışma alanı, ürün)
- [ ] GBP: hizmet listesi ve "SGK anlaşmalı" bilgisi işletme açıklamasında
- [ ] GBP site URL'si canlı siteye bağlı mı, doğrula
- [ ] Instagram / Facebook bio'da site linki
- [ ] Müşteri yorumu toplama, hedef 10+
- [ ] Index kontrolü: `site:ebrar-optik.com` — 9 sayfa da indekste mi
- [ ] GSC URL Inspection ile yeni sayfaları indekslemeye gönder:
      `/sgk-anlasmali-optik`, `/cam-cerceve-degisimi`, `/cocuk-gozlugu`
- [ ] Rich Results Test: ana sayfa Optician, `/sss` ve hizmet sayfaları FAQPage,
      hizmet sayfaları BreadcrumbList
- [ ] Mağaza fotoğrafı çekimi (hizmet sayfalarında içerik görseli yok)
- [ ] Gerçek yorum sayısı 10'u geçince `aggregateRating` schema eklenebilir —
      sahte rating yok

## Notlar

- NAP tek kaynak `src/lib/business.ts`. GBP, dizinler ve site aynı değerleri
  kullanmalı; e-posta `ebraroptik@gmail.com` olarak tekleştirildi.
- Marka SERP'inde aynı adı taşıyan İstanbul optikleri var. Dış profillerde
  tutarlı şekilde "Ebrar Optik Kırıkkale" adlandırması kullanın; schema'da
  `alternateName` olarak zaten tanımlı.
