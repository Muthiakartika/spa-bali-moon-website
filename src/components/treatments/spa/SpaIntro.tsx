import { HandHeart, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import type { IntroSection } from "@/data/types";

const highlightIcons = [Sparkles, HandHeart];

/**
 * Treatment intro (spa template): an arched photo with a round photo overlapping it,
 * then the heading, text and the short highlights as small cards with gold icons.
 */
export default function SpaIntro({ section, id }: { section: IntroSection; id: string }) {
  const [photoA, photoB] = section.images ?? [];
  return (
    <section aria-labelledby={id} className="relative overflow-hidden bg-paper py-section">
      <TropicalLeaf className="absolute -bottom-16 -right-16 w-72 -scale-x-100 text-gold/20 sm:w-96" />
      <Container className="relative grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        {photoA && (
          <div className="relative pb-12 lg:col-span-5">
            <div data-motion="photo" className="arch relative aspect-[4/5] w-[82%] overflow-hidden">
              <SiteImage image={photoA} fill sizes="(min-width: 1024px) 34vw, 80vw" />
            </div>
            {photoB && (
              <div data-motion="photo" className="absolute bottom-0 right-0 aspect-square w-[46%] overflow-hidden rounded-full border-[6px] border-paper shadow-(--shadow-board)">
                <SiteImage image={photoB} fill sizes="(min-width: 1024px) 20vw, 45vw" />
              </div>
            )}
          </div>
        )}
        <div className={photoA ? "lg:col-span-7" : "lg:col-span-12"}>
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} />
          {section.highlights && section.highlights.length > 0 && (
            <dl className="mt-10 grid gap-4 sm:grid-cols-2">
              {section.highlights.map((item, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                return (
                  <div key={item.title} data-motion="rise" className="rounded-card border border-line bg-paper p-6">
                    <Icon aria-hidden="true" strokeWidth={1.5} className="size-7 text-gold" />
                    <dt className="mt-4 text-subtitle">{item.title}</dt>
                    <dd className="mt-2 text-body text-stone">{item.text}</dd>
                  </div>
                );
              })}
            </dl>
          )}
        </div>
      </Container>
    </section>
  );
}
