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
 * DEMO C · BOTANICA — header.
 * Soft cream bar (slightly see-through) with the menu centred and a dark round-edged
 * booking button, staying at the top while scrolling.
 */
export default function BotanicaHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur-md">
      <Container className="flex h-18 items-center justify-between gap-3 xl:h-20">
        <Logo className="h-7 sm:h-8 xl:h-9" />
        <DesktopNav items={demoNav} dropdowns={demoDropdowns} />
        <div className="flex items-center gap-1 sm:gap-2">
          <SearchButton posts={searchablePosts} triggerClassName="text-ink hover:bg-paper" />
          <div className="hidden xl:block">
            <BookButton label={headerBookingLabel} className="rounded-full !bg-ink hover:!bg-gold-deep" />
          </div>
          <a
            href={whatsappLink({ source: "Header" })}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-11 items-center justify-center rounded-full bg-ink text-paper transition-colors hover:bg-gold-deep xl:hidden"
          >
            <WhatsAppIcon className="size-5" />
            <span className="sr-only">Contact Spa Bali Moon on WhatsApp (opens in a new tab)</span>
          </a>
          <MobileMenu items={demoNav} dropdowns={demoDropdowns} triggerClassName="text-ink hover:bg-paper" bookButton={<BookButton label={headerBookingLabel} size="lg" className="w-full" />} />
        </div>
      </Container>
    </header>
  );
}
