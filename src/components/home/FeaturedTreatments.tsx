import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { treatmentIcon } from "@/components/treatments/treatmentIcon";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import ShowMoreList from "@/components/ui/ShowMoreList";
import { homePage } from "@/data/pages/home";
import { getTreatment } from "@/data/treatments";
import { liveTreatmentIconSize, liveTreatmentIcons } from "@/data/treatmentIcons";
import { pillLink } from "./shared";

/**
 * The old homepage's 23 featured treatments with their "From IDR …" labels, as a simple list:
 * one compact row per treatment (the live site's gold icon · name · price · arrow), so a visitor can
 * scan them all at once instead of swiping through photos.
 *   desktop: all 23 in four columns · tablet: two columns · phone: one column.
 *   On phones and tablets the first 8 show, with a "Show all 23 treatments" button for the rest.
 * Every card on the old site carried the same sentence ("Relax and rejuvenate your body and soul."),
 * so it is shown once as this section's heading (migration-audit CONTENT-07).
 */
export default function FeaturedTreatments() {
  const cards = homePage.featuredTreatments
    .map((item) => ({ item, treatment: getTreatment(item.slug) }))
    .filter((entry) => entry.treatment);
  const sharedLine = homePage.featuredTreatments[0]?.text;

  return (
    <section aria-labelledby="featured-heading" className="pb-section pt-[calc(var(--spacing-section)*0.8)]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Ornament className="justify-start" />
            <h2 id="featured-heading" data-motion="rise" className="mt-5 max-w-[16ch] font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.75rem)] italic leading-[1.02]">
              {sharedLine}
            </h2>
          </div>
          <Link href="/seminyak/" className={pillLink}>
            Explore Treatments
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ShowMoreList
          total={cards.length}
          moreLabel={`Show all ${cards.length} treatments`}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {cards.map(({ item, treatment }) => {
            if (!treatment) return null;
            const iconSrc = liveTreatmentIcons[item.name];
            const FallbackIcon = treatmentIcon(item.name);
            return (
              <li
                key={item.slug + item.name}
                className="group relative flex items-center gap-4 rounded-card border border-line bg-paper px-4 py-3 transition-colors duration-(--duration-quick) hover:border-gold/50 hover:bg-linen"
              >
                <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                  {iconSrc ? (
                    <Image src={iconSrc} alt="" {...liveTreatmentIconSize} unoptimized className="h-7 w-auto" />
                  ) : (
                    <FallbackIcon aria-hidden="true" strokeWidth={1.5} className="size-5" />
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[1.15rem] leading-snug">
                    <Link href={`/seminyak/${treatment.slug}/`} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                      {item.name}
                    </Link>
                  </h3>
                  <p className="numeric mt-0.5 text-[0.8125rem] font-semibold text-gold-deep">{item.priceLabel}</p>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-4 shrink-0 text-stone transition-[color,transform] duration-(--duration-quick) group-hover:translate-x-0.5 group-hover:text-gold-deep"
                />
              </li>
            );
          })}
        </ShowMoreList>
      </Container>
    </section>
  );
}
