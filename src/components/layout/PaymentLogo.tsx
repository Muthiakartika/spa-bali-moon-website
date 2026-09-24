import { Banknote } from "lucide-react";

/**
 * Logo for one accepted payment method, shown in the footer.
 * - Visa: official wordmark (path from Simple Icons, CC0) in Visa blue #1A1F71.
 * - Mastercard: the official two-circle mark in its brand colours (red #EB001B, yellow #F79E1B, orange #FF5F00).
 * - Cash: there is no brand logo for cash, so a banknote icon is used.
 * The visible logo is decoration; the method name is always given as text for screen readers.
 */
export default function PaymentLogo({ name }: { name: string }) {
  const key = name.toLowerCase();

  if (key === "visa") {
    return (
      <svg viewBox="0 8 24 8" role="img" aria-label="Visa" className="h-3.5 w-auto">
        <path fill="#1A1F71" d="M9.112 8.262L5.97 15.758H3.92L2.374 9.775c-.094-.368-.175-.503-.461-.658C1.447 8.864.677 8.627 0 8.479l.046-.217h3.3a.904.904 0 01.894.764l.817 4.338 2.018-5.102zm8.033 5.049c.008-1.979-2.736-2.088-2.717-2.972.006-.269.262-.555.822-.628a3.66 3.66 0 011.913.336l.34-1.59a5.207 5.207 0 00-1.814-.333c-1.917 0-3.266 1.02-3.278 2.479-.012 1.079.963 1.68 1.698 2.04.756.367 1.01.603 1.006.931-.005.504-.602.725-1.16.734-.975.015-1.54-.263-1.992-.473l-.351 1.642c.453.208 1.289.39 2.156.398 2.037 0 3.37-1.006 3.377-2.564m5.061 2.447H24l-1.565-7.496h-1.656a.883.883 0 00-.826.55l-2.909 6.946h2.036l.405-1.12h2.488zm-2.163-2.656l1.02-2.815.588 2.815zm-8.16-4.84l-1.603 7.496H8.34l1.605-7.496z" />
      </svg>
    );
  }

  if (key === "mastercard") {
    return (
      <svg viewBox="0 4.4 24 15.2" role="img" aria-label="Mastercard" className="h-6 w-auto">
        <circle cx="7.416" cy="12" r="7.416" fill="#EB001B" />
        <circle cx="16.584" cy="12" r="7.416" fill="#F79E1B" />
        <path fill="#FF5F00" d="M12 6.17A7.416 7.416 0 0 1 12 17.83A7.416 7.416 0 0 1 12 6.17Z" />
      </svg>
    );
  }

  // Cash (or any method without a logo): icon + name
  return (
    <span className="inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-ink">
      <Banknote aria-hidden="true" strokeWidth={1.75} className="size-4 text-gold-deep" />
      {name}
    </span>
  );
}
