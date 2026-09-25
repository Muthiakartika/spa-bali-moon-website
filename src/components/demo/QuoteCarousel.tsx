"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Testimonial } from "@/data/types";

/**
 * DEMOS — one large guest review at a time, with previous / next buttons.
 * The reviews change only when the visitor asks (no automatic sliding).
 */
export default function QuoteCarousel({ reviews }: { reviews: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  const go = (step: number) => setIndex((i) => (i + step + reviews.length) % reviews.length);

  if (!review) return null;
  return (
    <div className="flex flex-col items-center text-center">
      <figure key={index} className="reveal-row min-h-[14rem] max-w-[56rem]" aria-live="polite">
        <blockquote className="font-display text-[clamp(1.9rem,1.3rem+2.4vw,3.5rem)] italic leading-[1.2]">
          <p>&ldquo;{review.text}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-8 text-small text-stone">
          <span className="font-semibold text-ink">{review.name}</span>, Customer review
        </figcaption>
      </figure>
      <div className="mt-10 flex items-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="inline-flex size-12 items-center justify-center rounded-full border border-ink/25 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-5" />
          <span className="sr-only">Previous review</span>
        </button>
        <span className="numeric min-w-16 text-small text-stone">
          {index + 1} / {reviews.length}
        </span>
        <button
          type="button"
          onClick={() => go(1)}
          className="inline-flex size-12 items-center justify-center rounded-full border border-ink/25 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-5" />
          <span className="sr-only">Next review</span>
        </button>
      </div>
    </div>
  );
}
