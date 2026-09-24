import { Check } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { homePage } from "@/data/pages/home";

/**
 * "Why Spa Bali Moon Is Part of the Bali Experience" — the About section.
 * The menu item "About" links here (/#about).
 * Layout: text on the left; on the right a large photo with a smaller one overlapping
 * its lower-left corner. A faint palm frond sits in the bottom-left corner.
 */
export default function AboutSpa() {
  const { about } = homePage;
  const [photoA, photoB] = about.images;
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden bg-paper py-section">
      <TropicalLeaf className="absolute -bottom-16 -left-16 w-72 text-gold/25 sm:w-96" />

      <Container className="relative grid gap-16 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="about-heading" title={about.heading} note={about.eyebrow} intro={[about.text]} />
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {about.items.map((item) => (
              <li key={item} className="flex gap-3">
                <Check aria-hidden="true" strokeWidth={1.75} className="mt-1 size-4 shrink-0 text-gold-deep" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ButtonLink href={about.button.href} variant="secondary">
              {about.button.label}
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative pb-10 sm:pb-14">
            {photoA && (
              <div data-motion="photo" className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-board sm:aspect-[5/5]">
                <SiteImage image={photoA} fill sizes="(min-width: 1024px) 45vw, 82vw" />
              </div>
            )}
            {photoB && (
              <div
                data-motion="photo"
                className="absolute bottom-0 left-0 aspect-[3/4] w-[42%] overflow-hidden rounded-card border-[6px] border-paper shadow-(--shadow-board) sm:border-8"
              >
                <SiteImage image={photoB} fill sizes="(min-width: 1024px) 24vw, 42vw" />
              </div>
            )}
          </div>
          {/* Brand note from the old About section */}
          <div className="mt-8 flex max-w-[26rem] items-center gap-4 border-t border-line pt-5 lg:ml-auto">
            <Image src="/images/branding/sbm.webp" alt="" width={56} height={44} className="h-10 w-auto shrink-0" />
            <div>
              <p className="font-display text-[1.0625rem] font-semibold leading-tight">
                {about.badge.name} <span className="font-sans font-normal text-stone">{about.badge.line}</span>
              </p>
              <p className="mt-1 text-small text-stone">{about.badge.text}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
