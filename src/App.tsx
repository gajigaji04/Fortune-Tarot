import { Navigate, Route, Routes } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { LanguageSync } from "./components/common/LanguageSync";
import { HomePage } from "./pages/HomePage";
import { ReadingPage } from "./pages/ReadingPage";
import { CardsListPage } from "./pages/CardsListPage";
import { CardMeaningPage } from "./pages/CardMeaningPage";
import { VaultPage } from "./pages/VaultPage";
import { VaultDetailPage } from "./pages/VaultDetailPage";
import { LearnPage } from "./pages/LearnPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <LanguageSync />
      <Routes>
        <Route element={<PageShell />}>
          <Route index element={<HomePage />} />
          <Route path="reading/:topicId" element={<ReadingPage />} />
          <Route path="cards" element={<CardsListPage />} />
          <Route path="cards/:slug" element={<CardMeaningPage />} />
          <Route path="vault" element={<VaultPage />} />
          <Route path="vault/:recordId" element={<VaultDetailPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          {/* Legacy paths from the previous "카드 도감" / "최근 기록" naming. */}
          <Route path="catalog" element={<Navigate to="/cards" replace />} />
          <Route path="catalog/:cardId" element={<Navigate to="/cards" replace />} />
          <Route path="history" element={<Navigate to="/vault" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
