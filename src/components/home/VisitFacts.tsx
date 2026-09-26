import { Clock, House, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { whatsappLink } from "@/lib/whatsapp";
import FactsCard, { type Fact } from "./FactsCard";
import { line, SOURCE } from "./shared";

/**
 * The practical facts (hours, address, home service fee, phone) on a white card that overlaps
 * the hero above it, using the live footer's labels. Used under the homepage and pricelist heroes.
 * Texts: src/data/business.ts, src/data/footer.ts.
 */

const ClockIcon = line(Clock);
const PinIcon = line(MapPin);
const HouseIcon = line(House);

export default function VisitFacts({ source = SOURCE }: { source?: string }) {
  const { contact, daySpa, homeServices } = footerContent;

  const facts: Fact[] = [
    { icon: ClockIcon, label: daySpa.openDailyLabel, value: business.openingHours.display },
    { icon: PinIcon, label: daySpa.addressLabel, value: business.address.short, href: business.mapsUrl, note: " (opens Google Maps in a new tab)" },
    { icon: HouseIcon, label: homeServices.feeLabel, value: business.homeService.feeDisplay },
    { icon: WhatsAppIcon, label: contact.phoneLabel, value: business.phoneDisplay, href: whatsappLink({ source }), note: " (WhatsApp, opens in a new tab)" },
  ];

  return <FactsCard facts={facts} />;
}
