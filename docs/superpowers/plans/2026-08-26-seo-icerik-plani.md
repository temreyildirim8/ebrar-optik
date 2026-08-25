# Ebrar Optik SEO İçerik Planı (12 hafta)

> **For agentic workers:** Adımlar checkbox (`- [ ]`) ile takip edilir. Kod dışı adımlar **[Sahibi]** ile işaretlidir; onları ajan yapamaz.

**Goal:** Yerel arama niyetini karşılayan sayfa setini tamamlamak, hizmet sayfalarını destekleyen ince bir rehber katmanı kurmak ve ölçümü sıralama yerine telefon/yol tarifi dönüşümü üzerinden takip etmek.

**Önceki plan:** `2026-08-24-seo-iyilestirme.md` (teknik hijyen, schema, hizmet sayfaları) — tamamlandı, PR #3 ve #4.

## Stratejik çerçeve — önce bunu okuyun

Bu plan kasıtlı olarak **ayda 2 parça** hızında. Yaygın SEO tavsiyesi haftada 3-5 yazı önerir; tek şubeli bir optik için bu yanlıştır.

Organik trafiğin değeri burada coğrafi olarak sınırlı. "sgk gözlük hakkı sorgulama" ülke genelinde yüksek hacimli bir aramadır ama İzmir'den arayan kişi Kırıkkale'ye gelmez. Dönüşüm getiren aramalar "kırıkkale gözlükçü", "sgk anlaşmalı optik kırıkkale" gibi 10-15 terimden ibaret ve bunların çoğu PR #4 ile karşılandı.

Bundan daha önemlisi: **içerik şu an en büyük kaldıraç değil.** Google İşletme Profili ve müşteri yorumları. Yerel pakette çıkmak üç blog yazısından fazla müşteri getirir. Aşağıdaki planda Faz 0 bu yüzden içerik değil.

Arama hacmi ve zorluk değerleri tahmindir; Ahrefs/Semrush bağlı değil. Gerçek veri GSC'de biriktikçe Faz 4'te kuyruk revize edilir.

## Global Constraints

- `output: 'export'` ve `images.unoptimized: true` korunur; SSR/middleware eklenmez
- Yeni bağımlılık eklenmez; rehber sayfaları mevcut `ServicePageLayout` desenini kullanır
- NAP tek kaynak: `src/lib/business.ts`
- Fiyat yazılmaz (sahibinin kararı) — "bütçenize uygun" düzeyinde kalınır
- İşletme hakkında doğrulanmamış iddia yazılmaz: teslim süresi, stok, muayene, marka listesi
- SGK mevzuatı genel düzeyde anlatılır, "güncel durum için mağazadan teyit alın" notu korunur
- Gerçek yorum olmadan `aggregateRating` eklenmez
- Yeni sayfa yayınlandığında `src/app/sitemap.ts` ve footer link listesi güncellenir

---

## Faz 0 — İçerik değil, temel (Hafta 1-2)

En yüksek etkili işler burada ve çoğu kod dışı.

- [ ] **[Sahibi]** Google İşletme Profili: en az 10 fotoğraf (dış cephe, vitrin, iç mekan, çalışma alanı, ürün)
- [ ] **[Sahibi]** GBP hizmet listesi: gözlük, güneş gözlüğü, lens, cam değişimi, çocuk gözlüğü, SGK
- [ ] **[Sahibi]** GBP'ye "SGK anlaşmalı" bilgisini işletme açıklamasına ekle
- [ ] **[Sahibi]** İlk yorum turu: memnun müşterilerden Google yorumu iste, hedef 10+
- [ ] **[Sahibi]** Instagram bio'ya site linki
- [ ] Ana sayfaya SGK güven bandı — sitede "SGK" yalnızca footer linkinde geçiyor, en güçlü ayrışma noktası ana sayfada yok
- [ ] `/kirikkale-optik` başlık ve meta açıklama uzunluk denetimi

## Faz 1 — Mevcut sayfaları güçlendirme (Hafta 1-4)

`/seo-check` bulguları ve pillar yükseltmesi.

- [ ] `/kirikkale-optik` pillar'a çıkarma: 600 → 2000 kelime, hizmet sayfalarına dallanan hub yapısı
- [ ] `/sgk-anlasmali-optik` title 43 → 50-60 karakter, "gözlük hakkı" ifadesini ekle
      Öneri: `SGK Anlaşmalı Optik Kırıkkale | Gözlük Hakkı | Ebrar Optik` (58)
