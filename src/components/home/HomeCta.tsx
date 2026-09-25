import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import SiteImage from "@/components/ui/SiteImage";
import { homePage } from "@/data/pages/home";
import { SOURCE, SplitTitle } from "./shared";

/**
 * Closing invitation "A Better Way to Experience Wellness in Bali" ("Taman" design):
 * a warm cream band, the text on the left ("in Bali" in gold italic) and the photo fading in on the right
 * (on phones the photo sits on top). Texts and photo: src/data/pages/home.ts → cta.
 */
export default function HomeCta() {
  const { cta } = homePage;

  return (
    <section aria-labelledby="cta-heading" className="py-section">
      <Container>
        <div className="relative isolate overflow-hidden rounded-board bg-cream">
          {cta.image && (
            <div className="relative h-60 sm:h-80 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[56%]">
              <SiteImage image={cta.image} fill sizes="(min-width: 1024px) 50vw, 100vw" focus="60% center" />
              {/* The photo fades into the cream band: from the left on desktop, from below on phones */}
              <div aria-hidden="true" className="absolute inset-y-0 -left-px right-0 hidden bg-[linear-gradient(90deg,var(--color-cream)_0%,rgb(242_230_221/0.6)_22%,rgb(242_230_221/0)_50%)] lg:block" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cream to-transparent lg:hidden" />
            </div>
          )}
          <div className="relative px-6 pb-10 pt-10 sm:px-10 lg:max-w-[42rem] lg:px-14 lg:py-20">
            <Ornament className="justify-start" />
            <h2 id="cta-heading" data-motion="rise" className="mt-6 font-display text-[clamp(2.3rem,1.5rem+3vw,4.25rem)] leading-[1.04]">
              <SplitTitle text={cta.heading} />
            </h2>
            {cta.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-body leading-[1.75] text-stone">
                {paragraph}
              </p>
            ))}
            <div className="mt-9">
              <BookButton label={cta.buttonLabel} size="lg" source={SOURCE} className="rounded-full px-8" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
