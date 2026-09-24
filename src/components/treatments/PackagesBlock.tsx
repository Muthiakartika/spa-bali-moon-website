import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import { getPackageGroup } from "@/data/packages";
import type { PackagesSection } from "@/data/types";
import PackageCards from "./PackageCards";

/** "Our Package Options" section of a treatment page. */
export default function PackagesBlock({ section, id, source }: { section: PackagesSection; id: string; source: string }) {
  const group = getPackageGroup(section.packageGroup);
  const photo = section.images?.[0];
  return (
    <Section tone="sand" labelledBy={id}>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <SectionHeading id={id} title={section.heading} note={section.eyebrow} intro={section.paragraphs} layout="stacked" />
        </div>
        {photo && (
          <div className="relative aspect-[3/2] overflow-hidden rounded-cell lg:col-span-5">
            <SiteImage image={photo} fill sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
        )}
      </div>
      <div className="mt-12">
        <PackageCards group={group} priceOverrides={section.priceOverrides} source={source} />
      </div>
    </Section>
  );
}
