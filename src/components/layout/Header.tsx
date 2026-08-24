import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { to: "/", label: "타로 보기", end: true },
  { to: "/reading/today", label: "오늘의 운세" },
  { to: "/learn", label: "타로 배우기" },
  { to: "/catalog", label: "카드 도감" },
  { to: "/history", label: "최근 기록" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo}>
          THE ARCANA
          <span className={styles.logoKo}>더 아르카나</span>
        </NavLink>

        <nav className={styles.nav} aria-label="주요 메뉴">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
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

      {menuOpen && (
        <nav id="mobile-nav" className={`container ${styles.mobileNav}`} aria-label="모바일 메뉴">
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
        </nav>
      )}
    </header>
  );
}
