import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <p className={styles.mark}>{t("site.name")}</p>
            <p className={styles.tagline}>{t("footer.tagline")}</p>
          </div>

          <div>
            <p className={styles.colHeading}>{t("footer.exploreHeading")}</p>
            <ul className={styles.linkList}>
              <li>
                <Link to="/tarot">{t("nav.browse")}</Link>
              </li>
              <li>
                <Link to="/symbolon">{t("nav.symbolon")}</Link>
              </li>
              <li>
                <Link to="/cards">{t("nav.cards")}</Link>
              </li>
              <li>
                <Link to="/learn">{t("nav.learn")}</Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.colHeading}>{t("footer.legalHeading")}</p>
            <ul className={styles.linkList}>
              <li>
                <Link to="/privacy">{t("footer.privacy")}</Link>
              </li>
              <li>
                <Link to="/terms">{t("footer.terms")}</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomRow}>
            <span>{t("footer.copyright", { year })}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
