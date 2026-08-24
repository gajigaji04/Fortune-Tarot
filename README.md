# THE ARCANA · 더 아르카나

오래된 유럽 점집의 분위기를 담은 반응형 타로 점술 웹서비스입니다. 78장(메이저 22 + 마이너 56)의
카드로 오늘의 운세, 3장 타로, 분야별 운세(직업·취업·학업·경제·애정·인간관계·건강·사업), 켈틱
크로스(올해의 운세)를 볼 수 있습니다.

## 기술 스택

- React 18 + TypeScript + Vite
- React Router (클라이언트 라우팅)
- 순수 CSS Modules + 전역 CSS 변수(디자인 토큰) — Tailwind 미사용
- 카드 아트는 이미지 파일 없이 전부 SVG/CSS로 그려서 가볍게 유지
- 백엔드 없음. 리딩 기록은 브라우저 `localStorage`에만 저장

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
│   ├── tarot/        카드/스프레드/셔플/해석 UI (cardArt/ 하위에 SVG 카드 일러스트)
│   ├── layout/        Header, Footer, PageShell
│   └── common/         Button, Divider 등 공용 UI
├── pages/               HomePage, ReadingPage, CardCatalogPage, CardDetailPage, HistoryPage, LearnPage
├── data/
│   ├── cards/           78장 카드 데이터 (majorArcana.ts, wands/cups/swords/pentacles.ts)
│   └── spreads.ts        스프레드(포지션) 정의
├── services/
│   └── interpretationService.ts   카드+포지션 조합 해석 로직 (추후 LLM 연동을 위한 인터페이스)
├── hooks/                useTarotDraw, useReadingHistory, useReducedMotion
├── utils/                 shuffle, orientation, cardLabels 등
├── types/tarot.ts         핵심 타입 정의
└── styles/                 tokens.css(디자인 토큰), global.css
```

## 주요 기능

- **뽑기만 하기 / 해석 보기** 두 가지 모드 — 자동 해석 없이 카드만 보거나, 포지션별 해석과 종합
  해석까지 함께 볼 수 있습니다.
- **정방향/역방향**은 50/50으로 무작위 결정되며, 회전된 카드 이미지와 함께 항상 텍스트 라벨로도
  표기됩니다.
- **켈틱 크로스**는 데스크톱에서 전통적인 십자+기둥 배치로, 모바일에서는 세로 목록으로 자동
  재배치됩니다.
- **최근 기록**은 `localStorage`에만 저장되며 서버로 전송되지 않습니다.
- `prefers-reduced-motion`을 존중해 셔플/카드 플립 애니메이션을 최소화합니다.

## 카드 데이터 확장하기

카드는 `src/data/cards/*.ts`에서 `TarotCard` 형태의 객체로 관리됩니다. 스프레드는
`src/data/spreads.ts`에서 `TarotSpread`(포지션 배열 포함)로 관리되므로, 새 스프레드를 추가할 때
카드 뽑기·플립·해석 로직을 건드릴 필요 없이 데이터만 추가하면 됩니다.
