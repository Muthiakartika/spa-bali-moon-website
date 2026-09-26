import Accordion from "@/components/ui/Accordion";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import { homePage } from "@/data/pages/home";
import type { FaqBlock } from "@/data/types";
import { noteClass, titleClass } from "./shared";

/**
 * "Time to Unwind — Everything You Need to Know" ("Taman" design): the small label, the title,
 * the gold italic sub-title and an arched photo on the left, the questions on the right.
 * On large screens the left side stays in view while a long list of questions scrolls past.
 * Texts: src/data/pages/home.ts → faq (the Pricelist page passes its own `faq`).
 */
export default function HomeFaq({ faq = homePage.faq }: { faq?: FaqBlock }) {
  return (
    <section aria-labelledby="faq-heading" className="bg-linen py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          {faq.eyebrow && <p className="text-[0.8125rem] font-bold uppercase tracking-[0.2em] text-gold-deep">{faq.eyebrow}</p>}
          <h2 id="faq-heading" className={`mt-4 ${titleClass}`}>
            {faq.heading}
          </h2>
          {faq.subheading && <p className={`mt-2 ${noteClass}`}>{faq.subheading}</p>}
          {faq.image && (
            <div data-motion="photo" className="arch relative mt-10 aspect-[4/3] w-full max-w-[28rem] overflow-hidden lg:aspect-[4/5] lg:w-4/5">
              <SiteImage image={faq.image} fill sizes="(min-width: 1024px) 30vw, 448px" />
            </div>
          )}
        </div>
        <div className="lg:col-span-7">
          <Accordion items={faq.items} />
        </div>
      </Container>
    </section>
  );
}
