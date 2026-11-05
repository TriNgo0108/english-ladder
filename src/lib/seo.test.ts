import type { RuleTopic } from "@/content/schema";
import { metaDescription, serialiseJsonLd, topicJsonLd, topicUrl } from "./seo";

const q = { kind: "choice" as const, stem: "s", options: ["a", "b"], answer: 0, feedback: "f" };
const topic: RuleTopic = {
  slug: "verb-to-be",
  title: "The verb be",
  level: "a1",
  category: "grammar",
  order: 1,
  shape: "rule",
  explanation: "Use <b>am</b> with I.\n\nSecond paragraph.",
  examples: [
    { sentence: "s", why: "w" },
    { sentence: "s", why: "w" },
    { sentence: "s", why: "w" },
  ],
  quiz: [q, q, q, q],
  levelRationale: "r",
};

describe("metaDescription", () => {
  it("strips <b> and joins paragraphs with a space", () => {
    expect(metaDescription("Use <b>am</b> with I.\n\nSecond.")).toBe("Use am with I. Second.");
  });
  it("cuts long text at a word boundary, within the limit, with an ellipsis", () => {
    const long = "word ".repeat(80).trim();
    const d = metaDescription(long);
    expect(d.length).toBeLessThanOrEqual(150);
    expect(d.endsWith("…")).toBe(true);
    expect(d.slice(0, -1).endsWith("word")).toBe(true);
  });
  it("prefers ending on a whole sentence when one fits", () => {
    const first = "This sentence is long enough to count as most of the summary text we want to keep for search.";
    const d = metaDescription(`${first} And this second sentence pushes the total well past the limit.`);
    expect(d).toBe(first);
  });
  it("leaves short text alone", () => {
    expect(metaDescription("Short.")).toBe("Short.");
  });
});

describe("topicUrl", () => {
  it("is absolute, includes the base path, and ends with a slash", () => {
    expect(topicUrl(topic)).toBe("https://tringo.github.io/english-ladder/a1/grammar/verb-to-be/");
  });
});

describe("topicJsonLd", () => {
  it("describes the topic as a LearningResource at its CEFR level", () => {
    expect(topicJsonLd(topic)).toEqual({
      "@context": "https://schema.org",
      "@type": "LearningResource",
      name: "The verb be",
      description: "Use am with I. Second paragraph.",
      url: "https://tringo.github.io/english-ladder/a1/grammar/verb-to-be/",
      educationalLevel: "A1",
      inLanguage: "en",
      learningResourceType: "Grammar",
      isPartOf: {
        "@type": "WebSite",
        name: "English Ladder",
        url: "https://tringo.github.io/english-ladder/",
      },
    });
  });
});

describe("serialiseJsonLd", () => {
  it("escapes < so the payload cannot close its script tag", () => {
    const out = serialiseJsonLd({ name: "</script><script>alert(1)</script>" });
    expect(out).not.toContain("<");
    expect(out).toContain("\\u003c/script>");
    expect(JSON.parse(out)).toEqual({ name: "</script><script>alert(1)</script>" });
  });
});