- [ ] Ana sayfa meta açıklaması 135 → 150-160 karakter, SGK ve eylem çağrısı ekle
- [ ] Yedi hizmet sayfasının tamamında title uzunluğunu 50-60 aralığına hizala
- [ ] Numaralı güneş gözlüğü için ayrı sayfa (`/numarali-gunes-gozlugu`) — şu an `/gunes-gozlugu` iki farklı niyeti taşıyor
- [ ] **[Sahibi]** Mağaza fotoğrafı çekimi: hizmet sayfalarında tek görsel logo, içerik görseli yok
- [ ] Çekilen fotoğrafları hizmet sayfalarına yerleştir, alt metinleri anahtar kelimeli yaz

## Faz 2 — Rehber altyapısı (Hafta 3)

Sitede blog yok. Yazı yazmadan önce kurulmalı.

- [ ] `/rehber` liste sayfası (`src/app/rehber/page.tsx`)
- [ ] Rehber içerik modeli (`src/lib/guides.ts`) — `service-pages.ts` desenini izle
- [ ] `GuideLayout` bileşeni: breadcrumb, h1, bölümler, SSS, ilgili hizmet linkleri
- [ ] Rehber sayfalarına `Article` + `BreadcrumbList` + `FAQPage` schema
- [ ] `sitemap.ts` rehber route'larını kapsayacak şekilde güncelle

## Faz 3 — Rehber içerikleri (Hafta 5-11)

| Sıra | Başlık | Hedef sorgu | Niyet | Öncelik | Kelime |
|---|---|---|---|---|---|
| 1 | Gözlük Reçetesi Nasıl Okunur? | gözlük numarası nasıl okunur, sph cyl ax | Bilgilendirici | Quick win | 1200 |
| 2 | Yüz Şekline Göre Gözlük Seçimi | yüz şekline göre gözlük | Ticari | Quick win | 1400 |
| 3 | Cam Tipleri: Anti-Reflet, Mavi Işık, Progresif | anti reflet cam nedir, mavi ışık filtresi | Bilgilendirici | Big bet | 1600 |
| 4 | İlk Kez Lens Kullanacaklara Rehber | lens nasıl takılır, ilk kez lens | Bilgilendirici | Big bet | 1300 |
| 5 | SGK Gözlük Hakkı Sorgulama | sgk gözlük hakkı sorgulama | Bilgilendirici | Fill-in | 1000 |
| 6 | Çocuğunuz Gözlüğünü Takmıyorsa | çocuk gözlük takmıyor | Bilgilendirici | Fill-in | 900 |
| 7 | Lens Bakımı ve Hijyen Kuralları | lens bakımı, lens solüsyonu | Bilgilendirici | Fill-in | 900 |

- [ ] Rehber 1: Gözlük Reçetesi Nasıl Okunur?
- [ ] Rehber 2: Yüz Şekline Göre Gözlük Seçimi
- [ ] Rehber 3: Cam Tipleri
- [ ] Rehber 4: İlk Kez Lens Kullanacaklara Rehber
- [ ] Rehber 5: SGK Gözlük Hakkı Sorgulama
- [ ] Rehber 6: Çocuğunuz Gözlüğünü Takmıyorsa
- [ ] Rehber 7: Lens Bakımı ve Hijyen

## Faz 4 — Ölçüm ve revizyon (Hafta 4, 8, 10, 12)

- [ ] Hafta 4: GSC'de hangi sorguların gösterim aldığını çıkar
- [ ] Hafta 8: **[Sahibi]** ikinci yorum turu + GSC kontrolü
- [ ] Hafta 10: ilk 8 haftanın verisine göre rehber kuyruğunu revize et
- [ ] Hafta 12: çeyrek değerlendirmesi, rakiplerle sıralama karşılaştırması
- [ ] **[Sahibi]** Yorum sayısı 10'u geçtiğinde haber ver → `aggregateRating` schema eklenebilir

---

## 12 haftalık takvim

