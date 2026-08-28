import { useCallback, useState } from "react";
import { shuffle } from "../utils/shuffle";
import type { SpreadPosition } from "../types/common";

interface Identifiable {
  id: string;
}

/**
 * Selection engine shared by every card system (Tarot, Symbolon, ...): shuffle
 * a deck into a face-down pool, let the user click cards one at a time to
 * fill spread positions in order, and never offer the same card twice in one
 * reading. The deck itself, and any per-pick extra data (Tarot's orientation;
 * nothing for Symbolon), are supplied by the caller via `start` / `makeExtra`
 * so this hook stays ignorant of any one system's domain data.
 */
export function useCardSelection<TCard extends Identifiable, TExtra extends object = Record<string, never>>(
  makeExtra?: () => TExtra
) {
  const [pool, setPool] = useState<TCard[] | null>(null);
  const [selections, setSelections] = useState<({ card: TCard; position: SpreadPosition } & TExtra)[]>([]);

  const start = useCallback((deck: readonly TCard[], poolSize: number) => {
    setPool(shuffle(deck).slice(0, poolSize));
    setSelections([]);
  }, []);

  const pick = useCallback(
    (card: TCard, positions: SpreadPosition[]) => {
      setSelections((prev) => {
        if (prev.length >= positions.length) return prev;
        const position = positions[prev.length];
        const extra = (makeExtra ? makeExtra() : {}) as TExtra;
        return [...prev, { card, position, ...extra }];
      });
      setPool((prev) => (prev ? prev.filter((c) => c.id !== card.id) : prev));
    },
    [makeExtra]
  );

  const reset = useCallback(() => {
    setPool(null);
    setSelections([]);
  }, []);

  return { pool, selections, start, pick, reset };
}
