import { Card } from "@/components/ui/card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ScrollAnimations";

export function ContactSection() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "+905458199862";
  const email = "ebraroptik@example.com";
  const googleMapsLink = "https://maps.app.goo.gl/xNVHhMP8rjrA8b8n9";
  const embeddedMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.8776954576381!2d33.5138127!3d39.839667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d8e5b6a0a0a0a0%3A0xa0a0a0a0a0a0a0a0!2sEbrar%20Optik%2C%20Ovac%C4%B1k%20Mahallesi%2C%20H%C3%BCrriyet%20Caddesi%2C%20K%C4%B1r%C4%B1kkale!5e0!3m2!1str!2str!4v1709904000000!5m2!1str!2str";

  return (
    <section
      id="iletisim"
      className="w-full bg-stone-50 py-20 dark:bg-stone-900"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <ScrollReveal
          className="mb-12 text-center"
          direction="up"
          distance={30}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
            İletişim
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-600 dark:text-stone-300">
            Size ulaşmak için birden fazla yol
          </p>
        </ScrollReveal>

        {/* Contact Cards Grid */}
        <StaggerContainer
          className="mb-16 grid gap-6 md:grid-cols-1 lg:grid-cols-3"
          staggerDelay={0.1}
        >
          {/* Phone Card */}
          <StaggerItem>
            <Card className="h-full border-stone-200 bg-white p-6 text-center dark:border-stone-800 dark:bg-stone-950">
              <a href={`tel:${phoneNumber}`}>
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
              </a>
              <a href={`tel:${phoneNumber}`}>
                <h3 className="mb-2 text-lg font-semibold text-stone-900 dark:text-stone-50">
                  Telefon
                </h3>
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="text-base font-bold text-amber-600 hover:underline dark:text-amber-400"
              >
                {phoneNumber.replace(
                  /(.{3})(\d{3})(\d{3})(\d{2})(\d{2})/,
                  "$1 ($2) $3 $4 $5",
                )}
              </a>
            </Card>
          </StaggerItem>

          {/* WhatsApp Card */}
          <StaggerItem>
            <Card className="h-full border-stone-200 bg-white p-6 text-center dark:border-stone-800 dark:bg-stone-950">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                  <svg
                    className="h-6 w-6 text-green-600 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-stone-900 dark:text-stone-50">
                WhatsApp
              </h3>
              <a
                href={`https://wa.me/${phoneNumber.replace("+", "")}?text=Merhaba%20Ebrar%20Optik`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-green-600 hover:underline dark:text-green-400"
              >
                Mesaj Gönder
              </a>
            </Card>
          </StaggerItem>

          {/* Email Card */}
          <StaggerItem>
            <Card className="h-full border-stone-200 bg-white p-6 text-center dark:border-stone-800 dark:bg-stone-950">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-stone-900 dark:text-stone-50">
                E-posta
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-base text-blue-600 hover:underline dark:text-blue-400"
              >
                {email}
              </a>
            </Card>
          </StaggerItem>

          {/* Address Card */}
          {/* <StaggerItem>
            <Card className="h-full border-stone-200 bg-white p-6 text-center dark:border-stone-800 dark:bg-stone-950">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
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
              </div>
              <h3 className="mb-2 text-lg font-semibold text-stone-900 dark:text-stone-50">
                Adres
              </h3>
              <p className="text-base text-stone-600 dark:text-stone-300">
                Ovacık Mahallesi, Hürriyet Caddesi 54/37, Kırıkkale 71100
              </p>
            </Card>
          </StaggerItem> */}
        </StaggerContainer>

        {/* Location Section - Address, Hours & Map */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Address & Hours */}
          <StaggerContainer
            className="flex flex-col justify-center space-y-6"
            staggerDelay={0.15}
          >
            <StaggerItem>
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
                    Ovacık Mahallesi, Hürriyet Caddesi 54/37, Kırıkkale 71100
                  </p>
                </address>
              </Card>
            </StaggerItem>

            <StaggerItem>
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
            </StaggerItem>

            <StaggerItem>
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
            </StaggerItem>
          </StaggerContainer>

          {/* Google Maps Embed */}
          <ScrollReveal delay={0.3} direction="left">
            <Card className="h-full border-stone-200 bg-white p-2 dark:border-stone-800 dark:bg-stone-950">
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
