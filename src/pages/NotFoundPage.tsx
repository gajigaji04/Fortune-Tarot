import { useTranslation } from "react-i18next";
import { ButtonLink } from "../components/common/Button";

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className="container" style={{ textAlign: "center", padding: "5rem 0" }}>
      <h1>{t("notFound.title")}</h1>
      <p style={{ color: "var(--color-text-on-dark-dim)", marginBottom: "2rem" }}>
        {t("notFound.description")}
      </p>
      <ButtonLink to="/" variant="primary">
        {t("notFound.backHome")}
      </ButtonLink>
    </div>
  );
}
