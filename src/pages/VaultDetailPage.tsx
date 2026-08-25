import { useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../components/common/Button";
import { ReadingResultView } from "../components/tarot/ReadingResultView";
import { useVault } from "../hooks/useVault";
import { getTopicById } from "../data/topics";
import { getCardById } from "../data/cards";
import { layoutForCount, resolvePositions } from "../data/positionTemplates";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import type { DrawnCard } from "../types/tarot";
import styles from "./VaultDetailPage.module.css";

export function VaultDetailPage() {
  const { recordId = "" } = useParams();
  const { t } = useTranslation();
  const lang = useLang();
  const navigate = useNavigate();
  const { history, removeReading } = useVault();
  const [confirming, setConfirming] = useState(false);

  const record = history.find((r) => r.id === recordId);

  if (!record) {
    return <Navigate to="/vault" replace />;
  }

  const topic = getTopicById(record.topicId);
  if (!topic) {
    return <Navigate to="/vault" replace />;
  }

  const positions = resolvePositions(record.topicId, record.count, record.threeCardVariantId);
  const positionsById = new Map(positions.map((p) => [p.id, p]));

  const drawnCards: DrawnCard[] = record.cards
    .map((c): DrawnCard | null => {
      const card = getCardById(c.cardId);
      const position = positionsById.get(c.positionId);
      if (!card || !position) return null;
      return { card, orientation: c.orientation, position };
    })
    .filter((d): d is DrawnCard => d !== null);

  const revealedIds = new Set(drawnCards.map((d) => d.position.id));

  return (
    <div className="container">
      <Link to="/vault" className={styles.back}>
        ← {t("vault.back")}
      </Link>

      <header className={styles.header}>
        <h1 className={styles.topicName}>{getLocalized(topic.name, lang)}</h1>
        <p className={styles.meta}>{t("reading.countUnit", { count: record.count })}</p>
      </header>

      <div className={styles.body}>
        <ReadingResultView
          topic={topic}
          question={record.question}
          mode={record.mode}
          layout={layoutForCount(record.count)}
          drawnCards={drawnCards}
          revealedIds={revealedIds}
        />

        <div className={styles.actions}>
          {confirming ? (
            <div className={styles.confirmRow}>
              <span className={styles.confirmText}>{t("vault.deleteConfirmQuestion")}</span>
              <div className={styles.confirmActions}>
                <Button variant="outline" onClick={() => setConfirming(false)}>
                  {t("vault.cancel")}
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    removeReading(record.id);
                    navigate("/vault");
                  }}
                >
                  {t("common.delete")}
                </Button>
              </div>
            </div>
          ) : (
            <Button variant="outline" onClick={() => setConfirming(true)}>
              {t("common.delete")}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
