import PageHero from "@/components/treatments/PageHero";
import PackageCards from "@/components/treatments/PackageCards";
import TreatmentBoard, { type BoardTab } from "@/components/treatments/TreatmentBoard";
import BookingCTA from "@/components/ui/BookingCTA";
import FaqSection from "@/components/ui/FaqSection";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import Testimonials from "@/components/ui/Testimonials";
import { getPackageGroup } from "@/data/packages";
import { pricelistPage } from "@/data/pages/pricelist";
import { rowsForItems, rowsForPackages } from "@/lib/board";
import { buildMetadata } from "@/lib/seo";

/**
 * PRICELIST & SPA PACKAGES (/seminyak/)
 * Texts: src/data/pages/pricelist.ts · Prices: src/data/pricelist.ts · Packages: src/data/packages.ts
 */
export const metadata = buildMetadata({
  title: pricelistPage.seo.title,
  description: pricelistPage.seo.description,
  path: pricelistPage.path,
  image: pricelistPage.hero.image,
});

const SOURCE = "Pricelist page";

export default function PricelistPage() {
  const { hero, intro, completeMenu, priceList, allPackages, faq, cta } = pricelistPage;

  const tabs: BoardTab[] = priceList.tabs.map((tab, i) => ({
    id: `pricelist-tab-${i}`,
    label: tab.label,
    rows: [
      ...rowsForItems(tab.itemIds, "pricelist"),
      ...("packageGroup" in tab && tab.packageGroup ? rowsForPackages(tab.packageGroup, tab.packageLabels) : []),
    ],
  }));

  return (
    <>
      <PageHero title={hero.title} note={hero.eyebrow} image={hero.image} buttonLabel={hero.buttonLabel} source={SOURCE} />

      {/* Intro + "A Complete Spa Menu in Seminyak" */}
      <Section labelledBy="intro-heading">
        <SectionHeading id="intro-heading" title={intro.heading} note={intro.eyebrow} intro={[intro.text]} />
        <div className="mt-section grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="grid grid-cols-5 gap-4 lg:col-span-6">
            <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-cell">
              <SiteImage image={completeMenu.images[1]} fill sizes="(min-width: 1024px) 28vw, 60vw" />
            </div>
            <div className="relative col-span-2 mt-16 aspect-[3/4] overflow-hidden rounded-cell">
              <SiteImage image={completeMenu.images[0]} fill focus="30% 50%" sizes="(min-width: 1024px) 20vw, 40vw" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <SectionHeading id="complete-heading" title={completeMenu.heading} note={completeMenu.eyebrow} intro={[completeMenu.text]} layout="stacked" />
            <ul className="mt-10 grid grid-cols-2 border-t border-taupe/60">
              {completeMenu.facts.map((lines, i) => (
                <li key={lines.join(" ")} className={`py-5 ${i === 1 ? "border-l border-taupe/60 pl-6" : ""}`}>
                  <span className="label-caps block text-brown-ink">{lines[0]}</span>
                  <span className="mt-1 block font-serif text-[2rem] leading-tight">{lines.slice(1).join(" ")}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* The full price list board */}
      <Section tone="sand" labelledBy="pricelist-heading" id="pricelist">
        <SectionHeading id="pricelist-heading" title={priceList.heading} note={priceList.eyebrow} intro={[priceList.feeNote]} />
        <TreatmentBoard className="mt-12" tabs={tabs} caption="Spa Bali Moon price list" source={SOURCE} />
      </Section>

      {/* All spa packages (the "Spa Packages" menu item links here) */}
      <Section labelledBy="packages-heading" id="packages">
        <SectionHeading id="packages-heading" title={allPackages.heading} note={allPackages.eyebrow} intro={allPackages.paragraphs} />
        <div className="mt-section space-y-section">
          {allPackages.packageGroups.map((groupId) => {
            const group = getPackageGroup(groupId);
            const headingId = `group-${groupId}`;
            return (
              <section key={groupId} aria-labelledby={headingId} className="border-t border-taupe/60 pt-10">
                <div className="grid gap-6 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <h3 id={headingId} className="text-title">
                      {group.heading}
                    </h3>
                    {group.eyebrow && <p className="mt-3 font-serif text-[1.35rem] italic text-brown-ink">{group.eyebrow}</p>}
                  </div>
                  {group.description && <p className="max-w-[62ch] text-lead text-brown-ink lg:col-span-8">{group.description}</p>}
                </div>
                <div className="mt-8">
                  <PackageCards
                    group={group}
                    headingLevel="h4"
                    buttonLabel={allPackages.cardButton.label}
                    buttonHref={allPackages.cardButton.href}
                  />
                </div>
              </section>
            );
          })}
        </div>
      </Section>

      <Testimonials />
      <FaqSection faq={faq} />
      <BookingCTA cta={cta} source={SOURCE} />
    </>
  );
}
