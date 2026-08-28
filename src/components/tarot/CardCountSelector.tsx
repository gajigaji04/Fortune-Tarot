import { useTranslation } from "react-i18next";
import styles from "./CardCountSelector.module.css";

interface CardCountSelectorProps<TCount extends number> {
  counts: readonly TCount[];
  value: TCount;
  onChange: (count: TCount) => void;
}

/** Card-system-agnostic: which literal counts are offered is entirely up to the caller. */
export function CardCountSelector<TCount extends number>({ counts, value, onChange }: CardCountSelectorProps<TCount>) {
  const { t } = useTranslation();
  return (
    <div className={styles.group}>
      <span className={styles.label} id="card-count-label">
        {t("reading.countLabel")}
      </span>
      <div className={styles.options} role="radiogroup" aria-labelledby="card-count-label">
        {counts.map((count) => (
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
