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

      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="absolute top-[-120px] right-[-100px] w-[620px] h-[620px] rounded-full blur-3xl opacity-80"
          style={{
            background:
              'radial-gradient(circle,#ff5ea9 0%,#ff7a18 40%,transparent 72%)'
          }}
        />

        <div
          className="absolute bottom-[-180px] left-[-120px] w-[540px] h-[540px] rounded-full blur-3xl opacity-70"
          style={{
            background:
              'radial-gradient(circle,#7c3aed 0%,#ec4899 45%,transparent 72%)'
          }}
        />

        <div
          className="absolute bottom-[-140px] right-[-100px] w-[500px] h-[500px] rounded-full blur-3xl opacity-70"
          style={{
            background:
              'radial-gradient(circle,#22d3ee 0%,#14b8a6 45%,transparent 70%)'
          }}
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-8">

        {/* NAVBAR */}
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <LogoIcon size={56} />

            <h1 className="text-[48px] font-black tracking-[-3px] leading-none">
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
            </h1>

          </div>

          <div className="hidden lg:flex items-center gap-10 text-[14px] font-bold text-[#111827]">
            <a href="#discover">Discover</a>
            <a href="#categories">Categories</a>
            <a href="#studios">Studios</a>
            <a href="#agencies">Agencies</a>
            <a href="#resources">Resources</a>
            <a href="#about">About</a>
          </div>

          <div className="flex items-center gap-3">

            <a
              href="#add-profile"
              className="hidden md:flex h-12 px-7 rounded-full items-center justify-center text-white font-bold shadow-2xl"
              style={{
                background:
                  'linear-gradient(135deg,#0f172a,#111827)'
              }}
            >
              + Add Your Profile
            </a>

            <button className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-lg">
              ☼
            </button>

            <button className="w-12 h-12 rounded-full bg-white/70 backdrop-blur-xl border border-white shadow-lg">
              ☰
            </button>

          </div>

        </div>

        {/* HERO CENTER */}
        <div className="flex flex-col items-center text-center pt-14">

          <div
            className="mb-5"
            style={{
              filter:
                'drop-shadow(0 20px 40px rgba(124,58,237,0.25))'
            }}
          >
            <LogoIcon size={210} />
          </div>

          <h2
            className="font-black leading-[0.88] tracking-[-6px]"
            style={{
              fontSize:
                'clamp(70px,10vw,128px)'
            }}
          >
            <span className="text-[#020617]">
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
          </h2>

          <p className="mt-5 text-[15px] tracking-[8px] uppercase font-semibold text-gray-500">
            Discover Creatives With Confidence
          </p>

          {/* SEARCH */}
          <div
            className="w-full max-w-5xl mt-10 bg-white/85 backdrop-blur-2xl rounded-full border border-white/70 flex items-center px-6 py-4 shadow-2xl"
            style={{
              boxShadow:
                '0 20px 60px rgba(15,23,42,0.10)'
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
                  'linear-gradient(135deg,#7c3aed,#8b5cf6)'
              }}
            >
              ⌕
            </button>

          </div>

          {/* CATEGORY PILLS */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-6xl">

            {[
              'All',
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
            ].map((item, index) => (
              <div
                key={item}
                className={`px-7 py-4 rounded-full text-[14px] font-bold shadow-lg border border-white/70 ${
                  index === 0
                    ? 'text-white'
                    : 'bg-white/85 text-gray-700'
                }`}
                style={{
                  background:
                    index === 0
                      ? 'linear-gradient(135deg,#7c3aed,#8b5cf6)'
                      : ''
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
