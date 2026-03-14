import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="hakkimizda" className="w-full bg-white py-20 dark:bg-stone-950">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Hakkımızda
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Kırıkkale&apos;de güven ve profesyonellikle hizmetinizdeyiz
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* History & Experience */}
          <Card className="border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
            <div className="mb-4 flex items-center gap-3">
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
              <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                Tarihçemiz & Deneyim
              </h3>
            </div>
            <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
              Ebrar Optik olarak yıllardır Kırıkkale&apos;de göz sağlığı alanında hizmet veriyoruz.
              Müşteri memnuniyetini ön planda tutarak, her yaşa ve göze hitap eden kaliteli
              ürünler sunuyoruz.
            </p>
          </Card>

          {/* Mission & Values */}
          <Card className="border-stone-200 bg-stone-50 p-6 dark:border-stone-800 dark:bg-stone-900">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <svg
                  className="h-6 w-6 text-amber-600 dark:text-amber-400"
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
              <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                Misyonumuz & Değerlerimiz
              </h3>
            </div>
            <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
              Sağlıklı görüş ve kaliteli hizmet anlayışımızla, her müşterimize özel çözüm
              sunuyoruz. Dürüstlük, güven ve uzmanlık temel değerlerimizdir.
            </p>
          </Card>
        </div>

        {/* Optician Credentials */}
        <Card className="mt-8 border-stone-200 bg-gradient-to-br from-stone-50 to-stone-100 p-8 dark:border-stone-800 dark:from-stone-900 dark:to-stone-800">
          <div className="flex flex-col items-center text-center md:flex-row md:text-left">
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
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-stone-900 dark:text-stone-50">
                Uzman Optik Hizmeti
              </h3>
              <p className="mb-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                Sertifikalı optik uzmanlarımızla, doğru göz ölçümü ve en uygun gözlük
                seçimi için yanınızdayız. Modern teknoloji ve yılların verdiği deneyimle
              hizmet veriyoruz.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Sertifikalı Optik Uzmanı
                </span>
                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Modern Ölçüm Ekipmanları
                </span>
                <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  Kişiye Özel Çözümler
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
