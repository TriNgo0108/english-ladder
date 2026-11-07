import { findTopic, siblingsAcrossLevels } from "@/content/registry";
import { parseTopic, type Level } from "@/content/schema";
import { a2Topics } from ".";
import { articlesTheAndZeroArticle } from "./grammar/articles-the-and-zero-article";
import { haveTo } from "./grammar/have-to";
import { infinitiveOfPurpose } from "./grammar/infinitive-of-purpose";
import { shouldAndMust } from "./grammar/should-and-must";
import { tooAndEnough } from "./grammar/too-and-enough";
import { expectGap, gap, quizLengths, wordbankAnswer, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "should-and-must",
  "have-to",
  "infinitive-of-purpose",
  "too-and-enough",
  "articles-the-and-zero-article",
];

describe("A2 grammar, part 3", () => {
  it("registers orders 13-17 in sequence, each passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("a2", "grammar", slug);
      expect(found?.order).toBe(i + 13);
      expect(found?.shape).toBe("rule");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(a2Topics.slice(12, 17).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths([articlesTheAndZeroArticle, haveTo, infinitiveOfPurpose, shouldAndMust, tooAndEnough])).toEqual({
      "articles-the-and-zero-article": 6,
      "have-to": 7,
      "infinitive-of-purpose": 6,
      "should-and-must": 6,
      "too-and-enough": 6,
    });
  });

  it("pins the families, and leaves have to, purpose and too/enough without one", () => {
    expect(shouldAndMust.family).toBe("modal-obligation");
    expect(haveTo.family).toBeUndefined();
    expect(infinitiveOfPurpose.family).toBeUndefined();
    expect(tooAndEnough.family).toBeUndefined();
    expect(articlesTheAndZeroArticle.family).toBe("articles");
  });

  it("links the articles topics across A1 and A2, both ways", () => {
    const siblings = (level: Level, slug: string) => {
      const found = findTopic(level, "grammar", slug);
      if (!found) throw new Error(`${slug} missing`);
      return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
    };
    expect(siblings("a2", "articles-the-and-zero-article")).toEqual(["a1/articles-a-an"]);
    expect(siblings("a1", "articles-a-an")).toEqual(["a2/articles-the-and-zero-article"]);
    expect(siblings("a2", "should-and-must")).toEqual([]);
  });

  it("gives each topic about five questions, and scrambles every wordbank", () => {
    for (const t of a2Topics.slice(12, 17)) {
      expect(t.quiz.length).toBeGreaterThanOrEqual(5);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("pins the should and must gaps", () => {
    const smoke = gap(shouldAndMust.quiz, "smoke + not");
    expect(smoke).toEqual(["mustn't smoke", "must not smoke"]);
    expectGap(
      smoke,
      ["mustn't smoke", "must not smoke", "mustn’t smoke"],
      ["mustn't to smoke", "don't have to smoke", "must smoke", "mustn't smoking", "shouldn't smoke"],
    );
    const go = gap(shouldAndMust.quiz, "dentist");
    expect(go).toEqual(["had to go"]);
    expectGap(go, ["had to go", "Had to go."], ["must go", "musted go", "must went", "had to went", "had go"]);
  });

  it("pins the have to gaps, accepting have got to and will have to in short and full forms", () => {
    const go = gap(haveTo.quiz, "Tom ___ now");
    expect(go).toEqual(["has to go", "has got to go", "'s got to go", "will have to go", "'ll have to go"]);
    expectGap(go, ["has to go", "has got to go", "’s got to go", "'ll have to go"], ["have to go", "has to goes", "has go", "must go", "'s to go"]);
    const get = gap(haveTo.quiz, "get + not");
    expect(get).toEqual(["don't have to get", "do not have to get", "haven't got to get", "have not got to get", "won't have to get", "will not have to get"]);
    expectGap(
      get,
      ["don't have to get", "do not have to get", "haven’t got to get", "have not got to get", "won’t have to get", "will not have to get"],
      ["mustn't get", "doesn't have to get", "don't have to got", "don't has to get", "not have to get"],
    );
    const walk = gap(haveTo.quiz, "walk, have to");
    expect(walk).toEqual(["had to walk"]);
    expectGap(walk, ["had to walk"], ["have to walk", "had to walked", "has to walk", "must walk"]);
  });

  it("pins the infinitive of purpose gaps, accepting the formal in order to", () => {
    const buy = gap(infinitiveOfPurpose.quiz, "new bike");
    expect(buy).toEqual(["to buy", "in order to buy", "so as to buy"]);
    expectGap(buy, ["to buy", "in order to buy", "so as to buy"], ["for buy", "for to buy", "for buying", "buying", "buy"]);
    const cutting = gap(infinitiveOfPurpose.quiz, "Scissors");
    expect(cutting).toEqual(["cutting"]);
    expectGap(cutting, ["cutting"], ["cut", "to cut", "cuting", "cuts"]);
  });

  it("pins the too and enough gaps", () => {
    const old = gap(tooAndEnough.quiz, "watch this film");
    expect(old).toEqual(["old enough"]);
    expectGap(old, ["old enough"], ["enough old", "too old", "old too", "very old"]);
    const many = gap(tooAndEnough.quiz, "on this bus");
    expect(many).toEqual(["too many"]);
    expectGap(many, ["too many", "Too many"], ["too much", "many", "too", "very many"]);
  });

  it("pins the articles gaps", () => {
    const dog = gap(articlesTheAndZeroArticle.quiz, "called Max");
    expect(dog).toEqual(["the"]);
    expectGap(dog, ["the", "The"], ["a", "an", "this"]);
    const uk = gap(articlesTheAndZeroArticle.quiz, "UK");
    expect(uk).toEqual(["the"]);
    expectGap(uk, ["the"], ["a", "an", ""]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(shouldAndMust.quiz)).toBe("Should I bring a present?");
    expect(wordbankAnswer(haveTo.quiz)).toBe("Do you have to work tomorrow?");
    expect(wordbankAnswer(infinitiveOfPurpose.quiz)).toBe("She went to Paris to study art.");
    expect(wordbankAnswer(tooAndEnough.quiz)).toBe("He isn't old enough to drive.");
    expect(wordbankAnswer(articlesTheAndZeroArticle.quiz)).toBeUndefined();
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(shouldAndMust.quiz)).toEqual(["musts", "must"]);
    expect(wrongToken(haveTo.quiz)).toEqual(["has", "have"]);
    expect(haveTo.quiz.find((q) => q.kind === "mistake")).toMatchObject({ tokens: ["Why", "does", "he", "has", "to", "wear", "a", "suit?"], wrongIndex: 3 });
    expect(wrongToken(infinitiveOfPurpose.quiz)).toEqual(["for", "to"]);
    expect(wrongToken(tooAndEnough.quiz)).toEqual(["many", "much"]);
    expect(wrongToken(articlesTheAndZeroArticle.quiz)).toEqual(["A", "The"]);
  });

  it("hedges the rules that are tendencies, and agrees with A1 on the sound rule", () => {
    expect(haveTo.explanation).toContain("Many people, especially in British English, use <b>must</b>");
    expect(haveTo.explanation).toContain("In American English, people usually use have to for both");
    expect(shouldAndMust.explanation).toContain("Must has no past form");
    expect(articlesTheAndZeroArticle.explanation).toContain("the sound of the next word decides");
    expect(articlesTheAndZeroArticle.explanation).toContain("We usually use no article with meals");
  });
});
