import { allTopics } from "@/content/registry";
import { buildSearchIndex } from "@/lib/search-index";

// Emitted at build time as out/search-index.json; fetched lazily by Search so
// the client bundle carries neither the registry validation nor the corpus.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSearchIndex(allTopics));
}
