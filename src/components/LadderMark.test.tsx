import { render } from "@testing-library/react";
import { LadderMark } from "@/components/LadderMark";

describe("LadderMark", () => {
  it("is decorative", () => {
    const { container } = render(<LadderMark />);
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  });
  it("has no accessible name of its own", () => {
    const { container } = render(<LadderMark />);
    expect(container.querySelector("title")).toBeNull();
  });
});
