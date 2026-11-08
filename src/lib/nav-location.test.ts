import { buildAllNav } from "@/lib/nav";
import { locateNav } from "@/lib/nav-location";

const nav = buildAllNav();
const topic = nav.a1.find((g) => g.category === "grammar")!.topics[0];

describe("locateNav", () => {
  it("locates a topic path with or without the trailing slash", () => {
    const want = { level: "a1", category: "grammar", topicHref: topic.href };
    expect(locateNav(topic.href, nav)).toEqual(want);
    expect(locateNav(topic.href.replace(/\/$/, ""), nav)).toEqual(want);
  });

  it("locates level and category pages", () => {
    expect(locateNav("/b2/", nav)).toEqual({ level: "b2" });
    expect(locateNav("/b2/writing", nav)).toEqual({ level: "b2", category: "writing" });
  });

  it("returns nothing for unknown paths", () => {
    expect(locateNav("/zz/", nav)).toEqual({});
    expect(locateNav("/", nav)).toEqual({});
  });

  // GitHub Pages serves 404.html at the requested URL, so a stale link under a real
  // level must not mark that level or open its topics.
  it("returns nothing for a 404 under a real level or category", () => {
    expect(locateNav("/a1/nope/", nav)).toEqual({});
    expect(locateNav("/b1/grammar/old-slug/", nav)).toEqual({});
    expect(locateNav(`${topic.href}extra/`, nav)).toEqual({});
  });

  it("ignores inherited object keys", () => {
    expect(locateNav("/constructor/", nav)).toEqual({});
  });
});
