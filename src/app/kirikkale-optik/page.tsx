import { ServicePageLayout } from "@/components/ServicePageLayout";
import { servicePages } from "@/lib/service-pages";
import { buildPageMetadata } from "@/lib/seo";

const page = servicePages["kirikkale-optik"];

export const metadata = buildPageMetadata({
  title: page.metaTitle,
  description: page.metaDescription,
  path: page.path,
});

export default function KirikkaleOptikPage() {
  return <ServicePageLayout page={page} />;
}
