"use client";

import Link from "next/link";
import { Fragment, useEffect, useId, useRef, useState } from "react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { formatPrice } from "@/lib/format";
import { whatsappLink } from "@/lib/whatsapp";

/** One line on the board, e.g. Balinese Massage · 1 Hour · 159K */
export type BoardRow = {
  /** Treatment name shown in the first column. */
  name: string;
  /** false = same treatment as the row above, so the name is not repeated visually. */
  showName: boolean;
  /** Duration or option, e.g. "1 Hour", "Chocolate", "1 Hour · 2 pax". */
  option: string;
  /** Price in Rupiah. */
  price: number;
  /** Link to the treatment page, if it has one. */
  href?: string;
  /** Short description under the name (the page's own wording from the old site). */
  description?: string;
  /** Extra lines under the description, e.g. a facial's benefits. */
  details?: string[];
};

export type BoardTab = {
  id: string;
  label: string;
  rows: BoardRow[];
};

type TreatmentBoardProps = {
  tabs: BoardTab[];
  /** Read by screen readers as the table name. */
  caption: string;
  /** Added to the WhatsApp message so the team knows where the guest clicked. */
  source: string;
  /** Text of the book cell (from the old site, e.g. "Book Now"). */
  bookLabel?: string;
  /** Show only the first N rows (the small board in the homepage hero). */
  limit?: number;
  /** Hide the tabs (when only one tab is passed). */
  hideTabs?: boolean;
  /**
   * Start folded to this height (e.g. "36rem") with a "Show all" button.
   * All rows stay in the page (good for search engines); they are only visually folded.
   */
  collapsedHeight?: string;
  className?: string;
};

/**
 * THE TREATMENT MENU — the site's signature element.
 * A rounded dark price menu with tabs. Rows rise gently into place when it appears.
 * It is a real <table>, so it stays readable for screen readers and search engines.
 */
