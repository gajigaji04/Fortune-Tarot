/** Small geometry helpers for building hand-drawn-feeling SVG glyphs from primitives. */

export interface Point {
  x: number;
  y: number;
}

export function starPoints(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  points: number,
  rotationDeg = -90
): Point[] {
  const result: Point[] = [];
  const step = Math.PI / points;
  const rotation = (rotationDeg * Math.PI) / 180;
  for (let i = 0; i < points * 2; i += 1) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = i * step + rotation;
    result.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
  }
  return result;
}

export function pointsToPath(points: Point[], close = true): string {
  if (points.length === 0) return "";
  const [first, ...rest] = points;
  const segments = rest.map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`);
  return `M ${first.x.toFixed(2)} ${first.y.toFixed(2)} ${segments.join(" ")}${close ? " Z" : ""}`;
}

export function starPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  points: number,
  rotationDeg = -90
): string {
  return pointsToPath(starPoints(cx, cy, outerR, innerR, points, rotationDeg));
}

export function circlePoints(cx: number, cy: number, r: number, count: number, rotationDeg = -90): Point[] {
  const result: Point[] = [];
  const step = (Math.PI * 2) / count;
  const rotation = (rotationDeg * Math.PI) / 180;
  for (let i = 0; i < count; i += 1) {
    const angle = i * step + rotation;
    result.push({ x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) });
  }
  return result;
}
