import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentBoard, { type BoardTab } from "@/components/treatments/TreatmentBoard";
import { homePage } from "@/data/pages/home";
import { rowsForItems, rowsForPackages } from "@/lib/board";

/**
 * "Our Spa Menu — Browse Our Spa Treatments": the full treatment board with tabs
 * (Massage · Beauty · For Couple · Couple Package). Also serves as the treatment categories.
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
    <Section labelledBy="menu-heading" id="menu">
      <SectionHeading
        id="menu-heading"
        title={catalog.heading}
        note={catalog.eyebrow}
        intro={[`${catalog.feeLabel}: ${catalog.feeText}`]}
      />
      <TreatmentBoard className="mt-12" tabs={tabs} caption="Spa Bali Moon treatment menu" source="Homepage" collapsedHeight="40rem" />
    </Section>
  );
}
