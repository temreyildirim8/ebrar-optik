import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | Ebrar Optik",
  description:
    "Ebrar Optik KVKK aydınlatma metni. 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenmesi hakkında bilgilendirme.",
  alternates: {
    canonical: "/kvkk",
  },
};

export default function KVKKPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white py-12 dark:bg-stone-950">
      <div className="container mx-auto max-w-4xl px-6 md:px-12 lg:px-24">
        <h1 className="mb-8 text-3xl font-bold text-stone-900 dark:text-stone-50">
          KVKK Aydınlatma Metni
        </h1>
        <div className="prose prose-stone dark:prose-invert">
          <p className="text-stone-700 dark:text-stone-300">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında,
            Ebrar Optik olarak müşterilerimizin kişisel verilerini özenle koruyoruz.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Veri Sorumlusu
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Ebrar Optik - Ovacık Mahallesi, Hürriyet Caddesi No: 54/A, Kırıkkale Merkez
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Toplanan Veriler
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Müşteri adı, iletişim bilgileri, reçete bilgileri ve satın alma geçmişi.
          </p>
          <h2 className="mt-8 text-xl font-semibold text-stone-900 dark:text-stone-50">
            Verilerin Kullanım Amacı
          </h2>
          <p className="text-stone-700 dark:text-stone-300">
            Göz sağlığı hizmetleri sunmak, randevu takibi, ürün tedariği ve
            müşteri memnuniyeti süreçleri.
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
              href="mailto:ebraroptik@gmail.com"
              className="text-emerald-700 underline hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              ebraroptik@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
