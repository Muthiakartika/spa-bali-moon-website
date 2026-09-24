import PackageExplorer, { type ExplorerGroup } from "@/components/treatments/PackageExplorer";
import PhotoHero from "@/components/treatments/PhotoHero";
import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import type { BoardTab } from "@/components/treatments/TreatmentBoard";
import BookingCTA from "@/components/ui/BookingCTA";
import Container from "@/components/ui/Container";
import FaqSection from "@/components/ui/FaqSection";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import Testimonials from "@/components/ui/Testimonials";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { getPackageGroup } from "@/data/packages";
import { pricelistPage } from "@/data/pages/pricelist";
import { getTreatment } from "@/data/treatments";
import { rowsForItems, rowsForPackages } from "@/lib/board";
import { buildMetadata } from "@/lib/seo";

/**
 * PRICELIST & SPA PACKAGES (/seminyak/)
 * Texts: src/data/pages/pricelist.ts · Prices: src/data/pricelist.ts · Packages: src/data/packages.ts
 *
 * Layout: photo hero → intro statement → "A Complete Spa Menu" → the price list as a
 * printed-style spa menu card → package explorer (tabs) → reviews → FAQ → booking.
 */
export const metadata = buildMetadata({
  title: pricelistPage.seo.title,
  description: pricelistPage.seo.description,
  path: pricelistPage.path,
  image: pricelistPage.hero.image,
});

const SOURCE = "Pricelist page";

// The photo shown beside each package group (the matching treatment page's photo).
const packagePhotoSlug: Record<string, string> = {
  "body-scrub": "body-scrub",
  couples: "couple-spa",
  "cream-bath": "creambath",
  "bali-moon-facial": "facial",
  "hot-stone": "hot-stone-massage",
  "mani-pedi": "manicure-pedicure",
  "thai-massage": "thai-massage",
};

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

  const explorerGroups: ExplorerGroup[] = allPackages.packageGroups.map((groupId) => ({
    group: getPackageGroup(groupId),
    photo: getTreatment(packagePhotoSlug[groupId] ?? "")?.cardImage,
  }));

  const [stripPhoto, squarePhoto] = completeMenu.images;

  return (
    <>
      <PhotoHero title={hero.title} note={hero.eyebrow} image={hero.image} buttonLabel={hero.buttonLabel} source={SOURCE} focus="60% center" />

      {/* Intro statement, centred, with a palm frond on each side */}
      <section aria-labelledby="intro-heading" className="relative overflow-hidden bg-paper pt-section">
        <TropicalLeaf className="absolute -left-16 top-10 hidden w-64 text-gold/25 md:block" />
        <TropicalLeaf className="absolute -right-16 top-10 hidden w-64 -scale-x-100 text-gold/25 md:block" />
        <Container className="relative flex flex-col items-center text-center">
          <h2 id="intro-heading" data-motion="rise" className="max-w-[22ch] text-title">
            {intro.heading}
          </h2>
          <p className="mt-3 text-lead text-stone">{intro.eyebrow}</p>
          <p className="mt-5 max-w-[60ch] text-lead text-stone">{intro.text}</p>
        </Container>
      </section>

      {/* "A Complete Spa Menu in Seminyak": overlapping photos + two facts */}
      <Section labelledBy="complete-heading">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative pb-16 lg:col-span-6">
            {squarePhoto && (
              <div data-motion="photo" className="arch relative aspect-[688/648] w-[80%] overflow-hidden">
                <SiteImage image={squarePhoto} fill sizes="(min-width: 1024px) 40vw, 80vw" />
              </div>
            )}
            {stripPhoto && (
              <div
                data-motion="photo"
                className="absolute bottom-0 right-0 aspect-[778/265] w-[70%] overflow-hidden rounded-card border-[6px] border-paper shadow-(--shadow-board) sm:border-8"
              >
                <SiteImage image={stripPhoto} fill focus="30% 50%" sizes="(min-width: 1024px) 34vw, 70vw" />
              </div>
            )}
          </div>
          <div className="lg:col-span-6">
            <SectionHeading id="complete-heading" title={completeMenu.heading} note={completeMenu.eyebrow} intro={[completeMenu.text]} />
            <ul className="mt-10 grid grid-cols-2 gap-4">
              {completeMenu.facts.map((lines) => (
                <li key={lines.join(" ")} data-motion="rise" className="rounded-card bg-linen px-6 py-5">
                  <span className="block text-small text-stone">{lines[0]}</span>
                  <span className="mt-1 block font-display text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-gold-deep">
                    {lines.slice(1).join(" ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* The full price list, styled like a printed spa menu */}
      <section id="pricelist" aria-labelledby="pricelist-heading" className="relative overflow-hidden bg-linen py-section">
        <TropicalLeaf className="absolute -right-20 top-0 w-72 rotate-[200deg] text-gold/25 sm:w-96" />
        <TropicalLeaf className="absolute -bottom-10 -left-20 w-72 text-gold/20 sm:w-96" />
        <Container className="relative">
          <SpaMenuCard heading={priceList.heading} note={priceList.eyebrow} feeNote={priceList.feeNote} tabs={tabs} source={SOURCE} />
        </Container>
      </section>

      {/* All spa packages (the "Spa Packages" links go to #packages) */}
      <Section labelledBy="packages-heading" id="packages">
        <div className="flex flex-col items-center text-center">
          <h2 id="packages-heading" data-motion="rise" className="max-w-[22ch] text-title">
            {allPackages.heading}
          </h2>
          <p className="mt-3 text-lead text-stone">{allPackages.eyebrow}</p>
          <div className="mt-5 max-w-[62ch] space-y-3 text-body text-stone">
            {allPackages.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <PackageExplorer groups={explorerGroups} buttonLabel={allPackages.cardButton.label} buttonHref={allPackages.cardButton.href} />
        </div>
      </Section>

      <Testimonials />
      <FaqSection faq={faq} />
      <BookingCTA cta={cta} source={SOURCE} />
    </>
  );
}
