import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import { siblingsAcrossLevels } from "@/content/registry";
import type { Topic } from "@/content/schema";
import { levelMeta } from "@/lib/levels";
import { topicPath } from "@/lib/seo";

type Props = { topic: Topic; siblings?: undefined } | { siblings: Topic[]; topic?: undefined };

export function CrossLevelLinks(props: Props) {
  const siblings = props.siblings ?? siblingsAcrossLevels(props.topic);
  if (siblings.length === 0) return null;
  return (
    <section aria-labelledby="cross-level-heading" className="mt-12 font-sans">
      <h2 id="cross-level-heading" className="text-lg font-semibold">
        This topic at other levels
      </h2>
      <ul className="mt-3 flex flex-wrap gap-3">
        {siblings.map((s) => (
          <li key={`${s.level}/${s.category}/${s.slug}`}>
            <Link
              href={topicPath(s)}
              aria-label={`${levelMeta(s.level).label}: ${s.title}`}
              className="flex min-h-11 items-center gap-2 rounded border border-border bg-surface px-3 transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <LevelBadge level={s.level} />
              <span>{s.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
