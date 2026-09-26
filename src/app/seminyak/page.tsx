import GuestReviews from "@/components/home/GuestReviews";
import HomeCta from "@/components/home/HomeCta";
import HomeFaq from "@/components/home/HomeFaq";
import HowBookingWorks from "@/components/home/HowBookingWorks";
import CompleteMenu from "@/components/pricelist/CompleteMenu";
import MenuCategories from "@/components/pricelist/MenuCategories";
import PackageCollections from "@/components/pricelist/PackageCollections";
import PriceMenu from "@/components/pricelist/PriceMenu";
import PricelistHero from "@/components/pricelist/PricelistHero";
import { SOURCE } from "@/components/pricelist/shared";
import { pricelistPage } from "@/data/pages/pricelist";
import { buildMetadata } from "@/lib/seo";

/**
 * PRICELIST & SPA PACKAGES (/seminyak/) — the homepage's "Taman" design with the live price list's structure.
 * The page's own blocks are in src/components/pricelist/; the blocks shared with the homepage
 * (booking steps, reviews, FAQ, closing invitation) come from src/components/home/.
 * Texts: src/data/pages/pricelist.ts · Prices: src/data/pricelist.ts · Packages: src/data/packages.ts
 *
 * The live page's sections, texts and prices are kept in the live order:
 *   hero → "Which Treatment…" (+ the four parts of the menu) → "A Complete Spa Menu" → the price list (menu card)
 *   → all spa packages, one section per collection → reviews → FAQ → invitation.
 * Added from the homepage: the facts card under the hero and "How Do You Book" after the price list.
 */
export const metadata = buildMetadata({
  title: pricelistPage.seo.title,
  description: pricelistPage.seo.description,
  path: pricelistPage.path,
  image: pricelistPage.hero.image,
});

export default function PricelistPage() {
  const { faq, cta } = pricelistPage;

  return (
    <>
      <PricelistHero />
      <MenuCategories />
      <CompleteMenu />
      <PriceMenu />
      <HowBookingWorks source={SOURCE} />
      <PackageCollections />
      <GuestReviews />
      <HomeFaq faq={faq} />
      <HomeCta cta={cta} source={SOURCE} />
    </>
  );
}
