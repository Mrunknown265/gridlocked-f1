const YOUTUBE_URL = "https://www.youtube.com/@gridlocked-2026";
const INSTAGRAM_URL = "https://www.instagram.com/grid._.locked";

const labelClassName =
  "relative text-xs font-medium tracking-[0.2em] text-white transition-all duration-300 ease-out after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-gradient-to-r after:from-transparent after:via-violet-400/90 after:to-transparent after:shadow-[0_0_8px_rgba(168,85,247,0.5)] after:transition-all after:duration-300 after:ease-out after:content-[''] group-hover/content:font-semibold group-hover/content:text-[#c084fc] group-hover/content:drop-shadow-[0_0_10px_rgba(168,85,247,0.45)] group-hover/content:after:w-full";

const iconLinkClassName =
  "pointer-events-auto relative z-20 inline-flex rounded-sm p-1.5 text-zinc-500 drop-shadow-[0_0_6px_rgba(168,85,247,0.2)] transition-all duration-300 ease-out hover:scale-110 hover:text-[#c084fc] hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.85)] focus-visible:scale-110 focus-visible:text-[#c084fc] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-400/50";

const iconClassName = "h-6 w-6";

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
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

export function ContentNavMenu() {
  return (
    <div className="group/content relative px-1 pb-2">
      <span className={labelClassName}>CONTENT</span>

      <div
        className="absolute left-1/2 top-full z-20 -mt-2 flex -translate-x-1/2 items-center justify-center gap-3 pt-2 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/content:opacity-100"
        aria-label="Social links"
      >
        <span
          className="pointer-events-none absolute -top-3 left-0 right-0 h-3"
          aria-hidden="true"
        />
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className={`invisible translate-y-2 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/content:visible group-hover/content:translate-y-0 group-hover/content:opacity-100 group-hover/content:delay-75 ${iconLinkClassName}`}
        >
          <YouTubeIcon className={iconClassName} />
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={`invisible translate-y-2 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/content:visible group-hover/content:translate-y-0 group-hover/content:opacity-100 group-hover/content:delay-150 ${iconLinkClassName}`}
        >
          <InstagramIcon className={iconClassName} />
        </a>
      </div>

      <span
        className="pointer-events-none absolute -bottom-1 left-1/2 z-0 h-6 w-16 -translate-x-1/2 rounded-full bg-violet-500/0 blur-xl transition-all duration-500 ease-out group-hover/content:bg-violet-500/25"
        aria-hidden="true"
      />
    </div>
  );
}
