/* src/components/Hero.jsx */

import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[820px] flex flex-col items-center justify-center px-6 pt-24 pb-20 bg-[#f5f3ff]">

      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* TOP LEFT */}
        <div
          className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              'linear-gradient(135deg,#ff00cc 0%,#7c3aed 45%,#00c2ff 100%)'
          }}
        />

        {/* TOP RIGHT */}
        <div
          className="absolute top-[20px] right-[-100px] w-[420px] h-[420px] rounded-full blur-3xl opacity-50"
          style={{
            background:
              'linear-gradient(135deg,#ff8a00 0%,#ff3d81 45%,#9333ea 100%)'
          }}
        />

        {/* BOTTOM */}
        <div
          className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[400px] rounded-full blur-3xl opacity-30"
          style={{
            background:
              'linear-gradient(90deg,#8b5cf6,#ec4899,#06b6d4)'
          }}
        />

      </div>

      {/* GLASS TRUST BADGE */}
      <div
        className="relative z-20 mb-8 px-6 py-3 rounded-full border border-white/50 backdrop-blur-xl"
        style={{
          background: 'rgba(255,255,255,0.45)',
          boxShadow: '0 12px 40px rgba(124,58,237,0.12)'
        }}
      >
        <span className="text-[12px] font-black tracking-[2px] uppercase text-violet-700">
          Trusted Creative Discovery Platform
        </span>
      </div>

      {/* FLOATING GLASS CARD */}
      <div
        className="relative z-20 rounded-[38px] border border-white/50 backdrop-blur-2xl px-10 py-14 flex flex-col items-center"
        style={{
          background: 'rgba(255,255,255,0.38)',
          boxShadow:
            '0 25px 80px rgba(15,23,42,0.12)'
        }}
      >

        {/* SMALL FLOATING ELEMENTS */}
        <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-pink-400" />
        <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-cyan-400" />
        <div className="absolute bottom-8 left-16 w-4 h-4 rounded-full bg-violet-400 opacity-70" />

        {/* LOGO */}
        <div
          className="mb-6"
          style={{
            filter:
              'drop-shadow(0 25px 70px rgba(124,58,237,0.35))'
          }}
        >
          <LogoIcon size={185} />
        </div>

        {/* PREMIUM TITLE */}
        <h1
          className="text-center font-black leading-[0.92] tracking-[-4px]"
          style={{
            fontSize: 'clamp(72px,11vw,130px)',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}
        >
          <span className="text-[#0f172a]">
            Creative
          </span>

          <span
            style={{
              background:
                'linear-gradient(90deg,#7c3aed 0%,#ec4899 30%,#ff7a18 65%,#06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Check
          </span>
        </h1>

        {/* SUBTITLE */}
        <p
          className="text-center text-gray-600 leading-relaxed font-medium mt-7 max-w-[760px]"
          style={{
            fontSize: 'clamp(18px,2vw,24px)'
          }}
        >
          Discover creative professionals through public
          professional visibility, portfolio presence and
          trusted creative discovery.
        </p>

        {/* PREMIUM CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">

          <a
            href="#studios"
            className="h-[58px] px-8 rounded-2xl text-white font-bold text-[14px] flex items-center justify-center transition-all hover:scale-[1.03]"
            style={{
              background:
                'linear-gradient(90deg,#7c3aed,#ec4899)',
              boxShadow:
                '0 15px 40px rgba(124,58,237,0.35)'
            }}
          >
            Explore Profiles
          </a>

          <a
            href="#add-profile"
            className="h-[58px] px-8 rounded-2xl bg-white/70 border border-white/60 text-gray-800 font-bold text-[14px] flex items-center justify-center backdrop-blur-md hover:bg-white transition-all"
            style={{
              boxShadow:
                '0 10px 30px rgba(15,23,42,0.08)'
            }}
          >
            Submit Your Profile
          </a>

        </div>

      </div>

      {/* PREMIUM STATS */}
      <div className="relative z-20 grid grid-cols-2 md:grid-cols-4 gap-5 mt-14 w-full max-w-6xl">

        <div className="rounded-[28px] border border-white/50 backdrop-blur-xl bg-white/45 p-7 text-center"
             style={{ boxShadow:'0 18px 50px rgba(15,23,42,0.08)' }}>
          <h3 className="text-4xl font-black text-[#0f172a]">
            2.4K+
          </h3>

          <p className="text-[11px] tracking-[1.6px] uppercase font-bold text-gray-500 mt-3">
            Creative Profiles
          </p>
        </div>

        <div className="rounded-[28px] border border-white/50 backdrop-blur-xl bg-white/45 p-7 text-center"
             style={{ boxShadow:'0 18px 50px rgba(15,23,42,0.08)' }}>
          <h3 className="text-4xl font-black text-[#0f172a]">
            850+
          </h3>

          <p className="text-[11px] tracking-[1.6px] uppercase font-bold text-gray-500 mt-3">
            Verified Creatives
          </p>
        </div>

        <div className="rounded-[28px] border border-white/50 backdrop-blur-xl bg-white/45 p-7 text-center"
             style={{ boxShadow:'0 18px 50px rgba(15,23,42,0.08)' }}>
          <h3 className="text-4xl font-black text-[#0f172a]">
            72
          </h3>

          <p className="text-[11px] tracking-[1.6px] uppercase font-bold text-gray-500 mt-3">
            Categories
          </p>
        </div>

        <div className="rounded-[28px] border border-white/50 backdrop-blur-xl bg-white/45 p-7 text-center"
             style={{ boxShadow:'0 18px 50px rgba(15,23,42,0.08)' }}>
          <h3 className="text-4xl font-black text-[#0f172a]">
            31
          </h3>

          <p className="text-[11px] tracking-[1.6px] uppercase font-bold text-gray-500 mt-3">
            Countries
          </p>
        </div>

      </div>

    </section>
  )
}
