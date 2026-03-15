import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  openGraph: {
    title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
    description:
      "Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/assets/logo-v2-monogram.svg",
        width: 200,
        height: 220,
        alt: "Ebrar Optik Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        <ContentProtectionProvider>
          <main className="protected-content">
            {children}
          </main>
          <div className="protected-content">
            <Footer />
          </div>
        </ContentProtectionProvider>
        <FloatingSocialButtons />
      </body>
    </html>
  );
}
