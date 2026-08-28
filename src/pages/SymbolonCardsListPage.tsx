import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SymbolonCardView } from "../components/symbolon/SymbolonCardView";
import { CardSystemTabs } from "../components/cards/CardSystemTabs";
import { symbolonCards } from "../data/symbolon";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import styles from "./SymbolonCardsListPage.module.css";

const sortedCards = [...symbolonCards].sort((a, b) => a.number - b.number);

/** Flat grid of the full deck -- no invented category grouping, just the real deck's sort order. */
export function SymbolonCardsListPage() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <div className="container">
      <CardSystemTabs />
      <header className={styles.header}>
        <h1>{t("symbolon.cardsPageTitle")}</h1>
        <p className={styles.desc}>{t("symbolon.cardsPageDescription")}</p>
        <p className={styles.count}>{t("symbolon.totalCardsLabel", { count: symbolonCards.length })}</p>
      </header>

      <div className={styles.grid}>
        {sortedCards.map((card) => (
          <Link key={card.id} to={`/symbolon/cards/${card.id}`} className={styles.tile}>
            <span className="visually-hidden">
              {t("catalog.viewDetailAria", { name: getLocalized(card.name, lang) })}
            </span>
            <SymbolonCardView card={card} revealed />
          </Link>
        ))}
      </div>
    </div>
  );
}
