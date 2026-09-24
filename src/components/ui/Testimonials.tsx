import { testimonials } from "@/data/testimonials";
import Container from "./Container";
import TropicalLeaf from "./TropicalLeaf";

/**
 * Guest reviews (the 23 Google reviews from the old site).
 * The first review is shown large on the left; the others sit in a row you can swipe or scroll.
 * No star ratings are shown on purpose (see migration-audit.md SEO-03), and no visible heading
 * because the old site had none (screen readers still get "Guest reviews").
 * Edit the reviews in src/data/testimonials.ts.
 */
export default function Testimonials({ tone = "linen" }: { tone?: "linen" | "paper" }) {
  const [featured, ...others] = testimonials;
  const cardTone = tone === "linen" ? "bg-paper" : "bg-linen";

  return (
    <section aria-labelledby="reviews-heading" className={`relative overflow-hidden ${tone === "linen" ? "bg-linen" : "bg-paper"} py-section`}>
      <h2 id="reviews-heading" className="sr-only">
        Guest reviews
      </h2>
      <TropicalLeaf className="absolute -bottom-24 -left-20 w-64 rotate-[20deg] text-gold/20 sm:w-80" />

      <Container className="relative grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        {/* Featured review */}
        {featured && (
          <figure data-motion="rise" className="lg:col-span-4">
            <span aria-hidden="true" className="block font-display text-[5rem] font-semibold leading-[0.6] text-gold">
              &ldquo;
            </span>
            <blockquote className="mt-4 text-[1.5rem] font-semibold leading-snug tracking-[-0.015em] text-ink sm:text-[1.75rem]">
              <p>{featured.text}</p>
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              <span>
                <span className="block font-semibold text-ink">{featured.name}</span>
                <span className="text-small text-stone">Customer review</span>
              </span>
            </figcaption>
          </figure>
        )}

        {/* All other reviews */}
        <div
          data-motion="rise"
          tabIndex={0}
          role="region"
          aria-label="More guest reviews (scroll sideways)"
          className="scrollbar-thin -mx-gutter flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-gutter px-gutter pb-4 sm:gap-5 lg:col-span-8 lg:mx-0 lg:scroll-px-0 lg:px-0"
        >
          {others.map((review) => (
            <figure
              key={review.name}
              className={`flex w-[78vw] max-w-[20rem] shrink-0 snap-start flex-col justify-between gap-6 rounded-card border border-line p-6 sm:w-[18rem] ${cardTone}`}
            >
              <blockquote className="text-[1.0625rem] leading-relaxed text-ink">
                <p>&ldquo;{review.text}&rdquo;</p>
              </blockquote>
              <figcaption className="flex flex-col border-t border-line pt-4">
                <span className="block font-semibold text-ink">{review.name}</span>
                <span className="text-small text-stone">Customer review</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
