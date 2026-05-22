/* REPLACE ENTIRE FILE */
/* src/components/Hero.jsx */

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen bg-[#f7f5ff]"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}
    >

      {/* LEFT COLOR SPLASH */}
      <div
        className="absolute left-[-180px] top-[120px] w-[480px] h-[480px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            'linear-gradient(135deg,#8b5cf6 0%,#ff00cc 45%,#ff7a18 100%)'
        }}
      />

      {/* RIGHT COLOR SPLASH */}
      <div
        className="absolute right-[-180px] top-[80px] w-[500px] h-[500px] rounded-full blur-3xl opacity-70"
        style={{
          background:
            'linear-gradient(135deg,#ff4fd8 0%,#ff7a18 50%,#06b6d4 100%)'
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* NAVBAR */}
        <div className="flex items-center justify-between pt-8">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div
              className="w-[64px] h-[64px] rounded-full flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg,#7c3aed,#ec4899,#06b6d4)',
                boxShadow:
                  '0 15px 40px rgba(124,58,237,0.35)'
              }}
            >
              <div className="w-[42px] h-[42px] rounded-full bg-white flex items-center justify-center text-[22px] font-black">
                ✓
              </div>
            </div>

            <h2
              className="font-black tracking-[-2px]"
              style={{
                fontSize: '42px'
              }}
            >
              <span className="text-[#0f172a]">
                Creative
              </span>

              <span
                style={{
                  background:
                    'linear-gradient(90deg,#7c3aed,#ec4899,#ff7a18,#06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Check
              </span>
            </h2>

          </div>

          {/* NAV */}
          <div className="hidden lg:flex items-center gap-12 text-[15px] font-semibold text-gray-700">
            <a href="#">Discover</a>
            <a href="#">Categories</a>
            <a href="#">Studios</a>
            <a href="#">Agencies</a>
            <a href="#">Resources</a>
            <a href="#">About</a>
          </div>

          {/* BUTTON */}
          <button
            className="h-[52px] px-8 rounded-full text-white font-bold text-[14px]"
            style={{
              background:
                'linear-gradient(90deg,#0f172a,#111827)',
              boxShadow:
                '0 15px 40px rgba(15,23,42,0.2)'
            }}
          >
            + Add Your Profile
          </button>

        </div>

        {/* HERO CENTER */}
        <div className="flex flex-col items-center text-center pt-24">

          {/* TRUST BADGE */}
          <div
            className="px-6 py-3 rounded-full border border-white/60 mb-10"
            style={{
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(16px)',
              boxShadow:
                '0 12px 40px rgba(124,58,237,0.12)'
            }}
          >
            <span className="text-[12px] font-black tracking-[2px] uppercase text-violet-700">
              Trusted Creative Discovery Platform
            </span>
          </div>

          {/* TITLE */}
          <h1
            className="font-black leading-[0.9] tracking-[-6px] max-w-5xl"
            style={{
              fontSize: 'clamp(82px,12vw,150px)'
            }}
          >
            <span className="text-[#0f172a]">
              Discover Creatives
            </span>

            <br />

            <span className="text-[#0f172a]">
              with
            </span>

            <span
              style={{
                background:
                  'linear-gradient(90deg,#7c3aed,#ec4899,#ff7a18,#14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {' '}Confidence
            </span>
          </h1>

          {/* SUBTITLE */}
          <p
            className="max-w-3xl text-gray-600 mt-10 leading-relaxed"
            style={{
              fontSize: '24px',
              fontWeight: 500
            }}
          >
            Explore verified creative professionals through
            public visibility, portfolio presence and trusted
            creative discovery.
          </p>

          {/* SEARCH */}
          <div
            className="w-full max-w-5xl h-[88px] rounded-full mt-14 flex items-center px-8"
            style={{
              background: 'rgba(255,255,255,0.78)',
              backdropFilter: 'blur(18px)',
              boxShadow:
                '0 20px 70px rgba(15,23,42,0.12)'
            }}
          >

            <input
              type="text"
              placeholder="Search creatives, artists, studios, agencies, production companies..."
              className="flex-1 bg-transparent outline-none text-[20px] text-gray-700"
            />

            <button
              className="w-[66px] h-[66px] rounded-full text-white text-[24px] font-bold"
              style={{
                background:
                  'linear-gradient(135deg,#7c3aed,#9333ea)',
                boxShadow:
                  '0 15px 40px rgba(124,58,237,0.35)'
              }}
            >
              ⌕
            </button>

          </div>

          {/* CATEGORY PILLS */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 max-w-6xl">

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
              'Agencies',
              'Production Companies'
            ].map((item) => (
              <div
                key={item}
                className="px-7 h-[54px] rounded-full flex items-center justify-center text-[15px] font-semibold"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(12px)',
                  boxShadow:
                    '0 10px 25px rgba(15,23,42,0.06)'
                }}
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
