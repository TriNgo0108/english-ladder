import { Fragment, type ReactNode } from "react";

const BOLD = /<b>(.*?)<\/b>/g;

/**
 * Renders authored text where `<b>…</b>` marks the target structure.
 * Only a matched `<b>` pair becomes an element; every other character,
 * including any other tag or an unclosed `<b>`, is passed to React as a
 * string and so is escaped. Never uses dangerouslySetInnerHTML.
 */
export function renderRichText(s: string): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of s.matchAll(BOLD)) {
    const start = match.index;
    if (start > last) nodes.push(<Fragment key={key++}>{s.slice(last, start)}</Fragment>);
    nodes.push(<b key={key++}>{match[1]}</b>);
    last = start + match[0].length;
  }
  if (last < s.length) nodes.push(<Fragment key={key++}>{s.slice(last)}</Fragment>);
  return nodes;
}

/** The same text with `<b>` markers removed, for metadata and other plain-text uses. */
export function plainText(s: string): string {
  return s.replace(BOLD, "$1");
}

/**
 * Build-time check that authored text uses only well-formed `<b>…</b>` markup.
 * Returns null when valid, otherwise a short description of the problem.
 */
export function richTextProblem(s: string): string | null {
  if (s.includes("<b></b>")) return "empty <b></b> pair";
  const rest = s.replace(/<b>([^<>]+)<\/b>/g, "$1");
  if (/[<>]/.test(rest)) {
    return "contains a stray < or > (only exact <b>…</b> pairs are allowed)";
  }
  return null;
}
