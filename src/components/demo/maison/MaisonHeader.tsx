import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import BookButton from "@/components/ui/BookButton";
import Logo from "@/components/layout/Logo";
import SearchButton from "@/components/layout/SearchButton";
import { business } from "@/data/business";
import { headerBookingLabel } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import { demoDropdowns, demoNav, searchablePosts } from "../demoData";
import FullscreenMenu from "./FullscreenMenu";

/**
 * DEMO A · MAISON — header.
 * Quiet and minimal on white: "Menu" (opens the full-screen menu) on the left,
 * the logo in the centre, search and a booking link on the right. Stays at the top.
 */
export default function MaisonHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 text-ink backdrop-blur-md">
      <Container className="grid h-18 grid-cols-[1fr_auto_1fr] items-center gap-3 xl:h-20">
        <div>
          <FullscreenMenu
            items={demoNav}
            dropdowns={demoDropdowns}
            triggerClassName="hover:bg-linen"
            footer={
              <div className="flex flex-wrap items-center justify-between gap-4 text-small text-stone">
                <BookButton label={headerBookingLabel} size="lg" />
                <p>
                  {business.openingHours.label}: {business.openingHours.display} · {business.address.short}
                </p>
              </div>
            }
          />
        </div>
        <Logo className="h-8 sm:h-9" />
        <div className="flex items-center justify-end gap-1 sm:gap-3">
          <SearchButton posts={searchablePosts} />
          <a
            href={whatsappLink({ source: "Header" })}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 items-center gap-2 border-b border-ink/40 text-[0.9375rem] transition-colors hover:border-ink md:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            {headerBookingLabel}
            <span className="sr-only"> on WhatsApp (opens in a new tab)</span>
          </a>
        </div>
      </Container>
    </header>
  );
}
