import { allTopics } from "@/content/registry";
import type { PhraseTopic, RuleTopic, SetTopic } from "@/content/schema";
import { topicSections } from "@/lib/topic-sections";

const rules = allTopics.filter((t): t is RuleTopic => t.shape === "rule");
const ids = (t: Parameters<typeof topicSections>[0]) => topicSections(t).map((s) => s.id);

describe("topicSections", () => {
  it("lists a rule topic's sections in page order, ending with Quiz", () => {
    const topic = rules.find((t) => t.form && t.pitfall)!;
    expect(ids(topic)).toEqual(["form-heading", "examples-heading", "pitfall-heading", "quiz-heading"]);
    expect(topicSections(topic).map((s) => s.label)).toEqual(["Form", "Examples", "Common mistake", "Quiz"]);
  });

  it("omits Form and Common mistake when the topic has none", () => {
    // Every authored rule topic has both today; the schema makes them optional.
    const topic: RuleTopic = { ...rules[0], form: undefined, pitfall: undefined };
    expect(ids(topic)).toEqual(["examples-heading", "quiz-heading"]);
  });

  it("lists Words then Quiz for a set topic", () => {
    const topic = allTopics.find((t): t is SetTopic => t.shape === "set")!;
    expect(topicSections(topic)).toEqual([
      { id: "words-heading", label: "Words" },
      { id: "quiz-heading", label: "Quiz" },
    ]);
  });

  it("lists one entry per situation for a phrase topic, labelled with the situation", () => {
    const topic = allTopics.find((t): t is PhraseTopic => t.shape === "phrases")!;
    expect(topicSections(topic)).toEqual([
      ...topic.situations.map((s, i) => ({ id: `situation-${i}`, label: s.situation })),
      { id: "quiz-heading", label: "Quiz" },
    ]);
  });
});
