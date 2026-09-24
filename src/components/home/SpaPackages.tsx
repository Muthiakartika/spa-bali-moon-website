import { ButtonLink } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import PackageCards from "@/components/treatments/PackageCards";
import { getPackageGroup } from "@/data/packages";
import { homePage } from "@/data/pages/home";

/** "More to Enjoy" + "Spa Packages — Complete Relaxation in One Visit" on the homepage. */
export default function SpaPackages() {
  const { moreToEnjoy, packages } = homePage;
  return (
    <Section labelledBy="packages-heading">
      <SectionHeading id="more-heading" title={moreToEnjoy.heading} note={moreToEnjoy.eyebrow} intro={moreToEnjoy.paragraphs} />
      <div className="mt-section border-t border-taupe/50 pt-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading id="packages-heading" title={packages.heading} note={packages.eyebrow} intro={[packages.text]} layout="stacked" />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <ButtonLink href="/seminyak/#packages" variant="text">
              {packages.button.label}
            </ButtonLink>
          </div>
        </div>
        <div className="mt-10">
          <PackageCards group={getPackageGroup(packages.packageGroup)} buttonLabel={packages.cardButtonLabel} source="Homepage" />
        </div>
      </div>
    </Section>
  );
}
