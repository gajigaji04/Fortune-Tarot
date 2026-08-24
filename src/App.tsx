import { Route, Routes } from "react-router-dom";
import { PageShell } from "./components/layout/PageShell";
import { HomePage } from "./pages/HomePage";
import { ReadingPage } from "./pages/ReadingPage";
import { CardCatalogPage } from "./pages/CardCatalogPage";
import { CardDetailPage } from "./pages/CardDetailPage";
import { HistoryPage } from "./pages/HistoryPage";
import { LearnPage } from "./pages/LearnPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route index element={<HomePage />} />
        <Route path="reading/:spreadId" element={<ReadingPage />} />
        <Route path="catalog" element={<CardCatalogPage />} />
        <Route path="catalog/:cardId" element={<CardDetailPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
