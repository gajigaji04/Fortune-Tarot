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
        <CornerFleuron x={12} y={12} flipX={1} flipY={1} />
        <CornerFleuron x={88} y={12} flipX={-1} flipY={1} />
        <CornerFleuron x={12} y={148} flipX={1} flipY={-1} />
        <CornerFleuron x={88} y={148} flipX={-1} flipY={-1} />
      </svg>
    </div>
  );
}
