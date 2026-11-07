import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

const INDEX = [e("verb-to-be", "The verb be", "a1"), e("articles", "Articles", "a1"), e("articles", "Articles", "a2")];
const okResponse = () => Promise.resolve({ ok: true, json: () => Promise.resolve(INDEX) });
let fetchMock: ReturnType<typeof vi.fn>;

beforeEach(() => {
  fetchMock = vi.fn(okResponse);
  vi.stubGlobal("fetch", fetchMock);
});
afterEach(() => {
  vi.unstubAllGlobals();
});

describe("Search", () => {
  it("fetches the index from the base-pathed static file once", async () => {
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.type(input, "ver");
    await screen.findByRole("option");
    await user.type(input, "b");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith("/english-ladder/search-index.json");
  });
  it("shows results typed before the fetch resolved, once it resolves", async () => {
    let resolve!: (v: unknown) => void;
    fetchMock.mockImplementation(() => new Promise((r) => (resolve = r)));
    const user = userEvent.setup();
    render(<Search />);
    await user.type(screen.getByLabelText("Search topics"), "verb");
    expect(screen.queryByText("No topics match")).toBeNull();
    expect(screen.queryByRole("option")).toBeNull();
    resolve({ ok: true, json: () => Promise.resolve(INDEX) });
    expect(await screen.findByRole("option", { name: /The verb be/ })).toBeInTheDocument();
  });
  it("stays usable and shows no false empty state when the fetch fails; a later focus retries", async () => {
    fetchMock.mockImplementationOnce(() => Promise.reject(new Error("offline")));
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.click(input);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    await new Promise((r) => setTimeout(r, 0));
    expect(screen.queryByText("No topics match")).toBeNull();
    await user.tab();
    await user.click(input);
    await user.keyboard("verb");
    expect(await screen.findByRole("option", { name: /The verb be/ })).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });
  it("treats a non-ok response as a failure and retries later", async () => {
    fetchMock.mockImplementationOnce(() => Promise.resolve({ ok: false, json: () => Promise.resolve(null) }));
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.click(input);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    await new Promise((r) => setTimeout(r, 0));
    expect(screen.queryByText("No topics match")).toBeNull();
    await user.keyboard("v");
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    expect(await screen.findByRole("option", { name: /The verb be/ })).toBeInTheDocument();
  });
  it("treats a non-array JSON response as a failure and retries later", async () => {
    fetchMock.mockImplementationOnce(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ error: "bad" }) }));
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.click(input);
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    await new Promise((r) => setTimeout(r, 0));
    expect(screen.queryByText("No topics match")).toBeNull();
    await user.keyboard("v");
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    expect(await screen.findByRole("option", { name: /The verb be/ })).toBeInTheDocument();
  });
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
  it("mousedown on a result is default-prevented, so Safari never blurs the input before the click lands", async () => {
    const user = userEvent.setup();
    render(<Search />);
    const input = screen.getByLabelText("Search topics");
    await user.type(input, "articles");
    const opts = await screen.findAllByRole("option");
    // Safari does not focus links on mousedown: unless the default is
    // prevented, the input blurs with relatedTarget null. Model that.
    const proceeded = fireEvent.mouseDown(opts[0]);
    if (proceeded) fireEvent.blur(input, { relatedTarget: null });
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(input).toHaveAttribute("aria-expanded", "true");
    const click = vi.fn((ev: Event) => ev.preventDefault());
    opts[0].addEventListener("click", click);
    fireEvent.click(opts[0]);
    expect(click).toHaveBeenCalledTimes(1);
  });
  it("anchors the dropdown to the header below sm, so it cannot overflow the viewport on mobile", () => {
    const { container } = render(<Search />);
    const wrapper = container.firstElementChild as HTMLElement;
    expect(wrapper.className).toContain("sm:relative");
    expect(wrapper.className.split(" ")).not.toContain("relative");
  });
});
