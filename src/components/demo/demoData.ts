/**
 * DESIGN DEMOS — shared data for the three homepage demos under /demo/.
 * Everything here comes from the real site data (src/data); nothing is new content.
 */
import { blogPosts } from "@/data/blog";
import { blogMenu, mainNav, treatmentMenu } from "@/data/navigation";
import { homePage } from "@/data/pages/home";
import { getPriceItem } from "@/data/pricelist";
import { getTreatment } from "@/data/treatments";
import type { BoardTab } from "@/components/treatments/TreatmentBoard";
import type { SiteImage, Treatment } from "@/data/types";
import { rowsForItems, rowsForPackages } from "@/lib/board";

export const demoNav = mainNav;
export const demoDropdowns = { treatments: treatmentMenu, blog: blogMenu };

/** Blog articles for the header search. */
export const searchablePosts = blogPosts.map((post) => ({
  title: post.title,
  excerpt: post.excerpt,
  tags: post.tags,
  href: `/guide/${post.slug}/`,
}));

/** The homepage's featured treatments with their card photos. */
export const featuredCards: { name: string; priceLabel: string; treatment: Treatment }[] = homePage.featuredTreatments
  .map((item) => ({ name: item.name, priceLabel: item.priceLabel, treatment: getTreatment(item.slug) }))
  .filter((card): card is { name: string; priceLabel: string; treatment: Treatment } => Boolean(card.treatment));

/** The homepage's complete spa menu (every tab, every treatment, every price), as on the real homepage. */
export const homeMenuTabs: BoardTab[] = homePage.catalog.tabs.map((tab, i) => ({
  id: `demo-menu-tab-${i}`,
  label: tab.label,
  rows: [
    ...("itemIds" in tab && tab.itemIds ? rowsForItems(tab.itemIds, "home") : []),
    ...("packageGroup" in tab && tab.packageGroup ? rowsForPackages(tab.packageGroup) : []),
  ],
}));

/** First price of a price-list item, e.g. Balinese Massage → { label: "1 Hour", price: 159000 }. */
export function firstPrice(id: string) {
  const item = getPriceItem(id);
  return { name: item.homeName ?? item.pricelistName ?? id, ...item.options[0] };
}

/** Existing site photos used by the demos (1920px wide where a large photo is needed). */
const photo = (src: string, width = 1920, height = 898): SiteImage => ({ src, alt: "", width, height });
export const demoPhotos = {
  frangipaniMassage: photo("/images/home/shared/homepage-28.webp"),
  frangipaniBack: photo("/images/blog/balinese-massage-blog-spa-bali-moon.webp", 1920, 1080),
  canangOffering: photo("/images/treatments/traditional-massage/traditionalmassage-11.webp"),
  lakePenjor: photo("/images/treatments/balinese-massage/balinesemassage-12.webp"),
  candleMassage: photo("/images/treatments/balinese-massage/balinesemassage-11.webp", 895, 682),
  zenGarden: photo("/images/treatments/shiatsu-massage/shiatsumassage-11.webp"),
  frangipaniPool: photo("/images/gallery/home-service/outcall-5.webp"),
  greenLeaves: photo("/images/treatments/body-scrub/bodyscrub-12.webp"),
  coconuts: photo("/images/treatments/coconut-oil-massage/coconutoilmassage-11.webp"),
  arganNuts: photo("/images/beauty/facial/balimoonfacial-12.webp"),
  hotStones: photo("/images/treatments/hot-stone-massage/hotstonemassage-12.webp"),
  beachCouple: photo("/images/treatments/couple-spa/couplemassage-12.webp"),
  feetInWater: photo("/images/treatments/foot-massage/footmassage-11.webp"),
  villaPool: photo("/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp"),
  gardenPath: photo("/images/treatments/day-spa/dayspa-8.webp"),
  beach: photo("/images/beauty/creambath/creambath-12.webp"),
  oilHands: photo("/images/gallery/pricelist/pricelist-1.webp", 1920, 850),
  scrubWarm: photo("/images/treatments/body-scrub/bodyscrub-11.webp", 895, 682),
  gardenFrangipani: photo("/images/treatments/day-spa/dayspa-1.webp", 1920, 850),
  villaCurtains: photo("/images/gallery/villa-hotel-massage/massagehotelvilla-1.webp", 1920, 850),
  therapists: { src: "/images/packages/cards/couplemassagepackage.webp", alt: "Two Spa Bali Moon therapists giving a massage", width: 630, height: 580 },
};
