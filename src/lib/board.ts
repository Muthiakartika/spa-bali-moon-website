/**
 * Turns price-list data (src/data/pricelist.ts) into rows for the TreatmentBoard.
 *
 * Each page keeps its own wording from the old site, so you pass which page
 * the board is on:  "pricelist" (/seminyak/), "homeService", or "home".
 */
import type { BoardRow } from "@/components/treatments/TreatmentBoard";
import { getPriceItem } from "@/data/pricelist";
import { getPackageGroup } from "@/data/packages";

export type BoardPage = "pricelist" | "homeService" | "home";

/** "For Couples" → "menu-for-couples": a link to "#menu-for-couples" opens that tab of a SpaMenuCard. */
export function menuAnchor(tabLabel: string): string {
  return `menu-${tabLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function rowsForItems(itemIds: string[], page: BoardPage): BoardRow[] {
  const rows: BoardRow[] = [];
  let previousId: string | undefined;
  for (const id of itemIds) {
    const item = getPriceItem(id);
    // On the Pricelist page some items are listed INSIDE the row above (pricelistParentId),
    // e.g. Four Hand Warm Candle under Organic Warm Candle Oil Massage, exactly as on the live price list.
    const insideParent = page === "pricelist" && item.pricelistParentId !== undefined && item.pricelistParentId === previousId;
    previousId = id;
    const name =
      (page === "pricelist" && item.pricelistName) ||
      (page === "homeService" && item.homeServiceName) ||
      (page === "home" && item.homeName) ||
      item.pricelistName ||
      item.homeServiceName ||
      item.homeName ||
      id;
    const description =
      (page === "pricelist" && item.pricelistDescription) ||
      (page === "homeService" && item.homeServiceDescription) ||
      (page === "home" && item.homeDescription) ||
      undefined;
    const details =
      (page === "pricelist" && item.pricelistBenefits) ||
      (page === "homeService" && item.homeServiceBenefits) ||
      (page === "home" && item.homeBenefits) ||
      undefined;
    item.options.forEach((option, index) => {
      const label =
        (page === "homeService" && option.homeServiceLabel) || (page === "home" && option.homeLabel) || option.label;
      const first = index === 0 && !insideParent;
      rows.push({
        name,
        showName: first,
        option: label,
        price: option.price,
        pricePrefix: (page === "homeService" && option.homeServicePricePrefix) || undefined,
        href: item.pageSlug ? `/seminyak/${item.pageSlug}/` : undefined,
        description: first ? description : undefined,
        details: first && details && details.length > 0 ? details : undefined,
        image: first ? item.image : undefined,
      });
    });
  }
  return rows;
}

/**
 * Board rows for a package group, e.g. the couple packages: one row per package ("Package A").
 * The booking message names the whole package ("Couple Massage Package A").
 */
export function rowsForPackages(groupId: string, labels?: Record<string, string>): BoardRow[] {
  const group = getPackageGroup(groupId);
  return group.packages.map((pkg) => ({
    name: pkg.name,
    bookName: `${group.title} ${pkg.name}`,
    showName: true,
    option:
      labels?.[pkg.name] ??
      pkg.items.map((item) => `${item.duration} ${item.treatment}`).join(" + ") + (pkg.pax ? ` · ${pkg.pax} pax` : ""),
    price: pkg.price,
  }));
}
