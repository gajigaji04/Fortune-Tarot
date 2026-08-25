import { useTranslation } from "react-i18next";
import type { Lang } from "../types/tarot";
import { SUPPORTED_LANGS } from "../utils/i18n";

/** Current UI language, normalized to one of our 4 supported codes. */
export function useLang(): Lang {
  const { i18n } = useTranslation();
  const code = i18n.language.split("-")[0] as Lang;
  return SUPPORTED_LANGS.includes(code) ? code : "ko";
}
