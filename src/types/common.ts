/**
 * Types shared across independent card systems (Tarot, Symbolon, ...).
 * Keep this file limited to concepts that are genuinely system-agnostic --
 * anything specific to one card system's own rules belongs in that system's
 * own types file instead.
 */

export type Lang = "ko" | "ja" | "zh" | "en";

export type Localized<T> = Record<Lang, T>;

/** A single slot in a spread, e.g. "past" or "advice" -- meaning is system-specific, shape is not. */
export interface SpreadPosition {
  id: string;
  name: Localized<string>;
  description: Localized<string>;
}

export type ReadingMode = "draw-only" | "interpret";
