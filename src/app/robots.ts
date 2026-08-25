import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // /kvkk sayfası meta noindex ile hariç tutuluyor; robots.txt'te ayrıca
    // engellenirse Google noindex'i göremez ve URL indekslenebilir.
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
