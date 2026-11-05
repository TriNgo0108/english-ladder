import { render, screen } from "@testing-library/react";
import type { SetTopic } from "@/content/schema";
import { SetTopicView } from "./SetTopicView";

const question = {
  kind: "choice" as const,
  stem: "Which is a colour?",
  options: ["red", "run"],
  answer: 0,
  feedback: "Red is a colour.",
};

const headwords = ["red", "blue", "green", "yellow", "black", "white"];

const topic: SetTopic = {
  slug: "fixture-colours",
  title: "Fixture colours",
  level: "a1",
  category: "vocabulary",
  order: 1,
  shape: "set",
  explanation: "Some <b>colours</b>.",
  entries: headwords.map((h, i) => ({
    headword: h,
    ...(i === 0 ? { ipa: "/red/" } : {}),
    gloss: `the colour ${h}`,
    inUse: `My bag is ${h}.`,
  })),
  quiz: [question, question, question, question],
  levelRationale: "Fixture rationale.",
};

describe("SetTopicView", () => {
  it("renders every headword inside a horizontally scrolling container", () => {
    const { container } = render(<SetTopicView topic={topic} />);
    const scroller = container.querySelector(".overflow-x-auto");
    expect(scroller).not.toBeNull();
    for (const h of headwords) {
      const cell = screen.getByRole("rowheader", { name: h });
      expect(scroller).toContainElement(cell);
    }
    expect(screen.getByText("/red/")).toBeInTheDocument();
    expect(screen.getByText("My bag is blue.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Fixture colours");
  });
});
