import { a1Topics } from "@/content/a1";
import { findTopic } from "@/content/registry";
import { parseTopic, type Question } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { capitalLettersAndFullStops } from "./mechanics/capital-letters-and-full-stops";
import { greetingsAndIntroducingYourself } from "./speaking/greetings-and-introducing-yourself";
import { orderingFood } from "./speaking/ordering-food";
import { wouldYouLike } from "./speaking/would-you-like";
import { daysMonthsFamilyFoodAndColours } from "./vocabulary/days-months-family-food-and-colours";
import { numbers } from "./vocabulary/numbers";
import { tellingTheTime } from "./vocabulary/telling-the-time";

const ordered = [
  ["vocabulary", "numbers"],
  ["vocabulary", "telling-the-time"],
  ["vocabulary", "days-months-family-food-and-colours"],
  ["speaking", "greetings-and-introducing-yourself"],
  ["speaking", "would-you-like"],
  ["speaking", "ordering-food"],
  ["mechanics", "capital-letters-and-full-stops"],
] as const;

const setTopics = [numbers, tellingTheTime, daysMonthsFamilyFoodAndColours];

function gap(questions: Question[], stemPart: string) {
  const q = questions.find((x) => x.kind === "gap" && x.stem.includes(stemPart));
  if (q?.kind !== "gap") throw new Error(`gap containing "${stemPart}" missing`);
  return q.answers;
}

