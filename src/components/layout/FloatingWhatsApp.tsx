import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { whatsappLink } from "@/lib/whatsapp";

/** The round WhatsApp button that stays in the bottom-right corner on every page (as on the old site). */
export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={
        "fixed bottom-4 right-4 z-30 inline-flex size-14 items-center justify-center rounded-full bg-brown-deep text-ivory " +
        "shadow-[0_14px_28px_-12px_rgb(42_46_38/0.6)] outline-offset-4 transition-[transform,background-color] " +
        "duration-(--duration-quick) ease-out-expo hover:-translate-y-0.5 hover:bg-olive sm:bottom-6 sm:right-6"
      }
    >
      <WhatsAppIcon className="size-7" />
      <span className="sr-only">Chat with Spa Bali Moon on WhatsApp (opens in a new tab)</span>
    </a>
  );
}
