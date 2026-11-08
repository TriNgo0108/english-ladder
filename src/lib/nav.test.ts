import { topicsByLevel } from "@/content/registry";
import { CATEGORIES } from "@/lib/categories";
import { buildAllNav, buildLevelNav } from "@/lib/nav";

describe("buildLevelNav", () => {
  it("groups a level's topics by category in CATEGORIES order with no empty groups", () => {
    const groups = buildLevelNav("a1");
    const order = CATEGORIES.map((c) => c.slug);
    expect(groups.map((g) => g.category)).toEqual(
      order.filter((slug) => groups.some((g) => g.category === slug)),
    );
    for (const g of groups) expect(g.topics.length).toBeGreaterThan(0);
    expect(groups.reduce((n, g) => n + g.topics.length, 0)).toBe(topicsByLevel("a1").length);
  });

  it("orders topics within a group by order", () => {
    const grammar = buildLevelNav("b1").find((g) => g.category === "grammar")!;
    const expected = topicsByLevel("b1")
      .filter((t) => t.category === "grammar")
      .map((t) => ({ title: t.title, href: `/b1/grammar/${t.slug}/` }));
    expect(grammar.topics).toEqual(expected);
    expect(grammar.label).toBe("Grammar");
  });

  it("builds every level", () => {
    expect(Object.keys(buildAllNav())).toEqual(["a1", "a2", "b1", "b2", "c1"]);
  });
});
