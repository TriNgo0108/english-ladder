import type { MetadataRoute } from "next";
import { allTopics, populatedCategoryPairs } from "@/content/registry";
import { LEVELS } from "@/lib/levels";
import { absoluteUrl, topicUrl } from "@/lib/seo";

export const dynamic = "force-static";

// No lastModified: the site has no reliable dates, and a build-time Date would churn every entry.
export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    absoluteUrl("/"),
    ...LEVELS.map((l) => absoluteUrl(`/${l.slug}/`)),
    ...populatedCategoryPairs().map(({ level, category }) => absoluteUrl(`/${level}/${category}/`)),
    ...allTopics.map(topicUrl),
  ];
  return urls.map((url) => ({ url }));
}
