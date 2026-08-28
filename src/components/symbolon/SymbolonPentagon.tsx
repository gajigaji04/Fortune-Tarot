import type { SymbolonDrawnCard } from "../../types/symbolon";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { SymbolonCardView } from "./SymbolonCardView";
import styles from "./SymbolonPentagon.module.css";

interface SymbolonPentagonProps {
  drawnCards: SymbolonDrawnCard[];
  revealedIds: Set<string>;
}

/** Five cards along a gentle fanned arc -- the 5-card "situation analysis" spread. */
export function SymbolonPentagon({ drawnCards, revealedIds }: SymbolonPentagonProps) {
  const lang = useLang();
  return (
    <div className={styles.arc}>
      {drawnCards.map((drawn) => (
        <SymbolonCardView
          key={drawn.position.id}
          card={drawn.card}
          revealed={revealedIds.has(drawn.position.id)}
          positionName={getLocalized(drawn.position.name, lang)}
        />
      ))}
    </div>
  );
}
