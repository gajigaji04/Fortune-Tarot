import { useTranslation } from "react-i18next";
import { Divider } from "../components/common/Divider";
import styles from "./LearnPage.module.css";

export function LearnPage() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <header className={styles.header}>
        <h1>{t("learn.title")}</h1>
        <p className={styles.desc}>{t("learn.description")}</p>
      </header>

      <div className={styles.content}>
        <section>
          <h2>{t("learn.cardsTitle")}</h2>
          <p>{t("learn.cardsBody")}</p>
        </section>

        <section>
          <h2>{t("learn.orientationTitle")}</h2>
          <p>{t("learn.orientationBody")}</p>
        </section>

        <section>
          <h2>{t("learn.spreadTitle")}</h2>
          <p>{t("learn.spreadBody")}</p>
        </section>

        <Divider />

        <section>
          <h2>{t("learn.usageTitle")}</h2>
          <ol>
            <li>{t("learn.usageStep1")}</li>
            <li>{t("learn.usageStep2")}</li>
            <li>{t("learn.usageStep3")}</li>
            <li>{t("learn.usageStep4")}</li>
            <li>{t("learn.usageStep5")}</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
