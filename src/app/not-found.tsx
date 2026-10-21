import PillLink from "@/components/PillLink";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-8 py-28">
      <h1 className="font-display text-7xl font-bold tracking-tight">Aquí no hay nada.</h1>
      <p className="text-xl text-muted">La página que buscas no existe o se mudó.</p>
      <div>
        <PillLink href="/">Volver al inicio</PillLink>
      </div>
    </main>
  );
}
