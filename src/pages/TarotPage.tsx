import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { TopicSelector } from "../components/tarot/TopicSelector";
import { QuestionInput } from "../components/tarot/QuestionInput";
import { ModeToggle } from "../components/tarot/ModeToggle";
import { CardCountSelector } from "../components/tarot/CardCountSelector";
import { CardSelectionBoard } from "../components/tarot/CardSelectionBoard";
import { ReadingResultView } from "../components/tarot/ReadingResultView";
import { useCardSelection } from "../hooks/useCardSelection";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import { topics, getTopicById } from "../data/topics";
import { THREE_CARD_VARIANTS, layoutForCount, resolvePositions } from "../data/positionTemplates";
import type { CardCount, ReadingMode } from "../types/tarot";
import styles from "./TarotPage.module.css";

type Stage = "setup" | "select" | "result";

const REVEAL_STAGGER_MS = 450;

export function TarotPage() {
  const { t } = useTranslation();
  const lang = useLang();
  const [searchParams] = useSearchParams();
  const { pool, selections, start, pick } = useCardSelection();
  const reducedMotion = useReducedMotion();

  const [topicId, setTopicId] = useState(() => {
    const requested = searchParams.get("topic");
    return requested && getTopicById(requested) ? requested : topics[0].id;
  });
  const topic = getTopicById(topicId) ?? topics[0];

  const [stage, setStage] = useState<Stage>("setup");
  const [count, setCount] = useState<CardCount>(topic.defaultCount);
  const [threeVariantId, setThreeVariantId] = useState(THREE_CARD_VARIANTS[0].id);
  const [question, setQuestion] = useState("");
  const [mode, setMode] = useState<ReadingMode>("interpret");
  const [revealedCount, setRevealedCount] = useState(0);

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

  const handleTopicChange = (id: string) => {
    setTopicId(id);
    const nextTopic = getTopicById(id);
    if (nextTopic) setCount(nextTopic.defaultCount);
    setThreeVariantId(THREE_CARD_VARIANTS[0].id);
  };

  const positions = resolvePositions(topic.id, count, threeVariantId);
  const layout = layoutForCount(count);
  const revealedIds = new Set(selections.slice(0, revealedCount).map((d) => d.position.id));
  const selectionComplete = selections.length >= positions.length;

  const handleContinueToSelection = () => {
    start();
    setStage("select");
  };

  const handleReset = () => {
    start();
    setRevealedCount(0);
    setStage("select");
  };

  return (
    <div className="container">
      {stage === "setup" && (
        <div className={styles.setup}>
          <div className={styles.settingsGroup}>
            <TopicSelector value={topicId} onChange={handleTopicChange} />
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

            <QuestionInput value={question} onChange={setQuestion} placeholder={getLocalized(topic.defaultQuestion, lang)} />
            <ModeToggle value={mode} onChange={setMode} />

            <Button variant="primary" onClick={handleContinueToSelection}>
              {t("reading.continueButton")}
            </Button>
          </div>
        </div>
      )}

      {stage === "select" && pool && (
        <div className={styles.selectStage}>
          <CardSelectionBoard pool={pool} positions={positions} selections={selections} onPick={(card) => pick(card, positions)} />
          <div className={styles.selectActions}>
            <Button variant="outline" onClick={() => setStage("setup")}>
              {t("common.back")}
            </Button>
            <Button variant="primary" disabled={!selectionComplete} onClick={() => setStage("result")}>
              {t("reading.viewResultButton")}
            </Button>
          </div>
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
            <Button variant="outline" onClick={() => setStage("setup")}>
              {t("common.back")}
            </Button>
            <Button variant="primary" onClick={handleReset}>
              {t("reading.resetButton")}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
