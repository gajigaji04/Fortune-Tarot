import { ButtonLink } from "../components/common/Button";

export function NotFoundPage() {
  return (
    <div className="container" style={{ textAlign: "center", padding: "5rem 0" }}>
      <h1>페이지를 찾을 수 없습니다</h1>
      <p style={{ color: "var(--color-text-on-dark-dim)", marginBottom: "2rem" }}>
        찾으시는 카드는 이 덱에 없는 것 같습니다.
      </p>
      <ButtonLink to="/" variant="primary">
        메인으로 돌아가기
      </ButtonLink>
    </div>
  );
}
