import { findTopic, topicsByLevel } from "@/content/registry";
import { parseTopic, type Question } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { a2Topics } from ".";
import { askingForThingsPolitely } from "./speaking/asking-for-things-politely";
import { holidaysAndOutdoorActivities } from "./vocabulary/holidays-and-outdoor-activities";
import { houseAndHome } from "./vocabulary/house-and-home";
import { theBodyAndSymptoms } from "./vocabulary/the-body-and-symptoms";
import { travelAndFirstAidItems } from "./vocabulary/travel-and-first-aid-items";
import { anInformalEmail } from "./writing/an-informal-email";

const ordered = [
  ["vocabulary", "holidays-and-outdoor-activities"],
  ["vocabulary", "the-body-and-symptoms"],
  ["vocabulary", "travel-and-first-aid-items"],
  ["vocabulary", "house-and-home"],
  ["writing", "an-informal-email"],
  ["speaking", "asking-for-things-politely"],
] as const;

const setTopics = [holidaysAndOutdoorActivities, theBodyAndSymptoms, travelAndFirstAidItems, houseAndHome];
const phraseTopics = [anInformalEmail, askingForThingsPolitely];

function gap(questions: Question[], stemPart: string) {
  const q = questions.find((x) => x.kind === "gap" && x.stem.includes(stemPart));
  if (q?.kind !== "gap") throw new Error(`gap containing "${stemPart}" missing`);
  return q.answers;
}

function wordbankAnswer(questions: Question[]) {
  const q = questions.find((x) => x.kind === "wordbank");
  return q?.kind === "wordbank" ? q.answer : undefined;
}

function wrongToken(questions: Question[]) {
  const q = questions.find((x) => x.kind === "mistake");
  return q?.kind === "mistake" ? [q.tokens[q.wrongIndex], q.correction] : undefined;
}

function expectGap(accepted: string[], right: string[], wrong: string[]) {
  for (const typed of right) expect(matchesGap(typed, accepted), `accepts "${typed}"`).toBe(true);
  for (const typed of wrong) expect(matchesGap(typed, accepted), `rejects "${typed}"`).toBe(false);
}

