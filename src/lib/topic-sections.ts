import type { Topic } from "@/content/schema";

export type TopicSection = { id: string; label: string };

/**
 * The jump-to sections a topic page renders, in page order. The ids are the
 * section headings' ids in the shape views, so links land on the heading.
 */
export function topicSections(topic: Topic): TopicSection[] {
  const sections: TopicSection[] = [];
  switch (topic.shape) {
    case "rule":
      if (topic.form) sections.push({ id: "form-heading", label: "Form" });
      sections.push({ id: "examples-heading", label: "Examples" });
      if (topic.pitfall) sections.push({ id: "pitfall-heading", label: "Common mistake" });
      break;
    case "set":
      sections.push({ id: "words-heading", label: "Words" });
      break;
    case "phrases":
      topic.situations.forEach((s, i) => sections.push({ id: `situation-${i}`, label: s.situation }));
      break;
  }
  sections.push({ id: "quiz-heading", label: "Quiz" });
  return sections;
}
