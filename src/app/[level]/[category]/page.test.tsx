import { render, screen } from "@testing-library/react";
import CategoryPage from "./page";

async function renderGrammar() {
  const ui = await CategoryPage({
    params: Promise.resolve({ level: "a1", category: "grammar" }),
  } as PageProps<"/[level]/[category]">);
  return render(ui);
}

describe("CategoryPage", () => {
  it("reads the category as the heading, with the level badge beside it and still announced", async () => {
    await renderGrammar();
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveAccessibleName("Grammar");
    const badge = screen.getByText("A1");
    expect(heading).not.toContainElement(badge);
    expect(badge).not.toHaveAttribute("aria-hidden");
  });

  it("sets the order numerals in the sans face, not Plex Mono", async () => {
    await renderGrammar();
    const numeral = screen.getByText("1.");
    expect(numeral).toHaveClass("font-sans");
    expect(numeral).not.toHaveClass("font-mono");
  });
});
