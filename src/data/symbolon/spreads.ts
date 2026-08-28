import type { SpreadPosition } from "../../types/common";
import type { SymbolonCardCount } from "../../types/symbolon";

/**
 * Symbolon's own spreads -- not a copy of Tarot's Celtic Cross / pentagon
 * layouts (src/data/positionTemplates.ts). Kept simple and count-driven per
 * the initial spec; add per-reading-type variants here later if needed
 * without touching Tarot's spread data at all.
 */

export const ONE_CARD_POSITIONS: SpreadPosition[] = [
  {
    id: "message",
    name: { ko: "오늘의 메시지", ja: "今日のメッセージ", zh: "今日讯息", en: "Today's Message" },
    description: {
      ko: "지금 당신에게 필요한 하나의 메시지를 보여주는 카드입니다.",
      ja: "今のあなたに必要な、たったひとつのメッセージを示すカードです。",
      zh: "为你揭示此刻所需的一条讯息的一张牌。",
      en: "The single message you need to hear right now.",
    },
  },
];

export const THREE_CARD_POSITIONS: SpreadPosition[] = [
  {
    id: "situation",
    name: { ko: "현재 상황", ja: "現在の状況", zh: "目前状况", en: "Current Situation" },
    description: {
      ko: "지금 겉으로 드러난 상황입니다.",
      ja: "今、表に現れている状況です。",
      zh: "此刻显现在外的状况。",
      en: "What's visible on the surface right now.",
    },
  },
  {
    id: "inner-cause",
    name: { ko: "내면의 원인", ja: "内面の原因", zh: "内在的原因", en: "Inner Cause" },
    description: {
      ko: "이 상황을 만들어낸 마음속 흐름입니다.",
      ja: "この状況を生み出した、心の中の流れです。",
      zh: "促成这个状况的内心脉络。",
      en: "The inner current that shaped this situation.",
    },
  },
  {
    id: "flow-ahead",
    name: { ko: "앞으로의 흐름", ja: "これからの流れ", zh: "未来的走向", en: "The Flow Ahead" },
    description: {
      ko: "지금의 흐름이 이어질 때 향하는 방향입니다.",
      ja: "今の流れが続いた場合に向かう方向です。",
      zh: "若照此发展下去将走向的方向。",
      en: "Where this current is headed if it continues.",
    },
  },
];

export const FIVE_CARD_POSITIONS: SpreadPosition[] = [
  {
    id: "problem",
    name: { ko: "현재의 문제", ja: "現在の問題", zh: "目前的问题", en: "The Present Problem" },
    description: {
      ko: "지금 마주하고 있는 문제 자체입니다.",
      ja: "今、向き合っている問題そのものです。",
      zh: "你此刻正面对的问题本身。",
      en: "The problem you're facing right now.",
    },
  },
  {
    id: "hidden-cause",
    name: { ko: "숨겨진 원인", ja: "隠れた原因", zh: "隐藏的原因", en: "Hidden Cause" },
    description: {
      ko: "표면 아래 숨어 있는 진짜 원인입니다.",
      ja: "表面の下に隠れている本当の原因です。",
      zh: "藏在表面之下的真正原因。",
      en: "The real cause hidden beneath the surface.",
    },
  },
  {
    id: "blind-spot",
    name: { ko: "내가 인식하지 못하는 부분", ja: "自分が気づいていない部分", zh: "自己未曾察觉的部分", en: "Your Blind Spot" },
    description: {
      ko: "스스로는 미처 알아차리지 못하고 있는 부분입니다.",
      ja: "自分ではまだ気づけていない部分です。",
      zh: "你自己尚未察觉的部分。",
      en: "The part of this you haven't yet noticed about yourself.",
    },
  },
  {
    id: "direction-of-change",
    name: { ko: "변화의 방향", ja: "変化の方向", zh: "变化的方向", en: "Direction of Change" },
    description: {
      ko: "지금 필요한 변화가 향해야 할 방향입니다.",
      ja: "今必要な変化が向かうべき方向です。",
      zh: "此刻所需变化应走向的方向。",
      en: "The direction the needed change should take.",
    },
  },
  {
    id: "advice",
    name: { ko: "조언", ja: "アドバイス", zh: "建议", en: "Advice" },
    description: {
      ko: "지금 마음에 새길 조언입니다.",
      ja: "今、心に留めておきたいアドバイスです。",
      zh: "此刻应牢记的建议。",
      en: "Advice worth carrying with you right now.",
    },
  },
];

