import type { CategorySlug } from "@/content/schema";

export type CategoryMeta = { slug: CategorySlug; label: string };

export const CATEGORIES: CategoryMeta[] = [
  { slug: "grammar", label: "Grammar" },
  { slug: "vocabulary", label: "Vocabulary" },
  { slug: "phrases", label: "Phrases & Expressions" },
  { slug: "writing", label: "Writing" },
  { slug: "speaking", label: "Speaking & Communication" },
  { slug: "mechanics", label: "Mechanics" },
];

export function categoryMeta(slug: CategorySlug): CategoryMeta {
  const meta = CATEGORIES.find((c) => c.slug === slug);
  if (!meta) throw new Error(`Unknown category: ${slug}`);
  return meta;
}
