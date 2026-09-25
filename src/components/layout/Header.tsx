import { Clock, MapPin } from "lucide-react";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { blogPosts } from "@/data/blog";
import { business } from "@/data/business";
import { blogMenu, headerBookingLabel, mainNav, treatmentMenu } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import DesktopNav from "./DesktopNav";
import HeaderShell from "./HeaderShell";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchButton from "./SearchButton";

/**
 * Site header ("Taman" design), the same items as the live website:
 *   1. a thin white information bar: opening hours, address (Google Maps) and phone (WhatsApp)
 *      — the address is hidden on phones; this bar scrolls away with the page;
 *   2. the soft cream bar that stays at the top: logo · Home · Pricelist · Treatments ▾ · Outcall ·
 *      Reservation · Blog ▾ · Contact · search · Book an Appointment.
 *      On phones/tablets: logo · search · WhatsApp button · menu button.
 * Menu items are edited in src/data/navigation.ts; hours, address and phone in src/data/business.ts.
 */
export default function Header() {
  const dropdowns = { treatments: treatmentMenu, blog: blogMenu };
  const searchablePosts = blogPosts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    tags: post.tags,
    href: `/guide/${post.slug}/`,
  }));

  return (
    <>
      <div className="border-b border-ink/10 bg-paper text-[0.8125rem] text-stone sm:text-small">
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

      <HeaderShell>
        <Container className="flex h-18 items-center justify-between gap-3 xl:h-20">
          <Logo className="h-7 sm:h-8 xl:h-9" />

          <DesktopNav items={mainNav} dropdowns={dropdowns} />

          <div className="flex items-center gap-1 sm:gap-2">
            <SearchButton posts={searchablePosts} triggerClassName="text-ink hover:bg-paper" />
            {/* Desktop: booking button */}
            <div className="hidden xl:block">
              <BookButton label={headerBookingLabel} className="rounded-full px-5" />
            </div>
            {/* Phones/tablets: WhatsApp icon button, as on the live site */}
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
              items={mainNav}
              dropdowns={dropdowns}
              triggerClassName="text-ink hover:bg-paper"
              bookButton={<BookButton label={headerBookingLabel} size="lg" className="w-full rounded-full" />}
            />
          </div>
        </Container>
      </HeaderShell>
    </>
  );
}
