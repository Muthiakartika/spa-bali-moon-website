"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

/**
 * TIRTA — a row of cards you can swipe (phones) or move with the arrow buttons (desktop).
 * Every card is always in the page; the row only scrolls. A thin gold line shows how far along you are.
 * `children` must be <li> elements (each one sets its own width).
 */
export default function SnapSlider({ label, children }: { label: string; children: React.ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= max - 4);
    setProgress(max > 0 ? (el.scrollLeft + el.clientWidth) / el.scrollWidth : 1);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(card.parentElement!).columnGap) || 0;
    const perView = Math.max(1, Math.floor((el.clientWidth + gap) / (card.offsetWidth + gap)));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * perView * (card.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
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
        <ul className="flex gap-5">{children}</ul>
      </div>
      <div className="mt-8 flex items-center gap-6">
        <div aria-hidden="true" className="h-px flex-1 bg-line">
          <div className="h-px bg-gold-deep transition-[width] duration-(--duration-base) ease-(--ease-calm)" style={{ width: `${Math.round(progress * 100)}%` }} />
        </div>
        <div className="flex gap-3">
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
