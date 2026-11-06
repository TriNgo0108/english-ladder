"use client";

import { useState } from "react";
import type { Question } from "@/content/schema";
import { renderRichText } from "@/lib/rich-text";
import { BUTTON_BASE, FeedbackRegion } from "./shared";

type Choice = Extract<Question, { kind: "choice" }>;

export function ChoiceQuestion({
  question,
  onAnswered,
}: {
  question: Choice;
  onAnswered: (correct: boolean) => void;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const answered = picked !== null;
  const result = answered ? picked === question.answer : null;

  function pick(i: number) {
    if (answered) return;
    setPicked(i);
    onAnswered(i === question.answer);
  }

  return (
    <fieldset>
      <legend className="font-serif text-xl">{renderRichText(question.stem)}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {question.options.map((opt, i) => {
          const isAnswer = answered && i === question.answer;
          const isWrongPick = answered && i === picked && i !== question.answer;
          return (
            <button
              key={i}
              type="button"
              aria-disabled={answered}
              onClick={() => pick(i)}
              className={`${BUTTON_BASE} ${
                isAnswer ? "border-2 border-correct" : isWrongPick ? "border-2 border-incorrect" : ""
              }`}
            >
              {opt}
              {isAnswer && <span className="ml-2 text-base text-correct"> Correct answer</span>}
              {isWrongPick && <span className="ml-2 text-base text-incorrect"> Your answer</span>}
            </button>
          );
        })}
      </div>
      <FeedbackRegion result={result} feedback={question.feedback} />
    </fieldset>
  );
}
