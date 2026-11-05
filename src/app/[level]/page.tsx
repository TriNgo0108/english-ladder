import type { Metadata } from "next";
import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import { populatedCategoryPairs, topicsByLevelAndCategory } from "@/content/registry";
import { LevelSchema, type Level } from "@/content/schema";
import { categoryMeta } from "@/lib/categories";
import { LEVELS, levelMeta } from "@/lib/levels";

export const dynamicParams = false;

export function generateStaticParams() {
  return LEVELS.map((l) => ({ level: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[level]">): Promise<Metadata> {
  const { level } = await params;
  const meta = levelMeta(LevelSchema.parse(level));
  return { title: meta.label, description: meta.blurb };
}

export default async function LevelPage({ params }: PageProps<"/[level]">) {
  const level: Level = LevelSchema.parse((await params).level);
  const meta = levelMeta(level);
  const categories = populatedCategoryPairs()
    .filter((p) => p.level === level)
    .map((p) => ({
      ...categoryMeta(p.category),
      count: topicsByLevelAndCategory(level, p.category).length,
    }));

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      {categories.length === 0 ? (
        <>
          <h1 className="font-serif text-4xl">Nothing here yet</h1>
          <p className="mt-2 max-w-[65ch] text-base text-muted">
            We have not added any {meta.label} topics yet. Check back soon.
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex min-h-11 items-center text-base text-accent underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Back to all levels
          </Link>
        </>
      ) : (
        <>
          <h1 className="flex items-center gap-2 font-serif text-4xl">
            <LevelBadge level={level} /> <span>Level {meta.label}</span>
          </h1>
          <p className="mt-2 max-w-[65ch] text-base text-muted">{meta.blurb}</p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/${level}/${c.slug}/`} className="rounded border border-border bg-surface p-4 min-h-11 block transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <span className="text-base font-semibold">{c.label}</span>
                  <span className="block text-base text-muted">
                    {c.count} {c.count === 1 ? "topic" : "topics"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}
