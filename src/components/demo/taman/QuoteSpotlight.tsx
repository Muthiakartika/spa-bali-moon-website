"use client";

import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import LotusMark from "@/components/layout/LotusMark";
import type { Testimonial } from "@/data/types";

/**
 * TAMAN — one large guest review at a time (from Botanica), with the reviewer's initial,
 * a thin progress line and the lotus from the logo (from Tirta), or gold quote marks (`mark="quote"`, as on the live site).
 * Changes only when the visitor asks.
 * No star ratings: the live 5-star display is on hold until the owner decides (migration-audit.md SEO-03).
 */
export default function QuoteSpotlight({ reviews, mark = "lotus" }: { reviews: Testimonial[]; mark?: "lotus" | "quote" }) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const go = (step: number) => setIndex((i) => (i + step + reviews.length) % reviews.length);
  if (!review) return null;

  const buttonClass =
    "inline-flex size-12 items-center justify-center rounded-full border border-ink/20 bg-paper transition-colors hover:border-gold-deep hover:bg-gold-deep hover:text-paper";

  return (
    <div className="flex flex-col items-center text-center">
      {mark === "lotus" ? (
        <LotusMark className="h-8 w-auto text-gold" />
      ) : (
        <Quote aria-hidden="true" strokeWidth={1.25} className="size-10 fill-gold/15 text-gold" />
      )}
      <figure key={index} className="reveal-row mt-8 flex min-h-[15rem] max-w-[54rem] flex-col items-center" aria-live="polite">
        <blockquote className="font-display text-[clamp(1.75rem,1.2rem+2.2vw,3.25rem)] italic leading-[1.25]">
          <p>&ldquo;{review.text}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-8 flex items-center gap-3 text-left">
          <span aria-hidden="true" className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-cream font-display text-[1.3rem] italic text-gold-deep">
            {review.name.charAt(0).toUpperCase()}
          </span>
          <span>
            <span className="block font-bold">{review.name}</span>
            <span className="text-small text-stone">Customer review</span>
          </span>
        </figcaption>
      </figure>
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
