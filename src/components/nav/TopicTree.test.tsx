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

  it("marks the current topic and scrolls it into view", () => {
    mockPath = current.href;
    render(<TopicTree groups={groups} />);
    const marked = screen
      .getAllByRole("link")
      .filter((a) => a.getAttribute("aria-current") === "page");
    expect(marked).toHaveLength(1);
    expect(marked[0]).toHaveTextContent(current.title);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
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
