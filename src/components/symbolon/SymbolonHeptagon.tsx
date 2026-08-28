import type { SymbolonDrawnCard } from "../../types/symbolon";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { SymbolonCardView } from "./SymbolonCardView";
import styles from "./SymbolonHeptagon.module.css";

interface SymbolonHeptagonProps {
  drawnCards: SymbolonDrawnCard[];
  revealedIds: Set<string>;
}

const GRID_ORDER: { positionId: string; slotClass: string }[] = [
  { positionId: "self", slotClass: "pSelf" },
  { positionId: "other", slotClass: "pOther" },
  { positionId: "current-dynamic", slotClass: "pDynamic" },
  { positionId: "unconscious-pattern", slotClass: "pPattern" },
  { positionId: "root-of-conflict", slotClass: "pConflict" },
  { positionId: "growth-direction", slotClass: "pGrowth" },
  { positionId: "outcome", slotClass: "pOutcome" },
];

/** Symbolon's 7-card relationship spread: own layout, not a Tarot pattern. */
export function SymbolonHeptagon({ drawnCards, revealedIds }: SymbolonHeptagonProps) {
  const lang = useLang();
  const byPositionId = new Map(drawnCards.map((d) => [d.position.id, d]));
  const allPositionIds = drawnCards.map((d) => d.position.id);

  const renderSlot = (positionId: string, slotClass: string) => {
    const drawn = byPositionId.get(positionId);
    if (!drawn) return null;
    const index = allPositionIds.indexOf(positionId) + 1;
    return (
      <div key={positionId} className={`${styles.slot} ${styles[slotClass]}`}>
        <p className={styles.caption}>
          <span className={styles.captionIndex}>{index}.</span>
          {getLocalized(drawn.position.name, lang)}
        </p>
        <SymbolonCardView card={drawn.card} revealed={revealedIds.has(positionId)} />
      </div>
    );
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>{GRID_ORDER.map(({ positionId, slotClass }) => renderSlot(positionId, slotClass))}</div>
    </div>
  );
}
