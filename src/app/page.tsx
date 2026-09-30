import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FrameGallery } from "@/components/sections/FrameGallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Ebrar Optik | Kırıkkale'de Gözlük ve Lens",
  description:
    "Kırıkkale'de Ebrar Optik mağazasında optik çerçeveleri ve güneş gözlüklerini deneyin. Reçetenize uygun cam ve lens seçenekleri hakkında bilgi alın.",
  path: "/",
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FrameGallery />
      <ContactSection />
    </div>
  );
}
