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
    // Plex Mono is reserved for grammatical forms; IPA is set in the sans face.
    expect(screen.getByText("/red/")).toHaveClass("font-sans");
    expect(screen.getByText("/red/")).not.toHaveClass("font-mono");
    expect(screen.getByText("My bag is blue.")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Fixture colours");
  });

  it("gives the scrollable table container its own visible keyboard focus ring", () => {
    const { container } = render(<SetTopicView topic={topic} />);
    const scroller = container.querySelector("table")!.parentElement!;
    expect(scroller.className).toContain("overflow-x-auto");
    expect(scroller.className).toContain("focus-visible:outline-2");
    expect(scroller.className).toContain("focus-visible:outline-accent");
  });

  it("makes the scrollable table a named, keyboard-focusable region", () => {
    render(<SetTopicView topic={topic} />);
    const region = screen.getByRole("region", { name: "Word list, scrolls sideways" });
    expect(region).toHaveAttribute("tabindex", "0");
    expect(region).toContainElement(screen.getByRole("table"));
    expect(region.className).toContain("overflow-x-auto");
  });
});
