import { Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import Logo from "@/components/layout/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { FooterBottomLine, FooterColumns, FooterPayments } from "../FooterInfo";
import { Ornament } from "../tirta/Ornament";

/**
 * DEMO E · TAMAN — footer.
 * Botanica's warm cream with rounded top corners and palm fronds, holding Tirta's calm layout:
 * the newsletter as one row on top, then the logo with the live footer text, payments and the live columns.
 */
export default function TamanFooter() {
  const { newsletter } = footerContent;
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-cream text-ink sm:rounded-t-[4rem]">
      <TropicalLeaf className="absolute -left-16 -top-8 w-72 text-gold/20 sm:w-96" />
      <TropicalLeaf className="absolute -bottom-16 -right-16 w-72 -scale-x-100 text-gold/15 sm:w-96" />
      <Container className="relative">
        <div className="grid gap-8 border-b border-gold/25 pb-12 pt-16 lg:grid-cols-12 lg:items-center">
          <div className="flex items-start gap-5 lg:col-span-6">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-paper text-gold-deep">
              <Mail aria-hidden="true" strokeWidth={1.5} className="size-6" />
            </span>
            <div>
              <h2 className="font-display text-[clamp(1.9rem,1.5rem+1.4vw,2.75rem)] italic leading-[1.05]">{newsletter.heading}</h2>
              <p className="mt-2 text-small text-stone">{newsletter.note}</p>
            </div>
          </div>
          <div className="w-full max-w-[32rem] lg:col-span-6 lg:justify-self-end">
            <NewsletterForm tone="light" />
          </div>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Logo variant="footer" className="h-11" />
            <p className="mt-5 max-w-[42ch] text-small leading-relaxed text-stone">{business.aboutText}</p>
            <Ornament className="mt-6" />
            <FooterPayments tone="light" className="mt-6" />
          </div>
          <FooterColumns tone="light" className="lg:col-span-8" />
        </div>
      </Container>
      <div className="relative border-t border-gold/25">
        <Container className="py-5">
          <FooterBottomLine tone="light" />
        </Container>
      </div>
    </footer>
  );
}