describe("A2 vocabulary, writing and speaking (part 5)", () => {
  it("registers orders 22-27 in sequence, each passing the schema", () => {
    ordered.forEach(([category, slug], i) => {
      const found = findTopic("a2", category, slug);
      expect(found?.order).toBe(i + 22);
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(a2Topics.slice(21).map((t) => t.slug)).toEqual(ordered.map(([, slug]) => slug));
  });

  it("completes A2 at 27 topics: 21 grammar, 4 vocabulary, 1 writing, 1 speaking", () => {
    expect(topicsByLevel("a2").map((t) => t.order)).toEqual(Array.from({ length: 27 }, (_, i) => i + 1));
    const count = (c: string) => a2Topics.filter((t) => t.category === c).length;
    expect([count("grammar"), count("vocabulary"), count("writing"), count("speaking")]).toEqual([21, 4, 1, 1]);
    expect(count("phrases") + count("mechanics")).toBe(0);
  });

  it("binds each shape to its category", () => {
    for (const t of setTopics) expect(t.shape).toBe("set");
    for (const t of phraseTopics) expect(t.shape).toBe("phrases");
  });

  it("pins the families: emails and polite-requests, none for the vocabulary sets", () => {
    expect(anInformalEmail.family).toBe("emails");
    expect(askingForThingsPolitely.family).toBe("polite-requests");
    for (const t of setTopics) expect(t.family, t.slug).toBeUndefined();
  });

  it("gives each topic about five questions, and scrambles every wordbank", () => {
    for (const t of a2Topics.slice(21)) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("keeps every set between 6 and 30 entries, with distinct headwords", () => {
    for (const t of setTopics) {
      expect(t.entries.length, t.slug).toBeGreaterThanOrEqual(6);
      expect(t.entries.length, t.slug).toBeLessThanOrEqual(30);
      const heads = t.entries.map((e) => e.headword);
      expect(new Set(heads).size, t.slug).toBe(heads.length);
    }
  });

  it("gives IPA only to single-word headwords, in slashes, and says the sounds are American", () => {
    for (const t of setTopics) {
      expect(t.explanation).toContain("The sounds in / / are American English.");
      for (const e of t.entries) {
        if (/[\s]/.test(e.headword)) expect(e.ipa, e.headword).toBeUndefined();
        else expect(e.ipa, e.headword).toMatch(/^\/[^/\s]+\/$/);
      }
    }
  });

  it("uses one primary stress mark per word and no secondary marks", () => {
    for (const t of setTopics) {
      for (const e of t.entries) {
        if (e.ipa === undefined) continue;
        expect((e.ipa.match(/ˈ/g) ?? []).length, e.headword).toBeLessThanOrEqual(1);
        expect(e.ipa, e.headword).not.toContain("ˌ");
      }
    }
  });

  it("bolds the headword in every set entry's example", () => {
    for (const t of setTopics) {
      for (const e of t.entries) expect(e.inUse, e.headword).toMatch(/<b>.+<\/b>/);
    }
  });

  it("pins the vocabulary gaps", () => {
    const on = gap(holidaysAndOutdoorActivities.quiz, "everyone is ___ holiday");
    expect(on).toEqual(["on"]);
    expectGap(on, ["on", "On"], ["in", "at", "for"]);
    const picnic = gap(holidaysAndOutdoorActivities.quiz, "eat outside");
    expect(picnic).toEqual(["picnic"]);
    expectGap(picnic, ["picnic"], ["barbecue", "picknick", "lunch"]);

    const headache = gap(theBodyAndSymptoms.quiz, "pain in my head");
    expect(headache).toEqual(["headache", "migraine"]);
    expectGap(headache, ["headache", "migraine"], ["head ache", "pain", "cold", "headaches"]);
    const thumb = gap(theBodyAndSymptoms.quiz, "four fingers and one");
    expect(thumb).toEqual(["thumb"]);
    expectGap(thumb, ["thumb"], ["finger", "thumbs", "thum"]);

    const passport = gap(travelAndFirstAidItems.quiz, "It has your photo");
    expect(passport).toEqual(["passport"]);
    expectGap(passport, ["passport"], ["ticket", "guidebook", "pasport"]);
    const plaster = gap(travelAndFirstAidItems.quiz, "small cut on my finger");
    expect(plaster).toEqual(["plaster", "bandage", "band-aid", "bandaid", "dressing"]);
    expectGap(plaster, ["plaster", "bandage", "Band-Aid", "band aid", "bandaid", "dressing"], ["painkiller", "sunscreen", "plasters"]);

    const fridge = gap(houseAndHome.quiz, "milk and cheese cold");
    expect(fridge).toEqual(["fridge", "refrigerator"]);
    expectGap(fridge, ["fridge", "refrigerator"], ["cooker", "cupboard", "freezer", "frige"]);
    const upstairs = gap(houseAndHome.quiz, "walk up the stairs");
    expect(upstairs).toEqual(["upstairs"]);
    expectGap(upstairs, ["upstairs"], ["downstairs", "to upstairs", "up stair"]);
  });

  it("pins the email gaps", () => {
    const forGap = gap(anInformalEmail.quiz, "Thanks ___ your email");
    expect(forGap).toEqual(["for"]);
    expectGap(forGap, ["for"], ["to", "about", "of"]);
    const hear = gap(anInformalEmail.quiz, "great to ___ from you");
    expect(hear).toEqual(["hear"]);
    expectGap(hear, ["hear"], ["listen", "heard", "hearing", "here"]);
  });

  it("pins the polite request gaps, rejecting lend for borrow", () => {
    const borrow = gap(askingForThingsPolitely.quiz, "Could I ___ your pen");
    expect(borrow).toEqual(["borrow", "use", "have", "take", "get"]);
    expectGap(borrow, ["borrow", "use", "have", "take", "get"], ["lend", "borrowed", "borrowing", "to borrow"]);
    const course = gap(askingForThingsPolitely.quiz, "Yes, of ___");
    expect(course).toEqual(["course"]);
    expectGap(course, ["course", "course."], ["coarse", "cause", "sure"]);
  });

  it("pins every wordbank answer", () => {
    for (const t of setTopics) expect(wordbankAnswer(t.quiz), t.slug).toBeUndefined();
    expect(wordbankAnswer(anInformalEmail.quiz)).toBe("Could you send me the photos?");
    expect(wordbankAnswer(askingForThingsPolitely.quiz)).toBe("Could you open the window, please?");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(holidaysAndOutdoorActivities.quiz)).toEqual(["picnic", "tent"]);
    expect(wrongToken(theBodyAndSymptoms.quiz)).toEqual(["foots", "feet"]);
    expect(wrongToken(travelAndFirstAidItems.quiz)).toEqual(["tweezers.", "thermometer."]);
    expect(wrongToken(houseAndHome.quiz)).toEqual(["fridge.", "wardrobe."]);
    expect(wrongToken(anInformalEmail.quiz)).toEqual(["you", "your"]);
    expect(wrongToken(askingForThingsPolitely.quiz)).toEqual(["borrow", "lend"]);
  });

  it("marks the email registers: informal for friends, neutral for Best wishes, formal only for the contrast group", () => {
    const reg = (phrase: string) => anInformalEmail.situations.find((s) => s.phrases.includes(phrase))?.register;
    expect(reg("Hi Sam,")).toBe("informal");
    expect(reg("Love,")).toBe("informal");
    expect(reg("Cheers,")).toBe("informal");
    expect(reg("Best wishes,")).toBe("neutral");
    expect(reg("Yours sincerely,")).toBe("formal");
    expect(reg("Dear Mr Brown,")).toBe("formal");
    const formal = anInformalEmail.situations.filter((s) => s.register === "formal");
    expect(formal.map((s) => s.situation)).toEqual(["Not for friends: a formal email"]);
  });

  it("marks May I formal and family requests informal", () => {
    const reg = (phrase: string) => askingForThingsPolitely.situations.find((s) => s.phrases.includes(phrase))?.register;
    expect(reg("May I come in?")).toBe("formal");
    expect(reg("Could you help me, please?")).toBe("neutral");
    expect(reg("Pass the bread, please.")).toBe("informal");
  });

  it("agrees with the A1 Would you like…? topic: offers, Yes, please, and the base form", () => {
    const a1 = findTopic("a1", "speaking", "would-you-like");
    expect(a1?.family).toBe(askingForThingsPolitely.family);
    const text = askingForThingsPolitely.explanation;
    expect(text).toContain("Would you like…? is for offers and invitations");
    expect(text).toContain("Do not say Yes, please: that is the answer to an offer");
    expect(text).toContain("Remember: the base form is the verb with nothing added");
    expect(a1?.explanation).toContain("Remember: the base form is the verb with nothing added");
    expect(text).toContain("Could is a little more polite than can");
    expect(findTopic("a1", "speaking", "ordering-food")?.explanation).toContain("Could is a little more polite than can");
    // No phrase in the A2 topic uses Would you like…? as a request.
    for (const s of askingForThingsPolitely.situations) {
      for (const p of s.phrases) expect(p).not.toMatch(/^Would you like/);
    }
  });
});
