import SpaMenuCard from "@/components/treatments/SpaMenuCard";
import type { BoardRow, BoardTab } from "@/components/treatments/TreatmentBoard";
import Container from "@/components/ui/Container";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { getPackageGroup } from "@/data/packages";
import { homeServicePage } from "@/data/pages/home-service";
import { menuAnchor, rowsForItems } from "@/lib/board";
import { SOURCE } from "./shared";

/**
 * "Prices — Professional Care with Thoughtful Details…": the price list as the printed spa menu card
 * (the same card as the homepage and the Pricelist page), with a small round photo beside every treatment.
 * Tabs as on the live page: Most Popular · Massage · Beauty · For Couples · Couple Packages.
 * On phones the first 8 treatments show, with a "Show all" button.
 * Texts: src/data/pages/home-service.ts → prices. Prices: src/data/pricelist.ts and packages.ts.
 */

const couplePageHref = "/seminyak/couple-spa/";

/** Turns the page's list of ids into price rows (see the note at the top of home-service.ts). */
function rowsFor(ids: string[]): BoardRow[] {
  const { prices } = homeServicePage;
  const couplePackages = getPackageGroup("couples").packages;
  const labelFor = (name: string) => prices.packageLabels[name as keyof typeof prices.packageLabels];
  const rows: BoardRow[] = [];

  for (const id of ids) {
    if (id === "group:couple-massage") {
      // One "Couple Massage" row: every couple option, then the four packages (as on the live page).
      const group = prices.coupleMassageGroup;
      const optionRows = rowsForItems(group.itemIds, "homeService").map((row, i) => ({
        ...row,
        name: group.name,
        showName: i === 0,
        href: couplePageHref,
        description: i === 0 ? group.description : undefined,
        image: i === 0 ? group.image : undefined,
      }));
      const packageRows = couplePackages.map((pkg) => ({
        name: group.name,
        showName: false,
        option: `${pkg.name} · ${labelFor(pkg.name)?.label ?? pkg.name}`,
        price: pkg.price,
      }));
      rows.push(...optionRows, ...packageRows);
    } else if (id === "packages:couples") {
      // One row per package ("Couple Massage Package A").
      for (const pkg of couplePackages) {
        const label = labelFor(pkg.name);
        rows.push({
          name: label?.heading ?? pkg.name,
          showName: true,
          option: label?.label ?? pkg.name,
          price: pkg.price,
          href: couplePageHref,
          image: label?.image,
        });
      }
    } else {
      rows.push(...rowsForItems([id], "homeService"));
    }
  }
  return rows;
}

export default function HomeServicePrices() {
  const { prices } = homeServicePage;
  const tabs: BoardTab[] = prices.tabs.map((tab, i) => ({
    id: `hs-tab-${i}`,
    label: tab.label,
    anchor: menuAnchor(tab.label),
    rows: rowsFor(tab.itemIds),
  }));

  return (
    <section id="prices" aria-labelledby="prices-heading" className="relative overflow-hidden bg-linen py-section">
      <TropicalLeaf className="absolute -right-20 top-0 w-72 rotate-[200deg] text-gold/25 sm:w-96" />
      <TropicalLeaf className="absolute -bottom-10 -left-20 w-72 text-gold/20 sm:w-96" />
      <Container className="relative">
        <SpaMenuCard headingId="prices-heading" heading={prices.heading} note={prices.eyebrow} tabs={tabs} source={SOURCE} showPhotos mobileLimit={8} />
      </Container>
    </section>
  );
}
