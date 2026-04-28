export default function BrandMark({ className = "h-10 w-10" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DEVLYS"
    >
      <defs>
        <linearGradient id="tch_g" x1="10" y1="10" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="0.55" stopColor="#2563EB" />
          <stop offset="1" stopColor="#0B1220" />
        </linearGradient>
        <radialGradient
          id="tch_r"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 18) rotate(55) scale(44)"
        >
          <stop stopColor="#93C5FD" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0B1220" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Soft backdrop */}
      <circle cx="32" cy="32" r="30" fill="url(#tch_r)" />

      {/* Outer ring */}
      <circle cx="32" cy="32" r="22" stroke="url(#tch_g)" strokeWidth="3.5" opacity="0.95" />

      {/* Devlys "D" monogram */}
      <path
        d="M24 18v28"
        stroke="url(#tch_g)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M24 18h12c8 0 14 6 14 14s-6 14-14 14H24"
        stroke="#0B1220"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Accent node */}
      <circle cx="46.5" cy="19.5" r="4.2" fill="#2563EB" />
      <circle cx="46.5" cy="19.5" r="1.8" fill="white" opacity="0.9" />
    </svg>
  );
}

