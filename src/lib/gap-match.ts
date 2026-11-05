export function normaliseAnswer(s: string): string {
  return s
    .replace(/[‘’ʼ]/g, "'")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

export function matchesGap(input: string, accepted: string[]): boolean {
  const n = normaliseAnswer(input);
  if (n === '') return false;
  return accepted.some((a) => normaliseAnswer(a) === n);
}
