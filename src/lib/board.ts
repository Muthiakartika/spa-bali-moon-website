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

export function rowsForItems(itemIds: string[], page: BoardPage): BoardRow[] {
  const rows: BoardRow[] = [];
  for (const id of itemIds) {
    const item = getPriceItem(id);
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
      rows.push({
        name,
        showName: index === 0,
        option: label,
        price: option.price,
        href: item.pageSlug ? `/seminyak/${item.pageSlug}/` : undefined,
        description: index === 0 ? description : undefined,
        details: index === 0 && details && details.length > 0 ? details : undefined,
      });
    });
  }
  return rows;
}

/** Board rows for a package group, e.g. the couple packages. */
export function rowsForPackages(groupId: string, labels?: Record<string, string>): BoardRow[] {
  const group = getPackageGroup(groupId);
  return group.packages.map((pkg) => ({
    name: pkg.name,
    showName: true,
    option:
      labels?.[pkg.name] ??
      pkg.items.map((item) => `${item.duration} ${item.treatment}`).join(" + ") + (pkg.pax ? ` · ${pkg.pax} pax` : ""),
    price: pkg.price,
  }));
}
