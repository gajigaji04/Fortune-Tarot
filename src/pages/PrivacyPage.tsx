import { useTranslation } from "react-i18next";
import { StaticInfoPage } from "./StaticInfoPage";

export function PrivacyPage() {
  const { t } = useTranslation();
  return (
    <StaticInfoPage
      title={t("privacy.title")}
      paragraphs={[t("privacy.body1"), t("privacy.body2"), t("privacy.body3")]}
    />
  );
}
