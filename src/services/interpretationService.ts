import type { TFunction } from "i18next";
import type { DrawnCard, Lang, Topic } from "../types/tarot";
import { getLocalized } from "../utils/i18n";

/**
 * Abstraction over "how a spread's meaning gets composed into text."
 * The current implementation is a local, rule-based composer built from the
 * per-card interpretation data plus a handful of localized sentence
 * templates. It is deliberately kept behind this interface so a future
 * LLM-backed provider (e.g. the Claude API) can be swapped in without
 * touching any calling UI code.
 */
export interface InterpretationProvider {
  getPositionReading(drawn: DrawnCard, lang: Lang, t: TFunction): string;
  getOverallSynthesis(drawnCards: DrawnCard[], topic: Topic, question: string, lang: Lang, t: TFunction): string[];
}

const localProvider: InterpretationProvider = {
  getPositionReading(drawn, lang, t) {
    const { card, orientation, position } = drawn;
    const body = getLocalized(
      orientation === "upright" ? card.interpretation.upright : card.interpretation.reversed,
      lang
    );
    return t("reading.positionReadTemplate", {
      position: getLocalized(position.name, lang),
      name: `${getLocalized(card.name, lang)}(${card.englishName})`,
      orientation: t(orientation === "upright" ? "reading.upright" : "reading.reversed"),
      body,
    });
  },

  getOverallSynthesis(drawnCards, topic, question, lang, t) {
    if (drawnCards.length === 0) return [];

    const paragraphs: string[] = [];
    const topicName = getLocalized(topic.name, lang);

    paragraphs.push(
      question.trim()
        ? t("reading.synthesisOpeningWithQuestion", { question: question.trim(), topic: topicName })
        : t("reading.synthesisOpening", { topic: topicName })
    );

    const majorCount = drawnCards.filter((d) => d.card.arcana === "major").length;
    const majorRatio = majorCount / drawnCards.length;
    if (drawnCards.length > 1) {
      if (majorRatio >= 0.5) {
        paragraphs.push(t("reading.synthesisMajorHeavy"));
      } else if (majorCount === 0) {
        paragraphs.push(t("reading.synthesisAllMinor"));
      }
    }

    const reversedCount = drawnCards.filter((d) => d.orientation === "reversed").length;
    const reversedRatio = reversedCount / drawnCards.length;
    if (reversedRatio >= 0.5) {
      paragraphs.push(t("reading.synthesisReversedHeavy"));
    } else if (reversedCount === 0 && drawnCards.length > 1) {
      paragraphs.push(t("reading.synthesisAllUpright"));
    }

    if (drawnCards.length > 1) {
      const first = drawnCards[0];
      const last = drawnCards[drawnCards.length - 1];
      paragraphs.push(
        t("reading.synthesisFlow", {
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

export const interpretationService: InterpretationProvider = localProvider;
