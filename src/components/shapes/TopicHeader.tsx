import Link from "next/link";
import { LevelBadge } from "@/components/LevelBadge";
import type { Topic } from "@/content/schema";
import { categoryMeta } from "@/lib/categories";
import { levelMeta } from "@/lib/levels";
import { renderRichText } from "@/lib/rich-text";

const crumbLink =
  "inline-flex min-h-11 items-center text-accent underline transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

/** Breadcrumb, level badge, title and explanation: shared by every topic shape. */
export function TopicHeader({ topic }: { topic: Topic }) {
  const level = levelMeta(topic.level);
  const category = categoryMeta(topic.category);
  const paragraphs = topic.explanation.split(/\n\s*\n/).filter((p) => p.trim() !== "");

  return (
    <header>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-2 text-base">
          <li>
            <Link href="/" className={crumbLink}>
              All levels
            </Link>
          </li>
          <li aria-hidden="true" className="text-muted">
            /
          </li>
          <li>
            <Link href={`/${topic.level}/`} className={crumbLink}>
              Level {level.label}
            </Link>
          </li>
          <li aria-hidden="true" className="text-muted">
            /
          </li>
          <li>
            <Link href={`/${topic.level}/${topic.category}/`} className={crumbLink}>
              {category.label}
            </Link>
          </li>
          <li aria-hidden="true" className="text-muted">
            /
          </li>
          <li>
            <span aria-current="page" className="text-muted">
              {topic.title}
            </span>
          </li>
        </ol>
      </nav>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <LevelBadge level={topic.level} /> <h1 className="font-serif text-4xl">{topic.title}</h1>
      </div>
      <div className="mt-4 grid max-w-[65ch] gap-3 text-base leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{renderRichText(p)}</p>
        ))}
      </div>
    </header>
  );
}
