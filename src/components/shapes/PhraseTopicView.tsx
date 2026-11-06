import { Quiz } from "@/components/quiz/Quiz";
import type { PhraseTopic } from "@/content/schema";
import { renderRichText } from "@/lib/rich-text";
import { TopicHeader } from "./TopicHeader";

export function PhraseTopicView({ topic }: { topic: PhraseTopic }) {
  return (
    <article>
      <TopicHeader topic={topic} />
      <div className="mt-8 grid gap-4">
        {topic.situations.map((s, i) => {
          const headingId = `situation-${i}`;
          return (
            <section
              key={i}
              aria-labelledby={headingId}
              className="max-w-[65ch] rounded border border-border bg-surface p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 id={headingId} className="font-serif text-2xl">
                  {s.situation}
                </h2>
                {/* Register is spelled out, never signalled by colour alone. */}
                <span className="rounded border border-border px-2 py-0.5 text-base text-muted">
                  Register: {s.register}
                </span>
              </div>
              <ul className="mt-3 grid gap-2">
                {s.phrases.map((p, j) => (
                  <li key={j} className="font-serif text-xl">
                    {renderRichText(p)}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <Quiz questions={topic.quiz} />
    </article>
  );
}
