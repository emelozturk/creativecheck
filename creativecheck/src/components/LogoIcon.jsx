export default function LogoIcon({ size = 56 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
      >
        <defs>
          <linearGradient id="creativeGradient" x1="10" y1="85" x2="90" y2="15">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="35%" stopColor="#2563eb" />
            <stop offset="70%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>

          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d="M74 24C67 17 57 13 46 14C26 16 12 32 13 52C14 71 31 86 50 85C61 84 70 80 77 72"
          stroke="url(#creativeGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        <path
          d="M28 53L43 68L78 31"
          stroke="url(#creativeGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        <path
          d="M22 70C35 82 55 86 73 76"
          stroke="#06b6d4"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />

        <path
          d="M19 31C28 18 46 10 64 16"
          stroke="#ec4899"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    </div>
  )
}
