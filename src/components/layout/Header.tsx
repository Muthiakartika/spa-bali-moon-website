import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import { business } from "@/data/business";
import { headerBookingLabel, mainNav, treatmentMenu, treatmentMenuLinks } from "@/data/navigation";
import DesktopNav from "./DesktopNav";
import HeaderShell from "./HeaderShell";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

/**
 * Site header: logo, main menu, booking button.
 * Menu items are edited in src/data/navigation.ts.
 */
export default function Header() {
  return (
    <HeaderShell>
      <Container className="flex h-17 items-center justify-between gap-3 lg:h-20">
        <Logo className="h-6 min-[400px]:h-7 sm:h-8 lg:h-9" />

        <DesktopNav items={mainNav} treatmentMenu={treatmentMenu} treatmentLinks={treatmentMenuLinks} />

        <div className="flex items-center gap-1 sm:gap-2">
          {/* Desktop: full booking button */}
          <div className="hidden lg:block">
            <BookButton label={headerBookingLabel} />
          </div>
          {/* Phones/tablets: shorter booking button */}
          <div className="lg:hidden">
            <BookButton label="Book Now" className="px-3 sm:px-3.5 max-[359px]:[&>svg]:hidden" />
          </div>
          <MobileMenu
            items={mainNav}
            treatmentMenu={treatmentMenu}
            treatmentLinks={treatmentMenuLinks}
            bookButton={<BookButton label={headerBookingLabel} size="lg" className="w-full" />}
            hours={`${business.openingHours.label}: ${business.openingHours.display}`}
            address={business.address.short}
            mapsUrl={business.mapsUrl}
          />
        </div>
      </Container>
    </HeaderShell>
  );
}
