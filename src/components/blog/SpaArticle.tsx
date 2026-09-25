import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import SiteImage from "@/components/ui/SiteImage";
import TropicalLeaf from "@/components/ui/TropicalLeaf";
import { business } from "@/data/business";
import type { BlogPost } from "@/data/types";
import { addHeadingIds, readingMinutes } from "@/lib/article";
import PostCard, { formatDate } from "./PostCard";

/**
 * SPA ARTICLE — the redesigned blog post layout (same content as the old layout).
 * Cover photo with the title on top → article in a comfortable reading column with an
 * "In this article" list that stays in view → tags → previous / next → more articles.
 * A thin gold bar at the top of the screen shows reading progress (CSS only, see globals.css).
 * Which posts use it is set in src/app/guide/[slug]/page.tsx.
 */
export default function SpaArticle({
  post,
  previous,
  next,
  more,
}: {
  post: BlogPost;
  previous?: BlogPost;
  next?: BlogPost;
  more: BlogPost[];
}) {
  const { html, headings } = addHeadingIds(post.contentHtml);
  const minutes = readingMinutes(post.contentHtml);

  return (
    <article>
      <div aria-hidden="true" className="reading-progress" />

      {/* Cover photo with the title on top */}
      <header className="relative isolate overflow-hidden bg-ink">
        <SiteImage image={post.coverImage} fill priority sizes="100vw" className="-z-10" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/25" />
        <Container className="flex min-h-[min(72dvh,36rem)] flex-col justify-between gap-12 py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="text-small text-linen/85">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="inline-block py-1 underline decoration-paper/30 underline-offset-[0.3em] hover:text-paper">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/guide/" className="inline-block py-1 underline decoration-paper/30 underline-offset-[0.3em] hover:text-paper">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="line-clamp-1 text-paper">
                {post.title}
              </li>
            </ol>
          </nav>
          <div className="max-w-[48rem]">
            <p className="inline-flex rounded-full bg-paper/15 px-3 py-1 text-small font-medium text-paper backdrop-blur-sm">{post.category}</p>
            <h1 className="mt-5 text-display text-paper">{post.title}</h1>
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-small text-linen/85">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>by {post.author}</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock aria-hidden="true" strokeWidth={1.5} className="size-4" />
                {minutes} min read
              </span>
            </p>
          </div>
        </Container>
      </header>

      {/* Article + sidebar */}
      <div className="relative overflow-hidden bg-paper">
        <TropicalLeaf className="absolute -right-24 top-24 hidden w-80 -scale-x-100 text-gold/15 xl:block" />
        <Container className="relative grid gap-14 py-section lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {/* Article body (trusted HTML from src/data/blog) */}
            <div className="prose-spa prose-article" dangerouslySetInnerHTML={{ __html: html }} />

            {post.tags.length > 0 && (
              <div className="mt-14 flex flex-wrap items-center gap-2 border-t border-line pt-8">
                <span className="mr-2 text-small font-semibold text-stone">Tags</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-linen px-4 py-1.5 text-small text-ink">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Previous / next with their cover photos */}
            <nav aria-label="More articles" className="mt-10 grid gap-4 sm:grid-cols-2">
              {previous && (
                <Link href={`/guide/${previous.slug}/`} className="group flex items-center gap-4 rounded-card border border-line p-3 transition-colors hover:bg-linen">
                  <span className="relative size-20 shrink-0 overflow-hidden rounded-cell">
                    <SiteImage image={previous.coverImage} alt="" fill sizes="80px" />
                  </span>
                  <span>
                    <span className="inline-flex items-center gap-1.5 text-small text-stone">
                      <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-4" />
                      Previous
                    </span>
                    <span className="mt-1 block font-semibold leading-snug">{previous.title}</span>
                  </span>
                </Link>
              )}
              {next && (
                <Link
                  href={`/guide/${next.slug}/`}
                  className="group flex items-center gap-4 rounded-card border border-line p-3 text-right transition-colors hover:bg-linen sm:col-start-2 sm:flex-row-reverse"
                >
                  <span className="relative size-20 shrink-0 overflow-hidden rounded-cell">
                    <SiteImage image={next.coverImage} alt="" fill sizes="80px" />
                  </span>
                  <span className="flex-1">
                    <span className="inline-flex items-center gap-1.5 text-small text-stone">
                      Next
                      <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
                    </span>
                    <span className="mt-1 block font-semibold leading-snug">{next.title}</span>
                  </span>
                </Link>
              )}
            </nav>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-28">
              {headings.length > 0 && (
                <nav aria-labelledby="toc-heading" className="rounded-board border border-line bg-paper p-6">
                  <h2 id="toc-heading" className="text-[1rem] font-semibold">
                    In this article
                  </h2>
                  <ol className="scrollbar-thin mt-4 max-h-[45vh] space-y-1 overflow-y-auto border-l border-line pr-2">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          className="-ml-px block border-l border-transparent py-1.5 pl-4 text-small leading-snug text-stone transition-colors hover:border-gold hover:text-ink"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}

              <div className="rounded-board bg-linen p-6">
                <div className="flex items-center gap-3">
                  <Image src="/images/branding/sbm.webp" alt="" width={56} height={44} className="h-9 w-auto" />
                  <p className="text-[1.125rem] font-semibold">{business.name}</p>
                </div>
                <p className="mt-3 text-small text-stone">{business.aboutText}</p>
                <div className="mt-5">
                  <BookButton label="Book via WhatsApp" source={`Blog: ${post.title}`} className="w-full" />
                </div>
                <div className="mt-4 flex gap-2">
                  <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded-full bg-paper text-ink transition-colors hover:bg-gold-deep hover:text-paper">
                    <FacebookIcon />
                    <span className="sr-only">Facebook (opens in a new tab)</span>
                  </a>
                  <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded-full bg-paper text-ink transition-colors hover:bg-gold-deep hover:text-paper">
                    <InstagramIcon />
                    <span className="sr-only">Instagram (opens in a new tab)</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </div>

      <section aria-labelledby="more-articles" className="bg-linen py-section">
        <Container>
          <h2 id="more-articles" className="text-title">
            More Articles
          </h2>
          <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} headingLevel="h3" />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </article>
  );
}
