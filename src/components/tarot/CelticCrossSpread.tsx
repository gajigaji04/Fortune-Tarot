import type { DrawnCard } from "../../types/tarot";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { TarotCard } from "./TarotCard";
import styles from "./CelticCrossSpread.module.css";

interface CelticCrossSpreadProps {
  drawnCards: DrawnCard[];
  revealedIds: Set<string>;
  showOrientationLabel?: boolean;
}

const CROSS_ORDER: { positionId: string; slotClass: string }[] = [
  { positionId: "past", slotClass: "pPast" },
  { positionId: "conscious", slotClass: "pConscious" },
  { positionId: "present", slotClass: "pPresent" },
  { positionId: "obstacle", slotClass: "pObstacle" },
  { positionId: "unconscious", slotClass: "pUnconscious" },
  { positionId: "near-future", slotClass: "pNearFuture" },
];

const STAFF_ORDER = ["self", "environment", "hopes-fears", "outcome"];

export function CelticCrossSpread({
  drawnCards,
  revealedIds,
  showOrientationLabel = true,
}: CelticCrossSpreadProps) {
  const lang = useLang();
  const byPositionId = new Map(drawnCards.map((d) => [d.position.id, d]));
  const allPositionIds = drawnCards.map((d) => d.position.id);

  const renderSlot = (positionId: string, slotClass?: string) => {
    const drawn = byPositionId.get(positionId);
    if (!drawn) return null;
    const index = allPositionIds.indexOf(positionId) + 1;
    const revealed = revealedIds.has(positionId);
    return (
      <div key={positionId} className={`${styles.slot} ${slotClass ? styles[slotClass] : ""}`}>
        <p className={styles.caption}>
          <span className={styles.captionIndex}>{index}.</span>
          {getLocalized(drawn.position.name, lang)}
        </p>
        <TarotCard
          card={drawn.card}
          orientation={drawn.orientation}
          revealed={revealed}
          showOrientationLabel={showOrientationLabel}
        />
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cross}>
        {CROSS_ORDER.map(({ positionId, slotClass }) => renderSlot(positionId, slotClass))}
      </div>
      <div className={styles.staff}>{STAFF_ORDER.map((positionId) => renderSlot(positionId))}</div>
    </div>
  );
}
