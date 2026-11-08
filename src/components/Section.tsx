import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** A lesson panel: each section of a topic sits on its own "page". */
export const PANEL = "rounded-md border border-border bg-surface p-6 sm:p-8";

/** Section heading: serif with a fine rule; clears the sticky top bar when jumped to. */
export const SECTION_HEADING = "font-serif text-2xl border-b border-border pb-2 scroll-mt-24";

/** Example sentences read like specimens in a printed grammar: italic, key words upright in accent. */
export const EXAMPLE_TEXT =
  "font-serif text-xl italic [&_b]:not-italic [&_b]:font-semibold [&_b]:text-accent";

export function Section({
  headingId,
  title,
  aside,
  children,
  className,
}: {
  headingId: string;
  title: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section aria-labelledby={headingId} className={cn(PANEL, className)}>
      <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 border-b border-border pb-2">
        <h2 id={headingId} className={cn(SECTION_HEADING, "border-b-0 pb-0")}>
          {title}
        </h2>
        {aside}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
