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
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                    <svg
                      className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
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
                Ebrar Optik olarak Kırıkkale&apos;de göz sağlığı alanında hizmet
                veriyoruz. Müşteri memnuniyetini ön planda tutarak, her yaşa ve
                göze hitap eden kaliteli ürünler sunuyoruz.
              </p>
            </Card>
          </StaggerItem>

          {/* Mission & Values */}
          <StaggerItem className="h-full">
            <Card className="h-full border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900 flex flex-col">
              <div className="mb-4 flex items-center gap-3">
                <ScrollReveal distance={15} delay={0}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                    <svg
                      className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
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
                Sağlıklı görüş ve kaliteli hizmet anlayışımızla, her müşterimize
                özel çözüm sunuyoruz. Dürüstlük, güven ve uzmanlık temel
                değerlerimizdir.
              </p>
            </Card>
          </StaggerItem>
        </StaggerContainer>

        {/* Optician Credentials */}
        <ScrollReveal className="mt-8" delay={0.3}>
          <Card className="border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100 p-8 dark:border-stone-800 dark:from-stone-900 dark:to-stone-800">
            <div className="flex flex-col items-center text-center md:flex-row md:text-left">
              <ScrollReveal distance={20} delay={0}>
                <div className="mb-6 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-emerald-600 shadow-lg shadow-emerald-600/20 md:mb-0 md:mr-6">
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
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
                  Sertifikalı optik uzmanlarımızla, doğru göz ölçümü ve en uygun
                  gözlük seçimi için yanınızdayız. Modern teknoloji ve yılların
                  verdiği deneyimle hizmet veriyoruz.
                </p>
                <StaggerContainer
                  className="flex flex-wrap justify-center gap-5 md:justify-start"
                  staggerDelay={0.08}
                >
                  <StaggerItem distance={15}>
                    <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Sertifikalı Optik Uzmanı
                    </span>
                  </StaggerItem>
                  <StaggerItem distance={15}>
                    <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Modern Ölçüm Ekipmanları
                    </span>
                  </StaggerItem>
                  <StaggerItem distance={15}>
                    <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
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
