import { useTranslation } from "react-i18next";
import type { DrawnCard, Topic } from "../../types/tarot";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { interpretationService } from "../../services/interpretationService";
import styles from "./InterpretationPanel.module.css";

interface InterpretationPanelProps {
  drawnCards: DrawnCard[];
  topic: Topic;
  question: string;
}

export function InterpretationPanel({ drawnCards, topic, question }: InterpretationPanelProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const synthesis = interpretationService.getOverallSynthesis(drawnCards, topic, question, lang, t);

  return (
    <div className={styles.panel}>
      <h2 className={styles.sectionTitle}>{t("reading.cardByCard")}</h2>
      {drawnCards.map((drawn) => (
        <div key={drawn.position.id} className={styles.positionBlock}>
          <h3 className={styles.positionHeading}>[{getLocalized(drawn.position.name, lang)}]</h3>
          <p className={styles.cardLine}>
            {getLocalized(drawn.card.name, lang)} · {drawn.card.englishName} —{" "}
            {t(drawn.orientation === "upright" ? "reading.upright" : "reading.reversed")}
          </p>
          <p className={styles.positionText}>{interpretationService.getPositionReading(drawn, lang, t)}</p>
        </div>
      ))}

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
