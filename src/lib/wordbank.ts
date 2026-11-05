import { normaliseAnswer } from '@/lib/gap-match';

// Strip leading/trailing characters that are not letters or digits
// (quotes, commas, . ? ! ; : etc.); internal apostrophes and hyphens stay.
const EDGE_PUNCTUATION = /^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu;

export function tokeniseAnswer(answer: string): string[] {
  return answer
    .split(/\s+/)
    .map((t) => t.replace(EDGE_PUNCTUATION, ''))
    .filter((t) => t !== '');
}

function countTokens(tokens: string[]): Map<string, number> {
  const counts = new Map<string, number>();
  for (const t of tokens) {
    const key = normaliseAnswer(t);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

export function canFormAnswer(words: string[], answer: string): boolean {
  const have = countTokens(words.flatMap(tokeniseAnswer));
  const need = countTokens(tokeniseAnswer(answer));
  if (have.size !== need.size) return false;
  for (const [key, n] of need) {
    if (have.get(key) !== n) return false;
  }
  return true;
}
