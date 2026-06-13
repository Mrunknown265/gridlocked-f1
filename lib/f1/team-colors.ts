/** Accent colors for constructor rows (hex). */
const TEAM_COLORS: Record<string, string> = {
  mercedes: "#00D2BE",
  ferrari: "#DC0000",
  red_bull: "#3671C6",
  mclaren: "#FF8000",
  alpine: "#0093CC",
  aston_martin: "#229971",
  williams: "#1868D8",
  haas: "#B6BABD",
  sauber: "#52E252",
  kick_sauber: "#52E252",
  rb: "#6692FF",
  cadillac: "#1E5F8C",
  racing_bulls: "#6692FF",
};

export function getTeamColor(constructorId: string): string {
  return TEAM_COLORS[constructorId] ?? "#a855f7";
}
