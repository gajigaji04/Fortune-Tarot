/**
 * One language's translated content for a single Symbolon card, keyed by
 * card id (e.g. "symbolon-01") in the corresponding <lang>.ts file.
 * Mirrors src/data/cards/translations/types.ts's role for Tarot, but kept as
 * its own file/type since the two card systems' data are independent.
 */
export interface SymbolonCardTranslation {
  /** Localized card title, translated from the card's englishName. */
  name: string;
  keywords: string[];
  meaning: string;
  symbolism: string;
}

export type SymbolonCardTranslationMap = Record<string, SymbolonCardTranslation>;
