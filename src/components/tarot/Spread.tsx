import type { DrawnCard, SpreadLayout } from "../../types/tarot";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { TarotCard } from "./TarotCard";
import styles from "./Spread.module.css";

interface SpreadProps {
  layout: Extract<SpreadLayout, "single" | "row">;
  drawnCards: DrawnCard[];
  revealedIds: Set<string>;
  showOrientationLabel?: boolean;
}

export function Spread({ layout, drawnCards, revealedIds, showOrientationLabel = true }: SpreadProps) {
  const lang = useLang();
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
            positionName={getLocalized(drawn.position.name, lang)}
            showOrientationLabel={showOrientationLabel}
          />
        );
      })}
    </div>
  );
}
