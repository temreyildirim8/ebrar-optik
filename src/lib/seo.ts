import type { Metadata } from "next";
import { business } from "./business";

export const SITE_URL = business.url;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  path,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Ebrar Optik - Kırıkkale'nin Güvenilir Optik Mağazası",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}
