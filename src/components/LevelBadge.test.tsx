import { render, screen } from "@testing-library/react";
import { LevelBadge } from "./LevelBadge";

describe("LevelBadge", () => {
  it("renders the level as text, never colour alone", () => {
    render(<LevelBadge level="b1" />);
    expect(screen.getByText("B1")).toBeInTheDocument();
  });
  it("uses the level ramp and foreground colours", () => {
    render(<LevelBadge level="c1" />);
    const el = screen.getByText("C1");
    expect(el).toHaveStyle({ backgroundColor: "#9A3412", color: "#FFFFFF" });
  });
  it("is announced by default", () => {
    render(<LevelBadge level="a1" />);
    expect(screen.getByText("A1")).not.toHaveAttribute("aria-hidden");
  });
  it("hides itself from screen readers but keeps the visible text when decorative", () => {
    render(<LevelBadge level="a2" decorative />);
    const el = screen.getByText("A2");
    expect(el).toBeVisible();
    expect(el).toHaveAttribute("aria-hidden", "true");
  });
});
