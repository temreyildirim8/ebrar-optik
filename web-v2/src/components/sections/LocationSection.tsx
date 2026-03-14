import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function LocationSection() {
  const googleMapsLink = "https://maps.app.goo.gl/example";
  const embeddedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3087.5!2d33.5!3d39.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDMwJzAwLjAiTiAzM8KwMzAnMDAuMCJF!5e0!3m2!1str!2str!4v1234567890";

  return (
    <section id="konum" className="w-full bg-stone-50 py-20 dark:bg-stone-900">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            Mağaza Konumu
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Kırıkkale&apos;de size en yakın optik mağazası
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Address & Hours */}
          <div className="flex flex-col justify-center space-y-6">
            <Card className="border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-950">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                  Adres
                </h3>
              </div>
              <address className="not-italic">
                <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  Yahşihan Mahallesi, 71500 Kırıkkale Merkez/Kırıkkale
                </p>
              </address>
            </Card>

            <Card className="border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-950">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/30">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-50">
                  Çalışma Saatleri
                </h3>
              </div>
              <div className="space-y-2 text-base text-stone-700 dark:text-stone-300">
                <div className="flex justify-between">
                  <span>Hafta İçi:</span>
                  <span className="font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span className="font-medium">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span className="text-stone-500">Kapalı</span>
                </div>
              </div>
            </Card>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-emerald-500/20 disabled:pointer-events-none disabled:opacity-50 dark:bg-emerald-500 dark:hover:bg-emerald-600"
            >
              <svg
                className="mr-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Yol Tarifi Al
            </a>
          </div>

          {/* Google Maps Embed */}
          <Card className="border-stone-200 bg-white p-2 dark:border-stone-800 dark:bg-stone-950">
            <iframe
              src={embeddedMapUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[400px] w-full rounded-lg"
              title="Ebrar Optik Konum Haritası"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
