import type { TarotCard } from "../../types/tarot";

export const majorArcana: TarotCard[] = [
  {
    id: "major-00-fool",
    name: "The Fool",
    nameKo: "바보",
    arcana: "major",
    number: 0,
    keywords: {
      upright: ["새로운 시작", "자유", "모험", "순수함"],
      reversed: ["무모함", "준비 부족", "불안정", "경솔함"],
    },
    interpretation: {
      upright:
        "아무것도 정해지지 않은 하얀 여백에서 새로운 여정이 시작됩니다. 두려움보다 호기심을 따라 첫걸음을 내디딜 때이며, 완벽한 계획보다 순수한 믿음이 더 큰 힘이 됩니다.",
      reversed:
        "준비 없이 뛰어들려는 조급함이나, 반대로 두려움에 발이 묶여 한 걸음도 떼지 못하는 상태를 보여줍니다. 지금은 무모한 결정을 잠시 멈추고 현실을 점검해야 할 때입니다.",
    },
    summary: "정해지지 않은 길 앞에 선 순수한 시작의 카드.",
  },
  {
    id: "major-01-magician",
    name: "The Magician",
    nameKo: "마법사",
    arcana: "major",
    number: 1,
    keywords: {
      upright: ["능력", "창조", "실행력", "집중"],
      reversed: ["속임수", "능력 낭비", "조작", "자신감 결여"],
    },
    interpretation: {
      upright:
        "필요한 도구와 재능은 이미 당신의 손 안에 있습니다. 의지를 하나로 모아 행동으로 옮기면 원하는 결과를 현실로 만들어낼 수 있는 시기입니다.",
      reversed:
        "가진 재능을 제대로 쓰지 못하거나, 말과 행동이 다른 상황을 조심해야 합니다. 누군가의 그럴듯한 말에 속아 판단이 흐려질 수 있습니다.",
    },
    summary: "의지와 재능으로 현실을 빚어내는 창조의 카드.",
  },
  {
    id: "major-02-high-priestess",
    name: "The High Priestess",
    nameKo: "여사제",
    arcana: "major",
    number: 2,
    keywords: {
      upright: ["직관", "신비", "내면의 지혜", "침묵"],
      reversed: ["비밀", "억눌린 직관", "표면적 이해", "혼란"],
    },
    interpretation: {
      upright:
        "논리보다 직감이 먼저 답을 알고 있는 시기입니다. 서두르지 말고 조용히 내면의 목소리에 귀 기울이면 숨겨진 진실이 서서히 드러납니다.",
      reversed:
        "자신의 직관을 믿지 못하거나 중요한 정보가 아직 감춰져 있는 상태입니다. 겉으로 드러난 것만으로 성급히 판단하지 않도록 주의하세요.",
    },
    summary: "고요함 속에서 진실을 알아차리는 직관의 카드.",
  },
  {
    id: "major-03-empress",
    name: "The Empress",
    nameKo: "여황제",
    arcana: "major",
    number: 3,
    keywords: {
      upright: ["풍요", "성장", "돌봄", "창조성"],
      reversed: ["정체", "과잉보호", "창조력 고갈", "의존"],
    },
    interpretation: {
      upright:
        "씨앗이 뿌리를 내리고 자연스럽게 자라나듯, 노력이 결실로 이어지는 풍요로운 시기입니다. 스스로를 돌보고 주변을 살피는 마음이 좋은 결과를 부릅니다.",
      reversed:
        "지나친 보살핌이 오히려 부담이 되거나, 반대로 자신을 돌보는 일을 소홀히 하고 있지는 않은지 돌아볼 때입니다. 성장의 흐름이 잠시 멈춰 있을 수 있습니다.",
    },
    summary: "자연스러운 풍요와 돌봄이 깃드는 성장의 카드.",
  },
  {
    id: "major-04-emperor",
    name: "The Emperor",
    nameKo: "황제",
    arcana: "major",
    number: 4,
    keywords: {
      upright: ["안정", "질서", "리더십", "책임감"],
      reversed: ["경직", "독단", "통제 상실", "권위 남용"],
    },
    interpretation: {
      upright:
        "체계와 원칙을 세워 상황을 안정적으로 이끌어갈 힘이 있습니다. 책임을 회피하지 않고 명확한 기준을 세울 때 신뢰가 쌓입니다.",
      reversed:
        "지나치게 통제하려 하거나 융통성 없는 태도가 오히려 관계와 상황을 경직시킬 수 있습니다. 원칙에 매몰되어 유연함을 잃지 않도록 주의하세요.",
    },
    summary: "질서와 원칙으로 상황을 다스리는 안정의 카드.",
  },
  {
    id: "major-05-hierophant",
    name: "The Hierophant",
    nameKo: "교황",
    arcana: "major",
    number: 5,
    keywords: {
      upright: ["전통", "가르침", "조언", "신념"],
      reversed: ["형식주의", "관습에 대한 반발", "독선", "잘못된 조언"],
    },
    interpretation: {
      upright:
        "검증된 방식과 경험 많은 이의 조언이 지금의 길을 든든하게 밝혀줍니다. 관습이나 원칙을 존중하는 태도가 도움이 되는 시기입니다.",
      reversed:
        "낡은 규범에 얽매이거나 남의 기준에 나를 억지로 맞추고 있지는 않은지 점검해야 합니다. 정해진 틀을 벗어난 나만의 방식이 필요할 수 있습니다.",
    },
    summary: "전통과 가르침에서 길을 찾는 신념의 카드.",
  },
  {
    id: "major-06-lovers",
    name: "The Lovers",
    nameKo: "연인",
    arcana: "major",
    number: 6,
    keywords: {
      upright: ["사랑", "조화", "선택", "가치관의 일치"],
      reversed: ["불균형", "갈등", "잘못된 선택", "가치관 충돌"],
    },
    interpretation: {
      upright:
        "마음이 이끄는 진실한 연결과 중요한 선택의 순간을 상징합니다. 서로의 가치관이 맞닿아 있을 때 관계는 더욱 깊어집니다.",
      reversed:
        "관계 안의 불균형이나 소통 부족이 갈등으로 이어질 수 있습니다. 감정에 휩쓸린 선택이 후회를 남기지 않도록 신중해야 합니다.",
    },
    summary: "마음의 이끌림과 선택이 맞물리는 사랑의 카드.",
  },
  {
    id: "major-07-chariot",
    name: "The Chariot",
    nameKo: "전차",
    arcana: "major",
    number: 7,
    keywords: {
      upright: ["의지", "승리", "추진력", "자기 통제"],
      reversed: ["방향 상실", "충돌", "과신", "통제력 상실"],
    },
    interpretation: {
      upright:
        "서로 다른 힘들을 하나의 방향으로 모아 밀고 나아갈 때 승리가 따라옵니다. 강한 의지와 집중력이 목표를 현실로 이끕니다.",
      reversed:
        "목표와 방향이 흔들리거나 내부의 갈등이 앞으로 나아가는 힘을 갉아먹고 있습니다. 속도를 늦추고 방향을 다시 점검할 때입니다.",
    },
    summary: "흩어진 힘을 모아 목표로 질주하는 의지의 카드.",
  },
  {
    id: "major-08-strength",
    name: "Strength",
    nameKo: "힘",
    arcana: "major",
    number: 8,
    keywords: {
      upright: ["용기", "인내", "부드러운 힘", "자기 확신"],
      reversed: ["자기 의심", "조급함", "감정 통제 실패", "나약함"],
    },
    interpretation: {
      upright:
        "거친 힘이 아닌 부드럽고 꾸준한 용기로 어려움을 다스릴 수 있습니다. 스스로를 믿는 마음이 가장 강력한 무기가 됩니다.",
      reversed:
        "자신감이 흔들리거나 감정을 억누르지 못해 상황을 그르칠 수 있습니다. 조급하게 힘으로 밀어붙이기보다 잠시 숨을 고를 필요가 있습니다.",
    },
    summary: "부드러움으로 거친 상황을 다스리는 용기의 카드.",
  },
  {
    id: "major-09-hermit",
    name: "The Hermit",
    nameKo: "은둔자",
    arcana: "major",
    number: 9,
    keywords: {
      upright: ["성찰", "고독", "내면 탐구", "지혜"],
      reversed: ["고립", "회피", "외로움", "길을 잃음"],
    },
    interpretation: {
      upright:
        "잠시 세상의 소음에서 물러나 홀로 등불을 밝히고 자신을 돌아볼 시기입니다. 고독 속에서 얻은 통찰이 다음 걸음의 방향을 알려줍니다.",
      reversed:
        "필요 이상으로 스스로를 고립시키거나 현실을 회피하고 있을 수 있습니다. 혼자만의 생각에 갇혀 길을 잃지 않도록 주의하세요.",
    },
    summary: "홀로 등불을 밝혀 내면을 비추는 성찰의 카드.",
  },
  {
    id: "major-10-wheel-of-fortune",
    name: "Wheel of Fortune",
    nameKo: "운명의 수레바퀴",
    arcana: "major",
    number: 10,
    keywords: {
      upright: ["전환점", "운명", "변화", "기회"],
      reversed: ["불운", "저항", "정체된 흐름", "반복되는 문제"],
    },
    interpretation: {
      upright:
        "삶의 흐름이 크게 바뀌는 전환점에 서 있습니다. 예상치 못한 기회가 찾아올 수 있으니 변화의 흐름을 거스르기보다 함께 흘러가 보세요.",
      reversed:
        "원하는 방향과 반대로 흘러가는 듯한 정체감이나 반복되는 어려움을 느낄 수 있습니다. 흐름에 저항하기보다 잠시 기다리는 지혜가 필요합니다.",
    },
    summary: "삶의 방향이 크게 회전하는 전환의 카드.",
  },
  {
    id: "major-11-justice",
    name: "Justice",
    nameKo: "정의",
    arcana: "major",
    number: 11,
    keywords: {
      upright: ["공정함", "균형", "인과", "결단"],
      reversed: ["불공정", "편견", "책임 회피", "불균형"],
    },
    interpretation: {
      upright:
        "지금까지의 선택과 행동에 합당한 결과가 저울 위에 오릅니다. 감정을 배제하고 사실에 근거해 공정한 결정을 내릴 때입니다.",
      reversed:
        "한쪽으로 치우친 판단이나 책임을 회피하려는 태도가 문제를 키울 수 있습니다. 자신에게 유리한 방향으로만 상황을 보고 있지 않은지 점검하세요.",
    },
    summary: "원인과 결과가 저울 위에서 균형을 찾는 공정의 카드.",
  },
  {
    id: "major-12-hanged-man",
    name: "The Hanged Man",
    nameKo: "매달린 사람",
    arcana: "major",
    number: 12,
    keywords: {
      upright: ["멈춤", "새로운 관점", "기다림", "내려놓음"],
      reversed: ["정체", "무의미한 희생", "저항", "지연에 대한 조바심"],
    },
    interpretation: {
      upright:
        "지금은 애써 나아가기보다 잠시 멈추어 다른 각도에서 상황을 바라볼 때입니다. 통제하려는 마음을 내려놓으면 뜻밖의 깨달음이 찾아옵니다.",
      reversed:
        "의미 없이 상황을 질질 끌고 있거나, 멈춰야 할 때 억지로 버티고 있을 수 있습니다. 헛된 희생이 되지 않도록 흐름을 다시 살펴보세요.",
    },
    summary: "멈춤 속에서 다른 관점을 얻는 기다림의 카드.",
  },
  {
    id: "major-13-death",
    name: "Death",
    nameKo: "죽음",
    arcana: "major",
    number: 13,
    keywords: {
      upright: ["끝과 시작", "변화", "정리", "재생"],
      reversed: ["변화에 대한 저항", "미련", "정체", "두려움"],
    },
    interpretation: {
      upright:
        "하나의 단계가 끝나야 다음이 시작될 수 있습니다. 두려워하기보다 낡은 것을 놓아줄 때 진정한 재생의 문이 열립니다.",
      reversed:
        "끝나야 할 것을 붙잡고 놓지 못해 앞으로 나아가지 못하고 있습니다. 변화에 대한 두려움이 오히려 상황을 더 힘들게 만들고 있습니다.",
    },
    summary: "끝을 통과해야 새로움이 시작되는 변화의 카드.",
  },
  {
    id: "major-14-temperance",
    name: "Temperance",
    nameKo: "절제",
    arcana: "major",
    number: 14,
    keywords: {
      upright: ["균형", "조화", "인내", "치유"],
      reversed: ["과잉", "불균형", "조급함", "부조화"],
    },
    interpretation: {
      upright:
        "서로 다른 요소들을 천천히 섞어 조화를 이루는 시기입니다. 극단으로 치닫지 않고 중용을 지킬 때 안정된 흐름이 만들어집니다.",
      reversed:
        "한쪽으로 치우친 생활이나 조급한 태도가 균형을 무너뜨리고 있습니다. 무리한 속도를 늦추고 절제하는 태도가 필요합니다.",
    },
    summary: "서로 다른 것들을 조화롭게 섞어내는 균형의 카드.",
  },
  {
    id: "major-15-devil",
    name: "The Devil",
    nameKo: "악마",
    arcana: "major",
    number: 15,
    keywords: {
      upright: ["속박", "집착", "유혹", "물질적 욕망"],
      reversed: ["속박에서의 해방", "자각", "극복", "회복"],
    },
    interpretation: {
      upright:
        "익숙하지만 나를 옥죄는 습관, 관계, 욕망에 매여 있지 않은지 돌아보아야 합니다. 스스로 사슬을 채우고 있다는 사실을 자각하는 것이 첫걸음입니다.",
      reversed:
        "오랫동안 나를 붙잡고 있던 속박에서 벗어나기 시작하는 시기입니다. 문제를 직시하고 끊어낼 용기가 생기고 있습니다.",
    },
    summary: "스스로 채운 사슬을 직시하게 하는 속박의 카드.",
  },
  {
    id: "major-16-tower",
    name: "The Tower",
    nameKo: "탑",
    arcana: "major",
    number: 16,
    keywords: {
      upright: ["급격한 변화", "붕괴", "충격적 깨달음", "해방"],
      reversed: ["변화 회피", "지연된 붕괴", "내적 동요", "두려움"],
    },
    interpretation: {
      upright:
        "겉으로는 견고해 보였지만 속으로 무너지고 있던 것이 한순간에 드러납니다. 고통스럽지만 이 붕괴는 더 튼튼한 기반을 세우기 위한 과정입니다.",
      reversed:
        "예상하지 못했던 변화나 기존 구조의 붕괴를 애써 피하려는 심리가 나타날 수 있습니다. 문제를 미룰수록 충격은 더 커질 수 있습니다.",
    },
    summary: "무너져야 다시 세울 수 있는 급격한 전환의 카드.",
  },
  {
    id: "major-17-star",
    name: "The Star",
    nameKo: "별",
    arcana: "major",
    number: 17,
    keywords: {
      upright: ["희망", "치유", "영감", "회복"],
      reversed: ["절망", "믿음의 상실", "자신감 결여", "단절"],
    },
    interpretation: {
      upright:
        "어두운 시기를 지나 다시 희망의 빛이 비치기 시작합니다. 조용히 스스로를 치유하며 미래를 향한 믿음을 회복할 때입니다.",
      reversed:
        "희망을 잃고 스스로에 대한 믿음이 흔들리고 있을 수 있습니다. 지금의 어둠이 영원하지 않다는 사실을 잊지 않아야 합니다.",
    },
    summary: "어둠 뒤에 찾아오는 조용한 희망의 카드.",
  },
  {
    id: "major-18-moon",
    name: "The Moon",
    nameKo: "달",
    arcana: "major",
    number: 18,
    keywords: {
      upright: ["불확실성", "무의식", "환상", "두려움"],
      reversed: ["혼란 해소", "숨겨진 진실이 드러남", "불안 완화", "착각에서 깨어남"],
    },
    interpretation: {
      upright:
        "모든 것이 명확하지 않은 안개 속을 걷는 듯한 시기입니다. 막연한 불안에 휘둘리기보다 직감을 믿고 한 걸음씩 나아가야 합니다.",
      reversed:
        "그동안 혼란스러웠던 상황이나 감춰져 있던 진실이 서서히 밝혀지기 시작합니다. 근거 없는 불안이 가라앉고 있습니다.",
    },
    summary: "안개 속에서 직감으로 길을 찾는 불확실성의 카드.",
  },
  {
    id: "major-19-sun",
    name: "The Sun",
    nameKo: "태양",
    arcana: "major",
    number: 19,
    keywords: {
      upright: ["성공", "활력", "기쁨", "명료함"],
      reversed: ["일시적 침체", "과도한 낙관", "성취 지연", "활력 저하"],
    },
    interpretation: {
      upright:
        "구름이 걷히고 모든 것이 선명하게 드러나는 밝은 시기입니다. 노력한 만큼의 성취와 기쁨을 온전히 누릴 수 있습니다.",
      reversed:
        "밝은 결과가 예상보다 늦어지거나 활기가 다소 꺾여 있을 수 있습니다. 지나친 낙관으로 중요한 부분을 놓치지 않도록 주의하세요.",
    },
    summary: "구름이 걷히고 성취가 선명해지는 태양의 카드.",
  },
  {
    id: "major-20-judgement",
    name: "Judgement",
    nameKo: "심판",
    arcana: "major",
    number: 20,
    keywords: {
      upright: ["각성", "재평가", "부름", "새로운 소명"],
      reversed: ["자기 비판", "결단의 지연", "과거에 대한 미련", "부름을 외면함"],
    },
    interpretation: {
      upright:
        "지나온 시간을 돌아보며 스스로를 새롭게 평가하고 다음 단계로 나아갈 부름을 받는 시기입니다. 용기를 내어 진짜 원하는 방향으로 응답해야 합니다.",
      reversed:
        "과거의 잘못이나 실패에 지나치게 얽매여 앞으로 나아가지 못하고 있을 수 있습니다. 스스로에게 지나치게 가혹한 잣대를 들이대고 있지 않은지 살펴보세요.",
    },
    summary: "지나온 길을 돌아보고 새 소명에 응답하는 각성의 카드.",
  },
  {
    id: "major-21-world",
    name: "The World",
    nameKo: "세계",
    arcana: "major",
    number: 21,
    keywords: {
      upright: ["완성", "성취", "통합", "다음 단계로의 도약"],
      reversed: ["미완성", "지연", "마무리 부족", "정체"],
    },
    interpretation: {
      upright:
        "긴 여정이 하나의 원을 그리며 완성되는 순간입니다. 이룬 것을 온전히 인정하고 다음 여정을 향해 새롭게 나아갈 준비가 되어 있습니다.",
      reversed:
        "거의 다 왔지만 마지막 매듭을 짓지 못하고 있는 상태일 수 있습니다. 조급하게 끝내려 하기보다 남은 부분을 차분히 마무리해야 합니다.",
    },
    summary: "긴 여정이 하나의 원으로 완성되는 성취의 카드.",
  },
];
