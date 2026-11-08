import { render, screen } from "@testing-library/react";
import TopicPage from "./page";

class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

beforeEach(() => vi.stubGlobal("IntersectionObserver", NoopObserver));
afterEach(() => vi.unstubAllGlobals());

// A writing topic with a dozen situations: its rail is taller than a short laptop screen.
const params = { level: "b1", category: "writing", topic: "a-professional-email" };

async function renderTopic() {
  const ui = await TopicPage({ params: Promise.resolve(params) } as PageProps<"/[level]/[category]/[topic]">);
  return render(ui);
}

describe("TopicPage", () => {
  it("lets a long rail scroll on its own on short screens", async () => {
    await renderTopic();
    const rail = screen.getByRole("navigation", { name: "On this page" }).parentElement!;
    expect(rail).toHaveClass("sticky", "overflow-y-auto", "max-h-[calc(100dvh-7rem)]");
  });

  it("is the skip link's target", async () => {
    await renderTopic();
    expect(screen.getByRole("main")).toHaveAttribute("id", "content");
  });
});
