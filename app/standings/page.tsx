import { DriverStandingsList } from "../components/driver-standings-list";
import { SubPageLayout } from "../components/sub-page-layout";
import {
  CURRENT_STANDINGS_SEASON,
  getDriverStandings,
} from "../../lib/f1/fetch-standings";

/** Refresh cached standings hourly (updates after each race weekend). */
export const revalidate = 3600;

export default async function StandingsPage() {
  const { standings, meta, error } = await getDriverStandings(
    CURRENT_STANDINGS_SEASON,
  );

  return (
    <SubPageLayout
      eyebrow="Standings"
      title="Driver Standings"
      gradientId="standings-streak-gradient"
      wide
    >
      {error ? (
        <div className="mt-8 rounded-xl border border-red-500/30 bg-[#08051a]/70 p-8 text-center sm:mt-10">
          <p className="text-sm text-red-300 sm:text-base">{error}</p>
        </div>
      ) : meta && standings.length > 0 ? (
        <DriverStandingsList standings={standings} meta={meta} />
      ) : (
        <div className="mt-8 rounded-xl border border-violet-500/25 bg-[#08051a]/70 p-8 text-center sm:mt-10">
          <p className="text-sm text-zinc-400 sm:text-base">
            No standings data available yet for the {CURRENT_STANDINGS_SEASON}{" "}
            season.
          </p>
        </div>
      )}
    </SubPageLayout>
  );
}
