import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section
      className="relative min-h-[760px] overflow-hidden px-6 pt-10 pb-20"
      style={{
        background:
          'radial-gradient(circle at 0% 35%, rgba(236,72,153,0.35), transparent 30%), radial-gradient(circle at 100% 20%, rgba(249,115,22,0.35), transparent 28%), radial-gradient(circle at 100% 65%, rgba(6,182,212,0.30), transparent 28%), linear-gradient(135deg,#fff7fb 0%,#f5f3ff 45%,#ecfeff 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-20">
          <a href="#discover" className="flex items-center gap-3">
            <LogoIcon size={62} />

            <span className="text-4xl font-black tracking-[-2px]">
              <span className="text-[#0f172a]">Creative</span>
              <span className="gradient-check">Check</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-[14px] font-bold text-[#0f172a]">
            <a href="#discover">Discover</a>
            <a href="#categories">Categories</a>
            <a href="#studios">Studios</a>
            <a href="#agencies">Agencies</a>
            <a href="#resources">Resources</a>
            <a href="#about">About</a>
          </nav>

          <a
            href="#add-profile"
            className="hidden md:flex h-12 px-6 rounded-full bg-[#0f172a] text-white items-center justify-center font-bold shadow-xl"
          >
            + Add Your Profile
          </a>
        </div>

        <div className="flex flex-col items-center text-center">

          <div className="mb-8 px-5 py-2 rounded-full bg-white/70 border border-white/70 shadow-lg backdrop-blur-xl">
            <span className="text-[12px] font-black tracking-[2px] uppercase text-violet-700">
              Trusted Creative Discovery Platform
            </span>
          </div>

          <h1
            className="max-w-5xl font-black leading-[0.9] tracking-[-5px] text-[#0f172a]"
            style={{
              fontSize: 'clamp(58px,9vw,118px)'
            }}
          >
            Discover Creatives
            <br />
            with{' '}
            <span
              style={{
                background:
                  'linear-gradient(90deg,#7c3aed,#ec4899,#ff7a18,#14b8a6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Confidence
            </span>
          </h1>

          <p className="max-w-3xl mt-8 text-[19px] md:text-[22px] leading-relaxed text-gray-600 font-medium">
            Discover creative professionals through public visibility,
            portfolio presence and trusted creative discovery.
          </p>

          <div className="w-full max-w-4xl mt-12 bg-white/85 backdrop-blur-xl rounded-full shadow-2xl border border-white/70 px-5 py-4 flex items-center gap-4">
            <span className="text-2xl text-gray-400">⌕</span>

            <input
              type="text"
              placeholder="Search creatives, artists, studios, agencies, production companies..."
              className="flex-1 bg-transparent outline-none text-gray-700 text-[15px] md:text-[17px] font-medium"
            />

            <button className="w-12 h-12 rounded-full bg-violet-600 text-white font-black shadow-lg">
              ⌕
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-5xl">
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
              <span
                key={item}
                className="px-5 py-3 rounded-full bg-white/80 border border-white/70 shadow-md text-[13px] font-bold text-gray-700"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
