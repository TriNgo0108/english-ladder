import { allTopics } from "@/content/registry";
import { buildSearchIndex } from "@/lib/search-index";
import { GET, dynamic } from "./route";

describe("search-index.json route", () => {
  it("serves exactly the search index built from the real corpus", async () => {
    const res = await GET();
    expect(await res.json()).toEqual(buildSearchIndex(allTopics));
  });
  it("is statically prerendered for output: export", () => {
    expect(dynamic).toBe("force-static");
  });
});
