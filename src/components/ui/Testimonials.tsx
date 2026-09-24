import { testimonials } from "@/data/testimonials";
import Container from "./Container";

/**
 * Guest reviews (the 23 Google reviews from the old site), in a row you can swipe or scroll.
 * No star ratings are shown on purpose (see migration-audit.md SEO-03).
 * Edit the reviews in src/data/testimonials.ts.
 */
export default function Testimonials({ tone = "sand" }: { tone?: "sand" | "ivory" }) {
  return (
    <section aria-labelledby="reviews-heading" className={`${tone === "sand" ? "bg-sand" : "bg-ivory"} py-section`}>
      <Container>
        <h2 id="reviews-heading" className="sr-only">
          Guest reviews
        </h2>
      </Container>
      <div
        tabIndex={0}
        role="region"
        aria-label="Guest reviews (scroll sideways)"
        className="scrollbar-thin flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-gutter px-gutter pb-4 sm:gap-6 lg:mx-auto lg:max-w-site"
      >
        {testimonials.map((review) => (
          <figure
            key={review.name}
            className={`flex w-[78vw] max-w-[22rem] shrink-0 snap-start flex-col justify-between gap-6 rounded-card p-6 sm:w-[20rem] sm:p-7 ${tone === "sand" ? "bg-ivory" : "bg-sand"}`}
          >
            <span aria-hidden="true" className="-mb-4 block font-serif text-[4.5rem] leading-[0.6] text-taupe">
              &ldquo;
            </span>
            <blockquote className="font-serif text-[1.35rem] leading-snug text-olive">
              <p>&ldquo;{review.text}&rdquo;</p>
            </blockquote>
            <figcaption className="flex flex-col border-t border-taupe/60 pt-4">
              <span className="block font-semibold text-olive">{review.name}</span>
              <span className="text-small text-brown-ink">Customer review</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
