/**
 * SEO helper — builds the <head> tags (title, description, canonical, social sharing)
 * for a page, from the values copied from the old website.
 *
 *   export const metadata = buildMetadata({
 *     title: "…", description: "…", path: "/seminyak/balinese-massage/", image: someSiteImage,
 *   });
 */
import type { Metadata } from "next";
import { business } from "@/data/business";
import { pricelistPage } from "@/data/pages/pricelist";
import type { SiteImage } from "@/data/types";

type SeoInput = {
  title: string;
  description: string;
  /** URL path of the page, with trailing slash, e.g. "/contact/" */
  path: string;
  /** Picture shown when the page is shared (WhatsApp, Facebook…). */
  image?: SiteImage;
  /** "article" for blog posts */
  type?: "website" | "article";
  /** Blog posts only */
  publishedTime?: string;
  modifiedTime?: string;
  /** false = hide from Google (only for internal pages) */
  index?: boolean;
};

/**
 * Share picture for pages that have no photo of their own
 * (reservation, privacy policy, terms, wellness). It is the pricelist hero photo.
 */
export const defaultShareImage: SiteImage = pricelistPage.hero.image;

export function absoluteUrl(path: string): string {
  return new URL(path, business.url).toString();
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  index = true,
}: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const shareImage = image ?? defaultShareImage;
  const images = [{ url: absoluteUrl(shareImage.src), width: shareImage.width, height: shareImage.height, alt: shareImage.alt || title }];

  return {
    // `absolute` = use exactly this title (the old site's titles are already complete).
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    // Same robots values as the old website.
    robots: index
      ? { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 }
      : { index: false, follow: false },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: business.name,
      locale: "en_US",
      images,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images.map((img) => img.url),
    },
  };
}
