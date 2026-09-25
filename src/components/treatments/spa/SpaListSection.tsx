import { Check } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import { ButtonLink } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import type { ListSection } from "@/data/types";

/**
 * A heading + text + list section (spa template), in one of three looks so that
 * several list sections in a row never repeat the same layout:
 *   "cards"  – arched photo on the left, the list as small cards on the right
 *   "chips"  – centred: round photo, heading, and the list as pills
 *   "checks" – text and a checked list on the left, a tall photo on the right
 */
export type SpaListLook = "cards" | "chips" | "checks";

export default function SpaListSection({
  section,
  id,
  look,
  treatment,
  source,
}: {
  section: ListSection;
  id: string;
  look: SpaListLook;
  treatment?: string;
  source?: string;
}) {
  const button = section.button ? (
    section.button.href ? (
      <ButtonLink href={section.button.href} variant="secondary">
        {section.button.label}
      </ButtonLink>
    ) : (
      <BookButton label={section.button.label} treatment={treatment} source={source} />
    )
  ) : null;

  // The old site's badge / caption, shown under the photo (never on top of it).
  const photoNote = section.imageBadge ? (
    <p className="mt-5 flex items-baseline gap-3">
      <span className="font-display text-[2rem] font-semibold leading-none tracking-[-0.02em] text-gold-deep">{section.imageBadge[0]}</span>
      <span className="text-small text-stone">{section.imageBadge.slice(1).join(" ")}</span>
    </p>
  ) : section.imageCaption ? (
    <p className="mt-4 text-lead font-semibold text-ink">{section.imageCaption.join(" ")}</p>
  ) : null;

  if (look === "chips") {
    return (
      <section aria-labelledby={id} className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -left-16 top-10 hidden w-64 text-gold/25 md:block" />
        <TropicalLeaf className="absolute -right-16 top-10 hidden w-64 -scale-x-100 text-gold/25 md:block" />
        <Container className="relative flex flex-col items-center text-center">
          {section.image && (
            <figure className="flex flex-col items-center">
              <div data-motion="photo" className="relative size-40 overflow-hidden rounded-full border-[6px] border-paper shadow-(--shadow-board) sm:size-48">
                <SiteImage image={section.image} fill sizes="12rem" />
              </div>
              {section.imageCaption && <figcaption className="mt-3 text-small font-semibold text-gold-deep">{section.imageCaption.join(" ")}</figcaption>}
            </figure>
          )}
          <h2 id={id} data-motion="rise" className="mt-8 max-w-[22ch] text-title">
            {section.heading}
          </h2>
          {section.eyebrow && <p className="mt-3 text-lead text-stone">{section.eyebrow}</p>}
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-4 max-w-[62ch] text-body text-stone">
              {paragraph}
            </p>
          ))}
          <ul className="mt-10 flex max-w-[60rem] flex-wrap justify-center gap-3">
            {section.items.map((item) => (
              <li key={item} data-motion="rise" className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper px-5 py-3 text-body">
                <Check aria-hidden="true" strokeWidth={1.75} className="size-4 shrink-0 text-gold-deep" />
                {item}
              </li>
            ))}
          </ul>
          {button && <div className="mt-10">{button}</div>}
        </Container>
      </section>
    );
  }

  if (look === "checks") {
    return (
      <section aria-labelledby={id} className="bg-paper py-section">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {section.items.map((item) => (
                <li key={item} data-motion="rise" className="flex items-start gap-3 rounded-card bg-linen p-4">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-gold-deep">
                    <Check aria-hidden="true" strokeWidth={2} className="size-4 text-paper" />
                  </span>
                  <span className="pt-0.5 text-body">{item}</span>
                </li>
              ))}
            </ul>
            {button && <div className="mt-10">{button}</div>}
          </div>
          {section.image && (
            <figure className="lg:col-span-5">
              <div data-motion="photo" className="relative aspect-[4/5] overflow-hidden rounded-board">
                <SiteImage image={section.image} fill sizes="(min-width: 1024px) 38vw, 100vw" />
              </div>
              {photoNote}
            </figure>
          )}
        </Container>
      </section>
    );
  }

  // "cards"
  return (
    <section aria-labelledby={id} className="bg-paper py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {section.image && (
          <figure className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div data-motion="photo" className="arch relative aspect-[4/5] overflow-hidden">
                <SiteImage image={section.image} fill sizes="(min-width: 1024px) 30vw, 100vw" />
              </div>
              {photoNote}
            </div>
          </figure>
        )}
        <div className={section.image ? "lg:col-span-8" : "lg:col-span-12"}>
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {section.items.map((item) => (
              <li key={item} data-motion="rise" className="flex gap-3 rounded-card border border-line bg-paper p-5">
                <Check aria-hidden="true" strokeWidth={1.75} className="mt-1 size-4 shrink-0 text-gold-deep" />
                <span className="text-body">{item}</span>
              </li>
            ))}
          </ul>
          {button && <div className="mt-10">{button}</div>}
        </div>
      </Container>
    </section>
  );
}
