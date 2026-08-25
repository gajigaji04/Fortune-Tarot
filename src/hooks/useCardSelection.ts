import { useCallback, useState } from "react";
import { allCards } from "../data/cards";
import { shuffle } from "../utils/shuffle";
import { randomOrientation } from "../utils/orientation";
import type { DrawnCard, SpreadPosition, TarotCard } from "../types/tarot";

/** How many face-down cards are laid out for the user to choose from. */
export const SELECTION_POOL_SIZE = 33;

export function useCardSelection() {
  const [pool, setPool] = useState<TarotCard[] | null>(null);
  const [selections, setSelections] = useState<DrawnCard[]>([]);

  const start = useCallback((poolSize: number = SELECTION_POOL_SIZE) => {
    setPool(shuffle(allCards).slice(0, poolSize));
    setSelections([]);
  }, []);

  /**
   * The user picks a *card*, not an orientation -- the orientation is rolled
   * at this exact moment, independent of which card or slot was clicked.
   */
  const pick = useCallback(
    (card: TarotCard, positions: SpreadPosition[]) => {
      setSelections((prev) => {
        if (prev.length >= positions.length) return prev;
        const position = positions[prev.length];
        return [...prev, { card, orientation: randomOrientation(), position }];
      });
      setPool((prev) => (prev ? prev.filter((c) => c.id !== card.id) : prev));
    },
    []
  );

  const reset = useCallback(() => {
    setPool(null);
    setSelections([]);
  }, []);

  return { pool, selections, start, pick, reset };
}
