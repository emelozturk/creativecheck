export default function LogoIcon({ size = 44 }) {
  const s = size
  const cx = s / 2, cy = s / 2, r = s * 0.36
  const sw = s * 0.14
  const circ = 2 * Math.PI * r
  const gap = circ * 0.13
  const arc = circ - gap
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
      <defs>
        <linearGradient id={`lg${s}`} x1="0" y1="0" x2={s} y2={s} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#7c3aed"/>
          <stop offset="16%"  stopColor="#4f46e5"/>
          <stop offset="30%"  stopColor="#0ea5e9"/>
          <stop offset="45%"  stopColor="#22c55e"/>
          <stop offset="60%"  stopColor="#eab308"/>
          <stop offset="76%"  stopColor="#f97316"/>
          <stop offset="88%"  stopColor="#ef4444"/>
          <stop offset="100%" stopColor="#ec4899"/>
        </linearGradient>
        <filter id={`rough${s}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="3" result="n"/>
          <feDisplacementMap in="SourceGraphic" in2="n" scale={s * 0.02} xChannelSelector="R" yChannelSelector="G"/>
        </filter>
      </defs>
      {/* Thick rainbow arc with painterly edge */}
      <circle cx={cx} cy={cy} r={r} fill="none"
        stroke={`url(#lg${s})`}
        strokeWidth={sw + 2}
        strokeDasharray={`${arc} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(103,${cx},${cy})`}
        filter={`url(#rough${s})`}
      />
      <circle cx={cx} cy={cy} r={r} fill="none"
        stroke={`url(#lg${s})`}
        strokeWidth={sw - 4}
        strokeDasharray={`${arc} ${gap}`}
        strokeLinecap="round"
        transform={`rotate(103,${cx},${cy})`}
        opacity="0.55"
      />
      {/* Splatter dots */}
      {[
        { dx: 0.62, dy: 0.08, r: 0.018, c:"#ec4899" },
        { dx: 0.78, dy: 0.22, r: 0.013, c:"#f97316" },
        { dx: 0.16, dy: 0.72, r: 0.015, c:"#7c3aed" },
        { dx: 0.82, dy: 0.60, r: 0.010, c:"#22c55e" },
        { dx: 0.55, dy: 0.85, r: 0.012, c:"#eab308" },
        { dx: 0.20, dy: 0.25, r: 0.010, c:"#4f46e5" },
      ].map((d,i)=>(
        <circle key={i} cx={s*d.dx} cy={s*d.dy} r={s*d.r} fill={d.c} opacity="0.75"/>
      ))}
      {/* White center */}
      <circle cx={cx} cy={cy} r={r - sw/2 - 1} fill="white"/>
      {/* Checkmark */}
      <path
        d={`M${cx-r*0.38} ${cy+r*0.03} L${cx-r*0.07} ${cy+r*0.37} L${cx+r*0.44} ${cy-r*0.32}`}
        stroke="#111827" strokeWidth={s*0.045} fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  )
}
