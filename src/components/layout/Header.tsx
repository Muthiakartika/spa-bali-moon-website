import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { blogPosts } from "@/data/blog";
import { blogMenu, headerBookingLabel, mainNav, treatmentMenu } from "@/data/navigation";
import { whatsappLink } from "@/lib/whatsapp";
import DesktopNav from "./DesktopNav";
import HeaderShell from "./HeaderShell";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchButton from "./SearchButton";

/**
 * Site header, the same items as the live website:
 * logo · Home · Pricelist · Treatments ▾ · Outcall · Reservation · Blog ▾ · Contact · search · Book an Appointment.
 * On phones/tablets: logo · search · WhatsApp button · menu button.
 * Menu items are edited in src/data/navigation.ts.
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
    <HeaderShell>
      <Container className="flex h-17 items-center justify-between gap-3 xl:h-20">
        <Logo className="h-7 sm:h-8 xl:h-9" />

        <DesktopNav items={mainNav} dropdowns={dropdowns} />

        <div className="flex items-center gap-1 sm:gap-2">
          <SearchButton posts={searchablePosts} />
          {/* Desktop: booking button */}
          <div className="hidden xl:block">
            <BookButton label={headerBookingLabel} />
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
          <MobileMenu items={mainNav} dropdowns={dropdowns} bookButton={<BookButton label={headerBookingLabel} size="lg" className="w-full" />} />
        </div>
      </Container>
    </HeaderShell>
  );
}
