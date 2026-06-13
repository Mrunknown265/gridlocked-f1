export type SessionStatus = "upcoming" | "live" | "finished";

export type DriverStanding = {
  position: number;
  driverId: string;
  driverName: string;
  team: string;
  laps: number;
  gapToLeaderSeconds?: number | null;
  lastLapTimeSeconds?: number | null;
  fastestLap?: boolean;
};

export type SessionOverview = {
  sessionName: string;
  status: SessionStatus;
  currentLap?: number | null;
  standings: DriverStanding[];
  lastUpdated: string;
};

export type WeekendSession = {
  name: string;
  date: string; // YYYY-MM-DD
  time?: string; // HH:MM:SSZ (UTC) if provided by Ergast
  iso?: string; // combined ISO if available
};
export type NextRace = {
  season: string;
  round: string;
  raceName: string;
  circuitName?: string;
  locality?: string;
  country?: string;
  sessions: WeekendSession[]; // practice/qualifying/sprint/race
  date?: string; // race date
  time?: string; // race time
};
