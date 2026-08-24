import type { ReactElement } from "react";
import { circlePoints, pointsToPath, starPath } from "./geometry";

const INFINITY_PATH =
  "M -12 0 C -12 -8 -2 -8 0 0 C 2 8 12 8 12 0 C 12 -8 2 -8 0 0 C -2 8 -12 8 -12 0 Z";

function Infinity_({ y = 0, scale = 1 }: { y?: number; scale?: number }) {
  return <path d={INFINITY_PATH} transform={`translate(0 ${y}) scale(${scale})`} />;
}

function Fool() {
  return (
    <>
      <circle cx={10} cy={-14} r={4} />
      <path d="M-16 12 L6 -8" />
      <circle cx={-14} cy={9} r={1.8} fill="currentColor" stroke="none" />
    </>
  );
}

function Magician() {
  const dots = [-9, -3, 3, 9];
  return (
    <>
      <Infinity_ y={-10} scale={0.62} />
      {dots.map((x) => (
        <circle key={x} cx={x} cy={14} r={1.4} fill="currentColor" stroke="none" />
      ))}
    </>
  );
}

function HighPriestess() {
  return (
    <>
      <line x1={-14} y1={-15} x2={-14} y2={15} />
      <line x1={14} y1={-15} x2={14} y2={15} />
      <path d="M2 -10 A10 10 0 1 0 2 10 A7.2 7.2 0 1 1 2 -10 Z" />
    </>
  );
}

function Empress() {
  return (
    <>
      <circle cx={0} cy={-6} r={8} />
      <line x1={0} y1={2} x2={0} y2={16} />
      <line x1={-6} y1={9} x2={6} y2={9} />
    </>
  );
}

function Emperor() {
  return <path d="M-10 12 C-17 -3 -8 -13 0 -4 C8 -13 17 -3 10 12" />;
}

function Hierophant() {
  return (
    <>
      <circle cx={-8} cy={-8} r={5} />
      <line x1={-4.5} y1={-4.5} x2={11} y2={11} />
      <line x1={5} y1={7} x2={9} y2={3} />
      <line x1={8} y1={10} x2={12} y2={6} />
    </>
  );
}

function Lovers() {
  return (
    <>
      <circle cx={-5} cy={0} r={9} />
      <circle cx={5} cy={0} r={9} />
    </>
  );
}

function Chariot() {
  const spokes = circlePoints(0, 2, 9, 6);
  return (
    <>
      <circle cx={0} cy={2} r={9} />
      {spokes.map((p, i) => (
        <line key={i} x1={0} y1={2} x2={p.x} y2={p.y} />
      ))}
      <line x1={-20} y1={-2} x2={-15} y2={-2} />
      <line x1={-20} y1={4} x2={-16} y2={4} />
    </>
  );
}

function Strength() {
  return (
    <>
      <Infinity_ y={-11} scale={0.55} />
      <path d="M-12 10 Q-6 4 0 10 Q6 16 12 10" />
    </>
  );
}

function Hermit() {
  const hex = circlePoints(0, -1, 7, 6, -90);
  return (
    <>
      <path d={pointsToPath(hex)} />
      <line x1={0} y1={-8} x2={0} y2={-16} />
      <line x1={-4} y1={-14} x2={4} y2={-14} />
      <line x1={0} y1={6} x2={0} y2={13} />
      <line x1={-9} y1={-1} x2={-14} y2={-4} />
      <line x1={9} y1={-1} x2={14} y2={-4} />
    </>
  );
}

function WheelOfFortune() {
  const spokes = circlePoints(0, 0, 10, 8);
  return (
    <>
      <circle cx={0} cy={0} r={10} />
      {spokes.map((p, i) => (
        <line key={i} x1={0} y1={0} x2={p.x} y2={p.y} />
      ))}
      {circlePoints(0, 0, 15, 4, -45).map((p, i) => (
        <line key={i} x1={p.x * 0.86} y1={p.y * 0.86} x2={p.x} y2={p.y} />
      ))}
    </>
  );
}

function Justice() {
  return (
    <>
      <line x1={-15} y1={-9} x2={15} y2={-9} />
      <line x1={0} y1={-9} x2={0} y2={15} />
      <line x1={-8} y1={15} x2={8} y2={15} />
      <path d="M-15 -9 L-19 4 A4.4 4.4 0 0 0 -10.5 4 Z" />
      <path d="M15 -9 L19 4 A4.4 4.4 0 0 1 10.5 4 Z" />
    </>
  );
}

