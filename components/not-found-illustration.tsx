export function NotFoundIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Doctor with a heartbeat monitor representing a system check"
    >
      <ellipse cx="360" cy="430" rx="140" ry="22" fill="#1f6b4a" opacity="0.12" />

      {/* Monitor */}
      <rect x="250" y="70" width="230" height="170" rx="18" fill="#e6f3ec" stroke="#1f6b4a" strokeWidth="6" />
      <rect x="268" y="90" width="194" height="118" rx="10" fill="#f7f9f8" stroke="#154c35" strokeWidth="3" />
      <path
        d="M278 150 H310 L322 118 L340 178 L358 132 L372 150 H448"
        stroke="#1f6b4a"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="340" y="240" width="50" height="18" rx="4" fill="#154c35" />
      <rect x="320" y="258" width="90" height="10" rx="3" fill="#1f6b4a" opacity="0.35" />

      {/* Doctor body */}
      <circle cx="180" cy="118" r="48" fill="#f4d7b8" stroke="#1a1a1a" strokeWidth="4" />
      <path
        d="M132 118c8-28 28-42 48-42s40 14 48 42"
        fill="#1a1a1a"
      />
      <path
        d="M148 128c10 14 28 22 32 8 4 14 22 6 32-8"
        stroke="#1a1a1a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M155 110h18M187 110h18"
        stroke="#1a1a1a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="164" cy="122" r="3" fill="#1a1a1a" />
      <circle cx="196" cy="122" r="3" fill="#1a1a1a" />
      <path d="M172 136c6 6 14 6 20 0" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round" />

      {/* Coat */}
      <path
        d="M110 210c10-42 28-62 70-62s60 20 70 62v150c-18 18-46 28-70 28s-52-10-70-28V210z"
        fill="#ffffff"
        stroke="#1a1a1a"
        strokeWidth="5"
      />
      <path d="M180 148v180" stroke="#1f6b4a" strokeWidth="4" />
      <path
        d="M145 210h70"
        stroke="#1f6b4a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="152" y="175" width="56" height="28" rx="6" fill="#1f6b4a" />

      {/* Stethoscope */}
      <path
        d="M150 188c-22 18-28 48-8 70"
        stroke="#154c35"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M210 188c22 18 28 48 8 70"
        stroke="#154c35"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="142" cy="262" r="8" fill="#f4a261" stroke="#1a1a1a" strokeWidth="3" />
      <circle cx="218" cy="262" r="8" fill="#f4a261" stroke="#1a1a1a" strokeWidth="3" />

      {/* Clipboard */}
      <g transform="translate(78 250)">
        <rect x="0" y="12" width="92" height="120" rx="10" fill="#ffffff" stroke="#1a1a1a" strokeWidth="4" />
        <rect x="24" y="0" width="44" height="22" rx="6" fill="#1f6b4a" />
        <path d="M18 48h56M18 68h56M18 88h40" stroke="#1f6b4a" strokeWidth="4" strokeLinecap="round" />
        <path d="M70 100l18-28 8 6-18 28-10 2 2-8z" fill="#f4a261" stroke="#1a1a1a" strokeWidth="3" />
      </g>

      {/* Accent dots */}
      <circle cx="470" cy="120" r="8" fill="#f4a261" />
      <circle cx="60" cy="300" r="6" fill="#1f6b4a" opacity="0.35" />
      <circle cx="490" cy="300" r="10" fill="#1f6b4a" opacity="0.2" />
    </svg>
  );
}
