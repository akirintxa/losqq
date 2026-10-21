import Link from "next/link";
import { GITHUB_URL } from "@/data/apps";

export default function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 py-8">
      <Link href="/" className="font-display text-3xl font-bold tracking-tight text-paper">
        losqq.
      </Link>
      <nav className="flex flex-wrap gap-6 text-base font-medium text-muted sm:gap-8">
        <Link href="/#apps" className="hover:text-paper">Apps</Link>
        <Link href="/#ahora" className="hover:text-paper">En qué trabajo</Link>
        <Link href="/#sobre-mi" className="hover:text-paper">Sobre mí</Link>
        <a href={GITHUB_URL} className="hover:text-paper">GitHub</a>
      </nav>
    </header>
  );
}
