"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * SCROLL REVEAL — one observer for the whole site (placed once in src/app/layout.tsx).
 *
 * Mark any element with data-motion="rise" (text, cards) or data-motion="photo" (image frames).
 * When it scrolls into view it rises 16px and fades in (photos open with a soft mask).
 * The look is defined in src/app/globals.css ("Scroll reveal").
 *
 * Safe by design:
 * - Elements already on screen when the page opens are left alone (no flicker).
 * - Without JavaScript, or with "reduce motion" switched on, everything is simply shown.
 * - Each element animates once, then stays still.
 */
const MAX_STAGGER_STEPS = 4; // items after the 4th in a row share the last delay
const STAGGER_MS = 80;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    // Only elements that start below the visible screen get the "waiting" state.
    const startLine = window.innerHeight * 0.9;
    const waiting = Array.from(document.querySelectorAll<HTMLElement>("[data-motion]:not(.is-visible)")).filter(
      (element) => element.getBoundingClientRect().top > startLine,
    );

    // Siblings in the same list or grid enter one after another (80ms apart).
    const siblingCount = new Map<Element | null, number>();
    for (const element of waiting) {
      const index = siblingCount.get(element.parentElement) ?? 0;
      siblingCount.set(element.parentElement, index + 1);
      element.style.setProperty("--motion-delay", `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
      element.classList.add("reveal-pending");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );
    waiting.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
