"use client";

import { useState } from "react";
import type { Question } from "@/content/schema";
import { ChoiceQuestion } from "./ChoiceQuestion";
import { GapQuestion } from "./GapQuestion";
import { MistakeQuestion } from "./MistakeQuestion";
import { WordbankQuestion } from "./WordbankQuestion";
import { PRIMARY_BUTTON } from "./shared";

function renderQuestion(q: Question, onAnswered: (correct: boolean) => void) {
  switch (q.kind) {
    case "choice":
      return <ChoiceQuestion question={q} onAnswered={onAnswered} />;
    case "gap":
      return <GapQuestion question={q} onAnswered={onAnswered} />;
    case "wordbank":
      return <WordbankQuestion question={q} onAnswered={onAnswered} />;
    case "mistake":
      return <MistakeQuestion question={q} onAnswered={onAnswered} />;
  }
}

// The score lives only in component state; nothing is stored anywhere.
export function Quiz({ questions }: { questions: Question[] }) {
  const [run, setRun] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [correct, setCorrect] = useState(0);

  if (questions.length === 0) return null;
  const done = answered === questions.length;

  function record(ok: boolean) {
    setAnswered((n) => n + 1);
    if (ok) setCorrect((n) => n + 1);
  }

  function retry() {
    setAnswered(0);
    setCorrect(0);
    setRun((r) => r + 1);
  }

  return (
    <section aria-labelledby="quiz-heading" className="mt-12">
      <h2 id="quiz-heading" className="font-serif text-2xl">
        Quiz
      </h2>
      <ol key={run} className="mt-4 grid max-w-[65ch] list-decimal gap-8 pl-6">
        {questions.map((q, i) => (
          <li key={i}>{renderQuestion(q, record)}</li>
        ))}
      </ol>
      {done && (
        <div
          role="status"
          className="mt-8 max-w-[65ch] rounded border border-border bg-surface p-4"
        >
          <p className="font-serif text-xl">
            You got {correct} of {questions.length}
          </p>
          <button type="button" onClick={retry} className={`mt-3 ${PRIMARY_BUTTON}`}>
            Try again
          </button>
        </div>
      )}
    </section>
  );
}
