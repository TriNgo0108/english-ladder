import fs from "node:fs";
import path from "node:path";

describe("site icons", () => {
  it("ships an SVG icon on the rust accent", () => {
    const svg = fs.readFileSync(path.resolve(__dirname, "icon.svg"), "utf8");
    expect(svg).toContain("#9A3412");
  });

  it("has a multi-size favicon.ico from 16 to 256px", () => {
    const ico = fs.readFileSync(path.resolve(__dirname, "favicon.ico"));
    expect(ico.readUInt16LE(2)).toBe(1);
    expect(ico.readUInt16LE(4)).toBe(7);
    const widths = Array.from({ length: 7 }, (_, i) => ico.readUInt8(6 + 16 * i));
    // A width byte of 0 means 256px.
    expect(widths).toEqual([16, 24, 32, 48, 64, 128, 0]);
  });
});
