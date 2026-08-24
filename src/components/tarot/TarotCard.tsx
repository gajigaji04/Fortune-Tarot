import { useEffect, useRef, useState } from "react";
import type { Orientation, TarotCard as TarotCardType } from "../../types/tarot";
import { CardBack } from "./cardArt/CardBack";
import { CardFace } from "./cardArt/CardFace";
import styles from "./TarotCard.module.css";

interface TarotCardProps {
  card: TarotCardType;
  orientation: Orientation;
  revealed: boolean;
  positionName?: string;
  onReveal?: () => void;
  showOrientationLabel?: boolean;
}

export function TarotCard({
  card,
  orientation,
  revealed,
  positionName,
  onReveal,
  showOrientationLabel = true,
}: TarotCardProps) {
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

  const orientationText = orientation === "upright" ? "정방향" : "역방향";
  const isInteractive = !revealed && Boolean(onReveal);

  const flipperClassName = [
    styles.flipper,
    revealed ? styles.revealed : "",
    justRevealed ? styles.justRevealed : "",
  ]
    .filter(Boolean)
    .join(" ");

  const artClassName = [styles.artSide, orientation === "reversed" ? styles.reversed : ""]
    .filter(Boolean)
    .join(" ");

  const ariaLabel = revealed
    ? `${card.name}(${card.nameKo}), ${orientationText}${positionName ? `, ${positionName} 자리` : ""}`
    : `${positionName ? `${positionName} 자리의 ` : ""}카드 뒤집기`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.scene}>
        {isInteractive ? (
          <button type="button" className={flipperClassName} onClick={onReveal} aria-label={ariaLabel}>
            <div className={styles.designSide}>
              <CardBack />
            </div>
            <div className={artClassName}>
              <CardFace card={card} />
            </div>
          </button>
        ) : (
          <div className={flipperClassName} role="img" aria-label={ariaLabel}>
            <div className={styles.designSide}>
              <CardBack />
            </div>
            <div className={artClassName}>
              <CardFace card={card} />
            </div>
          </div>
        )}
      </div>
      {revealed && (
        <div className={styles.meta}>
          {positionName && <p className={styles.positionName}>{positionName}</p>}
          {showOrientationLabel && (
            <p className={styles.orientationLabel} data-reversed={orientation === "reversed"}>
              {orientationText}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
