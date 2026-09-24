import Link from "next/link";
import SiteImage from "@/components/ui/SiteImage";
import type { BlogPost } from "@/data/types";

export function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "Asia/Makassar" }).format(
    new Date(iso),
  );
}

/** Card for one blog article (archive page and "More Articles"). */
export default function PostCard({
  post,
  headingLevel = "h2",
  readMoreLabel = "Read More",
  showExcerpt = true,
}: {
  post: BlogPost;
  headingLevel?: "h2" | "h3";
  readMoreLabel?: string;
  showExcerpt?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-cell">
        <SiteImage
          image={post.coverImage}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="transition-transform duration-(--duration-slow) ease-out-expo group-hover:scale-[1.03]"
        />
      </div>
      <p className="meta-label mt-5 text-stone">
        {post.category}, <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
      </p>
      <Heading className="mt-2 font-display text-[1.25rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
        <Link href={`/guide/${post.slug}/`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </Heading>
      {showExcerpt && <p className="mt-3 text-body text-stone">{post.excerpt}</p>}
      <span aria-hidden="true" className="mt-4 text-small font-semibold text-ink underline decoration-gold underline-offset-[0.35em] group-hover:decoration-ink">
        {readMoreLabel}
      </span>
    </article>
  );
}
