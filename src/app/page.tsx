import { APPS, GITHUB_URL } from "@/data/apps";
import AppCard from "@/components/AppCard";
import PillLink from "@/components/PillLink";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col gap-8 pt-20 pb-24 sm:pt-28">
        <p className="text-sm font-semibold tracking-[0.2em] text-muted uppercase">Laboratorio de apps</p>
        <h1 className="font-display text-[clamp(3.25rem,9vw,8rem)] leading-[0.95] font-bold tracking-tight">
          Apps que hago
          <br />
          para usar de verdad.
        </h1>
        <p className="max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl">
          Proyectos personales de un ingeniero que gerencia proyectos de software. Algunos están en vivo y otros en construcción.
        </p>
        <div>
          <PillLink href="/#apps">Ver las apps</PillLink>
        </div>
      </section>

      <section id="apps" className="flex scroll-mt-8 flex-col gap-10 border-t border-panel pt-12 pb-24">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-5xl font-bold tracking-tight">Apps</h2>
          <span className="text-base text-muted">Cada app vive en su propio espacio</span>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6">
          {APPS.map((app, index) => (
            <AppCard key={app.slug} app={app} index={index} />
          ))}
          <div className="flex min-h-80 flex-col justify-center gap-6 rounded-3xl border-2 border-dashed border-line p-8">
            <span className="text-lg font-bold text-[#6c757d]">{String(APPS.length + 1).padStart(2, "0")}</span>
            <h3 className="font-display text-3xl font-bold text-muted">Lo que viene</h3>
            <p className="text-lg leading-relaxed text-muted">Espacio para la siguiente idea.</p>
          </div>
        </div>
      </section>

      <section id="ahora" className="flex scroll-mt-8 flex-wrap items-start gap-12 border-t border-panel pt-12 pb-24">
        <h2 className="flex-[1_1_280px] font-display text-5xl font-bold tracking-tight">En qué trabajo ahora</h2>
        <div className="flex flex-[2_1_480px] flex-col gap-4 rounded-3xl bg-panel p-8">
          <p className="text-sm font-semibold tracking-[0.15em] text-[#ff6b6b] uppercase">Q26 · Próxima versión</p>
          <p className="text-3xl leading-tight font-bold">Una quiniela para varios torneos, no solo el Mundial.</p>
          <p className="text-lg leading-relaxed text-muted">
            Elegir torneo al entrar, ligas privadas por torneo y un ranking para cada uno.
          </p>
        </div>
      </section>

      <section id="sobre-mi" className="flex scroll-mt-8 flex-wrap gap-12 border-t border-panel pt-12 pb-24">
        <h2 className="flex-[1_1_280px] font-display text-5xl font-bold tracking-tight">Sobre mí</h2>
        <div className="flex flex-[2_1_480px] flex-col gap-6">
          <p className="text-xl leading-relaxed text-muted sm:text-2xl">
            Soy ingeniero y me dedico a la gerencia de proyectos de desarrollo de software. Aquí publico las apps que construyo para resolver problemas propios y de mi gente.
          </p>
          <div>
            <PillLink href={GITHUB_URL}>Ver mi GitHub</PillLink>
          </div>
        </div>
      </section>
    </main>
  );
}
