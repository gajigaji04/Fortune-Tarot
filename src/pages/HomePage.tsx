import { useTranslation } from "react-i18next";
import { ButtonLink } from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { CardBack } from "../components/tarot/cardArt/CardBack";
import { SpreadMenu, type SpreadMenuEntry } from "../components/tarot/SpreadMenu";
import { topics } from "../data/topics";
import { useLang } from "../hooks/useLang";
import { getLocalized } from "../utils/i18n";
import styles from "./HomePage.module.css";

const FIELD_TOPIC_ORDER = [
  "career",
  "job-seeking",
  "study",
  "money",
  "love",
  "relationship",
  "health",
  "business",
];

export function HomePage() {
  const { t } = useTranslation();
  const lang = useLang();

  const yearly = topics.find((topic) => topic.id === "yearly")!;

  const menuEntries: SpreadMenuEntry[] = [
    { to: "/reading/general?count=1", title: t("nav.today"), description: getLocalized(topics[0].description, lang) },
    { to: "/reading/general?count=3", title: t("home.threeCard"), description: t("home.threeCardDesc") },
    { to: `/reading/${yearly.id}`, title: getLocalized(yearly.name, lang), description: getLocalized(yearly.description, lang) },
    ...FIELD_TOPIC_ORDER.map((id) => {
      const topic = topics.find((t2) => t2.id === id)!;
      return { to: `/reading/${topic.id}`, title: getLocalized(topic.name, lang), description: getLocalized(topic.description, lang) };
    }),
  ];

  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>{t("home.eyebrow")}</p>
        <h1 className={styles.title}>{t("home.title")}</h1>
        <p className={styles.subtitle}>{t("home.subtitle")}</p>

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
        </div>

        <div className={styles.heroActions}>
          <ButtonLink to="/reading/general?count=1" variant="primary">
            {t("home.ctaToday")}
          </ButtonLink>
          <ButtonLink to="/cards" variant="outline">
            {t("home.ctaCatalog")}
          </ButtonLink>
        </div>
      </section>

      <Divider />

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionHeading}>{t("home.chooseTitle")}</h2>
        <p className={styles.sectionSubheading}>{t("home.chooseSubtitle")}</p>
        <SpreadMenu items={menuEntries} />
      </section>

      <Divider />

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionHeading}>{t("home.aboutTitle")}</h2>
        <div className={styles.introGrid}>
          <article className={styles.introCard}>
            <h3>{t("home.about1Title")}</h3>
            <p>{t("home.about1Desc")}</p>
          </article>
          <article className={styles.introCard}>
            <h3>{t("home.about2Title")}</h3>
            <p>{t("home.about2Desc")}</p>
          </article>
          <article className={styles.introCard}>
            <h3>{t("home.about3Title")}</h3>
            <p>{t("home.about3Desc")}</p>
          </article>
        </div>
      </section>
    </>
  );
}
