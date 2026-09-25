import { HandHeart, House, Sparkles } from "lucide-react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import SiteImage from "@/components/ui/SiteImage";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { homePage } from "@/data/pages/home";
import type { SiteImage as SiteImageData } from "@/data/types";
import { line, noteClass, titleClass, type LineIcon } from "./shared";

/**
 * "What Makes Spa Bali Moon Different" ("Taman" design): four arched photos, each with a small
 * round icon and its reason (the whole card links to the page named in src/data/pages/home.ts → whyUs).
 */

// One existing site photo and one icon per reason, in the same order as whyUs.items.
const photos: SiteImageData[] = [
  { src: "/images/packages/cards/couplemassagepackage.webp", alt: "", width: 630, height: 580 },
  { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp", alt: "", width: 1920, height: 898 },
  { src: "/images/treatments/body-scrub/bodyscrub-11.webp", alt: "", width: 895, height: 682 },
  { src: "/images/gallery/home-service/outcall-5.webp", alt: "", width: 1920, height: 898 },
];
const icons: LineIcon[] = [line(HandHeart), line(House), line(Sparkles), WhatsAppIcon];

export default function WhySpaBaliMoon() {
  const { whyUs } = homePage;

  return (
    <section aria-labelledby="why-heading" className="bg-linen py-section">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Ornament />
          <p className={`mt-5 ${noteClass}`}>{whyUs.eyebrow}</p>
          <h2 id="why-heading" data-motion="rise" className={`mt-2 max-w-[20ch] ${titleClass}`}>
            {whyUs.heading}
          </h2>
        </div>
        <ul className="mt-14 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {whyUs.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <li key={item.title} data-motion="rise" className="group relative flex flex-col items-center text-center">
                <div className="arch relative aspect-[3/4] w-full max-w-[18rem] overflow-hidden">
                  <SiteImage
                    image={photos[i % photos.length]}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="transition-transform duration-(--duration-drift) ease-(--ease-calm) group-hover:scale-[1.05]"
                  />
                </div>
                <span className="relative z-10 -mt-6 inline-flex size-12 items-center justify-center rounded-full border-4 border-linen bg-paper text-gold-deep sm:-mt-7 sm:size-14">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-3 font-display text-[1.2rem] italic leading-tight sm:text-[1.6rem]">
                  <Link href={item.href} className="after:absolute after:inset-0 group-hover:text-gold-deep">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 max-w-[30ch] text-[0.8125rem] leading-relaxed text-stone sm:text-small">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
