import { business } from "./business";

export type FaqItem = { question: string; answer: string };

export function buildLocalBusinessGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${business.url}/#organization`,
        name: business.name,
        // Aynı adı taşıyan İstanbul'daki optiklerden ayrışmak için
        alternateName: `${business.name} ${business.areaServed}`,
        url: business.url,
        logo: {
          "@type": "ImageObject",
          url: `${business.url}/assets/logo-v2-icon.png`,
          width: 512,
          height: 512,
        },
        image: `${business.url}/og-image.jpg`,
        sameAs: [...business.sameAs],
      },
      {
        "@type": ["Optician", "Store"],
        "@id": `${business.url}/#localbusiness`,
        name: business.name,
        alternateName: `${business.name} ${business.areaServed}`,
        description:
          "Kırıkkale'de profesyonel göz sağlığı hizmetleri, gözlük ve lens satışı.",
        url: business.url,
        telephone: business.telephone,
        email: business.email,
        priceRange: business.priceRange,
        image: `${business.url}/og-image.jpg`,
        hasMap: business.mapsUrl,
        areaServed: {
          "@type": "City",
          name: business.areaServed,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.streetAddress,
          addressLocality: business.address.addressLocality,
          addressRegion: business.address.addressRegion,
          postalCode: business.address.postalCode,
          addressCountry: business.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [...business.openingHours.days],
            opens: business.openingHours.opens,
            closes: business.openingHours.closes,
          },
        ],
        parentOrganization: { "@id": `${business.url}/#organization` },
      },
    ],
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? business.url : `${business.url}${item.path}`,
    })),
  };
}

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
