import Container from "@/components/ui/Container";
import type { LineIcon } from "./shared";

export type Fact = {
  icon: LineIcon;
  label: string;
  value: string;
  /** Makes the value a link (opens in a new tab). */
  href?: string;
  /** Extra words for screen readers after a link, e.g. " (opens Google Maps in a new tab)". */
  note?: string;
};

/**
 * A white card with four short facts (icon, small bold label, value) that overlaps the hero above it.
 * Two columns on phones, four on large screens. The hero needs extra bottom padding (pb-28 lg:pb-32)
 * to make room for the overlap. Used by VisitFacts (homepage, pricelist) and the Home Service hero.
 */
export default function FactsCard({ facts }: { facts: Fact[] }) {
  return (
    <div className="relative z-10 -mt-16">
      <Container>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-board border border-line bg-line shadow-(--shadow-board) lg:grid-cols-4">
          {facts.map(({ icon: Icon, label, value, href, note }) => (
            <li key={label} className="flex flex-col gap-3 bg-paper p-4 sm:flex-row sm:items-center sm:gap-4 sm:p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-gold-deep">
                <Icon className="size-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.8125rem] font-bold text-ink">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="numeric inline-block py-0.5 text-small text-stone underline decoration-gold/40 underline-offset-[0.3em] hover:text-ink hover:decoration-gold-deep"
                  >
                    {value}
                    {note && <span className="sr-only">{note}</span>}
                  </a>
                ) : (
                  <p className="numeric text-small text-stone">{value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
