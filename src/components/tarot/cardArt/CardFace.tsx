import type { TarotCard } from "../../../types/tarot";
import { minorRankLabel } from "../../../utils/cardLabels";
import { useLang } from "../../../hooks/useLang";
import { getLocalized } from "../../../utils/i18n";
import { MajorIcon } from "./majorIcons";
import { SuitGlyph } from "./suitIcons";
import { CourtGlyph } from "./CourtGlyph";
import styles from "./CardFace.module.css";

const COURT_RANKS = new Set([11, 12, 13, 14]);

/**
 * A plain, illustration-led card face: one large image-like symbol filling
 * most of the card, with the name in a simple caption band below it -- not a
 * decorated "arcana card" frame.
 */
export function CardFace({ card }: { card: TarotCard }) {
  const lang = useLang();
  const localizedName = getLocalized(card.name, lang);
  const isCourt = card.arcana === "minor" && COURT_RANKS.has(card.number);

  return (
    <div className={styles.faceContainer}>
      <div className={styles.face}>
        <div className={styles.illustration}>
          {card.arcana === "major" && (
            <div className={styles.majorIconWrap}>
              <MajorIcon number={card.number} />
            </div>
          )}
          {card.arcana === "minor" && card.suit && !isCourt && (
            <div className={styles.minorIllustration}>
              <SuitGlyph suit={card.suit} size="1em" />
              <span className={styles.rankBadge}>{minorRankLabel(card.number)}</span>
            </div>
          )}
          {card.arcana === "minor" && card.suit && isCourt && (
            <div className={styles.courtIllustration}>
              <CourtGlyph rank={card.number as 11 | 12 | 13 | 14} />
              <SuitGlyph suit={card.suit} size="1em" />
            </div>
          )}
        </div>
        <div className={styles.caption}>
          <span className={styles.name}>{localizedName}</span>
          {lang !== "en" && <span className={styles.nameKo}>{card.englishName}</span>}
        </div>
      </div>
    </div>
  );
}
