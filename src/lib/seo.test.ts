import type { RuleTopic } from "@/content/schema";
import { serialiseJsonLd, topicDescription, topicJsonLd, topicUrl } from "./seo";

const q = { kind: "choice" as const, stem: "s", options: ["a", "b"], answer: 0, feedback: "f" };
const topic: RuleTopic = {
  slug: "verb-to-be",
  title: "The verb be",
  summary: "How to use am, is and are.",
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

describe("topicDescription", () => {
  it("is the summary, not the explanation", () => {
    expect(topicDescription(topic)).toBe("How to use am, is and are.");
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
      description: "How to use am, is and are.",
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
