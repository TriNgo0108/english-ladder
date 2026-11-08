import { Quiz } from "@/components/quiz/Quiz";
import { EXAMPLE_TEXT, Section } from "@/components/Section";
import type { RuleTopic } from "@/content/schema";
import { renderRichText } from "@/lib/rich-text";
import { TopicHeader } from "./TopicHeader";

export function RuleTopicView({ topic }: { topic: RuleTopic }) {
  return (
    <article className="grid gap-10">
      <TopicHeader topic={topic} />

      {topic.form && (
        <Section headingId="form-heading" title="Form">
          <div className="max-w-[65ch]">
            {topic.form.split("\n").map((line, i) => (
              <p key={i} className="font-mono text-base leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </Section>
      )}

      <Section headingId="examples-heading" title="Examples">
        <ul className="grid gap-5">
          {topic.examples.map((ex, i) => (
            <li key={i} className="max-w-[65ch] border-l-2 border-accent pl-4">
              <p className={EXAMPLE_TEXT}>{renderRichText(ex.sentence)}</p>
              <p className="mt-1 text-base text-muted">{renderRichText(ex.why)}</p>
            </li>
          ))}
        </ul>
      </Section>

      {topic.pitfall && (
        <Section headingId="pitfall-heading" title="Common mistake">
          <dl className="grid max-w-[65ch] gap-3">
            <div>
              <dt className="text-base font-semibold text-incorrect">Not this</dt>
              <dd>
                <p className={`${EXAMPLE_TEXT} line-through decoration-incorrect`}>
                  {renderRichText(topic.pitfall.wrong)}
                </p>
              </dd>
            </div>
            <div>
              <dt className="text-base font-semibold text-correct">Say this</dt>
              <dd>
                <p className={EXAMPLE_TEXT}>{renderRichText(topic.pitfall.right)}</p>
              </dd>
            </div>
          </dl>
          <p className="mt-3 max-w-[65ch] text-base">{renderRichText(topic.pitfall.why)}</p>
        </Section>
      )}

      <Quiz questions={topic.quiz} />
    </article>
  );
}
