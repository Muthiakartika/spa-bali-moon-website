import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { getTreatment, relatedTreatmentSlugs } from "@/data/treatments";
import type { Treatment } from "@/data/types";
import TreatmentCard from "./TreatmentCard";

/** "Explore Beyond…" row of other treatments (the same list the old site used). */
export default function RelatedTreatments({
  heading,
  note,
  currentSlug,
}: {
  heading: string;
  note?: string;
  currentSlug?: string;
}) {
  const items = relatedTreatmentSlugs
    .filter((slug) => slug !== currentSlug)
    .map((slug) => getTreatment(slug))
    .filter((treatment): treatment is Treatment => Boolean(treatment));

  return (
    <section aria-labelledby="related-heading" className="bg-ivory pb-section">
      <Container>
        <SectionHeading id="related-heading" title={heading.replace(" / ", " ")} note={note} />
      </Container>
      <div
        tabIndex={0}
        role="region"
        aria-label={`${heading.replace(" / ", " ")} (scroll sideways)`}
        className="scrollbar-thin mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-gutter px-gutter pb-4 lg:mx-auto lg:max-w-site"
      >
        {items.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} className="w-[72vw] max-w-[18rem] shrink-0 snap-start sm:w-[16rem]" />
        ))}
      </div>
    </section>
  );
}
