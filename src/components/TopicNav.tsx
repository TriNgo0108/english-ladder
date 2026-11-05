import Link from "next/link";
import type { Topic } from "@/content/schema";
import { topicPath } from "@/lib/seo";

const link =
  "flex min-h-11 items-center gap-3 rounded border border-border bg-surface p-3 font-sans transition-colors duration-200 hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function Arrow({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d={dir === "left" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"} />
    </svg>
  );
}

export function TopicNav({ prev, next }: { prev?: Topic; next?: Topic }) {
  if (!prev && !next) return null;
  return (
    <nav aria-label="More topics" className="mt-12 grid gap-4 sm:grid-cols-2">
      {prev && (
        <Link href={topicPath(prev)} className={link}>
          <Arrow dir="left" />
          <span>Previous: {prev.title}</span>
        </Link>
      )}
      {next && (
        <Link href={topicPath(next)} className={`${link} justify-end text-right sm:col-start-2`}>
          <span>Next: {next.title}</span>
          <Arrow dir="right" />
        </Link>
      )}
    </nav>
  );
}
