import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import DesktopNav from "@/components/layout/DesktopNav";
import Logo from "@/components/layout/Logo";
import MobileMenu from "@/components/layout/MobileMenu";
import SearchButton from "@/components/layout/SearchButton";
import { headerBookingLabel } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import { demoDropdowns, demoNav, searchablePosts } from "../demoData";

/**
 * DEMO B · TEMPLE — header.
 * A light, slightly see-through bar with a thin gold line under it, staying at the top.
 */
export default function TempleHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-paper/90 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-3 xl:h-20">
        <Logo className="h-7 sm:h-8 xl:h-9" />
        <DesktopNav items={demoNav} dropdowns={demoDropdowns} />
        <div className="flex items-center gap-1 sm:gap-2">
          <SearchButton posts={searchablePosts} />
          <div className="hidden xl:block">
            <BookButton label={headerBookingLabel} />
          </div>
          <a
            href={whatsappLink({ source: "Header" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-full bg-gold-deep text-paper transition-colors hover:bg-ink xl:hidden"
          >
            <WhatsAppIcon className="size-5" />
            <span className="sr-only">Contact Spa Bali Moon on WhatsApp (opens in a new tab)</span>
          </a>
          <MobileMenu
            items={demoNav}
            dropdowns={demoDropdowns}
            bookButton={<BookButton label={headerBookingLabel} size="lg" className="w-full" />}
          />
        </div>
      </Container>
    </header>
  );
}
