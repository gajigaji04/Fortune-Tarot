import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./CardSystemTabs.module.css";

/**
 * Lets the "card meanings" section switch between the two independent card
 * systems (Tarot's /cards, Symbolon's /symbolon/cards) without merging their
 * data or routes -- see the system-selection requirement in the Symbolon
 * spec ("카드 의미" page must offer both Tarot and Symbolon).
 */
export function CardSystemTabs() {
  const { t } = useTranslation();
  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.tab} ${styles.tabActive}` : styles.tab;

  return (
    <nav className={styles.tabs} aria-label={t("cardsPage.title")}>
      <NavLink to="/cards" className={linkClassName}>
        {t("nav.tarot")}
      </NavLink>
      <NavLink to="/symbolon/cards" className={linkClassName}>
        {t("nav.symbolon")}
      </NavLink>
    </nav>
  );
}
