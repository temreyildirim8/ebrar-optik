# SEO off-site checklist (deploy sonrası)

- [ ] Google Search Console: `https://ebrar-optik.com` property → sitemap gönder (`/sitemap.xml`)
- [ ] Bing Webmaster: aynı sitemap
- [ ] Google İşletme Profili: NAP = `src/lib/business.ts` ile aynı; kategori Optik/Gözlükçü; fotoğraf ve saatler
- [ ] GBP site URL’si canlı siteye bağlı
- [ ] Instagram / Facebook bio’da site linki
- [ ] Index kontrolü (birkaç gün sonra): `site:ebrar-optik.com`
- [ ] Rich Results Test: ana sayfa Optician + `/sss` FAQPage
- [ ] Gerçek müşteri yorumları toplanınca (sahte rating yok) `aggregateRating` schema eklenebilir
- [ ] GA4 Measurement ID hazırsa `NEXT_PUBLIC_GA_MEASUREMENT_ID` ile layout’a script eklenebilir (bu PR’da ID olmadığı için atlandı)
