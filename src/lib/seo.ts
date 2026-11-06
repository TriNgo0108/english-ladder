import type { Topic } from "@/content/schema";
import { categoryMeta } from "@/lib/categories";
import { levelMeta } from "@/lib/levels";
import { BASE_PATH, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

/** The topic's meta and JSON-LD description: its authored plain-text summary. */
export function topicDescription(topic: Topic): string {
  return topic.summary;
}

/** Absolute URL for a site path such as `/a1/`; always ends with a slash. */
export function absoluteUrl(path: string): string {
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${SITE_ORIGIN}${BASE_PATH}${withSlash}`;
}

export function topicPath(topic: Topic): string {
  return `/${topic.level}/${topic.category}/${topic.slug}/`;
}

export function topicUrl(topic: Topic): string {
  return absoluteUrl(topicPath(topic));
}

export function topicJsonLd(topic: Topic) {
  return {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: topic.title,
    description: topicDescription(topic),
    url: topicUrl(topic),
    educationalLevel: levelMeta(topic.level).label,
    inLanguage: "en",
    learningResourceType: categoryMeta(topic.category).label,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: absoluteUrl("/") },
  };
}

/** JSON for a `<script type="application/ld+json">`; `<` is escaped so no tag can close early. */
export function serialiseJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
