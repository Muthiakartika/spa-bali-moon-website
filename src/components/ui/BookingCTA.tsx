import type { CallToAction } from "@/data/types";
import BookButton from "./BookButton";
import Container from "./Container";
import SiteImage from "./SiteImage";

/**
 * The closing "book now" section at the bottom of a page:
 * a photo with a Warm Brown panel holding the heading, text and WhatsApp button.
 */
export default function BookingCTA({
  cta,
  treatment,
  source,
}: {
  cta: CallToAction;
  /** Treatment named in the WhatsApp message (treatment pages). */
  treatment?: string;
  source?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-ivory py-section">
      <Container>
        <div className="grid items-stretch overflow-hidden rounded-board lg:grid-cols-12">
          {cta.image && (
            <div className="relative min-h-72 lg:col-span-7 lg:min-h-[32rem]">
              <SiteImage image={cta.image} alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" />
            </div>
          )}
          <div
            className={`relative flex flex-col justify-center gap-6 overflow-hidden bg-brown-deep p-8 text-ivory sm:p-12 ${cta.image ? "lg:col-span-5" : "lg:col-span-12"}`}
          >
            <div aria-hidden="true" className="absolute -right-20 -top-20 size-64 rounded-full bg-taupe/25" />
            <h2 id="cta-heading" className="relative text-title text-ivory">
              {cta.heading}
            </h2>
            <div className="relative space-y-4 text-body text-ivory">
              {cta.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="relative">
              <BookButton label={cta.buttonLabel} treatment={treatment} source={source} variant="light" size="lg" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
