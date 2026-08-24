import type { DrawnCard, TarotSpread } from "../../types/tarot";
import { interpretationService } from "../../services/interpretationService";
import styles from "./InterpretationPanel.module.css";

interface InterpretationPanelProps {
  drawnCards: DrawnCard[];
  spread: TarotSpread;
  question: string;
}

export function InterpretationPanel({ drawnCards, spread, question }: InterpretationPanelProps) {
  const synthesis = interpretationService.getOverallSynthesis(drawnCards, spread, question);

  return (
    <div className={styles.panel}>
      <h2 className={styles.sectionTitle}>카드별 해석</h2>
      {drawnCards.map((drawn) => (
        <div key={drawn.position.id} className={styles.positionBlock}>
          <h3 className={styles.positionHeading}>[{drawn.position.name}]</h3>
          <p className={styles.cardLine}>
            {drawn.card.name} · {drawn.card.nameKo} — {drawn.orientation === "upright" ? "정방향" : "역방향"}
          </p>
          <p className={styles.positionText}>{interpretationService.getPositionReading(drawn)}</p>
        </div>
      ))}

      {synthesis.length > 0 && (
        <div className={styles.synthesis}>
          <h2 className={styles.sectionTitle}>종합 해석</h2>
          {synthesis.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
}
