import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { withNav } from "@/components/nav/test-utils";
import { TopicTree } from "@/components/nav/TopicTree";
import { buildLevelNav } from "@/lib/nav";

let mockPath = "/";
vi.mock("next/navigation", () => ({ usePathname: () => mockPath }));

const groups = buildLevelNav("b1");
const grammar = groups.find((g) => g.category === "grammar")!;
const phrases = groups.find((g) => g.category !== "grammar")!;
// A late topic, so the scroll-into-view matters in a long level.
const current = grammar.topics[grammar.topics.length - 1];

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

function trigger(label: string) {
  return screen.getByRole("button", { name: new RegExp(`^${label}`) });
}
function marked() {
  return screen.getAllByRole("link").filter((a) => a.getAttribute("aria-current") === "page");
}

describe("TopicTree", () => {
  it("opens only the current topic's group", () => {
    mockPath = current.href.replace(/\/$/, "");
    render(withNav(<TopicTree level="b1" />));
    for (const g of groups) {
      expect(trigger(g.label)).toHaveAttribute("aria-expanded", g === grammar ? "true" : "false");
    }
  });

  it("marks the current topic", () => {
    mockPath = current.href;
    render(withNav(<TopicTree level="b1" />));
    expect(marked()).toHaveLength(1);
    expect(marked()[0]).toHaveTextContent(current.title);
  });

  it("scrolls the current topic into view inside its own list, never the page", () => {
    mockPath = current.href;
    const rect = (top: number, height: number) => ({ top, bottom: top + height, height }) as DOMRect;
    const spy = vi
      .spyOn(HTMLElement.prototype, "getBoundingClientRect")
      .mockImplementation(function (this: HTMLElement) {
        if (this.dataset.slot === "scroll-area-viewport") return rect(100, 500);
        if (this.getAttribute("aria-current") === "page") return rect(1000, 44);
        return rect(0, 0);
      });
    render(withNav(<div data-slot="scroll-area-viewport"><TopicTree level="b1" /></div>));
    const viewport = document.querySelector<HTMLElement>('[data-slot="scroll-area-viewport"]')!;
    // Centred: 1000 - 100 - (500 - 44) / 2
    expect(viewport.scrollTop).toBe(672);
    expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it("starts with every group closed on a level page", () => {
    mockPath = "/b1/";
    render(withNav(<TopicTree level="b1" />));
    for (const g of groups) expect(trigger(g.label)).toHaveAttribute("aria-expanded", "false");
  });

  // The [level] layout stays mounted while the reader moves around a level.
  it("follows client-side navigation into another category", () => {
    mockPath = "/b1/";
    const { rerender } = render(withNav(<TopicTree level="b1" />));
    mockPath = phrases.topics[0].href;
    rerender(withNav(<TopicTree level="b1" />));
    expect(trigger(phrases.label)).toHaveAttribute("aria-expanded", "true");
    expect(marked().map((a) => a.textContent)).toEqual([phrases.topics[0].title]);
  });

  it("keeps a group the reader opened open after navigating", async () => {
    mockPath = "/b1/";
    const { rerender } = render(withNav(<TopicTree level="b1" />));
    await userEvent.click(trigger(grammar.label));
    mockPath = phrases.topics[0].href;
    rerender(withNav(<TopicTree level="b1" />));
    expect(trigger(grammar.label)).toHaveAttribute("aria-expanded", "true");
  });

  it("calls onNavigate when a topic is chosen", async () => {
    mockPath = "/b1/grammar/";
    const onNavigate = vi.fn();
    render(withNav(<TopicTree level="b1" onNavigate={onNavigate} />));
    await userEvent.click(screen.getByRole("link", { name: grammar.topics[0].title }));
    expect(onNavigate).toHaveBeenCalled();
  });
});
