import HeroBackground from './HeroBackground'
import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section className="relative min-h-[720px] flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-6">

      <HeroBackground />

      {/* GRADIENT GLOW */}
      <div
        className="absolute top-[120px] w-[520px] h-[520px] rounded-full blur-3xl opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(124,58,237,0.55), transparent 70%)'
        }}
      />

      {/* TRUST BADGE */}
      <div
        className="relative z-10 flex items-center gap-2 rounded-full px-5 py-2 mb-8"
        style={{
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.45)',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

        <span className="text-[12px] font-bold text-gray-700 tracking-wide">
          TRUSTED CREATIVE DISCOVERY PLATFORM
        </span>
      </div>

      {/* HERO LOGO */}
      <div
        className="relative z-10 mb-7"
        style={{
          filter:
            'drop-shadow(0 18px 60px rgba(124,58,237,0.25))'
        }}
      >
        <LogoIcon size={190} />
      </div>

      {/* HEADLINE */}
      <h1
        className="relative z-10 font-extrabold text-center leading-[0.95] tracking-tight mb-6"
        style={{
          fontSize: 'clamp(58px,10vw,104px)'
        }}
      >
        <span className="text-gray-900">
          Creative
        </span>

        <span className="gradient-check">
          Check
        </span>
      </h1>

      {/* SUBTITLE */}
      <p
        className="relative z-10 text-center max-w-[860px] text-gray-600 leading-relaxed font-medium mb-10"
        style={{
          fontSize: 'clamp(16px,2vw,22px)'
        }}
      >
        Discover photographers, filmmakers, studios, agencies,
        models and creative professionals through public
        professional visibility, portfolio presence and trusted
        creative discovery.
      </p>

      {/* CTA BUTTONS */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-14">

        <a
          href="#studios"
          className="h-[56px] px-8 rounded-2xl bg-violet-600 text-white font-bold text-[14px] flex items-center justify-center hover:scale-[1.03] transition-all"
          style={{
            boxShadow:
              '0 10px 30px rgba(124,58,237,0.35)'
          }}
        >
          Explore Profiles
        </a>

        <a
          href="#add-profile"
          className="h-[56px] px-8 rounded-2xl bg-white border border-gray-200 text-gray-800 font-bold text-[14px] flex items-center justify-center hover:border-violet-300 hover:bg-violet-50 transition-all"
        >
          Submit Your Profile
        </a>

      </div>

      {/* LIVE STATS */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl w-full">

        <div className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-6 text-center shadow-xl">
          <h3 className="text-3xl font-extrabold text-gray-900">
            2.4K+
          </h3>

          <p className="text-[12px] font-semibold tracking-wide text-gray-500 mt-2">
            PUBLIC CREATIVE PROFILES
          </p>
        </div>

        <div className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-6 text-center shadow-xl">
          <h3 className="text-3xl font-extrabold text-gray-900">
            850+
          </h3>

          <p className="text-[12px] font-semibold tracking-wide text-gray-500 mt-2">
            VERIFIED CREATIVES
          </p>
        </div>

        <div className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-6 text-center shadow-xl">
          <h3 className="text-3xl font-extrabold text-gray-900">
            72
          </h3>

          <p className="text-[12px] font-semibold tracking-wide text-gray-500 mt-2">
            CREATIVE CATEGORIES
          </p>
        </div>

        <div className="bg-white/75 backdrop-blur-xl border border-white/50 rounded-3xl p-6 text-center shadow-xl">
          <h3 className="text-3xl font-extrabold text-gray-900">
            31
          </h3>

          <p className="text-[12px] font-semibold tracking-wide text-gray-500 mt-2">
            COUNTRIES DISCOVERED
          </p>
        </div>

      </div>

    </section>
  )
}
