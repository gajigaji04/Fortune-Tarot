import styles from "./Divider.module.css";

export function Divider({ ornamented = true }: { ornamented?: boolean }) {
  return (
    <div className={styles.divider} role="presentation">
      {ornamented && (
        <svg width="52" height="14" viewBox="0 0 52 14" aria-hidden="true" focusable="false">
          <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1" />
          <path d="M26 1 L30 7 L26 13 L22 7 Z" fill="none" stroke="currentColor" strokeWidth="1" />
          <line x1="32" y1="7" x2="52" y2="7" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}
    </div>
  );
}
