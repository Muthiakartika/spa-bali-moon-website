import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import type { BoardTab } from "@/components/treatments/TreatmentBoard";
import Container from "@/components/ui/Container";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { pricelistPage } from "@/data/pages/pricelist";
import { menuAnchor, rowsForItems, rowsForPackages } from "@/lib/board";
import { SOURCE } from "./shared";

/**
 * "Best Price — Our Massages Price List": the complete price list as the printed spa menu card
 * (the same card as the homepage's "Our Spa Menu"), here with a small round photo beside every
 * treatment, as on the live price list. Tabs: Massage · Beauty · For Couples · Couple Massage Packages
 * (one row per package). Each tab has an anchor (#menu-massage, #menu-beauty, #menu-for-couples,
 * #menu-couple-massage-packages) used by the category cards above. On phones the first 8 treatments show,
 * with a "Show all" button. Texts: src/data/pages/pricelist.ts → priceList. Prices: src/data/pricelist.ts.
 */
export default function PriceMenu() {
  const { priceList } = pricelistPage;

  const tabs: BoardTab[] = priceList.tabs.map((tab, i) => ({
    id: `pricelist-tab-${i}`,
    label: tab.label,
    anchor: menuAnchor(tab.label),
    rows: [
      ...rowsForItems(tab.itemIds, "pricelist"),
      ...("packageGroup" in tab && tab.packageGroup ? rowsForPackages(tab.packageGroup, tab.packageLabels) : []),
    ],
  }));

  return (
    <section id="pricelist" aria-labelledby="pricelist-heading" className="relative overflow-hidden bg-linen py-section">
      <TropicalLeaf className="absolute -right-20 top-0 w-72 rotate-[200deg] text-gold/25 sm:w-96" />
      <TropicalLeaf className="absolute -bottom-10 -left-20 w-72 text-gold/20 sm:w-96" />
      <Container className="relative">
        <SpaMenuCard
          heading={priceList.heading}
          note={priceList.eyebrow}
          feeNote={priceList.feeNote}
          tabs={tabs}
          source={SOURCE}
          showPhotos
          mobileLimit={8}
        />
      </Container>
    </section>
  );
}
