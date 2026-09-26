/**
 * Small pieces shared by the Pricelist page sections (/seminyak/).
 * The look (titles, gold italic notes, pill buttons) comes from the homepage: src/components/home/shared.tsx.
 */

/** Where WhatsApp messages from the Pricelist page say they came from. */
export const SOURCE = "Pricelist page";

/** "package-body-scrub": the anchor of one package collection. */
export function packageAnchor(groupId: string): string {
  return `package-${groupId}`;
}
