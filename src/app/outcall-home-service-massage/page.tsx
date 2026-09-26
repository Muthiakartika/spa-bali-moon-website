import GuestReviews from "@/components/home/GuestReviews";
import HomeCta from "@/components/home/HomeCta";
import HomeFaq from "@/components/home/HomeFaq";
import HowBookingWorks from "@/components/home/HowBookingWorks";
import HomeBookingList from "@/components/home-service/HomeBookingList";
import HomeServiceHero from "@/components/home-service/HomeServiceHero";
import HomeServiceInfo from "@/components/home-service/HomeServiceInfo";
import HomeServiceIntro from "@/components/home-service/HomeServiceIntro";
import HomeServicePrices from "@/components/home-service/HomeServicePrices";
import HomeTreatments from "@/components/home-service/HomeTreatments";
import { SOURCE } from "@/components/home-service/shared";
import { homeServicePage } from "@/data/pages/home-service";
import type { SiteImage } from "@/data/types";
import { buildMetadata } from "@/lib/seo";

/**
 * HOME SERVICE (/outcall-home-service-massage/) — the homepage's "Taman" design with the live page's structure.
 * The page's own blocks are in src/components/home-service/; the blocks shared with the homepage
 * (booking steps, reviews, FAQ, closing invitation) come from src/components/home/.
 * Texts: src/data/pages/home-service.ts · Prices: src/data/pricelist.ts · Packages: src/data/packages.ts
 *
 * The live page's sections, texts and prices are kept in the live order:
 *   hero (+ the four facts) → intro → treatments at home → "Get Your Massage Service at Home" → prices
 *   → "Home Service Massage" (what is included, fee) → FAQ → invitation.
 * Added from the homepage: "How Do You Book" after the prices and the guest reviews before the FAQ.
 */
export const metadata = buildMetadata({
  title: homeServicePage.seo.title,
  description: homeServicePage.seo.description,
  path: homeServicePage.path,
  image: homeServicePage.hero.image,
});

// Existing site photo (a therapist at a villa) beside the questions; the live FAQ has no photo.
const faqPhoto: SiteImage = { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-2.webp", alt: "", width: 578, height: 601 };

export default function HomeServicePage() {
  const { faq, cta } = homeServicePage;

  return (
    <>
      <HomeServiceHero />
      <HomeServiceIntro />
      <HomeTreatments />
      <HomeBookingList />
      <HomeServicePrices />
      <HowBookingWorks source={SOURCE} />
      <HomeServiceInfo />
      <GuestReviews />
      <HomeFaq faq={{ ...faq, image: faqPhoto }} />
      <HomeCta cta={cta} source={SOURCE} />
    </>
  );
}
