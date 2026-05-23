import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen"
      style={{
        background:
          'linear-gradient(135deg,#fff8fb 0%,#f8f5ff 45%,#f3fdff 100%)'
      }}
    >

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute top-[-120px] right-[-100px] w-[620px] h-[620px] rounded-full blur-3xl opacity-70"
          style={{
            background:
              'radial-gradient(circle,#ff5ea9 0%,#ff7a18 40%,transparent 72%)'
          }}
        />

        <div
          className="absolute bottom-[-180px] left-[-120px] w-[540px] h-[540px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              'radial-gradient(circle,#7c3aed 0%,#ec4899 45%,transparent 72%)'
          }}
        />

        <div
          className="absolute bottom-[-140px] right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              'radial-gradient(circle,#22d3ee 0%,#14b8a6 45%,transparent 70%)'
          }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6">

        {/* NAVBAR */}
        <div className="flex items-center justify-between h-[74px]">

          {/* LOGO */}
          <a
            href="#discover"
            className="flex items-center gap-3"
          >
            <LogoIcon size={48} />

            <span className="text-[30px] md:text-[34px] font-black tracking-[-2px] leading-none">
              <span className="text-[#0f172a]">
                Creative
              </span>

              <span
                style={{
                  background:
                    'linear-gradient(90deg,#7c3aed,#ec4899,#ff7a18,#14b8a6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Check
              </span>
            </span>
          </a>

          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-bold text-[#111827]">

            <a
              href="#discover"
              className="hover:text-violet-600 transition-colors"
            >
              Discover
            </a>

            <a
              href="#verified"
              className="hover:text-violet-600 transition-colors"
            >
              Verified
            </a>

            <a
              href="#top-creatives"
              className="hover:text-violet-600 transition-colors"
            >
              Top Creatives
            </a>

            <a
              href="#resources"
              className="hover:text-violet-600 transition-colors"
            >
              Resources
            </a>

            <a
              href="#reviews"
              className="hover:text-violet-600 transition-colors"
            >
              Reviews
            </a>

            <a
              href="#about"
              className="hover:text-violet-600 transition-colors"
            >
              About
            </a>

          </nav>

          {/* BUTTON */}
          <a
            href="#add-profile"
            className="hidden md:flex h-[48px] px-7 rounded-full items-center justify-center text-white text-[14px] font-bold shadow-2xl"
            style={{
              background:
                'linear-gradient(135deg,#0f172a,#111827)',
              boxShadow:
                '0 12px 35px rgba(15,23,42,0.25)'
            }}
          >
            + Add Your Profile
          </a>

        </div>

        {/* HERO CONTENT */}
        <div className="flex flex-col items-center text-center pt-20 pb-24">

          {/* TOP BADGE */}
          <div
            className="mb-6 px-6 py-3 rounded-full bg-white/75 border border-white/70 shadow-lg backdrop-blur-xl"
            style={{
              boxShadow:
                '0 12px 30px rgba(124,58,237,0.08)'
            }}
          >
            <span className="text-[11px] font-black tracking-[2px] uppercase text-violet-700">
              Trusted Creative Discovery Platform
            </span>
          </div>

          {/* HEADLINE */}
          <h1
            className="max-w-6xl font-black leading-[0.88] tracking-[-6px]"
            style={{
              fontSize:
                'clamp(68px,10vw,128px)'
            }}
          >
            <span className="text-[#020617]">
              Discover Creatives
            </span>

            <br />

            <span
              style={{
                background:
                  'linear-gradient(90deg,#7c3aed,#ec4899,#ff7a18,#14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              with Confidence
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="max-w-3xl mt-8 text-[20px] md:text-[22px] leading-relaxed text-gray-600 font-medium">
            Discover creative professionals through
            public visibility, portfolio presence and
            trusted creative discovery.
          </p>

          {/* SEARCH BAR */}
          <div
            className="w-full max-w-5xl mt-12 bg-white/85 backdrop-blur-2xl rounded-full border border-white/70 flex items-center px-6 py-4 shadow-2xl"
            style={{
              boxShadow:
                '0 25px 70px rgba(15,23,42,0.10)'
            }}
          >

            <div className="text-[24px] text-gray-400 mr-4">
              ⌕
            </div>

            <input
              type="text"
              placeholder="Search creatives, artists, studios, agencies, production companies..."
              className="flex-1 bg-transparent outline-none text-[16px] text-gray-700 font-medium"
            />

            <button
              className="w-14 h-14 rounded-full text-white text-xl shadow-xl"
              style={{
                background:
                  'linear-gradient(135deg,#7c3aed,#8b5cf6)',
                boxShadow:
                  '0 10px 30px rgba(124,58,237,0.35)'
              }}
            >
              ⌕
            </button>

          </div>

          {/* CATEGORY PILLS */}
          <div className="flex flex-wrap justify-center gap-4 mt-9 max-w-6xl">

            {[
              'Photography',
              'Film & Video',
              'Models & Talent',
              'Styling & Beauty',
              'Performance',
              'Music',
              'Design',
              'Content Creators',
              'Studios',
              'Creative Agencies',
              'Production Companies'
            ].map((item) => (
              <div
                key={item}
                className="px-6 py-3 rounded-full bg-white/85 backdrop-blur-xl border border-white/70 shadow-md text-[13px] font-bold text-gray-700 hover:scale-[1.03] transition-transform"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}
