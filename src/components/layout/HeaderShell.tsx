"use client";

import { useEffect, useState } from "react";

/**
 * The sticky header frame. Once the page scrolls, a thin line and a soft shadow
 * appear under it. (Only this small wrapper runs in the browser.)
 */
export default function HeaderShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className={
        "sticky top-0 z-40 border-b bg-ivory transition-[border-color,box-shadow] duration-(--duration-base) " +
        (scrolled ? "border-taupe/50 shadow-[0_10px_24px_-20px_rgb(42_46_38/0.5)]" : "border-transparent")
      }
    >
      {children}
    </header>
  );
}
