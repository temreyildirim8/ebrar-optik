import { Card } from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

export function AboutSection() {
  return (
    <section
      id="hakkimizda"
      className="w-full bg-white py-20 dark:bg-stone-950"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <ScrollReveal
          className="mb-12 text-center"
          direction="up"
          distance={20}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Hakkımızda
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Kırıkkale&apos;de güven ve profesyonellikle hizmetinizdeyiz
          </p>
        </ScrollReveal>

        {/* Content Grid */}
        <StaggerContainer
          className="grid gap-8 md:grid-cols-2 lg:gap-12 items-stretch"
          staggerDelay={0.15}
        >
          {/* History & Experience */}
          <StaggerItem className="h-full">
            <Card className="h-full border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900 flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <ScrollReveal distance={15} delay={0}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft dark:bg-brand/30">
                    <svg
                      className="h-6 w-6 text-brand dark:text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                      />
                      <circle
                        cx="12"
                        cy="8"
                        r="6"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </ScrollReveal>
                <ScrollReveal distance={15} delay={0.1}>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                    Tarihçemiz & Deneyim
                  </h3>
                </ScrollReveal>
              </div>
              <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300 flex-1">
                Kurucumuz{" "}
                <span className="font-bold">Optisyen Sueda Ebrar</span> hanımın
                sağlık alanındaki uzun çalışma yıllarından gelen birikimiyle
                Kırıkkale&apos;de göz sağlığı alanında hizmet veriyoruz. Müşteri
                memnuniyetini ön planda tutarak, her yaşa ve göze hitap eden
                kaliteli ürünler sunuyoruz.
              </p>
            </Card>
          </StaggerItem>

          {/* Mission & Values */}
          <StaggerItem className="h-full">
            <Card className="h-full border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900 flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <ScrollReveal distance={15} delay={0}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft dark:bg-brand/30">
                    <svg
                      className="h-6 w-6 text-brand dark:text-blue-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </ScrollReveal>
                <ScrollReveal distance={15} delay={0.1}>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                    Misyonumuz & Değerlerimiz
                  </h3>
                </ScrollReveal>
              </div>
              <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300 flex-1">
                Amacımız basit: her müşterimize doğru gözlüğü bulmak. Dürüstlük,
                güven ve uzmanlık ise temel değerlerimizdir.
              </p>
            </Card>
          </StaggerItem>
        </StaggerContainer>

        {/* Optician Credentials */}
        <ScrollReveal className="mt-8" delay={0.3}>
          <Card className="border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100 p-8 dark:border-stone-800 dark:from-stone-900 dark:to-stone-800">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left">
              <ScrollReveal distance={20} delay={0}>
                <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand shadow-lg shadow-brand/20 md:mb-0 md:mr-6">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="1" strokeWidth={1.5} />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
                    />
                  </svg>
                </div>
              </ScrollReveal>
              <div>
                <ScrollReveal distance={15} delay={0.1}>
                  <h3 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                    Uzman Optik Hizmeti
                  </h3>
                </ScrollReveal>
                <p className="mb-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  Sertifikalı optik uzmanlığımızla, doğru göz ölçümü ve en uygun
                  gözlük seçimi için yanınızdayız. Modern teknoloji ve yılların
                  verdiği deneyimle hizmet veriyoruz.
                </p>
                <StaggerContainer
                  className="flex flex-wrap justify-center gap-5 md:justify-start"
                  staggerDelay={0.08}
                >
                  <StaggerItem distance={15}>
                    <span className="rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand dark:bg-brand/30 dark:text-blue-100">
                      Sertifikalı Optik Uzmanı
                    </span>
                  </StaggerItem>
                  <StaggerItem distance={15}>
                    <span className="rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand dark:bg-brand/30 dark:text-blue-100">
                      Modern Ölçüm Ekipmanları
                    </span>
                  </StaggerItem>
                  <StaggerItem distance={15}>
                    <span className="rounded-full bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand dark:bg-brand/30 dark:text-blue-100">
                      Kişiye Özel Çözümler
                    </span>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
