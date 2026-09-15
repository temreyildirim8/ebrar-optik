# Ebrar Optik SEO ve Gözlük Rehberi Planı

**Güncelleme:** 15 Eylül 2026

**Durum:** Uygulama planı; aşağıdaki işler tamamlanmış sayılmaz.

**Amaç:** Kırıkkale’de ilgili aramalardan gelen ziyaretçilerin telefon, WhatsApp ve yol tarifi adımlarına geçmesini, ardından gerçek mağaza ziyaretlerini artırmak.

## Karar ve kapsam

Öncelik sırası: **Search Console verisi → Google İşletme Profili → dönüşüm takibi → mevcut içerik → üç yazılık rehber denemesi.**

Blog önerisi: `/rehber` altında “Gözlük Rehberi” adıyla küçük bir bölüm açmak. İlk üç yazı, mağazada sık sorulan ve hizmet seçimini kolaylaştıran soruları cevaplayacak. Ayda en fazla iki yazı hazırlamak başlangıç için bir iş yükü tercihidir; SEO gerekliliği değildir. Konular gerçek sorgular ve müşteri sorularıyla doğrulanır.

Bu güncelleme önceki planın sabit kelime/başlık uzunluğu hedeflerini, veri olmadan belirlenen yedi yazılık kuyruğunu ve sıralama taahhütlerini değiştirir. Tarihli dosya yolu mevcut bağlantıları korumak için aynı kalır.

İlgili belgeler:

- [Önceki teknik SEO planı](2026-08-24-seo-iyilestirme.md)
- [Kod dışı SEO kontrol listesi](../../seo-offsite-checklist.md)
- [Gerçek fotoğraf çekim ve yerleştirme planı](../../../tasks/plan.md)

## Başlangıç durumu ve varsayımlar

- Yerel kodda sitemap dokuz URL içeriyor; bu sayı Google’da indekslenmiş sayfa sayısı değildir.
- Gözlük, güneş gözlüğü, lens, çocuk gözlüğü, SGK ve cam/çerçeve değişimi için hizmet sayfaları var. Rehber bölümü henüz yok.
- `src/lib/analytics.ts` telefon, WhatsApp, yol tarifi ve Instagram tıklamalarını ayırt ediyor. Canlı GA4 alımı ve raporlar panelden ayrıca doğrulanacak.
- Güncel Search Console ve İşletme Profili verileri incelenmedi. En büyük darboğazın içerik olduğu henüz kanıtlanmış değil.
- Hedef, Kırıkkale mağazasına müşteri kazandırmak. Hizmet kapsamını, gerçek fotoğrafları ve işletmeye özgü bilgileri işletme sahibi doğrular.

**Sorumlular:** “Kod/içerik” repo değişikliklerini hazırlayan kişi veya ajanı, “Sahibi” işletme bilgisini ve panel erişimini sağlayan kişiyi ifade eder. Panel işi, kodda uygulama bulunmasına dayanılarak tamamlandı işaretlenmez.

## Faz 1 — Görünürlüğü ölç ve fırsatları seç

**Sorumlu:** Sahibi + kod/içerik

**Zaman:** İlk hafta

- [ ] Search Console’da son üç ayı önceki üç ayla karşılaştır; site daha yeniyse mevcut tarih aralığını ve veri sınırını kaydet.
- [ ] Marka adını içeren sorguları ayır; marka dışı sorgu ve sayfa bazında gösterim, tıklama, tıklama oranı ve ortalama konumu çıkar. Mobil/masaüstü ayrımını incele.
- [ ] “Kırıkkale optik”, “Kırıkkale gözlükçü” ve hizmet aramalarını fırsat adayı olarak değerlendir; arama hacimlerini tahmin edilmiş gerçekler gibi kullanma.
- [ ] Gösterim alan ancak az tıklanan sayfalarda sorgu, başlık, açıklama ve içerik uyumunu incele. Tek başına düşük tıklama oranını başlık hatası sayma; konumu da değerlendir.
- [ ] Dokuz sitemap URL’sinin indeks durumunu Search Console’dan kontrol et; sorunlu olanlarda URL Denetimi ile canonical ve erişim durumunu incele. `site:` aramasını kesin indeks kanıtı kabul etme.
- [ ] En fazla üç öncelikli mevcut sayfa seç; her biri için sorgu, sorun, önerilen değişiklik ve başlangıç değerlerini kaydet.

