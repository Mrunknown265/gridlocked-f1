"use client";
import { useEffect, useState } from "react";

export function useCountdown(targetIso?: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  if (!targetIso) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  const target = new Date(targetIso).getTime();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (24 * 3600 * 1000));
  const hours = Math.floor((diff % (24 * 3600 * 1000)) / (3600 * 1000));
  const minutes = Math.floor((diff % (3600 * 1000)) / (60 * 1000));
  const seconds = Math.floor((diff % (60 * 1000)) / 1000);
  return { days, hours, minutes, seconds, expired: diff === 0 };
}

export function formatInTimeZone(isoOrDate?: string, timeZone?: string) {
  if (!isoOrDate) return "-";
  try {
    const d = new Date(isoOrDate);
    const tz = timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
    return new Intl.DateTimeFormat(undefined, { timeZone: tz, year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(d);
  } catch {
    return isoOrDate;
  }
}
