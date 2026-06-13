import React from "react";
import type { NextRace } from "../types/race";
import LocalTimeClient from "./LocalTimeClient";

const SESSION_LABELS: Record<string, { label: string; icon: string }> = {
  FirstPractice: { label: 'Practice 1', icon: '🟣' },
  SecondPractice: { label: 'Practice 2', icon: '🟣' },
  ThirdPractice: { label: 'Practice 3', icon: '🟣' },
  SprintShootout: { label: 'Sprint Shootout', icon: '⚡' },
  Sprint: { label: 'Sprint', icon: '🏁' },
  Qualifying: { label: 'Qualifying', icon: '⏱️' },
  Race: { label: 'Race', icon: '🏁' },
};

export default function WeekendScheduleTable({ next }: { next: NextRace | null }) {
  if (!next) return <div className="p-4 rounded-xl border bg-[#070617]/60">No schedule available.</div>;

  return (
    <div className="mt-6 overflow-hidden rounded-xl border border-violet-500/25 bg-[#08051a]/70 shadow-[0_0_48px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(196,181,253,0.08)] backdrop-blur-sm">
      <div className="hidden border-b border-violet-500/20 px-4 py-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:grid sm:grid-cols-[1fr_1fr_1fr_120px] sm:gap-4 sm:px-6">
        <span>Session</span>
        <span>UTC</span>
        <span>Local</span>
        <span className="text-right">Status</span>
      </div>

      <ul className="divide-y divide-violet-500/10">
        {next.sessions.map((s) => {
          const iso = s.iso ?? (s.date ? `${s.date}T${s.time ?? "00:00:00Z"}` : undefined);
          const meta = SESSION_LABELS[s.name] ?? { label: s.name, icon: '📅' };
          return (
            <li key={s.name} className="group px-4 py-3.5 sm:grid sm:grid-cols-[1fr_1fr_1fr_120px] sm:gap-4 sm:px-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{meta.icon}</span>
                  <div className="font-medium text-white">{meta.label}</div>
                </div>
              </div>
              <div className="text-sm text-zinc-400">{iso ?? '-'}</div>
              <div className="text-sm text-zinc-400"><LocalTimeClient iso={iso} /></div>
              <div className="text-right text-sm text-zinc-400">{iso ? 'Scheduled' : 'TBD'}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
