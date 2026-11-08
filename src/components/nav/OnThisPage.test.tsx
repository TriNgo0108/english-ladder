import { act, render, screen } from "@testing-library/react";
import { OnThisPage } from "@/components/nav/OnThisPage";
import { allTopics } from "@/content/registry";
import { topicSections } from "@/lib/topic-sections";

type Callback = (entries: Array<Pick<IntersectionObserverEntry, "target" | "isIntersecting" | "boundingClientRect">>) => void;

let observerCallback: Callback | undefined;
class FakeObserver {
  constructor(cb: Callback) {
    observerCallback = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeEach(() => {
  observerCallback = undefined;
  vi.stubGlobal("IntersectionObserver", FakeObserver);
});
afterEach(() => vi.unstubAllGlobals());

const rule = allTopics.find((t) => t.shape === "rule")!;
const sections = topicSections(rule);

function Page() {
  return (
    <>
      {sections.map((s) => (
        <h2 key={s.id} id={s.id}>
          {s.label}
        </h2>
      ))}
      <OnThisPage sections={sections} />
    </>
  );
}

describe("OnThisPage", () => {
  it("links to every section of the topic in order", () => {
    render(<Page />);
    const nav = screen.getByRole("navigation", { name: "On this page" });
    const hrefs = Array.from(nav.querySelectorAll("a")).map((a) => a.getAttribute("href"));
    expect(hrefs).toEqual(sections.map((s) => `#${s.id}`));
  });

  it("marks the section being read", () => {
    render(<Page />);
    const target = document.getElementById("examples-heading")!;
    act(() =>
      observerCallback!([{ target, isIntersecting: true, boundingClientRect: { top: 50 } as DOMRect }]),
    );
    expect(screen.getByRole("link", { name: "Examples" })).toHaveAttribute("aria-current", "location");
    expect(screen.getByRole("link", { name: "Quiz" })).not.toHaveAttribute("aria-current");
  });
});
