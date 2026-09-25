import Container from "@/components/ui/Container";
import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import type { BoardTab } from "@/components/treatments/TreatmentBoard";
import { homePage } from "@/data/pages/home";
import { rowsForItems, rowsForPackages } from "@/lib/board";
import { SOURCE } from "./shared";

/**
 * "Our Spa Menu — Browse Our Spa Treatments": the complete menu with tabs
 * (Massage · Beauty · For Couple · Couple Package), every treatment and price open to read
 * (the menu card the client approved: no need to open each treatment).
 */
export default function SpaMenu() {
  const { catalog } = homePage;
  const tabs: BoardTab[] = catalog.tabs.map((tab, i) => ({
    id: `home-tab-${i}`,
    label: tab.label,
    rows: [
      ...("itemIds" in tab && tab.itemIds ? rowsForItems(tab.itemIds, "home") : []),
      ...("packageGroup" in tab && tab.packageGroup ? rowsForPackages(tab.packageGroup) : []),
    ],
  }));

  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-linen py-section">
      <Container>
        <SpaMenuCard
          headingId="menu-heading"
          heading={catalog.heading}
          note={catalog.eyebrow}
          feeNote={`${catalog.feeLabel}: ${catalog.feeText}`}
          tabs={tabs}
          source={SOURCE}
        />
      </Container>
    </section>
  );
}
