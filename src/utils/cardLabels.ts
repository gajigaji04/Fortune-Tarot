const ROMAN: [number, string][] = [
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

export function toRomanNumeral(n: number): string {
  if (n === 0) return "0";
  let remaining = n;
  let result = "";
  for (const [value, symbol] of ROMAN) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }
  return result;
}

const COURT_LABELS: Record<number, string> = {
  11: "PAGE",
  12: "KNIGHT",
  13: "QUEEN",
  14: "KING",
};

export function minorRankLabel(n: number): string {
  if (n === 1) return "A";
  if (n in COURT_LABELS) return COURT_LABELS[n];
  return String(n);
}
