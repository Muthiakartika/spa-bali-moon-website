"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import type { MainNavItem, NavItem } from "@/data/navigation";

/**
 * MAISON — full-screen menu (on every screen size), like a luxury resort site.
 * The main pages in large serif type on the left; every treatment and article on the right.
 * Built on <dialog>: keeps keyboard focus inside and closes with Escape.
 */
export default function FullscreenMenu({
  items,
  dropdowns,
  footer,
  triggerClassName = "",
}: {
  items: MainNavItem[];
  dropdowns: { treatments: NavItem[]; blog: NavItem[] };
  /** Booking button, hours and address (rendered on the server and passed in). */
  footer: React.ReactNode;
  triggerClassName?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        aria-haspopup="dialog"
        className={`inline-flex min-h-11 items-center gap-3 rounded-full px-3 text-[0.9375rem] font-normal transition-colors ${triggerClassName}`}
      >
        <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
          <span className="h-px w-full bg-current" />
          <span className="h-px w-2/3 bg-current" />
        </span>
        Menu
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-linen p-0 text-ink backdrop:bg-ink/40"
      >
        <div className="mx-auto flex min-h-full max-w-(--container-site) flex-col px-gutter py-6">
          <div className="flex justify-end">
            <button type="button" onClick={close} className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 transition-colors hover:bg-paper">
              Close
              <X aria-hidden="true" strokeWidth={1.25} className="size-5" />
            </button>
          </div>

          <div className="grid flex-1 gap-12 py-8 lg:grid-cols-12 lg:gap-16">
            <nav aria-label="Main" className="lg:col-span-5">
              <ul>
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="block py-1 font-display text-[clamp(2.25rem,1.5rem+2.8vw,4rem)] font-light leading-[1.1] transition-colors hover:text-gold-deep aria-[current=page]:italic"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
              <div>
                <p className="text-small text-stone">Treatments</p>
                <ul className="mt-3 columns-2 gap-6 text-[0.9375rem]">
                  {dropdowns.treatments.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={close} className="inline-block py-1 hover:text-gold-deep">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-small text-stone">Blog</p>
                <ul className="mt-3 space-y-1 text-[0.9375rem]">
                  {dropdowns.blog.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} onClick={close} className="inline-block py-1 leading-snug hover:text-gold-deep">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-ink/15 pt-6">{footer}</div>
        </div>
      </dialog>
    </>
  );
}
