import { ButtonLink } from "@/components/ui/Button";
import BookButton from "@/components/ui/BookButton";
import Section from "@/components/ui/Section";

/**
 * 404 page — shown for any address that does not exist.
 * A soft Taupe moon holding the number 404.
 */
export default function NotFound() {
  return (
    <Section labelledBy="not-found-title">
      <div className="mx-auto max-w-[44rem] text-center">
        <div aria-hidden="true" className="mx-auto flex size-40 items-center justify-center rounded-full bg-taupe/50 ring-[14px] ring-sage-mist">
          <span className="numeric font-serif text-[3.5rem] leading-none text-olive">404</span>
        </div>
        <h1 id="not-found-title" className="mt-10 text-display">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-[46ch] text-lead text-brown-ink">
          This page may have moved. Our treatments, prices and booking are one tap away.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/seminyak/" size="lg">
            Explore Treatments
          </ButtonLink>
          <BookButton label="Book via WhatsApp" variant="secondary" size="lg" />
        </div>
      </div>
    </Section>
  );
}
