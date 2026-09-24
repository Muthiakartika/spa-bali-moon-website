/**
 * Centers content and keeps the same side padding on every page.
 * Use it inside every section:  <Container>...</Container>
 */
export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-site px-gutter ${className}`}>{children}</div>;
}
