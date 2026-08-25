import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonLink } from "../components/common/Button";
import { useVault } from "../hooks/useVault";
import { getTopicById } from "../data/topics";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import type { Lang } from "../types/tarot";
import styles from "./VaultPage.module.css";

const DATE_LOCALES: Record<Lang, string> = { ko: "ko-KR", ja: "ja-JP", zh: "zh-CN", en: "en-US" };

export function VaultPage() {
  const { t } = useTranslation();
  const lang = useLang();
  const { history, removeReading, clearHistory } = useVault();
  const [confirmingId, setConfirmingId] = useState<string | null>(null);
  const dateFormatter = new Intl.DateTimeFormat(DATE_LOCALES[lang], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container">
      <header className={styles.header}>
        <h1>{t("vault.title")}</h1>
        <p className={styles.desc}>{t("vault.description")}</p>
      </header>

      {history.length > 0 && (
        <div className={styles.topActions}>
          <Button
            variant="outline"
            onClick={() => {
              if (window.confirm(t("common.deleteAllConfirm"))) clearHistory();
            }}
          >
            {t("common.deleteAll")}
          </Button>
        </div>
      )}

      {history.length === 0 ? (
        <p className={styles.empty}>{t("vault.empty")}</p>
      ) : (
        <div className={styles.list}>
          {history.map((record) => {
            const topic = getTopicById(record.topicId);
            return (
              <article key={record.id} className={styles.item}>
                <span className={styles.itemDate}>{dateFormatter.format(new Date(record.createdAt))}</span>
                <h2 className={styles.itemTopic}>{topic ? getLocalized(topic.name, lang) : record.topicId}</h2>
                <span className={styles.itemCount}>{t("reading.countUnit", { count: record.count })}</span>
                {record.question && <p className={styles.itemQuestion}>&ldquo;{record.question}&rdquo;</p>}

                {confirmingId === record.id ? (
                  <div className={styles.confirmRow}>
                    <span className={styles.confirmText}>{t("vault.deleteConfirmQuestion")}</span>
                    <div className={styles.confirmActions}>
                      <Button variant="outline" onClick={() => setConfirmingId(null)}>
                        {t("vault.cancel")}
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          removeReading(record.id);
                          setConfirmingId(null);
                        }}
                      >
                        {t("common.delete")}
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className={styles.itemFooter}>
                    <ButtonLink variant="primary" to={`/vault/${record.id}`}>
                      {t("vault.viewResult")}
                    </ButtonLink>
                    <button type="button" className={styles.deleteButton} onClick={() => setConfirmingId(record.id)}>
                      {t("common.delete")}
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
