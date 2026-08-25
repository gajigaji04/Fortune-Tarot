import { useEffect } from "react";
import { useLang } from "../../hooks/useLang";

/** Keeps <html lang> and [data-lang] (used for CJK font-family switching) in sync with i18next. */
export function LanguageSync() {
  const lang = useLang();

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  return null;
}