export default function TreatmentBoard({
  tabs,
  caption,
  source,
  bookLabel = "Book Now",
  limit,
  hideTabs = false,
  collapsedHeight,
  className = "",
}: TreatmentBoardProps) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [round, setRound] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  // Rows rise into place once, when the menu first scrolls into view.
  useEffect(() => {
    const node = boardRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  function selectTab(index: number) {
    if (index === active) return;
    setActive(index);
    setRound((r) => r + 1); // remount rows so the animation plays again
    setReveal(true);
  }

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

  const tab = tabs[active];
  const rows = limit ? tab.rows.slice(0, limit) : tab.rows;
  const panelId = `${baseId}-panel`;

  return (
    <div ref={boardRef} className={`board p-4 sm:p-7 ${className}`}>
      {!hideTabs && tabs.length > 1 && (
        <div role="tablist" aria-label={caption} className="mb-6 flex flex-wrap gap-2">
          {tabs.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => selectTab(i)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
                className={
                  "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-[0.9375rem] font-medium transition-colors duration-(--duration-quick) " +
                  (selected ? "bg-ink text-paper" : "bg-linen text-ink hover:bg-cream")
                }
              >
                {t.label}
              </button>
            );
          })}
        </div>
      )}

      <div
        id={panelId}
        role={!hideTabs && tabs.length > 1 ? "tabpanel" : undefined}
        aria-labelledby={!hideTabs && tabs.length > 1 ? `${baseId}-tab-${active}` : undefined}
        data-reveal={reveal ? "on" : "off"}
        className={`relative ${collapsedHeight && !expanded ? "overflow-hidden" : ""}`}
        style={collapsedHeight && !expanded ? { maxHeight: collapsedHeight } : undefined}
      >
        <table key={`${tab.id}-${round}`} className="w-full table-fixed border-collapse text-left">
          <caption className="sr-only">
            {caption}: {tab.label}
          </caption>
          <thead>
            <tr className="meta-label text-stone">
              {/* Column widths live on these header cells. On phones the Treatment column is
                  hidden and each name gets its own row, so the table has three columns. */}
              <th scope="col" className="hidden pb-3 pr-3 font-semibold sm:table-cell sm:w-[42%]">
                Treatment
              </th>
              <th scope="col" className="w-[58%] pb-3 pr-3 font-semibold sm:w-[32%]">
                Option
              </th>
              <th scope="col" className="w-[24%] pb-3 pr-3 text-right font-semibold sm:w-[11%]">
                Price
              </th>
              <th scope="col" className="w-12 pb-3 text-right font-semibold sm:w-[8.5rem]">
                <span className="sr-only">Book</span>
              </th>
            </tr>
          </thead>
          <tbody className="text-[0.9375rem] sm:text-base">
            {rows.map((row, i) => {
              // Rows rise one after another, but only the first 8 are staggered,
              // so even a long price list has settled in under a second.
              const delay = { "--reveal-delay": `${Math.min(i, 8) * 40}ms` } as React.CSSProperties;
              const nameContent = (
                <>
                  {row.href ? (
                    <Link
                      href={row.href}
                      className="block py-1 font-display text-[1.0625rem] font-semibold leading-snug text-ink underline decoration-transparent decoration-1 underline-offset-[0.25em] transition-colors hover:decoration-gold sm:text-[1.125rem]"
                    >
                      {row.name}
                    </Link>
                  ) : (
                    <span className="block py-1 font-display text-[1.0625rem] font-semibold leading-snug text-ink sm:text-[1.125rem]">{row.name}</span>
                  )}
                  {row.description && (
                    <span className="mt-1 block max-w-[46ch] text-[0.875rem] leading-snug text-stone">
                      {row.description}
                    </span>
                  )}
                  {row.details && row.details.length > 0 && (
                    <span className="mt-1.5 block max-w-[46ch] text-[0.875rem] leading-snug text-gold-deep">
                      {row.details.join(" · ")}
                    </span>
                  )}
                </>
              );
              return (
                <Fragment key={`${row.name}-${row.option}`}>
                  {/* Phones only: the treatment name as its own full-width row */}
                  {row.showName && (
                    <tr className={`reveal sm:hidden ${i > 0 ? "border-t border-line" : ""}`} style={delay}>
                      <th scope="colgroup" colSpan={3} className="pt-4 pb-1 font-normal">
                        {nameContent}
                      </th>
                    </tr>
                  )}
                <tr className={`reveal align-top ${row.showName && i > 0 ? "sm:border-t sm:border-line" : ""}`} style={delay}>
                  <th scope="row" className="hidden py-3 pr-4 font-normal sm:table-cell">
                    {row.showName ? nameContent : <span className="sr-only">{row.name}</span>}
                  </th>
                  <td className="py-3 pr-3 text-stone sm:pt-[1.1rem]">{row.option}</td>
                  <td className="numeric py-3 pr-3 text-right font-display text-[1.0625rem] font-semibold text-gold-deep sm:pt-[1.1rem] sm:text-[1.125rem]">
                    {formatPrice(row.price)}
                  </td>
                  <td className="py-2 text-right sm:py-2.5">
                    <a
                      href={whatsappLink({ treatment: `${row.name} (${row.option})`, source })}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${bookLabel}: ${row.name}, ${row.option}, on WhatsApp (opens in a new tab)`}
                      className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-control bg-linen px-3 text-[0.875rem] font-medium text-ink transition-colors duration-(--duration-quick) hover:bg-gold-deep hover:text-paper sm:px-4"
                    >
                      <WhatsAppIcon className="size-4" />
                      <span className="hidden sm:inline">{bookLabel}</span>
                    </a>
                  </td>
                </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
        {collapsedHeight && !expanded && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent" />
        )}
      </div>
      {collapsedHeight && (
        <div className="mt-5 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={panelId}
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 text-[0.9375rem] font-medium text-paper transition-colors hover:bg-gold-deep"
          >
            {expanded ? "Show less" : "Show all"}
          </button>
        </div>
      )}
    </div>
  );
}
