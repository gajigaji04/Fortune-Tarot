import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ButtonLink } from "../components/common/Button";
import { CardBack } from "../components/tarot/cardArt/CardBack";
import { topics } from "../data/topics";
import { symbolonReadingTypes } from "../data/symbolon/readingTypes";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import styles from "./HomePage.module.css";

export function HomePage() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{t("home.eyebrow")}</p>

        <div className={styles.fan} aria-hidden="true">
          <div className={styles.fanCard}>
            <CardBack />
          </div>
          <div className={styles.fanCard}>
            <CardBack />
          </div>
          <div className={styles.fanCard}>
            <CardBack />
          </div>
          <div className={styles.fanCard}>
            <CardBack />
          </div>
        </div>

        <h1 className={styles.title}>{t("home.title")}</h1>
        <p className={styles.subtitle}>{t("home.subtitle")}</p>

        <div className={styles.heroActions}>
          <ButtonLink to="/tarot" variant="primary">
            {t("home.ctaToday")}
          </ButtonLink>
          <ButtonLink to="/symbolon" variant="outline">
            {t("home.ctaSymbolon")}
          </ButtonLink>
        </div>
      </section>

      <section className="container">
        <h2 className={styles.topicsTitle}>{t("home.topicsTitle")}</h2>
        <ul className={styles.topicsList}>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link to={`/tarot?topic=${topic.id}`} className={styles.topicCard}>
                <span className={styles.topicName}>{getLocalized(topic.name, lang)}</span>
                <span className={styles.topicDescription}>{getLocalized(topic.description, lang)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container">
        <h2 className={styles.topicsTitle}>{t("home.symbolonTitle")}</h2>
        <ul className={styles.topicsList}>
          {symbolonReadingTypes.map((readingType) => (
            <li key={readingType.id}>
              <Link to={`/symbolon?reading=${readingType.id}`} className={styles.topicCard}>
                <span className={styles.topicName}>{getLocalized(readingType.name, lang)}</span>
                <span className={styles.topicDescription}>{getLocalized(readingType.description, lang)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
