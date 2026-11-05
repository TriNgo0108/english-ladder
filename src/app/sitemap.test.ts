import { allTopics, populatedCategoryPairs } from "@/content/registry";
import { LEVELS } from "@/lib/levels";
import { absoluteUrl, topicUrl } from "@/lib/seo";
import { BASE_PATH, SITE_ORIGIN } from "@/lib/site";
import sitemap from "./sitemap";

const urls = () => sitemap().map((e) => e.url);

describe("sitemap", () => {
  it("includes the level chooser", () => {
    expect(urls()).toContain(absoluteUrl("/"));
  });

  it("includes every level overview page", () => {
    expect(LEVELS).toHaveLength(5);
    for (const l of LEVELS) expect(urls()).toContain(absoluteUrl(`/${l.slug}/`));
  });

  it("includes one entry per topic", () => {
    expect(allTopics.length).toBeGreaterThan(0);
    for (const t of allTopics) {
      expect(urls().filter((u) => u === topicUrl(t))).toHaveLength(1);
    }
    expect(urls()).toContain(`${SITE_ORIGIN}${BASE_PATH}/a1/grammar/verb-to-be/`);
  });

  it("includes only populated category index pages", () => {
    expect(urls()).toContain(absoluteUrl("/a1/grammar/"));
    expect(urls()).not.toContain(absoluteUrl("/a1/writing/"));
    const pairs = populatedCategoryPairs();
    expect(sitemap()).toHaveLength(1 + LEVELS.length + pairs.length + allTopics.length);
  });

  it("prefixes every URL with the origin and base path", () => {
    for (const u of urls()) {
      expect(u.startsWith(`${SITE_ORIGIN}${BASE_PATH}/`)).toBe(true);
      expect(u.endsWith("/")).toBe(true);
    }
  });

  it("contains no duplicate URLs", () => {
    expect(new Set(urls()).size).toBe(urls().length);
  });
});
