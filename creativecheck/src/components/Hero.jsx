import LogoIcon from './LogoIcon'

export default function Hero({ searchQuery, setSearchQuery }) {
  return (
    <section
      id="discover"
      className="relative min-h-screen px-8 py-8 flex flex-col overflow-hidden"
    >

      {/* HEADER */}
      <header className="relative z-10 flex items-center justify-between">

        {/* LOGO */}
        <a href="#discover" className="flex items-center gap-4">
          <LogoIcon size={48} />

          <h1 className="text-[34px] font-black tracking-[-2px]">
            <span className="text-[#0f172a]">
              Creative
            </span>

            <span className="gradient-check">
              Check
            </span>
          </h1>
        </a>

        {/* NAVBAR */}
        <nav className="hidden lg:flex items-center gap-9 text-[15px] font-semibold text-[#0f172a]">

          <a
            href="#discover"
            className="hover:text-violet-600 transition"
          >
            Discover
          </a>

          <a
            href="#categories"
            className="hover:text-violet-600 transition"
          >
            Categories
          </a>

          <a
            href="#resources"
            className="hover:text-violet-600 transition"
          >
            Resources
          </a>

          <a
            href="#about"
            className="hover:text-violet-600 transition"
          >
            About
          </a>

        </nav>

        {/* BUTTON */}
        <a
          href="#add-profile"
          className="
            hidden
            md:flex
            bg-[#0f172a]
            text-white
            px-7
            py-3
            rounded-full
            font-semibold
            shadow-[0_12px_32px_rgba(15,23,42,0.18)]
            hover:bg-violet-600
            transition
          "
        >
          + Add Your Profile
        </a>

      </header>

      {/* HERO */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">

        <div className="mb-6 text-[11px] uppercase tracking-[4px] text-gray-400 font-bold">
          Public Creative Discovery Platform
        </div>

        <h2 className="text-[58px] md:text-[88px] font-black tracking-[-4px] leading-[1] text-[#0f172a] max-w-5xl">
          Discover Creatives
          <br />

          <span className="gradient-check">
            with Confidence
          </span>
        </h2>

        <p className="mt-7 max-w-2xl text-[18px] text-gray-500 leading-relaxed">
          Discover creative professionals through public visibility,
          portfolio presence and trusted creative discovery.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-10 w-full max-w-2xl">

          <div
            className="
              flex
              items-center
              bg-white/80
              backdrop-blur-xl
              border
              border-white/80
              shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              rounded-[28px]
              px-5
              py-4
            "
          >

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search creatives..."
              className="
                w-full
                bg-transparent
                outline-none
                px-3
                text-[16px]
                text-[#0f172a]
              "
            />

            <button
              className="
                bg-[#0f172a]
                text-white
                px-5
                py-2
                rounded-full
                text-sm
                font-semibold
                hover:bg-violet-600
                transition
              "
            >
              Search
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}
