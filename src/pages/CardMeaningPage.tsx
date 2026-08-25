import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TarotCard } from "../components/tarot/TarotCard";
import { getCardBySlug } from "../data/cards";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import styles from "./CardMeaningPage.module.css";

export function CardMeaningPage() {
  const { slug = "" } = useParams();
  const card = getCardBySlug(slug);
  const { t } = useTranslation();
  const lang = useLang();

  if (!card) {
    return <Navigate to="/cards" replace />;
  }

  const suitKey: Record<NonNullable<typeof card.suit>, string> = {
    wands: "detail.suitWands",
    cups: "detail.suitCups",
    swords: "detail.suitSwords",
    pentacles: "detail.suitPentacles",
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Link to="/cards" className={styles.back}>
          ← {t("detail.back")}
        </Link>

        <div className={styles.layout}>
          <div className={styles.cardColumn}>
            <TarotCard card={card} orientation="upright" revealed showOrientationLabel={false} />
          </div>

          <div className={styles.info}>
            <h1>{getLocalized(card.name, lang)}</h1>
            <p className={styles.subName}>
              {card.englishName} · {t(card.arcana === "major" ? "detail.arcanaMajor" : "detail.arcanaMinor")}
              {card.suit ? ` · ${t(suitKey[card.suit])}` : ""}
            </p>

            <div className={styles.meaningBlock}>
              <h2 className={styles.meaningHeading}>{t("cardMeaning.symbolHeading")}</h2>
              <p className={styles.summary}>{getLocalized(card.summary, lang)}</p>
            </div>

            <div className={styles.orientationBlock}>
              <h2 className={styles.orientationTitle}>{t("detail.uprightTitle")}</h2>
              <ul className={styles.keywords}>
                {getLocalized(card.keywords.upright, lang).map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
              <p className={styles.orientationBody}>{getLocalized(card.interpretation.upright, lang)}</p>
            </div>

            <div className={styles.orientationBlock}>
              <h2 className={styles.orientationTitle}>{t("detail.reversedTitle")}</h2>
              <ul className={styles.keywords}>
                {getLocalized(card.keywords.reversed, lang).map((k) => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
              <p className={styles.orientationBody}>{getLocalized(card.interpretation.reversed, lang)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
