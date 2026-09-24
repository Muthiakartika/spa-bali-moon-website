import { whatsappLink } from "@/lib/whatsapp";
import { ButtonLink } from "./Button";
import WhatsAppIcon from "./WhatsAppIcon";

type BookButtonProps = {
  /** Button text, e.g. "Book Now", "Reserve", "Book an Appointment" (kept from the old site). */
  label?: string;
  /** Treatment to name in the WhatsApp message, e.g. "Balinese Massage". */
  treatment?: string;
  /** Package to name in the WhatsApp message, e.g. "Hot Stone Package A". */
  packageName?: string;
  /** Which page/section the click came from (added to the message). */
  source?: string;
  variant?: "primary" | "secondary" | "light" | "text";
  size?: "md" | "lg";
  className?: string;
};

/**
 * The booking button. It always opens WhatsApp through src/lib/whatsapp.ts,
 * so the phone number and message format live in one place.
 */
export default function BookButton({
  label = "Book Now",
  treatment,
  packageName,
  source,
  variant = "primary",
  size = "md",
  className = "",
}: BookButtonProps) {
  const subject = treatment ?? packageName;
  return (
    <ButtonLink
      href={whatsappLink({ treatment, packageName, source })}
      variant={variant}
      size={size}
      className={className}
      external
      aria-label={subject ? `${label}: ${subject} on WhatsApp (opens in a new tab)` : `${label} on WhatsApp (opens in a new tab)`}
    >
      <WhatsAppIcon />
      <span>{label}</span>
    </ButtonLink>
  );
}
