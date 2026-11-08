import Link from "next/link";
import { LadderMark } from "@/components/LadderMark";
import { LevelLinks } from "@/components/nav/LevelLinks";
import { MobileNav } from "@/components/nav/MobileNav";
import { Search } from "@/components/Search";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SITE_NAME } from "@/lib/site";

/** The sticky top bar on every page. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-ground/95 backdrop-blur">
      <a
        href="#content"
        className="sr-only rounded-md bg-accent px-4 py-2 font-semibold text-on-accent focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Skip to content
      </a>
      <div className="relative mx-auto flex h-16 w-full max-w-screen-2xl items-center gap-2 px-4 lg:px-8">
        <MobileNav />
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 rounded-md pr-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <LadderMark className="size-7 shrink-0" />
          <span className="hidden font-serif text-xl font-semibold whitespace-nowrap sm:inline">{SITE_NAME}</span>
          <span className="sr-only sm:hidden">{SITE_NAME}</span>
        </Link>
        <nav aria-label="Levels" className="mx-auto hidden lg:block">
          <LevelLinks orientation="row" />
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Search />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
