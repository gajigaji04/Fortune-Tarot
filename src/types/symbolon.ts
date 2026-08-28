import type { Localized, SpreadPosition } from "./common";

export type { Lang, Localized, SpreadPosition } from "./common";

/**
 * Symbolon is an independent card system from Tarot: no Major/Minor split,
 * no suits, no court cards, and -- unlike Tarot -- no upright/reversed
 * orientation. Do not import Tarot types here; the two systems intentionally
 * do not share domain data, only generic UI.
 *
 * The real Symbolon deck (Peter Orban & Ingrid Zinnel, 1993) has 78 cards
 * with NO printed titles or numbers on the physical cards themselves --
 * cards are identified only by astrological symbols in the guidebook. The
 * `number` field below is this site's own internal display/sort index
 * (1-78), not an official card number. `englishName` is the card's
 * commonly-used English title (translations of the original German
 * guidebook vary by source); see src/data/symbolon/cards.ts for the
 * reference list this project uses.
 */
export interface SymbolonCard {
  id: string;
  /** This site's internal display/sort index (1-78) -- not an official card number; see note above. */
  number: number;
  /** Commonly-used English title for this archetype, e.g. "The Warrior". */
  englishName: string;
  name: Localized<string>;
  /** Card artwork path, e.g. "/assets/symbolon/card-01.webp". Until real/licensed art is added, the UI shows a placeholder. */
  image: string;
  keywords: Localized<string[]>;
  /** Core meaning of the archetype. */
  meaning: Localized<string>;
  /** What the card's imagery/symbol represents. */
  symbolism: Localized<string>;
}

/**
 * Shape of the hand-authored Korean source data in src/data/symbolon/cards.ts,
 * before translation overlays are merged in by src/data/symbolon/index.ts.
 */
export interface KoSymbolonCardSource {
  id: string;
  number: number;
  englishName: string;
  nameKo: string;
  keywords: string[];
  meaning: string;
  symbolism: string;
}

export const SYMBOLON_DECK_SIZE = 78;

export type SymbolonCardCount = 1 | 3 | 5 | 7 | 10;
export const SYMBOLON_CARD_COUNTS: SymbolonCardCount[] = [1, 3, 5, 7, 10];

export type SymbolonSpreadLayout = "single" | "row" | "pentagon" | "heptagon" | "wheel";

export function symbolonLayoutForCount(count: SymbolonCardCount): SymbolonSpreadLayout {
  switch (count) {
    case 1:
      return "single";
    case 3:
      return "row";
    case 5:
      return "pentagon";
    case 7:
      return "heptagon";
    case 10:
      return "wheel";
  }
}

/** A reading focus the user is exploring (inner self, relationship, ...). Card count is *not* fixed here. */
export interface SymbolonReadingType {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
  defaultCount: SymbolonCardCount;
  /** Card counts this reading type recommends, in display order; first is the default. */
  recommendedCounts: SymbolonCardCount[];
  defaultQuestion: Localized<string>;
}

export interface SymbolonDrawnCard {
  card: SymbolonCard;
  position: SpreadPosition;
}
