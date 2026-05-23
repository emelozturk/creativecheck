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
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6">

        <div className="flex items-center justify-between">
          <a href="#discover" className="flex items-center gap-4">
            <LogoIcon size={62} />

            <h1 className="text-[48px] font-black tracking-[-3px] leading-none">
              <span className="text-[#0f172a]">Creative</span>
              <span className="gradient-check">Check</span>
            </h1>
          </a>

          <nav className="hidden lg:flex items-center gap-10 text-[14px] font-bold text-[#111827]">
            <a href="#discover">Discover</a>
            <a href="#categories">Categories</a>
            <a href="#resources">Resources</a>
            <a href="#about">About</a>
          </nav>

          <a
            href="#add-profile"
            className="hidden md:flex h-12 px-7 rounded-full items-center justify-center text-white font-bold shadow-2xl bg-[#0f172a]"
          >
            + Add Your Profile
          </a>
        </div>

        <div className="flex flex-col items-center text-center pt-20 pb-24">
          <h2
            className="font-black leading-[0.9] tracking-[-5px] text-[#0f172a]"
            style={{ fontSize: 'clamp(58px,9vw,118px)' }}
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
          </h2>

          <p className="max-w-3xl mt-8 text-[19px] md:text-[22px] leading-relaxed text-gray-600 font-medium">
            Discover creative professionals through public visibility,
            portfolio presence and trusted creative discovery.
          </p>
        </div>
      </div>
    </section>
  )
}
