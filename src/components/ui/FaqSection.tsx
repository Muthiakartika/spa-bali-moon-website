import type { FaqBlock } from "@/data/types";
import Accordion from "./Accordion";
import Section from "./Section";
import SiteImage from "./SiteImage";

/**
 * FAQ section: optional photo + heading + accordion.
 * The old site's small "Frequently Asked Questions" line is kept as the label of the list.
 */
export default function FaqSection({ faq, tone = "ivory" }: { faq: FaqBlock; tone?: "ivory" | "sand" | "sage" }) {
  return (
    <Section tone={tone} labelledBy="faq-heading">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {faq.image && (
          <div className="arch relative aspect-[4/5] overflow-hidden lg:col-span-5 lg:self-start">
            <SiteImage image={faq.image} fill sizes="(min-width: 1024px) 38vw, 100vw" />
          </div>
        )}
        <div className={faq.image ? "lg:col-span-7" : "lg:col-span-8 lg:col-start-3"}>
          <h2 id="faq-heading" className="text-title">
            {faq.heading}
          </h2>
          {faq.subheading && <p className="mt-3 font-serif text-[1.35rem] italic text-brown-ink">{faq.subheading}</p>}
          <div className="mt-10">
            {faq.eyebrow && <p className="label-caps mb-3 text-brown-ink">{faq.eyebrow}</p>}
            <Accordion items={faq.items} />
          </div>
        </div>
      </div>
    </Section>
  );
}
