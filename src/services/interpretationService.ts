import type { DrawnCard, SpreadPosition, TarotSpread } from "../types/tarot";

/**
 * Abstraction over "how a spread's meaning gets composed into text."
 * The current implementation is a local, rule-based composer built from the
 * per-card interpretation data. It is deliberately kept behind this interface
 * so a future LLM-backed provider (e.g. the Claude API) can be swapped in
 * without touching any calling UI code.
 */
export interface InterpretationProvider {
  getPositionReading(card: DrawnCard): string;
  getOverallSynthesis(drawnCards: DrawnCard[], spread: TarotSpread, question: string): string[];
}

const positionLeadIns: Record<string, string> = {
  "today-message": "오늘 당신에게 전해지는 메시지는",
  past: "지나온 흐름을 보여주는 자리에는",
  present: "지금 당신이 서 있는 자리에는",
  future: "이대로 흘러갈 경우 다가올 자리에는",
  "current-situation": "지금의 상황을 보여주는 자리에는",
  "choice-a": "첫 번째 선택의 흐름을 보여주는 자리에는",
  "choice-b": "두 번째 선택의 흐름을 보여주는 자리에는",
  self: "당신 자신을 보여주는 자리에는",
  other: "상대방을 보여주는 자리에는",
  flow: "앞으로의 흐름을 보여주는 자리에는",
  "current-job": "현재 직업 상황을 보여주는 자리에는",
  strength: "당신의 강점을 보여주는 자리에는",
  obstacle: "장애물을 보여주는 자리에는",
  opportunity: "다가올 기회를 보여주는 자리에는",
  advice: "카드가 전하는 조언의 자리에는",
  "current-status": "지금의 상황을 보여주는 자리에는",
  readiness: "당신의 준비 상태를 보여주는 자리에는",
  "current-study": "현재 학업 상태를 보여주는 자리에는",
  outcome: "성과 가능성을 보여주는 자리에는",
  "current-finance": "현재 재정 상태를 보여주는 자리에는",
  inflow: "돈이 들어오는 흐름을 보여주는 자리에는",
  outflow: "돈이 새어나가는 부분을 보여주는 자리에는",
  "my-feeling": "당신의 현재 감정을 보여주는 자리에는",
  "other-state": "상대방의 상태를 보여주는 자리에는",
  "current-relation": "관계의 현재 상황을 보여주는 자리에는",
  "current-flow": "현재 관계의 흐름을 보여주는 자리에는",
  "my-attitude": "당신의 태도를 보여주는 자리에는",
  "their-attitude": "상대의 태도를 보여주는 자리에는",
  conflict: "갈등 요소를 보여주는 자리에는",
  "current-condition": "현재 컨디션을 보여주는 자리에는",
  physical: "신체적 요인을 보여주는 자리에는",
  mental: "정신적 요인을 보여주는 자리에는",
  "current-business": "현재 사업 상황을 보여주는 자리에는",
  risk: "리스크 요소를 보여주는 자리에는",
  conscious: "당신이 뚜렷하게 의식하는 것을 보여주는 자리에는",
  unconscious: "마음 깊이 잠재된 것을 보여주는 자리에는",
  "near-future": "가까운 미래를 보여주는 자리에는",
  environment: "주변 환경을 보여주는 자리에는",
  "hopes-fears": "희망과 두려움을 보여주는 자리에는",
};

function leadInFor(position: SpreadPosition): string {
  return positionLeadIns[position.id] ?? `[${position.name}] 자리에는`;
}

function orientationLabel(orientation: DrawnCard["orientation"]): string {
  return orientation === "upright" ? "정방향" : "역방향";
}

const localProvider: InterpretationProvider = {
  getPositionReading(drawn) {
    const { card, orientation, position } = drawn;
    const body =
      orientation === "upright" ? card.interpretation.upright : card.interpretation.reversed;
    return `${leadInFor(position)} ${card.nameKo}(${orientationLabel(orientation)}) 카드가 나왔습니다. ${body}`;
  },

  getOverallSynthesis(drawnCards, spread, question) {
    if (drawnCards.length === 0) return [];

    const paragraphs: string[] = [];

    const opening = question.trim()
      ? `"${question.trim()}"라는 질문에 대해 ${spread.name} 리딩이 펼쳐졌습니다.`
      : `${spread.name} 리딩이 펼쳐졌습니다.`;
    paragraphs.push(opening);

    const majorCount = drawnCards.filter((d) => d.card.arcana === "major").length;
    const majorRatio = majorCount / drawnCards.length;
    if (drawnCards.length > 1) {
      if (majorRatio >= 0.5) {
        paragraphs.push(
          "메이저 아르카나가 여러 장 나타난 만큼, 지금은 사소한 일상보다 삶의 중요한 흐름이나 전환점과 맞닿아 있는 시기로 보입니다."
        );
      } else if (majorCount === 0) {
        paragraphs.push(
          "마이너 아르카나 위주로 카드가 나온 만큼, 거창한 사건보다는 일상 속 구체적인 선택과 태도가 흐름을 만들어가고 있습니다."
        );
      }
    }

    const reversedCount = drawnCards.filter((d) => d.orientation === "reversed").length;
    const reversedRatio = reversedCount / drawnCards.length;
    if (reversedRatio >= 0.5) {
      paragraphs.push(
        "역방향 카드가 두드러지는 만큼, 겉으로 뚜렷이 드러나기보다 마음속에서 아직 정리되고 있는 흐름이나 더뎌지는 감각에 주의를 기울여볼 필요가 있습니다."
      );
    } else if (reversedCount === 0 && drawnCards.length > 1) {
      paragraphs.push(
        "모든 카드가 정방향으로 나온 만큼, 지금의 흐름은 비교적 순조롭고 그 방향도 뚜렷하게 드러나 있습니다."
      );
    }

    if (drawnCards.length > 1) {
      const first = drawnCards[0];
      const last = drawnCards[drawnCards.length - 1];
      paragraphs.push(
        `[${first.position.name}]의 ${first.card.nameKo}에서 시작된 흐름은 [${last.position.name}]의 ${last.card.nameKo}(으)로 이어집니다. 각 카드가 놓인 자리를 하나씩 짚어보며, 지금 당신에게 필요한 것이 무엇인지 천천히 헤아려 보시기 바랍니다.`
      );
    }

    return paragraphs;
  },
};

export const interpretationService: InterpretationProvider = localProvider;
