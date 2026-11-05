import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MistakeQuestion } from "./MistakeQuestion";

const q = {
  kind: "mistake" as const,
  tokens: ["She", "are", "a", "teacher."],
  wrongIndex: 1,
  correction: "is",
  feedback: "She takes is.",
};

describe("MistakeQuestion", () => {
  it("accepts a click on the wrong token", async () => {
    const onAnswered = vi.fn();
    render(<MistakeQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.click(screen.getByRole("button", { name: "are" }));
    expect(onAnswered).toHaveBeenCalledWith(true);
    expect(screen.getByText("Correct")).toBeInTheDocument();
  });

  it("rejects a click on a correct token", async () => {
    const onAnswered = vi.fn();
    render(<MistakeQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.click(screen.getByRole("button", { name: "She" }));
    expect(onAnswered).toHaveBeenCalledWith(false);
    expect(screen.getByText("Not quite")).toBeInTheDocument();
    expect(screen.getByText(/She takes is/)).toBeInTheDocument();
  });

  it("shows the correction after answering", async () => {
    render(<MistakeQuestion question={q} onAnswered={() => {}} />);
    expect(screen.queryByText(/Correction/)).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole("button", { name: "a" }));
    expect(screen.getByText(/Correction/)).toHaveTextContent("is");
  });

  it("does not change the result once answered", async () => {
    const onAnswered = vi.fn();
    render(<MistakeQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.click(screen.getByRole("button", { name: "She" }));
    await userEvent.click(screen.getByRole("button", { name: /are/ }));
    expect(onAnswered).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Not quite")).toBeInTheDocument();
  });

  it("renders every token as a focusable control", async () => {
    render(<MistakeQuestion question={q} onAnswered={() => {}} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
    for (const b of buttons) {
      await userEvent.tab();
      expect(b).toHaveFocus();
    }
    await userEvent.keyboard(" ");
    expect(screen.getByText("Not quite")).toBeInTheDocument();
  });
});
