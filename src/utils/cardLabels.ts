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
