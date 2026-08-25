import { useTranslation } from "react-i18next";
import type { DrawnCard, ReadingMode, SpreadLayout, Topic } from "../../types/tarot";
import { Spread } from "./Spread";
import { PentagonSpread } from "./PentagonSpread";
import { CelticCrossSpread } from "./CelticCrossSpread";
import { CardResultDetails } from "./CardResultDetails";
import styles from "./ReadingResultView.module.css";

interface ReadingResultViewProps {
  topic: Topic;
  question: string;
  mode: ReadingMode;
  layout: SpreadLayout;
  drawnCards: DrawnCard[];
  revealedIds: Set<string>;
}

/** The read-only "here is the spread and what it means" view shown by TarotPage's result stage. */
export function ReadingResultView({ topic, question, mode, layout, drawnCards, revealedIds }: ReadingResultViewProps) {
  const { t } = useTranslation();
  const allRevealed = revealedIds.size >= drawnCards.length;

  return (
    <div className={styles.wrapper}>
      {question.trim() && (
        <div className={styles.questionBanner}>
          <p className={styles.questionLabel}>{t("reading.resultQuestionLabel")}</p>
          <p className={styles.questionText}>&ldquo;{question.trim()}&rdquo;</p>
        </div>
      )}

      {layout === "celtic-cross" ? (
        <CelticCrossSpread drawnCards={drawnCards} revealedIds={revealedIds} showOrientationLabel />
      ) : layout === "pentagon" ? (
        <PentagonSpread drawnCards={drawnCards} revealedIds={revealedIds} showOrientationLabel />
      ) : (
        <Spread layout={layout as "single" | "row"} drawnCards={drawnCards} revealedIds={revealedIds} showOrientationLabel />
      )}

      {allRevealed && (
        <CardResultDetails drawnCards={drawnCards} topic={topic} question={question} mode={mode} />
      )}
    </div>
  );
}
