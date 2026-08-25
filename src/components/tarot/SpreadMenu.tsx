import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./SpreadMenu.module.css";

export interface SpreadMenuEntry {
  to: string;
  title: string;
  description: string;
}

export function SpreadMenu({ items }: { items: SpreadMenuEntry[] }) {
  const { t } = useTranslation();
  return (
    <nav className={styles.list} aria-label={t("home.chooseTitle")}>
      {items.map((item, index) => (
        <Link key={item.to} to={item.to} className={styles.item}>
          <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.desc}>{item.description}</span>
        </Link>
      ))}
    </nav>
  );
}
