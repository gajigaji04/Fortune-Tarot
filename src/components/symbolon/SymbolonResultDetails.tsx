import { useTranslation } from "react-i18next";
import type { ReadingMode } from "../../types/common";
import type { SymbolonDrawnCard, SymbolonReadingType } from "../../types/symbolon";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { symbolonInterpretationService } from "../../services/symbolonInterpretationService";
import styles from "./SymbolonResultDetails.module.css";

interface SymbolonResultDetailsProps {
  drawnCards: SymbolonDrawnCard[];
  readingType: SymbolonReadingType;
  question: string;
  mode: ReadingMode;
}

/**
 * Symbolon's per-card result breakdown -- always shows the card name and its
 * keywords; "with interpretation" adds the symbolism and the position-level
 * reading, plus an overall synthesis. No orientation badge (Symbolon has
 * none) and deliberately no good/bad verdict language, per spec: Symbolon
 * readings speak in psychological/symbolic terms, not fortune-telling ones.
 */
export function SymbolonResultDetails({ drawnCards, readingType, question, mode }: SymbolonResultDetailsProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const synthesis =
    mode === "interpret"
      ? symbolonInterpretationService.getOverallSynthesis(drawnCards, readingType, question, lang, t)
      : [];

  return (
    <div className={styles.panel}>
      <h2 className={styles.sectionTitle}>{t("reading.cardByCard")}</h2>
      {drawnCards.map((drawn) => {
        const keywords = getLocalized(drawn.card.keywords, lang);
        return (
          <div key={drawn.position.id} className={styles.positionBlock}>
            <h3 className={styles.positionHeading}>[{getLocalized(drawn.position.name, lang)}]</h3>
            <p className={styles.cardLine}>
              {getLocalized(drawn.card.name, lang)} · {drawn.card.englishName}
            </p>
            <p className={styles.keywords}>{keywords.join(" · ")}</p>
            {mode === "interpret" && (
              <>
                <h4 className={styles.symbolismHeading}>{t("symbolon.symbolHeading")}</h4>
                <p className={styles.positionText}>{getLocalized(drawn.card.symbolism, lang)}</p>
                <h4 className={styles.symbolismHeading}>{t("symbolon.positionMeaningHeading")}</h4>
                <p className={styles.positionText}>
                  {symbolonInterpretationService.getPositionReading(drawn, lang, t)}
                </p>
              </>
            )}
          </div>
        );
      })}

      {synthesis.length > 0 && (
        <div className={styles.synthesis}>
          <h2 className={styles.sectionTitle}>{t("reading.overallSynthesis")}</h2>
          {synthesis.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
