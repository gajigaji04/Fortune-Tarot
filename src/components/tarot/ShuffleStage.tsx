import { useTranslation } from "react-i18next";
import { CardBack } from "./cardArt/CardBack";
import styles from "./ShuffleStage.module.css";

export function ShuffleStage() {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper} role="status" aria-live="polite">
      <div className={styles.deck} aria-hidden="true">
        <div className={styles.deckCard}>
          <CardBack />
        </div>
        <div className={styles.deckCard}>
          <CardBack />
        </div>
        <div className={styles.deckCard}>
          <CardBack />
        </div>
      </div>
      <p className={styles.text}>{t("reading.shufflingText")}</p>
    </div>
  );
}
