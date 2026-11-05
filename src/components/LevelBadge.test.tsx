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
    expect(el).toHaveStyle({ backgroundColor: "#2563EB", color: "#FFFFFF" });
  });
});
