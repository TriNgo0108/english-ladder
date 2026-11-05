import { render } from "@testing-library/react";
import { plainText, renderRichText } from "./rich-text";

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
