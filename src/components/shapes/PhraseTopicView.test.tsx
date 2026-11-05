import { render, screen, within } from "@testing-library/react";
import type { PhraseTopic } from "@/content/schema";
import { PhraseTopicView } from "./PhraseTopicView";

const question = {
  kind: "choice" as const,
  stem: "Which is polite?",
  options: ["Hello.", "Oi."],
  answer: 0,
  feedback: "Hello is polite.",
};

const topic: PhraseTopic = {
  slug: "fixture-greetings",
  title: "Fixture greetings",
  level: "a1",
  category: "speaking",
  order: 1,
  shape: "phrases",
  explanation: "Ways to say <b>hello</b>.",
  situations: [
    { situation: "Meeting a client", phrases: ["Good morning."], register: "formal" },
    { situation: "Meeting a colleague", phrases: ["Hello.", "Hi there."], register: "neutral" },
    { situation: "Meeting a friend", phrases: ["Hey!"], register: "informal" },
  ],
  quiz: [question, question, question, question],
  levelRationale: "Fixture rationale.",
};

describe("PhraseTopicView", () => {
  it("renders each situation with its phrases and its register as text", () => {
    render(<PhraseTopicView topic={topic} />);
    for (const s of topic.situations) {
      const block = screen.getByRole("region", { name: s.situation });
      expect(within(block).getByText(`Register: ${s.register}`)).toBeInTheDocument();
      for (const p of s.phrases) expect(within(block).getByText(p)).toBeInTheDocument();
    }
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Fixture greetings");
  });
});
