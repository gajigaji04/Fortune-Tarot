import { useTranslation } from "react-i18next";
import { symbolonReadingTypes } from "../../data/symbolon/readingTypes";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import styles from "./SymbolonReadingTypeSelector.module.css";

interface SymbolonReadingTypeSelectorProps {
  value: string;
  onChange: (readingTypeId: string) => void;
}

export function SymbolonReadingTypeSelector({ value, onChange }: SymbolonReadingTypeSelectorProps) {
  const { t } = useTranslation();
  const lang = useLang();
  const selected = symbolonReadingTypes.find((r) => r.id === value) ?? symbolonReadingTypes[0];

  return (
    <div className={styles.group}>
      <span className={styles.label} id="symbolon-reading-type-label">
        {t("symbolon.chooseTitle")}
      </span>
      <div className={styles.options} role="radiogroup" aria-labelledby="symbolon-reading-type-label">
        {symbolonReadingTypes.map((readingType) => (
          <button
            key={readingType.id}
            type="button"
            role="radio"
            aria-checked={value === readingType.id}
            className={`${styles.option} ${value === readingType.id ? styles.optionSelected : ""}`}
            onClick={() => onChange(readingType.id)}
          >
            {getLocalized(readingType.name, lang)}
          </button>
        ))}
      </div>
      <p className={styles.description}>{getLocalized(selected.description, lang)}</p>
    </div>
  );
}
