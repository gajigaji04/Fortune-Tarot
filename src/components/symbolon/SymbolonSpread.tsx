import type { SymbolonDrawnCard, SymbolonSpreadLayout } from "../../types/symbolon";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { SymbolonCardView } from "./SymbolonCardView";
import styles from "./SymbolonSpread.module.css";

interface SymbolonSpreadProps {
  layout: Extract<SymbolonSpreadLayout, "single" | "row">;
  drawnCards: SymbolonDrawnCard[];
  revealedIds: Set<string>;
}

export function SymbolonSpread({ layout, drawnCards, revealedIds }: SymbolonSpreadProps) {
  const lang = useLang();
  return (
    <div className={layout === "single" ? styles.single : styles.row}>
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
