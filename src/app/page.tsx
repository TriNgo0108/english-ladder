import { LevelBadge } from "@/components/LevelBadge";
import { LinkCard } from "@/components/LinkCard";
import { topicsByLevel } from "@/content/registry";
import { LEVELS } from "@/lib/levels";

export default function Home() {
  return (
    <main id="content" className="mx-auto grid w-full max-w-screen-2xl gap-10 px-4 py-8 lg:px-8">
      <div>
        <h1 className="font-serif text-4xl">English Ladder</h1>
        <p className="mt-2 max-w-[65ch] text-base text-muted">
          Pick the level that sounds like you. Each level has its own grammar, vocabulary and more.
        </p>
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LEVELS.map((l) => {
          const topics = topicsByLevel(l.slug);
          const count = topics.length;
          return (
            <li key={l.slug}>
              <LinkCard href={`/${l.slug}/`} className="h-full">
                <LevelBadge level={l.slug} />
                <p className="mt-3 max-w-[65ch] text-base">{l.blurb}</p>
                <p className="mt-3 text-base font-semibold">
                  {count === 0 ? "Coming soon" : `${count} ${count === 1 ? "topic" : "topics"}`}
                </p>
                {count > 0 && (
                  <p className="mt-1 text-base text-muted">
                    e.g.{" "}
                    {/* Name before the colon only: titles carry their own commas. */}
                    {topics
                      .slice(0, 3)
                      .map((t) => t.title.split(":")[0])
                      .join(" · ")}
                  </p>
                )}
              </LinkCard>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
