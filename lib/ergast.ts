import type { SessionOverview, DriverStanding, NextRace } from "../types/race";

function parseErgastTimeToSeconds(timeStr?: string | null) {
  if (!timeStr) return null;
  const t = timeStr.trim();
  if (t.startsWith("+")) return parseFloat(t.substring(1));
  const parts = t.split(":").map(p => p.trim());
  if (parts.length === 1) return parseFloat(parts[0]);
  if (parts.length === 2) return Number(parts[0]) * 60 + parseFloat(parts[1]);
  if (parts.length === 3) return Number(parts[0]) * 3600 + Number(parts[1]) * 60 + parseFloat(parts[2]);
  return null;
}

async function fetchWithLogging(url: string) {
  try {
    console.log(`[ergast] fetching ${url}`);
    const res = await fetch(url);
    console.log(`[ergast] ${url} status=${res.status}`);
    if (!res.ok) {
      let txt: string | null = null;
      try { txt = await res.text(); } catch (e) { txt = String(e); }
      console.warn(`[ergast] ${url} non-OK response: ${res.status} ${txt ?? ''}`);
      return { ok: false, status: res.status, bodyText: txt };
    }
    const j = await res.json();
    return { ok: true, status: res.status, json: j };
  } catch (err) {
    console.error(`[ergast] fetch error for ${url}:`, err);
    return { ok: false, status: 0, bodyText: String(err) };
  }
}

export async function getLatestRaceOverview(): Promise<SessionOverview | null> {
  const primary = "https://api.jolpi.ca/ergast/f1/current/last/results.json";
  const fallback = "https://ergast.com/api/f1/current/last/results.json";
  let r = await fetchWithLogging(primary);
  if (!r.ok) {
    console.warn(`[ergast] primary ${primary} failed, trying fallback`);
    r = await fetchWithLogging(fallback);
    if (!r.ok) return null;
  }
  try {
    const j = r.json;
    const races = j?.MRData?.RaceTable?.Races ?? [];
    const race = races[0];
    if (!race) return null;

    const standings: DriverStanding[] = (race.Results || []).map((r2: any) => {
      const fastestLap = Boolean(r2?.FastestLap);
      const num = r2?.Driver?.permanentNumber ? `#${r2.Driver.permanentNumber} ` : "";
      const fullName = `${num}${r2?.Driver?.givenName ?? ""} ${r2?.Driver?.familyName ?? ""}`.trim();
      return {
        position: Number(r2.position || 0),
        driverId: r2?.Driver?.code || r2?.Driver?.driverId || `${r2?.Driver?.familyName}-${r2?.Driver?.givenName}`,
        driverName: fullName,
        team: r2?.Constructor?.name ?? r2?.Constructor?.constructorId ?? "",
        laps: Number(r2?.laps ?? 0),
        gapToLeaderSeconds: parseErgastTimeToSeconds(r2?.Time?.time) ?? null,
        lastLapTimeSeconds: r2?.FastestLap?.Time?.time ? parseErgastTimeToSeconds(r2.FastestLap.Time.time) : null,
        fastestLap: fastestLap,
      } as DriverStanding;
    });

    return {
      sessionName: `${race.raceName} - Results`,
      status: "finished",
      currentLap: null,
      standings,
      lastUpdated: new Date().toISOString(),
    };
  } catch (err) {
    console.error("[ergast] parse error in getLatestRaceOverview:", err);
    return null;
  }
}

export async function getNextRace(): Promise<NextRace | null> {
  const primary = "https://api.jolpi.ca/ergast/f1/current/next.json";
  const fallback = "https://ergast.com/api/f1/current/next.json";
  let r = await fetchWithLogging(primary);
  if (!r.ok) {
    console.warn(`[ergast] primary ${primary} failed, trying fallback`);
    r = await fetchWithLogging(fallback);
    if (!r.ok) return null;
  }
  try {
    const j = r.json;
    const race = j?.MRData?.RaceTable?.Races?.[0];
    if (!race) return null;

    const sessions: any[] = [];
    ["FirstPractice", "SecondPractice", "ThirdPractice", "Sprint", "Qualifying"].forEach((k) => {
      if (race[k]) sessions.push({ name: k, date: race[k].date, time: race[k].time });
    });
    sessions.push({ name: "Race", date: race.date, time: race.time });

    return {
      season: race.season,
      round: race.round,
      raceName: race.raceName,
      circuitName: race.Circuit?.circuitName ?? undefined,
      locality: race.Circuit?.Location?.locality ?? undefined,
      country: race.Circuit?.Location?.country ?? undefined,
      sessions: sessions.map(s => ({ name: s.name, date: s.date, time: s.time, iso: s.date && s.time ? `${s.date}T${s.time}` : undefined })),
      date: race.date,
      time: race.time,
    };
  } catch (err) {
    console.error("[ergast] parse error in getNextRace:", err);
    return null;
  }
}
