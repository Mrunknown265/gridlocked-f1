"use client";
import React, { useEffect, useState } from "react";

export default function LocalTimeClient({ iso, showTimeZone }: { iso?: string | null; showTimeZone?: boolean }) {
  const [local, setLocal] = useState<string | null>(null);
  useEffect(() => {
    if (!iso) return;
    try {
      const d = new Date(iso);
      const s = d.toLocaleString();
      if (showTimeZone) {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setLocal(`${s} (${tz})`);
      } else {
        setLocal(s);
      }
    } catch {
      setLocal(iso);
    }
  }, [iso, showTimeZone]);
  // render placeholder (UTC) until hydrated
  return <span>{local ?? (iso ? new Date(iso).toUTCString() : "-")}</span>;
}
