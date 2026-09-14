# Ebrar Optik Görsel İçerik Planı

## Amaç

Dokuz indekslenebilir sayfayı gerçek Ebrar Optik fotoğraflarıyla güçlendirmek; mağazaya güveni artırmak, uzun metin bloklarını bölmek ve mobil performansı korumak.

## Görsel yaklaşım

- Ana içerik gerçek fotoğraf olur. Yapay zekâ gerçekte olmayan mağaza, ekip, müşteri, ürün veya hizmet üretmez.
- Fotoğraflara yalnızca tutarlı kırpma, doğal renk düzenleme ve çok hafif lacivert/bej marka dokunuşu uygulanır.
- Cartoonized görünüm yalnızca dekoratif bölüm ayırıcılarında kullanılır. Bu görseller fotoğraf değil, illüstrasyon olarak sunulur.
- Çocuk yüzü, reçete üzerindeki kişisel bilgiler ve izinsiz müşteri görüntüsü kullanılmaz.
- Görsellere metin/logo gömülmez; gerçek tabela ve ürün üzerindeki mevcut yazılar değiştirilmez.

## Çekim standardı

- Yatay ana görsel: 16:9, en az 2400×1350 piksel.
- İçerik görseli: 3:2, en az 1800×1200 piksel.
- Doğal veya yumuşak ışık; sıcak ve gerçekçi beyaz dengesi.
- Aynı sahnenin geniş, orta ve yakın plan çekimi alınır.
- Teslim formatı orijinal JPEG/HEIC; site için sonradan WebP üretilir.

## Sayfa bazlı çekim listesi

| Sayfa | Ana görsel | Destek görseli |
|---|---|---|
| `/` | Dış cephe ve okunaklı Ebrar Optik tabelası | Gerçek mağaza içi, ekip çalışma hâlinde |
| `/kirikkale-optik` | Mağazanın cadde ve çevre bağlamını gösteren dış çekim | Karşılama alanı veya geniş iç mekân |
| `/sgk-anlasmali-optik` | Çalışanın reçete sürecini müşteriye anlattığı masa sahnesi | Kişisel veri görünmeyen reçete ve çerçeve yakın planı |
| `/gozluk` | Gerçek çerçevelerin bulunduğu raf veya deneme sahnesi | Çerçeve ayarı/ölçüm ayrıntısı |
| `/gunes-gozlugu` | Gün ışığında gerçek güneş gözlüğü seçkisi | Polarize veya numaralı güneş gözlüğü yakın planı |
| `/lens` | Kapalı lens kutuları ve solüsyonların temiz ürün düzeni | Hijyenik hazırlık sahnesi; göze lens takma yakın planı yok |
| `/cam-cerceve-degisimi` | Gerçek çalışma tezgâhında gözlük ayarı | Alet, vida, burunluk veya cam değişimi makro detayı |
| `/cocuk-gozlugu` | Renkli çocuk çerçevelerinin gerçek mağaza sunumu | Bir yetişkin eliyle çerçeve seçimi; çocuk yüzü gerekmez |
| `/sss` | Gözlük, kılıf ve temizleme bezinden sade masaüstü kompozisyonu | Gerçek ekip üyesinin danışma/karşılama anı |

## Fotoğraf düzenleme komutları

Bu komutlar yalnızca kullanıcının sağlayacağı gerçek fotoğraflara uygulanır.

### Ortak gerçek fotoğraf düzenleme komutu

> Preserve the real Ebrar Optik store, people, products, signage and spatial layout exactly as photographed. Apply natural editorial color grading with warm neutral beige tones and restrained navy accents matching the Ebrar Optik brand. Correct exposure and white balance, reduce harsh reflections on lenses without removing real details, and keep realistic skin tones and materials. Crop for a clean responsive website composition with intentional negative space. Do not invent or remove people, products, furniture, logos, text or architectural elements. Do not stylize as CGI. No embedded text, watermark or new branding.

### Dekoratif illüstrasyon komutu

