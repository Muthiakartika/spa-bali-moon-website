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
            <div className={`relative aspect-[4/5] overflow-hidden ${flip ? "rounded-board" : "arch"}`}>
              <SiteImage image={section.image} fill sizes="(min-width: 1024px) 38vw, 100vw" />
            </div>
            {section.imageBadge && (
              <figcaption className="absolute -bottom-6 left-6 rounded-card bg-brown-deep px-5 py-4 text-ivory shadow-[var(--shadow-lift)]">
                <span className="block font-serif text-[1.9rem] leading-none">{section.imageBadge[0]}</span>
                <span className="label-caps mt-1 block text-ivory">{section.imageBadge.slice(1).join(" ")}</span>
              </figcaption>
            )}
            {section.imageCaption && (
              <figcaption className="absolute -bottom-6 right-6 max-w-[70%] rounded-card bg-sage-mist px-5 py-3 font-serif text-[1.35rem] italic leading-tight text-olive shadow-[var(--shadow-lift)]">
                {section.imageCaption.join(" ")}
              </figcaption>
            )}
          </figure>
        )}
        <div className={section.image ? `lg:col-span-7 ${flip ? "lg:order-1" : ""}` : "lg:col-span-12"}>
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} layout="stacked" />
          {section.items.length > 0 && (
            <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-body">
                  <span aria-hidden="true" className="mt-[0.6em] size-2 shrink-0 rounded-full bg-sage" />
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
