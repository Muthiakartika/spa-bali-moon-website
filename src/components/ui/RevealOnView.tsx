"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wrap a block with this and every element inside with class "reveal"
 * rises gently into place once, when the block scrolls into view.
 * Before that (and without JavaScript) the content is simply shown.
 */
export default function RevealOnView({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal={reveal ? "on" : "off"} className={className}>
      {children}
    </div>
  );
}