> Create a restrained editorial line illustration inspired by the supplied real Ebrar Optik photograph. Use thin navy ink lines, soft warm-beige shapes and small muted-gold accents on an off-white background. Preserve the recognizable subject and proportions, but clearly present the result as an illustration rather than documentary photography. Minimal detail, generous negative space, no invented logos, no readable text, no gradients, no cartoon faces, no watermark. Suitable as a subtle section divider on a premium local optician website.

### Ürün yakın planı düzenleme komutu

> Preserve the exact real eyeglass frame and all physical product details. Create a clean editorial product photograph using the existing image: natural soft side light, warm stone surface, restrained navy/beige palette, realistic lens reflections and crisp frame edges. Remove only temporary dust or sensor artifacts. Do not change the frame shape, color, logo, brand markings or lens type. No generated accessories, text, hands or watermark.

## Sayfaya yerleştirme

- Her hizmet sayfasında bir ana görsel, en fazla bir içerik görseli kullanılır.
- Ortak `ServicePageLayout` görsel alanlarını yönetir; yedi hizmet sayfasında ayrı bileşen yazılmaz.
- Ana sayfadaki Paris ve gerçekte olmayan mağaza görselleri, gerçek Ebrar Optik çekimleri geldikten sonra değiştirilir.
- SSS sayfasında tek sade görsel yeterlidir.
- Bilgi taşıyan fotoğrafların `alt` metni gerçek sahneyi tarif eder; dekoratif illüstrasyonlarda boş `alt` kullanılır.

## Dosya ve performans kuralları

- Dosya adları Türkçe karakter içermeyen açıklayıcı biçimde olur: `sgk-recete-danismanligi.webp`.
- 16:9 ana görseller 1600×900, içerik görselleri 1200×800 WebP olarak hazırlanır.
- Hedef dosya boyutu ana görselde 250 KB, içerik görselinde 180 KB altıdır; görünür kalite bozulursa sınır zorlanmaz.
- Boyutlar kodda açıkça belirtilir; ilk ekran dışındaki görseller tembel yüklenir.
- Görsel eklendikten sonra ana sayfa ve bir hizmet sayfasında mobil PageSpeed yeniden ölçülür.

## Uygulama sırası

1. Gerçek çekimleri topla ve dokuz sayfalık çekim listesine eşleştir.
2. Her sayfa için bir ana, gerekiyorsa bir destek fotoğrafı seç.
3. Fotoğrafları ortak komutla düzenle; yalnızca seçilen birkaç dekoratif görseli illüstrasyona dönüştür.
4. WebP çıktıları üret ve ortak hizmet sayfası veri modeline görsel alanlarını ekle.
5. Ana sayfa ve SSS görsellerini ayrı mevcut bileşenlerine bağla.
6. Mobil yerleşim, alternatif metin, dosya boyutu ve PageSpeed kontrolünü tamamla.

## Başarı ölçütleri

- Dokuz sayfanın her birinde en az bir işletmeye özgü görsel bulunur.
- Gerçek mağaza/ürün kanıtı ile dekoratif illüstrasyon görsel olarak açıkça ayrılır.
- Yanlış işletme, yapay müşteri veya doğrulanmamış hizmet görüntüsü bulunmaz.
- Ana sayfa mobil Lighthouse performansı 90'ın altına düşmez ve CLS sıfıra yakın kalır.
- `npm run lint` ve `npm run build` başarılı olur.

## Riskler ve önlemler

| Risk | Önlem |
|---|---|
| Yapay görselin gerçek işletme sanılması | Ana içerikte yalnızca gerçek fotoğraf; illüstrasyon yalnızca dekoratif kullanım |
| Fotoğrafların siteyi yavaşlatması | Önceden boyutlandırılmış WebP, açık boyutlar ve tembel yükleme |
| İzinsiz kişi veya kişisel veri görünmesi | Kullanım izni kontrolü; reçete ve ekran bilgilerinin kadraj dışında tutulması |
| Sayfaların birbirine benzemesi | Her sayfaya hizmete özgü gerçek ana sahne |

