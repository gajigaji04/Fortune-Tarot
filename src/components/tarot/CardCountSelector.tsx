import { useTranslation } from "react-i18next";
import { CARD_COUNTS, type CardCount } from "../../types/tarot";
import styles from "./CardCountSelector.module.css";

interface CardCountSelectorProps {
  value: CardCount;
  onChange: (count: CardCount) => void;
}

export function CardCountSelector({ value, onChange }: CardCountSelectorProps) {
  const { t } = useTranslation();
  return (
    <div className={styles.group}>
      <span className={styles.label} id="card-count-label">
        {t("reading.countLabel")}
      </span>
      <div className={styles.options} role="radiogroup" aria-labelledby="card-count-label">
        {CARD_COUNTS.map((count) => (
          <button
            key={count}
            type="button"
            role="radio"
            aria-checked={value === count}
            className={`${styles.option} ${value === count ? styles.optionSelected : ""}`}
            onClick={() => onChange(count)}
          >
            {t("reading.countUnit", { count })}
          </button>
        ))}
      </div>
    </div>
  );
}
