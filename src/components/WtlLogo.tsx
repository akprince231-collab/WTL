import React from 'react';

interface WtlLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'monochrome';
  showTagline?: boolean;
}

export const WtlLogo: React.FC<WtlLogoProps> = ({
  className = 'h-9 w-auto',
  variant = 'light',
  showTagline = false,
}) => {
  // Brand colors: Deep Navy / Dark Blue (#070D18, #0E1B33), Warm Yellow / Gold (#E5A910, #FFBF1A)
  const isLight = variant === 'light';
  const yellowColor = '#E5A910';
  const primaryColor = isLight ? '#FFFFFF' : '#0B132B';
  const subtextColor = isLight ? '#94A3B8' : '#475569';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        viewBox="0 0 200 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-label="WTL Bikes"
      >
        {/* Dynamic geometric bicycle-inspired speed monogram icon */}
        <g id="wtl-symbol">
          {/* Outer technical dynamic hexagon / forward chevron */}
          <path
            d="M6 22L16 4H34L44 22L34 40H16L6 22Z"
            stroke={primaryColor}
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="transition-colors duration-300"
          />
          {/* Inner Golden Velocity Triangle / Chain-Link Apex */}
          <path
            d="M25 10L35 28H15L25 10Z"
            fill={yellowColor}
            className="transition-colors duration-300"
          />
          {/* Kinetic Speed Slice */}
          <line
            x1="12"
            y1="22"
            x2="38"
            y2="22"
            stroke="#070D18"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="25" cy="22" r="3" fill="#070D18" />
        </g>

        {/* WTL Wordmark: Crisp, bold, athletic geometric letterforms */}
        <g id="wtl-wordmark">
          {/* Letter W */}
          <path
            d="M56 10L63 34H68.5L73.5 17.5L78.5 34H84L91 10H84.5L80.5 26.5L75.5 10H71.5L66.5 26.5L62.5 10H56Z"
            fill={primaryColor}
          />
          {/* Letter T with angled golden accent */}
          <path
            d="M93 10H112V15.5H105.5V34H99.5V15.5H93V10Z"
            fill={primaryColor}
          />
          {/* Letter L */}
          <path
            d="M116 10H122V28.5H134V34H116V10Z"
            fill={primaryColor}
          />
          {/* Warm Yellow kinetic speed bar on T/L junction */}
          <rect
            x="109"
            y="10"
            width="10"
            height="3.5"
            fill={yellowColor}
          />
        </g>

        {/* BIKES Sub-brand text: precisely tracked */}
        <text
          x="142"
          y="31"
          fill={yellowColor}
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="11.5"
          letterSpacing="0.32em"
        >
          BIKES
        </text>

        {/* Tiny technical dot mark */}
        <circle cx="192" cy="27" r="1.5" fill={primaryColor} />
      </svg>

      {showTagline && (
        <span
          className="hidden sm:inline-block border-l border-white/15 pl-2.5 text-[10px] font-mono tracking-widest uppercase"
          style={{ color: subtextColor }}
        >
          ENGINEERED
        </span>
      )}
    </div>
  );
};
