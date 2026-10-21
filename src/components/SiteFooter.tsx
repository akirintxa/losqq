import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-4 border-t border-panel pt-8 pb-12 text-sm text-muted">
      <Link href="/" className="font-display text-lg font-bold text-paper">
        losqq.
      </Link>
      <span>Hecho a mano · {new Date().getFullYear()}</span>
    </footer>
  );
}
