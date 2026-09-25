"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * A row of cards you can swipe (phones) or move with the arrow buttons (desktop), with a page counter ("1 / 2").
 * Every card is always in the page (readable for search engines); the row only scrolls. A thin gold line shows how far along you are.
 * `children` must be <li> elements (each one sets its own width), or pass `listClassName` to lay them out
 * yourself, e.g. a grid of two rows so one "page" shows several items. The arrows always move one full page.
 */
export default function SnapSlider({
  label,
  children,
  listClassName = "flex gap-5",
}: {
  label: string;
  children: React.ReactNode;
  listClassName?: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [page, setPage] = useState({ current: 1, total: 1 });

  /** Width of one "page": as many whole cards (or grid columns) as fit in view. */
  const pageWidth = (el: HTMLDivElement) => {
    const card = el.querySelector("li");
    if (!card) return el.clientWidth;
    const gap = parseFloat(getComputedStyle(card.parentElement!).columnGap) || 0;
    const perView = Math.max(1, Math.floor((el.clientWidth + gap) / (card.offsetWidth + gap)));
    return perView * (card.offsetWidth + gap);
  };

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const step = pageWidth(el);
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setProgress(max > 0 ? (el.scrollLeft + el.clientWidth) / el.scrollWidth : 1);
    const total = max > 4 ? Math.ceil((max - 4) / step) + 1 : 1;
    setPage({ current: el.scrollLeft >= max - 4 ? total : Math.min(total, Math.round(el.scrollLeft / step) + 1), total });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * pageWidth(el), behavior: reduce ? "auto" : "smooth" });
  };

  const buttonClass =
    "inline-flex size-12 items-center justify-center rounded-full border border-ink/20 bg-paper text-ink transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <div
        ref={track}
        onScroll={update}
        role="region"
        tabIndex={0}
        aria-label={`${label} (scroll sideways)`}
        className="-mx-gutter snap-x snap-mandatory overflow-x-auto scroll-px-gutter px-gutter pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className={listClassName}>{children}</ul>
      </div>
      <div className="mt-8 flex items-center gap-6">
        <div aria-hidden="true" className="h-px flex-1 bg-line">
          <div className="h-px bg-gold-deep transition-[width] duration-(--duration-base) ease-(--ease-calm)" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
        <div className="flex items-center gap-3">
          {page.total > 1 && (
            <span className="numeric min-w-12 text-center text-small text-stone">
              {page.current} / {page.total}
            </span>
          )}
          <button type="button" onClick={() => move(-1)} disabled={atStart} className={buttonClass}>
            <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-5" />
            <span className="sr-only">Previous</span>
          </button>
          <button type="button" onClick={() => move(1)} disabled={atEnd} className={buttonClass}>
            <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-5" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
