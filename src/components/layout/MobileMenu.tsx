"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { MainNavItem, NavItem } from "@/data/navigation";

type MobileMenuProps = {
  items: MainNavItem[];
  dropdowns: { treatments: NavItem[]; blog: NavItem[] };
  /** The booking button (rendered on the server and passed in). */
  bookButton: React.ReactNode;
};

/**
 * Phone/tablet menu (same items as the desktop menu). It uses the browser's own <dialog>,
 * which keeps keyboard focus inside the menu while it is open and closes with the Escape key.
 */
export default function MobileMenu({ items, dropdowns, bookButton }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const [openList, setOpenList] = useState<string | null>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  // Close the menu after navigating to another page.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const rowClass = "flex min-h-14 flex-1 items-center font-display text-[1.25rem] font-semibold";
  const subLinkClass = "flex min-h-11 items-center text-[0.9375rem] leading-snug aria-[current=page]:font-semibold aria-[current=page]:text-gold-deep";

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        className="inline-flex size-11 items-center justify-center rounded-control text-ink transition-colors hover:bg-linen"
      >
        <Menu aria-hidden="true" strokeWidth={1.5} className="size-6" />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        className="mobile-menu m-0 ml-auto h-dvh max-h-none w-full max-w-md bg-paper p-0 text-ink backdrop:bg-ink/40"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b border-line px-gutter py-3">
            <p className="font-display text-[1.25rem] font-semibold">Spa Bali Moon</p>
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center rounded-control transition-colors hover:bg-linen"
            >
              <X aria-hidden="true" strokeWidth={1.5} className="size-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Main" className="flex-1 overflow-y-auto px-gutter py-2">
            <ul>
              {items.map((item) => {
                const name = item.dropdown;
                if (!name) {
                  return (
                    <li key={item.label} className="border-b border-line">
                      <Link href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined} className={rowClass}>
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                const isOpen = openList === name;
                const listId = `mobile-${name}-list`;
                const links = dropdowns[name];
                return (
                  <li key={item.label} className="border-b border-line">
                    <div className="flex items-center">
                      {name === "blog" ? (
                        <Link href={item.href} onClick={close} aria-current={pathname === item.href ? "page" : undefined} className={rowClass}>
                          {item.label}
                        </Link>
                      ) : (
                        <span className={rowClass}>{item.label}</span>
                      )}
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={listId}
                        onClick={() => setOpenList(isOpen ? null : name)}
                        className="inline-flex size-11 items-center justify-center rounded-control transition-colors hover:bg-linen"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          strokeWidth={1.5}
                          className={`size-5 text-gold-deep transition-transform duration-(--duration-base) ${isOpen ? "rotate-180" : ""}`}
                        />
                        <span className="sr-only">
                          {isOpen ? "Hide" : "Show"} {item.label} list
                        </span>
                      </button>
                    </div>
                    <ul id={listId} hidden={!isOpen} className={`pb-4 ${name === "treatments" ? "grid grid-cols-2 gap-x-4" : ""}`}>
                      {links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} onClick={close} aria-current={pathname === link.href ? "page" : undefined} className={subLinkClass}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-line bg-linen px-gutter py-6">{bookButton}</div>
        </div>
      </dialog>
    </div>
  );
}
