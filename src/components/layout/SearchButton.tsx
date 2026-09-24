"use client";

import { Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";

export type SearchablePost = { title: string; excerpt: string; href: string; tags: string[] };

/**
 * Header search, like the live website's search button (it searched the blog articles).
 * The live site asked its own server; here the articles are passed in from src/data/blog,
 * so searching happens instantly in the browser with no server (migration-audit FUNC-03).
 */
export default function SearchButton({ posts }: { posts: SearchablePost[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputId = useId();
  const pathname = usePathname();
  const [query, setQuery] = useState("");

  // Close after navigating to a result.
  useEffect(() => {
    dialogRef.current?.close();
  }, [pathname]);

  const results = useMemo(() => {
    const words = query.toLowerCase().split(/\s+/).filter(Boolean);
    if (words.length === 0) return posts;
    return posts.filter((post) => {
      const text = `${post.title} ${post.excerpt} ${post.tags.join(" ")}`.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }, [query, posts]);

  function open() {
    dialogRef.current?.showModal();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="inline-flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-linen"
      >
        <Search aria-hidden="true" strokeWidth={1.5} className="size-5" />
        <span className="sr-only">Search</span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label="Search the blog"
        className="m-auto mt-[12vh] w-[min(40rem,calc(100%-2rem))] rounded-board border border-line bg-paper p-0 text-ink shadow-(--shadow-board) backdrop:bg-ink/40"
      >
        <div className="flex items-center gap-3 border-b border-line px-5">
          <Search aria-hidden="true" strokeWidth={1.5} className="size-5 shrink-0 text-stone" />
          <label htmlFor={inputId} className="sr-only">
            Search
          </label>
          <input
            id={inputId}
            type="search"
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="min-h-14 flex-1 bg-transparent text-body text-ink placeholder:text-stone focus:outline-none"
          />
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-linen"
          >
            <X aria-hidden="true" strokeWidth={1.5} className="size-5" />
            <span className="sr-only">Close search</span>
          </button>
        </div>

        <ul className="max-h-[60vh] overflow-y-auto p-2" aria-live="polite">
          {results.map((post) => (
            <li key={post.href}>
              <Link href={post.href} className="block rounded-cell px-3 py-3 transition-colors hover:bg-linen focus-visible:bg-linen">
                <span className="block font-semibold leading-snug">{post.title}</span>
                <span className="mt-1 line-clamp-2 block text-small text-stone">{post.excerpt}</span>
              </Link>
            </li>
          ))}
          {results.length === 0 && <li className="px-3 py-6 text-small text-stone">No articles match &ldquo;{query}&rdquo;.</li>}
        </ul>
      </dialog>
    </>
  );
}
