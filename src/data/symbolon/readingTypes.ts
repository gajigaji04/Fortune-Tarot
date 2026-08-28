import type { SymbolonReadingType } from "../../types/symbolon";

/**
 * Symbolon's reading focuses -- deliberately framed around inner/psychological
 * territory (current state, inner self, relationship dynamics, patterns) per
 * spec, not Tarot's fortune-flavored topics (career, love, finances, ...) in
 * src/data/topics.ts. Card count is not fixed here; see spreads.ts.
 */
export const symbolonReadingTypes: SymbolonReadingType[] = [
  {
    id: "today",
    name: { ko: "오늘의 메시지", ja: "今日のメッセージ", zh: "今日讯息", en: "Today's Message" },
    description: {
      ko: "지금 이 순간 필요한 하나의 메시지를 살펴봅니다.",
      ja: "今この瞬間に必要なメッセージをひとつ見てみましょう。",
      zh: "看看此刻你所需要的一条讯息。",
      en: "A single message for exactly where you are right now.",
    },
    defaultCount: 1,
    recommendedCounts: [1, 3],
    defaultQuestion: {
      ko: "오늘 나에게 필요한 메시지는 무엇일까요?",
      ja: "今日、私に必要なメッセージは何でしょうか？",
      zh: "今天我需要的讯息是什么？",
      en: "What message do I need today?",
    },
  },
  {
    id: "inner-self",
    name: { ko: "내면 탐색", ja: "内面の探索", zh: "内在探索", en: "Inner Self" },
    description: {
      ko: "지금 내 마음속에서 일어나고 있는 흐름을 들여다봅니다.",
      ja: "今、自分の心の中で起きている流れを見つめます。",
      zh: "看看此刻正在你内心发生的流动。",
      en: "Look inward at what's moving beneath the surface right now.",
    },
    defaultCount: 3,
    recommendedCounts: [3, 5],
    defaultQuestion: {
      ko: "지금 내 마음속에서는 어떤 일이 일어나고 있을까요?",
      ja: "今、私の心の中では何が起きているのでしょうか？",
      zh: "此刻我的内心正在发生什么？",
      en: "What's really going on inside me right now?",
    },
  },
  {
    id: "current-situation",
    name: { ko: "현재 상황 분석", ja: "現在の状況分析", zh: "现状分析", en: "Current Situation" },
    description: {
      ko: "지금 처한 상황과 그 원인, 나아갈 방향을 함께 살펴봅니다.",
      ja: "今の状況とその原因、進むべき方向を一緒に見ていきます。",
      zh: "一起看看目前的处境、原因，以及前进的方向。",
      en: "Look at where you stand, why, and where to go from here.",
    },
    defaultCount: 5,
    recommendedCounts: [5, 3],
    defaultQuestion: {
      ko: "지금 이 상황은 어떻게 흘러가고 있을까요?",
      ja: "今のこの状況はどのように流れているのでしょうか？",
      zh: "现在这个状况正朝着什么方向发展？",
      en: "Where is this situation actually heading?",
    },
  },
  {
    id: "relationship",
    name: { ko: "관계 분석", ja: "関係の分析", zh: "关系分析", en: "Relationship" },
    description: {
      ko: "나와 상대방, 그리고 관계 안의 패턴을 깊이 있게 살펴봅니다.",
      ja: "自分と相手、そして関係の中にあるパターンを深く見つめます。",
      zh: "深入看看你、对方，以及这段关系中的模式。",
      en: "A deeper look at you, the other person, and the patterns between you.",
    },
    defaultCount: 7,
    recommendedCounts: [7, 3, 5],
    defaultQuestion: {
      ko: "이 사람과 나 사이에는 어떤 흐름이 있을까요?",
      ja: "この人と私の間には、どんな流れがあるのでしょうか？",
      zh: "我和这个人之间存在着怎样的走向？",
      en: "What's really flowing between me and this person?",
    },
  },
  {
    id: "psychological-pattern",
    name: { ko: "심리적 패턴", ja: "心理的パターン", zh: "心理模式", en: "Psychological Pattern" },
    description: {
      ko: "반복되는 감정이나 행동 패턴과 그 숨은 원인을 살펴봅니다.",
      ja: "繰り返される感情や行動のパターンと、その隠れた原因を見てみましょう。",
      zh: "看看反复出现的情绪或行为模式,以及背后隐藏的原因。",
      en: "Explore a recurring pattern and what's really driving it.",
    },
    defaultCount: 5,
    recommendedCounts: [5, 7],
    defaultQuestion: {
      ko: "내가 계속 반복하는 이 패턴은 어디에서 비롯된 걸까요?",
      ja: "私が繰り返しているこのパターンは、どこから来ているのでしょうか？",
      zh: "我一直重复的这个模式究竟从何而来？",
      en: "Where does this pattern I keep repeating actually come from?",
    },
  },
  {
    id: "deep-reading",
    name: { ko: "심층 확장 리딩", ja: "深層拡張リーディング", zh: "深度扩展解读", en: "Deep Reading" },
    description: {
      ko: "여러 층위를 한 번에 살펴보는 확장된 리딩입니다. 시간에 여유가 있을 때 추천합니다.",
      ja: "いくつもの層を一度に見ていく拡張リーディングです。時間に余裕があるときにおすすめです。",
      zh: "一次性纵览多个层面的扩展式解读，适合在时间充裕时使用。",
      en: "An extended reading across many layers at once -- best when you have time to sit with it.",
    },
    defaultCount: 10,
    recommendedCounts: [10],
    defaultQuestion: {
      ko: "지금 내 삶 전반에는 어떤 흐름이 있을까요?",
      ja: "今の私の人生全体には、どんな流れがあるのでしょうか？",
      zh: "此刻我生活的整体正在经历怎样的走向？",
      en: "What's the larger flow moving through my life right now?",
    },
  },
];

const readingTypesById = new Map(symbolonReadingTypes.map((r) => [r.id, r]));

export function getSymbolonReadingTypeById(id: string): SymbolonReadingType | undefined {
  return readingTypesById.get(id);
}
