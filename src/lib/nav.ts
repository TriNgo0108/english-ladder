import { topicsByLevel } from "@/content/registry";
import { CategorySlugSchema, LevelSchema, type CategorySlug, type Level } from "@/content/schema";
import { CATEGORIES } from "@/lib/categories";
import { LEVELS } from "@/lib/levels";
import { topicPath } from "@/lib/seo";

export type NavTopic = { title: string; href: string };
export type NavGroup = { category: CategorySlug; label: string; topics: NavTopic[] };
export type NavLocation = { level?: Level; category?: CategorySlug; topicHref?: string };

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

/** Where a pathname (basePath already stripped, trailing slash optional) sits in the site. */
export function locateNav(pathname: string): NavLocation {
  const [levelSeg, categorySeg, topicSeg] = pathname.split("/").filter(Boolean);
  const level = LevelSchema.safeParse(levelSeg);
  if (!level.success) return {};
  const category = CategorySlugSchema.safeParse(categorySeg);
  if (!category.success) return { level: level.data };
  if (!topicSeg) return { level: level.data, category: category.data };
  return {
    level: level.data,
    category: category.data,
    topicHref: `/${level.data}/${category.data}/${topicSeg}/`,
  };
}
