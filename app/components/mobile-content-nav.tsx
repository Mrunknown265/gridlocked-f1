"use client";

import { useEffect, useState } from "react";

const YOUTUBE_URL = "https://www.youtube.com/@gridlocked-2026";
const INSTAGRAM_URL = "https://www.instagram.com/grid._.locked";

const iconLinkClassName =
  "inline-flex rounded-sm p-1.5 text-zinc-500 drop-shadow-[0_0_6px_rgba(168,85,247,0.2)] transition-all duration-300 ease-out active:scale-110 active:text-[#c084fc] active:drop-shadow-[0_0_16px_rgba(168,85,247,0.85)]";

const iconClassName = "h-6 w-6";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

type MobileContentNavProps = {
  menuOpen: boolean;
};

/** Hamburger menu only: tap CONTENT to reveal social icons. */
export function MobileContentNav({ menuOpen }: MobileContentNavProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!menuOpen) setExpanded(false);
  }, [menuOpen]);

  return (
    <div>
      <button
        type="button"
        className={`text-sm font-medium tracking-[0.2em] transition-colors duration-300 ${expanded ? "text-[#c084fc] drop-shadow-[0_0_10px_rgba(168,85,247,0.45)]" : "text-white"}`}
        aria-expanded={expanded}
        aria-controls="mobile-content-icons"
        onClick={() => setExpanded((open) => !open)}
      >
        CONTENT
      </button>

      <div
        id="mobile-content-icons"
        className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        aria-hidden={!expanded}
      >
        <div className="overflow-hidden">
          <div className="flex items-center gap-4 pt-4">
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className={`${iconLinkClassName} transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${expanded ? "translate-y-0 opacity-100 delay-75" : "translate-y-2 opacity-0"}`}
            >
              <YouTubeIcon className={iconClassName} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`${iconLinkClassName} transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${expanded ? "translate-y-0 opacity-100 delay-150" : "translate-y-2 opacity-0"}`}
            >
              <InstagramIcon className={iconClassName} />
            </a>
          </div>
          <span
            className={`mt-3 block h-5 w-14 rounded-full bg-violet-500/0 blur-lg transition-all duration-500 ${expanded ? "bg-violet-500/25" : ""}`}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
