import type { Level } from "@/content/schema";
import { levelMeta } from "@/lib/levels";

/**
 * Always shows the level as text. Pass `decorative` only when the badge sits inside
 * a heading whose own text already names the level, so screen readers do not read it twice.
 */
export function LevelBadge({ level, decorative = false }: { level: Level; decorative?: boolean }) {
  const { label, ramp, fg } = levelMeta(level);
  return (
    <span
      aria-hidden={decorative ? "true" : undefined}
      className="inline-block rounded px-2 py-0.5 text-base font-semibold"
      style={{ backgroundColor: ramp, color: fg }}
    >
      {label}
    </span>
  );
}
