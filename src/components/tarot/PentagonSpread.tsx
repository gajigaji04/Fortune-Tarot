import type { DrawnCard } from "../../types/tarot";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { TarotCard } from "./TarotCard";
import styles from "./PentagonSpread.module.css";

interface PentagonSpreadProps {
  drawnCards: DrawnCard[];
  revealedIds: Set<string>;
  showOrientationLabel?: boolean;
}

/** Five cards laid out along a gentle fanned arc, evoking cards spread by hand on a table. */
export function PentagonSpread({ drawnCards, revealedIds, showOrientationLabel = true }: PentagonSpreadProps) {
  const lang = useLang();
  return (
    <div className={styles.arc}>
      {drawnCards.map((drawn) => (
        <TarotCard
          key={drawn.position.id}
          card={drawn.card}
          orientation={drawn.orientation}
          revealed={revealedIds.has(drawn.position.id)}
          positionName={getLocalized(drawn.position.name, lang)}
          showOrientationLabel={showOrientationLabel}
        />
      ))}
    </div>
  );
}
