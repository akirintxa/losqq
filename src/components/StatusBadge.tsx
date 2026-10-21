import { STATUS_LABELS, type AppStatus } from "@/data/apps";

const DOT_COLORS: Record<AppStatus, string> = {
  live: "#7dd87d",
  building: "#e5d283",
  personal: "#8ecae6",
  prototype: "#adb5bd",
};

export default function StatusBadge({ status }: { status: AppStatus }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3.5 py-1.5 text-sm font-semibold text-paper">
      <span className="h-2 w-2 rounded-full" style={{ background: DOT_COLORS[status] }} aria-hidden="true" />
      {STATUS_LABELS[status]}
    </span>
  );
}
