import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section
      id="discover"
      className="relative overflow-hidden min-h-screen"
      style={{
        background:
          'linear-gradient(135deg,#fff8fb 0%,#f8f5ff 45%,#f3fdff 100%)'
      }}
    >

      {/* BACKGROUND BLOBS */}
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
        <div
          className="
            w-full
            flex
            items-center
            justify-between
            px-8
            py-5
            rounded-[30px]
            border
            border-white/60
            bg-white/70
            backdrop-blur-2xl
            shadow-[0_10px_60px_rgba(15,23,42,0.08)]
          "
        >

          {/* LOGO */}
          <a
            href="#discover"
            className="flex items-center gap-4"
          >
            <LogoIcon size={50} />

            <h1 className="text-[42px] font-black tracking-[-3px] leading-none">

              <span className="text-[#0f172a]">
                Creative
              </span>

              <span className="bg-gradient-to-r from-violet-500 via-pink-500 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Check
              </span>

            </h1>
          </a>

          {/* NAVIGATION */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-12
              bg-white/80
              backdrop-blur-xl
              px-10
              py-4
              rounded-full
              border
              border-white/70
              shadow-lg
            "
          >

            {/* DISCOVER */}
            <a
              href="#discover"
              className="
                flex
                flex-col
                items-center
                group
                transition
              "
            >
              <span
                className="
                  text-[17px]
                  font-bold
                  text-[#0f172a]
                  group-hover:text-violet-600
                  transition
                "
              >
                Discover
              </span>

              <span
                className="
                  text-[11px]
                  text-gray-500
                  mt-1
                "
              >
                Explore creatives
              </span>
            </a>

            {/* RESOURCES */}
            <a
              href="#resources"
              className="
                flex
                flex-col
                items-center
                group
                transition
              "
            >
              <span
                className="
                  text-[17px]
                  font-bold
                  text-[#0f172a]
                  group-hover:text-violet-600
                  transition
                "
              >
                Resources
              </span>

              <span
                className="
                  text-[11px]
                  text-gray-500
                  mt-1
                "
              >
                Public guides & help
              </span>
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              className="
                flex
                flex-col
                items-center
                group
                transition
              "
            >
              <span
                className="
                  text-[17px]
                  font-bold
                  text-[#0f172a]
                  group-hover:text-violet-600
                  transition
                "
              >
                About
              </span>

              <span
                className="
                  text-[11px]
                  text-gray-500
                  mt-1
                "
              >
                Platform information
              </span>
            </a>

          </nav>

          {/* BUTTON */}
          <a
            href="#add-profile"
            className="
              hidden
              md:flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              bg-[#071133]
              text-white
              text-[16px]
              font-bold
              shadow-[0_15px_40px_rgba(15,23,42,0.25)]
              hover:scale-105
              hover:bg-violet-600
              transition-all
              duration-300
            "
          >
            + Add Your Profile
          </a>

        </div>

        {/* HERO CONTENT */}
        <div className="flex flex-col items-center text-center pt-24 pb-24">

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
              placeholder="Search creatives, artists, photographers, filmmakers..."
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
              'Content Creators'
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
