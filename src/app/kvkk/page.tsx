import { buildPageMetadata } from "@/lib/seo";
import { business } from "@/lib/business";

export const metadata = buildPageMetadata({
  title: "KVKK Aydınlatma Metni | Ebrar Optik",
  description:
    "Ebrar Optik web sitesi KVKK aydınlatma metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında web sitesi ziyaretçilerinin verilerinin işlenmesi hakkında bilgilendirme.",
  path: "/kvkk",
  noIndex: true,
});

export default function KVKKPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white py-12 dark:bg-stone-950">
      <div className="container mx-auto max-w-4xl px-6 md:px-12 lg:px-24">
        <h1 className="mb-8 text-3xl font-bold text-stone-900 dark:text-stone-50">
          KVKK Aydınlatma Metni
        </h1>
        <div className="prose prose-stone dark:prose-invert">
          <p className="text-stone-700 dark:text-stone-300">
            Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
            kapsamında yalnızca Ebrar Optik web sitesini ziyaret edenler ve
            sitenin kullanımı sırasında işlenen veriler için hazırlanmıştır.
            Mağazadaki müşteri işlemlerini kapsamaz.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Veri Sorumlusu
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Ebrar Optik - {business.addressDisplay}
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Web Sitesi Üzerinden Toplanan Veriler
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Bu web sitesi mağazamız ve hizmetlerimiz hakkında bilgi verir.
            Reçete bilgileri, sağlık bilgileri ve satın alma geçmişi bu site
            üzerinden toplanmaz. Site üzerinde mesajlaşma kaydı tutulmaz.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Verilerin Kullanım Amacı
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Sitenin nasıl kullanıldığını anlamak ve çerez tercihinizi
            hatırlamak.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Kullanım İstatistikleri (Google Analytics)
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Google Analytics yalnızca çerez bildiriminde &quot;Kabul Et&quot;
            derseniz yüklenir. Ziyaretçi sayısı ve görüntülenen sayfalar gibi
            istatistikleri ölçer; ayrıca telefon, WhatsApp, yol tarifi ve
            Instagram bağlantılarına tıklamalarınızı olay olarak kaydeder. Google
            Analytics, çerezler ve benzeri teknolojilerle cihaz ve tarayıcı
            bilgileri gibi teknik verileri işleyebilir.
          </p>
          <p className="text-stone-700 dark:text-stone-300">
            &quot;Reddet&quot; derseniz Google Analytics yüklenmez ve site aynı
            şekilde çalışır. Kararınızı istediğiniz zaman sayfa altındaki
            &quot;Çerez Tercihleri&quot; bağlantısından değiştirebilirsiniz.
            Daha önce kabul ettiyseniz, tercihinizi reddet olarak değiştirdikten
            sonra sayfayı yenileyin. Önceden oluşan analiz çerezlerini tarayıcı
            ayarlarınızdan silebilirsiniz.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Çerez Tercihi Kaydı
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Tercihiniz çerez olarak değil, tarayıcınızın yerel depolama alanında
            (localStorage) saklanır. Kayıt, kararınızı, karar tarihini ve
            bildirim sürümünü içerir ve tercihinizi hatırlamak için kullanılır.
            Tarayıcı verilerinizi temizleyerek bu kaydı silebilirsiniz.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            İletişim Bağlantıları ve Harita
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Telefon, e-posta, WhatsApp, Instagram ve Google Haritalar
            bağlantıları sizi ilgili uygulamaya veya hizmete yönlendirir. Bu
            uygulamaların ve hizmetlerin kendi veri işleme süreçleri vardır.
          </p>
          <p className="text-stone-700 dark:text-stone-300">
            İletişim bölümündeki gömülü Google Haritalar, yüklendiğinde IP adresi
            ve tarayıcı bilgisi gibi teknik bağlantı bilgilerinizi Google&apos;a
            iletir. Bu, Google Analytics tercihinizden bağımsızdır.
          </p>
          <p className="text-stone-700 dark:text-stone-300">
            Google hizmetleri verileri Türkiye dışında işleyebilir. Ayrıntılar
            için Google&apos;ın gizlilik bilgilendirmelerine bakabilirsiniz.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Haklarınız
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            KVKK kapsamında bilgi talep etme, düzeltme isteme, silme talep etme
            ve itiraz etme haklarınız bulunmaktadır.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            İletişim
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            KVKK ile ilgili sorularınız için:{" "}
            <a
              href={`mailto:${business.email}`}
              className="text-brand underline hover:text-brand-mid dark:text-blue-300 dark:hover:text-blue-200"
            >
              {business.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
