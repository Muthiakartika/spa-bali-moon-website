import Container from "@/components/ui/Container";
import QuoteSpotlight from "@/components/ui/QuoteSpotlight";
import { testimonials } from "@/data/testimonials";

/**
 * Guest reviews on the homepage ("Taman" design): one large review at a time, all 23 in the page.
 * The reviews are in src/data/testimonials.ts. No visible heading, as on the live site.
 */
export default function GuestReviews() {
  return (
    <section aria-labelledby="reviews-heading" className="py-section">
      <h2 id="reviews-heading" className="sr-only">
        Guest reviews
      </h2>
      <Container>
        <QuoteSpotlight reviews={testimonials} />
      </Container>
    </section>
  );
}
