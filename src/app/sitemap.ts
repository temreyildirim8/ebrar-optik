import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

const routes: {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>;
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/kirikkale-optik", priority: 0.9, changeFrequency: "weekly" },
  { path: "/sgk-anlasmali-optik", priority: 0.9, changeFrequency: "weekly" },
  { path: "/gozluk", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gunes-gozlugu", priority: 0.8, changeFrequency: "weekly" },
  { path: "/lens", priority: 0.8, changeFrequency: "weekly" },
  { path: "/cam-cerceve-degisimi", priority: 0.8, changeFrequency: "weekly" },
  { path: "/cocuk-gozlugu", priority: 0.8, changeFrequency: "weekly" },
  { path: "/sss", priority: 0.7, changeFrequency: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path === "/" ? SITE_URL : `${SITE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
