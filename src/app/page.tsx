import AboutSpa from "@/components/home/AboutSpa";
import FeaturedTreatments from "@/components/home/FeaturedTreatments";
import Hero from "@/components/home/Hero";
import HowBookingWorks from "@/components/home/HowBookingWorks";
import SpaMenu from "@/components/home/SpaMenu";
import SpaPackages from "@/components/home/SpaPackages";
import WhySpaBaliMoon from "@/components/home/WhySpaBaliMoon";
import BookingCTA from "@/components/ui/BookingCTA";
import FaqSection from "@/components/ui/FaqSection";
import Testimonials from "@/components/ui/Testimonials";
import { homePage } from "@/data/pages/home";
import { buildMetadata } from "@/lib/seo";

/**
 * HOMEPAGE (/)
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
      <SpaMenu />
      <FeaturedTreatments />
      <AboutSpa />
      <HowBookingWorks />
      <SpaPackages />
      <WhySpaBaliMoon />
      <Testimonials tone="ivory" />
      <FaqSection faq={homePage.faq} tone="sand" />
      <BookingCTA cta={homePage.cta} source="Homepage" />
    </>
  );
}
