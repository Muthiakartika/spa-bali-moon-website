import Link from "next/link";
import type { TextPage } from "@/data/types";
import { whatsappLink } from "@/lib/whatsapp";
import Container from "./Container";

/**
 * Renders a long text page (Privacy Policy, Terms, Wellness guide) from its list of blocks.
 * Edit the text in src/data/pages/<page>.ts.
 */
export default function TextPageContent({ page }: { page: TextPage }) {
  // The old pages started their sections at h2, h3 or h4. The highest level used on the
  // page becomes h2 here, so headings never skip a level (migration-audit SEO-09).
  const levels = page.blocks.flatMap((block) => (block.kind === "heading" ? [block.level] : []));
  const top = levels.length ? Math.min(...levels) : 2;
  const tagFor = (level: number) => (["h2", "h3", "h4"] as const)[Math.min(level - top, 2)];

  return (
    <article className="bg-ivory">
      <Container className="pb-section pt-12 sm:pt-16 lg:pt-20">
        <nav aria-label="Breadcrumb" className="text-small text-brown-ink">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="inline-block py-1 underline decoration-taupe underline-offset-[0.3em] hover:text-olive">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-olive">
              {page.title}
            </li>
          </ol>
        </nav>
        <h1 className="mt-6 text-display">{page.title}</h1>

        <div className="prose-spa mt-12">
          {page.blocks.map((block, i) => {
            switch (block.kind) {
              case "heading": {
                const Tag = tagFor(block.level);
                const content = block.href ? <Link href={block.href}>{block.text}</Link> : block.text;
                return <Tag key={i}>{content}</Tag>;
              }
              case "paragraph":
                return (
                  <p key={i}>
                    {block.lead && <strong className="font-semibold text-olive">{block.lead} </strong>}
                    {block.text}
                  </p>
                );
              case "list":
                return (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item.text}>
                        {item.lead && <strong className="font-semibold text-olive">{item.lead} </strong>}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                );
              case "link": {
                const href = block.href === "whatsapp" ? whatsappLink() : block.href;
                const external = href.startsWith("http") || href.startsWith("mailto:");
                return (
                  <p key={i}>
                    <a href={href} {...(external && !href.startsWith("mailto:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {block.label}
                    </a>
                  </p>
                );
              }
            }
          })}
        </div>
      </Container>
    </article>
  );
}
