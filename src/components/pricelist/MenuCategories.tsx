import { HandHeart, HeartHandshake, Sparkles } from "lucide-react";
import { line, LotusIcon, noteClass, titleClass, type LineIcon } from "@/components/home/shared";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import SiteImage from "@/components/ui/SiteImage";
import { getPackageGroup } from "@/data/packages";
import { pricelistPage } from "@/data/pages/pricelist";
import { getPriceItem } from "@/data/pricelist";
import type { SiteImage as SiteImageData } from "@/data/types";
import { menuAnchor } from "@/lib/board";
import { formatPriceIdr } from "@/lib/format";

/**
 * "Start With What You Need — Which Treatment Are You Looking For Today?" with its text, then the four parts of the menu
 * (Massage · Beauty · For Couples · Spa Packages) as arched photo cards, the same pattern as the
 * homepage's "What Makes Spa Bali Moon Different". Each card shows how many treatments it holds and
 * the lowest price (both worked out from src/data/pricelist.ts and packages.ts), and opens that tab
 * of the price list below (or jumps to the packages).
 */

type Category = { label: string; href: string; count: string; from: number; photo: SiteImageData; icon: LineIcon };

// One existing site photo and one icon per treatment tab (Massage, Beauty, For Couples), in the order of priceList.tabs.
const tabLooks: { photo: SiteImageData; icon: LineIcon }[] = [
  { photo: { src: "/images/treatments/cards/balinesemassage.webp", alt: "", width: 630, height: 580 }, icon: line(HandHeart) },
  { photo: { src: "/images/beauty/cards/balimoongoldfacial.webp", alt: "", width: 630, height: 580 }, icon: line(Sparkles) },
  { photo: { src: "/images/packages/cards/couplemassagepackage.webp", alt: "", width: 630, height: 580 }, icon: line(HeartHandshake) },
];
const packagesPhoto: SiteImageData = { src: "/images/home/homepage-1.webp", alt: "", width: 388, height: 561 };

function lowest(prices: number[]): number {
  return Math.min(...prices);
}

export default function MenuCategories() {
  const { intro, priceList, allPackages } = pricelistPage;

  // One card per treatment tab; the "Couple Massage Packages" tab (packages only) is covered by the "Spa Packages" card.
  const treatmentTabs = priceList.tabs.filter((tab) => tab.itemIds.length > 0);
  const categories: Category[] = treatmentTabs.map((tab, i) => {
    const prices = tab.itemIds.flatMap((id) => getPriceItem(id).options.map((option) => option.price));
    // Items listed inside another row (e.g. Four Hand Warm Candle) are not counted separately.
    const treatments = tab.itemIds.filter((id) => !getPriceItem(id).pricelistParentId).length;
    return {
      label: tab.label,
      href: `#${menuAnchor(tab.label)}`,
      count: `${treatments} treatments`,
      from: lowest(prices),
      ...tabLooks[i % tabLooks.length],
    };
  });

  const groups = allPackages.packageGroups.map(getPackageGroup);
  const packagePrices = groups.flatMap((group) => group.packages.map((pkg) => pkg.price));
  categories.push({
    label: "Spa Packages",
    href: "#packages",
    count: `${groups.length} collections · ${packagePrices.length} packages`,
    from: lowest(packagePrices),
    photo: packagesPhoto,
    icon: LotusIcon,
  });

  return (
    <section aria-labelledby="choose-heading" className="pb-section pt-[calc(var(--spacing-section)*0.8)]">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Ornament />
          <p className={`mt-5 ${noteClass}`}>{intro.eyebrow}</p>
          <h2 id="choose-heading" data-motion="rise" className={`mt-2 max-w-[20ch] ${titleClass}`}>
            {intro.heading}
          </h2>
          <p className="mt-6 max-w-[60ch] text-body leading-[1.75] text-stone">{intro.text}</p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-14 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {categories.map(({ label, href, count, from, photo, icon: Icon }) => (
            <li key={label} data-motion="rise" className="group relative flex flex-col items-center text-center">
              <div className="arch relative aspect-[3/4] w-full max-w-[18rem] overflow-hidden">
                <SiteImage
                  image={photo}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]"
                />
              </div>
              <span className="relative z-10 -mt-6 inline-flex size-12 items-center justify-center rounded-full border-4 border-paper bg-cream text-gold-deep sm:-mt-7 sm:size-14">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-3 font-display text-[1.35rem] italic leading-tight sm:text-[1.75rem]">
                <a href={href} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                  {label}
                </a>
              </h3>
              <p className="mt-1.5 text-[0.8125rem] text-stone sm:text-small">{count}</p>
              <p className="numeric mt-1 text-[0.8125rem] font-semibold text-gold-deep sm:text-small">From {formatPriceIdr(from)}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
