import Link from "next/link";
import { faqs } from "@/lib/faqs";
import { buildBreadcrumbSchema, buildFaqPageSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Sıkça Sorulan Sorular | Ebrar Optik",
  description:
    "Ebrar Optik hakkında sıkça sorulan sorular: numaralı güneş gözlüğü, lens, çalışma saatleri, randevu ve Kırıkkale mağaza bilgileri.",
  path: "/sss",
});

export default function SssPage() {
  const faqSchema = buildFaqPageSchema(faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Sıkça Sorulan Sorular", path: "/sss" },
  ]);

  return (
    <article className="w-full bg-white py-12 dark:bg-stone-950 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
            <li className="text-stone-900 dark:text-stone-100">
              Sıkça Sorulan Sorular
            </li>
          </ol>
        </nav>

        <h1 className="mb-8 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
          Sıkça Sorulan Sorular
        </h1>

        <div className="space-y-8">
          {faqs.map((faq) => (
            <section key={faq.question}>
              <h2 className="mb-2 text-xl font-semibold text-stone-900 dark:text-stone-50">
                {faq.question}
              </h2>
              <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
                {faq.answer}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-stone-600 dark:text-stone-400">
          Başka sorunuz mu var?{" "}
          <Link
            href="/#iletisim"
            className="font-medium text-brand underline hover:text-brand-mid"
          >
            İletişim
          </Link>{" "}
          bölümünden bize ulaşın.
        </p>
      </div>
    </article>
  );
}
