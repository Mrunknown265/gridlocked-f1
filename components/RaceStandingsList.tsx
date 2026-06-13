import React from "react";
import type { SessionOverview } from "../types/race";

export default function RaceStandingsList({ overview }: { overview: SessionOverview | null }) {
  if (!overview) {
    return (
      <div className="p-6 rounded-xl border bg-[#070617]/60">
        <div className="text-sm text-zinc-400">No recent session data available.</div>
      </div>
    );
  }

  return (
    <section className="p-4 rounded-xl border bg-[#070617]/30">
      <header className="mb-4">
  <h2 className="text-xl font-semibold">{overview.sessionName}</h2>
  <div className="text-sm text-zinc-400">Status: {overview.status.toUpperCase()} · Updated {new Date(overview.lastUpdated).toUTCString()}</div>
      </header>

      <div className="grid gap-2">
        {overview.standings.map((s) => (
          <div key={s.driverId} className="flex items-center justify-between p-3 rounded-md hover:bg-zinc-900/20">
            <div className="flex items-center gap-3">
              <div className="w-8 text-lg font-semibold">{s.position}</div>
              <div>
                <div className="font-medium">{s.driverName}</div>
                <div className="text-xs text-zinc-400">{s.team}</div>
              </div>
            </div>
            <div className="text-sm text-right">
              <div>{s.lastLapTimeSeconds ? `${s.lastLapTimeSeconds.toFixed(3)}s` : "-"}</div>
              <div className="text-xs text-zinc-400">{s.gapToLeaderSeconds ? `+${s.gapToLeaderSeconds}s` : ""} {s.fastestLap ? "• FL" : ""}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
