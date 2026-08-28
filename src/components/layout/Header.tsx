import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import styles from "./Header.module.css";

export function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { to: "/tarot", label: t("nav.browse"), end: false },
    { to: "/symbolon", label: t("nav.symbolon"), end: false },
    { to: "/cards", label: t("nav.cards"), end: false },
    { to: "/learn", label: t("nav.learn"), end: false },
  ];

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo}>
          {t("site.name")}
          <span className={styles.logoKo}>{t("site.nameLocalized")}</span>
        </NavLink>

        <nav className={styles.nav} aria-label={t("nav.browse")}>
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <LanguageSwitcher className={styles.desktopLangSwitcher} />
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
              {menuOpen ? (
                <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path
                  d="M3 6 H17 M3 10 H17 M3 14 H17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" className={`container ${styles.mobileNav}`} aria-label={t("nav.browse")}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClassName}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <LanguageSwitcher className={styles.mobileLangSwitcher} />
        </nav>
      )}
    </header>
  );
}
