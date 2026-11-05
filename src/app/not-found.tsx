import type { Metadata } from "next";
import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import { LEVELS } from "@/lib/levels";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = { title: `Page not found - ${SITE_NAME}` };

const link =
  "inline-flex min-h-11 items-center text-base text-accent underline transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// A static-export 404 gets no route params, so offer every level instead of guessing one.
export default function NotFound() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="font-serif text-4xl">We cannot find this page</h1>
      <p className="mt-2 max-w-[65ch] text-base text-muted">
        The link may be old, or the page may not exist yet. Choose a level to keep going.
      </p>
      <Link href="/" className={`mt-4 ${link}`}>
        Go to all levels
      </Link>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {LEVELS.map((l) => (
          <li key={l.slug}>
            <Link
              href={`/${l.slug}/`}
              className="flex min-h-11 items-center gap-3 rounded border border-border bg-surface p-4 transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <LevelBadge level={l.slug} />
              <span className="text-base font-semibold">Level {l.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
