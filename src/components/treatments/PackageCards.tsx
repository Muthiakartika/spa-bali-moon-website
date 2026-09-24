import BookButton from "@/components/ui/BookButton";
import { ButtonLink } from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import type { PackageGroup } from "@/data/types";

/**
 * A row of spa package cards (Package A–D) from src/data/packages.ts.
 * `priceOverrides` is only used where the old site showed a different price on one page.
 */
export default function PackageCards({
  group,
  priceOverrides,
  buttonLabel = "Book Now",
  buttonHref,
  source,
  headingLevel = "h3",
}: {
  group: PackageGroup;
  priceOverrides?: Record<string, number>;
  buttonLabel?: string;
  /** When set, the button links here instead of WhatsApp (the old Pricelist page linked to /contact/). */
  buttonHref?: string;
  source?: string;
  headingLevel?: "h3" | "h4";
}) {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {group.packages.map((pkg) => {
        const price = priceOverrides?.[pkg.name] ?? pkg.price;
        const fullName = `${group.title} ${pkg.name}`;
        return (
          <li key={pkg.name} data-motion="rise" className="flex flex-col rounded-card border border-line bg-paper p-6">
            <Heading className="meta-label text-gold-deep">
              {group.title} <span aria-hidden="true">/</span> {pkg.name}
            </Heading>
            <p className="mt-4 font-display text-[2.25rem] font-semibold leading-none tracking-[-0.025em] text-gold-deep">
              <Price value={price} />
              {pkg.pax && <span className="ml-2 font-sans text-small text-stone">{pkg.pax} pax</span>}
            </p>
            <ul className="mt-6 flex-1 space-y-2.5 rounded-cell bg-linen p-4">
              {pkg.items.map((item) => (
                <li key={`${item.duration}-${item.treatment}`} className="grid grid-cols-[4.5rem_1fr] gap-3 text-small">
                  <span className="numeric text-stone">{item.duration}</span>
                  <span className="text-ink">{item.treatment}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              {buttonHref ? (
                <ButtonLink href={buttonHref} variant="secondary" className="w-full" aria-label={`${buttonLabel}: ${fullName}`}>
                  {buttonLabel}
                </ButtonLink>
              ) : (
                <BookButton label={buttonLabel} packageName={fullName} source={source} variant="secondary" className="w-full" />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
