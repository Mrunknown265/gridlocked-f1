"use client";
import React from "react";
import { useCountdown } from "../hooks/useCountdown";

export default function NextRaceHeroClient({ primaryIso }: { primaryIso?: string | null }) {
  const countdown = useCountdown(primaryIso ?? undefined);
  return (
    <div className="text-right">
      <div className="text-xs text-zinc-400">Countdown</div>
      <div className="text-3xl font-mono">{countdown.days}d {countdown.hours}h</div>
      <div className="text-sm font-mono">{countdown.minutes}m {countdown.seconds}s</div>
    </div>
  );
}
