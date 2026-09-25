"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

/**
 * A list that shows only the first few items on phones and tablets, with a button to show the rest.
 * On large screens (lg and up) every item is always shown and the button is hidden.
 * Hidden items stay in the page (only visually hidden), so their text is still readable for search engines.
 *
 * `children` must be <li> elements; the first 8 show before the button is pressed.
 */
export default function ShowMoreList({
  children,
  total,
  className = "",
  moreLabel,
  lessLabel = "Show fewer",
}: {
  children: React.ReactNode;
  total: number;
  className?: string;
  moreLabel: string;
  lessLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <>
      {/* Collapsed: from the 9th item on, hidden below the lg breakpoint */}
      <ul id={listId} className={`${className} ${open ? "" : "max-lg:[&>li:nth-child(n+9)]:hidden"}`}>
        {children}
      </ul>
      {total > 8 && (
        <div className="mt-8 flex justify-center lg:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={listId}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex min-h-12 items-center gap-2 rounded-full border border-ink/25 px-7 font-semibold text-ink transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper"
          >
            {open ? lessLabel : moreLabel}
            <ChevronDown aria-hidden="true" strokeWidth={1.5} className={`size-4 transition-transform duration-(--duration-base) ${open ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
    </>
  );
}
