import type { ReactNode } from "react";
import { renderRichText } from "@/lib/rich-text";

export const FOCUS =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const BUTTON_BASE = `min-h-11 min-w-11 rounded border border-border bg-surface px-4 py-2 text-base text-text transition-colors duration-200 not-aria-disabled:hover:border-accent not-aria-disabled:hover:bg-subtle aria-disabled:cursor-default ${FOCUS}`;

export const PRIMARY_BUTTON = `min-h-11 min-w-11 rounded border border-accent bg-accent px-5 py-2 text-base font-semibold text-on-accent transition-opacity hover:opacity-90 duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${FOCUS}`;

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10.5l4 4 8-9" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M5 5l10 10M15 5L5 15" />
    </svg>
  );
}

/**
 * The feedback region. It is rendered from the first render and stays empty
 * until the question is answered, so assistive tech announces the change.
 */
export function FeedbackRegion({
  result,
  feedback,
  extra,
}: {
  result: boolean | null;
  feedback: string;
  extra?: ReactNode;
}) {
  return (
    <div aria-live="polite" className="mt-3 max-w-[65ch]">
      {result !== null && (
        <div>
          <p
            className={`flex items-center gap-2 font-semibold ${
              result ? "text-correct" : "text-incorrect"
            }`}
          >
            {result ? <CheckIcon /> : <CrossIcon />}
            <span>{result ? "Correct" : "Not quite"}</span>
          </p>
          {extra}
          <p className="mt-1 text-base">{renderRichText(feedback)}</p>
        </div>
      )}
    </div>
  );
}
