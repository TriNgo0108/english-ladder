import { a1Topics } from "./a1";
import {
  CategorySlugSchema,
  LevelSchema,
  parseTopic,
  type CategorySlug,
  type Level,
  type Topic,
} from "./schema";

const LEVELS = LevelSchema.options;
const CATEGORIES = CategorySlugSchema.options;

/** The key that links a topic to its counterparts at other levels. */
const familyKey = (t: Topic): string => t.family ?? t.slug;

function groupByLevel(topics: Topic[]): Map<Level, Topic[]> {
  const groups = new Map<Level, Topic[]>();
  for (const t of topics) {
    const list = groups.get(t.level);
    if (list) list.push(t);
    else groups.set(t.level, [t]);
  }
  return groups;
}

function corpusProblems(topics: Topic[]): string[] {
  const problems: string[] = [];
  const groups = groupByLevel(topics);
  for (const level of LEVELS) {
    const inLevel = groups.get(level) ?? [];
    if (inLevel.length === 0) continue;

    const seenSlugs = new Set<string>();
    const reportedSlugs = new Set<string>();
    const orderCounts = new Map<number, number>();
    const byFamily = new Map<string, Topic[]>();
    for (const t of inLevel) {
      const members = byFamily.get(familyKey(t));
      if (members) members.push(t);
      else byFamily.set(familyKey(t), [t]);
      if (seenSlugs.has(t.slug) && !reportedSlugs.has(t.slug)) {
        reportedSlugs.add(t.slug);
        problems.push(`Level ${level}: duplicate slug "${t.slug}"`);
      }
      seenSlugs.add(t.slug);
      orderCounts.set(t.order, (orderCounts.get(t.order) ?? 0) + 1);
    }
    for (const [key, members] of byFamily) {
      if (members.length > 1) {
        problems.push(
          `Level ${level}: duplicate family '${key}' at ${level}: ${members.map((t) => t.slug).join(", ")}`,
        );
      }
    }
    for (const [order, count] of orderCounts) {
      if (count > 1) {
        const slugs = inLevel.filter((t) => t.order === order).map((t) => `"${t.slug}"`);
        problems.push(`Level ${level}: duplicate order ${order} (${slugs.join(", ")})`);
      }
    }

    const orders = [...orderCounts.keys()].sort((a, b) => a - b);
    if (orders[0] !== 1) {
      problems.push(`Level ${level}: order must start at 1 (found ${orders[0]})`);
    }
    for (let i = 1; i < orders.length; i++) {
      if (orders[i] - orders[i - 1] > 1) {
        problems.push(
          `Level ${level}: gap in order sequence between ${orders[i - 1]} and ${orders[i]}`,
        );
      }
    }
  }
  return problems;
}

/** Throws once, listing every cross-topic problem (not just the first). */
export function validateCorpus(topics: Topic[]): void {
  const problems = corpusProblems(topics);
  if (problems.length > 0) throw new Error(problems.join("\n"));
}

/** Parses every raw topic, then validates the corpus; reports all failures in one error. */
export function loadCorpus(rawTopics: unknown[]): Topic[] {
  const problems: string[] = [];
  const parsed: Topic[] = [];
  for (const input of rawTopics) {
    try {
      parsed.push(parseTopic(input));
    } catch (e) {
      problems.push((e as Error).message);
    }
  }
  problems.push(...corpusProblems(parsed));
  if (problems.length > 0) throw new Error(problems.join("\n"));
  return parsed;
}

const byOrder = (a: Topic, b: Topic) => a.order - b.order;

export function createRegistry(topics: Topic[]) {
  const allTopics = topics;

  function topicsByLevel(level: Level): Topic[] {
    return allTopics.filter((t) => t.level === level).sort(byOrder);
  }
  function topicsByLevelAndCategory(level: Level, category: CategorySlug): Topic[] {
    return topicsByLevel(level).filter((t) => t.category === category);
  }
  function findTopic(level: Level, category: CategorySlug, slug: string): Topic | undefined {
    return allTopics.find((t) => t.level === level && t.category === category && t.slug === slug);
  }
  /** Same-family topics (family, else slug) at other levels, in CEFR order; excludes the argument. */
  function siblingsAcrossLevels(topic: Topic): Topic[] {
    const key = familyKey(topic);
    return allTopics
      .filter((t) => familyKey(t) === key && t !== topic)
      .sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level));
  }
  function adjacentTopics(topic: Topic): { prev?: Topic; next?: Topic } {
    const ordered = topicsByLevel(topic.level);
    const i = ordered.indexOf(topic);
    if (i === -1) return {};
    return { prev: ordered[i - 1], next: ordered[i + 1] };
  }
  function populatedCategoryPairs(): Array<{ level: Level; category: CategorySlug }> {
    const pairs: Array<{ level: Level; category: CategorySlug }> = [];
    for (const level of LEVELS) {
      for (const category of CATEGORIES) {
        if (allTopics.some((t) => t.level === level && t.category === category)) {
          pairs.push({ level, category });
        }
      }
    }
    return pairs;
  }

  return {
    allTopics,
    topicsByLevel,
    topicsByLevelAndCategory,
    findTopic,
    siblingsAcrossLevels,
    adjacentTopics,
    populatedCategoryPairs,
  };
}

const registry = createRegistry(loadCorpus([...a1Topics]));

export const {
  allTopics,
  topicsByLevel,
  topicsByLevelAndCategory,
  findTopic,
  siblingsAcrossLevels,
  adjacentTopics,
  populatedCategoryPairs,
} = registry;
