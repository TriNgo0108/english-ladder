import { render, screen } from "@testing-library/react";
import { LevelLinks } from "@/components/nav/LevelLinks";
import { withNav } from "@/components/nav/test-utils";

let mockPath = "/";
vi.mock("next/navigation", () => ({ usePathname: () => mockPath }));

function current() {
  return screen.getAllByRole("link").filter((a) => a.getAttribute("aria-current") === "page");
}

describe("LevelLinks", () => {
  it("links every level", () => {
    render(withNav(<LevelLinks orientation="row" />));
    expect(screen.getAllByRole("link").map((a) => a.textContent)).toEqual(["A1", "A2", "B1", "B2", "C1"]);
  });

  it("marks the current level", () => {
    mockPath = "/b2/writing/";
    render(withNav(<LevelLinks orientation="row" />));
    expect(current().map((a) => a.textContent)).toEqual(["B2"]);
  });

  it("marks the level on a level path without a trailing slash", () => {
    mockPath = "/c1";
    render(withNav(<LevelLinks orientation="column" />));
    expect(current().map((a) => a.textContent)).toEqual(["C1"]);
  });

  it("marks no level on an unknown path", () => {
    mockPath = "/zz/";
    render(withNav(<LevelLinks orientation="row" />));
    expect(current()).toHaveLength(0);
  });

  it("marks no level on a 404 under a real level", () => {
    mockPath = "/b1/grammar/old-slug/";
    render(withNav(<LevelLinks orientation="row" />));
    expect(current()).toHaveLength(0);
  });
});
