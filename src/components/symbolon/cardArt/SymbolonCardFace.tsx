import { useState } from "react";
import { useTranslation } from "react-i18next";
import type { SymbolonCard } from "../../../types/symbolon";
import { useLang } from "../../../hooks/useLang";
import { getLocalized } from "../../../utils/i18n";
import styles from "./SymbolonCardFace.module.css";

/** Generic "no image" glyph -- not thematic, not meant to resemble card art. */
function PlaceholderIcon() {
  return (
    <svg viewBox="0 0 24 24" width="34%" height="34%" aria-hidden="true" focusable="false">
      <rect x={2} y={3} width={20} height={16} rx={1.5} fill="none" stroke="currentColor" strokeWidth={1.3} />
      <circle cx={8} cy={9} r={1.8} fill="none" stroke="currentColor" strokeWidth={1.2} />
      <path d="M3 16 L9 11 L13 14 L16 11.5 L21 16" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Plain, picture-first card face. Real Symbolon card art is a commercially
 * licensed product this project has no rights to reproduce (see the
 * copyright note in src/data/symbolon/index.ts) -- until a licensed image is
 * dropped at `card.image`, this shows a clearly-labeled placeholder rather
 * than any illustration invented to look like "the real card". Do not
 * replace the placeholder with generated artwork and present it as the
 * actual Symbolon card.
 */
export function SymbolonCardFace({ card }: { card: SymbolonCard }) {
  const { t } = useTranslation();
  const lang = useLang();
  const [imageFailed, setImageFailed] = useState(false);
  const localizedName = getLocalized(card.name, lang);

  return (
    <div className={styles.faceContainer}>
      <div className={styles.face}>
        <div className={styles.illustration}>
          <span className={styles.numberBadge}>No. {String(card.number).padStart(2, "0")}</span>
          {imageFailed ? (
            <div className={styles.placeholder}>
              <PlaceholderIcon />
              <span className={styles.placeholderLabel}>{t("symbolon.imagePlaceholder")}</span>
            </div>
          ) : (
            <img
              src={card.image}
              alt=""
              style={{ width: "70%", height: "70%", objectFit: "contain" }}
              onError={() => setImageFailed(true)}
            />
          )}
        </div>
        <div className={styles.caption}>
          <span className={styles.name}>{localizedName}</span>
          {lang !== "en" && <span className={styles.nameEn}>{card.englishName}</span>}
        </div>
      </div>
    </div>
  );
}
