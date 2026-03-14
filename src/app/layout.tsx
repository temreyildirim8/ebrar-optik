import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ebrar Optik - Kırıkkale",
  description: "Kırıkkale'de profesyonel optik hizmeti. Göz muayenesi, gözlük ve lens çözümleri için bizi ziyaret edin.",
  keywords: "optik, gözlük, lens, Kırıkkale, göz muayenesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navigation />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
