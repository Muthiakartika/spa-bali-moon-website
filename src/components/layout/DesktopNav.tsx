"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import type { MainNavItem, NavItem } from "@/data/navigation";

type DesktopNavProps = {
  items: MainNavItem[];
  /** Lists opened by the dropdown items (see src/data/navigation.ts). */
  dropdowns: { treatments: NavItem[]; blog: NavItem[] };
};

/**
 * Desktop menu, the same items as the live website.
 * "Treatments" opens a wide panel with every treatment in 4 columns; "Blog" opens a list of articles.
 * A dropdown opens on click or when the mouse rests on it. Escape or a click outside closes it.
 */
export default function DesktopNav({ items, dropdowns }: DesktopNavProps) {
  const pathname = usePathname();
  // Which dropdown is open, remembered with the page it was opened on (a new page closes it).
  const [openState, setOpenState] = useState<{ name: string; page: string } | null>(null);
  const openName = openState?.page === pathname ? openState.name : null;
  const setOpen = (name: string | null) => setOpenState(name ? { name, page: pathname } : null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!openName) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenState(null);
        navRef.current?.querySelector<HTMLButtonElement>(`[data-dropdown="${openName}"]`)?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenState(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openName]);

  const linkClass =
    "relative inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink " +
    "after:absolute after:inset-x-0 after:bottom-2.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink " +
    "after:transition-transform after:duration-(--duration-base) after:ease-(--ease-calm) hover:after:scale-x-100 " +
    "aria-[current=page]:after:scale-x-100";
  const menuLinkClass =
    "block py-1.5 text-[0.9375rem] leading-snug text-ink transition-colors duration-(--duration-quick) hover:text-gold-deep aria-[current=page]:font-semibold aria-[current=page]:text-gold-deep";

  return (
    <nav ref={navRef} aria-label="Main" className="hidden self-stretch xl:block">
      {/* Items are as tall as the header, so the mouse can move down into a dropdown without closing it */}
      <ul className="flex h-full items-center gap-6 2xl:gap-8">
        {items.map((item) => {
          if (!item.dropdown) {
            return (
              <li key={item.label} className="flex h-full items-center">
                <Link href={item.href} aria-current={item.href === pathname ? "page" : undefined} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            );
          }

          const name = item.dropdown;
          const isOpen = openName === name;
          const panelId = `${name}-panel`;
          const isCurrentSection = name === "treatments" ? dropdowns.treatments.some((l) => l.href === pathname) : pathname.startsWith("/guide/");
          const toggle = (
            <button
              type="button"
              data-dropdown={name}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? null : name)}
              className={
                name === "treatments"
                  ? `${linkClass} gap-1.5 ${isCurrentSection ? "after:scale-x-100" : ""}`
                  : "inline-flex min-h-11 min-w-6 items-center justify-center text-ink"
              }
            >
              {name === "treatments" ? item.label : <span className="sr-only">Show {item.label} articles</span>}
              <ChevronDown
                aria-hidden="true"
                strokeWidth={1.75}
                className={`size-4 transition-transform duration-(--duration-base) ease-(--ease-calm) ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          );

          return (
            <li
              key={item.label}
              className={`flex h-full items-center ${name === "blog" ? "relative gap-1" : ""}`}
              onMouseEnter={() => setOpen(name)}
              onMouseLeave={() => setOpen(null)}
            >
              {/* Blog keeps its own page link; the arrow next to it opens the article list */}
              {name === "blog" && (
                <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`${linkClass} ${isCurrentSection ? "after:scale-x-100" : ""}`}>
                  {item.label}
                </Link>
              )}
              {toggle}

              {name === "treatments" ? (
                <div id={panelId} hidden={!isOpen} className="absolute inset-x-0 top-full border-y border-line bg-paper shadow-[0_24px_40px_-30px_rgb(28_26_29/0.45)]">
                  <Container className="py-8">
                    <ul className="grid grid-flow-col grid-cols-4 grid-rows-6 gap-x-10">
                      {dropdowns.treatments.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} onClick={() => setOpen(null)} aria-current={pathname === link.href ? "page" : undefined} className={menuLinkClass}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Container>
                </div>
              ) : (
                <div id={panelId} hidden={!isOpen} className="absolute left-0 top-full w-[24rem] rounded-card border border-line bg-paper p-3 shadow-[0_24px_40px_-30px_rgb(28_26_29/0.45)]">
                  <ul>
                    {dropdowns.blog.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(null)}
                          aria-current={pathname === link.href ? "page" : undefined}
                          className={`${menuLinkClass} rounded-cell px-3 py-2 hover:bg-linen`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
