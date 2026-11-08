// Client-safe: no content imports. The nav data itself is built on the server by
// `@/lib/nav` and handed to the client through NavProvider.
import type { CategorySlug, Level } from "@/content/schema";

export type NavTopic = { title: string; href: string };
export type NavGroup = { category: CategorySlug; label: string; topics: NavTopic[] };
export type NavByLevel = Partial<Record<Level, NavGroup[]>>;
export type NavLocation = { level?: Level; category?: CategorySlug; topicHref?: string };

/**
 * Where a pathname (basePath stripped, trailing slash optional) sits in the site.
 * Only real pages count: GitHub Pages serves the 404 page at the requested URL,
 * so a stale link under a real level must not mark that level as current.
 */
export function locateNav(pathname: string, navByLevel: NavByLevel): NavLocation {
  const segs = pathname.split("/").filter(Boolean);
  if (segs.length === 0 || segs.length > 3) return {};
  const [levelSeg, categorySeg, topicSeg] = segs;
  if (!Object.hasOwn(navByLevel, levelSeg)) return {};
  const level = levelSeg as Level;
  if (!categorySeg) return { level };
  const group = navByLevel[level]?.find((g) => g.category === categorySeg);
  if (!group) return {};
  if (!topicSeg) return { level, category: group.category };
  const href = `/${level}/${group.category}/${topicSeg}/`;
  return group.topics.some((t) => t.href === href)
    ? { level, category: group.category, topicHref: href }
    : {};
}
