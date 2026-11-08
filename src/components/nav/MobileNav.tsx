"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { LevelLinks } from "@/components/nav/LevelLinks";
import { useNavLocation } from "@/components/nav/NavContext";
import { TopicTree } from "@/components/nav/TopicTree";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { levelMeta } from "@/lib/levels";

/** Below lg: levels and the current level's topics in a slide-out sheet. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const { level } = useNavLocation();
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="inline-flex size-11 items-center justify-center rounded-md border border-control bg-surface text-text transition-colors duration-200 hover:bg-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
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
            <TopicTree level={level} onNavigate={close} />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
