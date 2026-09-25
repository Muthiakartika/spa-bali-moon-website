import { ArrowRight } from "lucide-react";
import Link from "next/link";
import PackageCards from "@/components/treatments/PackageCards";
import Container from "@/components/ui/Container";
import { Ornament } from "@/components/ui/Ornament";
import SiteImage from "@/components/ui/SiteImage";
import { getPackageGroup } from "@/data/packages";
import { homePage } from "@/data/pages/home";
import { noteClass, pillLink, SOURCE, titleClass } from "./shared";

/**
 * "More to Enjoy" + "Spa Packages" ("Taman" design), on warm cream:
 * the "More to Enjoy" text between the two hero photos (an arch and a circle; on phones the photos
 * sit side by side under the text), then the packages with a small icon in front of every treatment.
 * Texts: src/data/pages/home.ts → moreToEnjoy, packages. Packages: src/data/packages.ts.
 */
export default function SpaPackages() {
  const { hero, moreToEnjoy, packages } = homePage;

  return (
    <section id="packages" aria-labelledby="packages-heading" className="relative overflow-hidden bg-cream py-section">
      <Container>
        <div className="grid grid-cols-2 items-center gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-10">
          {hero.images[0] && (
            <div data-motion="photo" className="arch relative order-2 aspect-[3/4] overflow-hidden lg:order-none lg:col-span-3">
              <SiteImage image={hero.images[0]} fill sizes="(min-width: 1024px) 22vw, 45vw" />
            </div>
          )}
          <div className="order-1 col-span-2 mb-6 flex flex-col items-center text-center lg:order-none lg:col-span-6 lg:mb-0">
            <Ornament />
            <p className={`mt-5 ${noteClass}`}>{moreToEnjoy.eyebrow}</p>
            <h2 id="more-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
              {moreToEnjoy.heading}
            </h2>
            <div className="mt-6 space-y-4 text-body leading-[1.75] text-stone">
              {moreToEnjoy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          {hero.images[1] && (
            <div data-motion="photo" className="relative order-3 aspect-square overflow-hidden rounded-full lg:order-none lg:col-span-3">
              <SiteImage image={hero.images[1]} fill sizes="(min-width: 1024px) 22vw, 45vw" />
            </div>
          )}
        </div>

        <div className="mt-section grid gap-6 border-t border-gold/25 pt-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className={noteClass}>{packages.eyebrow}</p>
            <h2 id="packages-heading" data-motion="rise" className={`mt-2 ${titleClass}`}>
              {packages.heading}
            </h2>
            <p className="mt-5 max-w-[64ch] text-body leading-[1.75] text-stone">{packages.text}</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link href="/seminyak/#packages" className={pillLink}>
              {packages.button.label}
              <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
        <div className="mt-10">
          <PackageCards group={getPackageGroup(packages.packageGroup)} buttonLabel={packages.cardButtonLabel} source={SOURCE} withIcons />
        </div>
      </Container>
    </section>
  );
}
