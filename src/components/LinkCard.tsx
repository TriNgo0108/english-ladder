import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A card that is one big link. Hover changes colour only, so nothing shifts. */
export function LinkCard({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "block min-h-11 rounded-md border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      )}
    >
      {children}
    </Link>
  );
}
