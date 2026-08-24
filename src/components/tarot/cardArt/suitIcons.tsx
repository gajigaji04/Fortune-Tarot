import { starPath } from "./geometry";
import type { Suit } from "../../../types/tarot";

interface SuitGlyphProps {
  suit: Suit;
  size?: number | string;
  className?: string;
}

/** A small line-art emblem for one suit, centered on (0,0) within a ~22-unit box. */
export function SuitGlyph({ suit, size = 22, className }: SuitGlyphProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11 -11 22 22"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <SuitShape suit={suit} />
    </svg>
  );
}

export function SuitShape({ suit }: { suit: Suit }) {
  switch (suit) {
    case "wands":
      return (
        <g fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round">
          <line x1={0} y1={-9} x2={0} y2={9} />
          <path d="M0 -9 L-3 -4 M0 -9 L3 -4" />
          <path d="M0 -3 L-2.4 0.5 M0 -3 L2.4 0.5" />
        </g>
      );
    case "cups":
      return (
        <g fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M-6 -6 Q-6 3 0 3 Q6 3 6 -6 Z" />
          <line x1={0} y1={3} x2={0} y2={7} />
          <line x1={-4} y1={8.5} x2={4} y2={8.5} />
        </g>
      );
    case "swords":
      return (
        <g fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round">
          <line x1={0} y1={-9} x2={0} y2={7} />
          <line x1={-3.5} y1={-2} x2={3.5} y2={-2} />
          <path d="M-2.5 7 L0 9.5 L2.5 7" />
        </g>
      );
    case "pentacles":
      return (
        <g fill="none" stroke="currentColor" strokeWidth={1.1}>
          <circle cx={0} cy={0} r={9} />
          <path d={starPath(0, 0, 6.4, 2.5, 5)} />
        </g>
      );
    default:
      return null;
  }
}
