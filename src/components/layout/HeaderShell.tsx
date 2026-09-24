"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The sticky header frame. Once the page scrolls, a thin line and a soft shadow
 * appear under it. (Only this small wrapper runs in the browser.)
 *
 * How it knows the page has scrolled: an invisible 1px marker sits just above the header.
 * When that marker leaves the screen, the page has scrolled. An IntersectionObserver
 * watches it, which is lighter than listening to every scroll event.
 */
export default function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const markerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    if (!marker) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(marker);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={markerRef} aria-hidden="true" className="pointer-events-none h-px w-full" />
      <header
        data-scrolled={scrolled}
        className={
          "sticky top-0 z-40 -mt-px border-b bg-paper transition-[border-color,box-shadow] duration-(--duration-base) " +
          (scrolled ? "border-line shadow-[0_10px_24px_-20px_rgb(28_26_29/0.35)]" : "border-transparent")
        }
      >
        {children}
      </header>
    </>
  );
}
