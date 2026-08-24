import type { TarotCard } from "../../../types/tarot";
import { toRomanNumeral, minorRankLabel } from "../../../utils/cardLabels";
import { pipLayouts } from "./pipLayouts";
import { MajorIcon } from "./majorIcons";
import { SuitGlyph } from "./suitIcons";
import { CourtGlyph } from "./CourtGlyph";
import styles from "./CardFace.module.css";

const COURT_RANKS = new Set([11, 12, 13, 14]);

export function CardFace({ card }: { card: TarotCard }) {
  const rankLabel = card.arcana === "major" ? toRomanNumeral(card.number) : minorRankLabel(card.number);

  return (
    <div className={styles.faceContainer}>
      <div className={styles.face}>
        <span className={styles.rank}>{rankLabel}</span>
        <div className={styles.medallion}>
          {card.arcana === "major" && (
            <div className={styles.majorIconWrap}>
              <MajorIcon number={card.number} />
            </div>
          )}
          {card.arcana === "minor" && card.suit && !COURT_RANKS.has(card.number) && (
            <MinorPips suit={card.suit} count={card.number} />
          )}
          {card.arcana === "minor" && card.suit && COURT_RANKS.has(card.number) && (
            <div className={styles.courtCenter}>
              <CourtGlyph rank={card.number as 11 | 12 | 13 | 14} />
              <SuitGlyph suit={card.suit} size="2.4em" />
            </div>
          )}
        </div>
        <span className={styles.name}>{card.name}</span>
        <span className={styles.nameKo}>{card.nameKo}</span>
      </div>
    </div>
  );
}

function MinorPips({ suit, count }: { suit: NonNullable<TarotCard["suit"]>; count: number }) {
  const layout = pipLayouts[count] ?? [];
  return (
    <>
      {layout.map((pos, i) => (
        <span
          key={i}
          className={styles.pip}
          style={{ left: `${pos.x * 100}%`, top: `${pos.y * 100}%` }}
        >
          <SuitGlyph suit={suit} size="1em" />
        </span>
      ))}
    </>
  );
}
