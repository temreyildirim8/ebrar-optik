import { ServicePageLayout } from "@/components/ServicePageLayout";
import { servicePages } from "@/lib/service-pages";
import { buildPageMetadata } from "@/lib/seo";

const page = servicePages["gunes-gozlugu"];

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function GunesGozluguPage() {
  return <ServicePageLayout page={page} />;
}
