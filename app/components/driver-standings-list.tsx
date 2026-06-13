import { getTeamColor } from "../../lib/f1/team-colors";
import type { DriverStanding, StandingsMeta } from "../../lib/f1/types";

type DriverStandingsListProps = {
  standings: DriverStanding[];
  meta: StandingsMeta;
};

function positionAccent(position: number): string {
  if (position === 1) return "text-[#fcd34d] drop-shadow-[0_0_12px_rgba(252,211,77,0.45)]";
  if (position === 2) return "text-zinc-300 drop-shadow-[0_0_10px_rgba(212,212,216,0.35)]";
  if (position === 3) return "text-[#f97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.35)]";
  return "text-zinc-500";
}

export function DriverStandingsList({
  standings,
  meta,
}: DriverStandingsListProps) {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500 sm:text-sm">
        <p>
          <span className="text-violet-400/90">{meta.season}</span> season · after
          round <span className="text-zinc-400">{meta.round}</span>
        </p>
        <p className="tracking-wide text-zinc-600">
          {meta.totalDrivers} drivers
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-violet-500/25 bg-[#08051a]/70 shadow-[0_0_48px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(196,181,253,0.08)] backdrop-blur-sm">
        <div className="hidden border-b border-violet-500/20 px-4 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:grid sm:grid-cols-[3rem_1fr_1fr_4rem_3rem] sm:gap-4 sm:px-6">
          <span>Pos</span>
          <span>Driver</span>
          <span>Team</span>
          <span className="text-right">Pts</span>
          <span className="text-right">Wins</span>
        </div>

        <ul className="divide-y divide-violet-500/10">
          {standings.map((driver) => {
            const teamColor = getTeamColor(driver.constructorId);
            const fullName = `${driver.givenName} ${driver.familyName}`;

            return (
              <li
                key={driver.driverId}
                className="group relative transition-colors duration-200 hover:bg-violet-950/40"
              >
                <span
                  className="absolute bottom-0 left-0 top-0 w-1 opacity-80"
                  style={{ backgroundColor: teamColor }}
                  aria-hidden="true"
                />

                {/* Mobile layout */}
                <div className="flex items-center gap-3 px-4 py-3.5 pl-5 sm:hidden">
                  <span
                    className={`w-8 shrink-0 text-lg font-bold italic [font-family:var(--font-orbitron)] ${positionAccent(driver.position)}`}
                  >
                    {driver.position}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-white">{fullName}</p>
                    <p className="truncate text-xs text-zinc-500">
                      {driver.constructorName}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-bold text-[#c084fc] [font-family:var(--font-orbitron)]">
                      {driver.points}
                    </p>
                    {driver.wins > 0 && (
                      <p className="text-[0.65rem] text-zinc-500">
                        {driver.wins} win{driver.wins !== 1 ? "s" : ""}
                      </p>
                    )}
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden items-center gap-4 px-6 py-3.5 pl-7 sm:grid sm:grid-cols-[3rem_1fr_1fr_4rem_3rem]">
                  <span
                    className={`text-lg font-bold italic [font-family:var(--font-orbitron)] ${positionAccent(driver.position)}`}
                  >
                    {driver.position}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-medium text-white group-hover:text-[#e9d5ff]">
                      {fullName}
                    </p>
                    <p className="text-xs text-zinc-500">
                      #{driver.permanentNumber} · {driver.code}
                    </p>
                  </div>
                  <p
                    className="truncate text-sm text-zinc-400"
                    style={{ color: teamColor !== "#a855f7" ? teamColor : undefined }}
                  >
                    {driver.constructorName}
                  </p>
                  <p className="text-right font-bold text-[#c084fc] [font-family:var(--font-orbitron)]">
                    {driver.points}
                  </p>
                  <p className="text-right text-sm text-zinc-500">
                    {driver.wins}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
