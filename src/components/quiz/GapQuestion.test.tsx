import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GapQuestion } from "./GapQuestion";
import { BUTTON_BASE } from "./shared";

const q = {
  kind: "gap" as const,
  stem: "It ___ cold today.",
  answers: ["isn't", "is not"],
  feedback: "Use is plus not.",
};

async function submit(text: string) {
  await userEvent.type(screen.getByRole("textbox"), text);
  await userEvent.click(screen.getByRole("button", { name: "Check" }));
}

describe("GapQuestion", () => {
  it("gives the answer field a visible control border", () => {
    render(<GapQuestion question={q} onAnswered={vi.fn()} />);
    expect(screen.getByRole("textbox")).toHaveClass("border-control");
  });
  // Check is the filled accent button; its edge is the accent fill itself.
  it("gives outline answer buttons a visible control border", () => {
    expect(BUTTON_BASE.split(" ")).toContain("border-control");
  });
  it("accepts the stored answer", async () => {
    const onAnswered = vi.fn();
    render(<GapQuestion question={q} onAnswered={onAnswered} />);
    await submit("is not");
    expect(onAnswered).toHaveBeenCalledWith(true);
    expect(screen.getByText("Correct")).toBeInTheDocument();
  });

  it("accepts an alternative accepted answer", async () => {
    const onAnswered = vi.fn();
    render(<GapQuestion question={q} onAnswered={onAnswered} />);
    await submit("  ISN'T ");
    expect(onAnswered).toHaveBeenCalledWith(true);
  });

  it("accepts a curly apostrophe for a straight one", async () => {
    const onAnswered = vi.fn();
    render(<GapQuestion question={q} onAnswered={onAnswered} />);
    await submit("isn’t");
    expect(onAnswered).toHaveBeenCalledWith(true);
  });

  it("rejects a wrong answer and shows the feedback", async () => {
    const onAnswered = vi.fn();
    render(<GapQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.type(screen.getByRole("textbox"), "are{Enter}");
    expect(onAnswered).toHaveBeenCalledWith(false);
    expect(screen.getByText("Not quite")).toBeInTheDocument();
    expect(screen.getByText(/Use is plus not/)).toBeInTheDocument();
    expect(screen.getByText(/isn't/)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("does not submit an empty input", async () => {
    const onAnswered = vi.fn();
    render(<GapQuestion question={q} onAnswered={onAnswered} />);
    await userEvent.click(screen.getByRole("button", { name: "Check" }));
    await userEvent.type(screen.getByRole("textbox"), "   {Enter}");
    expect(onAnswered).not.toHaveBeenCalled();
    expect(screen.queryByText("Not quite")).not.toBeInTheDocument();
  });

  it("accepts a correct answer typed with a trailing full stop", async () => {
    const onAnswered = vi.fn();
    render(<GapQuestion question={q} onAnswered={onAnswered} />);
    await submit("is not.");
    expect(onAnswered).toHaveBeenCalledWith(true);
  });

  it("does not submit when the input is only punctuation", async () => {
    const onAnswered = vi.fn();
    render(<GapQuestion question={q} onAnswered={onAnswered} />);
    await submit(" .");
    expect(onAnswered).not.toHaveBeenCalled();
    await userEvent.clear(screen.getByRole("textbox"));
    await submit("-");
    expect(onAnswered).not.toHaveBeenCalled();
  });
});
