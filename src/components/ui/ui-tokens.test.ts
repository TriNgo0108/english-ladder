import fs from "node:fs";
import path from "node:path";

// shadcn's `accent` / `muted` mean a pale background; here `accent` is the rust and
// `muted` is a text colour, so copied components must use `bg-subtle` / `text-muted`.
const COLLIDING = /(?<![\w-])(bg-accent|bg-muted|text-accent-foreground|text-muted-foreground)(?![\w-])/;

const dir = __dirname;
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"));

describe("shadcn ui components", () => {
  it("exist", () => {
    expect(files.length).toBeGreaterThan(0);
  });
  it.each(files)("%s uses site tokens instead of shadcn's colliding names", (file) => {
    const source = fs.readFileSync(path.join(dir, file), "utf8");
    expect(source.match(COLLIDING)?.[0] ?? null).toBeNull();
  });
});
