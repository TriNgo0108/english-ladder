/** Rails splay slightly towards the foot; same geometry as src/app/icon.svg. */
const LADDER = "M11.2 5.6 9.1 26.4M19.7 5.6l2.5 20.8M10.4 8.8h10.2M10 12.6h11M9.7 16.3h11.8M9.3 20.1h12.6";

/** The English Ladder mark: a ladder on the accent square. Decorative; pair it with text. */
export function LadderMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={className}>
      <rect width="32" height="32" rx="6" fill="var(--color-accent)" />
      <path d={LADDER} fill="none" stroke="var(--color-on-accent)" strokeWidth="2.2" />
    </svg>
  );
}
