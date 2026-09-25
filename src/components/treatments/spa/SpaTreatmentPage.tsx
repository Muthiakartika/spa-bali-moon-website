import { ArrowDown } from "lucide-react";
import BookingCTA from "@/components/ui/BookingCTA";
import FaqSection from "@/components/ui/FaqSection";
import Testimonials from "@/components/ui/Testimonials";
import type { LandingPage, Treatment } from "@/data/types";
import PhotoHero from "../PhotoHero";
import RelatedTreatments from "../RelatedTreatments";
import SpaFactsBand from "./SpaFactsBand";
import SpaIntro from "./SpaIntro";
import SpaListSection, { type SpaListLook } from "./SpaListSection";
import SpaPackageShowcase from "./SpaPackageShowcase";
import SpaSessionPrices from "./SpaSessionPrices";

/** List sections take these looks in turn, so two list sections in a row never look the same. */
const listLooks: SpaListLook[] = ["cards", "chips", "checks"];

/**
 * SPA TREATMENT PAGE — the redesigned template for treatment pages (same content as DetailPage).
 * Order: photo hero → the page's sections (in the order of its data file) → FAQ → related → booking.
 * Which treatment pages use it is set in src/app/seminyak/[slug]/page.tsx.
 */
export default function SpaTreatmentPage({
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
  const treatment = treatmentName ?? page.hero.title;
  const hasPrices = page.sections.some((section) => section.type === "pricing");
  let listIndex = 0;

  return (
    <>
      <PhotoHero title={page.hero.title} note={page.hero.eyebrow} image={page.hero.image} source={source} focus="60% center">
        {hasPrices && (
          <a
            href="#prices"
            className="group inline-flex min-h-12 items-center gap-2 font-medium text-paper underline decoration-paper/40 underline-offset-[0.35em] transition-colors hover:decoration-paper"
          >
            View Prices
            <ArrowDown aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform duration-(--duration-quick) group-hover:translate-y-0.5" />
          </a>
        )}
      </PhotoHero>

      {page.sections.map((section, i) => {
        const id = `section-${i}`;
        switch (section.type) {
          case "intro":
            return <SpaIntro key={id} section={section} id={id} />;
          case "pricing":
            return <SpaSessionPrices key={id} section={section} id={id} treatment={treatment} source={source} />;
          case "packages":
            return <SpaPackageShowcase key={id} section={section} id={id} source={source} />;
          case "stats":
            return <SpaFactsBand key={id} section={section} />;
          case "testimonials":
            return <Testimonials key={id} />;
          case "list": {
            const look = listLooks[listIndex++ % listLooks.length];
            return <SpaListSection key={id} section={section} id={id} look={look} treatment={treatment} source={source} />;
          }
        }
      })}

      {page.faq && <FaqSection faq={page.faq} tone="linen" />}
      {page.related && <RelatedTreatments heading={page.related.heading} note={page.related.eyebrow} currentSlug={currentSlug} />}
      {page.cta && <BookingCTA cta={page.cta} treatment={treatmentName} source={source} />}
    </>
  );
}
