import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostCard, { formatDate } from "@/components/blog/PostCard";
import BookButton from "@/components/ui/BookButton";
import Container from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import SiteImage from "@/components/ui/SiteImage";
import { blogPosts, getBlogPost } from "@/data/blog";
import { business } from "@/data/business";
import { buildMetadata } from "@/lib/seo";

/**
 * BLOG ARTICLE (/guide/<slug>/)
 * The article text is HTML copied exactly from the old site (src/data/blog/<slug>.ts).
 */
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/guide/${post.slug}/`,
    image: post.coverImage,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const index = blogPosts.findIndex((p) => p.slug === post.slug);
  const previous = blogPosts[index + 1]; // older article
  const next = blogPosts[index - 1]; // newer article
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article>
      <Container className="pt-12 sm:pt-16 lg:pt-20">
        <nav aria-label="Breadcrumb" className="text-small text-brown-ink">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="inline-block py-1 underline decoration-taupe underline-offset-[0.3em] hover:text-olive">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/guide/" className="inline-block py-1 underline decoration-taupe underline-offset-[0.3em] hover:text-olive">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-olive">
              {post.title}
            </li>
          </ol>
        </nav>
        <h1 className="mt-6 max-w-[22ch] text-display">{post.title}</h1>
        <p className="label-caps mt-6 text-brown-ink">
          {post.category} · <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> · {post.author}
        </p>
      </Container>

      <div className="relative mx-auto mt-10 aspect-[16/9] w-[calc(100%-2*var(--spacing-gutter))] max-w-[90rem] overflow-hidden rounded-board lg:aspect-[21/9]">
        <SiteImage image={post.coverImage} fill priority sizes="100vw" />
      </div>

      <Container className="grid gap-14 py-section lg:grid-cols-12">
        <div className="lg:col-span-8">
          {/* Article body (trusted HTML from src/data/blog) */}
          <div className="prose-spa" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

          {post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-taupe/60 pt-6">
              <span className="label-caps mr-2 text-brown-ink">Tags</span>
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-cell border border-taupe/70 px-3 py-1 text-small text-brown-ink">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <nav aria-label="More articles" className="mt-10 grid gap-4 sm:grid-cols-2">
            {previous && (
              <Link href={`/guide/${previous.slug}/`} className="rounded-cell border border-taupe/60 p-5 transition-colors hover:bg-sand">
                <span className="label-caps block text-brown-ink">Previous</span>
                <span className="mt-2 block font-serif text-[1.3rem] leading-snug">{previous.title}</span>
              </Link>
            )}
            {next && (
              <Link href={`/guide/${next.slug}/`} className="rounded-cell border border-taupe/60 p-5 text-right transition-colors hover:bg-sand sm:col-start-2">
                <span className="label-caps block text-brown-ink">Next</span>
                <span className="mt-2 block font-serif text-[1.3rem] leading-snug">{next.title}</span>
              </Link>
            )}
          </nav>
        </div>

        <aside className="space-y-10 lg:col-span-4">
          <div className="rounded-board bg-olive p-7 text-ivory">
            <p className="font-serif text-[1.6rem] leading-tight">{business.name}</p>
            <p className="mt-3 text-small text-sand">{business.aboutText}</p>
            <div className="mt-6">
              <BookButton label="Book via WhatsApp" variant="light" source={`Blog: ${post.title}`} />
            </div>
            <div className="mt-6 flex gap-2">
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded-control text-sand hover:bg-olive-cell hover:text-ivory">
                <FacebookIcon />
                <span className="sr-only">Facebook (opens in a new tab)</span>
              </a>
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex size-11 items-center justify-center rounded-control text-sand hover:bg-olive-cell hover:text-ivory">
                <InstagramIcon />
                <span className="sr-only">Instagram (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="label-caps text-brown-ink">Latest Posts</h2>
            <ul className="mt-4 space-y-4">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((p) => (
                  <li key={p.slug} className="border-t border-taupe/60 pt-4">
                    <Link href={`/guide/${p.slug}/`} className="font-serif text-[1.2rem] leading-snug hover:text-brown">
                      {p.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </aside>
      </Container>

      <section aria-labelledby="more-articles" className="bg-sand py-section">
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
