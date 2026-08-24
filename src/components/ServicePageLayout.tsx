import Link from "next/link";
import { business } from "@/lib/business";
import type { ServicePageContent } from "@/lib/service-pages";

type ServicePageLayoutProps = {
  page: ServicePageContent;
};

export function ServicePageLayout({ page }: ServicePageLayoutProps) {
  return (
    <article className="w-full bg-white py-12 dark:bg-stone-950 md:py-16">
      <div className="container mx-auto max-w-3xl px-6 md:px-12 lg:px-24">
        <nav aria-label="Sayfa konumu" className="mb-8 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring dark:hover:text-stone-200"
              >
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-stone-900 dark:text-stone-100">{page.h1}</li>
          </ol>
        </nav>

        <h1 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
          {page.h1}
        </h1>

        <div className="space-y-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
          {page.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-8 list-disc space-y-2 pl-5 text-stone-700 dark:text-stone-300">
          {page.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/#iletisim"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2"
          >
            İletişime geç
          </Link>
          <a
            href={`https://wa.me/${business.telephoneTel.replace("+", "")}?text=Merhaba%20Ebrar%20Optik`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            WhatsApp
          </a>
          <a
            href={`tel:${business.telephoneTel}`}
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition-colors hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            Ara: {business.telephoneDisplay}
          </a>
        </div>

        <section className="mt-12 border-t border-stone-200 pt-8 dark:border-stone-800">
          <h2 className="mb-4 text-lg font-semibold text-stone-900 dark:text-stone-50">
            İlgili sayfalar
          </h2>
          <ul className="flex flex-wrap gap-3">
            {page.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex min-h-[44px] items-center rounded-lg border border-stone-200 px-4 py-2 text-sm text-stone-700 hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring dark:border-stone-700 dark:text-stone-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
