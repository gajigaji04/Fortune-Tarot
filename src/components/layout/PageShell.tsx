import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell() {
  const { t } = useTranslation();
  return (
    <>
      <a href="#main-content" className="visually-hidden">
        {t("a11y.skipToContent")}
      </a>
      <Header />
      <main id="main-content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
