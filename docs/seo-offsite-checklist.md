# SEO off-site checklist

Kod dışı, işletme sahibinin yapacağı işler. Devam eden içerik planı:
`superpowers/plans/2026-08-26-seo-icerik-plani.md`

Kod tarafı doğrulama: `npm run build && node scripts/check-seo.mjs`.

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
- [ ] İndeks kontrolü: sitemap URL'lerini Search Console Sayfa Dizine Ekleme ve URL Denetimi ile doğrula; `site:` araması kesin indeks kanıtı değildir
- [ ] GSC URL Inspection ile yeni sayfaları indekslemeye gönder:
      `/sgk-anlasmali-optik`, `/cam-cerceve-degisimi`, `/cocuk-gozlugu`
- [ ] Rich Results Test: ana sayfa Optician, `/sss` ve hizmet sayfaları
      BreadcrumbList; FAQPage JSON-LD için Schema.org Validator kullanın
- [ ] Mağaza fotoğrafı çekimi (hizmet sayfalarında içerik görseli yok)

## Notlar

- Google FAQ zengin sonuçlarını 7 Mayıs 2026'da kaldırdı. FAQPage verisi
  korunabilir; Google'da FAQ zengin sonucu beklenmemeli.
  Kaynak: https://developers.google.com/search/updates
- Kendi işletmemize verilen yorumlar için `aggregateRating` eklemek, kendi
  sitemizde Google yıldızlı sonuç uygunluğu sağlamaz; yorum sayısı bu kuralı
  değiştirmez. Gerçek müşteri yorumlarını Google İşletme Profili'nde toplayın.
  Kaynak: https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- Sitemap'te gerçek son önemli değişim tarihi tutulmadığı için `lastmod`
  üretilmiyor. Derleme tarihini içerik güncellemesi gibi göstermeyin.
  Kaynak: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Breadcrumb, hizmet sayfalarında ve `/sss` başlığının üstünde görünür;
  ana sayfada gösterilmez. Google'da görünmesi ayrıca garanti değildir.
- NAP tek kaynak `src/lib/business.ts`. GBP, dizinler ve site aynı değerleri
  kullanmalı; e-posta `ebraroptik@gmail.com` olarak tekleştirildi.
- Google İşletme Profili adı tabeladaki gerçek işletme adıyla aynı olmalı.
  Tabelada yoksa isme "Kırıkkale" veya hizmet anahtar kelimeleri eklemeyin;
  konumu adres ve açıklama alanlarında belirtin. Schema'daki `alternateName`,
  profil adına anahtar kelime eklemek için gerekçe değildir.
  Kaynak: https://support.google.com/business/answer/3038177?hl=tr
