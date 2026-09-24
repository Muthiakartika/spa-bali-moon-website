import Link from "next/link";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { business } from "@/data/business";
import { footerDaySpaLink, footerExplore, footerHomeServices, headerBookingLabel, legalLinks } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import Logo from "./Logo";

/**
 * Site footer. Texts and contact details come from src/data/business.ts;
 * the link lists come from src/data/navigation.ts.
 * The full treatment list is not repeated here (owner's choice): it is in the
 * header's Treatments menu and on the Pricelist page.
 *
 * Note (migration-audit FUNC-02): the old footer had a newsletter sign-up form.
 * It is not rebuilt yet because it needs a mailing-list service; waiting for the owner's decision.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  // Every column uses the same heading and link styles, so the columns line up.
  const headingClass = "meta-label flex min-h-6 items-center text-ink";
  const headingLinkClass = "inline-flex min-h-6 items-center transition-colors duration-(--duration-quick) hover:text-gold-deep";
  const listClass = "mt-4 space-y-1 text-small";
  const linkClass =
    "inline-block py-1 text-stone underline decoration-transparent underline-offset-[0.3em] transition-colors duration-(--duration-quick) hover:text-ink hover:decoration-gold";
  const socialClass =
    "inline-flex size-11 items-center justify-center rounded-full bg-linen text-ink transition-colors hover:bg-gold-deep hover:text-paper";

  return (
    <footer className="border-t border-line bg-paper text-ink">
      <Container className="py-section">
        {/* Top: logo, about text and social links on the left; booking on the right */}
        <div className="flex flex-col gap-8 border-b border-line pb-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[34rem]">
            <Logo variant="footer" className="h-11" />
            <p className="mt-6 text-body text-stone">{business.aboutText}</p>
            <ul className="mt-6 flex items-center gap-2" aria-label="Social media">
              <li>
                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className={socialClass}>
                  <InstagramIcon />
                  <span className="sr-only">Instagram (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className={socialClass}>
                  <FacebookIcon />
                  <span className="sr-only">Facebook (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="shrink-0">
            <BookButton label={headerBookingLabel} size="lg" />
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-x-8 gap-y-12 pt-12 sm:grid-cols-2 lg:grid-cols-12">
          <nav aria-labelledby="footer-explore" className="lg:col-span-3">
            <h2 id="footer-explore" className={headingClass}>
              Explore
            </h2>
            <ul className={listClass}>
              {footerExplore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={headingClass}>
              <Link href={footerHomeServices.href} className={headingLinkClass}>
                {footerHomeServices.label}
              </Link>
            </h2>
            <ul className={listClass}>
              {footerHomeServices.items.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-small text-stone">
              Home service fee: {business.homeService.feeDisplay}
            </p>
          </div>

          <div className="sm:col-span-2 lg:col-span-6">
            <h2 className={headingClass}>
              <Link href={footerDaySpaLink.href} className={headingLinkClass}>
                {footerDaySpaLink.label}
              </Link>
            </h2>
            <dl className="mt-5 grid gap-x-8 gap-y-4 text-small text-stone sm:grid-cols-2">
              <div>
                <dt className="font-semibold text-ink">{business.openingHours.label}</dt>
                <dd className="mt-0.5">{business.openingHours.display}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Phone</dt>
                <dd>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`numeric whitespace-nowrap ${linkClass}`}>
                    {business.phoneDisplay}
                    <span className="sr-only"> (WhatsApp, opens in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Address</dt>
                <dd>
                  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {business.address.short}
                    <span className="sr-only"> (opens Google Maps in a new tab)</span>
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Accepted Payments</dt>
                <dd className="mt-0.5">{business.acceptedPayments.join(", ")}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-6 text-[0.8125rem] text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            All Rights Reserved © {year} {business.name}
          </p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
