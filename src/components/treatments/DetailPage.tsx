import BookingCTA from "@/components/ui/BookingCTA";
import FaqSection from "@/components/ui/FaqSection";
import type { LandingPage, Treatment } from "@/data/types";
import PageHero from "./PageHero";
import PageSections from "./PageSections";
import RelatedTreatments from "./RelatedTreatments";

/**
 * The shared template for treatment pages (/seminyak/<slug>/) and the landing pages
 * that use the same blocks (Hotel & Villa Massage, Massage Kuta).
 * The page's CONTENT decides which sections appear; this file only decides the order
 * of the fixed parts: hero → sections → FAQ → related treatments → booking.
 */
export default function DetailPage({
  page,
  treatmentName,
  source,
  currentSlug,
}: {
  page: Treatment | LandingPage;
  /** Name used in WhatsApp messages (e.g. "Balinese Massage"). */
  treatmentName?: string;
  /** Page name added to WhatsApp messages. */
  source: string;
  currentSlug?: string;
}) {
  return (
    <>
      <PageHero
        title={page.hero.title}
        note={page.hero.eyebrow}
        image={page.hero.image}
        treatment={treatmentName}
        source={source}
      />
      <PageSections sections={page.sections} treatment={treatmentName ?? page.hero.title} source={source} />
      {page.faq && <FaqSection faq={page.faq} tone="sand" />}
      {page.related && <RelatedTreatments heading={page.related.heading} note={page.related.eyebrow} currentSlug={currentSlug} />}
      {page.cta && <BookingCTA cta={page.cta} treatment={treatmentName} source={source} />}
    </>
  );
}
