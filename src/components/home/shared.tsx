import type { LucideIcon } from "lucide-react";
import LotusMark from "@/components/layout/LotusMark";

/**
 * Small pieces shared by the homepage sections ("Taman" design).
 */

/** Where WhatsApp messages from the homepage say they came from. */
export const SOURCE = "Homepage";

/** Gold italic line above a section title, e.g. "Why It Matters". */
export const noteClass = "font-display text-[1.3rem] italic text-gold-deep";

/** Section title size. */
export const titleClass = "font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.75rem)] leading-[1.06]";

/** Round outline link button, e.g. "Explore Treatments →". */
export const pillLink =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-7 font-semibold text-ink transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper";

/** "Our Seminyak Day Spa" → the last two words in gold italic (styling only, the text is unchanged). */
export function SplitTitle({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.slice(0, -2).join(" ")} <em className="font-normal italic text-gold-deep">{words.slice(-2).join(" ")}</em>
    </>
  );
}

/** An icon that only needs a className (lucide icons, the WhatsApp icon, the lotus). */
export type LineIcon = (props: { className?: string }) => React.ReactElement;

/** A lucide icon drawn with the thin 1.5 line used across the homepage. */
export function line(Icon: LucideIcon): LineIcon {
  const ThinIcon = ({ className }: { className?: string }) => <Icon aria-hidden="true" strokeWidth={1.5} className={className} />;
  return ThinIcon;
}

/** The lotus is wider than tall, so it is drawn a little larger to look the same size as the other icons. */
export function LotusIcon({ className = "" }: { className?: string }) {
  return <LotusMark className={`${className} scale-[1.35]`} />;
}
