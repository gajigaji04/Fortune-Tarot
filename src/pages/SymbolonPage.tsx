import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { SymbolonReadingTypeSelector } from "../components/symbolon/SymbolonReadingTypeSelector";
import { QuestionInput } from "../components/tarot/QuestionInput";
import { ModeToggle } from "../components/tarot/ModeToggle";
import { CardCountSelector } from "../components/tarot/CardCountSelector";
import { CardSelectionBoard } from "../components/tarot/CardSelectionBoard";
import { SymbolonReadingResultView } from "../components/symbolon/SymbolonReadingResultView";
import { useCardSelection } from "../hooks/useCardSelection";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import { symbolonCards } from "../data/symbolon";
import { symbolonReadingTypes, getSymbolonReadingTypeById } from "../data/symbolon/readingTypes";
import { resolveSymbolonPositions } from "../data/symbolon/spreads";
import { symbolonLayoutForCount, type SymbolonCardCount } from "../types/symbolon";
import type { ReadingMode } from "../types/common";
import styles from "./SymbolonPage.module.css";

type Stage = "setup" | "select" | "result";

const REVEAL_STAGGER_MS = 450;
/** How many face-down cards are laid out for the user to choose from. */
const SELECTION_POOL_SIZE = 33;

export function SymbolonPage() {
  const { t } = useTranslation();
  const lang = useLang();
  const [searchParams] = useSearchParams();
  const { pool, selections, start, pick } = useCardSelection<(typeof symbolonCards)[number]>();
  const reducedMotion = useReducedMotion();

  const [readingTypeId, setReadingTypeId] = useState(() => {
    const requested = searchParams.get("reading");
    return requested && getSymbolonReadingTypeById(requested) ? requested : symbolonReadingTypes[0].id;
  });
  const readingType = getSymbolonReadingTypeById(readingTypeId) ?? symbolonReadingTypes[0];

  const [stage, setStage] = useState<Stage>("setup");
  const [count, setCount] = useState<SymbolonCardCount>(readingType.defaultCount);
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

  const handleReadingTypeChange = (id: string) => {
    setReadingTypeId(id);
    const next = getSymbolonReadingTypeById(id);
    if (next) setCount(next.defaultCount);
  };

  const positions = resolveSymbolonPositions(count);
  const layout = symbolonLayoutForCount(count);
  const revealedIds = new Set(selections.slice(0, revealedCount).map((d) => d.position.id));
  const selectionComplete = selections.length >= positions.length;

  const handleContinueToSelection = () => {
    start(symbolonCards, SELECTION_POOL_SIZE);
    setStage("select");
  };

  const handleReset = () => {
    start(symbolonCards, SELECTION_POOL_SIZE);
    setRevealedCount(0);
    setStage("select");
  };

  return (
    <div className="container">
      {stage === "setup" && (
        <div className={styles.setup}>
          <div className={styles.intro}>
            <h1 className={styles.introTitle}>{t("symbolon.pageTitle")}</h1>
            <p className={styles.introBody}>{t("symbolon.pageDescription")}</p>
          </div>

          <div className={styles.settingsGroup}>
            <SymbolonReadingTypeSelector value={readingTypeId} onChange={handleReadingTypeChange} />
            <CardCountSelector counts={readingType.recommendedCounts} value={count} onChange={setCount} />

            <QuestionInput
              value={question}
              onChange={setQuestion}
              placeholder={getLocalized(readingType.defaultQuestion, lang)}
            />
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
              {t("symbolon.viewResultButton")}
            </Button>
          </div>
        </div>
      )}

      {stage === "result" && (
        <div className={styles.resultStage}>
          <SymbolonReadingResultView
            readingType={readingType}
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
