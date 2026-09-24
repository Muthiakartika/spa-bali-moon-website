import Testimonials from "@/components/ui/Testimonials";
import type { PageSection } from "@/data/types";
import IntroBlock from "./IntroBlock";
import ListBlock from "./ListBlock";
import PackagesBlock from "./PackagesBlock";
import PricingBlock from "./PricingBlock";
import StatsStrip from "./StatsStrip";

/**
 * Shows a page's sections in the order they are listed in its data file.
 * Each page can have different sections — nothing here needs changing when
 * a treatment has more or fewer sections.
 */
export default function PageSections({
  sections,
  treatment,
  source,
}: {
  sections: PageSection[];
  /** Name used in WhatsApp messages. */
  treatment: string;
  source: string;
}) {
  let listIndex = 0;
  return (
    <>
      {sections.map((section, i) => {
        const id = `section-${i}`;
        switch (section.type) {
          case "intro":
            return <IntroBlock key={id} section={section} id={id} />;
          case "pricing":
            return <PricingBlock key={id} section={section} id={id} treatment={treatment} source={source} />;
          case "packages":
            return <PackagesBlock key={id} section={section} id={id} source={source} />;
          case "stats":
            return <StatsStrip key={id} section={section} />;
          case "testimonials":
            return <Testimonials key={id} />;
          case "list": {
            const flip = listIndex++ % 2 === 1;
            return <ListBlock key={id} section={section} id={id} flip={flip} treatment={treatment} source={source} />;
          }
        }
      })}
    </>
  );
}
