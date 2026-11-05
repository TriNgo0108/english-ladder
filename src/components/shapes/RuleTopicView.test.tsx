import { render, screen, within } from "@testing-library/react";
import type { RuleTopic } from "@/content/schema";
import { plainText } from "@/lib/rich-text";
import { RuleTopicView } from "./RuleTopicView";

const question = {
  kind: "choice" as const,
  stem: "She ___ a nurse.",
  options: ["is", "are"],
  answer: 0,
  feedback: "She is one person, so use is.",
};

const base: RuleTopic = {
  slug: "fixture-be",
  title: "Fixture: am, is, are",
  level: "a1",
  category: "grammar",
  order: 1,
  shape: "rule",
  explanation: "Use <b>am</b> with I.\n\nUse is with one person.",
  form: "I am · you are · she is",
  examples: [
    { sentence: "I <b>am</b> here.", why: "<b>am</b> because the subject is I." },
    { sentence: "She <b>is</b> a nurse.", why: "is because she is one person." },
    { sentence: "They <b>are</b> late.", why: "are because they is more than one." },
  ],
  pitfall: { wrong: "She very tired.", right: "She <b>is</b> very tired.", why: "English needs the verb." },
  quiz: [question, question, question, question],
  levelRationale: "Fixture rationale.",
};

/** Matches a <p> whose full text (including any <b> children) is exactly `text`. */
const paragraph = (text: string) => (_: string, el: Element | null) =>
  el?.tagName === "P" && el.textContent === text;

const withoutExtras: RuleTopic = { ...base, form: undefined, pitfall: undefined };

describe("RuleTopicView", () => {
  it("shows the title, explanation, and level badge", () => {
    render(<RuleTopicView topic={base} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Fixture: am, is, are");
    expect(screen.getByText(/with I\./)).toHaveTextContent("Use am with I.");
    expect(screen.getByText("Use is with one person.")).toBeInTheDocument();
    expect(within(screen.getByRole("heading", { level: 1 })).getByText("A1")).toBeInTheDocument();
  });

  it("renders a breadcrumb from the chooser down to the topic", () => {
    render(<RuleTopicView topic={base} />);
    const nav = screen.getByRole("navigation", { name: "Breadcrumb" });
    const links = within(nav).getAllByRole("link");
    // next/link drops the trailing slash outside a Next build; the build adds it back.
    expect(links.map((a) => a.getAttribute("href")?.replace(/(.)\/$/, "$1"))).toEqual([
      "/",
      "/a1",
      "/a1/grammar",
    ]);
    expect(links.map((a) => a.textContent)).toEqual(["All levels", "Level A1", "Grammar"]);
    expect(within(nav).getByText("Fixture: am, is, are")).toHaveAttribute("aria-current", "page");
  });

  it("shows every example with its why-line", () => {
    render(<RuleTopicView topic={base} />);
    for (const ex of base.examples) {
      expect(screen.getByText(paragraph(plainText(ex.sentence)))).toBeInTheDocument();
      expect(screen.getByText(paragraph(plainText(ex.why)))).toBeInTheDocument();
    }
  });

  it("bolds the target structure inside an example", () => {
    const { container } = render(<RuleTopicView topic={base} />);
    const bolds = [...container.querySelectorAll("b")].map((b) => b.textContent);
    expect(bolds).toEqual(expect.arrayContaining(["am", "is", "are"]));
    expect(container.textContent).not.toContain("<b>");
  });

  it("renders <b> in a why-line as bold, not as a literal tag", () => {
    render(<RuleTopicView topic={base} />);
    const why = screen.getByText(paragraph("am because the subject is I."));
    expect(why.querySelector("b")).toHaveTextContent("am");
  });

  it("renders the form in the monospace role when present", () => {
    render(<RuleTopicView topic={base} />);
    const form = screen.getByText("I am · you are · she is");
    expect(form).toHaveClass("font-mono");
    expect(screen.getByRole("heading", { name: "Form" })).toBeInTheDocument();
  });

  it("omits the form block when the topic has none", () => {
    render(<RuleTopicView topic={withoutExtras} />);
    expect(screen.queryByRole("heading", { name: "Form" })).toBeNull();
    expect(screen.queryByText("I am · you are · she is")).toBeNull();
  });

  it("shows the pitfall with both wrong and right forms when present", () => {
    render(<RuleTopicView topic={base} />);
    const box = screen.getByRole("region", { name: "Common mistake" });
    expect(within(box).getByText("Not this")).toBeInTheDocument();
    expect(within(box).getByText(paragraph("She very tired."))).toBeInTheDocument();
    expect(within(box).getByText("Say this")).toBeInTheDocument();
    expect(within(box).getByText(paragraph("She is very tired."))).toBeInTheDocument();
    expect(within(box).getByText("English needs the verb.")).toBeInTheDocument();
  });

  it("omits the pitfall block when the topic has none", () => {
    render(<RuleTopicView topic={withoutExtras} />);
    expect(screen.queryByRole("region", { name: "Common mistake" })).toBeNull();
    expect(screen.queryByText(paragraph("She very tired."))).toBeNull();
  });
});
