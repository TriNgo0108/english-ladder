import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b1Topics } from ".";
import { beUsedToAndGetUsedTo } from "./grammar/be-used-to-and-get-used-to";
import { gerundsVsInfinitives } from "./grammar/gerunds-vs-infinitives";
import { modalsOfPossibilityAndDeduction } from "./grammar/modals-of-possibility-and-deduction";
import { thePassive } from "./grammar/the-passive";
import { transitiveAndIntransitiveVerbs } from "./grammar/transitive-and-intransitive-verbs";
import { choiceAnswer, expectGap, gap, ids, quizLengths, wordbankAnswer, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "modals-of-possibility-and-deduction",
  "be-used-to-and-get-used-to",
  "gerunds-vs-infinitives",
  "transitive-and-intransitive-verbs",
  "the-passive",
];

const topics = [
  modalsOfPossibilityAndDeduction,
  beUsedToAndGetUsedTo,
  gerundsVsInfinitives,
  transitiveAndIntransitiveVerbs,
  thePassive,
];

describe("B1 grammar, part 3 (modals and verb patterns)", () => {
  it("registers orders 11-15 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 11);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(10, 15).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "modals-of-possibility-and-deduction": 6,
      "be-used-to-and-get-used-to": 7,
      "gerunds-vs-infinitives": 8,
      "transitive-and-intransitive-verbs": 6,
      "the-passive": 8,
    });
  });

  it("pins the families: modal-deduction, used-to, gerunds-and-infinitives, none for order 14, passive", () => {
    expect(modalsOfPossibilityAndDeduction.family).toBe("modal-deduction");
    expect(beUsedToAndGetUsedTo.family).toBe("used-to");
    expect(gerundsVsInfinitives.family).toBe("gerunds-and-infinitives");
    expect(transitiveAndIntransitiveVerbs.family).toBeUndefined();
    expect(thePassive.family).toBe("passive");
  });

  it("links the used-to and gerunds-and-infinitives chains A2 <-> B1 both ways, modal deduction to B2, and gives the rest no siblings", () => {
    expect(ids("a2", "grammar", "used-to-and-would")).toEqual(["b1/be-used-to-and-get-used-to"]);
    expect(ids("b1", "grammar", "be-used-to-and-get-used-to")).toEqual(["a2/used-to-and-would"]);
    expect(ids("a2", "grammar", "verb-plus-gerund-or-infinitive")).toEqual(["b1/gerunds-vs-infinitives"]);
    expect(ids("b1", "grammar", "gerunds-vs-infinitives")).toEqual(["a2/verb-plus-gerund-or-infinitive"]);
    expect(ids("b1", "grammar", "modals-of-possibility-and-deduction")).toEqual(["b2/describing-certainty-in-the-past"]);
    expect(ids("b1", "grammar", "transitive-and-intransitive-verbs")).toEqual([]);
    expect(ids("b1", "grammar", "the-passive")).toEqual(["b2/advanced-passive-and-reporting-verbs"]);
  });

  it("gives each topic about five questions, at least 3 examples, a summary, and scrambles every wordbank", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("pins the deduction choices and gaps: must, can't, and might, may or could for possibility", () => {
    expect(choiceAnswer(modalsOfPossibilityAndDeduction.quiz, "in the heat")).toBe("must");
    expect(choiceAnswer(modalsOfPossibilityAndDeduction.quiz, "in the garden")).toBe("can't");
    const might = gap(modalsOfPossibilityAndDeduction.quiz, "umbrella");
    expect(might).toEqual(["might", "may", "could"]);
    expectGap(might, ["might", "may", "could", "Might"], ["must", "can", "will", "can't", "mustn't"]);
    const mightNot = gap(modalsOfPossibilityAndDeduction.quiz, "very busy");
    expect(mightNot).toEqual(["might not", "may not", "mightn't"]);
    expectGap(mightNot, ["might not", "may not", "mightn’t"], ["can't", "mustn't", "couldn't", "won't", "could not"]);
  });

  it("pins the be used to and get used to choices and gaps, with got and gotten", () => {
    expect(choiceAnswer(beUsedToAndGetUsedTo.quiz, "in the rain")).toBe("walking");
    expect(choiceAnswer(beUsedToAndGetUsedTo.quiz, "don't now")).toBe("I used to drive to work.");
    const notUsed = gap(beUsedToAndGetUsedTo.quiz, "two jumpers");
    expect(notUsed).toEqual(["'m not", "am not"]);
    expectGap(notUsed, ["'m not", "am not", "’m not"], ["don't", "wasn't", "not", "didn't", "'m"]);
    const using = gap(beUsedToAndGetUsedTo.quiz, "new software");
    expect(using).toEqual(["using"]);
    expectGap(using, ["using", "Using."], ["use", "to use", "used", "uses"]);
    const got = gap(beUsedToAndGetUsedTo.quiz, "the food");
    expect(got).toEqual(["'ve got", "have got", "'ve gotten", "have gotten"]);
    expectGap(got, ["'ve got", "have got", "’ve gotten", "have gotten"], ["got", "are", "'re", "have get", "'ve getting", "haven't got", "haven't gotten"]);
  });

  it("pins the gerund and infinitive choices and gaps, accepting both forms after start", () => {
    expect(choiceAnswer(gerundsVsInfinitives.quiz, "interested in")).toBe("learning");
    expect(choiceAnswer(gerundsVsInfinitives.quiz, "too heavy")).toBe("I made an effort to lift it, but I couldn't.");
    expect(choiceAnswer(gerundsVsInfinitives.quiz, "any more")).toBe("Tom stopped smoking.");
    const lock = gap(gerundsVsInfinitives.quiz, "the door when");
    expect(lock).toEqual(["to lock"]);
    expectGap(lock, ["to lock", "To lock."], ["locking", "lock", "to locking", "locked"]);
    const seeing = gap(gerundsVsInfinitives.quiz, "for the first time");
    expect(seeing).toEqual(["seeing", "having seen"]);
    expectGap(seeing, ["seeing", "having seen"], ["to see", "see", "saw", "seen"]);
    const learning = gap(gerundsVsInfinitives.quiz, "When did you start");
    expect(learning).toEqual(["learning", "to learn"]);
    expectGap(learning, ["learning", "to learn"], ["learn", "learned", "learnt", "to learning"]);
  });

  it("pins the transitive and intransitive choices and gap", () => {
    expect(choiceAnswer(transitiveAndIntransitiveVerbs.quiz, "Which sentence is correct?")).toBe("She entered the room quietly.");
    expect(choiceAnswer(transitiveAndIntransitiveVerbs.quiz, "the problem")).toBe("discuss");
    expect(choiceAnswer(transitiveAndIntransitiveVerbs.quiz, "no object")).toBe("The glass fell and broke.");
    const to = gap(transitiveAndIntransitiveVerbs.quiz, "this song");
    expect(to).toEqual(["to"]);
    expectGap(to, ["to", "To"], ["at", "for", "it", "with"]);
  });

  it("pins the passive choices and gaps: be + past participle in four tenses", () => {
    expect(choiceAnswer(thePassive.quiz, "my grandfather")).toBe("were taken");
    expect(choiceAnswer(thePassive.quiz, "Which sentence is correct?")).toBe("The accident happened at night.");
    const spoken = gap(thePassive.quiz, "South America");
    expect(spoken).toEqual(["is spoken"]);
    expectGap(spoken, ["is spoken", "Is spoken."], ["speaks", "is speak", "spoken", "is speaking", "was spoken"]);
    const stolen = gap(thePassive.quiz, "on the train");
    expect(stolen).toEqual(["was stolen", "got stolen"]);
    expectGap(stolen, ["was stolen", "got stolen"], ["stole", "was stole", "is stolen", "has been stolen", "was steal"]);
    const repaired = gap(thePassive.quiz, "collect it now");
    expect(repaired).toEqual(["has been repaired", "'s been repaired"]);
    expectGap(repaired, ["has been repaired", "’s been repaired"], ["has repaired", "was repaired", "is repaired", "has been repair"]);
    const announced = gap(thePassive.quiz, "competition");
    expect(announced).toEqual(["will be announced", "'ll be announced"]);
    expectGap(announced, ["will be announced", "’ll be announced"], ["will announce", "will be announce", "are announced", "will announced"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(modalsOfPossibilityAndDeduction.quiz)).toBe("She must be working late.");
    expect(wordbankAnswer(beUsedToAndGetUsedTo.quiz)).toBe("Are you used to living on your own?");
    expect(wordbankAnswer(gerundsVsInfinitives.quiz)).toBe("Learning a new language can take years.");
    expect(wordbankAnswer(transitiveAndIntransitiveVerbs.quiz)).toBe("Did you enjoy the party last night?");
    expect(wordbankAnswer(thePassive.quiz)).toBe("When was this house built?");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(modalsOfPossibilityAndDeduction.quiz)).toEqual(["mustn't", "can't"]);
    expect(modalsOfPossibilityAndDeduction.quiz.find((q) => q.kind === "mistake")).toMatchObject({ tokens: ["This", "mustn't", "be", "your", "coat.", "It's", "far", "too", "small", "for", "you."] });
    expect(wrongToken(beUsedToAndGetUsedTo.quiz)).toEqual(["use", "used"]);
    expect(wrongToken(gerundsVsInfinitives.quiz)).toEqual(["see", "seeing"]);
    expect(wrongToken(transitiveAndIntransitiveVerbs.quiz)).toEqual(["arrived", "arrived at"]);
    expect(wrongToken(thePassive.quiz)).toEqual(["build", "built"]);
  });

  it("hedges where Swan allows exceptions", () => {
    expect(modalsOfPossibilityAndDeduction.explanation).toContain("American English");
    expect(modalsOfPossibilityAndDeduction.explanation).toContain("not mustn't");
    expect(beUsedToAndGetUsedTo.explanation).toContain("gotten");
    expect(beUsedToAndGetUsedTo.explanation).toContain("in be used to and get used to, we always write");
    expect(thePassive.explanation).toContain("verbs with no object at all");
    expect(thePassive.explanation).not.toContain("Only transitive verbs");
    expect(gerundsVsInfinitives.explanation).toContain("little or no difference");
    expect(transitiveAndIntransitiveVerbs.explanation).toContain("both");
    expect(thePassive.explanation).toContain("only when");
  });
});
