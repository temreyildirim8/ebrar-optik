import { HeroReveal } from "@/components/ScrollAnimations";
import Image from "next/image";

export function HeroSection() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905458199862";
  const whatsappMessage = encodeURIComponent(
    "Merhaba Ebrar Optik, randevu almak istiyorum.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Ebrar Optik"
          fill
          priority
          className="object-cover object-center hidden md:block"
        />
        <Image
          src="/hero.webp"
          alt="Ebrar Optik"
          fill
          priority
          className="object-cover object-[center_70%] block md:hidden"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/50 to-transparent dark:from-stone-950/90 dark:via-stone-950/60" />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-6 py-16 md:px-12 lg:px-24">
        {/* Logo and Brand */}
        {/* <HeroReveal className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-500/20">
            <Glasses className="h-10 w-10 text-white" aria-hidden="true" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl md:text-6xl">
            Ebrar Optik
          </h1>
        </HeroReveal> */}

        {/* Headline */}
        <HeroReveal
          delay={0.2}
          className="flex max-w-3xl flex-col items-start gap-4 text-left"
        >
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Görüşünüz Bizim İçin Değerli
          </h2>
          <p className="text-lg text-stone-200 sm:text-xl md:text-2xl">
            Kırıkkale&apos;de profesyonel göz sağlığı hizmetleri ve geniş
            çerçeve koleksiyonu ile hizmetinizde.
          </p>
        </HeroReveal>

        {/* Services Preview */}
        <HeroReveal delay={0.4} className="flex flex-wrap gap-3 sm:gap-4">
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Reçeteli Gözlük
          </span>
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Güneş Gözlüğü
          </span>
          <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            Lens
          </span>
        </HeroReveal>

        {/* CTA Button */}
        {/* <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button
              size="lg"
              className="min-h-[56px] min-w-[200px] bg-emerald-600 text-lg font-semibold text-white shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:shadow-emerald-700/40"
              aria-label="WhatsApp üzerinden randevu al"
            >
              <svg
                className="mr-2 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp İletişim
            </Button>
          </a>
        </div> */}

        {/* Decorative Elements */}
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-200/30 to-teal-200/30 blur-3xl dark:from-emerald-800/20 dark:to-teal-800/20" />
        <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gradient-to-br from-amber-200/30 to-orange-200/30 blur-3xl dark:from-amber-800/20 dark:to-orange-800/20" />
      </div>
    </section>
  );
}
