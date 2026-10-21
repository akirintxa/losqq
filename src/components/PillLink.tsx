import Link from "next/link";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  /** Color de fondo del segmento principal; por defecto el tono papel. */
  accent?: string;
};

function Arrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function PillLink({ href, children, accent }: PillLinkProps) {
  const external = href.startsWith("http");
  const className =
    "group inline-flex items-center gap-1 rounded-full border border-muted/40 bg-line p-1.5 transition-colors hover:border-paper/60";
  const content = (
    <>
      <span
        className="rounded-full px-8 py-3.5 text-lg font-bold sm:px-10"
        style={accent ? { background: accent, color: "#ffffff" } : { background: "var(--color-paper)", color: "var(--color-ink)" }}
      >
        {children}
      </span>
      <span className="flex h-12 w-12 items-center justify-center text-paper transition-transform group-hover:translate-x-0.5">
        <Arrow />
      </span>
    </>
  );

  return external ? (
    <a href={href} className={className}>{content}</a>
  ) : (
    <Link href={href} className={className}>{content}</Link>
  );
}
