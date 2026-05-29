type SoftTyreIconProps = {
  className?: string;
};

export function SoftTyreIcon({ className = "h-[0.85em] w-[0.85em]" }: SoftTyreIconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="tyre-rubber" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="70%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="tyre-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
        <filter id="tyre-glow-filter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="40" cy="40" r="36" fill="url(#tyre-rubber)" />
      <circle
        cx="40"
        cy="40"
        r="36"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        fill="none"
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="40"
          y1="8"
          x2="40"
          y2="18"
          stroke="#111"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${deg} 40 40)`}
        />
      ))}
      <circle
        cx="40"
        cy="40"
        r="28"
        stroke="url(#tyre-glow)"
        strokeWidth="5"
        fill="none"
        filter="url(#tyre-glow-filter)"
      />
      <circle cx="40" cy="40" r="14" fill="#050505" stroke="#222" strokeWidth="1" />
    </svg>
  );
}
