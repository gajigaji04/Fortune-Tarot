import type { CardCount, SpreadLayout, SpreadPosition, ThreeCardVariant } from "../types/tarot";

const GENERIC_ADVICE: SpreadPosition = {
  id: "advice",
  name: { ko: "조언", ja: "アドバイス", zh: "建议", en: "Advice" },
  description: {
    ko: "지금 새겨야 할 카드의 조언입니다.",
    ja: "今心に留めておくべきアドバイスです。",
    zh: "此刻应牢记的建议。",
    en: "Advice worth keeping in mind right now.",
  },
};

const GENERIC_OBSTACLE: SpreadPosition = {
  id: "obstacle",
  name: { ko: "장애물", ja: "障害", zh: "障碍", en: "Obstacle" },
  description: {
    ko: "앞을 가로막고 있는 요소입니다.",
    ja: "前を阻んでいる要素です。",
    zh: "阻挡在前方的因素。",
    en: "What's standing in your way.",
  },
};

export const ONE_CARD_POSITIONS: SpreadPosition[] = [
  {
    id: "message",
    name: { ko: "메시지", ja: "メッセージ", zh: "讯息", en: "Message" },
    description: {
      ko: "지금 당신에게 필요한 메시지를 보여주는 카드입니다.",
      ja: "今のあなたに必要なメッセージを示すカードです。",
      zh: "为你揭示此刻所需讯息的一张牌。",
      en: "The card that reveals the message you need right now.",
    },
  },
];

export const THREE_CARD_VARIANTS: ThreeCardVariant[] = [
  {
    id: "general",
    label: { ko: "과거 · 현재 · 미래", ja: "過去 · 現在 · 未来", zh: "过去 · 现在 · 未来", en: "Past · Present · Future" },
    positions: [
      {
        id: "past",
        name: { ko: "과거", ja: "過去", zh: "过去", en: "Past" },
        description: {
          ko: "지금의 상황에 영향을 준 지난 흐름입니다.",
          ja: "今の状況に影響を与えた過去の流れです。",
          zh: "影响现在处境的过去脉络。",
          en: "The past flow that shaped where you are now.",
        },
      },
      {
        id: "present",
        name: { ko: "현재", ja: "現在", zh: "现在", en: "Present" },
        description: {
          ko: "지금 당신이 서 있는 자리를 보여줍니다.",
          ja: "今のあなたが立っている場所を示します。",
          zh: "显示你此刻所处的位置。",
          en: "Where you stand right now.",
        },
      },
      {
        id: "future",
        name: { ko: "미래", ja: "未来", zh: "未来", en: "Future" },
        description: {
          ko: "이대로 흘러갈 경우 다가올 방향입니다.",
          ja: "このまま進んだ場合に訪れる方向です。",
          zh: "若照此发展，即将迎来的方向。",
          en: "Where things are headed if this flow continues.",
        },
      },
    ],
  },
  {
    id: "choice",
    label: { ko: "상황 · 선택 A · 선택 B", ja: "状況 · 選択A · 選択B", zh: "状况 · 选择A · 选择B", en: "Situation · Choice A · Choice B" },
    positions: [
      {
        id: "current-situation",
        name: { ko: "현재 상황", ja: "現在の状況", zh: "目前状况", en: "Current Situation" },
        description: {
          ko: "지금 두 선택 사이에 놓인 상황입니다.",
          ja: "今、二つの選択の間にある状況です。",
          zh: "目前处于两个选择之间的状况。",
          en: "Where you stand between the two choices.",
        },
      },
      {
        id: "choice-a",
        name: { ko: "선택 A", ja: "選択A", zh: "选择A", en: "Choice A" },
        description: {
          ko: "첫 번째 선택을 따라갔을 때의 흐름입니다.",
          ja: "一つ目の選択を選んだ場合の流れです。",
          zh: "选择第一条路时的走向。",
          en: "The flow if you follow the first path.",
        },
      },
      {
        id: "choice-b",
        name: { ko: "선택 B", ja: "選択B", zh: "选择B", en: "Choice B" },
        description: {
          ko: "두 번째 선택을 따라갔을 때의 흐름입니다.",
          ja: "二つ目の選択を選んだ場合の流れです。",
          zh: "选择第二条路时的走向。",
          en: "The flow if you follow the second path.",
        },
      },
    ],
  },
  {
    id: "relationship",
    label: { ko: "나 · 상대방 · 관계", ja: "自分 · 相手 · 関係", zh: "我 · 对方 · 关系", en: "You · The Other · The Relationship" },
    positions: [
      {
        id: "self",
        name: { ko: "나", ja: "自分", zh: "我", en: "You" },
        description: {
          ko: "이 관계 안에서 지금 당신의 마음입니다.",
          ja: "この関係の中での、今のあなたの気持ちです。",
          zh: "你在这段关系中此刻的心情。",
          en: "Your feelings in this relationship right now.",
        },
      },
      {
        id: "other",
        name: { ko: "상대방", ja: "相手", zh: "对方", en: "The Other Person" },
        description: {
          ko: "상대방이 이 관계를 대하는 마음입니다.",
          ja: "相手がこの関係に対して抱いている気持ちです。",
          zh: "对方对这段关系的心情。",
          en: "How the other person feels about this relationship.",
        },
      },
      {
        id: "flow",
        name: { ko: "관계의 흐름", ja: "関係の流れ", zh: "关系走向", en: "The Relationship's Flow" },
        description: {
          ko: "두 사람 사이에 흘러가는 방향입니다.",
          ja: "二人の間に流れていく方向です。",
          zh: "两人之间正在流动的方向。",
          en: "The direction this relationship is moving in.",
        },
      },
    ],
  },
];

