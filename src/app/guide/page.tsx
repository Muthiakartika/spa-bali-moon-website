import PostCard from "@/components/blog/PostCard";
import Section from "@/components/ui/Section";
import { blogPosts } from "@/data/blog";
import { blogArchivePage } from "@/data/pages/blog";
import { buildMetadata } from "@/lib/seo";

/** BLOG ARCHIVE (/guide/) — articles come from src/data/blog/ (order as on the old site). */
export const metadata = buildMetadata({
  title: blogArchivePage.seo.title,
  description: blogArchivePage.seo.description,
  path: blogArchivePage.path,
  image: blogPosts[0]?.coverImage,
});

export default function BlogArchivePage() {
  return (
    <Section labelledBy="blog-title">
      <h1 id="blog-title" className="text-display">
        {blogArchivePage.title}
      </h1>
      <ul className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} readMoreLabel={blogArchivePage.readMoreLabel} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
