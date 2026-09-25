import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import Logo from "@/components/layout/Logo";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { business } from "@/data/business";
import { footerContent } from "@/data/footer";
import { FooterBottomLine, FooterColumns, FooterPayments } from "../FooterInfo";

/**
 * DEMO A · MAISON — footer.
 * Linen, typographic: the newsletter heading set large in light serif, the information in
 * three quiet columns, thin rules, no boxes.
 */
export default function MaisonFooter() {
  const { newsletter } = footerContent;
  return (
    <footer className="bg-linen text-ink">
      <Container className="grid gap-12 py-section lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <h2 className="font-display text-[clamp(2.4rem,1.6rem+3vw,4.5rem)] font-light leading-[1]">{newsletter.heading}</h2>
          <p className="mt-4 max-w-[40ch] text-body text-stone">{newsletter.note}</p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
          <NewsletterForm tone="light" />
        </div>
      </Container>
      <Container>
        <div className="grid gap-12 border-t border-ink/15 py-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Logo variant="footer" className="h-11" />
            <p className="mt-5 max-w-[40ch] text-small leading-relaxed text-stone">{business.aboutText}</p>
            <div className="mt-5 flex gap-4 text-small">
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border-b border-ink/30 hover:border-ink">
                <InstagramIcon />
                Instagram
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 border-b border-ink/30 hover:border-ink">
                <FacebookIcon />
                Facebook
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FooterColumns tone="light" />
            <FooterPayments tone="light" className="mt-10" />
          </div>
        </div>
        <div className="border-t border-ink/15 py-5">
          <FooterBottomLine tone="light" />
        </div>
      </Container>
    </footer>
  );
}
