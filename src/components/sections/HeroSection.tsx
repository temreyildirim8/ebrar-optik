import { HeroReveal } from "@/components/ScrollAnimations";
import { AnimatedHeroBackground } from "@/components/AnimatedHeroBackground";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-900 dark:to-stone-950" aria-labelledby="hero-heading">
      <AnimatedHeroBackground />

      <div className="container relative z-10 md:mx-auto flex max-w-7xl flex-col items-start justify-center gap-8 px-6 py-16 md:px-12 lg:px-24 hero-gradient">
        {/* Headline */}
        <HeroReveal
          delay={0.2}
          className="flex max-w-3xl flex-col items-start gap-4 text-left"
        >
          <h1 id="hero-heading" className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-black leading-[1.05] text-white">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              Ebrar Optik
            </span>
            <span className="mt-1 block text-2xl font-bold text-stone-200 sm:text-3xl md:text-4xl">
              Kırıkkale&apos;de Güvenilir Optik
            </span>
          </h1>
          <p className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] text-lg font-semibold text-stone-200 sm:text-xl md:text-2xl">
            Görüşünüze değer katıyoruz. Profesyonel göz sağlığı hizmetleri ve
            geniş çerçeve koleksiyonu ile hizmetinizdeyiz.
          </p>
        </HeroReveal>

        {/* Services Preview */}
        <HeroReveal
          delay={0.4}
          className="grid grid-cols-2 gap-3 sm:flex sm:gap-4"
        >
          <div role="list" aria-label="Hizmetlerimiz" className="contents">
            <span className="min-h-[44px] flex items-center justify-center rounded-full bg-white/20 px-4 py-2.5 text-center text-sm font-medium text-white backdrop-blur-sm" role="listitem">
              Reçeteli Gözlük
            </span>
            <span className="min-h-[44px] flex items-center justify-center rounded-full bg-white/20 px-4 py-2.5 text-center text-sm font-medium text-white backdrop-blur-sm" role="listitem">
              Güneş Gözlüğü
            </span>
            <span className="min-h-[44px] flex items-center justify-center rounded-full bg-white/20 px-4 py-2.5 text-center text-sm font-medium text-white backdrop-blur-sm" role="listitem">
              Lens Çeşitleri
            </span>
            <span className="min-h-[44px] flex items-center justify-center rounded-full bg-white/20 px-4 py-2.5 text-center text-sm font-medium text-white backdrop-blur-sm" role="listitem">
              Gözlük Bakımı
            </span>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}
