import type { TarotCard } from "../../../types/tarot";
import { toRomanNumeral, minorRankLabel } from "../../../utils/cardLabels";
import { useLang } from "../../../hooks/useLang";
import { getLocalized } from "../../../utils/i18n";
import { pipLayouts } from "./pipLayouts";
import { MajorIcon } from "./majorIcons";
import { SuitGlyph } from "./suitIcons";
import { CourtGlyph } from "./CourtGlyph";
import styles from "./CardFace.module.css";

const COURT_RANKS = new Set([11, 12, 13, 14]);

function CornerMark({ x, y, flipX, flipY }: { x: number; y: number; flipX: number; flipY: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${flipX} ${flipY})`} fill="none" stroke="currentColor" strokeWidth={0.8}>
      <path d="M0 0 Q11 0 11 11" />
      <path d="M0 0 Q5.5 0 5.5 5.5" />
      <circle cx={11} cy={11} r={1.3} fill="currentColor" stroke="none" />
    </g>
  );
}

/** Corner flourishes echoing CardBack's, so the front/back read as one printed deck. */
function CardFaceOrnament() {
  return (
    <svg
      className={styles.ornament}
      viewBox="0 0 100 160"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <CornerMark x={10} y={10} flipX={1} flipY={1} />
      <CornerMark x={90} y={10} flipX={-1} flipY={1} />
      <CornerMark x={10} y={150} flipX={1} flipY={-1} />
      <CornerMark x={90} y={150} flipX={-1} flipY={-1} />
    </svg>
  );
}

export function CardFace({ card }: { card: TarotCard }) {
  const lang = useLang();
  const rankLabel = card.arcana === "major" ? toRomanNumeral(card.number) : minorRankLabel(card.number);
  const localizedName = getLocalized(card.name, lang);

  return (
    <div className={styles.faceContainer}>
      <div className={styles.face}>
        <div className={styles.grain} aria-hidden="true" />
        <CardFaceOrnament />
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
        <span className={styles.name}>{localizedName}</span>
        {lang !== "en" && <span className={styles.nameKo}>{card.englishName}</span>}
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
