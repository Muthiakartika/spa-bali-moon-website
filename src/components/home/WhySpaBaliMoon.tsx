import { ArrowRight, Flower2, HandHeart, House, MessageCircle } from "lucide-react";
import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { homePage } from "@/data/pages/home";
import type { SiteImage as SiteImageData } from "@/data/types";

/**
 * "What Makes Spa Bali Moon Different" — the four reasons from the old homepage.
 * Full-width dark band: a tall photo with the heading on the left, and one photo tile
 * per reason on the right (icon, title, text; the whole tile is a link).
 * Texts: src/data/pages/home.ts (whyUs). Photos: existing site photos, chosen per reason.
 */
const headerPhoto: SiteImageData = { src: "/images/treatments/hot-stone-massage/hotstonemassage-12.webp", alt: "", width: 1920, height: 898 };

// One photo and one icon per reason, in the same order as whyUs.items.
const tiles = [
  { icon: HandHeart, photo: { src: "/images/gallery/pricelist/pricelist-5.webp", alt: "", width: 1920, height: 898 } },
  { icon: House, photo: { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp", alt: "", width: 1920, height: 898 } },
  { icon: Flower2, photo: { src: "/images/gallery/home-service/outcall-5.webp", alt: "", width: 1920, height: 898 } },
  { icon: MessageCircle, photo: { src: "/images/treatments/day-spa/dayspa-8.webp", alt: "", width: 1920, height: 898 } },
];

export default function WhySpaBaliMoon() {
  const { whyUs } = homePage;
  return (
    <section aria-labelledby="why-heading" className="bg-ink text-paper">
      <div className="grid lg:grid-cols-12">
        {/* Heading over a tall photo */}
        <div data-motion="photo" className="relative flex min-h-[22rem] items-end overflow-hidden lg:col-span-5 lg:min-h-[44rem]">
          <SiteImage image={headerPhoto} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-[35%_center]" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
          <TropicalLeaf className="absolute -left-10 -top-10 w-56 rotate-[100deg] text-paper/20 sm:w-72" />
          <div className="relative px-gutter pb-10 pt-24 sm:pb-14 lg:pl-[max(var(--spacing-gutter),calc((100vw-var(--container-site))/2+var(--spacing-gutter)))]">
            <h2 id="why-heading" className="max-w-[14ch] text-title text-paper">
              {whyUs.heading}
            </h2>
            <p className="mt-3 text-lead text-linen/85">{whyUs.eyebrow}</p>
            <span aria-hidden="true" className="mt-6 block h-px w-12 bg-gold" />
          </div>
        </div>

        {/* One photo tile per reason */}
        <ul className="grid gap-px bg-ink-line sm:grid-cols-2 lg:col-span-7">
          {whyUs.items.map((item, i) => {
            const tile = tiles[i % tiles.length];
            const Icon = tile.icon;
            return (
              <li key={item.title} data-motion="rise" className="group relative flex min-h-[17rem] items-end overflow-hidden lg:min-h-[22rem]">
                <SiteImage
                  image={tile.photo}
                  fill
                  sizes="(min-width: 1024px) 29vw, (min-width: 640px) 50vw, 100vw"
                  className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.04]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-ink/75 transition-colors duration-(--duration-base) group-hover:bg-ink/65" />
                <div className="relative p-7 sm:p-8">
                  <Icon aria-hidden="true" strokeWidth={1.25} className="size-8 text-gold" />
                  <h3 className="mt-5 text-subtitle text-paper">
                    <Link href={item.href} className="inline-flex items-center gap-2 after:absolute after:inset-0">
                      {item.title}
                      <ArrowRight
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="size-4 text-gold transition-transform duration-(--duration-quick) group-hover:translate-x-1"
                      />
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-[32ch] text-small text-linen/85">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