export const FIVE_CARD_BY_TOPIC: Record<string, SpreadPosition[]> = {
  career: [
    {
      id: "current-job",
      name: { ko: "현재 직업 상황", ja: "現在の仕事の状況", zh: "目前工作状况", en: "Current Work Situation" },
      description: {
        ko: "지금 당신이 놓인 일의 흐름입니다.",
        ja: "今、あなたが置かれている仕事の流れです。",
        zh: "你目前所处的工作脉络。",
        en: "The flow of work you're currently in.",
      },
    },
    {
      id: "strength",
      name: { ko: "나의 강점", ja: "自分の強み", zh: "我的优势", en: "Your Strength" },
      description: {
        ko: "지금 활용할 수 있는 당신의 힘입니다.",
        ja: "今活かせるあなたの力です。",
        zh: "你现在可以运用的力量。",
        en: "The strength you can draw on right now.",
      },
    },
    GENERIC_OBSTACLE,
    {
      id: "opportunity",
      name: { ko: "앞으로의 기회", ja: "これからの機会", zh: "未来的机会", en: "Coming Opportunity" },
      description: {
        ko: "다가오고 있는 가능성입니다.",
        ja: "近づいてきている可能性です。",
        zh: "正在靠近的可能性。",
        en: "A possibility that's approaching.",
      },
    },
    GENERIC_ADVICE,
  ],
  "job-seeking": [
    {
      id: "current-status",
      name: { ko: "현재 상황", ja: "現在の状況", zh: "目前状况", en: "Current Situation" },
      description: {
        ko: "지금 구직 과정의 흐름입니다.",
        ja: "今の就職活動の流れです。",
        zh: "目前求职过程的走向。",
        en: "The current flow of your job search.",
      },
    },
    {
      id: "readiness",
      name: { ko: "나의 준비 상태", ja: "自分の準備状況", zh: "我的准备状态", en: "Your Readiness" },
      description: {
        ko: "지금 갖추고 있는 역량과 태도입니다.",
        ja: "今備えている力と姿勢です。",
        zh: "你目前具备的能力与态度。",
        en: "The skills and mindset you currently have.",
      },
    },
    GENERIC_OBSTACLE,
    {
      id: "opportunity",
      name: { ko: "다가올 기회", ja: "訪れる機会", zh: "即将到来的机会", en: "Coming Opportunity" },
      description: {
        ko: "가까운 시일에 열릴 수 있는 문입니다.",
        ja: "近いうちに開くかもしれない扉です。",
        zh: "近期可能开启的一扇门。",
        en: "A door that may open soon.",
      },
    },
    GENERIC_ADVICE,
  ],
  study: [
    {
      id: "current-study",
      name: { ko: "현재 학업 상태", ja: "現在の学業状況", zh: "目前学业状态", en: "Current Studies" },
      description: {
        ko: "지금 배움의 흐름입니다.",
        ja: "今の学びの流れです。",
        zh: "目前学习的走向。",
        en: "The current flow of your studies.",
      },
    },
    {
      id: "strength",
      name: { ko: "강점", ja: "強み", zh: "优势", en: "Strength" },
      description: {
        ko: "지금 당신이 가진 학습의 힘입니다.",
        ja: "今あなたが持っている学びの力です。",
        zh: "你目前具备的学习能力。",
        en: "The learning strength you currently have.",
      },
    },
    {
      id: "obstacle",
      name: { ko: "방해 요소", ja: "妨げになる要素", zh: "阻碍因素", en: "Obstacle" },
      description: {
        ko: "집중을 흐트러뜨리는 요인입니다.",
        ja: "集中を乱す要因です。",
        zh: "扰乱专注力的因素。",
        en: "What's disrupting your focus.",
      },
    },
    {
      id: "outcome",
      name: { ko: "성과 가능성", ja: "成果の可能性", zh: "成果的可能性", en: "Possible Outcome" },
      description: {
        ko: "지금 흐름이 이어졌을 때의 결과입니다.",
        ja: "今の流れが続いた場合の結果です。",
        zh: "若照此发展下去的结果。",
        en: "The result if this flow continues.",
      },
    },
    GENERIC_ADVICE,
  ],
  money: [
    {
      id: "current-finance",
      name: { ko: "현재 재정 상태", ja: "現在の金銭状況", zh: "目前财务状况", en: "Current Finances" },
      description: {
        ko: "지금 당신의 재정이 놓인 자리입니다.",
        ja: "今のあなたの金銭状況です。",
        zh: "你目前的财务处境。",
        en: "Where your finances currently stand.",
      },
    },
    {
      id: "inflow",
      name: { ko: "돈이 들어오는 흐름", ja: "お金が入ってくる流れ", zh: "财富流入的方向", en: "Inflow" },
      description: {
        ko: "재물이 들어오는 통로입니다.",
        ja: "お金が入ってくる経路です。",
        zh: "财富进入的渠道。",
        en: "The channel through which money is coming in.",
      },
    },
    {
      id: "outflow",
      name: { ko: "돈이 새어나가는 부분", ja: "お金が出ていく部分", zh: "财富流出的部分", en: "Outflow" },
      description: {
        ko: "주의해야 할 지출의 흐름입니다.",
        ja: "注意すべき支出の流れです。",
        zh: "需要留意的支出走向。",
        en: "Spending patterns worth watching.",
      },
    },
    {
      id: "opportunity",
      name: { ko: "기회", ja: "機会", zh: "机会", en: "Opportunity" },
      description: {
        ko: "재정적으로 열릴 수 있는 가능성입니다.",
        ja: "金銭面で開けるかもしれない可能性です。",
        zh: "财务上可能开启的可能性。",
        en: "A financial possibility that may open up.",
      },
    },
    GENERIC_ADVICE,
  ],
  love: [
    {
      id: "my-feeling",
      name: { ko: "나의 현재 감정", ja: "自分の今の気持ち", zh: "我目前的心情", en: "Your Current Feelings" },
      description: {
        ko: "지금 당신 마음에 흐르는 감정입니다.",
        ja: "今あなたの心に流れている感情です。",
        zh: "此刻在你心中流动的情感。",
        en: "The feelings flowing through you right now.",
      },
    },
    {
      id: "other-state",
      name: { ko: "상대방의 상태", ja: "相手の状態", zh: "对方的状态", en: "The Other Person's State" },
      description: {
        ko: "상대방이 지금 느끼고 있는 마음입니다.",
        ja: "相手が今感じている気持ちです。",
        zh: "对方此刻的感受。",
        en: "What the other person is currently feeling.",
      },
    },
    {
      id: "current-relation",
      name: { ko: "관계의 현재 상황", ja: "関係の現在の状況", zh: "关系目前的状况", en: "Current State of the Relationship" },
      description: {
        ko: "두 사람 사이의 지금 거리입니다.",
        ja: "二人の間の今の距離感です。",
        zh: "两人之间此刻的距离。",
        en: "The current distance between the two of you.",
      },
    },
    {
      id: "obstacle",
      name: { ko: "장애물", ja: "障害", zh: "障碍", en: "Obstacle" },
      description: {
        ko: "관계를 가로막고 있는 요소입니다.",
        ja: "関係を阻んでいる要素です。",
        zh: "阻碍这段关系的因素。",
        en: "What's standing in the relationship's way.",
      },
    },
    {
      id: "flow",
      name: { ko: "앞으로의 흐름", ja: "これからの流れ", zh: "未来的走向", en: "The Path Ahead" },
      description: {
        ko: "관계가 향해 갈 방향입니다.",
        ja: "関係が向かっていく方向です。",
        zh: "这段关系将走向的方向。",
        en: "The direction the relationship is heading.",
      },
    },
  ],
  relationship: [
    {
      id: "current-flow",
      name: { ko: "현재 관계의 흐름", ja: "現在の関係の流れ", zh: "目前关系的走向", en: "Current Flow" },
      description: {
        ko: "지금 관계가 놓인 자리입니다.",
        ja: "今の関係が置かれている状況です。",
        zh: "目前关系所处的位置。",
        en: "Where this relationship currently stands.",
      },
    },
    {
      id: "my-attitude",
      name: { ko: "나의 태도", ja: "自分の姿勢", zh: "我的态度", en: "Your Attitude" },
      description: {
        ko: "당신이 관계 안에서 취하고 있는 태도입니다.",
        ja: "あなたが関係の中で取っている姿勢です。",
        zh: "你在这段关系中所持的态度。",
        en: "The attitude you're bringing to this relationship.",
      },
    },
    {
      id: "their-attitude",
      name: { ko: "상대의 태도", ja: "相手の姿勢", zh: "对方的态度", en: "Their Attitude" },
      description: {
        ko: "상대가 관계 안에서 취하고 있는 태도입니다.",
        ja: "相手が関係の中で取っている姿勢です。",
        zh: "对方在这段关系中所持的态度。",
        en: "The attitude the other person is bringing.",
      },
    },
    {
      id: "conflict",
      name: { ko: "갈등 요소", ja: "対立の要素", zh: "冲突因素", en: "Point of Friction" },
      description: {
        ko: "관계를 어렵게 만드는 요인입니다.",
        ja: "関係を難しくしている要因です。",
        zh: "让这段关系变得困难的因素。",
        en: "What's making this relationship difficult.",
      },
    },
    GENERIC_ADVICE,
  ],
  health: [
    {
      id: "current-condition",
      name: { ko: "현재 컨디션", ja: "今のコンディション", zh: "目前状态", en: "Current Condition" },
      description: {
        ko: "지금 당신의 몸과 마음이 놓인 상태입니다.",
        ja: "今のあなたの心身の状態です。",
        zh: "你目前身心所处的状态。",
        en: "The state your body and mind are in right now.",
      },
    },
    {
      id: "physical",
      name: { ko: "신체적 요인", ja: "身体的な要因", zh: "身体因素", en: "Physical Factor" },
      description: {
        ko: "몸에 영향을 미치는 요소입니다.",
        ja: "体に影響を与える要素です。",
        zh: "影响身体的因素。",
        en: "What's affecting your body.",
      },
    },
    {
      id: "mental",
      name: { ko: "정신적 요인", ja: "精神的な要因", zh: "心理因素", en: "Mental Factor" },
      description: {
        ko: "마음에 영향을 미치는 요소입니다.",
        ja: "心に影響を与える要素です。",
        zh: "影响心理的因素。",
        en: "What's affecting your mind.",
      },
    },
    {
      id: "improvement-advice",
      name: { ko: "개선을 위한 조언", ja: "改善のためのアドバイス", zh: "改善建议", en: "Advice for Improvement" },
      description: {
        ko: "지금 챙겨야 할 카드의 조언입니다.",
        ja: "今気をつけるべきアドバイスです。",
        zh: "此刻应留意的建议。",
        en: "Advice worth heeding right now.",
      },
    },
    {
      id: "flow",
      name: { ko: "앞으로의 흐름", ja: "これからの流れ", zh: "未来的走向", en: "The Path Ahead" },
      description: {
        ko: "컨디션이 향해 갈 방향입니다.",
        ja: "コンディションが向かっていく方向です。",
        zh: "你的状态将走向的方向。",
        en: "The direction your condition is heading.",
      },
    },
  ],
  business: [
    {
      id: "current-business",
      name: { ko: "현재 사업 상황", ja: "現在の事業状況", zh: "目前事业状况", en: "Current Business Situation" },
      description: {
        ko: "지금 사업이 놓인 흐름입니다.",
        ja: "今の事業が置かれている流れです。",
        zh: "目前事业所处的走向。",
        en: "The current flow your business is in.",
      },
    },
    {
      id: "strength",
      name: { ko: "강점", ja: "強み", zh: "优势", en: "Strength" },
      description: {
        ko: "지금 활용할 수 있는 사업의 힘입니다.",
        ja: "今活かせる事業の力です。",
        zh: "目前可以运用的事业优势。",
        en: "The business strength you can draw on.",
      },
    },
    {
      id: "risk",
      name: { ko: "리스크 요소", ja: "リスク要因", zh: "风险因素", en: "Risk Factor" },
      description: {
        ko: "주의해야 할 위험 요인입니다.",
        ja: "注意すべき危険要因です。",
        zh: "需要留意的风险因素。",
        en: "A risk worth watching closely.",
      },
    },
    {
      id: "opportunity",
      name: { ko: "기회", ja: "機会", zh: "机会", en: "Opportunity" },
      description: {
        ko: "사업이 확장될 수 있는 가능성입니다.",
        ja: "事業が広がる可能性です。",
        zh: "事业得以扩展的可能性。",
        en: "A possibility for your business to grow.",
      },
    },
    GENERIC_ADVICE,
  ],
};

