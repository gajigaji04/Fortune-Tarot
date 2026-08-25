# THE ARCANA · 더 아르카나

오래된 유럽 점집의 분위기를 담은 반응형 타로 점술 웹서비스입니다. 78장(메이저 22 + 마이너 56)의
카드로 오늘의 운세, 3장 타로, 분야별 운세(직업·취업·학업·경제·애정·인간관계·건강·사업), 올해의
운세(켈틱 크로스)를 볼 수 있으며, 한국어/日本語/中文/English 4개 언어를 지원합니다.

## 기술 스택

- React 18 + TypeScript + Vite
- React Router (클라이언트 라우팅)
- react-i18next + i18next-browser-languagedetector (4개 언어, localStorage에 언어 저장)
- 순수 CSS Modules + 전역 CSS 변수(디자인 토큰) — Tailwind 미사용
- 카드 아트는 이미지 파일 없이 전부 SVG/CSS로 그려서 가볍게 유지 (`imagePath` 필드는 향후 실제
  이미지로 교체할 때를 위한 자리만 잡아둔 상태 — `public/assets/tarot/{major,wands,cups,swords,
  pentacles}/`에 폴더만 미리 만들어 두었습니다)
- 백엔드 없음. 저장한 리딩은 브라우저 `localStorage`에만 보관(보관함)

## 시작하기

```bash
npm install
npm run dev       # http://localhost:5173
```

```bash
npm run build      # 타입 체크 + production build (dist/)
npm run preview    # 빌드 결과 미리보기
npm run lint        # eslint
```

## 프로젝트 구조

```
src/
├── components/
│   ├── tarot/        카드/카드 선택/스프레드/해석 UI (cardArt/ 하위에 SVG 카드 일러스트)
│   ├── layout/         Header, Footer, PageShell
│   └── common/          Button, Divider, LanguageSwitcher 등 공용 UI
├── pages/                HomePage, ReadingPage, CardsListPage, CardMeaningPage, VaultPage,
│                          VaultDetailPage, LearnPage, PrivacyPage, TermsPage
├── data/
│   ├── cards/             78장 카드 원본 데이터(한국어) + translations/{ja,zh,en}.ts 번역 오버레이
│   ├── topics.ts           점술 종류(직업운/애정운/올해의 운세 등) — 카드 수와 분리되어 있음
│   └── positionTemplates.ts  카드 수(1/3/5/10)별 포지션 템플릿 + topic별 커스텀 5장 세트
├── i18n/                  react-i18next 설정
├── locales/                {ko,ja,zh,en}/translation.json (UI 문자열)
├── services/
│   └── interpretationService.ts   카드+포지션 조합 해석 로직 (추후 LLM 연동을 위한 인터페이스)
├── hooks/                  useCardSelection, useVault, useReducedMotion, useLang
├── utils/                   shuffle, orientation, cardLabels, slug, i18n(getLocalized) 등
├── types/tarot.ts           핵심 타입 정의 (Localized<T>, Topic, SpreadPosition 등)
└── styles/                   tokens.css(디자인 토큰, [data-lang]별 CJK 폰트 스위칭, --card-aspect), global.css
```

## 다국어 아키텍처

두 종류의 텍스트를 분리해서 관리합니다.

- **UI 문자열**(버튼, 안내문, aria-label 등): `react-i18next` + `src/locales/*/translation.json`,
  컴포넌트에서 `t("reading.selectCount")` 형태로 사용.
- **도메인 데이터**(카드 이름/키워드/해석, 점술 종류·포지션 이름): 데이터 파일 안에
  `Localized<T> = Record<Lang, T>` 필드로 보관하고, `getLocalized(value, lang)`으로 꺼내 씁니다.
  번역이 아직 없는 언어는 `lang → en → ko` 순으로 자동 폴백하므로 항상 안전하게 렌더링됩니다.
- 언어 전환 UI는 **Header(+모바일 메뉴)에만** 있습니다. Footer에는 없습니다.

## 주요 기능

- **직접 카드 선택**: 셔플 애니메이션 후 자동으로 카드가 배정되지 않고, 사용자가 뒷면 카드 더미에서
  원하는 수만큼 직접 카드를 클릭해서 고릅니다. 카드 종류는 선택으로, 정/역방향은 선택되는 순간
  무작위로 결정됩니다. 카드 더미는 화면 크기별로 **고정 열 수**(모바일 3열 / 태블릿 4열 / 데스크톱
  auto-fit)로 배치되어, 화면이 좁아져도 카드가 계속 작아지지 않습니다.
- **카드 수(1/3/5/10장)를 점술 종류와 독립적으로 선택**할 수 있습니다(`src/data/positionTemplates.ts`
  의 `resolvePositions(topicId, count, threeVariantId?)`).
- **뽑기만 하기 / 해석 보기** 두 가지 모드.
- **켈틱 크로스**(10장)의 전통적인 십자+기둥 겹침 배치는 여백이 충분한 **데스크톱(≥1024px)에서만**
  쓰고, 모바일·태블릿에서는 겹치지 않는 세로 목록으로 재배치됩니다. **5장**은 부채꼴(오각) 배치.
- **카드 의미**(`/cards`, `/cards/:slug`): 메이저/마이너(수트별) 섹션으로 묶인 카드 목록과, 카드 한
  장의 "상징하는 것 · 정방향 · 역방향"을 깊이 있게 보여주는 상세 페이지. 슬러그는
  `slugify(englishName)`으로 생성됩니다(예: `/cards/the-fool`).
- **보관함**(`/vault`, `/vault/:id`): 결과 화면에서 사용자가 직접 눌러야만 저장되며(자동 저장 없음),
  저장된 기록은 다시 뽑는 것이 아니라 당시 뽑았던 카드·방향·해석을 그대로 복원해서 보여줍니다
  (`ReadingResultView`를 `ReadingPage`와 `VaultDetailPage`가 함께 재사용). 삭제 시 인라인 확인
  UI(취소/삭제)를 사용합니다.
- `prefers-reduced-motion`을 존중해 셔플/카드 공개 애니메이션을 최소화합니다.

## 카드/점술 데이터 확장하기

카드는 `src/data/cards/*.ts`에서 한국어 원본으로 관리되고, `src/data/cards/index.ts`가
`translations/{ja,zh,en}.ts`를 병합해 최종 `Localized<...>` 카드 배열을 만듭니다. 새 언어를 추가하려면
`translations/` 아래 새 파일을 추가하고 `Lang` 타입과 로케일 JSON을 늘리면 됩니다. 새 점술 종류를
추가하려면 `topics.ts`에 항목을 추가하고, 필요하다면 `positionTemplates.ts`의 `FIVE_CARD_BY_TOPIC`에
전용 5장 포지션 세트를 추가하세요(없으면 범용 세트로 자동 폴백합니다).
