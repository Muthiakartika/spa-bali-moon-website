import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { homePage } from "@/data/pages/home";
import { getTreatment } from "@/data/treatments";

/**
 * The old homepage's treatment slider: 23 treatments with their "From IDR …" labels,
 * shown as a row of round photos you can swipe or scroll sideways.
 * Every card on the old site carried the same sentence ("Relax and rejuvenate your body
 * and soul."), so it is shown once as this section's heading (migration-audit CONTENT-07).
 */
export default function FeaturedTreatments() {
  const cards = homePage.featuredTreatments
    .map((item) => ({ item, treatment: getTreatment(item.slug) }))
    .filter((entry) => entry.treatment);
  const sharedLine = homePage.featuredTreatments[0]?.text;

  return (
    <section aria-labelledby="featured-heading" className="relative overflow-hidden bg-linen py-section">
      <TropicalLeaf className="absolute -right-10 -top-6 w-56 rotate-[200deg] text-gold/30 sm:w-72" />

      <Container className="relative text-center">
        <h2 id="featured-heading" data-motion="rise" className="mx-auto max-w-[22ch] text-title">
          {sharedLine}
        </h2>
      </Container>

      <div
        data-motion="rise"
        role="region"
        tabIndex={0}
        aria-label="Treatments (scroll sideways)"
        className="scrollbar-thin relative mt-14 snap-x snap-mandatory overflow-x-auto scroll-px-gutter px-gutter pb-6 lg:mx-auto lg:max-w-site"
      >
        <ul className="flex gap-6 sm:gap-8">
        {cards.map(({ item, treatment }) =>
          treatment ? (
            <li key={item.slug + item.name} className="group relative w-36 shrink-0 snap-start text-center sm:w-44">
              <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-full ring-1 ring-line">
                <SiteImage
                  image={treatment.cardImage}
                  alt=""
                  fill
                  sizes="176px"
                  className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="mt-3 text-[1rem] font-semibold leading-snug">
                <Link href={`/seminyak/${treatment.slug}/`} className="inline-block py-1 after:absolute after:inset-0">
                  {item.name}
                </Link>
              </h3>
              <p className="numeric mt-1 text-small text-stone">{item.priceLabel}</p>
            </li>
          ) : null,
        )}
        </ul>
      </div>

      <div className="relative mt-10 flex justify-center">
        <ButtonLink href="/seminyak/" variant="secondary" size="lg">
          Explore Treatments
        </ButtonLink>
      </div>
    </section>
  );
}
