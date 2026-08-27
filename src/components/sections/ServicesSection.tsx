import { Card } from "@/components/ui/card";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

interface Service {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export function ServicesSection() {
  const services: Service[] = [
    {
      title: "Reçeteli Optik Gözlük",
      href: "/gozluk",
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
          <circle cx={6} cy={15} r={4} strokeWidth={2} />
          <circle cx={18} cy={15} r={4} strokeWidth={2} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2M2.5 13 5 7c.7-1.3 1.4-2 3-2M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
          />
        </svg>
      ),
    },
    {
      title: "Güneş Gözlüğü",
      href: "/gunes-gozlugu",
      description:
        "UV korumalı, markalı güneş gözlükleri koleksiyonumuzla gözlerinizi güneşin zararlı ışınlarından korurken stilinizi yansıtın.",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <circle cx={12} cy={12} r={4} fill="currentColor" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 2v2M12 20v2M2 12h2M20 12h2m-15.07-7.07 1.41 1.41m9.32 9.32 1.41 1.41M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          />
        </svg>
      ),
    },
    {
      title: "Numaralı Güneş Gözlüğü",
      href: "/gunes-gozlugu",
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
          <circle cx={6} cy={15} r={4} strokeWidth={2} fill="#57534e" />
          <circle cx={18} cy={15} r={4} strokeWidth={2} fill="#57534e" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2M2.5 13 5 7c.7-1.3 1.4-2 3-2M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
          />
        </svg>
      ),
    },
    {
      title: "Lens Çeşitleri",
      href: "/lens",
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
      href: "/cam-cerceve-degisimi",
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
      href: "/cam-cerceve-degisimi",
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
    <section
      id="hizmetler"
      className="w-full bg-stone-100 py-20 dark:bg-stone-950"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <ScrollReveal
          className="mb-12 text-center"
          direction="up"
          distance={20}
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
              <Link
                href={service.href}
                className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2"
              >
                <Card className="group h-full border-stone-200 bg-stone-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900">
                  <ScrollReveal distance={15} delay={index * 0.05}>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground dark:bg-brand/30 dark:text-blue-300">
                      {service.icon}
                    </div>
                  </ScrollReveal>
                  <h3 className="mb-3 text-xl font-semibold text-stone-900 dark:text-stone-50">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-stone-600 dark:text-stone-300">
                    {service.description}
                  </p>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
