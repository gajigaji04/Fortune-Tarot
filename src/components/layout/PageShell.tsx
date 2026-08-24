import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell() {
  return (
    <>
      <a href="#main-content" className="visually-hidden">
        본문 바로가기
      </a>
      <Header />
      <main id="main-content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
