import { useTranslation } from "react-i18next";
import styles from "./QuestionInput.module.css";

interface QuestionInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function QuestionInput({ value, onChange, placeholder }: QuestionInputProps) {
  const { t } = useTranslation();
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor="reading-question">
        {t("reading.questionLabel")}
        <span className={styles.optional}>{t("reading.questionOptional")}</span>
      </label>
      <textarea
        id="reading-question"
        className={styles.textarea}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder ?? t("reading.questionPlaceholder")}
        maxLength={200}
      />
    </div>
  );
}
