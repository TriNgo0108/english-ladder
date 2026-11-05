import type { Topic } from "@/content/schema";
import { categoryMeta } from "@/lib/categories";
import { levelMeta } from "@/lib/levels";
import { plainText } from "@/lib/rich-text";
import { BASE_PATH, SITE_NAME, SITE_ORIGIN } from "@/lib/site";

const DESCRIPTION_MAX = 150;

/** Plain-text summary of authored rich text, at most 150 characters, cut on a word. */
export function metaDescription(rich: string, max = DESCRIPTION_MAX): string {
  const text = plainText(rich).replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  // A whole sentence reads better than a cut one, if it keeps at least half the room.
  const fits = text.slice(0, max + 1);
  const sentenceEnd = Math.max(fits.lastIndexOf(". "), fits.lastIndexOf("? "), fits.lastIndexOf("! "));
  if (sentenceEnd >= max / 2) return text.slice(0, sentenceEnd + 1);
  const room = text.slice(0, max - 1);
  const cut = room.lastIndexOf(" ");
  return `${(cut > 0 ? room.slice(0, cut) : room).replace(/[\s,;:.]+$/, "")}…`;
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
    description: metaDescription(topic.explanation),
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
