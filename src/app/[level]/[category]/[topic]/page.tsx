import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CrossLevelLinks } from "@/components/CrossLevelLinks";
import { PhraseTopicView } from "@/components/shapes/PhraseTopicView";
import { RuleTopicView } from "@/components/shapes/RuleTopicView";
import { SetTopicView } from "@/components/shapes/SetTopicView";
import { TopicNav } from "@/components/TopicNav";
import { adjacentTopics, allTopics, findTopic } from "@/content/registry";
import { CategorySlugSchema, LevelSchema, type Topic } from "@/content/schema";
import { serialiseJsonLd, topicDescription, topicJsonLd, topicUrl } from "@/lib/seo";

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
    title: topic.title,
    description: topicDescription(topic),
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

export default async function TopicPage({ params }: PageProps<"/[level]/[category]/[topic]">) {
  const topic = await resolveTopic(params);
  if (!topic) notFound();
  const { prev, next } = adjacentTopics(topic);

  return (
    <main className="grid min-w-0 gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialiseJsonLd(topicJsonLd(topic)) }}
      />
      <TopicBody topic={topic} />
      <TopicNav prev={prev} next={next} />
      <CrossLevelLinks topic={topic} />
    </main>
  );
}
