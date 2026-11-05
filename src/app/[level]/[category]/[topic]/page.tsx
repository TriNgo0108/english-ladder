import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhraseTopicView } from "@/components/shapes/PhraseTopicView";
import { RuleTopicView } from "@/components/shapes/RuleTopicView";
import { SetTopicView } from "@/components/shapes/SetTopicView";
import { adjacentTopics, allTopics, findTopic } from "@/content/registry";
import { CategorySlugSchema, LevelSchema, type Topic } from "@/content/schema";
import { metaDescription, serialiseJsonLd, topicJsonLd, topicPath, topicUrl } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allTopics.map((t) => ({ level: t.level, category: t.category, topic: t.slug }));
}

async function resolveTopic(params: PageProps<"/[level]/[category]/[topic]">["params"]) {
  const p = await params;
  const level = LevelSchema.safeParse(p.level);
  const category = CategorySlugSchema.safeParse(p.category);
  if (!level.success || !category.success) return undefined;
  // Also undefined for a real slug requested under the wrong category.
  return findTopic(level.data, category.data, p.topic);
}

export async function generateMetadata({
  params,
}: PageProps<"/[level]/[category]/[topic]">): Promise<Metadata> {
  const topic = await resolveTopic(params);
  if (!topic) return {};
  return {
    title: `${topic.title} - ${SITE_NAME}`,
    description: metaDescription(topic.explanation),
    alternates: { canonical: topicUrl(topic) },
  };
}

function TopicBody({ topic }: { topic: Topic }) {
  switch (topic.shape) {
    case "rule":
      return <RuleTopicView topic={topic} />;
    case "set":
      return <SetTopicView topic={topic} />;
    case "phrases":
      return <PhraseTopicView topic={topic} />;
  }
}

const navLink =
  "flex min-h-11 flex-col justify-center rounded border border-border bg-surface p-3 transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export default async function TopicPage({ params }: PageProps<"/[level]/[category]/[topic]">) {
  const topic = await resolveTopic(params);
  if (!topic) notFound();
  const { prev, next } = adjacentTopics(topic);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialiseJsonLd(topicJsonLd(topic)) }}
      />
      <TopicBody topic={topic} />
      {(prev || next) && (
        <nav aria-label="More topics" className="mt-12 grid gap-4 sm:grid-cols-2">
          {prev && (
            <Link href={topicPath(prev)} className={navLink}>
              <span className="text-sm text-muted">Previous</span>
              <span className="text-base font-semibold">{prev.title}</span>
            </Link>
          )}
          {next && (
            <Link href={topicPath(next)} className={`${navLink} sm:col-start-2 sm:text-right`}>
              <span className="text-sm text-muted">Next</span>
              <span className="text-base font-semibold">{next.title}</span>
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}
