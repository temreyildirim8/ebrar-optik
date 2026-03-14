import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FrameGallery } from "@/components/sections/FrameGallery";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <ServicesSection />
      <FrameGallery />
      <ContactSection />
    </main>
  );
}
