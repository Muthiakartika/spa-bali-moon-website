import BookButton from "@/components/ui/BookButton";
import { ButtonLink } from "@/components/ui/Button";
import Price from "@/components/ui/Price";
import type { PackageGroup } from "@/data/types";
import { treatmentIcon } from "./treatmentIcon";

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
  gridClassName = "sm:grid-cols-2 xl:grid-cols-4",
  withIcons = false,
}: {
  group: PackageGroup;
  priceOverrides?: Record<string, number>;
  buttonLabel?: string;
  /** When set, the button links here instead of WhatsApp (the old Pricelist page linked to /contact/). */
  buttonHref?: string;
  source?: string;
  headingLevel?: "h3" | "h4";
  /** Column classes for the grid of cards (default: 2 columns, 4 on large screens). */
  gridClassName?: string;
  /** Show a small icon in front of every treatment in the package (e.g. a leaf for Body Scrub). */
  withIcons?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <ul className={`grid gap-4 ${gridClassName}`}>
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
            <ul className={`mt-6 flex-1 rounded-cell bg-linen p-4 ${withIcons ? "space-y-2" : "space-y-2.5"}`}>
              {pkg.items.map((item) => {
                const Icon = treatmentIcon(item.treatment);
                return withIcons ? (
                  <li key={`${item.duration}-${item.treatment}`} className="grid grid-cols-[2rem_4rem_1fr] items-center gap-3 text-small">
                    <span className="inline-flex size-8 items-center justify-center rounded-full bg-paper text-gold-deep">
                      <Icon aria-hidden="true" strokeWidth={1.5} className="size-4" />
                    </span>
                    <span className="numeric text-stone">{item.duration}</span>
                    <span className="text-ink">{item.treatment}</span>
                  </li>
                ) : (
                  <li key={`${item.duration}-${item.treatment}`} className="grid grid-cols-[4.5rem_1fr] gap-3 text-small">
                    <span className="numeric text-stone">{item.duration}</span>
                    <span className="text-ink">{item.treatment}</span>
                  </li>
                );
              })}
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
