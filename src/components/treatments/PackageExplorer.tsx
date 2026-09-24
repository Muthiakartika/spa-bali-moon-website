"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import SiteImage from "@/components/ui/SiteImage";
import type { PackageGroup, SiteImage as SiteImageData } from "@/data/types";
import PackageCards from "./PackageCards";

export type ExplorerGroup = {
  group: PackageGroup;
  /** Photo shown beside the packages (the matching treatment's photo). */
  photo?: SiteImageData;
};

/**
 * PACKAGE EXPLORER — all spa package groups in one place (Pricelist page).
 * A row of tabs with the old site's gold line icons; each tab shows the group's photo,
 * texts and its package cards. Every panel stays in the page HTML (only hidden),
 * so all packages remain readable for search engines.
 */
export default function PackageExplorer({
  groups,
  buttonLabel,
  buttonHref,
}: {
  groups: ExplorerGroup[];
  buttonLabel: string;
  buttonHref?: string;
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  function onTabKeyDown(event: React.KeyboardEvent, index: number) {
    const last = groups.length - 1;
    let next = index;
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <div>
      {/* Tabs: icon + group name. Scrolls sideways on phones. */}
      <div
        role="tablist"
        aria-label="Spa package collections"
        className="scrollbar-thin -mx-gutter flex gap-3 overflow-x-auto px-gutter pb-3 lg:mx-0 lg:flex-wrap lg:justify-center lg:px-0"
      >
        {groups.map(({ group }, i) => {
          const selected = i === active;
          return (
            <button
              key={group.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => onTabKeyDown(event, i)}
              className={
                "flex w-28 shrink-0 flex-col items-center gap-2 rounded-card border px-3 py-4 text-center transition-colors duration-(--duration-quick) sm:w-32 " +
                (selected ? "border-gold bg-paper shadow-(--shadow-board)" : "border-transparent hover:bg-paper/70")
              }
            >
              {group.icon && (
                <Image src={group.icon.src} alt="" width={56} height={58} className={`size-12 object-contain transition-opacity ${selected ? "" : "opacity-70"}`} />
              )}
              <span className={`text-[0.875rem] leading-tight ${selected ? "font-semibold text-ink" : "font-medium text-stone"}`}>{group.title}</span>
            </button>
          );
        })}
      </div>

      {groups.map(({ group, photo }, i) => (
        <div
          key={group.id}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          hidden={i !== active}
          className="reveal-row mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12"
        >
          {photo && (
            <div className="relative hidden aspect-[4/5] overflow-hidden rounded-board lg:col-span-4 lg:block">
              <SiteImage image={photo} alt="" fill sizes="30vw" />
            </div>
          )}
          <div className={photo ? "lg:col-span-8" : "lg:col-span-12"}>
            <h3 className="text-title">{group.heading ?? group.title}</h3>
            {group.eyebrow && <p className="mt-3 text-lead text-stone">{group.eyebrow}</p>}
            {group.description && <p className="mt-4 max-w-[62ch] text-body text-stone">{group.description}</p>}
            <div className="mt-8">
              <PackageCards
                group={group}
                headingLevel="h4"
                buttonLabel={buttonLabel}
                buttonHref={buttonHref}
                gridClassName="sm:grid-cols-2 2xl:grid-cols-4"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
