import { Button } from "../components/common/Button";
import { useReadingHistory } from "../hooks/useReadingHistory";
import { getCardById } from "../data/cards";
import styles from "./HistoryPage.module.css";

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function HistoryPage() {
  const { history, removeReading, clearHistory } = useReadingHistory();

  return (
    <div className="container">
      <header className={styles.header}>
        <h1>최근 타로 기록</h1>
        <p className={styles.desc}>
          이 브라우저에 저장된 최근 리딩 기록입니다. 다른 기기나 브라우저에서는 보이지 않습니다.
        </p>
      </header>

      {history.length > 0 && (
        <div className={styles.topActions}>
          <Button
            variant="outline"
            onClick={() => {
              if (window.confirm("모든 기록을 삭제할까요?")) clearHistory();
            }}
          >
            전체 기록 삭제
          </Button>
        </div>
      )}

      {history.length === 0 ? (
        <p className={styles.empty}>아직 저장된 기록이 없습니다. 타로를 뽑고 결과를 저장해보세요.</p>
      ) : (
        <div className={styles.list}>
          {history.map((record) => (
            <details key={record.id} className={styles.item}>
              <summary className={styles.itemSummary}>
                <span className={styles.itemTitleGroup}>
                  <span className={styles.itemSpread}>{record.spreadName}</span>
                  <span className={styles.itemDate}>{dateFormatter.format(new Date(record.createdAt))}</span>
                </span>
                <span aria-hidden="true">＋</span>
              </summary>

              {record.question && <p className={styles.itemQuestion}>&ldquo;{record.question}&rdquo;</p>}

              <ul className={styles.cardsList}>
                {record.cards.map((c) => {
                  const card = getCardById(c.cardId);
                  return (
                    <li key={c.positionId}>
                      <strong>{c.positionName}:</strong>
                      <span>
                        {card ? `${card.name}(${card.nameKo})` : c.cardId} ·{" "}
                        {c.orientation === "upright" ? "정방향" : "역방향"}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className={styles.itemActions}>
                <button type="button" className={styles.deleteButton} onClick={() => removeReading(record.id)}>
                  이 기록 삭제
                </button>
              </div>
            </details>
          ))}
        </div>
      )}
    </div>
  );
}
