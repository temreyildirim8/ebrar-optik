import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FrameGallery } from "@/components/sections/FrameGallery";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FrameGallery />
      <ContactSection />
    </main>
  );
}
