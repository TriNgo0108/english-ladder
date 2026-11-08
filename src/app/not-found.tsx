import type { Metadata } from "next";
import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import { LinkCard } from "@/components/LinkCard";
import { LEVELS } from "@/lib/levels";

export const metadata: Metadata = { title: "Page not found" };

const link =
  "inline-flex min-h-11 items-center text-base text-accent underline transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// A static-export 404 gets no route params, so offer every level instead of guessing one.
export default function NotFound() {
  return (
    <main id="content" className="mx-auto w-full max-w-screen-2xl px-4 py-8 lg:px-8">
      <h1 className="font-serif text-4xl">We cannot find this page</h1>
      <p className="mt-2 max-w-[65ch] text-base text-muted">
        The link may be old, or the page may not exist yet. Choose a level to keep going.
      </p>
      <Link href="/" className={`mt-4 ${link}`}>
        Go to all levels
      </Link>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEVELS.map((l) => (
          <li key={l.slug}>
            <LinkCard href={`/${l.slug}/`} className="flex items-center gap-3">
              <LevelBadge level={l.slug} />
              <span className="text-base font-semibold">Level {l.label}</span>
            </LinkCard>
          </li>
        ))}
      </ul>
    </main>
  );
}
