# Web sitesi gizlilik metni doğrulaması — 23 Ekim 2026

## Kapsam

Kullanıcı, web sitesi üzerinden reçete saklanmadığını bildirdi. Güncel ana dal `4018aa20209f3c780ca62481a3816f3e8d2f761a` üzerinden kod incelendi: site statik tanıtım sayfaları ve dış iletişim bağlantıları içeriyor. Reçete/form/sipariş/randevu kaydı işleyen bir web akışı bulunmuyor.

| Önce | Sonra |
| --- | --- |
| Müşteri adı, iletişim bilgileri, reçete ve satın alma geçmişi toplandığı iddiası | Metin web sitesi ziyaretçileriyle sınırlandı; reçete, sağlık bilgileri ve satın alma geçmişinin site üzerinden toplanmadığı açıklandı. |
| Randevu takibi, ürün tedariği ve sağlık hizmeti amaçları | Gerçek kullanım istatistikleri ve tercih kaydını hatırlama amacı. |
| Tercih kaydının zorunlu çerez olarak açıklanması | Karar, tarih ve sürümün tarayıcı yerel depolamasında tutulduğu doğru belirtildi. |
| Yurt dışına tüm aktarımın yalnızca analiz izninden sonra gerçekleştiği izlenimi | Google Analytics izni ile mevcut gömülü Google Haritalar bağlantısı ayrıldı; haritanın izinden bağımsız yüklenmesi açıklandı. |

Rıza metni güncellendiğinden mevcut sürümleme kuralı uyarınca sürüm 1 → 2 artırıldı. Eski kayıtlar karar verilmemiş sayılır; kullanıcılar tekrar seçim yapar. Düğmeler, erişilebilirlik, kayıt anahtarı/veri şekli, analiz ve harita davranışı korunur.

## Tekrarlanabilir doğrulama

Ortam: macOS, Node.js `v24.16.0`, mevcut `package-lock.json` ile aynı bağımlılık kurulumu. Temiz kaynak kopyası; gerçek `.env` veya kullanıcı verisi kopyalanmadı. Komutlar proje kökünden çalıştırıldı.

| Kontrol | Beklenen | Gözlenen |
| --- | --- | --- |
| `npm run build` | Statik çıktı, tür kontrolü ve derleme | PASS, çıkış 0; `/kvkk` dahil sayfalar üretildi. |
| `npx --no-install eslint src/app/kvkk/page.tsx src/components/CookieConsent.tsx` | Değişen kaynakta lint hatası yok | PASS, çıkış 0. |
| `node scripts/check-analytics.mjs` | Dört iletişim tıklama eşleştirmesi ve site içi bağlantı negatif durumu | PASS, çıkış 0. |
| `node scripts/check-seo.mjs` | 13 canonical, JSON-LD, breadcrumb, rehber bağlantıları, robots/sitemap; KVKK noindex | PASS, çıkış 0. |
| Üretilen `dist/kvkk.html` ana içeriğini Python `HTMLParser` ile oku | Eski pozitif veri/amaç iddiaları yok; web kapsamı, localStorage, Google Analytics ve harita açıklaması var | PASS; assert kontrolleri başarılı. |
| Ana dal ve düzeltilmiş kaynakta `npm run lint` çıktısını kök yolları normalleştirerek karşılaştır | Mevcut ilgisiz hatalar değişmemiş | İkisi de çıkış 1; aynı 8 `@typescript-eslint/no-require-imports` hatası. |

Genel lint hataları sadece değişmeyen `scripts/generate-below-footer.js`, `scripts/generate-favicon-ico.js` ve `scripts/generate-og-image.js` dosyalarında. Bu metin düzeltmesi kapsamında bu dosyalar değiştirilmedi; genel lint başarılı olarak raporlanmaz.

## Kanıt sınırı

Bu kayıt yerel kaynak ve üretilen HTML kontrolüdür; canlı yayın, Google hesabı/çerez saklama ayarları, sağlayıcı erişim günlükleri veya tam hukuki uygunluk onayı değildir. Google Haritalar'ın mevcut yüklenme/izin davranışı değiştirilmedi. Mağazadaki veri işleme uygulamaları hakkında varsayım yapılmadı. Sağlayıcı saklama süreleri veya yalnızca rızayla hukuken yeterli yurt dışı aktarım sağlandığı iddiası eklenmedi.

Birincil başvuru: [KVKK Çerez Uygulamaları Hakkında Rehber](https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber). Çerez ve yerel depolama aynı teknoloji olarak sunulmadı. Başvuru, siteye özgü hukuki onay yerine geçmez.
