import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeToggle } from "@/components/ThemeToggle";

const html = () => document.documentElement;

beforeEach(() => {
  localStorage.clear();
  html().removeAttribute("data-theme");
});

describe("ThemeToggle", () => {
  it("has an accessible name stating the mode and the action", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Theme: system. Switch to light",
    );
  });

  it("cycles light, dark, system and keeps storage and data-theme in step", () => {
    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("light");
    expect(html()).toHaveAttribute("data-theme", "light");
    expect(button).toHaveAttribute("aria-label", "Theme: light. Switch to dark");

    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(html()).toHaveAttribute("data-theme", "dark");
    expect(button).toHaveAttribute("aria-label", "Theme: dark. Switch to system");

    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBeNull();
    expect(html()).not.toHaveAttribute("data-theme");
    expect(button).toHaveAttribute("aria-label", "Theme: system. Switch to light");
  });

  it("reads a stored theme after mount", () => {
    localStorage.setItem("theme", "dark");
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Theme: dark. Switch to system",
    );
  });

  it("ignores an invalid stored value", () => {
    localStorage.setItem("theme", "purple");
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Theme: system. Switch to light",
    );
  });
});
