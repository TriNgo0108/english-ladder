import type { CategorySlug, Level, Topic } from "@/content/schema";
import { plainText } from "@/lib/rich-text";
import { topicPath } from "@/lib/seo";

export type SearchEntry = {
  slug: string;
  title: string;
  level: Level;
  category: CategorySlug;
  /** Route path without basePath, for next/link. */
  href: string;
  /** Lowercase plain text of everything searchable in the topic. */
  haystack: string;
};

export const MAX_RESULTS = 10;

function bodyParts(topic: Topic): string[] {
  const parts = [topic.title, topic.explanation];
  switch (topic.shape) {
    case "rule":
      if (topic.form) parts.push(topic.form);
      for (const ex of topic.examples) parts.push(ex.sentence);
      break;
    case "set":
      for (const en of topic.entries) parts.push(en.headword, en.gloss);
      break;
    case "phrases":
      for (const s of topic.situations) parts.push(s.situation, ...s.phrases);
      break;
  }
  return parts;
}

export function buildSearchIndex(topics: Topic[]): SearchEntry[] {
  return topics.map((t) => ({
    slug: t.slug,
    title: t.title,
    level: t.level,
    category: t.category,
    href: topicPath(t),
    haystack: bodyParts(t).map(plainText).join(" ").replace(/\s+/g, " ").toLowerCase(),
  }));
}

/** Title matches first, then body-only matches; ties keep index order. At most 10. */
export function searchTopics(index: SearchEntry[], query: string): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const titleHits: SearchEntry[] = [];
  const bodyHits: SearchEntry[] = [];
  for (const entry of index) {
    if (entry.title.toLowerCase().includes(q)) titleHits.push(entry);
    else if (entry.haystack.includes(q)) bodyHits.push(entry);
  }
  return [...titleHits, ...bodyHits].slice(0, MAX_RESULTS);
}
