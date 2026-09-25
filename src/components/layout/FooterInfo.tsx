import Link from "next/link";
import PaymentLogo from "@/components/layout/PaymentLogo";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { footerDaySpaLink, footerHomeServices, legalLinks } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * The live footer's information (Contact Us, Our Day Spa, Home Services, payments,
 * bottom line), used by the site footer (and the design demos). `tone` sets light or dark text.
 */
type Tone = "light" | "dark";

function colors(tone: Tone) {
  return tone === "dark"
    ? { heading: "text-paper", label: "text-gold-soft", text: "text-linen/90", link: "text-linen/90 hover:text-paper hover:decoration-gold-soft", rule: "border-linen/15", muted: "text-linen/75" }
    : { heading: "text-ink", label: "text-gold-deep", text: "text-stone", link: "text-stone hover:text-ink hover:decoration-gold", rule: "border-line", muted: "text-stone" };
}

export function FooterColumns({ tone, className = "" }: { tone: Tone; className?: string }) {
  const c = colors(tone);
  const { contact, daySpa, homeServices } = footerContent;
  const linkClass = `inline-block py-1 underline decoration-transparent underline-offset-[0.3em] transition-colors ${c.link}`;
  const headingClass = `text-[0.9375rem] font-semibold ${c.heading}`;
  const labelClass = `text-small font-semibold ${c.label}`;

  return (
    <div className={`grid gap-10 text-small sm:grid-cols-3 ${className}`}>
      <div>
        <h2 className={headingClass}>{contact.heading}</h2>
        <p className={`mt-2 ${labelClass}`}>{contact.phoneLabel}</p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`numeric whitespace-nowrap ${linkClass}`}>
          {business.phoneDisplay}
          <span className="sr-only"> (WhatsApp, opens in a new tab)</span>
        </a>
      </div>
      <div>
        <h2 className={headingClass}>
          <Link href={footerDaySpaLink.href} className="inline-flex min-h-6 items-center hover:underline">
            {footerDaySpaLink.label}
          </Link>
        </h2>
        <p className={`mt-2 ${labelClass}`}>{daySpa.openDailyLabel}</p>
        <p className={c.text}>{business.openingHours.display}</p>
        <p className={`mt-2 ${labelClass}`}>{daySpa.addressLabel}</p>
        <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {business.address.short}
          <span className="sr-only"> (opens Google Maps in a new tab)</span>
        </a>
      </div>
      <div>
        <h2 className={headingClass}>
          <Link href={footerHomeServices.href} className="inline-flex min-h-6 items-center hover:underline">
            {footerHomeServices.label}
          </Link>
        </h2>
        <ul className="mt-1">
          {footerHomeServices.items.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className={linkClass}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className={`mt-2 ${labelClass}`}>{homeServices.feeLabel}</p>
        <p className={c.text}>{business.homeService.feeDisplay}</p>
      </div>
    </div>
  );
}

export function FooterPayments({ tone, className = "" }: { tone: Tone; className?: string }) {
  const c = colors(tone);
  return (
    <div className={className}>
      <p className={`text-small font-semibold ${c.label}`}>{footerContent.paymentsLabel}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {business.acceptedPayments.map((payment) => (
          <li key={payment} className="inline-flex h-10 min-w-16 items-center justify-center rounded-control border border-line bg-paper px-3">
            <PaymentLogo name={payment} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterBottomLine({ tone, className = "" }: { tone: Tone; className?: string }) {
  const c = colors(tone);
  const linkClass = `inline-block py-1 underline decoration-transparent underline-offset-[0.3em] transition-colors ${c.link}`;
  return (
    <p className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] ${c.muted} ${className}`}>
      <span>
        {footerContent.copyright} {new Date().getFullYear()}
      </span>
      <Link href="/" className={linkClass}>
        {business.name}
      </Link>
      {legalLinks.map((link) => (
        <span key={link.href} className="inline-flex items-center gap-2">
          <span aria-hidden="true">·</span>
          <Link href={link.href} className={linkClass}>
            {link.label}
          </Link>
        </span>
      ))}
    </p>
  );
}
