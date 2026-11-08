// Server-only: imports the content registry. Client components use
// `@/lib/nav-location` and NavProvider instead (see client-imports.test.ts).
import { topicsByLevel } from "@/content/registry";
import type { Level } from "@/content/schema";
import { CATEGORIES } from "@/lib/categories";
import { LEVELS } from "@/lib/levels";
import type { NavGroup } from "@/lib/nav-location";
import { topicPath } from "@/lib/seo";

/** A level's topics grouped by category, in CATEGORIES order, empty groups left out. */
export function buildLevelNav(level: Level): NavGroup[] {
  const topics = topicsByLevel(level);
  return CATEGORIES.map((c) => ({
    category: c.slug,
    label: c.label,
    topics: topics
      .filter((t) => t.category === c.slug)
      .map((t) => ({ title: t.title, href: topicPath(t) })),
  })).filter((g) => g.topics.length > 0);
}

export function buildAllNav(): Record<Level, NavGroup[]> {
  return Object.fromEntries(LEVELS.map((l) => [l.slug, buildLevelNav(l.slug)])) as Record<
    Level,
    NavGroup[]
  >;
}
