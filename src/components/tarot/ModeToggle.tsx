import { useTranslation } from "react-i18next";
import type { ReadingMode } from "../../types/tarot";
import styles from "./ModeToggle.module.css";

interface ModeToggleProps {
  value: ReadingMode;
  onChange: (mode: ReadingMode) => void;
}

export function ModeToggle({ value, onChange }: ModeToggleProps) {
  const { t } = useTranslation();
  const modes: { id: ReadingMode; title: string; desc: string }[] = [
    { id: "draw-only", title: t("reading.modeDrawOnlyTitle"), desc: t("reading.modeDrawOnlyDesc") },
    { id: "interpret", title: t("reading.modeInterpretTitle"), desc: t("reading.modeInterpretDesc") },
  ];

  return (
    <div className={styles.group}>
      <span className={styles.label} id="mode-toggle-label">
        {t("reading.modeLabel")}
      </span>
      <div className={styles.options} role="radiogroup" aria-labelledby="mode-toggle-label">
        {modes.map((mode) => (
          <button
            key={mode.id}
            type="button"
            role="radio"
            aria-checked={value === mode.id}
            className={`${styles.option} ${value === mode.id ? styles.optionSelected : ""}`}
            onClick={() => onChange(mode.id)}
          >
            <span className={styles.optionTitle}>{mode.title}</span>
            <span className={styles.optionDesc}>{mode.desc}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
