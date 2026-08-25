import type { Topic } from "../types/tarot";

export const topics: Topic[] = [
  {
    id: "general",
    // Deliberately without a trailing "reading/리딩/占卜" word: this name is
    // interpolated into "{{topic}} 리딩이 펼쳐졌습니다" style sentences, and a
    // trailing "reading" here would double up with that template's own word.
    name: { ko: "일반", ja: "総合", zh: "综合", en: "General" },
    description: {
      ko: "특정 주제 없이 지금 필요한 메시지를 살펴봅니다.",
      ja: "特定のテーマを決めずに、今必要なメッセージを見てみましょう。",
      zh: "不设定特定主题，看看你现在需要的讯息。",
      en: "No fixed theme -- see what message you need right now.",
    },
    defaultCount: 1,
    defaultQuestion: {
      ko: "오늘 나에게 필요한 메시지는 무엇일까요?",
      ja: "今日、私に必要なメッセージは何でしょうか？",
      zh: "今天我需要的讯息是什么？",
      en: "What message do I need today?",
    },
  },
  {
    id: "career",
    name: { ko: "직업운", ja: "仕事運", zh: "职业运", en: "Career" },
    description: {
      ko: "지금의 자리에서 앞으로 나아갈 방향을 짚어봅니다.",
      ja: "今の仕事の状況から、これから進むべき方向を見てみましょう。",
      zh: "从目前的工作状况，看看未来该往哪个方向前进。",
      en: "See where your current work is headed.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "지금 하는 일이 앞으로 어떻게 흘러갈까요?",
      ja: "今の仕事はこれからどうなっていくでしょうか？",
      zh: "我现在的工作接下来会如何发展？",
      en: "How will my current work unfold?",
    },
  },
  {
    id: "job-seeking",
    name: { ko: "취업운", ja: "就職運", zh: "求职运", en: "Job Search" },
    description: {
      ko: "구직의 흐름과 준비된 것, 그리고 다가올 기회를 살펴봅니다.",
      ja: "就職活動の流れと、今の準備、これから訪れる機会を見てみましょう。",
      zh: "看看求职的走向、目前的准备，以及即将到来的机会。",
      en: "See how your job search is going and what's coming.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "이번 취업 준비는 어떻게 흘러갈까요?",
      ja: "今回の就職活動はどのように進んでいくでしょうか？",
      zh: "这次求职会如何发展？",
      en: "How will this job search go?",
    },
  },
  {
    id: "study",
    name: { ko: "학업운", ja: "学業運", zh: "学业运", en: "Studies" },
    description: {
      ko: "지금의 배움이 어디로 향하고 있는지 살펴봅니다.",
      ja: "今の学びがどこへ向かっているのかを見てみましょう。",
      zh: "看看目前的学习正走向何方。",
      en: "See where your current studies are leading.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "지금의 공부는 좋은 결실로 이어질까요?",
      ja: "今の勉強はよい結果につながるでしょうか？",
      zh: "现在的学习会有好的结果吗？",
      en: "Will my current studies pay off?",
    },
  },
  {
    id: "money",
    name: { ko: "경제운", ja: "金運", zh: "财运", en: "Finances" },
    description: {
      ko: "재물의 흐름이 어디서 들어오고 어디로 새어나가는지 살펴봅니다.",
      ja: "お金がどこから入り、どこへ出ていくのかを見てみましょう。",
      zh: "看看财运从哪里来，又流向何处。",
      en: "See where your money is flowing in from -- and out to.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "요즘 나의 재정 상태는 어떤 흐름일까요?",
      ja: "最近の私の金運はどんな流れでしょうか？",
      zh: "最近我的财运走势如何？",
      en: "What's the current flow of my finances?",
    },
  },
  {
    id: "love",
    name: { ko: "애정운", ja: "恋愛運", zh: "爱情运", en: "Love" },
    description: {
      ko: "나와 상대, 그리고 관계가 향하는 곳을 살펴봅니다.",
      ja: "自分と相手、そして二人の関係の行方を見てみましょう。",
      zh: "看看你、对方，以及这段关系将走向何方。",
      en: "See where you, the other person, and the relationship are headed.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "이 사람과의 관계는 어떻게 될까요?",
      ja: "この人との関係はどうなっていくでしょうか？",
      zh: "我和这个人的关系会如何发展？",
      en: "How will things go with this person?",
    },
  },
  {
    id: "relationship",
    name: { ko: "인간관계운", ja: "人間関係運", zh: "人际运", en: "Relationships" },
    description: {
      ko: "주변 사람들과의 관계 흐름을 살펴봅니다.",
      ja: "周りの人たちとの関係の流れを見てみましょう。",
      zh: "看看你和周围人的关系走向。",
      en: "See how things stand with the people around you.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "요즘 인간관계는 어떤 흐름일까요?",
      ja: "最近の人間関係はどんな流れでしょうか？",
      zh: "最近的人际关系走向如何？",
      en: "How are my relationships flowing these days?",
    },
  },
  {
    id: "health",
    name: { ko: "건강운", ja: "健康運", zh: "健康运", en: "Health" },
    description: {
      ko: "몸과 마음의 흐름을 함께 짚어봅니다.",
      ja: "体と心、両方の流れを見てみましょう。",
      zh: "一起看看身体与心理的状态。",
      en: "Check in on both body and mind.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "요즘 나의 몸과 마음 상태는 어떨까요?",
      ja: "最近の私の心身の状態はどうでしょうか？",
      zh: "最近我的身心状态如何？",
      en: "How are my body and mind doing lately?",
    },
  },
  {
    id: "business",
    name: { ko: "사업운", ja: "事業運", zh: "事业运", en: "Business" },
    description: {
      ko: "사업의 현재와 리스크, 기회를 함께 살펴봅니다.",
      ja: "事業の現状とリスク、機会を見てみましょう。",
      zh: "看看事业目前的状况、风险与机会。",
      en: "See your venture's current standing, risks, and opportunities.",
    },
    defaultCount: 5,
    defaultQuestion: {
      ko: "지금 진행 중인 사업은 어떻게 될까요?",
      ja: "今進めている事業はどうなっていくでしょうか？",
      zh: "目前进行中的事业会如何发展？",
      en: "How will my current business venture go?",
    },
  },
  {
    id: "yearly",
    name: { ko: "올해의 운세", ja: "今年の運勢", zh: "今年运势", en: "This Year" },
    description: {
      ko: "한 해의 흐름을 켈틱 크로스로 깊이 있게 살펴봅니다.",
      ja: "一年の流れをケルト十字で深く見つめます。",
      zh: "用凯尔特十字牌阵深入探索这一年的走向。",
      en: "A deep Celtic Cross look at the year ahead.",
    },
    defaultCount: 10,
    defaultQuestion: {
      ko: "올해는 나에게 어떤 한 해가 될까요?",
      ja: "今年は私にとってどんな一年になるでしょうか？",
      zh: "今年对我来说会是怎样的一年？",
      en: "What kind of year will this be for me?",
    },
  },
];

const topicsById = new Map(topics.map((topic) => [topic.id, topic]));

export function getTopicById(id: string): Topic | undefined {
  return topicsById.get(id);
}
