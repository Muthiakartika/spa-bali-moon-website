"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import LotusMark from "@/components/layout/LotusMark";
import type { Testimonial } from "@/data/types";

/**
 * Guest reviews, one large review at a time, with the reviewer's initial, a counter, a thin progress line
 * and the lotus from the logo above (or gold quote marks with `mark="quote"`).
 * Changes only when the visitor asks.
 * No star ratings: the live 5-star display is on hold until the owner decides (migration-audit.md SEO-03).
 */
export default function QuoteSpotlight({ reviews, mark = "lotus" }: { reviews: Testimonial[]; mark?: "lotus" | "quote" }) {
  const [index, setIndex] = useState(0);
  const go = (step: number) => setIndex((i) => (i + step + reviews.length) % reviews.length);
  if (reviews.length === 0) return null;

  const buttonClass =
    "inline-flex size-12 items-center justify-center rounded-full border border-ink/20 bg-paper transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper";

  return (
    <div className="flex flex-col items-center text-center">
      {mark === "lotus" ? (
        <LotusMark className="h-8 w-auto text-gold" />
      ) : (
        <Quote aria-hidden="true" strokeWidth={1.25} className="size-10 fill-gold/15 text-gold" />
      )}
      {/* Every review is in the page (so its text stays readable for search engines, as on the live site);
          they share one spot and only the current one is visible. The spot is as tall as the longest review. */}
      <div className="mt-8 grid w-full max-w-[54rem]" aria-live="polite">
        {reviews.map((item, i) => {
          const current = i === index;
          return (
            <figure
              key={`${item.name}-${i}`}
              aria-hidden={current ? undefined : true}
              className={`flex flex-col items-center justify-center transition-[opacity,visibility] duration-(--duration-slow) ease-(--ease-calm) [grid-area:1/1] ${
                current ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <blockquote className="font-display text-[clamp(1.75rem,1.2rem+2.2vw,3.25rem)] italic leading-[1.25]">
                <p>&ldquo;{item.text}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-left">
                <span aria-hidden="true" className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-cream font-display text-[1.3rem] italic text-gold-deep">
                  {item.name.charAt(0).toUpperCase()}
                </span>
                <span>
                  <span className="block font-bold">{item.name}</span>
                  <span className="text-small text-stone">Customer review</span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
      <div className="mt-10 flex w-full max-w-[28rem] items-center gap-4">
        <button type="button" onClick={() => go(-1)} className={buttonClass}>
          <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-5" />
          <span className="sr-only">Previous review</span>
        </button>
        <div className="flex flex-1 flex-col items-center gap-2">
          <span className="numeric text-small text-stone">
            {index + 1} / {reviews.length}
          </span>
          <span aria-hidden="true" className="h-px w-full bg-line">
            <span className="block h-px bg-gold-deep transition-[width] duration-(--duration-base) ease-(--ease-calm)" style={{ width: `${((index + 1) / reviews.length) * 100}%` }} />
          </span>
        </div>
        <button type="button" onClick={() => go(1)} className={buttonClass}>
          <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-5" />
          <span className="sr-only">Next review</span>
        </button>
      </div>
    </div>
  );
}
