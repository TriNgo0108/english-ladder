import { allTopics, findTopic } from "@/content/registry";
import { parseTopic, type PhraseTopic } from "@/content/schema";
import { c1Topics } from ".";
import { concessiveClauses } from "./grammar/concessive-clauses";
import { discourseMarkersAndCohesion } from "./grammar/discourse-markers-and-cohesion";
import { registerAndFormalityShifts } from "./grammar/register-and-formality-shifts";
import { choiceAnswer, distractors, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

type Register = PhraseTopic["situations"][number]["register"];

const orderedSlugs = ["concessive-clauses", "discourse-markers-and-cohesion", "register-and-formality-shifts"];

const topics = [concessiveClauses, discourseMarkersAndCohesion, registerAndFormalityShifts];

const remember = {
  clause: "Remember: a clause is a group of words with a subject and a verb.",
  subject: "Remember: the subject is the person or thing that the sentence is about.",
  fronting: "Remember: putting a word or phrase at the start of the sentence, when it would usually come later, is called fronting.",
  adjective: "Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.",
  gerund: "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
  concession: "Remember: accepting that one fact is true, while saying that it doesn't change your main point, is called concession.",
  ellipsis: "Remember: leaving out words that the listener can understand from what came before is called ellipsis.",
  substitution: "Remember: using a short word like so, do or one in place of a longer phrase is called substitution.",
  nominalisation: "Remember: turning a verb or an adjective into a noun, so that an action or a quality becomes a thing, is called nominalisation.",
  pronoun: "Remember: a pronoun is a short word that we use in place of a noun.",
  register: "Remember: register means how formal or informal your words are.",
  phrasalVerb: "Remember: a phrasal verb is a verb and a small word, like up, off, on or out, that we use together, often with a new meaning.",
  pastParticiple: "Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
};

/** Phrases that the register topic labels in its explanation as "phrase (label)", with the stem used to find the same phrase at A1-B2. */
const labelled: Array<[phrase: string, label: Register, stem: string]> = [
  ["We regret to inform you that the event has been cancelled.", "formal", "we regret to inform you that"],
  ["I'm sorry to say that the event has been cancelled.", "neutral", "i'm sorry to say"],
  ["Bad news, I'm afraid: the event's off.", "informal", "bad news, i'm afraid"],
  ["I would be grateful if you could send me the timetable.", "formal", "i would be grateful if you could"],
  ["Could you send me the timetable, please?", "neutral", "could you send me the timetable, please"],
  ["Any chance you could send me the timetable?", "informal", "any chance you could"],
  ["I look forward to hearing from you.", "formal", "i look forward to hearing from you"],
  ["Thanks for your message.", "informal", "thanks for your message"],
];

describe("C1 grammar, part 3 (concessive clauses, discourse markers and cohesion, register and formality shifts)", () => {
  it("registers orders 9-11 in sequence after part 2, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("c1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 9);
      expect(found?.shape).toBe("rule");
      expect(found?.category).toBe("grammar");
      expect(found?.level).toBe("c1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(c1Topics.slice(8, 11).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "concessive-clauses": 8,
      "discourse-markers-and-cohesion": 8,
      "register-and-formality-shifts": 7,
    });
  });

  it("quotes the B1 linking-words However sentence exactly", () => {
    const quoted = "The town is small. However, it has a great cinema.";
    expect(plain(concessiveClauses.explanation)).toContain(plain(quoted));
    expect(plain(findTopic("b1", "grammar", "linking-words")?.explanation ?? "")).toContain(plain(quoted));
  });

  it("never calls it + a passive verb + a that clause an impersonal passive in any C1 topic", () => {
    for (const t of c1Topics) expect(JSON.stringify(t).toLowerCase(), t.slug).not.toContain("impersonal passive");
    expect(plain(registerAndFormalityShifts.explanation)).toContain("it + a passive verb + a that clause (order 3)");
  });

  it("pins the families: none for order 9, linking-words for order 10, register for order 11", () => {
    expect(concessiveClauses.family).toBeUndefined();
    expect(discourseMarkersAndCohesion.family).toBe("linking-words");
    expect(registerAndFormalityShifts.family).toBe("register");
  });

  it("links the linking-words chain A2 -> B1 -> B2 -> C1 and the register chain B1 -> C1 in CEFR order on every page, and gives concessive clauses no siblings", () => {
    expect(ids("c1", "grammar", "concessive-clauses")).toEqual([]);
    expect(ids("c1", "grammar", "discourse-markers-and-cohesion")).toEqual(["a2/and-but-so-because", "b1/linking-words", "b2/advanced-linkers"]);
    expect(ids("a2", "grammar", "and-but-so-because")).toEqual(["b1/linking-words", "b2/advanced-linkers", "c1/discourse-markers-and-cohesion"]);
    expect(ids("b1", "grammar", "linking-words")).toEqual(["a2/and-but-so-because", "b2/advanced-linkers", "c1/discourse-markers-and-cohesion"]);
    expect(ids("b2", "grammar", "advanced-linkers")).toEqual(["a2/and-but-so-because", "b1/linking-words", "c1/discourse-markers-and-cohesion"]);
    expect(ids("c1", "grammar", "register-and-formality-shifts")).toEqual(["b1/formal-and-informal-register"]);
    expect(ids("b1", "writing", "formal-and-informal-register")).toEqual(["c1/register-and-formality-shifts"]);
  });

  it("gives each topic 5-8 questions with at least 2 mistake items, 3+ examples, a short summary that doesn't open with a definition, and a pitfall", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.quiz.length, t.slug).toBeLessThanOrEqual(8);
      expect(t.quiz.filter((q) => q.kind === "mistake").length, t.slug).toBeGreaterThanOrEqual(2);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      expect(t.summary, t.slug).not.toMatch(/^[\w -]{0,40}(is|are|means) (a|an|the|when|how)/i);
      expect(t.pitfall, t.slug).toBeDefined();
    }
  });

  it("never copies a pitfall sentence into the quiz", () => {
    const plainText = (s: string) => s.replace(/<\/?b>/g, "");
    for (const t of topics) {
      const pitfall = [plainText(t.pitfall!.wrong), ...plainText(t.pitfall!.right).split(" · ")];
      for (const q of t.quiz) {
        const shown = q.kind === "mistake" ? q.tokens.join(" ") : q.kind === "wordbank" ? q.answer : [q.stem, ...(q.kind === "choice" ? q.options : [])].join(" ");
        for (const p of pitfall) expect(shown, t.slug).not.toContain(p);
      }
    }
  });

  it("pins every wordbank answer: one in concessive clauses, scrambled, and none in the other two", () => {
    expect(wordbankAnswers(concessiveClauses.quiz)).toEqual(["Much as I'd like to help, I'm too busy."]);
    expect(wordbankAnswers(discourseMarkersAndCohesion.quiz)).toEqual([]);
    expect(wordbankAnswers(registerAndFormalityShifts.quiz)).toEqual([]);
    for (const t of topics) {
      for (const q of t.quiz) if (q.kind === "wordbank") expect(q.words.join(" "), t.slug).not.toBe(q.answer);
    }
  });

  it("pins the concession gaps: although, though and even though all accepted (sweep risk), even if for a possibility, however + adjective", () => {
    const q = concessiveClauses.quiz;
    const although = gap(q, "early reviews were poor");
    expect(although).toEqual(["although", "though", "even though", "despite the fact that", "in spite of the fact that"]);
    expectGap(although, ["although", "Though", "even though", "despite the fact that", "in spite of the fact that"], ["despite", "despite of", "but", "however", "in spite of"]);
    const ifGap = gap(q, "to the beach tomorrow");
    expect(ifGap).toEqual(["if"]);
    expectGap(ifGap, ["if"], ["though", "although", "when", "so"]);
    const however = gap(q, "hard she works");
    expect(however).toEqual(["However"]);
    expectGap(however, ["However", "however"], ["How", "Although", "Much", "No matter"]);
  });

  it("pins the concession choice and its classic distractors (Although … but, Much as … but, Despite + clause)", () => {
    const q = concessiveClauses.quiz;
    expect(choiceAnswer(q, "Which sentence is correct?", "Small as")).toBe("Small as the flat is, it's very bright.");
    expect(distractors(concessiveClauses)).toEqual([
      "Although the flat is small, but it's very bright.",
      "Much as I like the flat, but it's too small.",
      "Despite the flat is small, it's very bright.",
    ]);
  });

  it("pins the discourse marker gaps, with every defensible substitute for the repeated action", () => {
    const q = discourseMarkersAndCohesion.quiz;
    const are = gap(q, "As far as the costs");
    expect(are).toEqual(["are"]);
    expectGap(are, ["are"], ["is", "were", "be"]);
    const that = gap(q, "said, we mustn't touch");
    expect(that).toEqual(["That"]);
    expectGap(that, ["That", "that"], ["It", "Having", "Being"]);
    const so = gap(q, "repair the bridge");
    expect(so).toEqual(["so", "it", "that", "this"]);
    expectGap(so, ["so", "it", "that", "this"], ["one", "them", "do"]);
  });

  it("pins the discourse choices: on the contrary to contradict, and a summary noun that fits the sentence before", () => {
    const q = discourseMarkersAndCohesion.quiz;
    expect(choiceAnswer(q, "I suppose the film was boring")).toBe("On the contrary,");
    expect(choiceAnswer(q, "rent a flat in the city")).toBe("problem");
    expect(distractors(discourseMarkersAndCohesion)).toEqual(
      ["On the other hand,", "In other words,", "That said,", "advantage", "decision", "success"],
    );
  });

  it("pins the register gaps: each cue names the formal form, and the feedback says the other form is fine in speech", () => {
    const q = registerAndFormalityShifts.quiz;
    const require = gap(q, "a valid ticket");
    expect(require).toEqual(["require"]);
    expectGap(require, ["require"], ["need", "requires", "must"]);
    const willNot = gap(q, "be able to attend the ceremony");
    expect(willNot).toEqual(["will not"]);
    expectGap(willNot, ["will not", "Will not"], ["won't", "can't", "will", "may not"]);
    const hasBeen = gap(q, "decided that the office will close");
    expect(hasBeen).toEqual(["has been"]);
    expectGap(hasBeen, ["has been"], ["'s been", "have been", "was"]);
    for (const item of q) {
      if (item.kind === "gap") {
        expect(item.stem, item.stem).toMatch(/^(A formal|Informal: .* → Formal)/);
        expect(item.feedback, item.stem).toMatch(/is also correct|are also correct|is fine/);
      }
    }
  });

  it("pins the register choices: each names the reader and the channel, so exactly one option fits", () => {
    const q = registerAndFormalityShifts.quiz;
    expect(choiceAnswer(q, "a bank to a customer")).toBe("We regret to inform you that your loan application has been unsuccessful.");
    expect(choiceAnswer(q, "a text message to a close friend")).toBe("So sorry, can't make it tonight! Have fun!");
    for (const item of q) {
      if (item.kind === "choice") expect(item.stem, item.stem).toMatch(/You are (writing|sending) .* to /);
    }
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(concessiveClauses.quiz)).toEqual([
      ["Despite", "Although"],
      ["although.", "though."],
      ["like", "as"],
    ]);
    expect(mistakes(discourseMarkersAndCohesion.quiz)).toEqual([
      ["concern,", "concerned,"],
      ["contrary,", "other hand,"],
      ["This", "These"],
    ]);
    expect(mistakes(registerAndFormalityShifts.quiz)).toEqual([
      ["Cheers,", "Yours faithfully,"],
      ["kids", "children"],
    ]);
  });

  it("pins the mistake sentences", () => {
    const sentences = (t: (typeof topics)[number]) => t.quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
    expect(sentences(concessiveClauses)).toEqual([
      "Despite she was exhausted, she finished the race.",
      "The food was great. The service was slow, although.",
      "Tired like she was, she kept walking until midnight.",
    ]);
    expect(sentences(discourseMarkersAndCohesion)).toEqual([
      "As far as the budget is concern, we still have plenty of money.",
      "The flat is very small. On the contrary, it's in a great location.",
      "Taxes have gone up and wages have fallen. This changes have hit young families hardest.",
    ]);
    expect(sentences(registerAndFormalityShifts)).toEqual([
      "Dear Sir or Madam, I am writing to enquire about your evening courses. Cheers, Anna Novak",
      "The committee's report concludes that the policy has significantly benefited kids in rural areas.",
    ]);
  });

  it("keeps register labels consistent with earlier topics", () => {
    const text = plain(registerAndFormalityShifts.explanation);
    const norm = (s: string) => plain(s).replace(/[.?!,…\s]+$/, "");
    const earlier = allTopics.filter((t): t is PhraseTopic => t.shape === "phrases" && t.level !== "c1");
    const matched: string[] = [];
    for (const [phrase, label, stem] of labelled) {
      expect(text, phrase).toContain(`${plain(phrase)} (${label})`);
      for (const t of earlier) {
        for (const s of t.situations) {
          for (const p of s.phrases) {
            if (!norm(p).startsWith(stem)) continue;
            expect(s.register, `${t.level}/${t.slug}: ${p}`).toBe(label);
            if (!matched.includes(stem)) matched.push(stem);
          }
        }
      }
    }
    expect(matched).toEqual([
      "we regret to inform you that",
      "i would be grateful if you could",
      "could you send me the timetable, please",
      "any chance you could",
      "i look forward to hearing from you",
      "thanks for your message",
    ]);
    for (const t of earlier) {
      for (const s of t.situations) {
        for (const p of s.phrases) if (/regret to inform/i.test(p)) expect(s.register, `${t.slug}: ${p}`).toBe("formal");
      }
    }
  });

  it("defines the new terms once, reuses earlier wording exactly, hedges the variation, and records the source calls", () => {
    const con = concessiveClauses.explanation;
    for (const r of [remember.clause, remember.subject, remember.fronting, remember.gerund]) expect(con).toContain(r);
    expect(con).toContain("a contrast (a different or unexpected idea)");
    expect(con).toContain("is called <b>concession</b>");
    expect(con).toContain("is called a <b>concessive clause</b>");
    expect(plain(con)).toContain("as at b1, though is more informal, and even though is a bit stronger");
    expect(plain(con)).toContain("although and even though can't go at the end");
    expect(plain(con)).toContain("in american english, as tired as she was is also used");
    expect(plain(con)).toContain("despite he was tired");

    const dis = discourseMarkersAndCohesion.explanation;
    for (const r of [remember.concession, remember.ellipsis, remember.substitution, remember.nominalisation, remember.pronoun]) expect(dis).toContain(r);
    expect(dis).toContain("is called a <b>discourse marker</b>");
    expect(dis).toContain("is called <b>cohesion</b>");
    expect(plain(dis)).toContain("on the contrary and on the other hand are not the same");
    expect(plain(dis)).toContain("as far as i'm concerned is different");

    const reg = registerAndFormalityShifts.explanation;
    for (const r of [remember.register, remember.nominalisation, remember.phrasalVerb, remember.ellipsis, remember.pastParticiple]) expect(reg).toContain(r);
    expect(plain(reg)).toContain("formal is not always better");
    expect(plain(reg)).toContain("in most writing, start or begin is better");

    expect(concessiveClauses.sourceNotes).toContain("(a new point in spec section 8)");
    expect(discourseMarkersAndCohesion.sourceNotes).toContain("# Linking expression");
    expect(registerAndFormalityShifts.sourceNotes).toContain("# Formal and informal phrases");
    expect(registerAndFormalityShifts.sourceNotes).toContain("# Polite vs direct");
    for (const t of topics) {
      expect(t.sourceNotes, t.slug).toContain("Swan");
      expect(t.levelRationale, t.slug).toContain("English Grammar Profile");
    }
  });

  it("defines each new term in bold only once across C1 so far", () => {
    const all = c1Topics.map((t) => t.explanation).join("\n");
    for (const term of ["concession", "concessive clause", "discourse marker", "cohesion", "fronting", "ellipsis", "substitution", "nominalisation"]) {
      expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
    }
  });
});
