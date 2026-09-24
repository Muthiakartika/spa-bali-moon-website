import Container from "@/components/ui/Container";
import TreatmentCard from "@/components/treatments/TreatmentCard";
import { homePage } from "@/data/pages/home";
import { getTreatment } from "@/data/treatments";

/**
 * The old homepage's treatment slider: 23 treatments with their "From IDR …" labels.
 * Every card on the old site carried the same sentence ("Relax and rejuvenate your body
 * and soul."), so it is shown once as this section's heading (migration-audit CONTENT-07).
 */
export default function FeaturedTreatments() {
  const cards = homePage.featuredTreatments
    .map((item) => ({ item, treatment: getTreatment(item.slug) }))
    .filter((entry) => entry.treatment);
  const sharedLine = homePage.featuredTreatments[0]?.text;

  return (
    <section aria-labelledby="featured-heading" className="bg-sage-mist py-section">
      <Container>
        <h2 id="featured-heading" className="max-w-[18ch] text-title">
          {sharedLine}
        </h2>
      </Container>
      <div
        tabIndex={0}
        role="region"
        aria-label="Treatments (scroll sideways)"
        className="scrollbar-thin mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-gutter px-gutter pb-4 lg:mx-auto lg:max-w-site"
      >
        {cards.map(({ item, treatment }) =>
          treatment ? (
            <TreatmentCard
              key={item.slug + item.name}
              treatment={treatment}
              name={item.name}
              label={item.priceLabel}
              showDescription={false}
              className="w-[64vw] max-w-[16rem] shrink-0 snap-start sm:w-[15rem]"
            />
          ) : null,
        )}
      </div>
    </section>
  );
}
