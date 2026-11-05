import { render, screen } from "@testing-library/react";
import { TopicNav } from "@/components/TopicNav";
import type { Topic } from "@/content/schema";

const tp = (slug: string, title: string) =>
  ({ slug, title, level: "a1", category: "grammar", shape: "rule", order: 1 }) as unknown as Topic;

describe("TopicNav", () => {
  it("renders nothing with neither neighbour", () => {
    const { container } = render(<TopicNav />);
    expect(container).toBeEmptyDOMElement();
  });
  it("renders only the side that exists", () => {
    render(<TopicNav next={tp("b", "Beta")} />);
    expect(screen.getByRole("link", { name: "Next: Beta" }).getAttribute("href")).toMatch(new RegExp("^/a1/grammar/b/?$"));
    expect(screen.queryByText(/Previous/)).toBeNull();
  });
  it("renders both", () => {
    render(<TopicNav prev={tp("a", "Alpha")} next={tp("b", "Beta")} />);
    expect(screen.getByRole("link", { name: "Previous: Alpha" })).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
