import Link from "next/link";

const demos = [
  { href: "/demo/maison/", label: "A Maison" },
  { href: "/demo/temple/", label: "B Temple" },
  { href: "/demo/botanica/", label: "C Botanica" },
  { href: "/demo/tirta/", label: "D Tirta" },
  { href: "/demo/taman/", label: "E Taman" },
  { href: "/demo/bulan/", label: "F Bulan" },
];

/** Small bar (bottom-left) to jump between the design demos and back to the current site. */
export default function DemoSwitcher({ current }: { current: string }) {
  return (
    <nav
      aria-label="Design demos"
      className="fixed bottom-4 left-4 z-40 flex max-w-[calc(100%-6rem)] items-center gap-1 overflow-x-auto rounded-full border border-line bg-paper/95 p-1 text-[0.8125rem] shadow-(--shadow-board) backdrop-blur"
    >
      {demos.map((demo) => (
        <Link
          key={demo.href}
          href={demo.href}
          aria-current={demo.href === current ? "page" : undefined}
          className="inline-flex min-h-9 shrink-0 items-center rounded-full px-3 font-medium text-ink transition-colors hover:bg-linen aria-[current=page]:bg-ink aria-[current=page]:text-paper"
        >
          {demo.label}
        </Link>
      ))}
      <Link href="/" className="inline-flex min-h-9 shrink-0 items-center rounded-full px-3 text-stone transition-colors hover:bg-linen">
        Current site
      </Link>
    </nav>
  );
}
