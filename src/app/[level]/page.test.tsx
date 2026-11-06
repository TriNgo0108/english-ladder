import { render, screen } from "@testing-library/react";
import LevelPage from "./page";

describe("LevelPage", () => {
  it("names the level once in the heading and keeps the badge visible", async () => {
    const ui = await LevelPage({ params: Promise.resolve({ level: "a1" }) } as PageProps<"/[level]">);
    render(ui);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveAccessibleName("Level A1");
    const badge = screen.getByText("A1");
    expect(heading).toContainElement(badge);
    expect(badge).toHaveAttribute("aria-hidden", "true");
  });
});