/** 7-card relationship-focused spread. */
export const SEVEN_CARD_POSITIONS: SpreadPosition[] = [
  {
    id: "self",
    name: { ko: "나", ja: "自分", zh: "我", en: "You" },
    description: {
      ko: "이 관계 안에서 지금 당신의 상태입니다.",
      ja: "この関係の中での、今のあなたの状態です。",
      zh: "你在这段关系中此刻的状态。",
      en: "Where you stand in this relationship right now.",
    },
  },
  {
    id: "other",
    name: { ko: "상대방", ja: "相手", zh: "对方", en: "The Other Person" },
    description: {
      ko: "상대방이 지금 이 관계를 대하는 상태입니다.",
      ja: "相手が今この関係に対して抱いている状態です。",
      zh: "对方此刻面对这段关系的状态。",
      en: "Where the other person stands in this relationship right now.",
    },
  },
  {
    id: "current-dynamic",
    name: { ko: "관계의 현재", ja: "関係の現在", zh: "关系的现状", en: "The Relationship Now" },
    description: {
      ko: "두 사람 사이에 지금 흐르고 있는 역학입니다.",
      ja: "二人の間に今流れている力学です。",
      zh: "此刻在两人之间流动的关系动态。",
      en: "The dynamic currently flowing between you two.",
    },
  },
  {
    id: "unconscious-pattern",
    name: { ko: "무의식적 패턴", ja: "無意識のパターン", zh: "无意识的模式", en: "Unconscious Pattern" },
    description: {
      ko: "두 사람이 반복하고 있는, 미처 의식하지 못한 패턴입니다.",
      ja: "二人が繰り返している、まだ意識できていないパターンです。",
      zh: "两人反复出现却未曾察觉的模式。",
      en: "The pattern you two keep repeating without quite noticing.",
    },
  },
  {
    id: "root-of-conflict",
    name: { ko: "갈등의 뿌리", ja: "対立の根", zh: "冲突的根源", en: "Root of the Conflict" },
    description: {
      ko: "긴장이나 갈등이 시작되는 근본 지점입니다.",
      ja: "緊張や対立が始まる根本的な地点です。",
      zh: "紧张或冲突真正开始的根源。",
      en: "Where the tension or conflict really begins.",
    },
  },
  {
    id: "growth-direction",
    name: { ko: "성장의 방향", ja: "成長の方向", zh: "成长的方向", en: "Direction of Growth" },
    description: {
      ko: "이 관계가 성장하기 위해 필요한 방향입니다.",
      ja: "この関係が成長するために必要な方向です。",
      zh: "这段关系要成长所需要的方向。",
      en: "What this relationship needs in order to grow.",
    },
  },
  {
    id: "outcome",
    name: { ko: "관계의 결실", ja: "関係の実り", zh: "关系的结果", en: "Where This Leads" },
    description: {
      ko: "지금의 흐름이 이어질 때 관계가 향하는 결실입니다.",
      ja: "今の流れが続いた場合に関係が向かう実りです。",
      zh: "若此走向持续，这段关系将结出的果实。",
      en: "What this relationship is moving toward if this flow continues.",
    },
  },
];

