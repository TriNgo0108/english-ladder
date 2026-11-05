import { render, screen } from "@testing-library/react";
import { CrossLevelLinks } from "@/components/CrossLevelLinks";
import type { Topic } from "@/content/schema";

const sib = (level: string) =>
  ({ slug: "articles", title: "Articles", level, category: "grammar", shape: "rule", order: 1 }) as unknown as Topic;

describe("CrossLevelLinks", () => {
  it("links to the same topic slug at other levels", () => {
    render(<CrossLevelLinks siblings={[sib("a2")]} />);
    expect(screen.getByRole("link").getAttribute("href")).toMatch(new RegExp("^/a2/grammar/articles/?$"));
  });
  it("renders nothing when the topic has no siblings", () => {
    const { container } = render(<CrossLevelLinks siblings={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
  it("labels each sibling with its level", () => {
    render(<CrossLevelLinks siblings={[sib("a2"), sib("b1")]} />);
    expect(screen.getByRole("link", { name: /A2/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /B1/ })).toBeInTheDocument();
  });
});
