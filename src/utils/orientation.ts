import type { Orientation } from "../types/tarot";

/** 50/50 upright vs reversed draw. */
export function randomOrientation(): Orientation {
  return Math.random() < 0.5 ? "upright" : "reversed";
}
