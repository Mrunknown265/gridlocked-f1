import React from "react";
import type { NextRace } from "../types/race";
import LocalTimeClient from "./LocalTimeClient";
import NextRaceHeroClient from "./NextRaceHeroClient";

export default function NextRaceHero({ next }: { next: NextRace | null }) {
  if (!next) {
    return (
      <div className="p-6 rounded-xl border bg-[#070617]/60">
        <div className="text-lg font-semibold">Next race unavailable</div>
        <div className="text-sm text-zinc-400">Check back later for schedule updates.</div>
      </div>
    );
  }

  const primary = next.sessions.find((s) => s.name === "Race") ?? next.sessions[0];
  const primaryIso = primary?.iso ?? (primary?.date ? `${primary.date}T${primary.time ?? "00:00:00Z"}` : undefined);

  return (
    <section className="relative p-6 rounded-xl border border-violet-500/25 bg-[#08051a]/70 shadow-[0_0_48px_rgba(124,58,237,0.15),inset_0_1px_0_rgba(196,181,253,0.08)] backdrop-blur-sm overflow-hidden">
      <svg className="pointer-events-none absolute right-6 top-6 w-60 opacity-10" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M10,80 C40,10 160,10 190,80" stroke="#7c3aed" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="mb-4">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-violet-400/90 sm:text-xs">Next Grand Prix</p>
        <h2 className="mt-2 text-3xl font-bold italic leading-tight tracking-[0.04em] text-white sm:text-4xl md:text-5xl [font-family:var(--font-orbitron)]">{next.raceName}</h2>
        <p className="mt-2 text-sm text-zinc-400">{next.circuitName} · {next.locality}, {next.country}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        <div className="lg:col-span-2 p-4 rounded-md bg-gradient-to-b from-[#0b0716]/40 to-[#070617]/20">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-zinc-400">Next session</div>
              <div className="text-lg font-medium">{primary?.name}</div>
              <div className="text-xs text-zinc-400 mt-1">UTC: {primaryIso ?? `${primary?.date} ${primary?.time ?? ""}`}</div>
              <div className="text-xs text-zinc-400">Local: <LocalTimeClient iso={primaryIso} showTimeZone={true} /></div>
            </div>

            <NextRaceHeroClient primaryIso={primaryIso} />
          </div>
        </div>

        <div className="p-4 rounded-md bg-[#070617]/40">
          <div className="text-xs text-zinc-400">Upcoming Sessions</div>
          <ul className="mt-3 space-y-2">
            {next.sessions.map((s) => {
              const iso = s.iso ?? (s.date ? `${s.date}T${s.time ?? "00:00:00Z"}` : undefined);
              return (
                <li key={s.name} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{s.name}</div>
                    <div className="text-xs text-zinc-400">UTC: {iso ?? '-'}</div>
                    <div className="text-xs text-zinc-400">Local: <LocalTimeClient iso={iso} /></div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
