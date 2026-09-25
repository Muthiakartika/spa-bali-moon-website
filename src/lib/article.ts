/**
 * ARTICLE HELPERS for blog posts.
 *
 * addHeadingIds() gives every <h2> in an article an id (made from its text), so the
 * "In this article" list can link to it. The article text itself is not changed.
 *
 *   const { html, headings } = addHeadingIds(post.contentHtml);
 *   // headings = [{ id: "understanding-traditional-balinese-massage", text: "Understanding Traditional Balinese Massage" }, …]
 */
export type ArticleHeading = { id: string; text: string };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function addHeadingIds(contentHtml: string): { html: string; headings: ArticleHeading[] } {
  const headings: ArticleHeading[] = [];
  const used = new Set<string>();
  const html = contentHtml.replace(/<h2>([\s\S]*?)<\/h2>/g, (_match, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text) || "section";
    while (used.has(id)) id += "-2";
    used.add(id);
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html, headings };
}

/** Rough reading time: about 200 words per minute, at least 1 minute. */
export function readingMinutes(contentHtml: string): number {
  const words = contentHtml.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
