import { Quiz } from "@/components/quiz/Quiz";
import { Section } from "@/components/Section";
import type { SetTopic } from "@/content/schema";
import { renderRichText } from "@/lib/rich-text";
import { TopicHeader } from "./TopicHeader";

export function SetTopicView({ topic }: { topic: SetTopic }) {
  // B1 and later sets have no IPA; drop the whole column rather than show it empty.
  const showIpa = topic.entries.some((e) => e.ipa !== undefined);
  return (
    <article className="grid gap-10">
      <TopicHeader topic={topic} />
      <Section headingId="words-heading" title="Words">
        {/* The table may be wider than a phone; only this box scrolls, never the page. */}
        <div
          tabIndex={0}
          role="region"
          aria-label="Word list, scrolls sideways"
          className="overflow-x-auto rounded border border-border bg-surface focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
        >
          <table className="w-full min-w-[36rem] border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-border text-base text-muted">
                <th scope="col" className="p-3 font-semibold">
                  {topic.category === "phrases" ? "Expression" : "Word"}
                </th>
                {showIpa && (
                  <th scope="col" className="p-3 font-semibold">
                    Sounds like
                  </th>
                )}
                <th scope="col" className="p-3 font-semibold">
                  Meaning
                </th>
                <th scope="col" className="p-3 font-semibold">
                  In use
                </th>
              </tr>
            </thead>
            <tbody>
              {topic.entries.map((e, i) => (
                <tr key={i} className="border-b border-border last:border-b-0 align-top">
                  <th scope="row" className="p-3 font-serif text-lg font-semibold">
                    {e.headword}
                  </th>
                  {showIpa && <td className="p-3 font-sans text-muted">{e.ipa ?? ""}</td>}
                  <td className="p-3">{e.gloss}</td>
                  <td className="p-3 font-serif italic [&_b]:not-italic [&_b]:font-semibold [&_b]:text-accent">{renderRichText(e.inUse)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Quiz questions={topic.quiz} />
    </article>
  );
}