describe("A1 vocabulary, speaking and mechanics (part 4)", () => {
  it("registers orders 20-26 in sequence, each passing the schema", () => {
    ordered.forEach(([category, slug], i) => {
      const found = findTopic("a1", category, slug);
      expect(found?.order).toBe(i + 20);
      expect(() => parseTopic(found)).not.toThrow();
    });
  });

  it("completes A1 at 26 topics: 19 grammar, 3 vocabulary, 3 speaking, 1 mechanics", () => {
    expect(a1Topics.map((t) => t.order)).toEqual(Array.from({ length: 26 }, (_, i) => i + 1));
    const count = (c: string) => a1Topics.filter((t) => t.category === c).length;
    expect([count("grammar"), count("vocabulary"), count("speaking"), count("mechanics")]).toEqual([19, 3, 3, 1]);
    expect(count("writing") + count("phrases")).toBe(0);
  });

  it("binds each shape to its category", () => {
    for (const t of setTopics) expect(t.shape).toBe("set");
    for (const t of [greetingsAndIntroducingYourself, wouldYouLike, orderingFood]) expect(t.shape).toBe("phrases");
    expect(capitalLettersAndFullStops.shape).toBe("rule");
  });

  it("gives IPA only to single-word headwords, in slashes, and says the sounds are American", () => {
    for (const t of setTopics) {
      expect(t.explanation).toContain("The sounds in / / are American English.");
      for (const e of t.entries) {
        if (/\s/.test(e.headword)) expect(e.ipa, e.headword).toBeUndefined();
        if (e.ipa !== undefined) expect(e.ipa).toMatch(/^\/[^/\s]+\/$/);
      }
    }
  });

  it("puts the strong part of the teens at the end and of the tens at the start", () => {
    const ipa = (h: string) => numbers.entries.find((e) => e.headword === h)?.ipa;
    for (const teen of ["thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]) {
      expect(ipa(teen)).toMatch(/ˈtin\/$/);
    }
    for (const ten of ["thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]) {
      expect(ipa(ten)).toMatch(/^\/ˈ/);
    }
  });

  it("bolds the headword in every set entry's example", () => {
    for (const t of setTopics) {
      for (const e of t.entries) expect(e.inUse, e.headword).toMatch(/<b>.+<\/b>/);
    }
  });

  it("keeps the five vocabulary groups in order: days, months, family, food, colours", () => {
    const heads = daysMonthsFamilyFoodAndColours.entries.map((e) => e.headword);
    const at = (h: string) => heads.indexOf(h);
    expect(heads.slice(0, 7)).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
    expect(at("January")).toBe(7);
    expect(at("December")).toBe(18);
    expect(at("December")).toBeLessThan(at("mother"));
    expect(at("grandfather")).toBeLessThan(at("bread"));
    expect(at("potato")).toBeLessThan(at("red"));
  });

  it("accepts both a hundred and one hundred, with and without and, for 150", () => {
    const n = gap(numbers.quiz, "150");
    for (const typed of ["a hundred and fifty", "One hundred and fifty", "one hundred fifty"]) {
      expect(matchesGap(typed, n)).toBe(true);
    }
    for (const typed of ["hundred and fifty", "one hundreds and fifty", "fifteen"]) expect(matchesGap(typed, n)).toBe(false);
  });

  it("accepts the British and the digital reading of 3:30, but not three and a half", () => {
    const t = gap(tellingTheTime.quiz, "3:30");
    for (const typed of ["half past three", "half-past three", "three thirty", "three-thirty", "half three"]) {
      expect(matchesGap(typed, t)).toBe(true);
    }
    for (const typed of ["three and a half", "half to four", "half past four"]) expect(matchesGap(typed, t)).toBe(false);
    const quarter = gap(tellingTheTime.quiz, "7:15");
    for (const typed of ["quarter", "a quarter", "fifteen", "fifteen minutes"]) expect(matchesGap(typed, quarter)).toBe(true);
    for (const typed of ["half", "five", "quarter to"]) expect(matchesGap(typed, quarter)).toBe(false);
  });

  it("accepts the informal words for grandmother", () => {
    const g = gap(daysMonthsFamilyFoodAndColours.quiz, "mother's mother");
    for (const typed of ["grandmother", "grandma", "granny"]) expect(matchesGap(typed, g)).toBe(true);
    expect(matchesGap("mother", g)).toBe(false);
  });

  it("accepts too and as well, and thanks and thank you, in the greetings gaps", () => {
    const too = gap(greetingsAndIntroducingYourself.quiz, "Nice to meet you, ___");
    for (const typed of ["too", "as well"]) expect(matchesGap(typed, too)).toBe(true);
    const thanks = gap(greetingsAndIntroducingYourself.quiz, "I'm fine, ___");
    for (const typed of ["thanks", "thank you"]) expect(matchesGap(typed, thanks)).toBe(true);
  });

  it("accepts love and like for the invitation answer, and bill and check for paying", () => {
    const love = gap(wouldYouLike.quiz, "Yes, I'd ___ to");
    for (const typed of ["love", "like"]) expect(matchesGap(typed, love)).toBe(true);
    for (const typed of ["want", "be happy"]) expect(matchesGap(typed, love)).toBe(false);
    expect(love).toEqual(["love", "like"]);
    const bill = gap(orderingFood.quiz, "the ___, please");
    for (const typed of ["bill", "check"]) expect(matchesGap(typed, bill)).toBe(true);
    expect(matchesGap("menu", bill)).toBe(false);
  });

  it("tests capitals only with choice or mistake items, never by typed case", () => {
    const q = capitalLettersAndFullStops.quiz;
    expect(q.filter((x) => x.kind === "gap")).toHaveLength(0);
    expect(q.filter((x) => x.kind === "mistake")).toHaveLength(3);
    const sundays = q.find((x) => x.kind === "mistake" && x.tokens.includes("sundays."));
    if (sundays?.kind !== "mistake") throw new Error("Sundays mistake item missing");
    expect(sundays.tokens[sundays.wrongIndex]).toBe("sundays.");
    expect(sundays.tokens).toContain("summer");
    expect(sundays.correction).toBe("Sundays.");
  });

  it("marks the register of each phrase group as the rulings require", () => {
    const reg = (s: string) =>
      greetingsAndIntroducingYourself.situations.find((x) => x.situation === s)?.register;
    expect(reg("Saying hello to a friend")).toBe("informal");
    expect(reg("Saying hello to anyone")).toBe("neutral");
    expect(reg("Meeting someone at a job interview")).toBe("formal");
    const informalWant = orderingFood.situations.find((x) => x.phrases.some((p) => p.startsWith("I want")));
    expect(informalWant?.register).toBe("informal");
  });
});
