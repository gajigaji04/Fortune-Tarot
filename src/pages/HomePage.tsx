import { ButtonLink } from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { CardBack } from "../components/tarot/cardArt/CardBack";
import { SpreadMenu, type SpreadMenuEntry } from "../components/tarot/SpreadMenu";
import { spreads } from "../data/spreads";
import styles from "./HomePage.module.css";

const HOME_MENU_ORDER = [
  "today",
  "three-general",
  "yearly",
  "career",
  "job-seeking",
  "study",
  "money",
  "love",
  "relationship",
  "health",
  "business",
];

const menuEntries: SpreadMenuEntry[] = HOME_MENU_ORDER.map((id) => {
  const spread = spreads.find((s) => s.id === id);
  if (!spread) throw new Error(`Unknown spread id in home menu: ${id}`);
  return { to: `/reading/${spread.id}`, title: spread.name, description: spread.description };
});

export function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>An Old European Tarot Salon</p>
        <h1 className={styles.title}>카드를 펼쳐보세요</h1>
        <p className={styles.subtitle}>
          당신의 운명을 비추는 78장의 카드. 낡은 책상 위에 촛불을 밝히고, 오늘 당신에게 필요한 이야기를
          들어보세요.
        </p>

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
          <ButtonLink to="/reading/today" variant="primary">
            오늘의 운세 보기
          </ButtonLink>
          <ButtonLink to="/catalog" variant="outline">
            카드 도감 둘러보기
          </ButtonLink>
        </div>
      </section>

      <Divider />

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionHeading}>무엇을 알고 싶으신가요?</h2>
        <p className={styles.sectionSubheading}>원하는 점술 방식을 고르면, 질문을 적고 카드를 뽑을 수 있습니다.</p>
        <SpreadMenu items={menuEntries} />
      </section>

      <Divider />

      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionHeading}>이 살롱에서 하는 일</h2>
        <div className={styles.introGrid}>
          <article className={styles.introCard}>
            <h3>78장의 정통 덱</h3>
            <p>메이저 22장과 마이너 56장 전체가 정방향·역방향 해석과 함께 준비되어 있습니다.</p>
          </article>
          <article className={styles.introCard}>
            <h3>뽑기만 하기 / 해석 보기</h3>
            <p>직접 카드를 해석하고 싶다면 뽑기만, 도움이 필요하다면 해석 보기를 선택하세요.</p>
          </article>
          <article className={styles.introCard}>
            <h3>기록은 이 브라우저에만</h3>
            <p>최근 리딩은 로그인 없이 이 기기에만 저장되며, 언제든 다시 꺼내볼 수 있습니다.</p>
          </article>
        </div>
      </section>
    </>
  );
}
