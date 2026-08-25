import styles from "./StaticInfoPage.module.css";

export function StaticInfoPage({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="container">
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
      <div className={styles.content}>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
