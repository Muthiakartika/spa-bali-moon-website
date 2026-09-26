"use client";

import { ChevronDown, Flower2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import LotusMark from "@/components/layout/LotusMark";
import SiteImage from "@/components/ui/SiteImage";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import type { SiteImage as SiteImageData } from "@/data/types";
import { formatPrice } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";
import type { BoardTab } from "./TreatmentBoard";

/** One treatment on the menu with all its durations/options. */
type MenuEntry = {
  name: string;
  /** Name in the WhatsApp message, when it differs from `name`. */
  bookName?: string;
  href?: string;
  description?: string;
  details?: string[];
  image?: SiteImageData;
  options: { label: string; price: number; pricePrefix?: string }[];
};

/** Turns board rows (one row per duration) into menu entries (one per treatment). */
function toEntries(tab: BoardTab): MenuEntry[] {
  const entries: MenuEntry[] = [];
  for (const row of tab.rows) {
    if (row.showName || entries.length === 0) {
      entries.push({
        name: row.name,
        bookName: row.bookName,
        href: row.href,
        description: row.description,
        details: row.details,
        image: row.image,
        options: [],
      });
    }
    entries[entries.length - 1].options.push({ label: row.option, price: row.price, pricePrefix: row.pricePrefix });
  }
  return entries;
}

/**
 * SPA MENU CARD — the full price list, styled like a printed spa menu:
 * a paper card with a thin gold frame, category tabs, and every treatment written as
 * "1 Hour ········ 159K" with one booking link per treatment. Two columns on large screens.
 * Same data as the TreatmentBoard (src/data/pricelist.ts via src/lib/board.ts).
 *
 * Options used by the Pricelist page:
 *   showPhotos   — a small round photo beside each treatment (as on the live price list)
 *   tab.anchor   — a link to "#<anchor>" opens that tab (the category cards above the menu)
 *   mobileLimit  — phones and tablets first show this many treatments, with a "Show all" button
 *                  (the others stay in the page, only visually hidden)
 */
export default function SpaMenuCard({
  heading,
  note,
  feeNote,
  tabs,
  source,
  bookLabel = "Book",
  headingId = "pricelist-heading",
  showPhotos = false,
  mobileLimit,
}: {
  heading: string;
  note?: string;
  feeNote?: string;
  tabs: BoardTab[];
  source: string;
  bookLabel?: string;
  /** id of the heading (pass the same value to the section's aria-labelledby). */
  headingId?: string;
  showPhotos?: boolean;
  mobileLimit?: number;
}) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const entries = toEntries(tabs[active]);
  const folded = mobileLimit !== undefined && entries.length > mobileLimit && !expanded;

  function selectTab(index: number) {
    setActive(index);
    setExpanded(false);
    // Keep the address in step with the open tab, so the category links keep working.
    const anchor = tabs[index].anchor;
    if (anchor) window.history.replaceState(null, "", `#${anchor}`);
  }

  // A link to one of the tab anchors (e.g. "#menu-beauty") opens that tab, also on page load.
  useEffect(() => {
    function openFromHash() {
      const index = tabs.findIndex((tab) => tab.anchor && `#${tab.anchor}` === window.location.hash);
      if (index >= 0) {
        setActive(index);
        setExpanded(false);
      }
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [tabs]);

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
    selectTab(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="relative rounded-board bg-paper px-5 py-10 shadow-(--shadow-board) sm:px-10 sm:py-14 lg:px-16">
      {/* Where the tab links land (all at the top of the card, so the tabs are in view) */}
      {tabs.map((tab) => tab.anchor && <span key={tab.anchor} id={tab.anchor} aria-hidden="true" className="absolute inset-x-0 top-0" />)}

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
                onClick={() => selectTab(i)}
                onKeyDown={(event) => onTabKeyDown(event, i)}
                className={
                  "inline-flex min-h-11 items-center rounded-full px-4 text-[0.875rem] font-medium transition-colors duration-(--duration-quick) sm:px-5 sm:text-[0.9375rem] " +
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
            className={`reveal-row mb-6 break-inside-avoid border-b border-line pb-6 ${folded && i >= (mobileLimit ?? 0) ? "max-lg:hidden" : ""}`}
            style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
          >
            <div className={showPhotos ? "flex gap-3.5 sm:gap-5" : undefined}>
              {showPhotos && (
                <span
                  aria-hidden="true"
                  className="relative mt-0.5 inline-flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cream text-gold ring-1 ring-gold/35 ring-offset-2 ring-offset-paper sm:size-16"
                >
                  {entry.image ? <SiteImage image={entry.image} alt="" fill sizes="64px" /> : <LotusMark className="h-6 w-auto" />}
                </span>
              )}
              <div className="min-w-0 flex-1">
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
                    href={whatsappLink({ treatment: entry.bookName ?? entry.name, source })}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${bookLabel} ${entry.bookName ?? entry.name} on WhatsApp (opens in a new tab)`}
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
                      <span className="numeric font-semibold text-gold-deep">
                        {option.pricePrefix && <span className="font-normal text-stone">{option.pricePrefix} </span>}
                        {formatPrice(option.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {mobileLimit !== undefined && entries.length > mobileLimit && (
        <div className="relative mt-2 flex justify-center lg:hidden">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={`${baseId}-panel`}
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/25 px-7 font-semibold text-ink transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper"
          >
            {expanded ? "Show fewer" : `Show all ${entries.length} treatments`}
            <ChevronDown aria-hidden="true" strokeWidth={1.5} className={`size-4 transition-transform duration-(--duration-base) ${expanded ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </div>
  );
}
