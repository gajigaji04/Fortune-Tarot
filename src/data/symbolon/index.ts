import type { KoSymbolonCardSource, Lang, SymbolonCard } from "../../types/symbolon";
import { SYMBOLON_DECK_SIZE } from "../../types/symbolon";
import { symbolonCards as koSource } from "./cards";
import { ja } from "./translations/ja";
import { zh } from "./translations/zh";
import { en } from "./translations/en";
import type { SymbolonCardTranslation, SymbolonCardTranslationMap } from "./translations/types";

/**
 * Symbolon is a fully independent card system from Tarot (see
 * src/types/symbolon.ts): the real 78-card deck by Peter Orban & Ingrid
 * Zinnel, with its own card list -- not Tarot's Major/Minor/suit structure,
 * and no upright/reversed orientation. Card titles come from cross-checked
 * reference material (see cards.ts); `meaning`/`symbolism` copy is this
 * project's own original writing. The physical deck has no card art with
 * printed titles, so `image` points to a path this project does not yet
 * populate -- the UI shows a clearly-labeled placeholder instead of
 * fabricated artwork. Swap in licensed art by dropping files at that path.
 */

const LANG_TRANSLATIONS: Record<Exclude<Lang, "ko">, SymbolonCardTranslationMap> = {
  ja,
  zh,
  en,
};

function imagePathFor(base: KoSymbolonCardSource): string {
  return `/assets/symbolon/card-${String(base.number).padStart(2, "0")}.webp`;
}

function localizeString(koValue: string, pick: (t: SymbolonCardTranslation) => string, id: string) {
  const localized: Record<Lang, string> = { ko: koValue, ja: koValue, zh: koValue, en: koValue };
  (["ja", "zh", "en"] as const).forEach((lang) => {
    const entry = LANG_TRANSLATIONS[lang][id];
    if (entry) localized[lang] = pick(entry);
  });
  return localized;
}

function localizeArray(koValue: string[], pick: (t: SymbolonCardTranslation) => string[], id: string) {
  const localized: Record<Lang, string[]> = { ko: koValue, ja: koValue, zh: koValue, en: koValue };
  (["ja", "zh", "en"] as const).forEach((lang) => {
    const entry = LANG_TRANSLATIONS[lang][id];
    if (entry) localized[lang] = pick(entry);
  });
  return localized;
}

function toSymbolonCard(base: KoSymbolonCardSource): SymbolonCard {
  return {
    id: base.id,
    number: base.number,
    englishName: base.englishName,
    image: imagePathFor(base),
    name: localizeString(base.nameKo, (t) => t.name, base.id),
    keywords: localizeArray(base.keywords, (t) => t.keywords, base.id),
    meaning: localizeString(base.meaning, (t) => t.meaning, base.id),
    symbolism: localizeString(base.symbolism, (t) => t.symbolism, base.id),
  };
}

/**
 * Dev-time integrity check for the deck. Runs once at module load; throws
 * loudly rather than silently shipping a broken/incomplete deck. Checks:
 * exact card count, duplicate ids/numbers, and every card having a
 * translation entry (name/keywords/meaning/symbolism) in every language.
 */
function validateSymbolonDeck(cards: SymbolonCard[]): void {
  if (cards.length !== SYMBOLON_DECK_SIZE) {
    throw new Error(`Symbolon deck must contain exactly ${SYMBOLON_DECK_SIZE} cards, found ${cards.length}`);
  }

  const seenIds = new Set<string>();
  const seenNumbers = new Set<number>();
  const duplicateIds: string[] = [];
  const duplicateNumbers: number[] = [];
  const missingTranslations: string[] = [];
  const missingContent: string[] = [];

  for (const card of cards) {
    if (seenIds.has(card.id)) duplicateIds.push(card.id);
    seenIds.add(card.id);

    if (seenNumbers.has(card.number)) duplicateNumbers.push(card.number);
    seenNumbers.add(card.number);

    (["ja", "zh", "en"] as const).forEach((lang) => {
      if (!LANG_TRANSLATIONS[lang][card.id]) missingTranslations.push(`${card.id} (${lang})`);
    });

    (["ko", "ja", "zh", "en"] as const).forEach((lang) => {
      if (!card.name[lang] || !card.meaning[lang] || !card.symbolism[lang] || card.keywords[lang].length === 0) {
        missingContent.push(`${card.id} (${lang})`);
      }
    });
  }

  const problems: string[] = [];
  if (duplicateIds.length) problems.push(`duplicate IDs: ${duplicateIds.join(", ")}`);
  if (duplicateNumbers.length) problems.push(`duplicate numbers: ${duplicateNumbers.join(", ")}`);
  if (missingTranslations.length) problems.push(`missing translations: ${missingTranslations.join(", ")}`);
  if (missingContent.length) problems.push(`missing name/meaning/symbolism/keywords: ${missingContent.join(", ")}`);

  if (problems.length > 0) {
    throw new Error(`Symbolon deck validation failed:\n${problems.join("\n")}`);
  }
}

export const symbolonCards: SymbolonCard[] = koSource.map(toSymbolonCard);

validateSymbolonDeck(symbolonCards);

const cardsById = new Map(symbolonCards.map((card) => [card.id, card]));

export function getSymbolonCardById(id: string): SymbolonCard | undefined {
  return cardsById.get(id);
}
