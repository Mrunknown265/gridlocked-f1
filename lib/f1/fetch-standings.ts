import type {
  DriverStandingsResponse,
  DriverStandingsResult,
  DriverStanding,
} from "./types";

const JOLPICA_BASE = "https://api.jolpi.ca/ergast/f1";

export const CURRENT_STANDINGS_SEASON = 2026;

/** Revalidate hourly so standings update after each race weekend. */
export const STANDINGS_REVALIDATE_SECONDS = 3600;

export async function getDriverStandings(
  season: number = CURRENT_STANDINGS_SEASON,
): Promise<DriverStandingsResult> {
  try {
    const response = await fetch(
      `${JOLPICA_BASE}/${season}/driverStandings.json`,
      {
        next: { revalidate: STANDINGS_REVALIDATE_SECONDS },
      },
    );

    if (!response.ok) {
      return {
        standings: [],
        meta: null,
        error: `Standings unavailable (${response.status}). Try again later.`,
      };
    }

    const data = (await response.json()) as DriverStandingsResponse;
    const list = data.MRData.StandingsTable.StandingsLists[0];

    if (!list?.DriverStandings?.length) {
      return {
        standings: [],
        meta: {
          season: String(season),
          round: list?.round ?? "0",
          totalDrivers: 0,
        },
        error: "No driver standings found for this season yet.",
      };
    }

    const standings: DriverStanding[] = list.DriverStandings.map((row) => {
      const constructor = row.Constructors[0];
      return {
        position: Number(row.position),
        points: Number(row.points),
        wins: Number(row.wins),
        driverId: row.Driver.driverId,
        code: row.Driver.code,
        givenName: row.Driver.givenName,
        familyName: row.Driver.familyName,
        permanentNumber: row.Driver.permanentNumber,
        nationality: row.Driver.nationality,
        constructorId: constructor?.constructorId ?? "unknown",
        constructorName: constructor?.name ?? "—",
      };
    });

    standings.sort((a, b) => a.position - b.position);

    return {
      standings,
      meta: {
        season: list.season,
        round: list.round,
        totalDrivers: Number(data.MRData.total),
      },
      error: null,
    };
  } catch {
    return {
      standings: [],
      meta: null,
      error: "Could not load standings. Check your connection and try again.",
    };
  }
}
