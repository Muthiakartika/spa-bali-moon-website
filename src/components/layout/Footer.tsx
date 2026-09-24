import Link from "next/link";
import Container from "@/components/ui/Container";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { footerDaySpaLink, footerHomeServices, legalLinks } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import FooterSkyline from "./FooterSkyline";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import PaymentLogo from "./PaymentLogo";

/**
 * Site footer — the same content as the live website footer:
 * about text, Contact Us, Our Day Spa, Home Services, newsletter, accepted payments, legal links.
 * Texts: src/data/footer.ts (headings/labels) and src/data/business.ts (contact details).
 *
 * Design: a dark gold band with a Balinese skyline (split gate, palms, frangipani) rising above it.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  const { contact, daySpa, homeServices, newsletter, paymentsLabel, copyright } = footerContent;

  const headingClass = "text-[0.9375rem] font-semibold text-paper";
  const labelClass = "text-small font-semibold text-gold-soft";
  const linkClass =
    "inline-block py-1 text-linen/90 underline decoration-transparent underline-offset-[0.3em] transition-colors duration-(--duration-quick) hover:text-paper hover:decoration-gold-soft";

  return (
    <footer className="relative mt-[max(6rem,12.5vw)] bg-gold-night text-linen">
      {/* The skyline sits on top of the footer, rising into the space above it.
          Its height follows the screen width (12.5vw = the drawing's 8:1 shape), so nothing is cut off. */}
      <FooterSkyline className="absolute inset-x-0 bottom-[calc(100%-1px)] h-[max(6rem,12.5vw)]" />

      <Container className="grid gap-12 pb-14 pt-6 md:grid-cols-2 xl:grid-cols-12 xl:gap-0 xl:pb-16 xl:pt-8">
        {/* About + payments */}
        <div className="flex flex-col gap-6 xl:col-span-4 xl:pr-10">
          <Logo variant="footer" className="h-11" />
          <p className="max-w-[44ch] text-small leading-relaxed text-linen/85">{business.aboutText}</p>
          <div>
            <p className={labelClass}>{paymentsLabel}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {business.acceptedPayments.map((payment) => (
                <li key={payment} className="inline-flex h-10 min-w-16 items-center justify-center rounded-control bg-paper px-3 shadow-(--shadow-button)">
                  <PaymentLogo name={payment} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 xl:col-span-4 xl:items-center xl:border-x xl:border-linen/15 xl:px-10 xl:text-center">
          <h2 className="text-subtitle text-paper">{newsletter.heading}</h2>
          <p className="max-w-[38ch] text-small text-linen/85">{newsletter.note}</p>
          <div className="w-full max-w-[26rem]">
            <NewsletterForm />
          </div>
        </div>

        {/* Contact, day spa, home services */}
        <div className="grid gap-8 border-t border-linen/15 pt-10 sm:grid-cols-2 md:col-span-2 xl:col-span-4 xl:border-t-0 xl:pl-10 xl:pt-0">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className={headingClass}>{contact.heading}</h2>
              <dl className="mt-2 text-small">
                <dt className={labelClass}>{contact.phoneLabel}</dt>
                <dd>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`numeric whitespace-nowrap ${linkClass}`}>
                    {business.phoneDisplay}
                    <span className="sr-only"> (WhatsApp, opens in a new tab)</span>
                  </a>
                </dd>
              </dl>
            </div>
            <div>
              <h2 className={headingClass}>
                <Link href={footerDaySpaLink.href} className="inline-flex min-h-6 items-center transition-colors hover:text-gold-soft">
                  {footerDaySpaLink.label}
                </Link>
              </h2>
              <dl className="mt-2 space-y-2 text-small">
                <div>
                  <dt className={labelClass}>{daySpa.openDailyLabel}</dt>
                  <dd className="text-linen/90">{business.openingHours.display}</dd>
                </div>
                <div>
                  <dt className={labelClass}>{daySpa.addressLabel}</dt>
                  <dd>
                    <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {business.address.short}
                      <span className="sr-only"> (opens Google Maps in a new tab)</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div>
            <h2 className={headingClass}>
              <Link href={footerHomeServices.href} className="inline-flex min-h-6 items-center transition-colors hover:text-gold-soft">
                {footerHomeServices.label}
              </Link>
            </h2>
            <ul className="mt-2 text-small">
              {footerHomeServices.items.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <dl className="mt-3 text-small">
              <dt className={labelClass}>{homeServices.feeLabel}</dt>
              <dd className="text-linen/90">{business.homeService.feeDisplay}</dd>
            </dl>
          </div>
        </div>
      </Container>

      {/* Bottom line, as on the live site: "All Rights Reserved © 2026 Spa Bali Moon · Privacy Policy · Terms & Conditions" */}
      <div className="border-t border-linen/15">
        <Container className="py-5">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-linen/80">
            <span>
              {copyright} {year}
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
        </Container>
      </div>
    </footer>
  );
}
