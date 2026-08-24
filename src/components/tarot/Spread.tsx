import type { DrawnCard, SpreadLayout } from "../../types/tarot";
import { TarotCard } from "./TarotCard";
import styles from "./Spread.module.css";

interface SpreadProps {
  layout: Extract<SpreadLayout, "single" | "row">;
  drawnCards: DrawnCard[];
  revealedIds: Set<string>;
  onReveal?: (positionId: string) => void;
  showOrientationLabel?: boolean;
}

export function Spread({ layout, drawnCards, revealedIds, onReveal, showOrientationLabel = true }: SpreadProps) {
  return (
    <div className={layout === "single" ? styles.single : styles.row}>
      {drawnCards.map((drawn) => {
        const revealed = revealedIds.has(drawn.position.id);
        return (
          <TarotCard
            key={drawn.position.id}
            card={drawn.card}
            orientation={drawn.orientation}
            revealed={revealed}
            positionName={drawn.position.name}
            showOrientationLabel={showOrientationLabel}
            onReveal={onReveal ? () => onReveal(drawn.position.id) : undefined}
          />
        );
      })}
    </div>
  );
}
