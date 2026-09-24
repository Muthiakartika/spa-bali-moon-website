import type { Metadata } from "next";
import Accordion from "@/components/ui/Accordion";
import BookButton from "@/components/ui/BookButton";
import { ButtonLink } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Price from "@/components/ui/Price";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import TreatmentBoard, { type BoardTab } from "@/components/treatments/TreatmentBoard";
import { pricelistPage } from "@/data/pages/pricelist";
import { getTreatment } from "@/data/treatments";
import { rowsForItems, rowsForPackages } from "@/lib/board";

// Internal page for developers: shows every design token and building block.
// It is hidden from search engines and not linked from the site.
export const metadata: Metadata = {
  title: "Design system — Spa Bali Moon",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Paper", token: "paper", hex: "#FFFFFF", role: "Page background", text: "text-ink" },
  { name: "Linen", token: "linen", hex: "#F5F2EC", role: "Soft bands, cards, reviews", text: "text-ink" },
  { name: "Cream", token: "cream", hex: "#F2E6DD", role: "Warm band, soft shapes", text: "text-ink" },
  { name: "Gold", token: "gold", hex: "#A78627", role: "Brand accent: icons, dots, prices on dark", text: "text-ink" },
  { name: "Ink", token: "ink", hex: "#1C1A1D", role: "Headings, dark panels, footer", text: "text-paper" },
  { name: "Stone", token: "stone", hex: "#5F5A54", role: "Small secondary text", text: "text-paper" },
];

const shades = [
  { name: "gold-deep", hex: "#7E6519", role: "Gold buttons with white text · 5.6:1" },
  { name: "line", hex: "#DFDADA", role: "Hairlines and card borders" },
  { name: "ink-cell", hex: "#2A272B", role: "Cards and tabs inside the dark menu" },
  { name: "ink-line", hex: "#3A363B", role: "Hairline inside dark panels" },
];

export default function StyleguidePage() {
  const balinese = getTreatment("balinese-massage");
  if (!balinese) return null;
  const intro = balinese.sections.find((s) => s.type === "intro");

  const tabs: BoardTab[] = pricelistPage.priceList.tabs.map((tab, i) => ({
    id: `tab-${i}`,
    label: tab.label,
    rows: [
      ...rowsForItems(tab.itemIds, "pricelist"),
      ...("packageGroup" in tab && tab.packageGroup ? rowsForPackages(tab.packageGroup, tab.packageLabels) : []),
    ],
  }));

  return (
    <div>
      <Section spacing="both">
        <p className="meta-label text-stone">Internal · not indexed</p>
        <h1 className="mt-4 text-display">Design system</h1>
        <p className="mt-6 max-w-[60ch] text-lead text-stone">
          Tokens live in src/app/globals.css. Building blocks live in src/components/ui. Every sample below uses real
          Spa Bali Moon content from src/data.
        </p>
      </Section>

      {/* Colours */}
      <Section tone="linen" labelledBy="sg-colors">
        <h2 id="sg-colors" className="text-title">
          Brand colours
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {colors.map((c) => (
            <li key={c.token} className="overflow-hidden rounded-cell border border-line bg-paper">
              <div className={`flex h-28 items-end p-3 ${c.text}`} style={{ backgroundColor: c.hex }}>
                <span className="meta-label">{c.hex}</span>
              </div>
              <div className="p-3">
                <p className="font-semibold">{c.name}</p>
                <p className="text-small text-stone">{c.role}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3 className="mt-14 text-subtitle">Shades of the brand colours</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shades.map((s) => (
            <li key={s.name} className="flex items-center gap-4">
              <span className="size-12 shrink-0 rounded-cell" style={{ backgroundColor: s.hex }} />
              <span>
                <span className="block font-semibold">{s.name}</span>
                <span className="block text-small text-stone">{s.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Typography */}
      <Section labelledBy="sg-type">
        <h2 id="sg-type" className="meta-label text-stone">
          Typography — Instrument Serif &amp; Manrope
        </h2>
        <div className="mt-10 space-y-8">
          <p className="font-display text-display font-semibold">Our Seminyak Day Spa</p>
          <p className="font-display text-title font-semibold">What Makes Balinese Massage Unique?</p>
          <p className="font-display text-subtitle font-semibold">Traditional Techniques</p>
          <p className="max-w-[62ch] text-lead text-stone">
            Since 2009, Spa Bali Moon has provided professional Balinese massage and spa treatments in Seminyak, Bali.
          </p>
          <p className="max-w-[68ch] text-body">{intro && intro.type === "intro" ? intro.paragraphs?.[0] : null}</p>
          <p className="meta-label text-stone">Treatment · Option · Price</p>
          <p className="text-title">
            <Price value={159_000} withCurrency />
          </p>
        </div>
      </Section>

      {/* Buttons */}
      <Section tone="linen" labelledBy="sg-buttons">
        <h2 id="sg-buttons" className="meta-label text-stone">
          Buttons
        </h2>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <BookButton label="Book Now" treatment="Balinese Massage" source="Design system" size="lg" />
          <ButtonLink href="/seminyak/" variant="secondary" size="lg">
            Explore Treatments
          </ButtonLink>
          <ButtonLink href="/seminyak/" variant="text">
            Discover More
          </ButtonLink>
        </div>
        <div className="board mt-10 inline-flex flex-wrap gap-4 p-5">
          <BookButton label="Reserve" variant="light" source="Design system" />
        </div>
      </Section>

      {/* Section heading */}
      <Section labelledBy="sg-heading">
        {intro && intro.type === "intro" && (
          <SectionHeading id="sg-heading" title={intro.heading} note={intro.eyebrow} intro={intro.paragraphs} />
        )}
      </Section>

      {/* The board */}
      <section aria-labelledby="sg-board" className="bg-paper pb-section">
        <Container>
          <SectionHeading
            id="sg-board"
            title={pricelistPage.priceList.heading}
            note={pricelistPage.priceList.eyebrow}
            intro={[pricelistPage.priceList.feeNote]}
          />
          <TreatmentBoard
            className="mt-12"
            tabs={tabs}
            caption="Spa Bali Moon price list"
            source="Design system"
          />
        </Container>
      </section>

      {/* Images + FAQ */}
      <Section tone="linen" labelledBy="sg-faq">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            {balinese.faq?.image && (
              <SiteImage image={balinese.faq.image} fill sizes="(min-width: 1024px) 40vw, 100vw" />
            )}
          </div>
          <div className="lg:col-span-7">
            {balinese.faq && (
              <>
                <SectionHeading
                  id="sg-faq"
                  title={balinese.faq.heading}
                  note={balinese.faq.subheading}
                 
                />
                <div className="mt-10">
                  <Accordion items={balinese.faq.items} />
                </div>
              </>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
