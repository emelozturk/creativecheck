export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6"
      style={{
        background:
          'linear-gradient(135deg,#fdf2ff 0%,#eef2ff 35%,#ecfeff 100%)'
      }}
    >

      {/* BIG GRADIENT BLOBS */}
      <div
        className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            'linear-gradient(135deg,#ff00cc,#7c3aed,#06b6d4)'
        }}
      />

      <div
        className="absolute bottom-[-150px] right-[-100px] w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            'linear-gradient(135deg,#ff7a18,#ec4899,#8b5cf6)'
        }}
      />

      {/* GLASS CARD */}
      <div
        className="relative z-10 max-w-5xl w-full rounded-[42px] border border-white/50 p-14 md:p-20 text-center"
        style={{
          background: 'rgba(255,255,255,0.45)',
          backdropFilter: 'blur(24px)',
          boxShadow:
            '0 25px 90px rgba(15,23,42,0.12)'
        }}
      >

        {/* TRUST BADGE */}
        <div className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-white/70 border border-white/60 mb-8">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />

          <span className="text-[12px] font-black tracking-[2px] uppercase text-violet-700">
            Trusted Creative Discovery Platform
          </span>
        </div>

        {/* TITLE */}
        <h1
          className="font-black tracking-[-5px] leading-[0.9]"
          style={{
            fontSize: 'clamp(70px,11vw,140px)',
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
          className="max-w-[760px] mx-auto text-gray-600 leading-relaxed mt-8"
          style={{
            fontSize: 'clamp(18px,2vw,24px)',
            fontWeight: 500
          }}
        >
          Discover creative professionals through public
          professional visibility, portfolio presence and
          trusted creative discovery.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">

          <a
            href="#studios"
            className="h-[60px] px-9 rounded-2xl text-white font-bold text-[14px] flex items-center justify-center transition-all hover:scale-[1.03]"
            style={{
              background:
                'linear-gradient(90deg,#7c3aed,#ec4899)',
              boxShadow:
                '0 18px 45px rgba(124,58,237,0.35)'
            }}
          >
            Explore Profiles
          </a>

          <a
            href="#add-profile"
            className="h-[60px] px-9 rounded-2xl bg-white/80 border border-white/70 text-gray-800 font-bold text-[14px] flex items-center justify-center hover:bg-white transition-all"
          >
            Submit Your Profile
          </a>

        </div>

      </div>

    </section>
  )
}
