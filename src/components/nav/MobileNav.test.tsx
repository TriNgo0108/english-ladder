import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MobileNav } from "@/components/nav/MobileNav";
import { withNav } from "@/components/nav/test-utils";
import { buildAllNav } from "@/lib/nav";

let mockPath = "/";
vi.mock("next/navigation", () => ({ usePathname: () => mockPath }));

const navByLevel = buildAllNav();
const b1Topic = navByLevel.b1[0].topics[0];

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

describe("MobileNav", () => {
  it("opens a menu with the level links and the current level's topics", async () => {
    mockPath = b1Topic.href;
    render(withNav(<MobileNav />));
    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("link", { name: "A1" })).toBeInTheDocument();
    expect(within(dialog).getByRole("link", { name: b1Topic.title })).toBeInTheDocument();
  });

  it("shows level links only when there is no current level", async () => {
    mockPath = "/";
    render(withNav(<MobileNav />));
    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("link", { name: "C1" })).toBeInTheDocument();
    expect(within(dialog).queryByRole("navigation", { name: "Topics in this level" })).toBeNull();
  });

  it("closes after a topic is chosen", async () => {
    mockPath = b1Topic.href;
    render(withNav(<MobileNav />));
    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    await userEvent.click(within(screen.getByRole("dialog")).getByRole("link", { name: b1Topic.title }));
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("shows level links only on a 404 under a real level", async () => {
    mockPath = "/b1/grammar/old-slug/";
    render(withNav(<MobileNav />));
    await userEvent.click(screen.getByRole("button", { name: "Open menu" }));
    expect(within(screen.getByRole("dialog")).queryByRole("navigation", { name: "Topics in this level" })).toBeNull();
  });
});
