import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
  description: "Görüşünüz bizim için değerli. Ebrar Optik, Kırıkkale'de profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu ile hizmetinizde.",
  keywords: ["Kırıkkale optik", "gözlük", "güneş gözlüğü", "lens", "göz sağlığı", "optik mağaza"],
  authors: [{ name: "Ebrar Optik" }],
  openGraph: {
    title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
    description: "Profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
