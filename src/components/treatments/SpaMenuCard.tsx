"use client";

import { Flower2 } from "lucide-react";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { formatPrice } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import type { BoardTab } from "./TreatmentBoard";

/** One treatment on the menu with all its durations/options. */
type MenuEntry = {
  name: string;
  href?: string;
  description?: string;
  details?: string[];
  options: { label: string; price: number }[];
};

/** Turns board rows (one row per duration) into menu entries (one per treatment). */
function toEntries(tab: BoardTab): MenuEntry[] {
  const entries: MenuEntry[] = [];
  for (const row of tab.rows) {
    if (row.showName || entries.length === 0) {
      entries.push({ name: row.name, href: row.href, description: row.description, details: row.details, options: [] });
    }
    entries[entries.length - 1].options.push({ label: row.option, price: row.price });
  }
  return entries;
}

/**
 * SPA MENU CARD — the full price list, styled like a printed spa menu:
 * a paper card with a thin gold frame, category tabs, and every treatment written as
 * "1 Hour ········ 159K" with one booking link per treatment. Two columns on large screens.
 * Same data as the TreatmentBoard (src/data/pricelist.ts via src/lib/board.ts).
 */
export default function SpaMenuCard({
  heading,
  note,
  feeNote,
  tabs,
  source,
  bookLabel = "Book",
  headingId = "pricelist-heading",
}: {
  heading: string;
  note?: string;
  feeNote?: string;
  tabs: BoardTab[];
  source: string;
  bookLabel?: string;
  /** id of the heading (pass the same value to the section's aria-labelledby). */
  headingId?: string;
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const entries = toEntries(tabs[active]);

  // Arrow keys move between tabs (standard tab keyboard pattern).
  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    const last = tabs.length - 1;
    let next = index;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="relative rounded-board bg-paper px-5 py-10 shadow-(--shadow-board) sm:px-10 sm:py-14 lg:px-16">
      {/* thin gold frame, like a printed menu card */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-2.5 rounded-[12px] border border-gold/35 sm:inset-4" />

      <header className="relative mx-auto flex max-w-[44rem] flex-col items-center text-center">
        <div aria-hidden="true" className="flex items-center gap-3 text-gold">
          <span className="h-px w-10 bg-gold/50" />
          <Flower2 strokeWidth={1.25} className="size-6" />
          <span className="h-px w-10 bg-gold/50" />
        </div>
        <h2 id={headingId} data-motion="rise" className="mt-4 text-title">
          {heading}
        </h2>
        {note && <p className="mt-3 text-lead text-stone">{note}</p>}
        {feeNote && <p className="mt-2 text-small text-stone">{feeNote}</p>}
      </header>

      {tabs.length > 1 && (
        <div role="tablist" aria-label={heading} className="relative mt-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab, i) => {
            const selected = i === active;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(event) => onTabKeyDown(event, i)}
                className={
                  "inline-flex min-h-11 items-center rounded-full px-5 text-[0.9375rem] font-medium transition-colors duration-(--duration-quick) " +
                  (selected ? "bg-ink text-paper" : "bg-linen text-ink hover:bg-cream")
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      )}

      <div
        id={`${baseId}-panel`}
        role={tabs.length > 1 ? "tabpanel" : undefined}
        aria-labelledby={tabs.length > 1 ? `${baseId}-tab-${active}` : undefined}
        className="relative mt-10 gap-x-16 lg:columns-2"
      >
        {entries.map((entry, i) => (
          <article
            key={`${tabs[active].id}-${entry.name}`}
            className="reveal-row mb-6 break-inside-avoid border-b border-line pb-6"
            style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[1.125rem] font-semibold leading-snug">
                {entry.href ? (
                  <Link href={entry.href} className="inline-block py-0.5 underline decoration-transparent underline-offset-[0.25em] transition-colors hover:decoration-gold">
                    {entry.name}
                  </Link>
                ) : (
                  entry.name
                )}
              </h3>
              <a
                href={whatsappLink({ treatment: entry.name, source })}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${bookLabel} ${entry.name} on WhatsApp (opens in a new tab)`}
                className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full border border-gold/40 px-3 text-[0.8125rem] font-medium text-gold-deep transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper"
              >
                <WhatsAppIcon className="size-3.5" />
                {bookLabel}
              </a>
            </div>
            {entry.description && <p className="mt-1.5 max-w-[52ch] text-small text-stone">{entry.description}</p>}
            {entry.details && entry.details.length > 0 && <p className="mt-1.5 text-small text-gold-deep">{entry.details.join(", ")}</p>}
            <ul className="mt-3 space-y-1.5">
              {entry.options.map((option) => (
                <li key={option.label} className="flex items-baseline gap-3 text-[0.9375rem]">
                  <span className="text-ink/85">{option.label}</span>
                  <span aria-hidden="true" className="min-w-6 flex-1 translate-y-[-0.25em] border-b border-dotted border-gold/60" />
                  <span className="numeric font-semibold text-gold-deep">{formatPrice(option.price)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
