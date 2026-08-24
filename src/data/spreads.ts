import type { TarotSpread } from "../types/tarot";

export const spreads: TarotSpread[] = [
  {
    id: "today",
    name: "오늘의 운세",
    description: "오늘 나에게 필요한 메시지는 무엇일까요?",
    cardCount: 1,
    layout: "single",
    positions: [
      { id: "today-message", name: "오늘의 메시지", description: "오늘 하루 당신에게 전하는 카드의 조언입니다." },
    ],
  },
  {
    id: "three-general",
    name: "3장 타로 · 과거 · 현재 · 미래",
    description: "지나온 흐름과 지금, 그리고 다가올 방향을 살펴봅니다.",
    cardCount: 3,
    layout: "row",
    positions: [
      { id: "past", name: "과거", description: "지금의 상황에 영향을 준 지난 흐름입니다." },
      { id: "present", name: "현재", description: "지금 당신이 서 있는 자리를 보여줍니다." },
      { id: "future", name: "미래", description: "이대로 흘러갈 경우 다가올 방향입니다." },
    ],
  },
  {
    id: "three-choice",
    name: "3장 타로 · 선택 A / 선택 B",
    description: "두 갈래 길 앞에서 각 선택이 가진 흐름을 비교합니다.",
    cardCount: 3,
    layout: "row",
    positions: [
      { id: "current-situation", name: "현재 상황", description: "지금 두 선택 사이에 놓인 상황입니다." },
      { id: "choice-a", name: "선택 A", description: "첫 번째 선택을 따라갔을 때의 흐름입니다." },
      { id: "choice-b", name: "선택 B", description: "두 번째 선택을 따라갔을 때의 흐름입니다." },
    ],
  },
  {
    id: "three-relationship",
    name: "3장 타로 · 관계",
    description: "나와 상대, 그리고 관계의 흐름을 함께 살펴봅니다.",
    cardCount: 3,
    layout: "row",
    positions: [
      { id: "self", name: "나", description: "이 관계 안에서 지금 당신의 마음입니다." },
      { id: "other", name: "상대방", description: "상대방이 이 관계를 대하는 마음입니다." },
      { id: "flow", name: "관계의 흐름", description: "두 사람 사이에 흘러가는 방향입니다." },
    ],
  },
  {
    id: "career",
    name: "직업운",
    description: "지금의 자리에서 앞으로 나아갈 방향을 짚어봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "current-job", name: "현재 직업 상황", description: "지금 당신이 놓인 일의 흐름입니다." },
      { id: "strength", name: "나의 강점", description: "지금 활용할 수 있는 당신의 힘입니다." },
      { id: "obstacle", name: "장애물", description: "앞을 가로막고 있는 요소입니다." },
      { id: "opportunity", name: "앞으로의 기회", description: "다가오고 있는 가능성입니다." },
      { id: "advice", name: "조언", description: "지금 새겨야 할 카드의 조언입니다." },
    ],
  },
  {
    id: "job-seeking",
    name: "취업운",
    description: "구직의 흐름과 준비된 것, 그리고 다가올 기회를 살펴봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "current-status", name: "현재 상황", description: "지금 구직 과정의 흐름입니다." },
      { id: "readiness", name: "나의 준비 상태", description: "지금 갖추고 있는 역량과 태도입니다." },
      { id: "obstacle", name: "장애물", description: "발목을 잡을 수 있는 요소입니다." },
      { id: "opportunity", name: "다가올 기회", description: "가까운 시일에 열릴 수 있는 문입니다." },
      { id: "advice", name: "조언", description: "지금 새겨야 할 카드의 조언입니다." },
    ],
  },
  {
    id: "study",
    name: "학업운",
    description: "지금의 배움이 어디로 향하고 있는지 살펴봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "current-study", name: "현재 학업 상태", description: "지금 배움의 흐름입니다." },
      { id: "strength", name: "강점", description: "지금 당신이 가진 학습의 힘입니다." },
      { id: "obstacle", name: "방해 요소", description: "집중을 흐트러뜨리는 요인입니다." },
      { id: "outcome", name: "성과 가능성", description: "지금 흐름이 이어졌을 때의 결과입니다." },
      { id: "advice", name: "조언", description: "지금 새겨야 할 카드의 조언입니다." },
    ],
  },
  {
    id: "money",
    name: "경제운",
    description: "재물의 흐름이 어디서 들어오고 어디로 새어나가는지 살펴봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "current-finance", name: "현재 재정 상태", description: "지금 당신의 재정이 놓인 자리입니다." },
      { id: "inflow", name: "돈이 들어오는 흐름", description: "재물이 들어오는 통로입니다." },
      { id: "outflow", name: "돈이 새어나가는 부분", description: "주의해야 할 지출의 흐름입니다." },
      { id: "opportunity", name: "기회", description: "재정적으로 열릴 수 있는 가능성입니다." },
      { id: "advice", name: "조언", description: "지금 새겨야 할 카드의 조언입니다." },
    ],
  },
  {
    id: "love",
    name: "애정운",
    description: "나와 상대, 그리고 관계가 향하는 곳을 살펴봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "my-feeling", name: "나의 현재 감정", description: "지금 당신 마음에 흐르는 감정입니다." },
      { id: "other-state", name: "상대방의 상태", description: "상대방이 지금 느끼고 있는 마음입니다." },
      { id: "current-relation", name: "관계의 현재 상황", description: "두 사람 사이의 지금 거리입니다." },
      { id: "obstacle", name: "장애물", description: "관계를 가로막고 있는 요소입니다." },
      { id: "flow", name: "앞으로의 흐름", description: "관계가 향해 갈 방향입니다." },
    ],
  },
  {
    id: "relationship",
    name: "인간관계운",
    description: "주변 사람들과의 관계 흐름을 살펴봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "current-flow", name: "현재 관계의 흐름", description: "지금 관계가 놓인 자리입니다." },
      { id: "my-attitude", name: "나의 태도", description: "당신이 관계 안에서 취하고 있는 태도입니다." },
      { id: "their-attitude", name: "상대의 태도", description: "상대가 관계 안에서 취하고 있는 태도입니다." },
      { id: "conflict", name: "갈등 요소", description: "관계를 어렵게 만드는 요인입니다." },
      { id: "advice", name: "조언", description: "지금 새겨야 할 카드의 조언입니다." },
    ],
  },
  {
    id: "health",
    name: "건강운",
    description: "몸과 마음의 흐름을 함께 짚어봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "current-condition", name: "현재 컨디션", description: "지금 당신의 몸과 마음이 놓인 상태입니다." },
      { id: "physical", name: "신체적 요인", description: "몸에 영향을 미치는 요소입니다." },
      { id: "mental", name: "정신적 요인", description: "마음에 영향을 미치는 요소입니다." },
      { id: "advice", name: "개선을 위한 조언", description: "지금 챙겨야 할 카드의 조언입니다." },
      { id: "flow", name: "앞으로의 흐름", description: "컨디션이 향해 갈 방향입니다." },
    ],
  },
  {
    id: "business",
    name: "사업운",
    description: "사업의 현재와 리스크, 기회를 함께 살펴봅니다.",
    cardCount: 5,
    layout: "row",
    positions: [
      { id: "current-business", name: "현재 사업 상황", description: "지금 사업이 놓인 흐름입니다." },
      { id: "strength", name: "강점", description: "지금 활용할 수 있는 사업의 힘입니다." },
      { id: "risk", name: "리스크 요소", description: "주의해야 할 위험 요인입니다." },
      { id: "opportunity", name: "기회", description: "사업이 확장될 수 있는 가능성입니다." },
      { id: "advice", name: "조언", description: "지금 새겨야 할 카드의 조언입니다." },
    ],
  },
  {
    id: "yearly",
    name: "올해의 운세 · 켈틱 크로스",
    description: "한 해의 흐름을 열 장의 카드로 깊이 있게 살펴봅니다.",
    cardCount: 10,
    layout: "celtic-cross",
    positions: [
      { id: "present", name: "현재", description: "지금 당신이 서 있는 자리입니다." },
      { id: "obstacle", name: "장애물", description: "당신을 가로막고 있는 요소입니다." },
      { id: "conscious", name: "의식", description: "당신이 뚜렷하게 의식하고 있는 목표나 생각입니다." },
      { id: "unconscious", name: "무의식", description: "스스로도 잘 모르는 마음 깊은 곳의 흐름입니다." },
      { id: "past", name: "과거", description: "지금에 영향을 준 지나온 시간입니다." },
      { id: "near-future", name: "가까운 미래", description: "곧 다가올 흐름입니다." },
      { id: "self", name: "자기 자신", description: "지금 이 상황을 대하는 당신의 태도입니다." },
      { id: "environment", name: "주변 환경", description: "당신을 둘러싼 사람들과 상황입니다." },
      { id: "hopes-fears", name: "희망과 두려움", description: "마음 깊이 바라는 것과 동시에 두려워하는 것입니다." },
      { id: "outcome", name: "최종 결과", description: "지금의 흐름이 향하는 최종적인 결말입니다." },
    ],
  },
];

const spreadsById = new Map(spreads.map((spread) => [spread.id, spread]));

export function getSpreadById(id: string): TarotSpread | undefined {
  return spreadsById.get(id);
}

export const fieldReadingSpreadIds = [
  "career",
  "job-seeking",
  "study",
  "money",
  "love",
  "relationship",
  "health",
  "business",
] as const;

export const threeCardSpreadIds = ["three-general", "three-choice", "three-relationship"] as const;
