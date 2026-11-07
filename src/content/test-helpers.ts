import { findTopic, siblingsAcrossLevels } from "@/content/registry";
import type { CategorySlug, Level, Question, Topic } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { expect } from "vitest";

export function gap(questions: Question[], stemPart: string): string[] {
  const q = questions.find((x) => x.kind === "gap" && x.stem.includes(stemPart));
  if (q?.kind !== "gap") throw new Error(`gap containing "${stemPart}" missing`);
  return q.answers;
}

export function wordbankAnswer(questions: Question[]): string | undefined {
  const q = questions.find((x) => x.kind === "wordbank");
  return q?.kind === "wordbank" ? q.answer : undefined;
}

export function wordbankAnswers(questions: Question[]): string[] {
  return questions.flatMap((x) => (x.kind === "wordbank" ? [x.answer] : []));
}

export function mistakeSentence(questions: Question[]): string | undefined {
  const q = questions.find((x) => x.kind === "mistake");
  return q?.kind === "mistake" ? q.tokens.join(" ") : undefined;
}

export function wrongToken(questions: Question[]): [string, string] | undefined {
  const q = questions.find((x) => x.kind === "mistake");
  return q?.kind === "mistake" ? [q.tokens[q.wrongIndex], q.correction] : undefined;
}

export function mistakes(questions: Question[]): Array<[string, string]> {
  return questions.flatMap((x): Array<[string, string]> => (x.kind === "mistake" ? [[x.tokens[x.wrongIndex], x.correction]] : []));
}

export function choiceAnswer(questions: Question[], stemPart: string, optionPart?: string): string {
  const q = questions.find(
    (x) => x.kind === "choice" && x.stem.includes(stemPart) && (optionPart === undefined || x.options.some((o) => o.includes(optionPart))),
  );
  if (q?.kind !== "choice") throw new Error(`choice containing "${stemPart}" missing`);
  return q.options[q.answer];
}

export function distractors(t: { quiz: Question[] }): string[] {
  return t.quiz.flatMap((x) => (x.kind === "choice" ? x.options.filter((_, i) => i !== x.answer) : []));
}

export function expectGap(accepted: string[], right: string[], wrong: string[]): void {
  for (const typed of right) expect(matchesGap(typed, accepted), `accepts "${typed}"`).toBe(true);
  for (const typed of wrong) expect(matchesGap(typed, accepted), `rejects "${typed}"`).toBe(false);
}

export function ids(level: Level, category: CategorySlug, slug: string): string[] {
  const found = findTopic(level, category, slug);
  if (!found) throw new Error(`${level}/${slug} missing`);
  return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
}

export function plain(s: string): string {
  return s.replace(/<\/?b>/g, "").replace(/\s+/g, " ").trim().toLowerCase();
}

/** Every finished answer sentence of a topic: gaps filled with their first answer, wordbank answers, corrected mistakes. */
export function answerSentences(t: Topic): string[] {
  return t.quiz.flatMap((q) => {
    if (q.kind === "gap") return [q.stem.replace(/\s*\([^)]*\)\s*$/, "").replace("___", q.answers[0])];
    if (q.kind === "wordbank") return [q.answer];
    if (q.kind === "mistake") return [q.tokens.map((tok, i) => (i === q.wrongIndex ? q.correction : tok)).join(" ")];
    return [];
  });
}

/** Every string anywhere inside a value, with its path, walking objects and arrays recursively. */
export function stringsIn(value: unknown, path: string): Array<[string, string]> {
  if (typeof value === "string") return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((v, i) => stringsIn(v, `${path}[${i}]`));
  if (value !== null && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => stringsIn(v, `${path}.${k}`));
  }
  return [];
}

/** Maps each topic's slug to its quiz length, for pinning. */
export function quizLengths(topics: Topic[]): Record<string, number> {
  return Object.fromEntries(topics.map((t) => [t.slug, t.quiz.length]));
}
