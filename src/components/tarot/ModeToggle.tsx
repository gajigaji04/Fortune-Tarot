import type { ReadingMode } from "../../types/tarot";
import styles from "./ModeToggle.module.css";

interface ModeToggleProps {
  value: ReadingMode;
  onChange: (mode: ReadingMode) => void;
}

const MODES: { id: ReadingMode; title: string; desc: string }[] = [
  { id: "draw-only", title: "뽑기만 하기", desc: "카드와 방향만 보여드립니다. 직접 해석해보세요." },
  { id: "interpret", title: "해석 보기", desc: "카드별 해석과 종합 흐름까지 함께 보여드립니다." },
];

export function ModeToggle({ value, onChange }: ModeToggleProps) {
  return (
    <div className={styles.group}>
      <span className={styles.label} id="mode-toggle-label">
        보기 방식
      </span>
      <div className={styles.options} role="radiogroup" aria-labelledby="mode-toggle-label">
        {MODES.map((mode) => (
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
