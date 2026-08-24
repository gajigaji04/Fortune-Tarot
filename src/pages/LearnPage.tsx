import { Divider } from "../components/common/Divider";
import styles from "./LearnPage.module.css";

export function LearnPage() {
  return (
    <div className="container">
      <header className={styles.header}>
        <h1>타로 배우기</h1>
        <p className={styles.desc}>타로를 처음 만나는 분들을 위한 짧은 안내입니다.</p>
      </header>

      <div className={styles.content}>
        <section>
          <h2>타로 카드란?</h2>
          <p>
            타로는 78장의 카드로 이루어진 상징 체계입니다. 22장의 메이저 아르카나는 삶의 큰 흐름과
            전환점을, 56장의 마이너 아르카나(완드·컵·소드·펜타클)는 일상 속 구체적인 상황과 감정을
            보여줍니다.
          </p>
        </section>

        <section>
          <h2>정방향과 역방향</h2>
          <p>
            같은 카드라도 정방향으로 나오면 그 카드의 의미가 비교적 순조롭고 뚜렷하게 드러나며,
            역방향으로 나오면 그 의미가 안으로 억눌리거나, 지연되거나, 다른 방식으로 표현되는 경우가
            많습니다. 역방향이라고 해서 반드시 나쁜 의미인 것은 아닙니다.
          </p>
        </section>

        <section>
          <h2>스프레드란?</h2>
          <p>
            스프레드는 카드를 늘어놓는 방식과 각 자리(포지션)에 부여된 의미입니다. 같은 카드라도
            &ldquo;과거&rdquo; 자리에 놓였을 때와 &ldquo;조언&rdquo; 자리에 놓였을 때 읽는 방식이
            달라집니다.
          </p>
        </section>

        <Divider />

        <section>
          <h2>이 사이트 사용법</h2>
          <ol>
            <li>메인 화면이나 상단 메뉴에서 원하는 점술 방식을 선택합니다.</li>
            <li>궁금한 점을 질문으로 적어보세요. (선택 사항입니다)</li>
            <li>&ldquo;뽑기만 하기&rdquo;와 &ldquo;해석 보기&rdquo; 중 원하는 방식을 고릅니다.</li>
            <li>카드가 섞이는 것을 지켜본 뒤, 카드를 하나씩 눌러 뒤집어 보세요.</li>
            <li>결과가 마음에 든다면 저장해 두고 나중에 &ldquo;최근 기록&rdquo;에서 다시 볼 수 있습니다.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
