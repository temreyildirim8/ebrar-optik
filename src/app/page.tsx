import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FrameGallery } from "@/components/sections/FrameGallery";
import { ContactSection } from "@/components/sections/ContactSection";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Ebrar Optik | Kırıkkale'nin Güvenilir Optik Mağazası",
  description:
    "Görüşünüze değer katıyoruz. Ebrar Optik, Kırıkkale'de profesyonel göz sağlığı hizmetleri ve geniş çerçeve koleksiyonu ile hizmetinizde.",
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
