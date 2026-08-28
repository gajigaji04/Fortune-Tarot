import type { SymbolonDrawnCard } from "../../types/symbolon";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { SymbolonCardView } from "./SymbolonCardView";
import styles from "./SymbolonWheel.module.css";

interface SymbolonWheelProps {
  drawnCards: SymbolonDrawnCard[];
  revealedIds: Set<string>;
}

/** Symbolon's 10-card extended reading -- a plain grid, not a Celtic Cross copy. */
export function SymbolonWheel({ drawnCards, revealedIds }: SymbolonWheelProps) {
  const lang = useLang();
  return (
    <div className={styles.grid}>
      {drawnCards.map((drawn, i) => (
        <div key={drawn.position.id} className={styles.slot}>
          <p className={styles.caption}>
            <span className={styles.captionIndex}>{i + 1}.</span>
            {getLocalized(drawn.position.name, lang)}
          </p>
          <SymbolonCardView card={drawn.card} revealed={revealedIds.has(drawn.position.id)} />
        </div>
      ))}
    </div>
  );
}
