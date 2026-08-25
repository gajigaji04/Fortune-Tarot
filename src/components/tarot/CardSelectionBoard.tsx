import { useTranslation } from "react-i18next";
import type { DrawnCard, SpreadPosition, TarotCard } from "../../types/tarot";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import { CardBack } from "./cardArt/CardBack";
import styles from "./CardSelectionBoard.module.css";

interface CardSelectionBoardProps {
  pool: TarotCard[];
  positions: SpreadPosition[];
  selections: DrawnCard[];
  onPick: (card: TarotCard) => void;
}

export function CardSelectionBoard({ pool, positions, selections, onPick }: CardSelectionBoardProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const total = positions.length;
  const picked = selections.length;
  const complete = picked >= total;

  return (
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <p className={styles.introMain}>{t("reading.selectIntro")}</p>
        <p className={styles.introSub}>{t("reading.selectInstruction", { count: total })}</p>
      </div>

      <div className={styles.tray} aria-label={t("reading.selectedTrayLabel")}>
        {positions.map((position, i) => {
          const drawn = selections[i];
          const label = getLocalized(position.name, lang);
          return (
            <div key={position.id} className={styles.traySlot}>
              <div
                className={`${styles.trayCardBox} ${drawn ? styles.trayFilled : styles.trayEmpty}`}
                role="img"
                aria-label={drawn ? label : t("reading.emptySlotAria")}
              >
                {drawn && <CardBack />}
              </div>
              <span className={styles.trayLabel}>{label}</span>
            </div>
          );
        })}
      </div>

      <p className={styles.progress} aria-live="polite">
        {t("reading.selectProgress", { picked, total })}
      </p>

      {!complete && (
        <div className={styles.pool} aria-label={t("reading.poolLabel")}>
          {pool.map((card) => (
            <button
              key={card.id}
              type="button"
              className={styles.poolCard}
              onClick={() => onPick(card)}
              aria-label={t("reading.pickCardAria")}
            >
              <CardBack />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
