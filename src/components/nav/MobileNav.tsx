"use client";

import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LevelLinks } from "@/components/nav/LevelLinks";
import { TopicTree } from "@/components/nav/TopicTree";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { Level } from "@/content/schema";
import { levelMeta } from "@/lib/levels";
import { locateNav, type NavGroup } from "@/lib/nav";

/** Below lg: levels and the current level's topics in a slide-out sheet. */
export function MobileNav({ navByLevel }: { navByLevel: Record<Level, NavGroup[]> }) {
  const [open, setOpen] = useState(false);
  const { level } = locateNav(usePathname());
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex size-11 items-center justify-center rounded-md border border-border bg-surface text-text transition-colors duration-200 hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" aria-describedby={undefined} className="gap-6 overflow-y-auto bg-ground p-4 pt-6">
        <SheetTitle className="font-serif text-2xl">Menu</SheetTitle>
        <nav aria-label="Levels">
          <LevelLinks orientation="column" onNavigate={close} />
        </nav>
        {level && (
          <div className="grid gap-2">
            <p className="text-base font-semibold text-muted">Level {levelMeta(level).label} topics</p>
            <TopicTree groups={navByLevel[level]} onNavigate={close} />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
