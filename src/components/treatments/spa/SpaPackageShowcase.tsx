import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import { getPackageGroup } from "@/data/packages";
import type { PackagesSection } from "@/data/types";
import PackageCards from "../PackageCards";

/**
 * Package options (spa template): a tall photo on the left, the heading, text and the
 * package cards (2 per row) on the right. Packages come from src/data/packages.ts.
 */
export default function SpaPackageShowcase({ section, id, source }: { section: PackagesSection; id: string; source: string }) {
  const photo = section.images?.[0];
  return (
    <section aria-labelledby={id} className="bg-paper py-section">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        {photo && (
          <div className="lg:col-span-4">
            <div data-motion="photo" className="relative aspect-[4/5] overflow-hidden rounded-board lg:sticky lg:top-28">
              <SiteImage image={photo} fill sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
          </div>
        )}
        <div className={photo ? "lg:col-span-8" : "lg:col-span-12"}>
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} />
          <div className="mt-10">
            <PackageCards
              group={getPackageGroup(section.packageGroup)}
              priceOverrides={section.priceOverrides}
              source={source}
              gridClassName="sm:grid-cols-2 2xl:grid-cols-4"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
