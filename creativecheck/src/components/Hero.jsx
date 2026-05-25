import LogoIcon from './LogoIcon'

const categories = [
  'Visual Arts',
  'Film & Media',
  'Fashion & Beauty',
  'Performance & Music',
  'Creative Business'
]

export default function Hero({
  searchQuery,
  setSearchQuery
}) {
  return (
    <section
      id="discover"
      className="
        relative
        min-h-screen
        px-8
        py-8
        flex
        flex-col
        overflow-hidden
      "
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(79,70,229,0.16), transparent 28%), radial-gradient(circle at 85% 18%, rgba(37,99,235,0.14), transparent 30%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.16), transparent 30%), linear-gradient(135deg,#f8fbff 0%,#f5f7ff 48%,#f4faff 100%)'
      }}
    >

      {/* HEADER */}

      <header className="relative z-10 flex items-center justify-between">

        <a
          href="#discover"
          className="flex items-center gap-4"
        >

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

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-9
            text-[15px]
            font-semibold
            text-[#0f172a]
          "
        >

          <a href="#discover" className="hover:text-blue-600 transition">
            Discover
          </a>

          <a href="#categories" className="hover:text-blue-600 transition">
            Categories
          </a>

          <a href="#resources" className="hover:text-blue-600 transition">
            Resources
          </a>

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

        </nav>

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
            hover:bg-blue-600
            transition
          "
        >
          + Add Your Profile
        </a>

      </header>

      {/* HERO */}

      <div
        className="
          relative
          z-10
          flex-1
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >

        <div
          className="
            mb-6
            text-[11px]
            uppercase
            tracking-[4px]
            text-blue-500
            font-bold
          "
        >
          Public Creative Discovery Platform
        </div>

        <h2
          className="
            text-[58px]
            md:text-[88px]
            font-black
            tracking-[-4px]
            leading-[1]
            text-[#0f172a]
            max-w-5xl
          "
        >
          Discover Creatives
          <br />

          <span className="gradient-check">
            with Confidence
          </span>

        </h2>

        <p
          className="
            mt-7
            max-w-2xl
            text-[18px]
            text-gray-500
            leading-relaxed
          "
        >
          Discover creative professionals through public
          visibility, portfolio presence and trusted
          creative discovery.
        </p>

        {/* SEARCH */}

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
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
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
                hover:bg-blue-600
                transition
              "
            >
              Search
            </button>

          </div>

        </div>

        {/* CATEGORY CHIPS */}

        <div
          id="categories"
          className="
            mt-8
            max-w-5xl
            mx-auto
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >

          {categories.map((title) => (

            <button
              key={title}
              onClick={() =>
                setSearchQuery(title)
              }
              className="
                px-4
                py-2
                rounded-full
                bg-white/70
                backdrop-blur-xl
                border
                border-white/80
                shadow-sm
                text-[#0f172a]
                text-[14px]
                font-semibold
                hover:scale-[1.03]
                hover:bg-white
                transition
              "
            >

              {title}

            </button>

          ))}

        </div>

      </div>

    </section>
  )
}
