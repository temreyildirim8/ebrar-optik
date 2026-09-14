# Ebrar Optik Görsel İçerik Görevleri

## Task 1: Gerçek çekimleri toplama

**Kabul kriterleri:**
- [ ] Dokuz sayfalık çekim listesindeki her sayfa için en az bir uygun fotoğraf var.
- [ ] Görünen kişiler için kullanım izni var; kişisel veri görünmüyor.
- [ ] Fotoğraflar düzenleme öncesi orijinal çözünürlükte teslim edildi.

**Doğrulama:**
- [ ] Çekimler `tasks/plan.md` tablosuyla tek tek eşleştirildi.

**Bağımlılık:** Yok

## Task 2: Görsel seçimi ve düzenleme

**Kabul kriterleri:**
- [ ] Her sayfa için bir ana görsel ve yalnızca gerektiğinde bir destek görseli seçildi.
- [ ] Gerçek unsurlar korunarak tutarlı sıcak/bej-lacivert düzenleme uygulandı.
- [ ] Dekoratif illüstrasyonlar fotoğraflardan açıkça ayrılıyor.

**Doğrulama:**
- [ ] Seçilen görseller kullanıcı tarafından görsel olarak onaylandı.

**Bağımlılık:** Task 1

## Checkpoint: Görsel onayı

- [ ] Tüm görseller koda eklenmeden önce kullanıcı tarafından onaylandı.

## Task 3: Görselleri web için hazırlama

**Kabul kriterleri:**
- [ ] Ana görseller 1600×900, içerik görselleri 1200×800 WebP.
- [ ] Açıklayıcı dosya adları kullanıldı.
- [ ] Dosya boyutları kalite korunarak plan hedeflerine yaklaştırıldı.

**Doğrulama:**
- [ ] Görsel boyutları ve dosya ağırlıkları listelendi.

**Bağımlılık:** Task 2

## Task 4: Hizmet sayfalarına entegrasyon

**Kabul kriterleri:**
- [ ] Ortak veri modeli ana ve içerik görselini destekliyor.
- [ ] Yedi hizmet sayfasında görseller ortak `ServicePageLayout` üzerinden gösteriliyor.
- [ ] Bilgilendirici görsellerde açıklayıcı `alt`, dekoratif görsellerde boş `alt` var.

**Doğrulama:**
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Bir mobil ve bir masaüstü genişlikte yedi sayfanın görsel kontrolü

**Bağımlılık:** Task 3

## Task 5: Ana sayfa ve SSS entegrasyonu

**Kabul kriterleri:**
- [ ] Ana sayfadaki gerçek dışı Paris/mağaza görselleri gerçek Ebrar Optik fotoğraflarıyla değiştirildi.
- [ ] SSS sayfasına tek, sade ve konuya uygun görsel eklendi.
- [ ] Görseller metin okunabilirliğini ve odak sırasını bozmuyor.

**Doğrulama:**
- [ ] Ana sayfa ve SSS mobil/masaüstü görsel kontrolü

**Bağımlılık:** Task 3

## Checkpoint: Teknik kalite

- [ ] `npm run lint` başarılı.
- [ ] `npm run build` başarılı.
- [ ] Ana sayfa mobil Lighthouse performansı en az 90.
- [ ] Görseller yüklenirken belirgin yerleşim kayması yok.

