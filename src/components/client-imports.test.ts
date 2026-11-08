import fs from "node:fs";
import path from "node:path";

// A "use client" module that imports the content registry (directly, or via the
// server nav builder) ships every lesson to the browser in one JS chunk.
const SERVER_ONLY = /from\s+["'](@\/content\/registry|@\/lib\/nav)["']/;

function clientFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return clientFiles(full);
    if (!/\.tsx?$/.test(e.name) || /\.test\.tsx?$/.test(e.name)) return [];
    const source = fs.readFileSync(full, "utf8");
    return /^\s*["']use client["']/.test(source) ? [full] : [];
  });
}

const files = clientFiles(path.resolve(__dirname));

describe("client components", () => {
  it("are found", () => {
    expect(files.length).toBeGreaterThan(5);
  });
  it.each(files.map((f) => [path.relative(__dirname, f), f]))(
    "%s does not import server-only content modules",
    (_name, file) => {
      expect(fs.readFileSync(file, "utf8").match(SERVER_ONLY)?.[0] ?? null).toBeNull();
    },
  );
});
