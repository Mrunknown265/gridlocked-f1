import React from "react";
import { getTeamColor } from "../lib/f1/team-colors";
import type { DriverStanding } from "../types/race";

export default function LatestResultsList({ standings }: { standings: DriverStanding[] }) {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="overflow-hidden rounded-xl border border-violet-500/25 bg-[#08051a]/70 shadow-[0_0_48px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(196,181,253,0.08)] backdrop-blur-sm">
  <div className="hidden border-b border-violet-500/20 px-4 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:grid sm:grid-cols-[3rem_minmax(160px,1fr)_minmax(140px,1fr)_4rem_3rem] sm:gap-4 sm:px-6">
          <span>Pos</span>
          <span>Driver</span>
          <span>Team</span>
          <span className="text-right">Gap</span>
          <span className="text-right">FL</span>
        </div>

        <ul className="divide-y divide-violet-500/10">
          {standings.map((s) => {
            const teamColor = getTeamColor(s.team.toLowerCase().replace(/\s+/g, "_"));
            return (
              <li key={s.driverId} className="group relative transition-colors duration-200 hover:bg-violet-950/40">
                <span className="absolute bottom-0 left-0 top-0 w-1 opacity-80" style={{ backgroundColor: teamColor }} aria-hidden="true" />

        <div className="flex items-center gap-3 px-4 py-3.5 pl-5 sm:hidden">
                  <span className="w-8 shrink-0 text-lg font-bold italic [font-family:var(--font-orbitron)] text-zinc-300">{s.position}</span>
                  <div className="min-w-0 flex-1">
          <p className="font-medium text-white truncate">{s.driverName}</p>
                    <p className="text-xs text-zinc-500">{s.team}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-bold text-[#c084fc] [font-family:var(--font-orbitron)]">{s.lastLapTimeSeconds ? s.lastLapTimeSeconds.toFixed(3) : '-'}</p>
                  </div>
                </div>

                <div className="hidden items-center gap-4 px-6 py-3.5 pl-7 sm:grid sm:grid-cols-[3rem_minmax(160px,1fr)_minmax(140px,1fr)_4rem_3rem]">
                  <span className="text-lg font-bold italic [font-family:var(--font-orbitron)] text-zinc-300">{s.position}</span>
                  <div className="min-w-0">
                    <p className="font-medium text-white group-hover:text-[#e9d5ff] whitespace-nowrap truncate">{s.driverName}</p>
                    <p className="text-xs text-zinc-500">{/* driver number included in name */}</p>
                  </div>
                  <p className="truncate text-sm text-zinc-400" style={{ color: teamColor !== "#a855f7" ? teamColor : undefined }}>{s.team}</p>
                  <p className="text-right font-bold text-[#c084fc] [font-family:var(--font-orbitron)]" style={{ minWidth: 64 }}>{s.gapToLeaderSeconds ? `+${s.gapToLeaderSeconds}` : '-'}</p>
                  <p className="text-right text-sm text-[#fcd34d]">{s.fastestLap ? '★' : ''}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
