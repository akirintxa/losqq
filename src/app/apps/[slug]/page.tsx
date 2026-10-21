import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APPS, getApp } from "@/data/apps";
import PillLink from "@/components/PillLink";
import StatusBadge from "@/components/StatusBadge";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return APPS.map((app) => ({ slug: app.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const app = getApp((await params).slug);
  return app ? { title: app.name, description: app.tagline } : {};
}

export default async function AppPage({ params }: Props) {
  const app = getApp((await params).slug);
  if (!app) notFound();

  const index = APPS.indexOf(app);

  return (
    <main>
      <section className="flex flex-col gap-7 pt-16 pb-20">
        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold tracking-[0.15em] text-muted uppercase">
          <Link href="/#apps" className="hover:text-paper">Apps</Link>
          <span aria-hidden="true">/</span>
          <span style={{ color: app.accent }}>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h1 className="font-display text-[clamp(3.25rem,8vw,7rem)] leading-[0.95] font-bold tracking-tight">{app.name}</h1>
        <p className="max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">{app.description}</p>
        <div className="flex flex-wrap items-center gap-4">
          {app.url ? (
            <>
              <PillLink href={app.url} accent={app.accent}>Abrir la app</PillLink>
              <span className="text-base text-muted">{new URL(app.url).host}</span>
            </>
          ) : (
            <StatusBadge status={app.status} />
          )}
        </div>
      </section>

      {app.tournaments && (
        <section className="flex flex-col gap-8 border-t border-panel pt-12 pb-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-5xl font-bold tracking-tight">Torneos</h2>
            <span className="text-base text-muted">Cada torneo con sus partidos, sus ligas privadas y su ranking</span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-6">
            {app.tournaments.map((tournament) => (
              <div key={tournament.name} className="flex flex-col gap-4 rounded-2xl bg-panel p-7">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-muted">{tournament.dates}</span>
                  <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-muted">{tournament.state}</span>
                </div>
                <h3 className="text-3xl font-bold">{tournament.name}</h3>
                <p className="text-base leading-relaxed text-muted">{tournament.description}</p>
              </div>
            ))}
            <div className="flex flex-col gap-4 rounded-2xl border-2 border-dashed border-line p-7">
              <span className="self-start rounded-full bg-panel px-3 py-1 text-xs font-semibold text-muted">Próximamente</span>
              <h3 className="text-3xl font-bold text-muted">Nuevos torneos</h3>
              <p className="text-base leading-relaxed text-muted">Más competiciones con sus propias ligas y rankings.</p>
            </div>
          </div>
        </section>
      )}

      <section className="flex flex-wrap gap-12 border-t border-panel pt-12 pb-24">
        <div className="flex flex-[2_1_480px] flex-col gap-6">
          <h2 className="font-display text-4xl font-bold">Qué hace</h2>
          <ul className="flex flex-col gap-4">
            {app.highlights.map((item) => (
              <li key={item} className="border-t-2 pt-4 text-xl leading-relaxed text-muted" style={{ borderTopColor: app.accent }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-[1_1_280px] flex-col gap-6">
          <h2 className="font-display text-4xl font-bold">Stack</h2>
          <ul className="flex flex-wrap gap-2 text-base">
            {app.stack.map((tech) => (
              <li key={tech} className="rounded-full border border-line px-4 py-1.5">{tech}</li>
            ))}
          </ul>
          {app.repo && (
            <a href={app.repo} className="text-base font-semibold text-muted underline underline-offset-4 hover:text-paper">
              Ver el código en GitHub
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
