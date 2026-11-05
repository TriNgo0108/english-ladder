import { Quiz } from "@/components/quiz/Quiz";
import type { RuleTopic } from "@/content/schema";
import { renderRichText } from "@/lib/rich-text";
import { TopicHeader } from "./TopicHeader";

export function RuleTopicView({ topic }: { topic: RuleTopic }) {
  return (
    <article>
      <TopicHeader topic={topic} />

      {topic.form && (
        <section aria-labelledby="form-heading" className="mt-8">
          <h2 id="form-heading" className="font-serif text-2xl">
            Form
          </h2>
          <div className="mt-3 rounded border border-border bg-surface p-4">
            {topic.form.split("\n").map((line, i) => (
              <p key={i} className="font-mono text-base leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </section>
      )}

      <section aria-labelledby="examples-heading" className="mt-8">
        <h2 id="examples-heading" className="font-serif text-2xl">
          Examples
        </h2>
        <ul className="mt-3 grid gap-4">
          {topic.examples.map((ex, i) => (
            <li key={i} className="max-w-[65ch] border-l-2 border-border pl-4">
              <p className="font-serif text-xl">{renderRichText(ex.sentence)}</p>
              <p className="mt-1 text-base text-muted">{renderRichText(ex.why)}</p>
            </li>
          ))}
        </ul>
      </section>

      {topic.pitfall && (
        <section
          aria-labelledby="pitfall-heading"
          className="mt-8 max-w-[65ch] rounded border border-border bg-surface p-4"
        >
          <h2 id="pitfall-heading" className="font-serif text-2xl">
            Common mistake
          </h2>
          <dl className="mt-3 grid gap-3">
            <div>
              <dt className="text-sm font-semibold text-incorrect">Not this</dt>
              <dd>
                <p className="font-serif text-xl line-through decoration-incorrect">
                  {renderRichText(topic.pitfall.wrong)}
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold text-correct">Say this</dt>
              <dd>
                <p className="font-serif text-xl">{renderRichText(topic.pitfall.right)}</p>
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-base">{renderRichText(topic.pitfall.why)}</p>
        </section>
      )}

      <Quiz questions={topic.quiz} />
    </article>
  );
}
