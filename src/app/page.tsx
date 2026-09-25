import AboutSpa from "@/components/home/AboutSpa";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import GuestReviews from "@/components/home/GuestReviews";
import Hero from "@/components/home/Hero";
import HomeCta from "@/components/home/HomeCta";
import HomeFaq from "@/components/home/HomeFaq";
import HowBookingWorks from "@/components/home/HowBookingWorks";
import SpaMenu from "@/components/home/SpaMenu";
import SpaPackages from "@/components/home/SpaPackages";
import WhySpaBaliMoon from "@/components/home/WhySpaBaliMoon";
import { homePage } from "@/data/pages/home";
import { buildMetadata } from "@/lib/seo";

/**
 * HOMEPAGE (/) — the "Taman" design chosen by the client (2026-09-25).
 * Each block is its own component in src/components/home/.
 * Texts live in src/data/pages/home.ts. To reorder sections, move the lines below.
 */
export const metadata = buildMetadata({
  title: homePage.seo.title,
  description: homePage.seo.description,
  path: "/",
  image: homePage.hero.images[0],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedTreatments />
      <WhySpaBaliMoon />
      <AboutSpa />
      <SpaMenu />
      <HowBookingWorks />
      <SpaPackages />
      <GuestReviews />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
