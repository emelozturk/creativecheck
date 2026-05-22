/* PREMIUM HERO STYLE — CreativeCheck */
/* src/components/Hero.jsx */

import HeroBackground from './HeroBackground'
import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[720px] flex flex-col items-center justify-center px-6 pt-24 pb-16 bg-[#f7f4ff]">

      {/* PREMIUM BACKGROUND */}
      <HeroBackground />

      {/* LEFT GRADIENT */}
      <div
        className="absolute left-[-180px] top-[120px] w-[420px] h-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            'linear-gradient(135deg,#ff4fd8 0%,#7c3aed 45%,#38bdf8 100%)'
        }}
      />

      {/* RIGHT GRADIENT */}
      <div
        className="absolute right-[-160px] top-[60px] w-[380px] h-[380px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            'linear-gradient(135deg,#ff7a18 0%,#ff3d81 45%,#8b5cf6 100%)'
        }}
      />

      {/* FLOATING ORBS */}
      <div className="absolute top-[180px] right-[18%] w-6 h-6 rounded-full bg-violet-400 opacity-60 blur-[1px]" />
      <div className="absolute top-[320px] left-[18%] w-4 h-4 rounded-full bg-pink-400 opacity-70" />
      <div className="absolute bottom-[180px] right-[24%] w-5 h-5 rounded-full bg-cyan-400 opacity-60" />

      {/* TRUST BADGE */}
      <div
        className="relative z-10 mb-8 px-5 py-2 rounded-full border border-white/50 backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,0.55)',
          boxShadow: '0 8px 40px rgba(124,58,237,0.12)'
        }}
      >
        <span className="text-[12px] font-bold tracking-[1.8px] uppercase text-violet-700">
          Trusted Creative Discovery Platform
        </span>
      </div>

      {/* LOGO */}
      <div
        className="relative z-10 mb-5"
        style={{
          filter:
            'drop-shadow(0 20px 60px rgba(124,58,237,0.25))'
        }}
      >
        <LogoIcon size={170} />
      </div>

      {/* TITLE */}
      <h1
        className="relative z-10 text-center font-black tracking-[-3px] leading-[0.95]"
        style={{
          fontSize: 'clamp(64px,10vw,112px)',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}
      >
        <span className="text-[#0f172a]">Creative</span>

        <span
          style={{
            background:
              'linear-gradient(90deg,#7c3aed 0%,#ec4899 30%,#f97316 65%,#14b8a6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Check
        </span>
      </h1>

      {/* SUBTITLE */}
      <p
        className="relative z-10 text-center max-w-[860px] text-gray-600 leading-relaxed font-medium mt-6"
        style={{
          fontSize: 'clamp(18px,2vw,24px)'
        }}
      >
        Discover creative professionals through public
        professional visibility, portfolio presence and
        trusted creative discovery.
      </p>

      {/* PREMIUM GLOW */}
      <div
        className="absolute bottom-[-120px] w-[900px] h-[300px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            'linear-gradient(90deg,#8b5cf6,#ec4899,#38bdf8)'
        }}
      />
    </section>
  )
}