**Tamamlanma ölçütü:** Tarihli başlangıç raporu ve veriye dayalı üç sayfalık iş listesi. Veri yetersizse bu açıkça yazılır; mağazada sık gelen sorular geçici konu kaynağı olur.

## Faz 2 — Google İşletme Profili’ni tamamla

**Sorumlu:** Sahibi

**Zaman:** İlk iki hafta; Faz 1 sonrası, ölçüm kurulumu ile birlikte ilerleyebilir

- [ ] Profil sahipliği/doğrulamasını ve yönetici erişimini panelden kontrol et.
- [ ] Gerçek işletme adı, kategori, adres, telefon, site bağlantısı ve özel günler dahil çalışma saatlerini doğrula. İsim, adres ve telefon `src/lib/business.ts` ile tutarlı olsun.
- [ ] Gerçekte sunulan hizmetleri ekle; SGK anlaşması bilgisini işletme sahibi doğruladıktan sonra belirt.
- [ ] Dış cephe, tabela, iç mekân, ürünler ve çalışma alanını gösteren güncel gerçek fotoğrafları seçip ekle. Çekim planındaki görselleri yeniden kullan.
- [ ] Gerçek müşterilere tarafsız yorum daveti için kolay erişilen yorum bağlantısı hazırla; yorumlara düzenli yanıt ver.
- [ ] Instagram/Facebook profillerindeki site ve iletişim bilgilerini doğrula.
- [ ] Panelin sunduğu arama terimlerini, görüntülemeleri, arama/site/yol tarifi etkileşimlerini mevcut dönem için kaydet.

**Tamamlanma ölçütü:** Kontrollerin tarih ve panel kanıtı ile kaydı, eksik bilgilerin tamamlanması, fotoğrafların yayında olması ve tekrar kullanılabilir yorum daveti süreci.

