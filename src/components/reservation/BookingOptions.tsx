import { Clock, HandHeart, House, Package, Sparkles } from "lucide-react";
import { line, LotusIcon, noteClass, titleClass, type LineIcon } from "@/components/home/shared";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { reservationPage } from "@/data/pages/reservation";
import type { SiteImage as SiteImageData } from "@/data/types";
import { SOURCE } from "./shared";

/**
 * The two ways to book, each as its own section (as the package collections on the Pricelist page):
 * an arched photo with a round icon badge (left, then right), the title, its line in gold italic,
 * the four points with a small icon each, and a booking button that names the choice on WhatsApp.
 * Backgrounds: white, then linen. Texts: src/data/pages/reservation.ts → options.
 */

// One photo, badge icon and set of point icons per way to book, in the same order as options.
const looks: { photo: SiteImageData; focus: string; badge: LineIcon; icons: LineIcon[] }[] = [
  {
    photo: { src: "/images/gallery/villa-hotel-massage/massagehotelvilla-8.webp", alt: "", width: 1920, height: 898 },
    focus: "38% center",
    badge: line(House),
    icons: [line(Package), line(Sparkles), line(Clock), WhatsAppIcon],
  },
  {
    photo: { src: "/images/treatments/day-spa/dayspa-8.webp", alt: "", width: 1920, height: 898 },
    focus: "50% center",
    badge: LotusIcon,
    icons: [line(Clock), LotusIcon, line(HandHeart), WhatsAppIcon],
  },
];

export default function BookingOptions() {
  const { options, buttonLabel } = reservationPage;

  return (
    <>
      {options.map((option, i) => {
        const look = looks[i % looks.length];
        const Badge = look.badge;
        const flip = i % 2 === 1;
        const tone = flip ? "bg-linen" : "";
        const ring = flip ? "border-linen" : "border-paper";
        return (
          <section key={option.title} aria-labelledby={`option-${i}`} className={`py-section ${tone}`}>
            <Container className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className={`relative mx-auto w-full max-w-[20rem] pb-8 sm:max-w-[24rem] lg:col-span-5 lg:max-w-[28rem] ${flip ? "lg:order-last" : ""}`}>
                <div data-motion="photo" className="arch relative aspect-[4/5] overflow-hidden">
                  <SiteImage image={look.photo} fill sizes="(min-width: 1024px) 34vw, 384px" focus={look.focus} />
                </div>
                <span className={`absolute bottom-0 left-1/2 inline-flex size-16 -translate-x-1/2 items-center justify-center rounded-full border-4 bg-cream text-gold-deep ${ring}`}>
                  <Badge className="size-6" />
                </span>
              </div>

              <div className="lg:col-span-7">
                <h3 id={`option-${i}`} data-motion="rise" className={`max-w-[18ch] ${titleClass}`}>
                  {option.title}
                </h3>
                <p className={`mt-3 ${noteClass}`}>{option.text}</p>
                <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                  {option.items.map((item, k) => {
                    const Icon = look.icons[k % look.icons.length];
                    return (
                      <li key={item.title} data-motion="rise" className="flex gap-4">
                        <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-full text-gold-deep ${flip ? "bg-paper" : "bg-cream"}`}>
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <h4 className="font-display text-[1.3rem] leading-tight">{item.title}</h4>
                          <p className="mt-1.5 text-small leading-relaxed text-stone">{item.text}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-10">
                  <BookButton label={buttonLabel} treatment={option.title} size="lg" source={SOURCE} className="rounded-full px-7" />
                </div>
              </div>
            </Container>
          </section>
        );
      })}
    </>
  );
}
