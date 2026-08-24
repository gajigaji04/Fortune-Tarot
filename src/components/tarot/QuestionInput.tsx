import styles from "./QuestionInput.module.css";

interface QuestionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function QuestionInput({ value, onChange }: QuestionInputProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor="reading-question">
        질문<span className={styles.optional}>(선택)</span>
      </label>
      <textarea
        id="reading-question"
        className={styles.textarea}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="예: 이번 달 안에 취업할 수 있을까요? / 이 사람과의 관계는 어떻게 될까요?"
        maxLength={200}
      />
    </div>
  );
}
