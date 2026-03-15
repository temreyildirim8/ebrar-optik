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
  metadataBase: new URL("https://ebraroptik.net"),
  title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
  description:
    "Görüşünüz bizim için değerli. Ebrar Optik, Kırıkkale'de profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu ile hizmetinizde.",
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
      "@id": "https://ebraroptik.net/#organization",
      name: "Ebrar Optik",
      url: "https://ebraroptik.net",
      logo: {
        "@type": "ImageObject",
        url: "https://ebraroptik.net/assets/logo-v2-monogram.svg",
        width: 200,
        height: 220,
      },
      description:
        "Kırıkkale'nin güvenilir optik mağazası. Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu.",
      sameAs: [
        "https://www.instagram.com/ebraroptik",
        "https://www.facebook.com/ebraroptik",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://ebraroptik.net/#localbusiness",
      name: "Ebrar Optik",
      description:
        "Kırıkkale'de profesyonel göz sağlığı hizmetleri, gözlük ve lens satışı.",
      url: "https://ebraroptik.net",
      telephone: "+90-535-891-42-42",
      email: "ebraroptik@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Yahşihan Yeni Mahalle, Özdemir Bayraktar Caddesi, No: 9",
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
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "09:00",
          closes: "16:00",
        },
      ],
      priceRange: "$$",
      image: "https://ebraroptik.net/assets/logo-v2-monogram.svg",
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
        <Navigation />
        <ContentProtectionProvider>
          <main className="protected-content">{children}</main>
          <div className="protected-content">
            <Footer />
          </div>
        </ContentProtectionProvider>
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
