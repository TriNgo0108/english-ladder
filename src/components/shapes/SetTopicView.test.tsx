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
  summary: "A short summary.",
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

  it("shows the Sounds like column when any entry has IPA, with header and cell counts matching", () => {
    const { container } = render(<SetTopicView topic={topic} />);
    expect(screen.getByRole("columnheader", { name: "Sounds like" })).toBeInTheDocument();
    const headers = container.querySelectorAll("thead th").length;
    expect(headers).toBe(4);
    for (const row of container.querySelectorAll("tbody tr")) {
      expect(row.querySelectorAll("th, td").length).toBe(headers);
    }
  });

  it("hides the Sounds like header and cells when no entry has IPA", () => {
    const noIpa: SetTopic = { ...topic, entries: topic.entries.map((e) => ({ headword: e.headword, gloss: e.gloss, inUse: e.inUse })) };
    const { container } = render(<SetTopicView topic={noIpa} />);
    expect(screen.queryByRole("columnheader", { name: "Sounds like" })).toBeNull();
    const headers = [...container.querySelectorAll("thead th")].map((th) => th.textContent);
    expect(headers).toEqual(["Word", "Meaning", "In use"]);
    for (const row of container.querySelectorAll("tbody tr")) {
      expect(row.querySelectorAll("th, td").length).toBe(3);
    }
  });

  it("makes the scrollable table a named, keyboard-focusable region", () => {
    render(<SetTopicView topic={topic} />);
    const region = screen.getByRole("region", { name: "Word list, scrolls sideways" });
    expect(region).toHaveAttribute("tabindex", "0");
    expect(region).toContainElement(screen.getByRole("table"));
    expect(region.className).toContain("overflow-x-auto");
  });
});
