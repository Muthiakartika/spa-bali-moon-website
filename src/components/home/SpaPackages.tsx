import { ButtonLink } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import PackageCards from "@/components/treatments/PackageCards";
import { getPackageGroup } from "@/data/packages";
import { homePage } from "@/data/pages/home";
import type { SiteImage as SiteImageData } from "@/data/types";

/**
 * "More to Enjoy" + "Spa Packages — Complete Relaxation in One Visit" on the homepage.
 * The intro sits beside a real photo of two Spa Bali Moon therapists at work (existing site photo).
 */
const packagesPhoto: SiteImageData = {
  src: "/images/packages/cards/couplemassagepackage.webp",
  alt: "Two Spa Bali Moon therapists giving a massage",
  width: 630,
  height: 580,
};

export default function SpaPackages() {
  const { moreToEnjoy, packages } = homePage;
  return (
    <Section tone="linen" labelledBy="packages-heading" className="relative overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading id="more-heading" title={moreToEnjoy.heading} note={moreToEnjoy.eyebrow} intro={moreToEnjoy.paragraphs} />
        </div>
        <div className="relative lg:col-span-6">
          <TropicalLeaf className="absolute -right-12 -top-14 w-60 rotate-[160deg] text-gold/30 sm:w-80" />
          <div data-motion="photo" className="relative aspect-[630/580] overflow-hidden rounded-board">
            <SiteImage image={packagesPhoto} fill sizes="(min-width: 1024px) 44vw, 100vw" />
          </div>
        </div>
      </div>

      <div className="mt-section border-t border-line pt-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <SectionHeading id="packages-heading" title={packages.heading} note={packages.eyebrow} intro={[packages.text]} />
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