/** Topic-neutral fallback used whenever a topic has no curated 5-card layout (e.g. general, yearly). */
export const FIVE_CARD_GENERIC: SpreadPosition[] = [
  {
    id: "situation",
    name: { ko: "현재 상황", ja: "現在の状況", zh: "目前状况", en: "Current Situation" },
    description: {
      ko: "지금 놓인 상황을 보여줍니다.",
      ja: "今置かれている状況を示します。",
      zh: "显示你目前所处的状况。",
      en: "Where things currently stand.",
    },
  },
  {
    id: "influence",
    name: { ko: "영향 요인", ja: "影響を与える要因", zh: "影响因素", en: "Influencing Factor" },
    description: {
      ko: "상황에 영향을 주는 힘입니다.",
      ja: "状況に影響を与えている力です。",
      zh: "正在影响这个状况的力量。",
      en: "A force shaping the situation.",
    },
  },
  {
    id: "core",
    name: { ko: "중심", ja: "中心", zh: "核心", en: "Heart of the Matter" },
    description: {
      ko: "이 흐름의 핵심을 보여줍니다.",
      ja: "この流れの核心を示します。",
      zh: "揭示这股走向的核心。",
      en: "The core of what's unfolding.",
    },
  },
  GENERIC_OBSTACLE,
  GENERIC_ADVICE,
];

