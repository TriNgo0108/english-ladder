import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "@/components/Search";
import type { SearchEntry } from "@/lib/search-index";

const e = (slug: string, title: string, level: "a1" | "a2"): SearchEntry => ({
  slug,
  title,
  level,
  category: "grammar",
  href: `/${level}/grammar/${slug}/`,
  haystack: title.toLowerCase(),
});

vi.mock("@/lib/search-data", () => ({
  loadIndex: () => [e("verb-to-be", "The verb be", "a1"), e("articles", "Articles", "a1"), e("articles", "Articles", "a2")],
}));

describe("Search", () => {
  it("has a labelled search input", () => {
    render(<Search />);
    expect(screen.getByLabelText("Search topics")).toHaveAttribute("type", "search");
  });
  it("shows a result with level and category after typing", async () => {
    const user = userEvent.setup();
    render(<Search />);
    await user.type(screen.getByLabelText("Search topics"), "verb");
    const option = await screen.findByRole("option", { name: /The verb be/ });
    expect(option).toHaveTextContent("A1");
    expect(option).toHaveTextContent("Grammar");
  });
  it("shows No topics match for an unmatched query and nothing for blank", async () => {
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.type(input, "   ");
    expect(screen.queryByText("No topics match")).toBeNull();
    await user.type(input, "zzz");
    expect(await screen.findByText("No topics match")).toBeInTheDocument();
  });
  it("moves with arrow keys, and Escape clears and closes", async () => {
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.type(input, "articles");
    const opts = await screen.findAllByRole("option");
    expect(opts).toHaveLength(2);
    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute("aria-activedescendant", opts[0].id);
    await user.keyboard("{ArrowDown}");
    expect(input).toHaveAttribute("aria-activedescendant", opts[1].id);
    await user.keyboard("{ArrowUp}");
    expect(input).toHaveAttribute("aria-activedescendant", opts[0].id);
    await user.keyboard("{Escape}");
    expect(input).toHaveValue("");
    expect(input).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("listbox")).toBeNull();
  });
  it("Enter follows the active result", async () => {
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.type(input, "articles");
    const opts = await screen.findAllByRole("option");
    await user.keyboard("{ArrowDown}{ArrowDown}");
    const click = vi.fn((ev: Event) => ev.preventDefault());
    opts[1].addEventListener("click", click);
    await user.keyboard("{Enter}");
    expect(click).toHaveBeenCalledTimes(1);
    expect(opts[1].getAttribute("href")).toMatch(new RegExp("^/a2/grammar/articles/?$"));
  });
  it("closes the results when focus leaves the combobox, and reopens on focus", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Search />
        <button type="button">elsewhere</button>
      </div>,
    );
    const input = screen.getByLabelText("Search topics");
    await user.type(input, "articles");
    expect(await screen.findByRole("listbox")).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-expanded", "true");
    await user.click(screen.getByRole("button", { name: "elsewhere" }));
    expect(screen.queryByRole("listbox")).toBeNull();
    expect(input).toHaveAttribute("aria-expanded", "false");
    await user.click(input);
    expect(await screen.findByRole("listbox")).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-expanded", "true");
  });
  it("does not close on mousedown of a result, so the click still navigates", async () => {
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.type(input, "articles");
    const opts = await screen.findAllByRole("option");
    const click = vi.fn((ev: Event) => ev.preventDefault());
    opts[0].addEventListener("click", click);
    await user.click(opts[0]);
    expect(click).toHaveBeenCalledTimes(1);
  });
});
