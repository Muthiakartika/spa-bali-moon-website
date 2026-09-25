import Container from "@/components/ui/Container";
import FooterSkyline from "@/components/layout/FooterSkyline";
import Logo from "@/components/layout/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { FooterBottomLine, FooterColumns, FooterPayments } from "../FooterInfo";

/**
 * DEMO B · TEMPLE — footer.
 * Light cream, with cream frangipani trees (white flowers, gold centres) rising above it.
 * Newsletter centred under the logo in carved capitals, then the information columns.
 */
export default function TempleFooter() {
  const { newsletter } = footerContent;
  return (
    <footer className="relative mt-[max(6rem,12.5vw)] bg-cream text-ink">
      <div className="absolute inset-x-0 bottom-[calc(100%-1px)]">
        <FooterSkyline className="h-[max(6rem,12.5vw)]" fillClassName="fill-cream" flowerClassName="fill-paper" centreClassName="fill-gold" />
      </div>
      <Container className="flex flex-col items-center pb-14 pt-8 text-center">
        <Logo variant="footer" className="h-12" />
        <p className="mt-5 max-w-[52ch] text-body text-stone">{business.aboutText}</p>
        <h2 className="mt-12 font-display text-[clamp(1.6rem,1.3rem+1vw,2.25rem)] uppercase tracking-[0.06em]">{newsletter.heading}</h2>
        <p className="mt-2 text-small text-stone">{newsletter.note}</p>
        <div className="mt-6 w-full max-w-[30rem] text-left">
          <NewsletterForm tone="light" />
        </div>
        <FooterColumns tone="light" className="mt-14 w-full max-w-[60rem] border-t border-gold/30 pt-12 text-left" />
        <FooterPayments tone="light" className="mt-10 flex flex-col items-center" />
      </Container>
      <div className="border-t border-gold/30">
        <Container className="flex justify-center py-5">
          <FooterBottomLine tone="light" className="justify-center" />
        </Container>
      </div>
    </footer>
  );
}
