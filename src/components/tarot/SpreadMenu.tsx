import { Link } from "react-router-dom";
import styles from "./SpreadMenu.module.css";

export interface SpreadMenuEntry {
  to: string;
  title: string;
  description: string;
}

export function SpreadMenu({ items }: { items: SpreadMenuEntry[] }) {
  return (
    <nav className={styles.list} aria-label="점술 방식 선택">
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
