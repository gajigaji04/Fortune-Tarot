import { useState } from "react";
import { Link } from "react-router-dom";
import { TarotCard } from "../components/tarot/TarotCard";
import { allCards } from "../data/cards";
import styles from "./CardCatalogPage.module.css";

type Filter = "all" | "major" | "wands" | "cups" | "swords" | "pentacles";

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "major", label: "메이저 아르카나" },
  { id: "wands", label: "완드" },
  { id: "cups", label: "컵" },
  { id: "swords", label: "소드" },
  { id: "pentacles", label: "펜타클" },
];

export function CardCatalogPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = allCards.filter((card) => {
    if (filter === "all") return true;
    if (filter === "major") return card.arcana === "major";
    return card.suit === filter;
  });

  return (
    <div className="container">
      <header className={styles.header}>
        <h1>카드 도감</h1>
        <p className={styles.desc}>메이저 22장과 마이너 56장, 78장의 카드를 모두 살펴보세요.</p>
      </header>

      <div className={styles.filters} role="group" aria-label="카드 종류 필터">
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

      <div className={styles.grid}>
        {filtered.map((card) => (
          <Link key={card.id} to={`/catalog/${card.id}`} className={styles.tile}>
            <span className="visually-hidden">{card.nameKo} 카드 자세히 보기</span>
            <TarotCard card={card} orientation="upright" revealed showOrientationLabel={false} />
          </Link>
        ))}
      </div>
    </div>
  );
}
