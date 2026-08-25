import { starPath } from "./geometry";
import styles from "./CardBack.module.css";

function Rosette({ cx, cy, scale }: { cx: number; cy: number; scale: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`} fill="none" stroke="currentColor" strokeWidth={0.9}>
      <circle r={16} />
      <circle r={11} />
      <path d={starPath(0, 0, 15, 6, 8)} />
      <path d={starPath(0, 0, 9.5, 3.5, 8, -67.5)} />
      <circle r={2.4} fill="currentColor" stroke="none" />
    </g>
  );
}

function CornerFleuron({ x, y, flipX, flipY }: { x: number; y: number; flipX: number; flipY: number }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${flipX} ${flipY})`}
      fill="none"
      stroke="currentColor"
      strokeWidth={0.8}
    >
      <path d="M0 0 Q14 0 14 14" />
      <path d="M0 0 Q7 0 7 7" />
      <circle cx={14} cy={14} r={1.6} fill="currentColor" stroke="none" />
    </g>
  );
}

function CrescentMoon({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx} ${cy})`} fill="none" stroke="currentColor" strokeWidth={0.8}>
      <path d="M2 -5 A6 6 0 1 0 2 5 A4.4 4.4 0 1 1 2 -5 Z" />
    </g>
  );
}

function SunBurst({ cx, cy }: { cx: number; cy: number }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <g transform={`translate(${cx} ${cy})`} fill="none" stroke="currentColor" strokeWidth={0.7}>
      <circle r={3.2} />
      {rays.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = Math.cos(rad) * 4.6;
        const y1 = Math.sin(rad) * 4.6;
        const x2 = Math.cos(rad) * 7;
        const y2 = Math.sin(rad) * 7;
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} />;
      })}
    </g>
  );
}

function StarDot({ cx, cy, r = 1.6 }: { cx: number; cy: number; r?: number }) {
  return <path d={starPath(cx, cy, r, r * 0.4, 4)} fill="currentColor" stroke="none" opacity={0.75} />;
}

export function CardBack() {
  return (
    <div className={styles.back}>
      <svg
        className={styles.pattern}
        viewBox="0 0 100 160"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        focusable="false"
      >
        <Rosette cx={50} cy={80} scale={1} />
        <Rosette cx={50} cy={30} scale={0.42} />
        <Rosette cx={50} cy={130} scale={0.42} />
        <CrescentMoon cx={26} cy={30} />
        <SunBurst cx={74} cy={130} />
        <StarDot cx={22} cy={58} />
        <StarDot cx={78} cy={58} r={1.2} />
        <StarDot cx={22} cy={102} r={1.2} />
        <StarDot cx={78} cy={102} />
        <StarDot cx={50} cy={53} r={1} />
        <StarDot cx={50} cy={107} r={1} />
        <CornerFleuron x={12} y={12} flipX={1} flipY={1} />
        <CornerFleuron x={88} y={12} flipX={-1} flipY={1} />
        <CornerFleuron x={12} y={148} flipX={1} flipY={-1} />
        <CornerFleuron x={88} y={148} flipX={-1} flipY={-1} />
      </svg>
    </div>
  );
}
