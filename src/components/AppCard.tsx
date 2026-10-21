import Link from "next/link";
import type { App } from "@/data/apps";
import StatusBadge from "@/components/StatusBadge";

export default function AppCard({ app, index }: { app: App; index: number }) {
  const host = app.url ? new URL(app.url).host : "Ver ficha";

  return (
    <Link
      href={`/apps/${app.slug}`}
      className="flex flex-col gap-6 rounded-3xl border-t-[6px] bg-panel p-8 transition-transform hover:-translate-y-1"
      style={{ borderTopColor: app.accent }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-lg font-bold text-muted">{String(index + 1).padStart(2, "0")}</span>
        <StatusBadge status={app.status} />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-4xl font-bold tracking-tight">{app.name}</h3>
        <p className="text-lg leading-relaxed text-muted">{app.tagline}</p>
      </div>
      <ul className="flex flex-wrap gap-2 text-sm text-muted">
        {app.stack.map((tech) => (
          <li key={tech} className="rounded-full border border-line px-3 py-1">{tech}</li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between border-t border-line pt-4 text-base font-semibold">
        <span>{host}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </div>
    </Link>
  );
}
