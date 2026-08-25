import type { Lang, Localized } from "../types/tarot";

export const SUPPORTED_LANGS: Lang[] = ["ko", "ja", "zh", "en"];

const FALLBACK_ORDER: Lang[] = ["en", "ko"];

/**
 * Reads a Localized<T> value for the given language, falling back to English
 * then Korean then whatever value exists. Translation content is generated
 * incrementally (see src/data/cards/translations/), so this guarantees the UI
 * never renders `undefined` while a language's content is still filling in.
 */
export function getLocalized<T>(record: Localized<T> | undefined, lang: Lang): T {
  if (!record) {
    throw new Error("getLocalized called with an undefined record");
  }
  if (record[lang] !== undefined && record[lang] !== null) return record[lang];
  for (const fallback of FALLBACK_ORDER) {
    if (record[fallback] !== undefined && record[fallback] !== null) return record[fallback];
  }
  const firstAvailable = Object.values(record).find((v) => v !== undefined && v !== null);
  return firstAvailable as T;
}
