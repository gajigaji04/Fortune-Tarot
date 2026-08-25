/**
 * One language's translated content for a single card, keyed by card id
 * (e.g. "major-00-fool", "wands-01-ace") in the corresponding <lang>.ts file.
 */
export interface CardTranslation {
  /** Localized card name, e.g. "愚者" for major-00-fool in Japanese. */
  name: string;
  /** One-line catalog blurb (same tone/length as the Korean summary). */
  summary: string;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  interpretation: {
    upright: string;
    reversed: string;
  };
}

export type CardTranslationMap = Record<string, CardTranslation>;
