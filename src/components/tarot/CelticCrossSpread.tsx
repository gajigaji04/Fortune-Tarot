import type { DrawnCard } from "../../types/tarot";
import { TarotCard } from "./TarotCard";
import styles from "./CelticCrossSpread.module.css";

interface CelticCrossSpreadProps {
  drawnCards: DrawnCard[];
  revealedIds: Set<string>;
  onReveal?: (positionId: string) => void;
  showOrientationLabel?: boolean;
}

function crossOrder(interactive: boolean): { positionId: string; slotClass: string }[] {
  return [
    { positionId: "past", slotClass: "pPast" },
    { positionId: "conscious", slotClass: "pConscious" },
    { positionId: "present", slotClass: "pPresent" },
    // While cards are still face-down and tappable, the crossing card gets its
    // own cell -- overlapping it on top of "present" (as tradition has it)
    // would put its click target dead center over the present card, making
    // present impossible to tap. The traditional overlap is applied once
    // both are already revealed and neither needs to be clicked anymore.
    { positionId: "obstacle", slotClass: interactive ? "pObstacleSlot" : "pObstacle" },
    { positionId: "unconscious", slotClass: "pUnconscious" },
    { positionId: "near-future", slotClass: "pNearFuture" },
  ];
}

const STAFF_ORDER = ["self", "environment", "hopes-fears", "outcome"];

export function CelticCrossSpread({
  drawnCards,
  revealedIds,
  onReveal,
  showOrientationLabel = true,
}: CelticCrossSpreadProps) {
  const interactive = Boolean(onReveal);
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
          {drawn.position.name}
        </p>
        <TarotCard
          card={drawn.card}
          orientation={drawn.orientation}
          revealed={revealed}
          showOrientationLabel={showOrientationLabel}
          onReveal={onReveal ? () => onReveal(positionId) : undefined}
        />
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cross}>
        {crossOrder(interactive).map(({ positionId, slotClass }) => renderSlot(positionId, slotClass))}
      </div>
      <div className={styles.staff}>{STAFF_ORDER.map((positionId) => renderSlot(positionId))}</div>
    </div>
  );
}
