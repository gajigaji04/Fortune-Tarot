import { useTranslation } from "react-i18next";
import { StaticInfoPage } from "./StaticInfoPage";

export function TermsPage() {
  const { t } = useTranslation();
  return (
    <StaticInfoPage
      title={t("terms.title")}
      paragraphs={[t("terms.body1"), t("terms.body2"), t("terms.body3")]}
    />
  );
}
