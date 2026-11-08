import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TopicTree } from "@/components/nav/TopicTree";
import { buildLevelNav } from "@/lib/nav";

let mockPath = "/";
vi.mock("next/navigation", () => ({ usePathname: () => mockPath }));

const groups = buildLevelNav("b1");
const grammar = groups.find((g) => g.category === "grammar")!;
// A late topic, so the scroll-into-view matters in a long level.
const current = grammar.topics[grammar.topics.length - 1];

beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn();
});

function trigger(label: string) {
  return screen.getByRole("button", { name: new RegExp(`^${label}`) });
}

describe("TopicTree", () => {
  it("opens only the current topic's group", () => {
    mockPath = current.href.replace(/\/$/, "");
    render(<TopicTree groups={groups} />);
    for (const g of groups) {
      expect(trigger(g.label)).toHaveAttribute("aria-expanded", g === grammar ? "true" : "false");
    }
  });

  it("marks the current topic", () => {
    mockPath = current.href;
    render(<TopicTree groups={groups} />);
    const marked = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("aria-current") === "page");
    expect(marked).toHaveLength(1);
    expect(marked[0]).toHaveTextContent(current.title);
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
    render(
      <div data-slot="scroll-area-viewport">
        <TopicTree groups={groups} />
      </div>,
    );
    const viewport = document.querySelector<HTMLElement>('[data-slot="scroll-area-viewport"]')!;
    // Centred: 1000 - 100 - (500 - 44) / 2
    expect(viewport.scrollTop).toBe(672);
    expect(Element.prototype.scrollIntoView).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it("starts with every group closed on a level page", () => {
    mockPath = "/b1/";
    render(<TopicTree groups={groups} />);
    for (const g of groups) expect(trigger(g.label)).toHaveAttribute("aria-expanded", "false");
  });

  it("calls onNavigate when a topic is chosen", async () => {
    mockPath = "/b1/grammar/";
    const onNavigate = vi.fn();
    render(<TopicTree groups={groups} onNavigate={onNavigate} />);
    await userEvent.click(screen.getByRole("link", { name: grammar.topics[0].title }));
    expect(onNavigate).toHaveBeenCalled();
  });
});
