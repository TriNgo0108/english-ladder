import { render } from "@testing-library/react";
import { plainText, renderRichText, richTextProblem } from "./rich-text";

describe("renderRichText", () => {
  it("renders plain text unchanged", () => {
    const { container } = render(<>{renderRichText("I am here.")}</>);
    expect(container.textContent).toBe("I am here.");
  });
  it("renders <b> as a real bold element", () => {
    const { container } = render(<>{renderRichText("I <b>am</b> here.")}</>);
    expect(container.querySelector("b")).toHaveTextContent("am");
    expect(container.textContent).toBe("I am here.");
  });
  it("handles more than one <b> span", () => {
    const { container } = render(<>{renderRichText("<b>I</b> am <b>here</b>.")}</>);
    expect(container.querySelectorAll("b")).toHaveLength(2);
    expect(container.textContent).toBe("I am here.");
  });
  it("escapes any other tag instead of rendering it", () => {
    const { container } = render(<>{renderRichText("a <script>alert(1)</script> b")}</>);
    expect(container.querySelector("script")).toBeNull();
    expect(container.textContent).toContain("<script>");
  });
  it("escapes an unclosed b tag rather than swallowing the rest", () => {
    const { container } = render(<>{renderRichText("I <b>am here.")}</>);
    expect(container.querySelector("b")).toBeNull();
    expect(container.textContent).toBe("I <b>am here.");
  });
  it("does not interpret tags nested inside a <b> span", () => {
    const { container } = render(<>{renderRichText("<b><i>x</i></b>")}</>);
    expect(container.querySelector("i")).toBeNull();
    expect(container.querySelector("b")).toHaveTextContent("<i>x</i>");
  });
});

describe("plainText", () => {
  it("strips matched <b> pairs and keeps everything else", () => {
    expect(plainText("<b>I</b> am <b>here</b>.")).toBe("I am here.");
    expect(plainText("I <b>am here.")).toBe("I <b>am here.");
  });
});

describe("richTextProblem", () => {
  it.each([
    ["plain text", "I am here."],
    ["one bold pair", "I <b>am</b> here."],
    ["two adjacent pairs", "<b>I</b><b>am</b>"],
    ["an arrow character", "the dog → its bed"],
  ])("accepts %s", (_l, s) => expect(richTextProblem(s)).toBeNull());

  it.each([
    ["an unclosed b", "I <b>am here."],
    ["a stray closing b", "I am</b> here."],
    ["an uppercase B", "I <B>am</B> here."],
    ["a b with attributes", 'I <b class="x">am</b> here.'],
    ["nested b", "<b>a <b>b</b> c</b>"],
    ["any other tag", "a <i>b</i> c"],
    ["a bare angle bracket", "x < y"],
    ["an empty pair", "I <b></b> am"],
  ])("rejects %s", (_l, s) => expect(richTextProblem(s)).not.toBeNull());
});

// pin the renderer's escaping for the same edge cases
it("renders <B> and <b class> as text, never as elements", () => {
  const { container } = render(<>{renderRichText('a <B>x</B> <b class="y">z</b>')}</>);
  expect(container.querySelector("b")).toBeNull();
});
