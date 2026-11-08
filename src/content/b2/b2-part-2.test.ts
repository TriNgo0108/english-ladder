import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b2Topics } from ".";
import { advancedPassiveAndReportingVerbs } from "./grammar/advanced-passive-and-reporting-verbs";
import { futureInThePast } from "./grammar/future-in-the-past";
import { reportedCommandsAdviceAndRequests } from "./grammar/reported-commands-advice-and-requests";
import { theCausative } from "./grammar/the-causative";
import { choiceAnswer, expectGap, gap, ids, mistakes, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const orderedSlugs = [
  "future-in-the-past",
  "advanced-passive-and-reporting-verbs",
  "the-causative",
  "reported-commands-advice-and-requests",
];

const topics = [futureInThePast, advancedPassiveAndReportingVerbs, theCausative, reportedCommandsAdviceAndRequests];

describe("B2 grammar, part 2 (future in the past, passives, the causative, reporting)", () => {
  it("registers orders 7-10 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b2", "grammar", slug);
      expect(found?.order, slug).toBe(i + 7);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b2");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b2Topics.slice(6, 10).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "future-in-the-past": 7,
      "advanced-passive-and-reporting-verbs": 7,
      "the-causative": 7,
      "reported-commands-advice-and-requests": 7,
    });
  });

  it("pins the families, and leaves the causative without one", () => {
    expect(futureInThePast.family).toBe("future-forms");
    expect(advancedPassiveAndReportingVerbs.family).toBe("passive");
    expect(theCausative.family).toBeUndefined();
    expect(reportedCommandsAdviceAndRequests.family).toBe("reported-speech");
  });

  it("links each B2 topic to exactly its lower-level siblings in CEFR order, and each of those back", () => {
    expect(ids("b2", "grammar", "future-in-the-past")).toEqual(["a2/will", "b1/future-continuous-and-future-perfect"]);
    expect(ids("a2", "grammar", "will")).toEqual(["b1/future-continuous-and-future-perfect", "b2/future-in-the-past"]);
    expect(ids("b1", "grammar", "future-continuous-and-future-perfect")).toEqual(["a2/will", "b2/future-in-the-past"]);
    expect(ids("b2", "grammar", "advanced-passive-and-reporting-verbs")).toEqual(["b1/the-passive"]);
    expect(ids("b1", "grammar", "the-passive")).toEqual(["b2/advanced-passive-and-reporting-verbs"]);
    expect(ids("b2", "grammar", "the-causative")).toEqual([]);
    expect(ids("b2", "grammar", "reported-commands-advice-and-requests")).toEqual(["b1/reported-speech"]);
    expect(ids("b1", "grammar", "reported-speech")).toEqual(["b2/reported-commands-advice-and-requests"]);
  });

  it("gives each topic 5-8 questions with at least 2 mistake items, 3+ examples, a short summary, and scrambled wordbanks", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.quiz.length, t.slug).toBeLessThanOrEqual(8);
      expect(t.quiz.filter((q) => q.kind === "mistake").length, t.slug).toBeGreaterThanOrEqual(2);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("never copies a pitfall sentence into the quiz", () => {
    const plainText = (s: string) => s.replace(/<\/?b>/g, "");
    for (const t of topics) {
      const pitfall = [plainText(t.pitfall!.wrong), plainText(t.pitfall!.right)];
      for (const q of t.quiz) {
        const shown = q.kind === "mistake" ? q.tokens.join(" ") : q.kind === "wordbank" ? q.answer : [q.stem, ...(q.kind === "choice" ? q.options : [])].join(" ");
        for (const p of pitfall) expect(shown, t.slug).not.toContain(p);
      }
    }
  });

  it("pins the future in the past: was going to for a plan that didn't happen, would and about to", () => {
    expect(choiceAnswer(futureInThePast.quiz, "a picnic on Sunday")).toBe("were going to have");
    expect(choiceAnswer(futureInThePast.quiz, "future seen from a time in the past")).toBe("We hoped that the rain would stop before the match.");
    const become = gap(futureInThePast.quiz, "a teacher");
    expect(become).toEqual(["would become", "'d become", "was going to become", "was to become"]);
    expectGap(become, ["would become", "’d become", "was going to become", "Would become."], ["will become", "am going to become", "would became", "became", "would to become"]);
    const leave = gap(futureInThePast.quiz, "when the phone rang");
    expect(leave).toEqual(["was about to leave", "was just about to leave"]);
    expectGap(leave, ["was about to leave", "was just about to leave"], ["am about to leave", "was about leaving", "was about to left", "was leaving"]);
    const meeting = gap(futureInThePast.quiz, "at the station at eight");
    expect(meeting).toEqual(["was meeting"]);
    expectGap(meeting, ["was meeting"], ["am meeting", "met", "was meet", "would meet", "were meeting"]);
  });

  it("pins the advanced passive gaps: modal passive, to have + past participle, and It is expected that", () => {
    expect(choiceAnswer(advancedPassiveAndReportingVerbs.quiz, "can't use the lift")).toBe("is being repaired");
    expect(choiceAnswer(advancedPassiveAndReportingVerbs.quiz, "Which sentence is correct?")).toBe("Mr Lee is said to be a millionaire.");
    const signed = gap(advancedPassiveAndReportingVerbs.quiz, "in black ink");
    expect(signed).toEqual(["must be signed"]);
    expectGap(signed, ["must be signed", "Must be signed."], ["must signed", "must be sign", "must sign", "must been signed", "must to be signed"]);
    const left = gap(advancedPassiveAndReportingVerbs.quiz, "The thief ___");
    expect(left).toEqual(["is believed to have left", "'s believed to have left"]);
    expectGap(left, ["is believed to have left", "’s believed to have left"], ["is believed to leave", "is believed to left", "was believed to have left", "is believed that he left", "believes to have left"]);
    const expected = gap(advancedPassiveAndReportingVerbs.quiz, "new bridge will open");
    expect(expected).toEqual(["is expected", "'s expected"]);
    expectGap(expected, ["is expected", "’s expected"], ["expects", "is expect", "is expecting", "was expected to"]);
  });

  it("pins the causative: who did the work, have and get + object + past participle, and something bad that happened", () => {
    expect(choiceAnswer(theCausative.quiz, "a hairdresser cut")).toBe("Mia had her hair cut.");
    expect(choiceAnswer(theCausative.quiz, "very upset")).toBe("Someone stole Sara's phone.");
    const painted = gap(theCausative.quiz, "Our kitchen looks great");
    expect(painted).toEqual(["had it painted"]);
    expectGap(painted, ["had it painted"], ["painted it", "had painted it", "have it painted", "had it paint", "had it painting"]);
    const repaired = gap(theCausative.quiz, "at the garage");
    expect(repaired).toEqual(["am having my car repaired", "'m having my car repaired", "am getting my car repaired", "'m getting my car repaired"]);
    expectGap(
      repaired,
      ["am having my car repaired", "’m having my car repaired", "’m getting my car repaired"],
      ["am repairing my car", "am having repaired my car", "am having my car repair", "have my car repaired", "'m having my car repairing"],
    );
    const stolen = gap(theCausative.quiz, "on the bus yesterday");
    expect(stolen).toEqual(["had his wallet stolen"]);
    expectGap(stolen, ["had his wallet stolen"], ["had stolen his wallet", "has his wallet stolen", "had his wallet stole", "stole his wallet"]);
  });

  it("pins the reported commands: the gaps name the verb, so the speech act is fixed", () => {
    expect(choiceAnswer(reportedCommandsAdviceAndRequests.quiz, "stay together")).toBe("told");
    expect(choiceAnswer(reportedCommandsAdviceAndRequests.quiz, "If I were you")).toBe("Mark advised me to take a taxi.");
    const keep = gap(reportedCommandsAdviceAndRequests.quiz, "the pilot said to us");
    expect(keep).toEqual(["told us to keep"]);
    expectGap(keep, ["told us to keep", "Told us to keep."], ["told us keep", "said us to keep", "told to us to keep", "told us keeping", "told we to keep", "told us that we should keep", "told us we had to keep"]);
    const open = gap(reportedCommandsAdviceAndRequests.quiz, "Please open the window");
    expect(open).toEqual(["asked me to open"]);
    expectGap(open, ["asked me to open"], ["asked me open", "asked to me to open", "said me to open", "asked me opening", "told me to open", "asked me if I could open"]);
    const swim = gap(reportedCommandsAdviceAndRequests.quiz, "The water is dangerous");
    expect(swim).toEqual(["not to swim", "to not swim"]);
    expectGap(swim, ["not to swim", "to not swim"], ["don't swim", "not swim", "not to swimming", "to don't swim", "not swimming"]);
  });

  it("has no wordbank items in this batch", () => {
    for (const t of topics) expect(wordbankAnswers(t.quiz), t.slug).toEqual([]);
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(futureInThePast.quiz)).toEqual([
      ["will", "would"],
      ["went", "go"],
    ]);
    expect(mistakes(advancedPassiveAndReportingVerbs.quiz)).toEqual([
      ["build", "built"],
      ["paint", "painted"],
    ]);
    expect(mistakes(theCausative.quiz)).toEqual([
      ["test", "tested"],
      ["made", "had"],
    ]);
    expect(mistakes(reportedCommandsAdviceAndRequests.quiz)).toEqual([
      ["don't", "not to"],
      ["touching", "touch"],
    ]);
  });

  it("pins the mistake sentences, each with a past anchor or a fixed form that leaves one fix", () => {
    const sentences = (t: (typeof topics)[number]) => t.quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
    expect(sentences(futureInThePast)).toEqual([
      "When we booked the trip, I knew you will love Paris, and you did.",
      "We were about to went out when it started to rain.",
    ]);
    expect(sentences(advancedPassiveAndReportingVerbs)).toEqual([
      "The new hospital is being build near the station.",
      "The painter is believed to have paint this picture in 1890.",
    ]);
    expect(sentences(theCausative)).toEqual([
      "I need to have my eyes test soon.",
      "She made her nails done at a salon yesterday.",
    ]);
    expect(sentences(reportedCommandsAdviceAndRequests)).toEqual([
      "The teacher told us don't use our phones in class.",
      "My mother warned me not to touching the oven.",
    ]);
  });

  it("hedges where Swan allows alternatives, and records the source calls", () => {
    expect(futureInThePast.explanation).toContain("both are often correct");
    expect(futureInThePast.explanation).toContain("past habits");
    expect(futureInThePast.sourceNotes).toContain("(new)");
    expect(advancedPassiveAndReportingVerbs.explanation).toContain("<b>reporting verb</b>");
    expect(advancedPassiveAndReportingVerbs.explanation).toContain("mean the same");
    expect(theCausative.explanation).toContain("<b>causative</b>");
    expect(theCausative.explanation).toContain("a little more informal");
    expect(theCausative.form).toContain("I had cut my hair is the past perfect of cut, so you did it yourself: it is not the causative");
    expect(theCausative.form).not.toContain("not: I had cut my hair");
    expect(reportedCommandsAdviceAndRequests.explanation).toContain("Remember: a reporting verb is a verb that we use to report what people say or think");
    expect(reportedCommandsAdviceAndRequests.explanation).toContain("usually");
    expect(reportedCommandsAdviceAndRequests.explanation).toContain("never put the person just after said");
    expect(reportedCommandsAdviceAndRequests.explanation).not.toContain("never put the person after said");
    expect(futureInThePast.explanation).toContain("Remember: the past continuous has two parts: was or were, and then the verb with -ing.");
    expect(gap(reportedCommandsAdviceAndRequests.quiz, "the pilot said to us")).toEqual(["told us to keep"]);
    expect(reportedCommandsAdviceAndRequests.sourceNotes).toContain("Commands, advice or requests");
  });
});
