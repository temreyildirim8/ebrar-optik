import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollAnimations";

const photos = [
  {
    name: "Optik çerçeveler",
    image: "/assets/ebrar-optik-cerceve-rafi.webp",
    alt: "Ebrar Optik mağazasındaki optik çerçeve rafları",
  },
  {
    name: "Güneş gözlükleri",
    image: "/assets/ebrar-gunes-gozlugu-rafi.webp",
    alt: "Ebrar Optik mağazasındaki güneş gözlüğü rafları",
  },
];

export function FrameGallery() {
  return (
    <section id="cerceveler" className="w-full bg-white py-20 dark:bg-stone-900">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <ScrollReveal className="mb-8 text-center" direction="up" distance={30}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Mağazadan kareler
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Optik çerçeveleri ve güneş gözlüklerini mağazada yakından görebilirsiniz.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {photos.map((photo) => (
            <Card key={photo.name} className="overflow-hidden border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
                <Image src={photo.image} alt={photo.alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
              </div>
              <h3 className="p-4 text-lg font-semibold text-stone-900 dark:text-stone-50">
                {photo.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
