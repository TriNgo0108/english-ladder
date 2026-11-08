"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { locateNav, type NavGroup } from "@/lib/nav";
import { cn } from "@/lib/utils";

const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** A level's topics, one collapsible group per category. Open state is never stored. */
export function TopicTree({ groups, onNavigate }: { groups: NavGroup[]; onNavigate?: () => void }) {
  const { category, topicHref } = locateNav(usePathname());
  const currentRef = useRef<HTMLAnchorElement>(null);

  // Bring the current topic into view inside the list's own scroll box only:
  // scrollIntoView would also scroll the page under the sticky top bar.
  useEffect(() => {
    const link = currentRef.current;
    const box = link?.closest<HTMLElement>(
      '[data-slot="scroll-area-viewport"], [data-slot="sheet-content"]',
    );
    if (!link || !box) return;
    const b = box.getBoundingClientRect();
    const l = link.getBoundingClientRect();
    if (l.top < b.top || l.bottom > b.bottom) {
      box.scrollTop += l.top - b.top - (b.height - l.height) / 2;
    }
  }, [topicHref]);

  return (
    <nav aria-label="Topics in this level">
      <ul className="grid gap-1">
        {groups.map((g) => (
          <li key={g.category}>
            <Collapsible defaultOpen={g.category === category}>
              <CollapsibleTrigger
                className={cn(
                  "group flex min-h-11 w-full items-center gap-2 rounded-md px-2 text-left text-base font-semibold transition-colors duration-200 hover:bg-subtle",
                  FOCUS,
                )}
              >
                <ChevronRight
                  aria-hidden="true"
                  className="size-4 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-90"
                />
                <span>
                  {g.label} <span className="font-normal text-muted">· {g.topics.length}</span>
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="mb-2 ml-4 grid border-l border-border">
                  {g.topics.map((t) => {
                    const isCurrent = t.href === topicHref;
                    return (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          ref={isCurrent ? currentRef : undefined}
                          aria-current={isCurrent ? "page" : undefined}
                          onClick={onNavigate}
                          className={cn(
                            "-ml-px flex min-h-11 items-center border-l-2 border-transparent py-1 pr-2 pl-3 text-base transition-colors duration-200 hover:bg-subtle",
                            isCurrent ? "border-accent font-semibold text-accent" : "text-text",
                            FOCUS,
                          )}
                        >
                          {t.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </li>
        ))}
      </ul>
    </nav>
  );
}
