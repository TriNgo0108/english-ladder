import { render, screen } from "@testing-library/react";
import { Section } from "@/components/Section";

describe("Section", () => {
  it("labels the section by its heading", () => {
    render(
      <Section headingId="examples-heading" title="Examples">
        <p>body</p>
      </Section>,
    );
    expect(screen.getByRole("region", { name: "Examples" })).toContainElement(screen.getByText("body"));
  });

  it("keeps headings clear of the sticky top bar", () => {
    render(
      <Section headingId="examples-heading" title="Examples">
        <p>body</p>
      </Section>,
    );
    expect(screen.getByRole("heading", { level: 2, name: "Examples" })).toHaveClass("scroll-mt-24");
  });
});
