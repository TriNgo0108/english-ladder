import { Quiz } from "@/components/quiz/Quiz";
import { EXAMPLE_TEXT, Section } from "@/components/Section";
import type { PhraseTopic } from "@/content/schema";
import { renderRichText } from "@/lib/rich-text";
import { TopicHeader } from "./TopicHeader";

export function PhraseTopicView({ topic }: { topic: PhraseTopic }) {
  return (
    <article className="grid gap-10">
      <TopicHeader topic={topic} />
      {topic.situations.map((s, i) => (
        <Section
          key={i}
          headingId={`situation-${i}`}
          title={s.situation}
          aside={
            /* Register is spelled out, never signalled by colour alone. */
            <span className="rounded border border-border px-2 py-0.5 text-base text-muted">
              Register: {s.register}
            </span>
          }
        >
          <ul className="grid max-w-[65ch] gap-2">
            {s.phrases.map((p, j) => (
              <li key={j} className={EXAMPLE_TEXT}>
                {renderRichText(p)}
              </li>
            ))}
          </ul>
        </Section>
      ))}

      <Quiz questions={topic.quiz} />
    </article>
  );
}
