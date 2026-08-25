import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { FloatingSocialButtons } from "@/components/FloatingSocialButtons";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContentProtectionProvider } from "@/components/ContentProtectionProvider";
import { business } from "@/lib/business";
import { buildLocalBusinessGraph } from "@/lib/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
  description:
    "Görüşünüze değer katıyoruz. Ebrar Optik, Kırıkkale'de profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu ile hizmetinizde.",
  authors: [{ name: "Ebrar Optik" }],
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: "dd7c3a784e3eb901",
  },
  icons: {
    icon: [{ url: "/assets/logo-v2-icon.png", type: "image/png" }],
    apple: "/assets/logo-v2-icon.png",
  },
  openGraph: {
    title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
    description:
      "Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu",
    siteName: business.name,
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
  twitter: {
    card: "summary_large_image",
    title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
    description:
      "Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = buildLocalBusinessGraph();

// Ölçüm kimliği herkese açık (HTML'de görünüyor), env değişkenine gerek yok.
const GA_MEASUREMENT_ID = "G-QD5C0Z5B4L";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* next/script JSON-LD'yi client-side inject ediyordu ve HTML'de
            görünmüyordu; düz <script> ile sunucu tarafında render edilir. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased tracking-wide`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-3 focus:text-brand-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand"
        >
          Ana içeriğe geç
        </a>
        <Navigation />
        <ContentProtectionProvider>
          <main id="main-content" className="protected-content" role="main">
            {children}
          </main>
          <div className="protected-content">
            <Footer />
          </div>
        </ContentProtectionProvider>
        <FloatingSocialButtons />
        <CookieConsent gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
