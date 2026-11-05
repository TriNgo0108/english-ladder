// Loaded on demand by Search via import(), so the corpus text stays out of the main bundle.
import { allTopics } from "@/content/registry";
import { buildSearchIndex, type SearchEntry } from "@/lib/search-index";

export function loadIndex(): SearchEntry[] {
  return buildSearchIndex(allTopics);
}
