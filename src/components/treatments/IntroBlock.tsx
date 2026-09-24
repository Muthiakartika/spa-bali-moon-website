import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import type { IntroSection } from "@/data/types";

/** Opening section: two photos, heading, text and two short highlights. */
export default function IntroBlock({ section, id }: { section: IntroSection; id: string }) {
  const [first, second] = section.images ?? [];
  return (
    <Section labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {first && (
          <div className="relative lg:col-span-5">
            <div className="arch relative aspect-[4/5] w-[82%] overflow-hidden">
              <SiteImage image={first} fill sizes="(min-width: 1024px) 34vw, 80vw" />
            </div>
            {second && (
              <div className="absolute -bottom-8 right-0 aspect-square w-[48%] overflow-hidden rounded-full border-[6px] border-ivory">
                <SiteImage image={second} fill sizes="(min-width: 1024px) 20vw, 45vw" />
              </div>
            )}
          </div>
        )}
        <div className={first ? "lg:col-span-7 lg:pt-6" : "lg:col-span-12"}>
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} layout="stacked" />
          {section.highlights && section.highlights.length > 0 && (
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {section.highlights.map((item) => (
                <div key={item.title} className="rounded-card bg-sand p-6">
                  <dt className="font-serif text-subtitle">{item.title}</dt>
                  <dd className="mt-2 text-body text-brown-ink">{item.text}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </Section>
  );
}
