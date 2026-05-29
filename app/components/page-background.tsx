type PageBackgroundProps = {
  /** Unique id for the SVG gradient (avoids clashes if multiple SVGs exist). */
  gradientId?: string;
};

export function PageBackground({ gradientId = "page-streak-gradient" }: PageBackgroundProps) {
  return (
    <>
      <div
        className="pointer-events-none absolute inset-0 opacity-30 sm:opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148, 163, 184, 0.22) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-5%,rgba(124,58,237,0.2),transparent)] sm:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.18),transparent)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[32vh] overflow-hidden sm:h-[38vh] md:h-[42vh] lg:h-[45vh]">
        <div className="absolute bottom-[-35%] left-[-15%] h-32 w-[130%] rotate-[-4deg] bg-gradient-to-r from-transparent via-violet-600/50 to-purple-500/40 blur-3xl sm:h-40" />
        <div className="absolute bottom-[-25%] right-[-20%] h-40 w-[90%] rotate-[8deg] rounded-full bg-gradient-to-l from-blue-500/30 via-violet-600/55 to-transparent blur-3xl sm:h-52" />
        <div className="absolute bottom-[-10%] left-[10%] h-20 w-[80%] bg-gradient-to-r from-transparent via-fuchsia-500/35 to-violet-400/25 blur-2xl sm:h-24" />
        <svg
          className="absolute bottom-0 left-0 w-full opacity-80 sm:opacity-90"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,280 C360,220 720,340 1080,260 C1260,220 1380,200 1440,180 L1440,320 L0,320 Z"
            fill={`url(#${gradientId})`}
            opacity="0.35"
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="35%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="65%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
