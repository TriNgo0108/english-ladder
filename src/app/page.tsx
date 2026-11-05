import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import { topicsByLevel } from "@/content/registry";
import { LEVELS } from "@/lib/levels";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="font-serif text-4xl">English Ladder</h1>
      <p className="mt-2 max-w-[65ch] text-base text-muted">
        Pick the level that sounds like you. Each level has its own grammar, vocabulary and more.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {LEVELS.map((l) => {
          const count = topicsByLevel(l.slug).length;
          return (
            <li key={l.slug}>
              <Link href={`/${l.slug}/`} className="rounded border border-border bg-surface p-4 min-h-11 block transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <LevelBadge level={l.slug} />
                <p className="mt-2 max-w-[65ch] text-base">{l.blurb}</p>
                <p className="mt-2 text-base text-muted">
                  {count === 0 ? "Coming soon" : `${count} ${count === 1 ? "topic" : "topics"}`}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
