export const business = {
  name: "Ebrar Optik",
  legalName: "Ebrar Optik",
  url: "https://ebrar-optik.com",
  telephone: "+90-506-371-00-71",
  telephoneTel: "+905063710071",
  telephoneDisplay: "0506 371 00 71",
  email: "ebraroptik@gmail.com",
  priceRange: "$$",
  address: {
    streetAddress: "Ovacık Mahallesi, Hürriyet Caddesi No: 54/A",
    addressLocality: "Kırıkkale Merkez",
    addressRegion: "Kırıkkale",
    postalCode: "71100",
    addressCountry: "TR",
  },
  addressDisplay:
    "Ovacık Mahallesi, Hürriyet Caddesi No: 54/A, Kırıkkale Merkez",
  geo: {
    latitude: 39.8441708,
    longitude: 33.5033221,
  },
  /**
   * Google İşletme Profili kaydı (/g/11zdh_9htc). Önceki link isimsiz bir
   * adres pinine gidiyordu, işletme kartına değil.
   */
  mapsUrl:
    "https://www.google.com/maps/place/Ebrar+Optik/@39.8441708,33.5033221,17z/data=!4m6!3m5!1s0x4081df1d0926f0d1:0xc5f66d53e6b9ccbb!8m2!3d39.8441708!4d33.5033221!16s%2Fg%2F11zdh_9htc?hl=tr&entry=ttu",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.8776954576381!2d33.5033221!3d39.8441708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4081df0a7b97fc47%3A0x5eefc1b311bc3aac!2sEbrar%20Optik%2C%20Ovac%C4%B1k%20Mahallesi%2C%20H%C3%BCrriyet%20Caddesi%2C%20K%C4%B1r%C4%B1kkale!5e0!3m2!1str!2str!4v1709904000000!5m2!1str!2str",
  sameAs: [
    "https://www.instagram.com/ebrar.optik71",
    "https://www.facebook.com/ebraroptik",
  ],
  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ] as const,
    opens: "09:00",
    closes: "19:30",
    display: "Pzt–Cmt 09:00–19:30",
  },
  areaServed: "Kırıkkale",
} as const;
