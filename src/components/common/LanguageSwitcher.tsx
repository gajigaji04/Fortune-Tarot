import { useTranslation } from "react-i18next";
import type { Lang } from "../../types/tarot";
import { useLang } from "../../hooks/useLang";
import styles from "./LanguageSwitcher.module.css";

const LANGUAGE_LABELS: { code: Lang; label: string }[] = [
  { code: "ko", label: "한국어" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n, t } = useTranslation();
  const current = useLang();

  return (
    <div className={`${styles.switcher} ${className ?? ""}`} role="group" aria-label={t("common.language")}>
      {LANGUAGE_LABELS.map((item, i) => (
        <span key={item.code} style={{ display: "contents" }}>
          {i > 0 && (
            <span className={styles.sep} aria-hidden="true">
              |
            </span>
          )}
          <button
            type="button"
            className={`${styles.button} ${current === item.code ? styles.buttonActive : ""}`}
            aria-pressed={current === item.code}
            onClick={() => void i18n.changeLanguage(item.code)}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}