| Hafta | İş | Tip |
|---|---|---|
| 1 | `/kirikkale-optik` pillar + ana sayfa SGK bandı + title/meta düzeltmeleri | Sayfa |
| 2 | GBP fotoğraf, hizmet listesi, ilk yorum turu | **[Sahibi]** |
| 3 | Rehber altyapısı + numaralı güneş gözlüğü sayfası | Altyapı |
| 4 | GSC kontrolü | Ölçüm |
| 5 | Rehber 1: Gözlük reçetesi nasıl okunur | Rehber |
| 6 | Mağaza fotoğrafı çekimi ve yerleştirme | **[Sahibi]** + kod |
| 7 | Rehber 2: Yüz şekline göre gözlük | Rehber |
| 8 | Yorum turu + GSC kontrolü | Ölçüm |
| 9 | Rehber 3: Cam tipleri | Rehber |
| 10 | Kuyruk revizyonu | Strateji |
| 11 | Rehber 4: İlk kez lens | Rehber |
| 12 | Çeyrek değerlendirmesi | Ölçüm |

Rehber 5, 6 ve 7 ikinci çeyreğe kalır; kuyruk 10. haftada GSC verisiyle yeniden sıralanır.

## Konu haritası

```
PILLAR: /kirikkale-optik  (600 → 2000 kelime)
│
├── SGK ve gözlük hakkı        → /sgk-anlasmali-optik ✓
│   └── Rehber 5: hak sorgulama
├── Gözlük seçimi              → /gozluk ✓
│   ├── Rehber 1: reçete okuma
│   ├── Rehber 2: yüz şekli
│   └── Rehber 3: cam tipleri
├── Lens                       → /lens ✓
│   ├── Rehber 4: ilk kez lens
│   └── Rehber 7: bakım ve hijyen
├── Çocuk gözlüğü              → /cocuk-gozlugu ✓
│   └── Rehber 6: gözlüğe alışma
├── Güneş gözlüğü              → /gunes-gozlugu ✓
│   └── /numarali-gunes-gozlugu (yeni)
└── Servis                     → /cam-cerceve-degisimi ✓
```

## İç linkleme kuralları

Hub-and-spoke: `/kirikkale-optik` merkez, hizmet sayfaları ona ve birbirine bağlı (PR #4'te kuruldu).

Her rehber yazısı için: **en az bir** hizmet sayfasına link, **tam olarak bir** dönüşüm CTA'sı. Hizmet sayfaları da ilgili rehbere geri bağlanır, tek yön olmaz.

| Rehber | Bağlanacağı hizmet sayfası |
|---|---|
| Reçete okuma | `/gozluk`, `/sgk-anlasmali-optik` |
| Yüz şekli | `/gozluk`, `/gunes-gozlugu` |
| Cam tipleri | `/gozluk`, `/cam-cerceve-degisimi` |
| İlk kez lens | `/lens` |
| Lens bakımı | `/lens` |
| Çocuk gözlük takmıyorsa | `/cocuk-gozlugu` |
| SGK hakkı sorgulama | `/sgk-anlasmali-optik` |

## Başarı metrikleri

Sıralama ara metriktir. Bir optik için gerçek dönüşüm telefon araması ve yol tarifi talebidir.

| Metrik | Kaynak | 3 aylık hedef |
|---|---|---|
| İndekslenen sayfa | GSC | 9/9 |
| Marka dışı gösterim | GSC | Sıfırdan ölçülebilir seviyeye |
| "kırıkkale optik/gözlükçü" ortalama pozisyon | GSC | İlk 10 |
| Yerel pakette görünme | GBP Insights | Hedef: var |
| GBP → telefon araması | GBP Insights | Taban ölçüm + artış |
| Google yorum sayısı | GBP | 10+ |
| Yayınlanan içerik | — | 4 rehber + 2 sayfa |

İlk ay sıralama beklenmemeli; yeni sayfalarda anlamlı veri 6-8 haftadan önce oluşmaz.

## Kapsam dışı — bilinçli olarak yapılmayacaklar

- **Ulusal karşılaştırma içerikleri** ("en iyi gözlük markaları", "gözlük fiyatları 2026"): Atasun ve e-ticaret siteleriyle yarışılır, kazanılsa bile gelen trafik müşteriye dönüşmez
- **İlçe başına ayrı sayfa** (Bahşili optik, Yahşihan gözlükçü): doorway page olarak okunur ve ceza riski taşır. İlçeler `/kirikkale-optik` içinde tek bölümde geçiyor
- **Haftada 3-5 yazı temposu**: sürdürülemez, üç ay sonra terk edilir
- **Sayfaya özel OG görselleri**: üretim maliyeti kazancından yüksek, şimdilik atlandı
- **Uydurma `aggregateRating`**: Google yapısal veri politikasına aykırı
