/** Tiny abstract rank marker shown above the suit emblem on court cards. */
export function CourtGlyph({ rank }: { rank: 11 | 12 | 13 | 14 }) {
  return (
    <svg
      viewBox="-10 -10 20 20"
      width="1.1em"
      height="1.1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {rank === 11 && <path d="M0 -8 L7 0 L0 8 L-7 0 Z" />}
      {rank === 12 && <path d="M-7 6 L0 -8 L7 6" />}
      {rank === 13 && <path d="M-8 2 Q0 -9 8 2" />}
      {rank === 14 && <path d="M-8 6 L-8 -4 L-3 1 L0 -7 L3 1 L8 -4 L8 6 Z" />}
    </svg>
  );
}
