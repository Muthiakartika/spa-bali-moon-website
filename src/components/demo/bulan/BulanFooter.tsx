import Container from "@/components/ui/Container";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import Logo from "@/components/layout/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { FooterBottomLine, FooterColumns, FooterPayments } from "@/components/layout/FooterInfo";
import { Ornament } from "@/components/ui/Ornament";

/**
 * DEMO F · BULAN — footer.
 * The live site's five columns (logo and text · Contact Us · Our Day Spa · Home Services · newsletter and payments),
 * with serif column headings, on Taman's warm cream with rounded top corners and palm fronds.
 */
export default function BulanFooter() {
  const { newsletter } = footerContent;
  return (
    <footer className="bulan-footer relative overflow-hidden rounded-t-[2.5rem] bg-cream text-ink sm:rounded-t-[4rem]">
      <TropicalLeaf className="absolute -left-16 -top-8 w-72 text-gold/20 sm:w-96" />
      <TropicalLeaf className="absolute -bottom-16 -right-16 w-72 -scale-x-100 text-gold/15 sm:w-96" />
      <Container className="relative grid gap-12 pb-12 pt-16 lg:grid-cols-12 lg:gap-10 lg:pt-20">
        <div className="lg:col-span-3">
          <Logo variant="footer" className="h-11" />
          <p className="mt-5 max-w-[40ch] text-small leading-relaxed text-stone">{business.aboutText}</p>
          <Ornament className="mt-6" />
        </div>
        <FooterColumns tone="light" className="lg:col-span-6" />
        <div className="lg:col-span-3">
          <h2>{newsletter.heading}</h2>
          <div className="mt-4">
            <NewsletterForm tone="light" />
          </div>
          <p className="mt-3 text-small text-stone">{newsletter.note}</p>
          <FooterPayments tone="light" className="mt-8" />
        </div>
      </Container>
      <div className="relative border-t border-gold/25">
        <Container className="flex justify-center py-5">
          <FooterBottomLine tone="light" className="justify-center" />
        </Container>
      </div>
    </footer>
  );
}
