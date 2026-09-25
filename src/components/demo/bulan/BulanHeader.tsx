import { Clock, MapPin } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import DesktopNav from "@/components/layout/DesktopNav";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import SearchButton from "@/components/layout/SearchButton";
import { business } from "@/data/business";
import { headerBookingLabel } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import { demoDropdowns, demoNav, searchablePosts } from "../demoData";

/** Gold outline pill, like the live site's "Book an Appointment" button. */
export const goldOutline = "rounded-full !border-gold !bg-transparent !text-gold-deep hover:!border-gold-deep hover:!bg-gold-deep hover:!text-paper";

/**
 * DEMO F · BULAN — header.
 * Taman's thin information bar (hours, address, phone), then the live site's white bar:
 * the logo, the menu in small serif capitals and a gold outline booking button. Only the white bar stays at the top.
 */
export default function BulanHeader() {
  return (
    <>
      <div className="border-b border-line bg-linen text-[0.8125rem] text-stone sm:text-small">
        <Container className="flex min-h-10 items-center justify-between gap-4 py-1.5">
          <div className="flex items-center gap-6">
            <p className="inline-flex items-center gap-2">
              <Clock aria-hidden="true" strokeWidth={1.5} className="size-4 text-gold-deep" />
              {business.openingHours.label} · {business.openingHours.display}
            </p>
            <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 py-1 hover:text-ink md:inline-flex">
              <MapPin aria-hidden="true" strokeWidth={1.5} className="size-4 text-gold-deep" />
              {business.address.short}
              <span className="sr-only"> (opens Google Maps in a new tab)</span>
            </a>
          </div>
          <a href={whatsappLink({ source: "Header" })} target="_blank" rel="noopener noreferrer" className="numeric inline-flex items-center gap-2 py-1 hover:text-ink">
            <WhatsAppIcon className="size-4 text-gold-deep" />
            {business.phoneDisplay}
            <span className="sr-only"> (WhatsApp, opens in a new tab)</span>
          </a>
        </Container>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <Container className="flex h-18 items-center justify-between gap-3 xl:h-20">
          <Logo className="h-7 sm:h-8 xl:h-9" />
          <DesktopNav items={demoNav} dropdowns={demoDropdowns} listClassName="bulan-nav" />
          <div className="flex items-center gap-1 sm:gap-2">
            <SearchButton posts={searchablePosts} />
            <div className="hidden xl:block">
              <BookButton label={headerBookingLabel} variant="secondary" className={`px-5 ${goldOutline}`} />
            </div>
            <a
              href={whatsappLink({ source: "Header" })}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-11 items-center justify-center rounded-full border border-gold text-gold-deep transition-colors hover:bg-gold-deep hover:text-paper xl:hidden"
            >
              <WhatsAppIcon className="size-5" />
              <span className="sr-only">Contact Spa Bali Moon on WhatsApp (opens in a new tab)</span>
            </a>
            <MobileMenu
              items={demoNav}
              dropdowns={demoDropdowns}
              bookButton={<BookButton label={headerBookingLabel} size="lg" className="w-full rounded-full" />}
            />
          </div>
        </Container>
      </header>
    </>
  );
}