function HangedMan() {
  return (
    <>
      <line x1={-15} y1={-12} x2={15} y2={-12} />
      <line x1={0} y1={-12} x2={0} y2={5} />
      <circle cx={0} cy={11} r={5.5} />
    </>
  );
}

function Death() {
  return <path d="M0 0 C7 -2 7 -11 -3 -11 C-14 -11 -14 5 0 7 C15 9 15 -11 3 -16" />;
}

function Temperance() {
  return (
    <>
      <path d="M-15 -7 Q-15 5 -6 5 Q2 5 2 -7" />
      <path d="M-2 -7 Q-2 5 7 5 Q15 5 15 -7" />
      <path d="M-6 -1 Q0 -9 4 -1" />
    </>
  );
}

function Devil() {
  return (
    <>
      <circle cx={0} cy={0} r={12} />
      <path d={starPath(0, 0, 8, 3, 5, 90)} />
      <circle cx={-6} cy={17} r={2.4} />
      <circle cx={6} cy={17} r={2.4} />
      <line x1={-3.6} y1={17} x2={3.6} y2={17} />
    </>
  );
}

function Tower() {
  return (
    <>
      <rect x={-6} y={-3} width={12} height={19} />
      <line x1={-6} y1={-3} x2={-9} y2={-8} />
      <line x1={6} y1={-3} x2={9} y2={-8} />
      <path d="M-1 -20 L3 -11 L-2 -11 L2 -3" />
      <line x1={-9} y1={-8} x2={-14} y2={-13} />
      <line x1={9} y1={-8} x2={14} y2={-13} />
    </>
  );
}

function Star() {
  return (
    <>
      <path d={starPath(0, -1, 11, 4.5, 8)} />
      <path d={starPath(-16, -10, 3.4, 1.4, 5)} />
      <path d={starPath(15, 8, 3.4, 1.4, 5)} />
    </>
  );
}

function Moon() {
  return (
    <>
      <path d="M4 -14 A11 11 0 1 0 4 8 A8 8 0 1 1 4 -14 Z" />
      <path d="M-15 12 Q-7 6 0 12 Q7 18 15 12" />
      <circle cx={-11} cy={9} r={1.4} fill="currentColor" stroke="none" />
      <circle cx={11} cy={9} r={1.4} fill="currentColor" stroke="none" />
    </>
  );
}

function Sun() {
  const inner = circlePoints(0, -3, 9, 12);
  const outer = circlePoints(0, -3, 15, 12);
  return (
    <>
      <circle cx={0} cy={-3} r={9} />
      {inner.map((p, i) => (
        <line key={i} x1={p.x} y1={p.y} x2={outer[i].x} y2={outer[i].y} />
      ))}
      <circle cx={0} cy={17} r={2} />
    </>
  );
}

function Judgement() {
  return (
    <>
      <path d="M-9 9 L7 -9 L7 3 Z" />
      <line x1={7} y1={-9} x2={12} y2={-13} />
      <line x1={9} y1={-4} x2={15} y2={-6} />
      <line x1={9} y1={2} x2={15} y2={3} />
    </>
  );
}

function World() {
  const left = circlePoints(-1, 0, 15, 7, 100).slice(0, 5);
  const right = circlePoints(1, 0, 15, 7, -10).slice(0, 5);
  const diamond = [
    { x: 0, y: -7 },
    { x: 6, y: 0 },
    { x: 0, y: 7 },
    { x: -6, y: 0 },
  ];
  return (
    <>
      <path d={pointsToPath(diamond)} />
      {left.map((p, i) => (
        <line key={`l${i}`} x1={p.x} y1={p.y} x2={p.x * 1.18} y2={p.y * 1.18} />
      ))}
      {right.map((p, i) => (
        <line key={`r${i}`} x1={p.x} y1={p.y} x2={p.x * 1.18} y2={p.y * 1.18} />
      ))}
    </>
  );
}

const majorIconByNumber: Record<number, () => ReactElement> = {
  0: Fool,
  1: Magician,
  2: HighPriestess,
  3: Empress,
  4: Emperor,
  5: Hierophant,
  6: Lovers,
  7: Chariot,
  8: Strength,
  9: Hermit,
  10: WheelOfFortune,
  11: Justice,
  12: HangedMan,
  13: Death,
  14: Temperance,
  15: Devil,
  16: Tower,
  17: Star,
  18: Moon,
  19: Sun,
  20: Judgement,
  21: World,
};

export function MajorIcon({ number, className }: { number: number; className?: string }) {
  const Icon = majorIconByNumber[number];
  if (!Icon) return null;
  return (
    <svg
      viewBox="-32 -32 64 64"
      width="100%"
      height="100%"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <Icon />
    </svg>
  );
}
