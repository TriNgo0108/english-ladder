import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/nav/SiteHeader";
import { withNav } from "@/components/nav/test-utils";

vi.mock("next/navigation", () => ({ usePathname: () => "/b1/" }));

describe("SiteHeader", () => {
  it("starts with a skip link to the page content", () => {
    render(withNav(<SiteHeader />));
    const first = screen.getAllByRole("link")[0];
    expect(first).toHaveAccessibleName("Skip to content");
    expect(first).toHaveAttribute("href", "#content");
  });
});
