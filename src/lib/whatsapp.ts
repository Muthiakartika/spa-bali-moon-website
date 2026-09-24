/**
 * WHATSAPP LINKS — every "Book" / "Reserve" button uses this file.
 *
 * The phone number is NOT written here. It comes from `whatsappNumber`
 * in src/data/business.ts, so you only ever change it in one place.
 *
 * Examples:
 *   whatsappLink()                                     -> opens chat with a general booking message
 *   whatsappLink({ treatment: "Balinese Massage" })    -> "Hi Spa Bali Moon, I'd like to book Balinese Massage."
 *   whatsappLink({ packageName: "Hot Stone Package A" })
 */
import { business } from "@/data/business";

type WhatsAppOptions = {
  /** Treatment the guest wants to book, e.g. "Balinese Massage". */
  treatment?: string;
  /** Package the guest wants to book, e.g. "Couple Massage Package B". */
  packageName?: string;
  /**
   * Which page the button is on, e.g. "Home Service page".
   * Added at the end of the message as "(Website: Home Service page)" so the team
   * knows where the guest came from. Leave it out when it would not help the team.
   */
  source?: string;
};

/**
 * The one message format used by the whole site.
 * TODO FLOW-01: the old site opened WhatsApp without a message; a pre-filled
 * message was requested in the redesign brief. Adjust the wording here if needed.
 */
export function whatsappMessage({ treatment, packageName, source }: WhatsAppOptions = {}): string {
  const lines = ["Hi Spa Bali Moon,"];

  if (treatment) {
    lines.push(`I'd like to book ${treatment}.`);
  } else if (packageName) {
    lines.push(`I'd like to book ${packageName}.`);
  } else {
    lines.push("I'd like to make a booking.");
  }

  if (source) {
    lines.push("", `(Website: ${source})`);
  }

  return lines.join("\n");
}

/** Full wa.me link with the message already filled in. */
export function whatsappLink(options: WhatsAppOptions = {}): string {
  const text = encodeURIComponent(whatsappMessage(options));
  return `https://wa.me/${business.whatsappNumber}?text=${text}`;
}
