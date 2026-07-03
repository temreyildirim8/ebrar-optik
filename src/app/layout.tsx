import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContentProtectionProvider } from "@/components/ContentProtectionProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ebrar-optik.com"),
  title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
  description:
    "Görüşünüze değer katıyoruz. Ebrar Optik, Kırıkkale'de profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu ile hizmetinizde.",
  keywords: [
    "Kırıkkale optik",
    "gözlük",
    "güneş gözlüğü",
    "lens",
    "göz sağlığı",
    "optik mağaza",
  ],
  authors: [{ name: "Ebrar Optik" }],
  icons: {
    icon: [{ url: "/assets/logo-v2-monogram.svg", type: "image/svg+xml" }],
    shortcut: "/assets/logo-v2-monogram.svg",
    apple: "/assets/logo-v2-monogram.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
    description:
      "Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ebrar Optik - Kırıkkale'nin Güvenilir Optik Mağazası",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ebrar-optik.com/#organization",
      name: "Ebrar Optik",
      url: "https://ebrar-optik.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ebrar-optik.com/assets/logo-v2-monogram.svg",
        width: 200,
        height: 220,
      },
      description:
        "Kırıkkale'nin güvenilir optik mağazası. Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu.",
      sameAs: [
        "https://www.instagram.com/ebrar.optik71",
        "https://www.facebook.com/ebraroptik",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ebrar-optik.com/#localbusiness",
      name: "Ebrar Optik",
      description:
        "Kırıkkale'de profesyonel göz sağlığı hizmetleri, gözlük ve lens satışı.",
      url: "https://ebrar-optik.com",
      telephone: "+90-506-371-00-71",
      email: "ebraroptik@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Yahşihan Yeni Mahalle, Özdemir Bayraktar Caddesi, No: 9",
        addressLocality: "Yahşihan",
        addressRegion: "Kırıkkale",
        postalCode: "71400",
        addressCountry: "TR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "39.8569",
        longitude: "33.4344",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "19:30",
        },
      ],
      priceRange: "$$",
      image: "https://ebrar-optik.com/assets/logo-v2-monogram.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased tracking-wide`}>
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-emerald-600 focus:px-4 focus:py-3 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
        >
          Ana içeriğe geç
        </a>
        <Navigation />
        <ContentProtectionProvider>
          <main id="main-content" className="protected-content" role="main">{children}</main>
          <div className="protected-content">
            <Footer />
          </div>
        </ContentProtectionProvider>
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
