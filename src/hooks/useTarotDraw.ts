import { useCallback, useState } from "react";
import { allCards } from "../data/cards";
import { shuffle } from "../utils/shuffle";
import { randomOrientation } from "../utils/orientation";
import type { DrawnCard, TarotSpread } from "../types/tarot";

export function useTarotDraw() {
  const [drawnCards, setDrawnCards] = useState<DrawnCard[] | null>(null);
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());

  const draw = useCallback((spread: TarotSpread) => {
    const picked = shuffle(allCards).slice(0, spread.cardCount);
    const cards: DrawnCard[] = spread.positions.map((position, index) => ({
      card: picked[index],
      orientation: randomOrientation(),
      position,
    }));
    setDrawnCards(cards);
    setRevealedIds(new Set());
  }, []);

  const reveal = useCallback((positionId: string) => {
    setRevealedIds((prev) => new Set(prev).add(positionId));
  }, []);

  const revealAll = useCallback(() => {
    setDrawnCards((current) => {
      if (current) {
        setRevealedIds(new Set(current.map((d) => d.position.id)));
      }
      return current;
    });
  }, []);

  const reset = useCallback(() => {
    setDrawnCards(null);
    setRevealedIds(new Set());
  }, []);

  const allRevealed = drawnCards !== null && drawnCards.every((d) => revealedIds.has(d.position.id));

  return { drawnCards, revealedIds, draw, reveal, revealAll, reset, allRevealed };
}