/** Celtic Cross is topic-neutral: the same ten positions regardless of what you're asking about. */
export const CELTIC_CROSS_POSITIONS: SpreadPosition[] = [
  {
    id: "present",
    name: { ko: "현재", ja: "現在", zh: "现在", en: "Present" },
    description: {
      ko: "지금 당신이 서 있는 자리입니다.",
      ja: "今のあなたが立っている場所です。",
      zh: "你此刻所处的位置。",
      en: "Where you stand right now.",
    },
  },
  {
    id: "obstacle",
    name: { ko: "장애물", ja: "障害", zh: "障碍", en: "Obstacle" },
    description: {
      ko: "당신을 가로막고 있는 요소입니다.",
      ja: "あなたを阻んでいる要素です。",
      zh: "阻挡在你面前的因素。",
      en: "What's standing in your way.",
    },
  },
  {
    id: "conscious",
    name: { ko: "의식", ja: "意識", zh: "意识", en: "Conscious Mind" },
    description: {
      ko: "당신이 뚜렷하게 의식하고 있는 목표나 생각입니다.",
      ja: "あなたがはっきりと意識している目標や考えです。",
      zh: "你清楚意识到的目标或想法。",
      en: "The goal or thought you're clearly aware of.",
    },
  },
  {
    id: "unconscious",
    name: { ko: "무의식", ja: "無意識", zh: "潜意识", en: "Unconscious Mind" },
    description: {
      ko: "스스로도 잘 모르는 마음 깊은 곳의 흐름입니다.",
      ja: "自分でもよく分からない、心の奥にある流れです。",
      zh: "连你自己都未必察觉的深层心理流动。",
      en: "A current deep within you that even you may not fully see.",
    },
  },
  {
    id: "past",
    name: { ko: "과거", ja: "過去", zh: "过去", en: "Past" },
    description: {
      ko: "지금에 영향을 준 지나온 시간입니다.",
      ja: "今に影響を与えた過去の時間です。",
      zh: "影响现在的过去时光。",
      en: "The past that shaped where you are now.",
    },
  },
  {
    id: "near-future",
    name: { ko: "가까운 미래", ja: "近い未来", zh: "近期未来", en: "Near Future" },
    description: {
      ko: "곧 다가올 흐름입니다.",
      ja: "もうすぐ訪れる流れです。",
      zh: "即将到来的走向。",
      en: "What's coming soon.",
    },
  },
  {
    id: "self",
    name: { ko: "자기 자신", ja: "あなた自身", zh: "你自己", en: "Yourself" },
    description: {
      ko: "지금 이 상황을 대하는 당신의 태도입니다.",
      ja: "今この状況に対するあなたの姿勢です。",
      zh: "你面对这个状况的态度。",
      en: "Your attitude toward this situation.",
    },
  },
  {
    id: "environment",
    name: { ko: "주변 환경", ja: "周囲の環境", zh: "周围环境", en: "Surrounding Environment" },
    description: {
      ko: "당신을 둘러싼 사람들과 상황입니다.",
      ja: "あなたを取り巻く人々や状況です。",
      zh: "围绕着你的人与状况。",
      en: "The people and circumstances around you.",
    },
  },
  {
    id: "hopes-fears",
    name: { ko: "희망과 두려움", ja: "希望と恐れ", zh: "希望与恐惧", en: "Hopes and Fears" },
    description: {
      ko: "마음 깊이 바라는 것과 동시에 두려워하는 것입니다.",
      ja: "心の奥で望んでいると同時に恐れていることです。",
      zh: "内心深处既渴望又恐惧的事。",
      en: "What you deeply hope for and fear at once.",
    },
  },
  {
    id: "outcome",
    name: { ko: "최종 결과", ja: "最終結果", zh: "最终结果", en: "Final Outcome" },
    description: {
      ko: "지금의 흐름이 향하는 최종적인 결말입니다.",
      ja: "今の流れが向かう最終的な結末です。",
      zh: "目前走向所指向的最终结局。",
      en: "Where this current path ultimately leads.",
    },
  },
];

export function layoutForCount(count: CardCount): SpreadLayout {
  switch (count) {
    case 1:
      return "single";
    case 3:
      return "row";
    case 5:
      return "pentagon";
    case 10:
      return "celtic-cross";
  }
}

export function resolvePositions(topicId: string, count: CardCount, threeVariantId?: string): SpreadPosition[] {
  switch (count) {
    case 1:
      return ONE_CARD_POSITIONS;
    case 3: {
      const variant =
        THREE_CARD_VARIANTS.find((v) => v.id === threeVariantId) ?? THREE_CARD_VARIANTS[0];
      return variant.positions;
    }
    case 5:
      return FIVE_CARD_BY_TOPIC[topicId] ?? FIVE_CARD_GENERIC;
    case 10:
      return CELTIC_CROSS_POSITIONS;
  }
}
