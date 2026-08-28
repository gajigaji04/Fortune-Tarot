import { useTranslation } from "react-i18next";
import type { ReadingMode } from "../../types/common";
import type { SymbolonDrawnCard, SymbolonReadingType, SymbolonSpreadLayout } from "../../types/symbolon";
import { SymbolonSpread } from "./SymbolonSpread";
import { SymbolonPentagon } from "./SymbolonPentagon";
import { SymbolonHeptagon } from "./SymbolonHeptagon";
import { SymbolonWheel } from "./SymbolonWheel";
import { SymbolonResultDetails } from "./SymbolonResultDetails";
import styles from "./SymbolonReadingResultView.module.css";

interface SymbolonReadingResultViewProps {
  readingType: SymbolonReadingType;
  question: string;
  mode: ReadingMode;
  layout: SymbolonSpreadLayout;
  drawnCards: SymbolonDrawnCard[];
  revealedIds: Set<string>;
}

/** Symbolon's equivalent of ReadingResultView.tsx -- its own spreads, its own result details. */
export function SymbolonReadingResultView({
  readingType,
  question,
  mode,
  layout,
  drawnCards,
  revealedIds,
}: SymbolonReadingResultViewProps) {
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

      {layout === "wheel" ? (
        <SymbolonWheel drawnCards={drawnCards} revealedIds={revealedIds} />
      ) : layout === "heptagon" ? (
        <SymbolonHeptagon drawnCards={drawnCards} revealedIds={revealedIds} />
      ) : layout === "pentagon" ? (
        <SymbolonPentagon drawnCards={drawnCards} revealedIds={revealedIds} />
      ) : (
        <SymbolonSpread layout={layout} drawnCards={drawnCards} revealedIds={revealedIds} />
      )}

      {allRevealed && (
        <SymbolonResultDetails drawnCards={drawnCards} readingType={readingType} question={question} mode={mode} />
      )}
    </div>
  );
}
