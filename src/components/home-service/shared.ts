/**
 * Small pieces shared by the Home Service page sections (/outcall-home-service-massage/).
 * The look (titles, gold italic notes, pill buttons) comes from the homepage: src/components/home/shared.tsx.
 */

/** Where WhatsApp messages from the Home Service page say they came from. */
export const SOURCE = "Home Service page";

/** "Couple Massage — Relax side by side…" → name and text (the live page writes them in one line). */
export function splitItem(item: string): { name: string; text: string } {
  const [name, ...rest] = item.split(" — ");
  return rest.length ? { name, text: rest.join(" — ") } : { name: "", text: item };
}
