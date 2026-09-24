"use client";

import { ChevronDown, Clock, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { NavItem } from "@/data/navigation";

type MobileMenuProps = {
  items: NavItem[];
  treatmentMenu: { label: string; items: NavItem[] }[];
  treatmentLinks: NavItem[];
  /** The booking button (rendered on the server and passed in). */
  bookButton: React.ReactNode;
  hours: string;
  address: string;
  mapsUrl: string;
};

/**
 * Phone/tablet menu. It uses the browser's own <dialog>, which keeps keyboard focus
 * inside the menu while it is open and closes with the Escape key.
 */
export default function MobileMenu({ items, treatmentMenu, treatmentLinks, bookButton, hours, address, mapsUrl }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  // Close the menu after navigating to another page.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        className="inline-flex size-11 items-center justify-center rounded-control text-olive transition-colors hover:bg-sand"
      >
        <Menu aria-hidden="true" strokeWidth={1.5} className="size-6" />
        <span className="sr-only">Open menu</span>
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-menu"
        aria-label="Menu"
        className="mobile-menu m-0 ml-auto h-dvh max-h-none w-full max-w-md bg-ivory p-0 text-olive backdrop:bg-olive/40"
      >
        <div className="flex min-h-full flex-col">
          <div className="flex items-center justify-between border-b border-taupe/50 px-gutter py-3">
            <p className="font-serif text-[1.5rem]">Spa Bali Moon</p>
            <button
              type="button"
              onClick={close}
              className="inline-flex size-11 items-center justify-center rounded-control transition-colors hover:bg-sand"
            >
              <X aria-hidden="true" strokeWidth={1.5} className="size-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Main" className="flex-1 overflow-y-auto px-gutter py-4">
            <ul>
              {items.map((item) => {
                if (item.label === "Treatments") {
                  return (
                    <li key={item.label} className="border-b border-taupe/40">
                      <details className="group/treat">
                        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between font-serif text-[1.75rem] [&::-webkit-details-marker]:hidden">
                          {item.label}
                          <ChevronDown
                            aria-hidden="true"
                            strokeWidth={1.5}
                            className="size-5 text-brown transition-transform duration-(--duration-base) group-open/treat:rotate-180"
                          />
                        </summary>
                        <div className="space-y-6 pb-6">
                          {treatmentMenu.map((group) => (
                            <div key={group.label}>
                              <p className="label-caps text-brown-ink">{group.label}</p>
                              <ul className="mt-2 grid grid-cols-2 gap-x-4">
                                {group.items.map((link) => (
                                  <li key={link.href}>
                                    <Link
                                      href={link.href}
                                      onClick={close}
                                      aria-current={pathname === link.href ? "page" : undefined}
                                      className="flex min-h-11 items-center text-[0.9375rem] aria-[current=page]:font-semibold"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <div className="flex gap-6 border-t border-taupe/40 pt-4">
                            {treatmentLinks.map((link) => (
                              <Link key={link.href} href={link.href} onClick={close} className="font-semibold underline decoration-taupe underline-offset-[0.35em]">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </details>
                    </li>
                  );
                }
                return (
                  <li key={item.label} className="border-b border-taupe/40">
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="flex min-h-14 items-center font-serif text-[1.75rem]"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-4 border-t border-taupe/50 bg-sand px-gutter py-6">
            {bookButton}
            <p className="flex items-center gap-2 text-small text-brown-ink">
              <Clock aria-hidden="true" strokeWidth={1.5} className="size-4" />
              {hours}
            </p>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-small text-brown-ink underline decoration-taupe underline-offset-[0.3em]">
              <MapPin aria-hidden="true" strokeWidth={1.5} className="mt-0.5 size-4 shrink-0" />
              <span>
                {address}
                <span className="sr-only"> (opens Google Maps in a new tab)</span>
              </span>
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
