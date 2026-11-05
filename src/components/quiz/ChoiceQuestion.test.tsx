import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChoiceQuestion } from "./ChoiceQuestion";

const q = {
  kind: "choice" as const,
  stem: "My brother ___ a doctor.",
  options: ["is", "are", "am"],
  answer: 0,
  feedback: "Brother is one person, so is.",
};

describe("ChoiceQuestion", () => {
  it("marks the right option correct and shows the feedback", async () => {
    const onAnswered = vi.fn();
    render(<ChoiceQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.click(screen.getByRole("button", { name: /^is/ }));
    expect(onAnswered).toHaveBeenCalledWith(true);
    expect(screen.getByText("Correct")).toBeInTheDocument();
    expect(screen.getByText(/Brother is one person/)).toBeInTheDocument();
  });

  it("marks a wrong option incorrect and still shows the feedback", async () => {
    const onAnswered = vi.fn();
    render(<ChoiceQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.click(screen.getByRole("button", { name: /^are/ }));
    expect(onAnswered).toHaveBeenCalledWith(false);
    expect(screen.getByText("Not quite")).toBeInTheDocument();
    expect(screen.getByText(/Brother is one person/)).toBeInTheDocument();
  });

  it("reveals which option was correct after a wrong answer", async () => {
    render(<ChoiceQuestion question={q} onAnswered={() => {}} />);
    await userEvent.click(screen.getByRole("button", { name: /^are/ }));
    expect(
      screen.getByRole("button", { name: /^is.*correct answer/i }),
    ).toBeInTheDocument();
  });

  it("does not change the result once answered", async () => {
    const onAnswered = vi.fn();
    render(<ChoiceQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.click(screen.getByRole("button", { name: /^are/ }));
    await userEvent.click(screen.getByRole("button", { name: /^is/ }));
    expect(onAnswered).toHaveBeenCalledTimes(1);
    expect(onAnswered).toHaveBeenCalledWith(false);
    expect(screen.getByText("Not quite")).toBeInTheDocument();
    expect(screen.queryByText("Correct")).not.toBeInTheDocument();
  });

  it("is operable by keyboard alone", async () => {
    const onAnswered = vi.fn();
    render(<ChoiceQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.tab();
    expect(screen.getByRole("button", { name: /^is/ })).toHaveFocus();
    await userEvent.tab();
    expect(screen.getByRole("button", { name: /^are/ })).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    expect(onAnswered).toHaveBeenCalledWith(false);
  });

  it("has a live region before answering, and it holds the feedback after", async () => {
    const { container } = render(
      <ChoiceQuestion question={q} onAnswered={() => {}} />,
    );
    const live = container.querySelector('[aria-live="polite"]')!;
    expect(live).toBeInTheDocument();
    expect(live).toBeEmptyDOMElement();
    await userEvent.click(screen.getByRole("button", { name: /^is/ }));
    expect(live).toHaveTextContent(/Brother is one person/);
  });
});
