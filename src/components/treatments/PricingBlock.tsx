import { Check } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import RevealOnView from "@/components/ui/RevealOnView";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { PricingSection } from "@/data/types";
import { formatPrice } from "@/lib/format";

/**
 * Duration / option prices of a treatment, shown on the dark treatment menu panel.
 * Prices come from src/data/pricelist.ts (via priceOf in the treatment file).
 */
export default function PricingBlock({
  section,
  id,
  treatment,
  source,
}: {
  section: PricingSection;
  id: string;
  treatment: string;
  source: string;
}) {
  const photo = section.images?.[0];
  return (
    <Section labelledBy={id} spacing="bottom">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className={photo ? "lg:col-span-7" : "lg:col-span-12"}>
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} />
        </div>
        {photo && (
          <div data-motion="photo" className="relative hidden aspect-[1050/484] overflow-hidden rounded-card lg:col-span-5 lg:block">
            <SiteImage image={photo} fill sizes="40vw" />
          </div>
        )}
      </div>

      <RevealOnView className="board mt-12 p-4 sm:p-7">
        <div className="space-y-8">
          {section.groups.map((group, g) => (
            <div key={group.title ?? g}>
              {group.title && <h3 className="mb-4 font-display text-[1.375rem] font-semibold text-ink">{group.title}</h3>}
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.cards.map((card, i) => (
                  <li key={card.label} className="reveal flex flex-col gap-5 rounded-card bg-linen p-6" style={{ "--reveal-delay": `${i * 40}ms` } as React.CSSProperties}>
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-[0.9375rem] font-semibold text-ink">{card.label}</span>
                      <span className="numeric font-display text-[1.5rem] font-semibold leading-none tracking-[-0.02em] text-gold-deep">
                        <span className="sr-only">Price: </span>
                        {formatPrice(card.price)}
                      </span>
                    </div>
                    {card.points && card.points.length > 0 && (
                      <ul className="space-y-1.5 text-small text-stone">
                        {card.points.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <Check aria-hidden="true" strokeWidth={1.75} className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    {card.bookButton && (
                      <div className="mt-auto">
                        <BookButton
                          label="Book Now"
                          treatment={`${treatment} (${group.title ? `${group.title}, ` : ""}${card.label})`}
                          source={source}
                          variant="light"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </RevealOnView>
    </Section>
  );
}
