import { Navigate, Route, Routes } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { LanguageSync } from "./components/common/LanguageSync";
import { HomePage } from "./pages/HomePage";
import { TarotPage } from "./pages/TarotPage";
import { CardsListPage } from "./pages/CardsListPage";
import { CardMeaningPage } from "./pages/CardMeaningPage";
import { SymbolonPage } from "./pages/SymbolonPage";
import { SymbolonCardsListPage } from "./pages/SymbolonCardsListPage";
import { SymbolonCardMeaningPage } from "./pages/SymbolonCardMeaningPage";
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
          <Route path="tarot" element={<TarotPage />} />
          <Route path="cards" element={<CardsListPage />} />
          <Route path="cards/:slug" element={<CardMeaningPage />} />
          <Route path="symbolon" element={<SymbolonPage />} />
          <Route path="symbolon/cards" element={<SymbolonCardsListPage />} />
          <Route path="symbolon/cards/:id" element={<SymbolonCardMeaningPage />} />
          <Route path="learn" element={<LearnPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          {/* Legacy paths from earlier iterations of the site. */}
          <Route path="reading/:topicId" element={<Navigate to="/tarot" replace />} />
          <Route path="catalog" element={<Navigate to="/cards" replace />} />
          <Route path="catalog/:cardId" element={<Navigate to="/cards" replace />} />
          <Route path="history" element={<Navigate to="/" replace />} />
          <Route path="vault" element={<Navigate to="/" replace />} />
          <Route path="vault/:recordId" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
