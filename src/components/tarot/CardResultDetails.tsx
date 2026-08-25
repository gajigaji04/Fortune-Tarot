import { useTranslation } from "react-i18next";
import type { DrawnCard, ReadingMode, Topic } from "../../types/tarot";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { interpretationService } from "../../services/interpretationService";
import styles from "./CardResultDetails.module.css";

interface CardResultDetailsProps {
  drawnCards: DrawnCard[];
  topic: Topic;
  question: string;
  mode: ReadingMode;
}

/**
 * Per-card result breakdown. Both modes always show the card name and a
 * prominent upright/reversed badge; "cards only" adds just that orientation's
 * keywords, while "with interpretation" adds the fuller position reading and
 * an overall synthesis at the end.
 */
export function CardResultDetails({ drawnCards, topic, question, mode }: CardResultDetailsProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const synthesis =
    mode === "interpret" ? interpretationService.getOverallSynthesis(drawnCards, topic, question, lang, t) : [];

  return (
    <div className={styles.panel}>
      <h2 className={styles.sectionTitle}>{t("reading.cardByCard")}</h2>
      {drawnCards.map((drawn) => {
        const orientationText = t(drawn.orientation === "upright" ? "reading.upright" : "reading.reversed");
        const keywords = getLocalized(drawn.card.keywords[drawn.orientation], lang);
        return (
          <div key={drawn.position.id} className={styles.positionBlock}>
            <h3 className={styles.positionHeading}>[{getLocalized(drawn.position.name, lang)}]</h3>
            <p className={styles.cardLine}>
              {getLocalized(drawn.card.name, lang)} · {drawn.card.englishName}
              <span className={styles.orientationBadge} data-reversed={drawn.orientation === "reversed"}>
                {orientationText}
              </span>
            </p>
            <p className={styles.keywords}>{t("reading.meaningHeading", { orientation: orientationText })}: {keywords.join(" · ")}</p>
            {mode === "interpret" && (
              <p className={styles.positionText}>{interpretationService.getPositionReading(drawn, lang, t)}</p>
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
