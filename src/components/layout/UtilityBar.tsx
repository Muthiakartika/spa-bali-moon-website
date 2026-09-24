import { Clock, MapPin } from "lucide-react";
import { business } from "@/data/business";
import Container from "@/components/ui/Container";

/**
 * Thin information strip above the header: opening hours, location, in-spa & home service.
 * All values come from src/data/business.ts.
 */
export default function UtilityBar() {
  return (
    <div className="bg-gold-deep text-paper">
      <Container className="flex min-h-9 items-center justify-between gap-6 py-1.5 text-[0.8125rem]">
        <p className="flex items-center gap-2">
          <Clock aria-hidden="true" strokeWidth={1.5} className="size-3.5 text-linen" />
          <span>
            {business.openingHours.label}: {business.openingHours.display}
          </span>
        </p>
        <a
          href={business.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden min-h-7 items-center gap-2 transition-colors duration-(--duration-quick) hover:text-linen md:flex"
        >
          <MapPin aria-hidden="true" strokeWidth={1.5} className="size-3.5 text-linen" />
          <span>{business.address.short}</span>
          <span className="sr-only">(opens Google Maps in a new tab)</span>
        </a>
        <p className="flex items-center gap-2">
          <span>In-Spa &amp; Home Service</span>
        </p>
      </Container>
    </div>
  );
}
