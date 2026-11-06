export function normaliseAnswer(s: string): string {
  return s
    .replace(/[‘’ʼ]/g, "'")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

/** Gap-specific normal form: hyphens act as spaces; trailing . ! ? are ignored. */
export function normaliseGap(s: string): string {
  return normaliseAnswer(s)
    .replace(/[-‐‑–]/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[\s.!?]+$/, '')
    .trim();
}

export function matchesGap(input: string, accepted: string[]): boolean {
  const n = normaliseGap(input);
  if (n === '') return false;
  return accepted.some((a) => normaliseGap(a) === n);
}
