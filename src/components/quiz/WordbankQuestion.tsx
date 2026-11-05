"use client";

import { useState } from "react";
import type { Question } from "@/content/schema";
import { normaliseAnswer } from "@/lib/gap-match";
import { renderRichText } from "@/lib/rich-text";
import { tokeniseAnswer } from "@/lib/wordbank";
import { BUTTON_BASE, FeedbackRegion, PRIMARY_BUTTON } from "./shared";

type Wordbank = Extract<Question, { kind: "wordbank" }>;

// Order-sensitive grading. canFormAnswer is only the schema's multiset check.
function isCorrectOrder(selected: string[], answer: string): boolean {
  const got = tokeniseAnswer(selected.join(" "));
  const want = tokeniseAnswer(answer);
  return (
    got.length === want.length &&
    want.every((w, i) => normaliseAnswer(got[i]) === normaliseAnswer(w))
  );
}

export function WordbankQuestion({
  question,
  onAnswered,
}: {
  question: Wordbank;
  onAnswered: (correct: boolean) => void;
}) {
  // Indices into question.words, in the order the learner placed them.
  const [placed, setPlaced] = useState<number[]>([]);
  const [result, setResult] = useState<boolean | null>(null);
  const locked = result !== null;

  const inBank = question.words.map((_, i) => i).filter((i) => !placed.includes(i));

  function place(i: number) {
    if (locked) return;
    setPlaced((p) => [...p, i]);
  }
  function unplace(i: number) {
    if (locked) return;
    setPlaced((p) => p.filter((x) => x !== i));
  }
  function check() {
    if (locked || placed.length !== question.words.length) return;
    const ok = isCorrectOrder(
      placed.map((i) => question.words[i]),
      question.answer,
    );
    setResult(ok);
    onAnswered(ok);
  }

  return (
    <fieldset>
      <legend className="font-serif text-xl">{renderRichText(question.prompt)}</legend>
      <div
        role="group"
        aria-label="Your answer"
        className="mt-3 flex min-h-14 flex-wrap items-center gap-2 rounded border border-dashed border-border p-2"
      >
        {placed.length === 0 && (
          <span className="text-sm text-muted">Tap the words below in order.</span>
        )}
        {placed.map((i) => (
          <button
            key={i}
            type="button"
            aria-disabled={locked}
            onClick={() => unplace(i)}
            className={`${BUTTON_BASE} font-serif text-xl`}
          >
            {question.words[i]}
          </button>
        ))}
      </div>
      <div role="group" aria-label="Word bank" className="mt-3 flex min-h-14 flex-wrap gap-2">
        {inBank.map((i) => (
          <button
            key={i}
            type="button"
            aria-disabled={locked}
            onClick={() => place(i)}
            className={`${BUTTON_BASE} font-serif text-xl`}
          >
            {question.words[i]}
          </button>
        ))}
      </div>
      <div className="mt-3">
        <button
          type="button"
          onClick={check}
          disabled={locked || placed.length !== question.words.length}
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
            <p className="mt-1 font-serif text-xl">Answer: {question.answer}</p>
          )
        }
      />
    </fieldset>
  );
}
