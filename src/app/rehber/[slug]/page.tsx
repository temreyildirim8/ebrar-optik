import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { guideArticles } from "@/lib/guide";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = guideArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return buildPageMetadata({
    title: `${article.title} | Ebrar Optik`,
    description: article.description,
    path: `/rehber/${article.slug}`,
  });
}

export default async function GuideArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = guideArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Gözlük Rehberi", path: "/rehber" },
    { name: article.title, path: `/rehber/${article.slug}` },
  ]);

  return (
    <article className="w-full bg-white py-12 dark:bg-stone-950 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto max-w-3xl px-6 md:px-12 lg:px-24">
        <nav aria-label="Sayfa konumu" className="mb-8 text-sm text-stone-500">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring dark:hover:text-stone-200">
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/rehber" className="hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring dark:hover:text-stone-200">
                Gözlük Rehberi
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-stone-900 dark:text-stone-100" aria-current="page">{article.title}</li>
          </ol>
        </nav>

        <h1 className="mb-6 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
          {article.title}
        </h1>
        <Image
          src={article.image.src}
          alt={article.image.alt}
          width={1200}
          height={800}
          className="mb-8 h-auto w-full rounded-xl"
        />
        <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
          {article.answer}
        </p>

        {article.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="mb-4 text-xl font-semibold text-stone-900 dark:text-stone-50 sm:text-2xl">
              {section.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-stone-700 dark:text-stone-300">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-12 flex flex-wrap gap-3 border-t border-stone-200 pt-8 dark:border-stone-800">
          <Link
            href={article.service.href}
            className="inline-flex min-h-[44px] items-center rounded-lg bg-brand px-5 py-3 text-sm font-medium text-brand-foreground hover:bg-brand-mid focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2"
          >
            {article.service.label}
          </Link>
          <Link
            href="/#iletisim"
            className="inline-flex min-h-[44px] items-center rounded-lg border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 hover:bg-stone-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-900"
          >
            Bize ulaşın
          </Link>
        </div>

        <section className="mt-12 text-sm text-stone-600 dark:text-stone-400">
          <h2 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">Kaynaklar</h2>
          <ul className="list-disc space-y-2 pl-5">
            {article.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring">
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
