import { SubPageLayout } from "../components/sub-page-layout";
import React from "react";
import { getLatestRaceOverview, getNextRace } from "../../lib/ergast";
import NextRaceHero from "../../components/NextRaceHero";
import WeekendScheduleTable from "../../components/WeekendScheduleTable";
import LatestResultsList from "../../components/LatestResultsList";

export const revalidate = 60;

export default async function TelemetryPage() {
  const [overview, next] = await Promise.all([
    getLatestRaceOverview().catch(() => null),
    getNextRace().catch(() => null),
  ]);

  const hasLive = overview && overview.status === "live";
  const showHeroPrimary = !hasLive;

  return (
    <SubPageLayout
      eyebrow="Standings"
      title="Race Center"
      gradientId="standings-streak-gradient"
      wide
      maxWidth="max-w-7xl"
    >
      <div className="mt-6">
        {/* Hero and main layout mirrors Standings page spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <NextRaceHero next={next} />

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Weekend Schedule</h3>
              <div>
                {/* Weekend schedule table */}
                {/* Use same look as standings table */}
                {/* Component will handle empty state */}
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                <WeekendScheduleTable next={next} />
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-3">Latest Results</h3>
            {/* Latest results will reuse DriverStandings styling */}
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <LatestResultsList standings={overview?.standings ?? []} />
          </aside>
        </div>

        <div className="mt-8">
          {/* Optional constructor standings placeholder */}
        </div>
      </div>
    </SubPageLayout>
  );
}
