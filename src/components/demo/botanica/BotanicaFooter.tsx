import Container from "@/components/ui/Container";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import Logo from "@/components/layout/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { FooterBottomLine, FooterColumns, FooterPayments } from "../FooterInfo";

/**
 * DEMO C · BOTANICA — footer.
 * Warm cream with rounded top corners and palm fronds; the newsletter heading in large italic,
 * then the information columns.
 */
export default function BotanicaFooter() {
  const { newsletter } = footerContent;
  return (
    <footer className="relative overflow-hidden rounded-t-[2.5rem] bg-cream text-ink sm:rounded-t-[4rem]">
      <TropicalLeaf className="absolute -left-16 -top-8 w-72 text-gold/25 sm:w-96" />
      <TropicalLeaf className="absolute -bottom-16 -right-16 w-72 -scale-x-100 text-gold/20 sm:w-96" />
      <Container className="relative grid gap-12 py-section lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2 className="font-display text-[clamp(2.4rem,1.6rem+3vw,4.5rem)] italic leading-[1]">{newsletter.heading}</h2>
          <p className="mt-4 max-w-[40ch] text-body text-stone">{newsletter.note}</p>
          <div className="mt-8 max-w-[30rem]">
            <NewsletterForm tone="light" />
          </div>
        </div>
        <div className="lg:col-span-6">
          <Logo variant="footer" className="h-11" />
          <p className="mt-5 max-w-[46ch] text-small leading-relaxed text-stone">{business.aboutText}</p>
          <FooterColumns tone="light" className="mt-10" />
          <FooterPayments tone="light" className="mt-10" />
        </div>
      </Container>
      <div className="relative border-t border-ink/10">
        <Container className="py-5">
          <FooterBottomLine tone="light" />
        </Container>
      </div>
    </footer>
  );
}
