import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { Question } from "@/content/schema";
import { verbToBe } from "@/content/a1/grammar/verb-to-be";
import { Quiz } from "./Quiz";

const questions: Question[] = [
  { kind: "choice", stem: "Pick one", options: ["yes", "no"], answer: 0, feedback: "Because yes." },
  { kind: "gap", stem: "Type go", answers: ["go"], feedback: "Go is right." },
  { kind: "mistake", tokens: ["I", "goed"], wrongIndex: 1, correction: "went", feedback: "Irregular." },
];

async function answerAll(right: [boolean, boolean, boolean]) {
  const [c, g, m] = right;
  await userEvent.click(screen.getByRole("button", { name: c ? /^yes/ : /^no/ }));
  await userEvent.type(screen.getByRole("textbox"), (g ? "go" : "stop") + "{Enter}");
  await userEvent.click(screen.getByRole("button", { name: m ? "goed" : "I" }));
}

describe("Quiz", () => {
  it("renders every question in the quiz", () => {
    render(<Quiz questions={questions} />);
    const list = screen.getByRole("list");
    expect(within(list).getAllByRole("group")).toHaveLength(3);
    expect(screen.getByText("Pick one")).toBeInTheDocument();
    expect(screen.getByText("Type go")).toBeInTheDocument();
  });

  it("shows a score only after all questions are answered", async () => {
    render(<Quiz questions={questions} />);
    await userEvent.click(screen.getByRole("button", { name: /^yes/ }));
    expect(screen.queryByText(/You got/)).not.toBeInTheDocument();
    await userEvent.type(screen.getByRole("textbox"), "go{Enter}");
    expect(screen.queryByText(/You got/)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "goed" }));
    expect(screen.getByText("You got 3 of 3")).toBeInTheDocument();
  });

  it("counts the score correctly across mixed question types", async () => {
    render(<Quiz questions={questions} />);
    await answerAll([true, false, true]);
    expect(screen.getByText("You got 2 of 3")).toBeInTheDocument();
  });

  it("announces feedback through an aria-live region", async () => {
    const { container } = render(<Quiz questions={questions} />);
    const regions = container.querySelectorAll('[aria-live="polite"]');
    expect(regions.length).toBeGreaterThanOrEqual(3);
    expect(regions[0]).toBeEmptyDOMElement();
    await userEvent.click(screen.getByRole("button", { name: /^no/ }));
    expect(regions[0]).toHaveTextContent("Because yes.");
  });

  it("resets to unanswered when retried, keeping no stored state", async () => {
    const local = localStorage.length;
    const session = sessionStorage.length;
    render(<Quiz questions={questions} />);
    await answerAll([true, true, true]);
    expect(localStorage.length).toBe(local);
    expect(sessionStorage.length).toBe(session);
    expect(document.cookie).toBe("");
    await userEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(screen.queryByText(/You got/)).not.toBeInTheDocument();
    expect(screen.queryByText("Correct")).not.toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(screen.getByRole("textbox")).toBeEnabled();
    await answerAll([false, false, false]);
    expect(screen.getByText("You got 0 of 3")).toBeInTheDocument();
  });

  it("renders and scores the real verb-to-be quiz", async () => {
    render(<Quiz questions={verbToBe.quiz} />);
    const n = verbToBe.quiz.length;
    expect(screen.getByRole("list").children).toHaveLength(n);
    const top = Array.from(screen.getByRole("list").children) as HTMLElement[];
    for (let i = 0; i < n; i++) {
      const q = verbToBe.quiz[i];
      const item = within(top[i]);
      if (q.kind === "choice") {
        await userEvent.click(item.getAllByRole("button")[q.answer]);
      } else if (q.kind === "gap") {
        await userEvent.type(item.getByRole("textbox"), q.answers[0] + "{Enter}");
      } else if (q.kind === "wordbank") {
        for (const w of q.answer.split(" ")) {
          const bankGroup = item.getByRole("group", { name: /word bank/i });
          await userEvent.click(
            within(bankGroup).getAllByRole("button").find((b) => b.textContent === w)!,
          );
        }
        await userEvent.click(item.getByRole("button", { name: "Check" }));
      } else {
        await userEvent.click(item.getAllByRole("button")[q.wrongIndex]);
      }
    }
    expect(screen.getByText(`You got ${n} of ${n}`)).toBeInTheDocument();
  });
});
