export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* ── LEFT: purple / lavender / magenta brushstroke ── */}
      <svg className="absolute left-0 top-0" style={{width:'48%',height:'100%'}} viewBox="0 0 580 520" preserveAspectRatio="xMinYMin slice">
        <defs>
          <filter id="bp"><feGaussianBlur stdDeviation="38"/></filter>
          <filter id="bp2"><feGaussianBlur stdDeviation="22"/></filter>
        </defs>
        <ellipse cx="60"  cy="240" rx="240" ry="320" fill="rgba(196,181,253,0.52)" filter="url(#bp)"/>
        <ellipse cx="160" cy="160" rx="180" ry="240" fill="rgba(167,139,250,0.45)" filter="url(#bp)"/>
        <ellipse cx="80"  cy="380" rx="200" ry="180" fill="rgba(232,121,249,0.30)" filter="url(#bp2)"/>
        <ellipse cx="220" cy="80"  rx="140" ry="160" fill="rgba(216,180,254,0.40)" filter="url(#bp2)"/>
        <ellipse cx="30"  cy="100" rx="120" ry="200" fill="rgba(245,208,254,0.35)" filter="url(#bp)"/>
      </svg>

      {/* ── TOP RIGHT: coral / orange / pink wash ── */}
      <svg className="absolute right-0 top-0" style={{width:'55%',height:'72%'}} viewBox="0 0 680 420" preserveAspectRatio="xMaxYMin slice">
        <defs>
          <filter id="bc"><feGaussianBlur stdDeviation="42"/></filter>
          <filter id="bc2"><feGaussianBlur stdDeviation="26"/></filter>
        </defs>
        <ellipse cx="600" cy="60"  rx="320" ry="260" fill="rgba(254,215,170,0.72)" filter="url(#bc)"/>
        <ellipse cx="560" cy="180" rx="260" ry="220" fill="rgba(251,146,60,0.38)"  filter="url(#bc)"/>
        <ellipse cx="520" cy="40"  rx="200" ry="160" fill="rgba(253,186,116,0.55)" filter="url(#bc2)"/>
        <ellipse cx="640" cy="200" rx="200" ry="180" fill="rgba(244,114,182,0.28)" filter="url(#bc2)"/>
        <ellipse cx="480" cy="100" rx="160" ry="130" fill="rgba(249,168,212,0.35)" filter="url(#bc2)"/>
      </svg>

      {/* ── BOTTOM RIGHT: aqua / teal ── */}
      <svg className="absolute right-0 bottom-0" style={{width:'42%',height:'55%'}} viewBox="0 0 520 320" preserveAspectRatio="xMaxYMax slice">
        <defs>
          <filter id="bt"><feGaussianBlur stdDeviation="34"/></filter>
        </defs>
        <ellipse cx="440" cy="260" rx="280" ry="220" fill="rgba(103,232,249,0.55)" filter="url(#bt)"/>
        <ellipse cx="380" cy="190" rx="210" ry="170" fill="rgba(34,211,238,0.38)"  filter="url(#bt)"/>
        <ellipse cx="500" cy="300" rx="160" ry="140" fill="rgba(6,182,212,0.30)"   filter="url(#bt)"/>
      </svg>

      {/* ── DOODLES & DOTS ── */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1300 520" preserveAspectRatio="xMidYMid slice">
        {/* Left squiggle */}
        <path d="M195 295 Q212 272 230 295 Q248 318 266 295 Q284 272 300 295"
          stroke="#c084fc" strokeWidth="2.8" fill="none" strokeLinecap="round" opacity="0.7"/>
        {/* Right upper squiggle */}
        <path d="M1020 155 Q1040 130 1060 155"
          stroke="#f472b6" strokeWidth="3.2" fill="none" strokeLinecap="round" opacity="0.65"/>
        {/* Dot grid top-right */}
        {[0,1,2,3].flatMap(r=>[0,1,2,3,4].map(c=>(
          <circle key={`${r}${c}`} cx={1080+c*18} cy={50+r*18} r="2.8" fill="#9ca3af" opacity="0.45"/>
        )))}
        {/* Scattered accent dots */}
        <circle cx="108"  cy="168" r="6"   fill="#a78bfa" opacity="0.55"/>
        <circle cx="155"  cy="388" r="4.5" fill="#f97316" opacity="0.5"/>
        <circle cx="1110" cy="108" r="5"   fill="#f472b6" opacity="0.5"/>
        <circle cx="1058" cy="410" r="4.5" fill="#22d3ee" opacity="0.5"/>
        <circle cx="920"  cy="58"  r="4"   fill="#fbbf24" opacity="0.5"/>
        <circle cx="320"  cy="445" r="4"   fill="#818cf8" opacity="0.45"/>
        {/* Right pink diamond */}
        <path d="M1168 340 L1180 325 L1192 340 L1180 355 Z"
          stroke="#f472b6" strokeWidth="1.8" fill="rgba(244,114,182,0.15)" opacity="0.8"/>
        {/* Small arc doodle right */}
        <path d="M965 220 Q980 200 995 220"
          stroke="#7c3aed" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4"/>
      </svg>
    </div>
  )
}
