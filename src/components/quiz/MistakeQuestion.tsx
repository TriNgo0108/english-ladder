"use client";

import { useState } from "react";
import type { Question } from "@/content/schema";
import { BUTTON_BASE, FeedbackRegion } from "./shared";

type Mistake = Extract<Question, { kind: "mistake" }>;

export function MistakeQuestion({
  question,
  onAnswered,
}: {
  question: Mistake;
  onAnswered: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const result = answered ? picked === question.wrongIndex : null;

  function pick(i: number) {
    if (answered) return;
    setPicked(i);
    onAnswered(i === question.wrongIndex);
  }

  return (
    <fieldset>
      <legend className="font-serif text-xl">Tap the word that is wrong.</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {question.tokens.map((tok, i) => {
          const isMistake = answered && i === question.wrongIndex;
          const isWrongPick = answered && i === picked && i !== question.wrongIndex;
          return (
            <button
              key={i}
              type="button"
              aria-disabled={answered}
              onClick={() => pick(i)}
              className={`${BUTTON_BASE} font-serif text-xl ${
                isMistake ? "border-2 border-incorrect" : isWrongPick ? "border-2 border-muted" : ""
              }`}
            >
              {tok}
              {isMistake && <span className="ml-2 font-sans text-base text-incorrect"> The mistake</span>}
              {isWrongPick && <span className="ml-2 font-sans text-base text-muted"> Your answer</span>}
            </button>
          );
        })}
      </div>
      <FeedbackRegion
        result={result}
        feedback={question.feedback}
        extra={answered && <p className="mt-1 text-base">Correction: {question.correction}</p>}
      />
    </fieldset>
  );
}
