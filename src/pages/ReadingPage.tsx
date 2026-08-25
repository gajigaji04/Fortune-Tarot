import { useEffect, useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { QuestionInput } from "../components/tarot/QuestionInput";
import { ModeToggle } from "../components/tarot/ModeToggle";
import { CardCountSelector } from "../components/tarot/CardCountSelector";
import { ShuffleStage } from "../components/tarot/ShuffleStage";
import { CardSelectionBoard } from "../components/tarot/CardSelectionBoard";
import { ReadingResultView } from "../components/tarot/ReadingResultView";
import { useCardSelection } from "../hooks/useCardSelection";
import { useVault } from "../hooks/useVault";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import { getTopicById } from "../data/topics";
import { THREE_CARD_VARIANTS, layoutForCount, resolvePositions } from "../data/positionTemplates";
import { CARD_COUNTS, type CardCount, type ReadingMode } from "../types/tarot";
import styles from "./ReadingPage.module.css";

type Stage = "setup" | "shuffle" | "select" | "result";

const REVEAL_STAGGER_MS = 450;

function parseCount(raw: string | null): CardCount | null {
  const n = Number(raw);
  return CARD_COUNTS.includes(n as CardCount) ? (n as CardCount) : null;
}

export function ReadingPage() {
  const { topicId = "" } = useParams();
  const [searchParams] = useSearchParams();
  const topic = getTopicById(topicId);
  const { t } = useTranslation();
  const lang = useLang();
  const { pool, selections, start, pick, reset } = useCardSelection();
  const { addReading } = useVault();
  const reducedMotion = useReducedMotion();

  const [stage, setStage] = useState<Stage>("setup");
  const [count, setCount] = useState<CardCount>(topic?.defaultCount ?? 1);
  const [threeVariantId, setThreeVariantId] = useState(THREE_CARD_VARIANTS[0].id);
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState<ReadingMode>("interpret");
  const [saved, setSaved] = useState(false);
  const [revealedCount, setRevealedCount] = useState(0);

  useEffect(() => {
    setStage("setup");
    setCount(parseCount(searchParams.get("count")) ?? topic?.defaultCount ?? 1);
    setThreeVariantId(THREE_CARD_VARIANTS[0].id);
    setQuestion("");
    setMode("interpret");
    setSaved(false);
    setRevealedCount(0);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  useEffect(() => {
    if (stage !== "shuffle") return;
    const timer = window.setTimeout(
      () => {
        start();
        setStage("select");
      },
      reducedMotion ? 250 : 1700
    );
    return () => window.clearTimeout(timer);
  }, [stage, start, reducedMotion]);

  useEffect(() => {
    if (stage !== "result") return;
    if (reducedMotion) {
      setRevealedCount(selections.length);
      return;
    }
    setRevealedCount(0);
    let revealed = 0;
    const timer = window.setInterval(() => {
      revealed += 1;
      setRevealedCount(revealed);
      if (revealed >= selections.length) window.clearInterval(timer);
    }, REVEAL_STAGGER_MS);
    return () => window.clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, reducedMotion]);

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  const positions = resolvePositions(topic.id, count, threeVariantId);
  const layout = layoutForCount(count);
  const revealedIds = new Set(selections.slice(0, revealedCount).map((d) => d.position.id));
  const selectionComplete = selections.length >= positions.length;

  const handleSave = () => {
    addReading({
      topicId: topic.id,
      count,
      threeCardVariantId: count === 3 ? threeVariantId : undefined,
      question,
      mode,
      cards: selections.map((d) => ({
        cardId: d.card.id,
        orientation: d.orientation,
        positionId: d.position.id,
      })),
    });
    setSaved(true);
  };

  const handleReset = () => {
    reset();
    setSaved(false);
    setRevealedCount(0);
    setStage("setup");
  };

  return (
    <div className="container">
      <header className={styles.header}>
        <h1 className={styles.spreadName}>{getLocalized(topic.name, lang)}</h1>
        <p className={styles.spreadDesc}>{getLocalized(topic.description, lang)}</p>
      </header>

      {stage === "setup" && (
        <div className={styles.setup}>
          <CardCountSelector value={count} onChange={setCount} />

          {count === 3 && (
            <div className={styles.variantTabs} role="tablist" aria-label={t("reading.threeVariantLabel")}>
              {THREE_CARD_VARIANTS.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  role="tab"
                  aria-selected={variant.id === threeVariantId}
                  className={`${styles.variantTab} ${variant.id === threeVariantId ? styles.variantTabActive : ""}`}
                  onClick={() => setThreeVariantId(variant.id)}
                >
                  {getLocalized(variant.label, lang)}
                </button>
              ))}
            </div>
          )}

          <div className={styles.positionsPreview}>
            <h2>{t("reading.positionsPreviewTitle")}</h2>
            <ul className={styles.positionsList}>
              {positions.map((position, i) => (
                <li key={position.id}>
                  <strong>
                    {i + 1}. {getLocalized(position.name, lang)}
                  </strong>
                  <span>{getLocalized(position.description, lang)}</span>
                </li>
              ))}
            </ul>
          </div>

          <QuestionInput value={question} onChange={setQuestion} placeholder={getLocalized(topic.defaultQuestion, lang)} />
          <ModeToggle value={mode} onChange={setMode} />

          <Button variant="primary" onClick={() => setStage("shuffle")}>
            {t("reading.startButton")}
          </Button>
        </div>
      )}

      {stage === "shuffle" && <ShuffleStage />}

      {stage === "select" && pool && (
        <div className={styles.selectStage}>
          <CardSelectionBoard pool={pool} positions={positions} selections={selections} onPick={(card) => pick(card, positions)} />
          <Button variant="primary" disabled={!selectionComplete} onClick={() => setStage("result")}>
            {t("reading.viewResultButton")}
          </Button>
        </div>
      )}

      {stage === "result" && (
        <div className={styles.resultStage}>
          <ReadingResultView
            topic={topic}
            question={question}
            mode={mode}
            layout={layout}
            drawnCards={selections}
            revealedIds={revealedIds}
          />

          <Divider />

          <div className={styles.resultActions}>
            <Button variant="outline" onClick={handleReset}>
              {t("reading.resetButton")}
            </Button>
            <Button variant="primary" onClick={handleSave} disabled={saved}>
              {saved ? t("common.saved") : t("common.save")}
            </Button>
          </div>
          {saved && <p className={styles.savedNote}>{t("vault.savedToVault")}</p>}
        </div>
      )}
    </div>
  );
}
