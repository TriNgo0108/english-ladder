import { allTopics, findTopic, siblingsAcrossLevels, topicsByLevelAndCategory } from "@/content/registry";
import { parseTopic, type CategorySlug, type Level, type Question, type SetTopic } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { b1Topics } from ".";
import { collocations } from "./phrases/collocations";
import { idioms } from "./phrases/idioms";
import { inTimeAndOnTime } from "./phrases/in-time-and-on-time";
import { phrasalVerbsInseparable } from "./phrases/phrasal-verbs-inseparable";
import { phrasalVerbsSeparable } from "./phrases/phrasal-verbs-separable";
import { prepositionsOfMovement } from "./phrases/prepositions-of-movement";

const orderedSlugs = [
  "phrasal-verbs-separable",
  "phrasal-verbs-inseparable",
  "collocations",
  "idioms",
  "prepositions-of-movement",
  "in-time-and-on-time",
];

const topics: SetTopic[] = [
  phrasalVerbsSeparable,
  phrasalVerbsInseparable,
  collocations,
  idioms,
  prepositionsOfMovement,
  inTimeAndOnTime,
];

function gap(questions: Question[], stemPart: string) {
  const q = questions.find((x) => x.kind === "gap" && x.stem.includes(stemPart));
  if (q?.kind !== "gap") throw new Error(`gap containing "${stemPart}" missing`);
  return q.answers;
}

function wordbankAnswers(questions: Question[]) {
  return questions.flatMap((x) => (x.kind === "wordbank" ? [x.answer] : []));
}

function wrongToken(questions: Question[]) {
  const q = questions.find((x) => x.kind === "mistake");
  return q?.kind === "mistake" ? [q.tokens[q.wrongIndex], q.correction] : undefined;
}

function choiceAnswer(questions: Question[], stemPart: string) {
  const q = questions.find((x) => x.kind === "choice" && x.stem.includes(stemPart));
  if (q?.kind !== "choice") throw new Error(`choice containing "${stemPart}" missing`);
  return q.options[q.answer];
}

function expectGap(accepted: string[], right: string[], wrong: string[]) {
  for (const typed of right) expect(matchesGap(typed, accepted), `accepts "${typed}"`).toBe(true);
  for (const typed of wrong) expect(matchesGap(typed, accepted), `rejects "${typed}"`).toBe(false);
}

const ids = (level: Level, category: CategorySlug, slug: string) => {
  const found = findTopic(level, category, slug);
  if (!found) throw new Error(`${level}/${slug} missing`);
  return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
};

const plain = (s: string) => s.replace(/<\/?b>/g, "").replace(/\s+/g, " ").trim().toLowerCase();

/** Every finished answer sentence of a topic: gaps filled with their first answer, wordbank answers, corrected mistakes. */
function answerSentences(t: SetTopic) {
  return t.quiz.flatMap((q) => {
    if (q.kind === "gap") return [q.stem.replace(/\s*\([^)]*\)\s*$/, "").replace("___", q.answers[0])];
    if (q.kind === "wordbank") return [q.answer];
    if (q.kind === "mistake") return [q.tokens.map((tok, i) => (i === q.wrongIndex ? q.correction : tok)).join(" ")];
    return [];
  });
}

