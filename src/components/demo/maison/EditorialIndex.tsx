"use client";

import Link from "next/link";
import { useState } from "react";
import SiteImage from "@/components/ui/SiteImage";
import type { SiteImage as SiteImageData } from "@/data/types";

export type IndexEntry = { name: string; priceLabel: string; href: string; image: SiteImageData };

/**
 * MAISON — treatment index, like the contents page of a magazine.
 * Large serif names in a list; the photo on the left changes to the treatment you point at
 * (or focus with the keyboard). On phones each row shows its own small photo instead.
 */
export default function EditorialIndex({ entries }: { entries: IndexEntry[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28 aspect-[4/5] overflow-hidden rounded-[2px]">
          {entries.map((entry, i) => (
            <div
              key={entry.href + entry.name}
              aria-hidden="true"
              className={`absolute inset-0 transition-[opacity,transform] duration-(--duration-slow) ease-(--ease-calm) ${i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"}`}
            >
              <SiteImage image={entry.image} alt="" fill sizes="40vw" />
            </div>
          ))}
        </div>
      </div>

      <ol className="border-t border-ink/15 lg:col-span-7">
        {entries.map((entry, i) => (
          <li key={entry.href + entry.name} className="border-b border-ink/15">
            <Link
              href={entry.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group flex items-center gap-5 py-4 sm:py-5"
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-[2px] lg:hidden">
                <SiteImage image={entry.image} alt="" fill sizes="64px" />
              </span>
              <span
                className={`flex-1 font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.6rem)] font-light leading-tight transition-colors duration-(--duration-quick) ${
                  i === active ? "lg:italic lg:text-gold-deep" : ""
                } group-hover:text-gold-deep`}
              >
                {entry.name}
              </span>
              <span className="numeric shrink-0 text-right text-small text-stone">{entry.priceLabel}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
