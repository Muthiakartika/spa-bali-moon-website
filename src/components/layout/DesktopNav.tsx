"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import type { NavItem } from "@/data/navigation";

type DesktopNavProps = {
  items: NavItem[];
  treatmentMenu: { label: string; items: NavItem[] }[];
  treatmentLinks: NavItem[];
};

/**
 * Desktop menu. "Treatments" opens a panel with every treatment, grouped like the price list.
 * Keyboard: Enter/Space opens it, Escape closes it and returns focus to the button.
 */
export default function DesktopNav({ items, treatmentMenu, treatmentLinks }: DesktopNavProps) {
  const pathname = usePathname();
  // The page the panel was opened on. Navigating to another page closes it automatically.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean) => setOpenOn(value ? pathname : null);
  const wrapperRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape or on a click outside the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenOn(null);
        buttonRef.current?.focus();
      }
    };
    const onClick = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpenOn(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const isTreatmentPage = pathname.startsWith("/seminyak/");
  const linkClass =
    "relative inline-flex min-h-11 items-center text-[0.9375rem] font-medium text-ink " +
    "after:absolute after:inset-x-0 after:bottom-2.5 after:h-px after:origin-left after:scale-x-0 after:bg-ink " +
    "after:transition-transform after:duration-(--duration-base) after:ease-out-expo hover:after:scale-x-100 " +
    "aria-[current=page]:after:scale-x-100";

  return (
    <nav aria-label="Main" className="hidden lg:block">
      <ul className="flex items-center gap-7 xl:gap-9">
        {items.map((item) => {
          if (item.label === "Treatments") {
            return (
              <li key={item.label} ref={wrapperRef}>
                <button
                  ref={buttonRef}
                  type="button"
                  aria-expanded={open}
                  aria-controls="treatments-panel"
                  onClick={() => setOpen(!open)}
                  className={`${linkClass} gap-1.5 ${isTreatmentPage ? "after:scale-x-100" : ""}`}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className={`size-4 transition-transform duration-(--duration-base) ease-out-expo ${open ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  id="treatments-panel"
                  hidden={!open}
                  className="absolute inset-x-0 top-full border-y border-line bg-paper shadow-[0_24px_40px_-30px_rgb(42_46_38/0.55)]"
                >
                  <Container className="grid grid-cols-12 gap-x-10 py-10">
                    {treatmentMenu.map((group) => (
                      <div
                        key={group.label}
                        className={group.label === "Massage" ? "col-span-5" : group.label === "Beauty" ? "col-span-3" : "col-span-2"}
                      >
                        <p className="meta-label border-b border-line pb-3 text-stone">{group.label}</p>
                        <ul className={`mt-4 gap-x-8 ${group.label === "Massage" ? "columns-2" : ""}`}>
                          {group.items.map((link) => (
                            <li key={link.href} className="break-inside-avoid">
                              <Link
                                href={link.href}
                                onClick={() => setOpenOn(null)}
                                aria-current={pathname === link.href ? "page" : undefined}
                                className="block py-1.5 font-display text-[1rem] font-medium leading-snug text-ink transition-colors duration-(--duration-quick) hover:text-gold-deep aria-[current=page]:text-gold-deep"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="col-span-12 mt-8 flex gap-8 border-t border-line pt-5">
                      {treatmentLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setOpenOn(null)} className="text-[0.9375rem] font-semibold text-ink underline decoration-gold underline-offset-[0.35em] hover:decoration-ink">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </Container>
                </div>
              </li>
            );
          }
          const current = item.href === pathname;
          return (
            <li key={item.label}>
              <Link href={item.href} aria-current={current ? "page" : undefined} className={linkClass}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
