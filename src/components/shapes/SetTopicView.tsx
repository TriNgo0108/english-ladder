import { Quiz } from "@/components/quiz/Quiz";
import type { SetTopic } from "@/content/schema";
import { renderRichText } from "@/lib/rich-text";
import { TopicHeader } from "./TopicHeader";

export function SetTopicView({ topic }: { topic: SetTopic }) {
  return (
    <article>
      <TopicHeader topic={topic} />
      <section aria-labelledby="words-heading" className="mt-8">
        <h2 id="words-heading" className="font-serif text-2xl">
          Words
        </h2>
        {/* The table may be wider than a phone; only this box scrolls, never the page. */}
        <div className="mt-3 overflow-x-auto rounded border border-border bg-surface focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent">
          <table className="w-full min-w-[36rem] border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-border text-base text-muted">
                <th scope="col" className="p-3 font-semibold">
                  Word
                </th>
                <th scope="col" className="p-3 font-semibold">
                  Sounds like
                </th>
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
                  <td className="p-3 font-sans text-muted">{e.ipa ?? ""}</td>
                  <td className="p-3">{e.gloss}</td>
                  <td className="p-3 font-serif">{renderRichText(e.inUse)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Quiz questions={topic.quiz} />
    </article>
  );
}
