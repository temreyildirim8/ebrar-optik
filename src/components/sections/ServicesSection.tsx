import { Card } from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      title: "Reçeteli Optik Gözlük",
      description:
        "Göz doktorunuzun reçetesine uygun, yüz şeklinize ve yaşam tarzınıza en uygun gözlükleri seçmenize yardımcı oluyoruz.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Güneş Gözlüğü",
      description:
        "UV korumalı, markalı güneş gözlükleri koleksiyonumuzla stilinizi korurken gözlerinizi güneşin zararlı ışınlarından koruyun.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx={12} cy={12} r={5} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
      ),
    },
    {
      title: "Numaralı Güneş Gözlüğü",
      description:
        "Modern ekipmanlarımızla, istediğiniz çerçeveye sizin için özel bir numaralı güneş gözlüğü yapabiliriz. Yazın güneş gözünüzü yormasın!",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Lens Çeşitleri",
      description:
        "Günlük, haftalık, aylık ve renkli lens seçeneklerimizle kontakt lens ihtiyacınızı karşılıyoruz.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Cam ve Çerçeve Değişimi",
      description:
        "Kırılmış veya çizilmiş gözlük camlarınızı ve çerçevelerinizi yenileriyle değiştiriyoruz.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
    {
      title: "Gözlük Bakım ve Onarım",
      description:
        "Gözlüklerinizin vida sıkılaştırma, ped değişimi ve tamir işlemlerini titizlikle yapıyoruz.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="hizmetler" className="w-full bg-white py-20 dark:bg-stone-950">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <ScrollReveal
          className="mb-12 text-center"
          direction="up"
          distance={30}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Hizmetlerimiz
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Ebrar Optik&apos;te sunduğumuz profesyonel hizmetler
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <Card className="group h-full border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-900/30 dark:text-emerald-400">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-stone-900 dark:text-stone-50">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-stone-600 dark:text-stone-300">
                  {service.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
