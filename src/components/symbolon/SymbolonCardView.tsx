import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { SymbolonCard } from "../../types/symbolon";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { CardBack } from "../tarot/cardArt/CardBack";
import { SymbolonCardFace } from "./cardArt/SymbolonCardFace";
import styles from "./SymbolonCardView.module.css";

interface SymbolonCardViewProps {
  card: SymbolonCard;
  revealed: boolean;
  positionName?: string;
  onReveal?: () => void;
}

/**
 * Symbolon's equivalent of TarotCard (src/components/tarot/TarotCard.tsx),
 * minus everything orientation-related -- Symbolon cards have no
 * upright/reversed state. Shares the same ornamental CardBack design so both
 * systems' card piles look like they belong to the same table.
 */
export function SymbolonCardView({ card, revealed, positionName, onReveal }: SymbolonCardViewProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const [justRevealed, setJustRevealed] = useState(false);
  const wasRevealed = useRef(revealed);

  useEffect(() => {
    if (!wasRevealed.current && revealed) {
      setJustRevealed(true);
      const timer = window.setTimeout(() => setJustRevealed(false), 1000);
      wasRevealed.current = true;
      return () => window.clearTimeout(timer);
    }
    wasRevealed.current = revealed;
  }, [revealed]);

  const isInteractive = !revealed && Boolean(onReveal);
  const flipperClassName = [styles.flipper, revealed ? styles.revealed : "", justRevealed ? styles.justRevealed : ""]
    .filter(Boolean)
    .join(" ");

  const localizedName = getLocalized(card.name, lang);
  const ariaLabel = revealed
    ? t("symbolon.positionCardAria", { position: positionName ?? "", name: `${localizedName} (${card.englishName})` })
    : t("reading.pickCardAria");

  return (
    <div className={styles.wrapper}>
      <div className={styles.scene}>
        {isInteractive ? (
          <button type="button" className={flipperClassName} onClick={onReveal} aria-label={ariaLabel}>
            <div className={styles.designSide}>
              <CardBack />
            </div>
            <div className={styles.artSide}>
              <SymbolonCardFace card={card} />
            </div>
          </button>
        ) : (
          <div className={flipperClassName} role="img" aria-label={ariaLabel}>
            <div className={styles.designSide}>
              <CardBack />
            </div>
            <div className={styles.artSide}>
              <SymbolonCardFace card={card} />
            </div>
          </div>
        )}
      </div>
      {revealed && positionName && (
        <div className={styles.meta}>
          <p className={styles.positionName}>{positionName}</p>
        </div>
      )}
    </div>
  );
}
