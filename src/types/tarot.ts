import type { Localized, SpreadPosition } from "./common";

export type { Lang, Localized, ReadingMode, SpreadPosition } from "./common";

export type Suit = "wands" | "cups" | "swords" | "pentacles";
export type Arcana = "major" | "minor";
export type Orientation = "upright" | "reversed";

export interface TarotCard {
  id: string;
  /** Canonical English name, e.g. "The Fool" -- always shown as a subtitle regardless of active language. */
  englishName: string;
  arcana: Arcana;
  suit?: Suit;
  /** Card number within its arcana/suit (0-21 for major, 1-14 for minor ace-king). */
  number: number;
  /** Forward-compat hook for real card artwork, e.g. "major/00-fool". Unused today -- CardFace renders SVG art. */
  imagePath: string;
  name: Localized<string>;
  keywords: {
    upright: Localized<string[]>;
    reversed: Localized<string[]>;
  };
  interpretation: {
    upright: Localized<string>;
    reversed: Localized<string>;
  };
  /** One-line catalog blurb, kept short per spec. */
  summary: Localized<string>;
}

/**
 * Shape of the hand-authored Korean source data in src/data/cards/*.ts,
 * before translation overlays are merged in by src/data/cards/index.ts.
 */
export interface KoCardSource {
  id: string;
  englishName: string;
  nameKo: string;
  arcana: Arcana;
  suit?: Suit;
  number: number;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  interpretation: {
    upright: string;
    reversed: string;
  };
  summary: string;
}

export type CardCount = 1 | 3 | 5 | 10;
export const CARD_COUNTS: CardCount[] = [1, 3, 5, 10];

export type SpreadLayout = "single" | "row" | "pentagon" | "celtic-cross";

/** A point-in-time question the user is exploring (career, love, ...). Card count is *not* fixed here. */
export interface Topic {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
  defaultCount: CardCount;
  /** Default question shown as a placeholder / prompt for this topic. */
  defaultQuestion: Localized<string>;
}

/** Variant of the 3-card layout, selectable whenever cardCount === 3. */
export interface ThreeCardVariant {
  id: string;
  label: Localized<string>;
  positions: SpreadPosition[];
}

export interface DrawnCard {
  card: TarotCard;
  orientation: Orientation;
  position: SpreadPosition;
}
