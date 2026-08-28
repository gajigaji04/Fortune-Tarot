import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TarotCard } from "../components/tarot/TarotCard";
import { CardSystemTabs } from "../components/cards/CardSystemTabs";
import { allCards } from "../data/cards";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import { slugify } from "../utils/slug";
import type { Suit } from "../types/tarot";
import styles from "./CardsListPage.module.css";

type Filter = "all" | "major" | "wands" | "cups" | "swords" | "pentacles";

const SUITS: Suit[] = ["wands", "cups", "swords", "pentacles"];
const SUIT_KEY: Record<Suit, string> = {
  wands: "detail.suitWands",
  cups: "detail.suitCups",
  swords: "detail.suitSwords",
  pentacles: "detail.suitPentacles",
};

export function CardsListPage() {
  const { t } = useTranslation();
  const lang = useLang();
  const [filter, setFilter] = useState<Filter>("all");

  const FILTERS: { id: Filter; label: string }[] = [
    { id: "all", label: t("catalog.filterAll") },
    { id: "major", label: t("catalog.filterMajor") },
    { id: "wands", label: t("catalog.filterWands") },
    { id: "cups", label: t("catalog.filterCups") },
    { id: "swords", label: t("catalog.filterSwords") },
    { id: "pentacles", label: t("catalog.filterPentacles") },
  ];

  const majorCards = allCards.filter((c) => c.arcana === "major").sort((a, b) => a.number - b.number);
  const showMajor = filter === "all" || filter === "major";
  const visibleSuits = filter === "all" || filter === "major" ? SUITS : SUITS.filter((s) => s === filter);

  const renderGrid = (cards: typeof allCards) => (
    <div className={styles.grid}>
      {cards.map((card) => (
        <Link key={card.id} to={`/cards/${slugify(card.englishName)}`} className={styles.tile}>
          <span className="visually-hidden">
            {t("catalog.viewDetailAria", { name: getLocalized(card.name, lang) })}
          </span>
          <TarotCard card={card} orientation="upright" revealed showOrientationLabel={false} />
        </Link>
      ))}
    </div>
  );

  return (
    <div className="container">
      <CardSystemTabs />
      <header className={styles.header}>
        <h1>{t("cardsPage.title")}</h1>
        <p className={styles.desc}>{t("cardsPage.description")}</p>
      </header>

      <div className={styles.filters} role="group" aria-label={t("catalog.filterAll")}>
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`${styles.filterButton} ${filter === f.id ? styles.filterButtonActive : ""}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {showMajor && (
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>{t("cardsPage.majorHeading")}</h2>
          {renderGrid(majorCards)}
        </section>
      )}

      {visibleSuits.length > 0 && (
        <section className={styles.section}>
          {filter === "all" && <h2 className={styles.sectionHeading}>{t("cardsPage.minorHeading")}</h2>}
          {visibleSuits.map((suit) => {
            const suitCards = allCards.filter((c) => c.suit === suit).sort((a, b) => a.number - b.number);
            return (
              <div key={suit}>
                <h3 className={styles.suitHeading}>{t(SUIT_KEY[suit])}</h3>
                {renderGrid(suitCards)}
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
}
