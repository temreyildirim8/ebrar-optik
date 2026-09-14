import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollAnimations";

interface Frame {
  id: number;
  name: string;
  image: string;
  description: string;
}

export function FrameGallery() {
  const frames: Frame[] = [
    {
      id: 1,
      name: "Klasik Yuvarlak",
      image: "/glasses/klasik-yuvarlak.webp",
      description: "Zarif ve klasik yuvarlak çerçeve",
    },
    {
      id: 2,
      name: "Modern Kare",
      image: "/glasses/modern-kare.webp",
      description: "Şık ve modern kare çerçeve",
    },
    {
      id: 3,
      name: "Aviator Güneş",
      image: "/glasses/aviator-gunes.webp",
      description: "Klasik aviator tarzı güneş gözlüğü",
    },
    {
      id: 4,
      name: "Polarize Güneş",
      image: "/glasses/polarize-gunes.webp",
      description: "Polarize camlı güneş gözlüğü",
    },
    {
      id: 5,
      name: "Kedi Gözü",
      image: "/glasses/kedi-gozu.webp",
      description: "Vintage kedi gözü modeli",
    },
    {
      id: 6,
      name: "Sportif",
      image: "/glasses/sportif.webp",
      description: "Aktif yaşam için sportif tasarım",
    },
    {
      id: 7,
      name: "Mini Çocuk",
      image: "/glasses/mini-cocuk.webp",
      description: "Küçük yaşlar için mini çerçeve",
    },
    {
      id: 8,
      name: "Renkli Çocuk",
      image: "/glasses/renkli-cocuk.webp",
      description: "Eğlenceli renkli çocuk çerçevesi",
    },
  ];

  return (
    <section
      id="cerceveler"
      className="w-full bg-white py-20 dark:bg-stone-900"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <ScrollReveal className="mb-8 text-center" direction="up" distance={30}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Çerçeve Koleksiyonu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Her yüz şekline ve tarza uygun geniş çerçeve seçeneklerimiz
          </p>
        </ScrollReveal>

        {/* Frames Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {frames.map((frame) => (
              <div key={frame.id}>
                <Card className="group h-full overflow-hidden border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-950">
                  <div className="aspect-square relative w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                    <Image
                      src={frame.image}
                      alt={`${frame.name} gözlük çerçevesi — Ebrar Optik Kırıkkale`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">
                      {frame.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                      {frame.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
        </div>

        {/* Store Visit CTA */}
        <ScrollReveal className="mt-12 text-center" delay={0.2}>
          <p className="text-base text-stone-600 dark:text-stone-400">
            Daha fazla seçenek için mağazamızı ziyaret edin
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
