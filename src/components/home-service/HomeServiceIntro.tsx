import { House } from "lucide-react";
import Link from "next/link";
import { line, noteClass, titleClass, type LineIcon } from "@/components/home/shared";
import Container from "@/components/ui/Container";
import SiteImage from "@/components/ui/SiteImage";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { homeServicePage } from "@/data/pages/home-service";

/**
 * "Spa Bali Moon in Seminyak, Bali — Home Service Balinese Massage", in the layout of the homepage's
 * About section: an arched photo with a round photo overlapping its corner, the text, and the two
 * highlights (Easy Booking via WhatsApp · Spa Treatments at Your Place), each with a small icon.
 * Texts and photos: src/data/pages/home-service.ts → intro.
 */

// One icon per highlight, in the same order as intro.highlights.
const icons: LineIcon[] = [WhatsAppIcon, line(House)];

export default function HomeServiceIntro() {
  const { intro } = homeServicePage;
  const [archPhoto, circlePhoto] = intro.images;

  return (
    <section aria-labelledby="intro-heading" className="py-section">
      <Container className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="relative pb-10 lg:col-span-5">
          {archPhoto && (
            <div data-motion="photo" className="arch relative aspect-[4/5] w-[80%] overflow-hidden">
              <SiteImage image={archPhoto} fill sizes="(min-width: 1024px) 32vw, 80vw" />
            </div>
          )}
          {circlePhoto && (
            <div data-motion="photo" className="absolute bottom-0 right-0 aspect-square w-[46%] overflow-hidden rounded-full border-8 border-paper">
              <SiteImage image={circlePhoto} fill sizes="(min-width: 1024px) 18vw, 45vw" />
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <p className={noteClass}>{intro.eyebrow}</p>
          <h2 id="intro-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
            {intro.heading}
          </h2>
          <div className="mt-6 max-w-[60ch] space-y-4 text-body leading-[1.75] text-stone">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {intro.highlights.map((highlight, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={highlight.title} data-motion="rise" className="flex gap-4 rounded-card bg-linen p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-paper text-gold-deep">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[1.3rem] leading-tight">{highlight.title}</h3>
                    <p className="mt-1.5 text-small leading-relaxed text-stone">
                      {"text" in highlight && highlight.text}
                      {"textBefore" in highlight && highlight.textBefore}
                      {"linkHref" in highlight && highlight.linkHref && (
                        <Link href={highlight.linkHref} className="text-ink underline decoration-gold underline-offset-[0.3em] hover:decoration-ink">
                          {highlight.linkLabel}
                        </Link>
                      )}
                      {"textAfter" in highlight && highlight.textAfter}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
