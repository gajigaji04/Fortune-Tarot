export type Suit = "wands" | "cups" | "swords" | "pentacles";
export type Arcana = "major" | "minor";
export type Orientation = "upright" | "reversed";

export interface TarotCard {
  id: string;
  name: string;
  nameKo: string;
  arcana: Arcana;
  suit?: Suit;
  /** Card number within its arcana/suit (0-21 for major, 1-14 for minor ace-king). */
  number: number;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  interpretation: {
    upright: string;
    reversed: string;
  };
  /** One-line catalog blurb, kept short per spec. */
  summary: string;
}

export type SpreadLayout = "single" | "row" | "celtic-cross";

export interface SpreadPosition {
  id: string;
  name: string;
  description: string;
}

export interface TarotSpread {
  id: string;
  name: string;
  description: string;
  cardCount: number;
  layout: SpreadLayout;
  positions: SpreadPosition[];
}

export type ReadingMode = "draw-only" | "interpret";

export interface DrawnCard {
  card: TarotCard;
  orientation: Orientation;
  position: SpreadPosition;
}

export interface ReadingRecord {
  id: string;
  createdAt: string;
  spreadId: string;
  spreadName: string;
  question: string;
  mode: ReadingMode;
  cards: {
    cardId: string;
    orientation: Orientation;
    positionId: string;
    positionName: string;
  }[];
}
