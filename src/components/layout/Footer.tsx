import { Divider } from "../common/Divider";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Divider />
        <p className={styles.mark}>THE ARCANA</p>
        <p className={styles.note}>
          이 사이트의 타로 리딩은 오락 및 자기 성찰을 위한 것으로, 전문적인 법률·의료·재정 상담을 대신하지
          않습니다. 모든 기록은 이 브라우저에만 저장되며 서버로 전송되지 않습니다.
        </p>
      </div>
    </footer>
  );
}
