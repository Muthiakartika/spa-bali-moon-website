"use client";

import { usePathname } from "next/navigation";

/**
 * Wraps every page in the site header, footer and floating WhatsApp button —
 * except the design demos under /demo/, which bring their own header and footer.
 * (Header and Footer are built on the server and passed in, so nothing moves to the browser.)
 */
export default function SiteChrome({
  header,
  footer,
  extras,
  children,
}: {
  header: React.ReactNode;
  footer: React.ReactNode;
  extras?: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDemo = pathname === "/demo" || pathname.startsWith("/demo/");

  if (isDemo) return <>{children}</>;

  return (
    <>
      {header}
      <main id="main-content" tabIndex={-1} className="outline-none">
        {children}
      </main>
      {footer}
      {extras}
    </>
  );
}
