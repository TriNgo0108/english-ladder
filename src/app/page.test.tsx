import { render, screen } from "@testing-library/react";
import { topicsByLevel } from "@/content/registry";
import Home from "./page";

describe("Home", () => {
  it("shows the first three topics of each level as examples", () => {
    render(<Home />);
    const card = screen.getByRole("link", { name: /^A1/ });
    const titles = topicsByLevel("a1")
      .slice(0, 3)
      // Titles carry their own commas ("The verb be: am, is, are"), so only the name
      // before the colon is shown, separated by middle dots.
      .map((t) => t.title.split(":")[0])
      .join(" · ");
    expect(card).toHaveTextContent(`e.g. ${titles}`);
  });

  it("lays the level cards out three across on large screens", () => {
    render(<Home />);
    expect(screen.getAllByRole("list")[0]).toHaveClass("lg:grid-cols-3");
  });

  it("is the skip link's target", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toHaveAttribute("id", "content");
  });
});
