"use client";

import type { TopicSection } from "@/lib/topic-sections";
import { cn } from "@/lib/utils";
import { useActiveSection } from "./useActiveSection";

/** Jump links to a topic's sections; the one being read is marked. */
export function OnThisPage({ sections }: { sections: TopicSection[] }) {
  const active = useActiveSection(sections.map((s) => s.id));
  return (
    <nav aria-label="On this page">
      <p className="text-base font-semibold">On this page</p>
      <ul className="mt-2 grid border-l border-border">
        {sections.map((s) => {
          const isActive = s.id === active;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "-ml-px flex min-h-11 items-center border-l-2 py-1 pl-3 text-base transition-colors duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                  isActive ? "border-accent font-semibold text-accent" : "border-transparent text-muted",
                )}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
