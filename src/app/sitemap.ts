import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { contactPage } from "@/data/pages/contact";
import { homeServicePage } from "@/data/pages/home-service";
import { homePage } from "@/data/pages/home";
import { kutaPage } from "@/data/pages/massage-kuta";
import { pricelistPage } from "@/data/pages/pricelist";
import { villaHotelPage } from "@/data/pages/villa-hotel-massage";
import { treatments } from "@/data/treatments";
import type { SiteImage } from "@/data/types";
import { absoluteUrl } from "@/lib/seo";

/**
 * SITEMAP (/sitemap.xml) — the list of pages Google should index.
 * Same 42 pages as the old sitemap. /styleguide/ is left out on purpose (internal page).
 *
 * "Last updated" dates are copied from the old sitemap (migration/source-data/live-sitemap.xml).
 * When you change a page's content, update its date here.
 */
const lastUpdated: Record<string, string> = {
  "/": "2026-07-08T01:37:02+00:00",
  "/seminyak/": "2026-07-08T01:50:34+00:00",
  "/outcall-home-service-massage/": "2026-07-08T01:43:32+00:00",
  "/villa-hotel-massage/": "2026-07-06T06:38:12+00:00",
  "/massage-kuta/": "2026-05-26T01:45:12+00:00",
  "/reservation/": "2026-07-06T06:53:00+00:00",
  "/contact/": "2026-01-21T06:55:30+00:00",
  "/guide/": "2026-07-06T08:14:14+00:00",
  "/wellness-in-bali/": "2026-07-07T06:15:46+00:00",
  "/privacy-policy/": "2026-03-24T07:03:50+00:00",
  "/terms-and-conditions/": "2026-03-24T07:00:23+00:00",
  "/seminyak/anti-cellulite-massage/": "2026-07-07T05:26:17+00:00",
  "/seminyak/balinese-massage/": "2026-07-06T06:40:25+00:00",
  "/seminyak/body-scrub/": "2026-07-06T06:29:01+00:00",
  "/seminyak/coconut-oil-massage/": "2026-07-06T06:40:43+00:00",
  "/seminyak/couple-spa/": "2026-07-06T05:10:55+00:00",
  "/seminyak/creambath/": "2026-07-06T06:37:10+00:00",
  "/seminyak/day-spa/": "2026-07-06T06:39:18+00:00",
  "/seminyak/deep-tissue-massage/": "2026-07-07T05:25:27+00:00",
  "/seminyak/ear-wax-removal/": "2026-07-06T06:22:17+00:00",
  "/seminyak/facial/": "2026-07-06T06:17:36+00:00",
  "/seminyak/foot-massage/": "2026-07-07T06:14:25+00:00",
  "/seminyak/foot-reflexology/": "2026-07-07T05:22:52+00:00",
  "/seminyak/hair-braiding/": "2026-07-06T05:11:42+00:00",
  "/seminyak/head-massage/": "2026-07-06T06:25:57+00:00",
  "/seminyak/hot-stone-massage/": "2026-07-06T06:29:51+00:00",
  "/seminyak/lymphatic-drainage-massage/": "2026-07-07T05:32:03+00:00",
  "/seminyak/manicure-pedicure/": "2026-07-06T06:16:51+00:00",
  "/seminyak/nail-spa/": "2026-07-06T06:27:58+00:00",
  "/seminyak/shiatsu-massage/": "2026-07-06T05:13:16+00:00",
  "/seminyak/sport-massage/": "2026-07-07T05:23:53+00:00",
  "/seminyak/sunburn-massage/": "2026-07-06T06:23:11+00:00",
  "/seminyak/thai-massage/": "2026-07-06T06:22:41+00:00",
  "/seminyak/traditional-massage/": "2026-07-06T06:42:02+00:00",
  "/seminyak/waxing-salon/": "2026-07-06T05:12:10+00:00",
};

type SitemapPage = { path: string; image?: SiteImage; lastModified?: string };

function toSitemapEntry(page: SitemapPage): MetadataRoute.Sitemap[number] {
  return {
    url: absoluteUrl(page.path),
    lastModified: page.lastModified ?? lastUpdated[page.path],
    images: page.image ? [absoluteUrl(page.image.src)] : undefined,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: SitemapPage[] = [
    { path: "/", image: homePage.hero.images[0] },
    { path: "/seminyak/", image: pricelistPage.hero.image },
    ...treatments.map((treatment) => ({ path: `/seminyak/${treatment.slug}/`, image: treatment.hero.image })),
    { path: "/outcall-home-service-massage/", image: homeServicePage.hero.image },
    { path: "/villa-hotel-massage/", image: villaHotelPage.hero.image },
    { path: "/massage-kuta/", image: kutaPage.hero.image },
    { path: "/reservation/" },
    { path: "/contact/", image: contactPage.hero.image },
    { path: "/guide/", image: blogPosts[0]?.coverImage },
    ...blogPosts.map((post) => ({ path: `/guide/${post.slug}/`, image: post.coverImage, lastModified: post.updatedAt })),
    { path: "/wellness-in-bali/" },
    { path: "/privacy-policy/" },
    { path: "/terms-and-conditions/" },
  ];

  return pages.map(toSitemapEntry);
}
