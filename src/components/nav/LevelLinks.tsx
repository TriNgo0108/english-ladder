"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LEVELS } from "@/lib/levels";
import { locateNav } from "@/lib/nav";
import { cn } from "@/lib/utils";

/** The five levels as links; the level being read is marked current. */
export function LevelLinks({
  orientation,
  onNavigate,
}: {
  orientation: "row" | "column";
  onNavigate?: () => void;
}) {
  const { level } = locateNav(usePathname());
  return (
    <ul className={cn("flex", orientation === "row" ? "items-center gap-1" : "flex-wrap gap-2")}>
      {LEVELS.map((l) => {
        const isCurrent = l.slug === level;
        return (
          <li key={l.slug}>
            <Link
              href={`/${l.slug}/`}
              aria-current={isCurrent ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-3 text-base font-semibold transition-colors duration-200 hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                isCurrent ? "bg-subtle text-accent" : "text-text",
              )}
            >
              {l.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
