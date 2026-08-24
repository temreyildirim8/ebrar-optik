import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const routes: {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/kirikkale-optik", priority: 0.9, changeFrequency: "monthly" },
  { path: "/gozluk", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gunes-gozlugu", priority: 0.8, changeFrequency: "monthly" },
  { path: "/lens", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sss", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
