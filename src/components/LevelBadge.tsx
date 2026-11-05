import type { Level } from "@/content/schema";
import { levelMeta } from "@/lib/levels";

export function LevelBadge({ level }: { level: Level }) {
  const { label, ramp, fg } = levelMeta(level);
  return (
    <span
      className="inline-block rounded px-2 py-0.5 text-sm font-semibold"
      style={{ backgroundColor: ramp, color: fg }}
    >
      {label}
    </span>
  );
}
