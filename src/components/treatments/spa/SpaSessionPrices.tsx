import { Check, Flower2 } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import type { PricingSection } from "@/data/types";
import { formatPrice } from "@/lib/format";

/**
 * Session prices (spa template), e.g. "Balinese Massage Session": one card per duration,
 * styled like the price-menu card (paper, thin gold frame, large gold price, checked points).
 * Prices come from src/data/pricelist.ts (via priceOf in the treatment file).
 */
export default function SpaSessionPrices({
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
    <section id="prices" aria-labelledby={id} className="relative overflow-hidden bg-linen py-section">
      <TropicalLeaf className="absolute -right-20 top-0 w-72 rotate-[200deg] text-gold/25 sm:w-96" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className={photo ? "lg:col-span-6" : "mx-auto max-w-[44rem] text-center lg:col-span-12"}>
            <div aria-hidden="true" className={`flex items-center gap-3 text-gold ${photo ? "" : "justify-center"}`}>
              <span className="h-px w-10 bg-gold/50" />
              <Flower2 strokeWidth={1.25} className="size-6" />
              <span className="h-px w-10 bg-gold/50" />
            </div>
            <h2 id={id} data-motion="rise" className="mt-4 text-title">
              {section.heading}
            </h2>
            {section.eyebrow && <p className="mt-3 text-lead text-stone">{section.eyebrow}</p>}
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="mt-4 max-w-[58ch] text-body text-stone">
                {paragraph}
              </p>
            ))}
          </div>
          {photo && (
            <div data-motion="photo" className="relative aspect-[16/9] overflow-hidden rounded-board lg:col-span-6">
              <SiteImage image={photo} fill sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          )}
        </div>

        <div className="mt-12 space-y-10">
          {section.groups.map((group, g) => (
            <div key={group.title ?? g}>
              {group.title && <h3 className="mb-5 text-subtitle">{group.title}</h3>}
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {group.cards.map((card) => (
                  <li key={card.label} data-motion="rise" className="relative flex flex-col rounded-board bg-paper p-7 shadow-(--shadow-board) sm:p-8">
                    {/* thin gold frame, like a printed menu card */}
                    <div aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[12px] border border-gold/30" />
                    <div className="relative flex flex-1 flex-col">
                      <p className="text-[1.0625rem] font-semibold">{card.label}</p>
                      <p className="numeric mt-2 font-display text-[2.75rem] font-semibold leading-none tracking-[-0.03em] text-gold-deep">
                        <span className="sr-only">Price: </span>
                        {formatPrice(card.price)}
                      </p>
                      {card.points && card.points.length > 0 && (
                        <ul className="mt-6 space-y-2 border-t border-line pt-5 text-small text-stone">
                          {card.points.map((point) => (
                            <li key={point} className="flex gap-2.5">
                              <Check aria-hidden="true" strokeWidth={1.75} className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                      {card.bookButton && (
                        <div className="mt-auto pt-7">
                          <BookButton
                            label="Book Now"
                            treatment={`${treatment} (${group.title ? `${group.title}, ` : ""}${card.label})`}
                            source={source}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
