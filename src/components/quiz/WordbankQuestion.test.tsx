import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { WordbankQuestion } from "./WordbankQuestion";

const q = {
  kind: "wordbank" as const,
  prompt: "Put the words in order.",
  words: ["she", "teacher?", "a", "Is"],
  answer: "Is she a teacher?",
  feedback: "Is comes before the subject.",
};

const bank = () => screen.getByRole("group", { name: /word bank/i });
const line = () => screen.getByRole("group", { name: /your answer/i });
const fromBank = (name: string) =>
  userEvent.click(within(bank()).getAllByRole("button", { name })[0]);
const check = () =>
  userEvent.click(screen.getByRole("button", { name: "Check" }));

describe("WordbankQuestion", () => {
  it("builds the answer when chips are tapped in order", async () => {
    const onAnswered = vi.fn();
    render(<WordbankQuestion question={q} onAnswered={onAnswered} />);
    expect(screen.getByRole("button", { name: "Check" })).toBeDisabled();
    for (const w of ["Is", "she", "a", "teacher?"]) await fromBank(w);
    expect(
      within(line())
        .getAllByRole("button")
        .map((b) => b.textContent),
    ).toEqual(["Is", "she", "a", "teacher?"]);
    expect(screen.getByRole("button", { name: "Check" })).toBeEnabled();
    await check();
    expect(onAnswered).toHaveBeenCalledWith(true);
    expect(screen.getByText("Correct")).toBeInTheDocument();
  });

  it("handles a bank with the same word twice", async () => {
    const onAnswered = vi.fn();
    const dup = {
      ...q,
      words: ["the", "cat", "saw", "the", "dog"],
      answer: "The cat saw the dog.",
    };
    render(<WordbankQuestion question={dup} onAnswered={onAnswered} />);
    expect(within(bank()).getAllByRole("button", { name: "the" })).toHaveLength(2);
    await fromBank("the");
    expect(within(line()).getAllByRole("button", { name: "the" })).toHaveLength(1);
    expect(within(bank()).getAllByRole("button", { name: "the" })).toHaveLength(1);
    await fromBank("the");
    expect(within(line()).getAllByRole("button", { name: "the" })).toHaveLength(2);
    expect(within(bank()).queryByRole("button", { name: "the" })).toBeNull();
    // Return both, then build the real order.
    await userEvent.click(within(line()).getAllByRole("button", { name: "the" })[0]);
    await userEvent.click(within(line()).getAllByRole("button", { name: "the" })[0]);
    for (const w of ["the", "cat", "saw", "the", "dog"]) await fromBank(w);
    await check();
    expect(onAnswered).toHaveBeenCalledWith(true);
  });

  it("lets a selected chip be removed and reselected", async () => {
    render(<WordbankQuestion question={q} onAnswered={() => {}} />);
    await fromBank("she");
    expect(within(line()).getByRole("button", { name: "she" })).toBeInTheDocument();
    expect(within(bank()).queryByRole("button", { name: "she" })).toBeNull();
    await userEvent.click(within(line()).getByRole("button", { name: "she" }));
    expect(within(bank()).getByRole("button", { name: "she" })).toBeInTheDocument();
    await fromBank("she");
    expect(within(line()).getByRole("button", { name: "she" })).toBeInTheDocument();
  });

  it("marks a wrong order incorrect and shows the feedback", async () => {
    const onAnswered = vi.fn();
    render(<WordbankQuestion question={q} onAnswered={onAnswered} />);
    // Right words, wrong order.
    for (const w of ["she", "Is", "a", "teacher?"]) await fromBank(w);
    await check();
    expect(onAnswered).toHaveBeenCalledWith(false);
    expect(screen.getByText("Not quite")).toBeInTheDocument();
    expect(screen.getByText(/Is comes before the subject/)).toBeInTheDocument();
  });

  it("shows the words verbatim, including punctuation", () => {
    render(<WordbankQuestion question={q} onAnswered={() => {}} />);
    expect(within(bank()).getByRole("button", { name: "teacher?" })).toBeInTheDocument();
  });

  it("locks after checking", async () => {
    const onAnswered = vi.fn();
    render(<WordbankQuestion question={q} onAnswered={onAnswered} />);
    for (const w of ["she", "Is", "a", "teacher?"]) await fromBank(w);
    await check();
    await userEvent.click(within(line()).getAllByRole("button")[0]);
    expect(onAnswered).toHaveBeenCalledTimes(1);
    expect(within(line()).getAllByRole("button")).toHaveLength(4);
  });
});
