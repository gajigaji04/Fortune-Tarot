import { Link, Navigate, useParams } from "react-router-dom";
import { TarotCard } from "../components/tarot/TarotCard";
import { getCardById } from "../data/cards";
import styles from "./CardDetailPage.module.css";

export function CardDetailPage() {
  const { cardId = "" } = useParams();
  const card = getCardById(cardId);

  if (!card) {
    return <Navigate to="/catalog" replace />;
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Link to="/catalog" className={styles.back}>
          ← 도감으로 돌아가기
        </Link>

        <div className={styles.layout}>
          <div className={styles.cardColumn}>
            <TarotCard card={card} orientation="upright" revealed showOrientationLabel={false} />
          </div>

          <div className={styles.info}>
            <h1>{card.name}</h1>
            <p className={styles.subName}>
              {card.nameKo} · {card.arcana === "major" ? "메이저 아르카나" : "마이너 아르카나"}
              {card.suit ? ` · ${suitLabel(card.suit)}` : ""}
            </p>
            <p className={styles.summary}>{card.summary}</p>

            <div className={styles.orientationBlock}>
              <h2 className={styles.orientationTitle}>정방향</h2>
              <ul className={styles.keywords}>
                {card.keywords.upright.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </div>

            <div className={styles.orientationBlock}>
              <h2 className={styles.orientationTitle}>역방향</h2>
              <ul className={styles.keywords}>
                {card.keywords.reversed.map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function suitLabel(suit: string): string {
  switch (suit) {
    case "wands":
      return "완드";
    case "cups":
      return "컵";
    case "swords":
      return "소드";
    case "pentacles":
      return "펜타클";
    default:
      return suit;
  }
}
