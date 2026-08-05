import type { Metadata } from "next";

import { SITE, siteName } from "@/lib/site";

export function toAbsoluteUrl(url: string): string {
  if (!url) return SITE;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  if (url.startsWith("/")) return `${SITE}${url}`;
  return `${SITE}/${url}`;
}

export function seoForRoute(params: {
  pathname: string;
  title: string;
  description?: string;
  imageUrl?: string;
}): Metadata {
  const url = toAbsoluteUrl(params.pathname);
  const image = params.imageUrl ? toAbsoluteUrl(params.imageUrl) : `${SITE}/images/hero-forest.jpg`;

  return {
    metadataBase: new URL(SITE),
    alternates: {
      canonical: url,
    },
    title: params.title,
    description: params.description,
    openGraph: {
      title: params.title,
      description: params.description,
      type: "website",
      url,
      images: [{ url: image }],
      siteName,
      locale: "en_IN",
    },
  };
}
