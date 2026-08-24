import { CardBack } from "./cardArt/CardBack";
import styles from "./ShuffleStage.module.css";

export function ShuffleStage() {
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
      <p className={styles.text}>카드를 섞고 있습니다...</p>
    </div>
  );
}
