import { Check } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import { ButtonLink } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { ListSection } from "@/data/types";

/**
 * Heading + text + bullet list + photo. Photo side alternates (`flip`) so a page
 * with several of these reads as a gentle zig-zag.
 */
export default function ListBlock({
  section,
  id,
  flip = false,
  treatment,
  source,
}: {
  section: ListSection;
  id: string;
  flip?: boolean;
  treatment?: string;
  source?: string;
}) {
  return (
    <Section labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        {section.image && (
          <figure className={`relative lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
            <div data-motion="photo" className={`relative aspect-[4/5] overflow-hidden ${flip ? "rounded-board" : "arch"}`}>
              <SiteImage image={section.image} fill sizes="(min-width: 1024px) 38vw, 100vw" />
            </div>
            {/* Badge / caption from the old site, shown under the photo (not on top of it) */}
            {section.imageBadge && (
              <figcaption className="mt-5 flex items-baseline gap-3">
                <span className="font-display text-[1.75rem] font-semibold leading-none tracking-[-0.02em] text-gold-deep">{section.imageBadge[0]}</span>
                <span className="text-small text-stone">{section.imageBadge.slice(1).join(" ")}</span>
              </figcaption>
            )}
            {section.imageCaption && (
              <figcaption className="mt-5 text-[1.0625rem] font-semibold leading-snug text-ink">{section.imageCaption.join(" ")}</figcaption>
            )}
          </figure>
        )}
        <div className={section.image ? `lg:col-span-7 ${flip ? "lg:order-1" : ""}` : "lg:col-span-12"}>
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} />
          {section.items.length > 0 && (
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-body">
                  <Check aria-hidden="true" strokeWidth={1.75} className="mt-1 size-4 shrink-0 text-gold-deep" />
                  {item}
                </li>
              ))}
            </ul>
          )}
          {section.button && (
            <div className="mt-10">
              {section.button.href ? (
                <ButtonLink href={section.button.href} variant="secondary">
                  {section.button.label}
                </ButtonLink>
              ) : (
                <BookButton label={section.button.label} treatment={treatment} source={source} />
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
