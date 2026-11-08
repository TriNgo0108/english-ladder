"use client";

import { useId, useState } from "react";
import type { Question } from "@/content/schema";
import { matchesGap, normaliseGap } from "@/lib/gap-match";
import { renderRichText } from "@/lib/rich-text";
import { FOCUS, FeedbackRegion, PRIMARY_BUTTON } from "./shared";

type Gap = Extract<Question, { kind: "gap" }>;

export function GapQuestion({
  question,
  onAnswered,
}: {
  question: Gap;
  onAnswered: (correct: boolean) => void;
}) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const inputId = useId();

  function submit() {
    if (result !== null) return;
    if (normaliseGap(value) === "") return;
    const ok = matchesGap(value, question.answers);
    setResult(ok);
    onAnswered(ok);
  }

  return (
    <fieldset>
      <legend className="font-serif text-xl">{renderRichText(question.stem)}</legend>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <label htmlFor={inputId} className="sr-only">
          Your answer
        </label>
        <input
          id={inputId}
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          value={value}
          disabled={result !== null}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              submit();
            }
          }}
          className={`min-h-11 w-48 rounded border border-control bg-surface px-3 py-2 text-base text-text ${FOCUS}`}
        />
        <button
          type="button"
          onClick={submit}
          disabled={result !== null}
          className={PRIMARY_BUTTON}
        >
          Check
        </button>
      </div>
      <FeedbackRegion
        result={result}
        feedback={question.feedback}
        extra={
          result === false && (
            <p className="mt-1 text-base">
              Accepted answer: <b>{question.answers[0]}</b>
            </p>
          )
        }
      />
    </fieldset>
  );
}
