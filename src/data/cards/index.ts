import type { KoCardSource, Lang, TarotCard } from "../../types/tarot";
import { slugify } from "../../utils/slug";
import { majorArcana as majorArcanaKo } from "./majorArcana";
import { wands as wandsKo } from "./wands";
import { cups as cupsKo } from "./cups";
import { swords as swordsKo } from "./swords";
import { pentacles as pentaclesKo } from "./pentacles";
import { ja } from "./translations/ja";
import { zh } from "./translations/zh";
import { en } from "./translations/en";
import type { CardTranslation } from "./translations/types";

const LANG_TRANSLATIONS: Record<Exclude<Lang, "ko">, Record<string, CardTranslation>> = {
  ja,
  zh,
  en,
};

function imagePathFor(base: KoCardSource): string {
  const suitOrMajor = base.arcana === "major" ? "major" : base.suit!;
  const fileStem = base.id.replace(`${suitOrMajor}-`, "");
  return `${suitOrMajor}/${fileStem}`;
}

function localizeString(base: string, koValue: string, pick: (t: CardTranslation) => string, id: string) {
  const localized: Record<Lang, string> = { ko: koValue, ja: koValue, zh: koValue, en: koValue };
  (["ja", "zh", "en"] as const).forEach((lang) => {
    const entry = LANG_TRANSLATIONS[lang][id];
    if (entry) localized[lang] = pick(entry);
  });
  void base;
  return localized;
}

function localizeArray(koValue: string[], pick: (t: CardTranslation) => string[], id: string) {
  const localized: Record<Lang, string[]> = { ko: koValue, ja: koValue, zh: koValue, en: koValue };
  (["ja", "zh", "en"] as const).forEach((lang) => {
    const entry = LANG_TRANSLATIONS[lang][id];
    if (entry) localized[lang] = pick(entry);
  });
  return localized;
}

function toTarotCard(base: KoCardSource): TarotCard {
  return {
    id: base.id,
    englishName: base.englishName,
    arcana: base.arcana,
    suit: base.suit,
    number: base.number,
    imagePath: imagePathFor(base),
    name: localizeString(base.englishName, base.nameKo, (t) => t.name, base.id),
    keywords: {
      upright: localizeArray(base.keywords.upright, (t) => t.keywords.upright, base.id),
      reversed: localizeArray(base.keywords.reversed, (t) => t.keywords.reversed, base.id),
    },
    interpretation: {
      upright: localizeString(base.englishName, base.interpretation.upright, (t) => t.interpretation.upright, base.id),
      reversed: localizeString(base.englishName, base.interpretation.reversed, (t) => t.interpretation.reversed, base.id),
    },
    summary: localizeString(base.englishName, base.summary, (t) => t.summary, base.id),
  };
}

const koSource: KoCardSource[] = [
  ...majorArcanaKo,
  ...wandsKo,
  ...cupsKo,
  ...swordsKo,
  ...pentaclesKo,
];

export const allCards: TarotCard[] = koSource.map(toTarotCard);

const cardsById = new Map(allCards.map((card) => [card.id, card]));
const cardsBySlug = new Map(allCards.map((card) => [slugify(card.englishName), card]));

export function getCardById(id: string): TarotCard | undefined {
  return cardsById.get(id);
}

export function getCardBySlug(slug: string): TarotCard | undefined {
  return cardsBySlug.get(slug);
}
