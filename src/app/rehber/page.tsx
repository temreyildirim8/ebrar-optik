import Link from "next/link";
import Image from "next/image";
import { guideArticles } from "@/lib/guide";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Gözlük Rehberi | Ebrar Optik",
  description:
    "Çerçeve ölçüsü, mevcut gözlüğe yeni cam ve numaralı güneş gözlüğü seçimi hakkında kısa, anlaşılır rehberler.",
  path: "/rehber",
});

export default function RehberPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Ana Sayfa", path: "/" },
    { name: "Gözlük Rehberi", path: "/rehber" },
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
            <li className="text-stone-900 dark:text-stone-100">Gözlük Rehberi</li>
          </ol>
        </nav>

        <h1 className="mb-4 text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50 sm:text-4xl">
          Gözlük Rehberi
        </h1>
        <p className="mb-10 text-base leading-relaxed text-stone-700 dark:text-stone-300">
          Eski çerçevenize yeni cam olur mu? Çerçevedeki sayılar ne anlama gelir?
          Numaralı güneş gözlüğünde nelere bakılır? Mağazaya gelmeden önce bu kısa rehberlere göz atabilirsiniz.
        </p>

        <Image
          src="/assets/ebrar-giris.webp"
          alt="Ebrar Optik mağazasının girişi ve vitrini"
          width={1200}
          height={800}
          className="mb-10 h-auto w-full rounded-xl"
        />

        <ul className="space-y-5">
          {guideArticles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/rehber/${article.slug}`}
                className="block rounded-xl border border-stone-200 p-6 transition-colors hover:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-ring focus-visible:ring-offset-2 dark:border-stone-700"
              >
                <h2 className="mb-2 text-xl font-semibold text-stone-900 dark:text-stone-50">
                  {article.title}
                </h2>
                <p className="text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  {article.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
