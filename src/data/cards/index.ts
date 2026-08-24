import type { TarotCard } from "../../types/tarot";
import { majorArcana } from "./majorArcana";
import { wands } from "./wands";
import { cups } from "./cups";
import { swords } from "./swords";
import { pentacles } from "./pentacles";

export { majorArcana, wands, cups, swords, pentacles };

export const allCards: TarotCard[] = [
  ...majorArcana,
  ...wands,
  ...cups,
  ...swords,
  ...pentacles,
];

const cardsById = new Map(allCards.map((card) => [card.id, card]));

export function getCardById(id: string): TarotCard | undefined {
  return cardsById.get(id);
}