/** 10-card extended reading -- Symbolon's own layout, not a Celtic Cross copy. */
export const TEN_CARD_POSITIONS: SpreadPosition[] = [
  {
    id: "situation",
    name: { ko: "현재 상황", ja: "現在の状況", zh: "目前状况", en: "Current Situation" },
    description: {
      ko: "지금 놓인 전체적인 상황입니다.",
      ja: "今置かれている全体的な状況です。",
      zh: "此刻所处的整体状况。",
      en: "The overall situation you're in right now.",
    },
  },
  {
    id: "surface-emotion",
    name: { ko: "표면적 감정", ja: "表面的な感情", zh: "表面的情绪", en: "Surface Emotion" },
    description: {
      ko: "겉으로 드러나 있는 감정입니다.",
      ja: "表に現れている感情です。",
      zh: "显露在外的情绪。",
      en: "The feeling that shows on the surface.",
    },
  },
  {
    id: "hidden-emotion",
    name: { ko: "숨겨진 감정", ja: "隠れた感情", zh: "隐藏的情绪", en: "Hidden Emotion" },
    description: {
      ko: "안으로 감춰둔 진짜 감정입니다.",
      ja: "内側に隠している本当の感情です。",
      zh: "隐藏在内心的真实情绪。",
      en: "The real feeling tucked away underneath.",
    },
  },
  {
    id: "conscious-motive",
    name: { ko: "의식적 동기", ja: "意識的な動機", zh: "有意识的动机", en: "Conscious Motive" },
    description: {
      ko: "스스로 뚜렷하게 알고 있는 동기입니다.",
      ja: "自分でもはっきり分かっている動機です。",
      zh: "你清楚意识到的动机。",
      en: "The motive you're clearly aware of.",
    },
  },
  {
    id: "unconscious-motive",
    name: { ko: "무의식적 동기", ja: "無意識的な動機", zh: "无意识的动机", en: "Unconscious Motive" },
    description: {
      ko: "스스로도 잘 모르는 마음 깊은 곳의 동기입니다.",
      ja: "自分でもよく分からない、心の奥にある動機です。",
      zh: "连你自己都未必清楚的深层动机。",
      en: "A motive deep within that even you may not fully see.",
    },
  },
  {
    id: "past-influence",
    name: { ko: "과거의 영향", ja: "過去の影響", zh: "过去的影响", en: "Influence of the Past" },
    description: {
      ko: "지금에 영향을 준 과거의 경험입니다.",
      ja: "今に影響を与えている過去の経験です。",
      zh: "影响着现在的过去经历。",
      en: "The past experience shaping where you are now.",
    },
  },
  {
    id: "present-test",
    name: { ko: "현재의 시험", ja: "現在の試練", zh: "当下的考验", en: "The Present Test" },
    description: {
      ko: "지금 통과해야 할 시험 같은 지점입니다.",
      ja: "今、乗り越えるべき試練のような地点です。",
      zh: "此刻需要跨越的考验之处。",
      en: "The test you need to get through right now.",
    },
  },
  {
    id: "inner-resource",
    name: { ko: "내면의 자원", ja: "内なる資源", zh: "内在的资源", en: "Inner Resource" },
    description: {
      ko: "지금 활용할 수 있는 내면의 힘입니다.",
      ja: "今活かせる内なる力です。",
      zh: "此刻可以运用的内在力量。",
      en: "The inner strength you can draw on right now.",
    },
  },
  {
    id: "environment",
    name: { ko: "관계와 환경", ja: "関係と環境", zh: "关系与环境", en: "Relationships and Environment" },
    description: {
      ko: "당신을 둘러싼 사람들과 상황입니다.",
      ja: "あなたを取り巻く人々や状況です。",
      zh: "围绕着你的人与状况。",
      en: "The people and circumstances around you.",
    },
  },
  {
    id: "integration",
    name: { ko: "통합의 방향", ja: "統合の方向", zh: "整合的方向", en: "Direction of Integration" },
    description: {
      ko: "지금까지의 흐름을 하나로 통합해가는 방향입니다.",
      ja: "これまでの流れをひとつに統合していく方向です。",
      zh: "将至今为止的走向整合为一体的方向。",
      en: "Where all of this comes together and points next.",
    },
  },
];

export function resolveSymbolonPositions(count: SymbolonCardCount): SpreadPosition[] {
  switch (count) {
    case 1:
      return ONE_CARD_POSITIONS;
    case 3:
      return THREE_CARD_POSITIONS;
    case 5:
      return FIVE_CARD_POSITIONS;
    case 7:
      return SEVEN_CARD_POSITIONS;
    case 10:
      return TEN_CARD_POSITIONS;
  }
}