Google yerel sonuçları alaka, mesafe ve bilinirlik üzerinden değerlendirir; eksiksiz bilgiler ve gerçek müşteri yorumları bu çalışmanın parçasıdır. Fotoğraf sayısı veya yorum sayısı için bir sıralama eşiği varsayılmaz. [Google yerel sıralama rehberi](https://support.google.com/business/answer/7091?hl=tr)

## Faz 3 — Müşteri eylemlerini doğrula

**Sorumlu:** Kod/içerik + Sahibi

**Zaman:** İlk iki hafta; içerik değişikliklerinin başlangıç ölçümünden önce

- [ ] Canlı sitede çerez rızasından sonra telefon, WhatsApp ve yol tarifi bağlantılarını ayrı ayrı test et.
- [ ] `phone_click`, `whatsapp_click`, `directions_click` olaylarının GA4 Realtime/DebugView içinde doğru adla, tek tıklamada tek olay olarak alındığını doğrula; test trafiğini değerlendirme notuna ekle.
- [ ] Bu üç müşteri niyeti olayının GA4 önemli etkinlik ayarlarını panelden kontrol et. `instagram_click` ayrı bir yardımcı etkileşim olarak kalsın.
- [ ] Organik aramadan gelen oturumlar için açılış sayfası ve olay türü kırılımını hazırla; rehberlerin giriş sayfası olduğu oturumları ayrıca izle.
- [ ] Mevcut sayfa/oturum verisi yeterliyse yeni olay ekleme. Rehberden hizmete geçiş için ek ölçüm gerekiyorsa önce mevcut raporun neden yetmediğini kaydet.
- [ ] Mağazada “Bizi nereden buldunuz?” sorusuyla kişisel veri toplamadan haftalık toplam ziyaret/satış kaynağı notu tut.

**Tamamlanma ölçütü:** Üç olay için canlı panel doğrulaması ve tarihli başlangıç raporu. Tıklama, gerçekleşen telefon görüşmesi, mağaza ziyareti veya satış olarak raporlanmaz. Çerez rızası nedeniyle ölçümün tüm ziyaretçileri kapsamadığı belirtilir; GBP ile GA4 sayıları tekil müşteri toplamı gibi toplanmaz.

## Faz 4 — Mevcut hizmet sayfalarını güçlendir

**Sorumlu:** Kod/içerik + işletme bilgisi için Sahibi

**Zaman:** 2–4. haftalar

- [ ] Faz 1’de seçilen sayfaların başlık ve açıklamalarını hedeflenen gerçek sorguya göre düzenle; sabit karakter/kelime sayısını başarı ölçütü yapma.
- [ ] `/kirikkale-optik` sayfasında konum, ulaşım, çalışma saatleri ve ilgili hizmet bağlantılarını kullanıcının kolay bulabildiğini kontrol et.
- [ ] Öncelikli hizmet sayfalarına gerçek fotoğraf, hizmet süreci, seçimde etkili ayrıntılar ve mağazada sık sorulan soruları ekle.
- [ ] Ana sayfada doğrulanmış SGK bilgisi ve ilgili hizmet bağlantısının görünürlüğünü kontrol et; mevcut içeriği tekrar üretme.
- [ ] Telefon, WhatsApp ve yol tarifine mobil erişimi kontrol et; ilgili hizmetler arasında açıklayıcı bağlantılar kullan.
- [ ] Fotoğrafların boyutlarını ve yükleme davranışını kontrol et. Search Console Core Web Vitals saha verisini, PageSpeed ölçümünü teknik teşhis için değerlendir; az trafikte saha verisi olmamasını hata sayma.

**Tamamlanma ölçütü:** Seçilen sayfalardaki belirli kullanıcı sorularının cevaplanması, gerçek işletme bilgilerinin doğrulanması ve mobil iletişim akışının çalışması.

## Faz 5 — Üç yazılık Gözlük Rehberi

**Sorumlu:** Kod/içerik; mağaza deneyimi ve doğruluk kontrolü için Sahibi

**Zaman:** 4–8. haftalar; konular Faz 1 sonuçlarıyla kesinleşir

### İlk konu adayları

| Konu | Cevaplanacak soru | İlgili hizmet | Özgün katkı |
|---|---|---|---|
| Mevcut çerçeveme yeni cam takılabilir mi? | Hangi durumlarda mağazada uygunluk kontrolü gerekir? | `/cam-cerceve-degisimi` | Gerçek çerçeve örnekleri ve mağazadaki değerlendirme süreci |
| Gözlük çerçevesi seçerken ölçü ve oturuş | Köprü, sap ve çerçeve ölçüsünde nelere bakılır? | `/gozluk` | Gerçek ürünler üzerinden ölçü/oturuş örnekleri |
| Numaralı güneş gözlüğü seçerken nelere bakılır? | Çerçeve ve kullanım ihtiyacı seçimi nasıl etkiler? | `/gunes-gozlugu` | Mağazada sunulan seçenekler ve doğrulanmış ürün örnekleri |

- [ ] Her konu için mevcut hizmet sayfasını kontrol et. Ayrı soruya yeterli özgün cevap yoksa yeni URL açmak yerine mevcut sayfayı iyileştir.
- [ ] Mağaza ekibinden gerçek soruları, örnekleri ve fotoğrafları topla; üç yazının kapsamını bunlarla kesinleştir.
- [ ] `/rehber` liste sayfasını ve üç yazı sayfasını mevcut Next.js statik dışa aktarma yapısıyla hazırla.
- [ ] Mevcut sayfa düzeni, metadata, breadcrumb ve iletişim bileşenlerini uygun olduğu ölçüde kullan. İlk sürümde CMS, arama, kategori sistemi veya yeni bağımlılık ekleme.
- [ ] Her yazıda doğrudan cevap, karar vermeye yardımcı örnekler, ilgili hizmet bağlantısı ve bağlama uygun iletişim çağrısı bulunsun. Hizmet sayfasından ilgili rehbere geri bağlantı ver.
- [ ] İçeriği gerçekten hazırlayan/kontrol eden kişiyi doğru biçimde belirt; unvan veya uzmanlık uydurma. Yayın tarihi gerçek olsun; güncelleme tarihi yalnızca anlamlı değişiklikte yenilensin.
- [ ] Benzersiz başlık/açıklama ve canonical ekle; sitemap ve site içi erişimi güncelle. Article/BreadcrumbList verisi kullanılacaksa yalnızca görünür, gerçek bilgileri temsil etsin.
- [ ] Yazıları işletme bilgisi kontrolünden geçirip yayınla; Search Console’dan URL’leri incele ve indeks durumunu takip et.

**İçerik ilkeleri:** Sabit kelime hedefi yok. Kırıkkale ifadesi yalnızca bağlam gerektiriyorsa kullanılır. Fiyat, stok, teslim süresi ve hizmet iddiaları doğrulanmadan yazılmaz; mevcut fiyat yayımlamama tercihi korunur. Sağlık veya SGK mevzuatı kapsamına giren bilgiler yazılacaksa güncel birincil kaynak ve uygun uzman kontrolü gerekir. İlk deneme ürün seçimi ve mağaza sürecine odaklanır.

Google’ın içerik rehberi özgün katkı, gerçek deneyim, güvenilirlik ve kullanıcının sorusunu cevaplamayı öne çıkarır. Üç yazı ve ayda iki yayın tercihi bu proje için öneridir; Google’ın sayısal şartı değildir. [Google faydalı içerik rehberi](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

**Tamamlanma ölçütü:** Üç ayrı soruyu cevaplayan, doğrulanmış, hizmete bağlı, mobilde okunabilir yazılar; çalışan bağlantılar ve ölçüm; sitemap’te yer alan erişilebilir URL’ler. İndeks veya sıralama garantisi verilmez.

### Blogun amacı ve sayfa yapısı

Rehberin görevi, gözlük seçerken veya mevcut gözlüğünü yenilerken karar veremeyen kişiye yardımcı olmak ve mağazaya gelmeden önce sorusunu cevaplamaktır. Hizmet sayfası mağazada ne sunulduğunu anlatır; rehber belirli bir soruyu örneklerle açıklar. Aynı metin iki sayfaya dağıtılmaz.

- `/rehber` başlığı “Gözlük Rehberi” olur. Kısa bir açıklama ve yayımlanmış yazıların başlık/özet bağlantıları yeterlidir.
- Yazı akışı: soruya kısa cevap → açıklayıcı alt başlıklar → gerçek örnek/fotoğraf → ilgili hizmet ve iletişim adımı.
- Site menüsü veya footer üzerinden rehbere erişim sağlanır; yalnızca yayındaki yazılara bağlantı verilir.
- Breadcrumb akışı “Ana Sayfa → Gözlük Rehberi → Yazı” olur. Hizmet sayfası breadcrumb’ı yazıya aynen kopyalanmaz.
- Aşağıdaki URL ve başlıklar taslaktır; Faz 1 verisiyle yayın öncesinde kesinleştirilir.

### Yazı 1 — Mevcut çerçeveme yeni cam takılabilir mi?

**Taslak URL:** `/rehber/mevcut-cerceveye-yeni-cam`

**Okurun kararı:** Mevcut çerçevesini değerlendirmek üzere mağazaya getirmek.

İçerik akışı:

1. Kısa cevap: uygunluğun çerçeve ve istenen cam birlikte değerlendirilerek belirlenmesi; her çerçeveye uygunluk sözü verilmemesi.
2. Mağazada hangi çerçeve özelliklerinin kontrol edildiği; açıklama işletme ekibinin gerçek uygulamasından alınır.
3. Mevcut çerçeveyi kullanmak ile yeni çerçeve seçmek arasındaki karar noktaları.
4. Kişisel veri içermeyen gerçek bir çerçeve örneği ve değerlendirme fotoğrafı.
5. Müşterinin gelirken yanında getirmesi gerekenler; liste işletme sahibince doğrulanır.

- [ ] İşletmeden bir örnek, bir fotoğraf ve en sık gelen üç soruyu al.
- [ ] `/cam-cerceve-degisimi` içeriğiyle tekrarı ayıkla ve iki yönlü bağlantıları ekle.
- [ ] İletişim çağrısını “Çerçevenizin değerlendirilmesi için bize ulaşın” gibi koşulsuz uygunluk vaat etmeyen bir metinle hazırla.

### Yazı 2 — Gözlük çerçevesi seçerken ölçü ve oturuş

**Taslak URL:** `/rehber/gozluk-cercevesi-olcu-ve-oturus`

**Okurun kararı:** Deneme sırasında nelere dikkat edeceğini öğrenmek ve uygun çerçeve seçimi için mağazaya başvurmak.

İçerik akışı:

1. Rahat oturuşu değerlendirirken sorulacak temel sorular.
2. Çerçeve üzerindeki ölçülerin gerçek bir ürün fotoğrafında açıklanması.
3. Köprü, sap ve çerçeve genişliğinin deneme sırasında nasıl değerlendirildiği.
4. Tek başına yüz şekli veya bir ölçüye dayanarak seçim yapmanın sınırları; mağazada deneme ve ayar süreci.
5. Mağazadaki gerçek bir seçim örneği üzerinden kısa kontrol listesi.

- [ ] Gerçek ürün üzerindeki ölçüleri gösteren fotoğrafı ve ekibin deneme kontrol listesini al.
- [ ] `/gozluk` sayfasıyla iki yönlü bağlantı kur; genel hizmet tanıtımını tekrarlama.
- [ ] İletişim çağrısını mağazada çerçeve deneme ve seçim desteğine bağla.

### Yazı 3 — Numaralı güneş gözlüğü seçerken nelere bakılır?

**Taslak URL:** `/rehber/numarali-gunes-gozlugu-secimi`

**Okurun kararı:** Kendi kullanım ihtiyacına göre mağazada hangi seçenekleri soracağını belirlemek.

İçerik akışı:

1. Günlük kullanım ve kullanım ortamını netleştiren kısa sorular.
2. Çerçeve ve cam seçeneklerinin birlikte değerlendirilmesi; uygunluğun kişiye ve ürüne göre doğrulanması.
3. Sunulan cam özelliklerinin ürün belgelerine dayanarak açıklanması; özelliklerin birbirinin yerine geçtiğinin varsayılmaması.
4. Mağazada gerçekten sunulan seçeneklerden bir ürün örneği.
5. Görüşme öncesinde hazırlanabilecek sorular ve mağazadaki seçim süreci.

- [ ] Sunulan seçenekleri, ürün özelliklerini ve kullanılacak fotoğrafı işletme sahibinden doğrula.
- [ ] `/gunes-gozlugu` sayfasıyla iki yönlü bağlantı kur; ayrı bir hizmet URL’si ihtiyacını bu yazıdan bağımsız değerlendir.
- [ ] İletişim çağrısını “Size uygun seçenekleri görüşmek için bize ulaşın” düzeyinde tut; doğrulanmamış stok, fiyat veya teslim sözü ekleme.

### Hazırlık ve yayın sırası

| Dönem | İş | Çıkış koşulu |
|---|---|---|
| 4. hafta | Üç konuyu sorgu ve mağaza sorularıyla doğrula; ilk yazının örneklerini topla | Her konu mevcut hizmet sayfasından farklı bir soruyu karşılıyor |
| 5. hafta | Rehber liste sayfası ve Yazı 1 | Doğruluk, bağlantı, mobil görünüm ve ölçüm kontrolleri tamam |
| 6. hafta | Yazı 2 taslağı ve gerçek görseller | İşletme kontrolü tamam |
| 7. hafta | Yazı 2 yayını, Yazı 3 taslağı | İki yönlü hizmet bağlantıları ve teknik kontroller tamam |
| 8. hafta | Yazı 3 yayını | Ürün bilgisi kontrolü ve yayın kontrolleri tamam |

Bu takvim hazırlık kapasitesine göre kaydırılabilir. Veri veya gerçek örnekler hazır değilse konu değiştirilir ya da yayın ertelenir. Üçüncü yazıyı yayımlamak için ilk yazının sıralama kazanması beklenmez; denemeyi büyütme kararı Faz 6 ölçümlerinden sonra verilir.

### Her yazı için yayın kontrolü

- [ ] Okurun sorusu girişte açıkça cevaplanıyor; metin hizmet sayfasının kopyası değil.
- [ ] İşletmeye özgü en az bir doğrulanmış örnek var; fotoğraf kullanılıyorsa gerçek sahneyi gösteriyor ve alternatif metni bunu tarif ediyor.
- [ ] Yazar/kontrol eden kişi, ürün bilgileri ve kullanılan kaynaklar doğru.
- [ ] İlgili hizmet bağlantısı, geri bağlantı ve iletişim çağrısı çalışıyor.
- [ ] Yazı ve rehber listesi üretilen statik çıktıda erişilebilir; başlık, canonical, breadcrumb ve sitemap kontrolleri tamam.
- [ ] Yayın tarihi ve başlangıç ölçüm dönemi kaydedildi; Faz 6 kontrolünde yazının yayında kaldığı süre dikkate alınacak.

## Faz 6 — Ölç ve sonraki içeriği seç

**Sorumlu:** Sahibi + kod/içerik

**Zaman:** İlk yayın sonrası 4, 8 ve 12. haftalarda değerlendirme; bunlar sonuç garantisi değil kontrol tarihleridir.

| Ölçüm | Kaynak | Kararda kullanımı |
|---|---|---|
| Marka dışı ilgili sorgu gösterimleri ve tıklamalar | Search Console | Hangi sayfa/soru için talep sinyali var? |
| Sayfa bazında organik girişler | GA4 | Hangi içerik siteye ziyaretçi getiriyor? |
| Telefon, WhatsApp, yol tarifi tıklamaları ayrı ayrı | GA4 | Hangi girişler müşteri niyetine dönüşüyor? |
| Profildeki arama/site/yol tarifi etkileşimleri | İşletme Profili | Yerel görünürlük müşteri eylemi üretiyor mu? |
| Beyan edilen mağaza ziyaretleri ve satışlar | Haftalık mağaza notu | Dijital ilgi gerçek müşteriye yansıyor mu? |

- [ ] Yayın/değişiklik tarihlerini kaydet; başlangıç ve sonraki dönemleri aynı süreyle karşılaştır, mevsimsellik ve veri azlığını belirt.
- [ ] İlgili sorgular ve iletişim eylemleri oluşan konunun devamını üret; yazı sayısını tek başına başarı sayma.
- [ ] Gösterim var ama tıklama azsa sorgu/başlık/konum ilişkisini incele; ziyaret var ama eylem yoksa içerik niyeti ve iletişim adımını gözden geçir.
- [ ] Gösterim yoksa önce indeks ve konu uyumunu incele. Yetersiz örneklemde başarı/başarısızlık ilan etme veya aynı konunun yeni kopyalarını açma.
- [ ] İlk üç yazıyı değerlendirip sonraki iki konuyu seç, mevcut yazıları iyileştir veya yeni yayınları beklet; kararı verisiyle kaydet.

## Uygulama doğrulaması

Bu bölüm gelecekteki kod/içerik uygulamasında çalıştırılır; yalnızca plan düzenlemesi için uygulama tamamlandı anlamına gelmez.

- [ ] `npm run lint` ve `npm run build` başarılı.
- [ ] `node scripts/check-seo.mjs` başarılı; rehber eklenince mevcut kontrolün yeni URL’leri kapsadığı doğrulanmış.
- [ ] Metadata, canonical, sitemap, breadcrumb ve site içi bağlantılar üretilen sayfalarda kontrol edilmiş.
- [ ] Yeni/değişen sayfalar mobil ve masaüstünde okunabilir; klavye erişimi, görsel alternatif metinleri ve iletişim bağlantıları çalışıyor.
- [ ] Canlı GA4 ve Search Console kontrolleri panel kanıtıyla ayrı kaydedilmiş; yerel test panel doğrulaması yerine geçmiyor.

## İlk denemenin sınırları

- Genel haber akışı, toplu otomatik yazı üretimi ve haftalık yayın kotası yok.
- Birbirinin kopyası ilçe sayfaları ve yalnızca anahtar kelimeyi hedefleyen yazılar yok.
- Yeni hizmet sayfası ancak mevcut sayfanın karşılamadığı ayrı bir kullanıcı ihtiyacı doğrulanırsa açılır.
- İncelenmemiş panel işleri ve doğrulanmamış işletme iddiaları tamamlandı olarak işaretlenmez.
