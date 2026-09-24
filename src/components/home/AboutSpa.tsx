import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import SiteImage from "@/components/ui/SiteImage";
import { homePage } from "@/data/pages/home";

/**
 * "Why Spa Bali Moon Is Part of the Bali Experience" — the About section.
 * The menu item "About" links here (/#about).
 */
export default function AboutSpa() {
  const { about } = homePage;
  const [photoA, photoB] = about.images;
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="relative lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            {photoA && (
              <div className="arch relative aspect-[360/636] overflow-hidden">
                <SiteImage image={photoA} fill sizes="(min-width: 1024px) 24vw, 46vw" />
              </div>
            )}
            {photoB && (
              <div className="relative mt-20 aspect-[237/421] overflow-hidden rounded-card">
                <SiteImage image={photoB} fill sizes="(min-width: 1024px) 24vw, 46vw" />
              </div>
            )}
          </div>
          {/* Brand badge from the old About section */}
          <div className="absolute -bottom-8 left-4 flex max-w-[20rem] items-center gap-4 rounded-card bg-brown-deep p-5 text-ivory shadow-[var(--shadow-lift)] sm:left-8">
            <Image src="/images/branding/sbm.webp" alt="" width={56} height={44} className="h-11 w-auto shrink-0" />
            <div>
              <p className="font-serif text-[1.35rem] leading-tight">{about.badge.name}</p>
              <p className="label-caps text-ivory/90">{about.badge.line}</p>
              <p className="mt-1 text-[0.8125rem] leading-snug text-ivory">{about.badge.text}</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 lg:pt-8">
          <SectionHeading id="about-heading" title={about.heading} note={about.eyebrow} intro={[about.text]} layout="stacked" />
          <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {about.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.6em] size-2 shrink-0 rounded-full bg-sage" />
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
      </div>
    </Section>
  );
}
