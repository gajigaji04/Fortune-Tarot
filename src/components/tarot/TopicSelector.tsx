import { useTranslation } from "react-i18next";
import { topics } from "../../data/topics";
import { useLang } from "../../hooks/useLang";
import { getLocalized } from "../../utils/i18n";
import styles from "./TopicSelector.module.css";

interface TopicSelectorProps {
  value: string;
  onChange: (topicId: string) => void;
}

export function TopicSelector({ value, onChange }: TopicSelectorProps) {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <div className={styles.group}>
      <span className={styles.label} id="topic-selector-label">
        {t("home.chooseTitle")}
      </span>
      <div className={styles.options} role="radiogroup" aria-labelledby="topic-selector-label">
        {topics.map((topic) => (
          <button
            key={topic.id}
            type="button"
            role="radio"
            aria-checked={value === topic.id}
            className={`${styles.option} ${value === topic.id ? styles.optionSelected : ""}`}
            onClick={() => onChange(topic.id)}
          >
            {getLocalized(topic.name, lang)}
          </button>
        ))}
      </div>
    </div>
  );
}
