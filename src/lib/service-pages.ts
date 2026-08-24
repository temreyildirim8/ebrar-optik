import { business } from "./business";

export type ServicePageContent = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  bullets: string[];
  related: { href: string; label: string }[];
};

export const servicePages: Record<string, ServicePageContent> = {
  gozluk: {
    slug: "gozluk",
    path: "/gozluk",
    metaTitle: "Reçeteli Gözlük | Ebrar Optik Kırıkkale",
    metaDescription:
      "Kırıkkale'de reçeteli optik gözlük. Yüz şeklinize ve yaşam tarzınıza uygun çerçeve seçimi, cam ve montaj hizmeti Ebrar Optik'te.",
    h1: "Kırıkkale'de Reçeteli Optik Gözlük",
    intro: [
      "Göz doktorunuzun reçetesine uygun cam ve çerçeve seçiminde yanınızdayız. Ebrar Optik olarak Kırıkkale Merkez'de yüz şeklinize, günlük kullanımınıza ve bütçenize göre doğru kombinasyonu bulmanıza yardımcı oluyoruz.",
      "Mağazamızda geniş çerçeve seçenekleri, cam montajı ve ayar hizmetleri sunuyoruz. Reçetenizi getirmeniz yeterli; ölçüm ve yerleştirme sürecini sizinle birlikte yönetiyoruz.",
    ],
    bullets: [
      "Reçeteye uygun cam seçimi ve montaj",
      "Yüz şekli ve yaşam tarzına göre çerçeve danışmanlığı",
      "Çocuk ve yetişkin için optik gözlük seçenekleri",
      "Cam ve çerçeve değişimi desteği",
    ],
    related: [
      { href: "/gunes-gozlugu", label: "Güneş gözlüğü" },
      { href: "/lens", label: "Lens çeşitleri" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
    ],
  },
  "gunes-gozlugu": {
    slug: "gunes-gozlugu",
    path: "/gunes-gozlugu",
    metaTitle: "Güneş Gözlüğü ve Numaralı Güneş Gözlüğü | Ebrar Optik",
    metaDescription:
      "Kırıkkale'de UV korumalı güneş gözlüğü ve numaralı güneş gözlüğü. İstediğiniz çerçeveye özel cam montajı Ebrar Optik'te.",
    h1: "Güneş Gözlüğü ve Numaralı Güneş Gözlüğü",
    intro: [
      "Yazın ve yıl boyunca gözlerinizi UV ışınlarından korurken stilinizi de yansıtın. Ebrar Optik'te markalı ve UV korumalı güneş gözlüğü seçenekleri bulabilirsiniz.",
      "Numaralı güneş gözlüğü ihtiyacınız varsa, seçtiğiniz çerçeveye reçetenize uygun cam montajı yapıyoruz. Böylece hem net görüş hem de güneş koruması aynı anda mümkün olur.",
    ],
    bullets: [
      "UV korumalı güneş gözlüğü koleksiyonu",
      "Numaralı güneş gözlüğü cam montajı",
      "Farklı yüz şekillerine uygun modeller",
      "Kırıkkale Merkez'de hızlı hizmet",
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/lens", label: "Lens çeşitleri" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
    ],
  },
  lens: {
    slug: "lens",
    path: "/lens",
    metaTitle: "Kontakt Lens | Ebrar Optik Kırıkkale",
    metaDescription:
      "Kırıkkale'de günlük, haftalık, aylık ve renkli kontakt lens. Ebrar Optik'te lens seçenekleri ve kullanım danışmanlığı.",
    h1: "Kontakt Lens Çeşitleri",
    intro: [
      "Gözlük yerine veya yanında kontakt lens tercih eden müşterilerimiz için günlük, haftalık, aylık ve renkli lens seçenekleri sunuyoruz.",
      "Doğru lens tipi reçetenize, göz yapınıza ve kullanım alışkanlığınıza göre değişir. Kırıkkale'deki mağazamızda ihtiyacınıza uygun seçenekleri birlikte değerlendirebilirsiniz.",
    ],
    bullets: [
      "Günlük, haftalık ve aylık lens seçenekleri",
      "Renkli lens alternatifleri",
      "Kullanım ve hijyen konusunda bilgilendirme",
      "Reçeteli lens sipariş desteği",
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/gunes-gozlugu", label: "Güneş gözlüğü" },
      { href: "/kirikkale-optik", label: "Kırıkkale optik" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
    ],
  },
  "kirikkale-optik": {
    slug: "kirikkale-optik",
    path: "/kirikkale-optik",
    metaTitle: "Kırıkkale Optik | Ebrar Optik Mağazası",
    metaDescription: `Kırıkkale optik arıyorsanız Ebrar Optik: ${business.addressDisplay}. Gözlük, güneş gözlüğü, lens ve bakım hizmetleri.`,
    h1: "Kırıkkale Optik — Ebrar Optik",
    intro: [
      `Kırıkkale'de güvenilir bir optik mağaza arıyorsanız Ebrar Optik olarak ${business.address.streetAddress} adresinde hizmet veriyoruz. Çalışma saatlerimiz ${business.openingHours.display}.`,
      "Reçeteli gözlük, güneş gözlüğü, kontakt lens, cam-çerçeve değişimi ve gözlük bakım-onarım hizmetleriyle tek noktadan çözüm sunuyoruz. Randevu için telefon veya WhatsApp üzerinden ulaşabilirsiniz.",
    ],
    bullets: [
      `Adres: ${business.addressDisplay}`,
      `Telefon: ${business.telephoneDisplay}`,
      `Çalışma saatleri: ${business.openingHours.display}`,
      "Gözlük, güneş gözlüğü, lens ve bakım hizmetleri",
    ],
    related: [
      { href: "/gozluk", label: "Reçeteli gözlük" },
      { href: "/gunes-gozlugu", label: "Güneş gözlüğü" },
      { href: "/lens", label: "Lens çeşitleri" },
      { href: "/sss", label: "Sıkça sorulan sorular" },
      { href: "/#iletisim", label: "İletişim ve harita" },
    ],
  },
};
