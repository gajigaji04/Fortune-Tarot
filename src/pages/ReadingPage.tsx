import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { QuestionInput } from "../components/tarot/QuestionInput";
import { ModeToggle } from "../components/tarot/ModeToggle";
import { ShuffleStage } from "../components/tarot/ShuffleStage";
import { Spread } from "../components/tarot/Spread";
import { CelticCrossSpread } from "../components/tarot/CelticCrossSpread";
import { InterpretationPanel } from "../components/tarot/InterpretationPanel";
import { useTarotDraw } from "../hooks/useTarotDraw";
import { useReadingHistory } from "../hooks/useReadingHistory";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { getSpreadById, threeCardSpreadIds } from "../data/spreads";
import type { ReadingMode } from "../types/tarot";
import styles from "./ReadingPage.module.css";

type Stage = "setup" | "shuffle" | "draw" | "result";

const THREE_CARD_LABELS: Record<string, string> = {
  "three-general": "과거·현재·미래",
  "three-choice": "선택 A / B",
  "three-relationship": "관계",
};

export function ReadingPage() {
  const { spreadId = "" } = useParams();
  const spread = getSpreadById(spreadId);
  const { drawnCards, revealedIds, draw, reveal, reset, allRevealed } = useTarotDraw();
  const { addReading } = useReadingHistory();
  const reducedMotion = useReducedMotion();

  const [stage, setStage] = useState<Stage>("setup");
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState<ReadingMode>("interpret");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setStage("setup");
    setQuestion("");
    setMode("interpret");
    setSaved(false);
    reset();
  }, [spreadId, reset]);

  useEffect(() => {
    if (stage !== "shuffle" || !spread) return;
    const timer = window.setTimeout(() => {
      draw(spread);
      setStage("draw");
    }, reducedMotion ? 250 : 1700);
    return () => window.clearTimeout(timer);
  }, [stage, spread, draw, reducedMotion]);

  if (!spread) {
    return <Navigate to="/" replace />;
  }

  const handleSave = () => {
    if (!drawnCards) return;
    addReading({
      spreadId: spread.id,
      spreadName: spread.name,
      question,
      mode,
      cards: drawnCards.map((d) => ({
        cardId: d.card.id,
        orientation: d.orientation,
        positionId: d.position.id,
        positionName: d.position.name,
      })),
    });
    setSaved(true);
  };

  const handleReset = () => {
    reset();
    setSaved(false);
    setStage("setup");
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.spreadName}>{spread.name}</h1>
        <p className={styles.spreadDesc}>{spread.description}</p>
      </header>

      {stage === "setup" && (
        <div className={styles.setup}>
          {threeCardSpreadIds.includes(spread.id as (typeof threeCardSpreadIds)[number]) && (
            <div className={styles.variantTabs} role="tablist" aria-label="3장 타로 방식 선택">
              {threeCardSpreadIds.map((id) => (
                <Link
                  key={id}
                  to={`/reading/${id}`}
                  role="tab"
                  aria-selected={id === spread.id}
                  className={`${styles.variantTab} ${id === spread.id ? styles.variantTabActive : ""}`}
                >
                  {THREE_CARD_LABELS[id]}
                </Link>
              ))}
            </div>
          )}

          <div className={styles.positionsPreview}>
            <h2>이 스프레드의 카드 자리</h2>
            <ul className={styles.positionsList}>
              {spread.positions.map((position, i) => (
                <li key={position.id}>
                  <strong>{i + 1}. {position.name}</strong>
                  <span>{position.description}</span>
                </li>
              ))}
            </ul>
          </div>

          <QuestionInput value={question} onChange={setQuestion} />
          <ModeToggle value={mode} onChange={setMode} />

          <Button variant="primary" onClick={() => setStage("shuffle")}>
            카드 섞기 시작
          </Button>
        </div>
      )}

      {stage === "shuffle" && <ShuffleStage />}

      {stage === "draw" && drawnCards && (
        <div className={styles.drawStage}>
          <p className={styles.drawHint}>
            카드를 하나씩 눌러 뒤집어 보세요. {allRevealed ? "모든 카드가 공개되었습니다." : ""}
          </p>
          {spread.layout === "celtic-cross" ? (
            <CelticCrossSpread drawnCards={drawnCards} revealedIds={revealedIds} onReveal={reveal} />
          ) : (
            <Spread
              layout={spread.layout as "single" | "row"}
              drawnCards={drawnCards}
              revealedIds={revealedIds}
              onReveal={reveal}
            />
          )}
          {allRevealed && (
            <Button variant="primary" onClick={() => setStage("result")}>
              결과 확인하기
            </Button>
          )}
        </div>
      )}

      {stage === "result" && drawnCards && (
        <div className={styles.resultStage}>
          {question.trim() && (
            <div className={styles.questionBanner}>
              <p className={styles.questionLabel}>질문</p>
              <p className={styles.questionText}>&ldquo;{question.trim()}&rdquo;</p>
            </div>
          )}

          {spread.layout === "celtic-cross" ? (
            <CelticCrossSpread drawnCards={drawnCards} revealedIds={revealedIds} />
          ) : (
            <Spread
              layout={spread.layout as "single" | "row"}
              drawnCards={drawnCards}
              revealedIds={revealedIds}
            />
          )}

          {mode === "interpret" && (
            <InterpretationPanel drawnCards={drawnCards} spread={spread} question={question} />
          )}

          <Divider />

          <div className={styles.resultActions}>
            <Button variant="outline" onClick={handleReset}>
              다시 뽑기
            </Button>
            <Button variant="primary" onClick={handleSave} disabled={saved}>
              {saved ? "저장됨" : "결과 저장"}
            </Button>
          </div>
          {saved && <p className={styles.savedNote}>최근 기록에 저장되었습니다.</p>}
        </div>
      )}
    </div>
  );
}
