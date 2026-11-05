import { allTopics } from "@/content/registry";

interface Entry {
  slug: string;
  answer: number;
  last: number;
}

function choicesByLevel(): Map<string, Entry[]> {
  const byLevel = new Map<string, Entry[]>();
  for (const topic of allTopics) {
    for (const q of topic.quiz) {
      if (q.kind !== "choice") continue;
      const list = byLevel.get(topic.level) ?? [];
      list.push({ slug: topic.slug, answer: q.answer, last: q.options.length - 1 });
      byLevel.set(topic.level, list);
    }
  }
  return byLevel;
}

describe("choice answer positions", () => {
  const byLevel = choicesByLevel();

  it("never repeats one answer index across all choice questions of a topic", () => {
    const offenders: string[] = [];
    for (const [level, entries] of byLevel) {
      const bySlug = new Map<string, number[]>();
      for (const e of entries) bySlug.set(e.slug, [...(bySlug.get(e.slug) ?? []), e.answer]);
      for (const [slug, answers] of bySlug) {
        if (answers.length >= 2 && new Set(answers).size === 1) {
          offenders.push(`${level}/${slug} (all ${answers[0]})`);
        }
      }
    }
    expect(offenders, `Topics with every choice answer at the same index: ${offenders.join(", ")}`).toEqual([]);
  });

  it("keeps any single index at or below 50% of a level's choice answers", () => {
    const offenders: string[] = [];
    for (const [level, entries] of byLevel) {
      const counts = new Map<number, number>();
      for (const e of entries) counts.set(e.answer, (counts.get(e.answer) ?? 0) + 1);
      for (const [index, count] of counts) {
        if (count / entries.length > 0.5) {
          const topics = [...new Set(entries.filter((e) => e.answer === index).map((e) => e.slug))];
          offenders.push(`${level}: index ${index} holds ${count}/${entries.length} (${topics.join(", ")})`);
        }
      }
    }
    expect(offenders, offenders.join("; ")).toEqual([]);
  });

  it("uses both the first and the last position in levels with at least 6 choice questions", () => {
    const offenders: string[] = [];
    for (const [level, entries] of byLevel) {
      if (entries.length < 6) continue;
      if (!entries.some((e) => e.answer === 0)) offenders.push(`${level}: no answer at index 0`);
      if (!entries.some((e) => e.answer === e.last)) offenders.push(`${level}: no answer at its last index`);
    }
    expect(offenders, offenders.join("; ")).toEqual([]);
  });
});
