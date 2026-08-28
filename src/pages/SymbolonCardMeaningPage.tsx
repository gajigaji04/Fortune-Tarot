import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SymbolonCardView } from "../components/symbolon/SymbolonCardView";
import { getSymbolonCardById } from "../data/symbolon";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import styles from "./SymbolonCardMeaningPage.module.css";

export function SymbolonCardMeaningPage() {
  const { id = "" } = useParams();
  const card = getSymbolonCardById(id);
  const { t } = useTranslation();
  const lang = useLang();

  if (!card) {
    return <Navigate to="/symbolon/cards" replace />;
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Link to="/symbolon/cards" className={styles.back}>
          ← {t("detail.back")}
        </Link>

        <div className={styles.layout}>
          <div className={styles.cardColumn}>
            <SymbolonCardView card={card} revealed />
          </div>

          <div className={styles.info}>
            <h1>{getLocalized(card.name, lang)}</h1>
            <p className={styles.subName}>
              {card.englishName} · No. {String(card.number).padStart(2, "0")}
            </p>

            <ul className={styles.keywords}>
              {getLocalized(card.keywords, lang).map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>

            <div className={styles.block}>
              <h2 className={styles.blockHeading}>{t("symbolon.symbolHeading")}</h2>
              <p className={styles.blockBody}>{getLocalized(card.symbolism, lang)}</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.blockHeading}>{t("symbolon.meaningHeading")}</h2>
              <p className={styles.blockBody}>{getLocalized(card.meaning, lang)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