describe("B1 Phrases & Expressions (part 6)", () => {
  it("registers orders 27-32 in sequence, each a phrases set topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "phrases", slug);
      expect(found?.order, slug).toBe(i + 27);
      expect(found?.shape).toBe("set");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(26, 32).map((t) => t.slug)).toEqual(orderedSlugs);
    expect(topicsByLevelAndCategory("b1", "phrases").map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("makes these the first phrases topics on the site", () => {
    const phrases = allTopics.filter((t) => t.category === "phrases");
    expect(phrases.map((t) => `${t.level}/${t.slug}`)).toEqual(orderedSlugs.map((s) => `b1/${s}`));
  });

  it("pins the families: collocations, idioms and the two preposition chains explicit, none for the phrasal verbs", () => {
    expect(phrasalVerbsSeparable.family).toBeUndefined();
    expect(phrasalVerbsInseparable.family).toBeUndefined();
    expect(collocations.family).toBe("collocations");
    expect(idioms.family).toBe("idioms");
    expect(prepositionsOfMovement.family).toBe("prepositions-of-place");
    expect(inTimeAndOnTime.family).toBe("prepositions-of-time");
  });

  it("links A1 prepositions of place and time to their B1 topics both ways, and gives the rest no siblings yet", () => {
    expect(ids("a1", "grammar", "prepositions-of-place")).toEqual(["b1/prepositions-of-movement"]);
    expect(ids("b1", "phrases", "prepositions-of-movement")).toEqual(["a1/prepositions-of-place"]);
    expect(ids("a1", "grammar", "prepositions-of-time")).toEqual(["b1/in-time-and-on-time"]);
    expect(ids("b1", "phrases", "in-time-and-on-time")).toEqual(["a1/prepositions-of-time"]);
    for (const slug of ["phrasal-verbs-separable", "phrasal-verbs-inseparable", "collocations", "idioms"]) {
      expect(ids("b1", "phrases", slug), slug).toEqual([]);
    }
  });

  it("gives each topic about five questions, a short summary, and scrambles every wordbank", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("keeps every set between 6 and 30 entries, with distinct headwords, no IPA, and the headword bolded in use", () => {
    for (const t of topics) {
      expect(t.entries.length, t.slug).toBeGreaterThanOrEqual(6);
      expect(t.entries.length, t.slug).toBeLessThanOrEqual(30);
      const heads = t.entries.map((e) => e.headword);
      expect(new Set(heads).size, t.slug).toBe(heads.length);
      for (const e of t.entries) {
        expect(e.ipa, e.headword).toBeUndefined();
        expect(e.inUse, e.headword).toMatch(/<b>.+<\/b>/);
        expect(e.gloss, e.headword).not.toMatch(/[<>]/);
      }
      expect(t.explanation, t.slug).not.toContain("/ /");
    }
  });

  it("never copies a quiz answer word for word from the topic's entries or explanation", () => {
    for (const t of topics) {
      const source = plain([t.explanation, ...t.entries.map((e) => e.inUse)].join(" "));
      for (const sentence of answerSentences(t)) expect(source, `${t.slug}: ${sentence}`).not.toContain(plain(sentence));
    }
  });

  it("defines phrasal verb, particle and collocation once, and reuses the earlier wording for object, pronoun, gerund, base form and preposition", () => {
    expect(phrasalVerbsSeparable.explanation).toContain("A <b>phrasal verb</b> is");
    expect(phrasalVerbsSeparable.explanation).toContain("is called the <b>particle</b>");
    expect(phrasalVerbsSeparable.explanation).toContain("Remember: the object is the person or thing that the action goes to.");
    expect(phrasalVerbsSeparable.explanation).toContain("Remember: a pronoun is a short word that we use in place of a noun.");
    expect(phrasalVerbsInseparable.explanation).toContain("Remember: a phrasal verb is");
    expect(phrasalVerbsInseparable.explanation).toContain(
      "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    );
    expect(collocations.explanation).toContain("A <b>collocation</b> is");
    expect(prepositionsOfMovement.explanation).toContain(
      "Remember: a preposition is a small word, like in, on or under, that goes before a noun.",
    );
    expect(inTimeAndOnTime.explanation).toContain(
      "Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    );
    const others = allTopics.filter((t) => t.slug !== "phrasal-verbs-separable" && t.slug !== "collocations");
    for (const t of others) {
      expect(t.explanation, t.slug).not.toContain("A <b>phrasal verb</b> is");
      expect(t.explanation, t.slug).not.toContain("A <b>collocation</b> is");
    }
  });

  it("states the pronoun rule, hedges the noun-object rule, and wordbanks only pronoun objects", () => {
    expect(phrasalVerbsSeparable.explanation).toContain("turn it off");
    expect(phrasalVerbsSeparable.explanation).toContain("not turn off it");
    expect(phrasalVerbsSeparable.explanation).toContain("can usually go");
    expect(wordbankAnswers(phrasalVerbsSeparable.quiz)).toEqual(["Can you pick them up?"]);
    expect(wordbankAnswers(phrasalVerbsInseparable.quiz)).toEqual(["Who's going to look after them?"]);
    for (const t of [collocations, idioms, prepositionsOfMovement, inTimeAndOnTime]) {
      expect(wordbankAnswers(t.quiz), t.slug).toEqual([]);
    }
  });

  it("pins the separable phrasal verb choices and gaps", () => {
    expect(choiceAnswer(phrasalVerbsSeparable.quiz, "coat")).toBe("Put on");
    expect(choiceAnswer(phrasalVerbsSeparable.quiz, "Which one is wrong")).toBe("She picked up her.");
    const fill = gap(phrasalVerbsSeparable.quiz, "form");
    expect(fill).toEqual(["in", "out"]);
    expectGap(fill, ["in", "In", "out"], ["up", "on", "it in", "off"]);
    const up = gap(phrasalVerbsSeparable.quiz, "very quiet");
    expect(up).toEqual(["up"]);
    expectGap(up, ["up", "Up"], ["down", "on", "off", "louder"]);
  });

  it("pins the inseparable phrasal verb choices and gaps, with look forward to + gerund", () => {
    expect(choiceAnswer(phrasalVerbsInseparable.quiz, "same eyes")).toBe("takes after");
    expect(choiceAnswer(phrasalVerbsInseparable.quiz, "came across")).toBe("found it by chance");
    const after = gap(phrasalVerbsInseparable.quiz, "our cat");
    expect(after).toEqual(["after"]);
    expectGap(after, ["after", "After"], ["for", "at", "out", "to"]);
    const on = gap(phrasalVerbsInseparable.quiz, "new boss");
    expect(on).toEqual(["on", "along"]);
    expectGap(on, ["on", "along", "On"], ["in", "up", "off", "together"]);
    expect(phrasalVerbsInseparable.explanation).toContain("looking forward to");
  });

  it("pins the collocation choices and gaps, and never tests make or take a decision", () => {
    expect(choiceAnswer(collocations.quiz, "party")).toBe("Have");
    expect(choiceAnswer(collocations.quiz, "traffic")).toBe("heavy");
    expect(choiceAnswer(collocations.quiz, "sleep")).toBe("strong");
    const doGap = gap(collocations.quiz, "homework");
    expect(doGap).toEqual(["do"]);
    expectGap(doGap, ["do", "Do"], ["make", "have", "doing", "did"]);
    const take = gap(collocations.quiz, "photo");
    expect(take).toEqual(["take"]);
    expectGap(take, ["take", "Take"], ["have", "make", "do", "took"]);
    expect(JSON.stringify(collocations.quiz)).not.toMatch(/decision/i);
    expect(collocations.explanation).toContain("take a decision");
  });

  it("pins the idiom choices and gaps", () => {
    expect(choiceAnswer(idioms.quiz, "driving test")).toBe("a piece of cake");
    expect(choiceAnswer(idioms.quiz, "Italian or Chinese")).toBe("It's up to you.");
    expect(choiceAnswer(idioms.quiz, "Make yourself at home")).toBe("Relax and feel comfortable here.");
    const changed = gap(idioms.quiz, "my mind");
    expect(changed).toEqual(["changed"]);
    expectGap(changed, ["changed", "Changed"], ["change", "made", "turned", "changed up"]);
    const hand = gap(idioms.quiz, "boxes");
    expect(hand).toEqual(["hand"]);
    expectGap(hand, ["hand", "Hand"], ["help", "lift", "hands", "arm"]);
  });

  it("pins the prepositions of movement choices and gaps, accepting over with across", () => {
    expect(choiceAnswer(prepositionsOfMovement.quiz, "jumped")).toBe("onto");
    expect(choiceAnswer(prepositionsOfMovement.quiz, "tunnel")).toBe("through");
    expect(choiceAnswer(prepositionsOfMovement.quiz, "stopped before")).toBe("towards");
    const across = gap(prepositionsOfMovement.quiz, "swim");
    expect(across).toEqual(["across", "over"]);
    expectGap(across, ["across", "Across", "over"], ["along", "into", "through", "on"]);
    const past = gap(prepositionsOfMovement.quiz, "post office");
    expect(past).toEqual(["past", "by"]);
    expectGap(past, ["past", "Past", "by"], ["passed", "pass", "into", "through"]);
    expect(prepositionsOfMovement.explanation).toContain("<b>Over</b> often means the same");
  });

  it("pins the in time and on time choices and gaps", () => {
    expect(choiceAnswer(inTimeAndOnTime.quiz, "concert")).toBe("on time");
    expect(choiceAnswer(inTimeAndOnTime.quiz, "on the phone")).toBe("at the moment");
    expect(choiceAnswer(inTimeAndOnTime.quiz, "for an hour")).toBe("At last");
    const inTime = gap(inTimeAndOnTime.quiz, "popcorn");
    expect(inTime).toEqual(["in"]);
    expectGap(inTime, ["in", "In"], ["on", "at", "in a"]);
    const inTheEnd = gap(inTimeAndOnTime.quiz, "flats");
    expect(inTheEnd).toEqual(["in"]);
    expectGap(inTheEnd, ["in", "In"], ["at", "on", "by"]);
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(phrasalVerbsSeparable.quiz)).toEqual(["on", "up"]);
    expect(wrongToken(phrasalVerbsInseparable.quiz)).toEqual(["see", "seeing"]);
    expect(wrongToken(collocations.quiz)).toEqual(["did", "made"]);
    expect(wrongToken(idioms.quiz)).toEqual(["head.", "heart."]);
    expect(wrongToken(prepositionsOfMovement.quiz)).toEqual(["from", "of"]);
    expect(wrongToken(inTimeAndOnTime.quiz)).toEqual(["in", "on"]);
  });
});
