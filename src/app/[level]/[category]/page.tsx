import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LevelBadge } from "@/components/LevelBadge";
import { populatedCategoryPairs, topicsByLevelAndCategory } from "@/content/registry";
import { CategorySlugSchema, LevelSchema } from "@/content/schema";
import { categoryMeta } from "@/lib/categories";
import { levelMeta } from "@/lib/levels";

export const dynamicParams = false;

export function generateStaticParams() {
  return populatedCategoryPairs().map(({ level, category }) => ({ level, category }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[level]/[category]">): Promise<Metadata> {
  const p = await params;
  const level = levelMeta(LevelSchema.parse(p.level));
  const category = categoryMeta(CategorySlugSchema.parse(p.category));
  return { title: `${category.label}, ${level.label}` };
}

export default async function CategoryPage({ params }: PageProps<"/[level]/[category]">) {
  const p = await params;
  const level = LevelSchema.parse(p.level);
  const category = CategorySlugSchema.parse(p.category);
  const topics = topicsByLevelAndCategory(level, category);
  if (topics.length === 0) notFound();
  const cat = categoryMeta(category);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <Link
        href={`/${level}/`}
        className="inline-flex min-h-11 items-center text-base text-accent underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Back to level {levelMeta(level).label}
      </Link>
      <h1 className="flex items-center gap-2 font-serif text-4xl">
        <LevelBadge level={level} /> <span>{cat.label}</span>
      </h1>
      <ol className="mt-6 grid gap-4">
        {topics.map((t) => (
          <li key={t.slug}>
            <Link href={`/${level}/${category}/${t.slug}/`} className="rounded border border-border bg-surface p-4 min-h-11 block transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <span className="mr-2 font-mono text-base text-muted">{t.order}.</span>
              <span className="text-base font-semibold">{t.title}</span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
