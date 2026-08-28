import type { TFunction } from "i18next";
import type { Lang } from "../types/common";
import type { SymbolonDrawnCard, SymbolonReadingType } from "../types/symbolon";
import { getLocalized } from "../utils/i18n";

/**
 * Symbolon's own composer -- deliberately not a copy of Tarot's
 * interpretationService.ts. No orientation: every reading is composed from
 * a single `meaning`. No good/bad fortune framing, and no invented
 * card-category taxonomy -- the real Symbolon deck's own thematic grouping
 * (by astrological house/planet) isn't reproduced in this project's data,
 * so synthesis stays generic across however many cards are drawn.
 */
export interface SymbolonInterpretationProvider {
  getPositionReading(drawn: SymbolonDrawnCard, lang: Lang, t: TFunction): string;
  getOverallSynthesis(
    drawnCards: SymbolonDrawnCard[],
    readingType: SymbolonReadingType,
    question: string,
    lang: Lang,
    t: TFunction
  ): string[];
}

const localProvider: SymbolonInterpretationProvider = {
  getPositionReading(drawn, lang, t) {
    const { card, position } = drawn;
    return t("symbolon.positionReadTemplate", {
      position: getLocalized(position.name, lang),
      name: `${getLocalized(card.name, lang)}(${card.englishName})`,
      body: getLocalized(card.meaning, lang),
    });
  },

  getOverallSynthesis(drawnCards, readingType, question, lang, t) {
    if (drawnCards.length === 0) return [];

    const paragraphs: string[] = [];
    const readingTypeName = getLocalized(readingType.name, lang);

    paragraphs.push(
      question.trim()
        ? t("symbolon.synthesisOpeningWithQuestion", { question: question.trim(), readingType: readingTypeName })
        : t("symbolon.synthesisOpening", { readingType: readingTypeName })
    );

    if (drawnCards.length > 1) {
      paragraphs.push(t("symbolon.synthesisMultiCard"));

      const first = drawnCards[0];
      const last = drawnCards[drawnCards.length - 1];
      paragraphs.push(
        t("symbolon.synthesisFlow", {
          firstPosition: getLocalized(first.position.name, lang),
          firstName: getLocalized(first.card.name, lang),
          lastPosition: getLocalized(last.position.name, lang),
          lastName: getLocalized(last.card.name, lang),
        })
      );
    }

    return paragraphs;
  },
};

export const symbolonInterpretationService: SymbolonInterpretationProvider = localProvider;
