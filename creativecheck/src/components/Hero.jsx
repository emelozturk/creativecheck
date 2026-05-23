import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section
      id="discover"
      className="relative min-h-screen px-8 py-8 flex flex-col"
      style={{
        background:
          'linear-gradient(135deg,#fff0fb 0%,#f8f5ff 45%,#f3fdff 100%)'
      }}
    >
      <header className="flex items-center justify-between">
        <a href="#discover" className="flex items-center gap-4">
          <LogoIcon size={54} />

          <h1 className="text-[42px] font-black tracking-[-3px]">
            <span className="text-[#0f172a]">Creative</span>
            <span className="gradient-check">Check</span>
          </h1>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-[16px] font-bold text-[#0f172a]">
          <a href="#discover">Discover</a>
          <a href="#categories">Categories</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
        </nav>

        <a
          href="#add-profile"
          className="hidden md:flex bg-[#0f172a] text-white px-8 py-4 rounded-full font-bold shadow-xl"
        >
          + Add Your Profile
        </a>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="text-[72px] md:text-[104px] font-black tracking-[-6px] leading-[0.95] text-[#0f172a]">
          Discover Creatives
          <br />
          <span className="gradient-check">with Confidence</span>
        </h2>

        <p className="mt-8 max-w-3xl text-[22px] text-gray-600 leading-relaxed">
          Discover creative professionals through public visibility,
          portfolio presence and trusted creative discovery.
        </p>
      </div>
    </section>
  )
}
