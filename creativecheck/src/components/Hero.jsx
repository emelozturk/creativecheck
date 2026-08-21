import LogoIcon from './LogoIcon'

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
        w-full
        max-w-[100vw]
        px-4
        sm:px-6
        lg:px-8
        py-5
        sm:py-6
        lg:py-8
        flex
        flex-col
        overflow-hidden
        box-border
      "
      style={{
        background:
          'radial-gradient(circle at 15% 20%, rgba(79,70,229,0.16), transparent 28%), radial-gradient(circle at 85% 18%, rgba(37,99,235,0.14), transparent 30%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.16), transparent 30%), linear-gradient(135deg,#f8fbff 0%,#f5f7ff 48%,#f4faff 100%)'
      }}
    >

      {/* HEADER */}

      <header
        className="
          relative
          z-10
          w-full
          max-w-[1600px]
          mx-auto
          flex
          items-center
          justify-between
          gap-4
          min-w-0
        "
      >

        <a
          href="#discover"
          className="
            flex
            items-center
            gap-2
            sm:gap-3
            lg:gap-4
            min-w-0
            shrink
          "
        >

          <div className="shrink-0">
            <LogoIcon
              size={40}
            />
          </div>

          <h1
            className="
              text-[24px]
              sm:text-[28px]
              lg:text-[34px]
              font-black
              tracking-[-1.5px]
              lg:tracking-[-2px]
              whitespace-nowrap
            "
          >
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
            xl:flex
            items-center
            justify-center
            gap-5
            2xl:gap-9
            text-[14px]
            2xl:text-[15px]
            font-semibold
            text-[#0f172a]
            whitespace-nowrap
          "
        >

          <a
            href="#discover"
            className="hover:text-blue-600 transition"
          >
            Discover
          </a>

          <a
            href="#categories"
            className="hover:text-blue-600 transition"
          >
            Categories
          </a>

          <a
            href="#resources"
            className="hover:text-blue-600 transition"
          >
            Resources
          </a>

          <a
            href="#about"
            className="hover:text-blue-600 transition"
          >
            About
          </a>

          <a
            href="#add-profile"
            className="hover:text-blue-600 transition"
          >
            Add Profile
          </a>

        </nav>

        <a
          href="#add-profile"
          className="
            hidden
            md:flex
            shrink-0
            bg-[#0f172a]
            text-white
            px-5
            lg:px-7
            py-2.5
            lg:py-3
            rounded-full
            text-sm
            lg:text-base
            font-semibold
            shadow-[0_12px_32px_rgba(15,23,42,0.18)]
            hover:bg-blue-600
            transition
            whitespace-nowrap
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
          w-full
          max-w-[1600px]
          mx-auto
          flex-1
          flex
          flex-col
          items-center
          justify-center
          text-center
          min-w-0
          py-10
          sm:py-12
          lg:py-16
        "
      >

        <div
          className="
            mb-4
            sm:mb-5
            lg:mb-6
            text-[9px]
            sm:text-[10px]
            lg:text-[11px]
            uppercase
            tracking-[3px]
            sm:tracking-[4px]
            text-blue-500
            font-bold
          "
        >
          Public Creative Discovery Platform
        </div>

        <h2
          className="
            w-full
            max-w-[1100px]
            px-2
            text-[42px]
            sm:text-[54px]
            md:text-[68px]
            lg:text-[78px]
            xl:text-[88px]
            font-black
            tracking-[-2.5px]
            sm:tracking-[-3px]
            lg:tracking-[-4px]
            leading-[0.98]
            text-[#0f172a]
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
            mt-5
            sm:mt-6
            lg:mt-7
            w-full
            max-w-[680px]
            px-3
            text-[15px]
            sm:text-[17px]
            lg:text-[18px]
            text-gray-500
            leading-relaxed
          "
        >
          Discover creative professionals through public
          visibility, portfolio presence and trusted
          creative discovery.
        </p>

        {/* SEARCH */}

        <div
          className="
            mt-7
            sm:mt-8
            lg:mt-10
            w-full
            max-w-[680px]
            px-2
            box-border
          "
        >

          <div
            className="
              w-full
              flex
              items-center
              bg-white/80
              backdrop-blur-xl
              border
              border-white/80
              shadow-[0_10px_40px_rgba(15,23,42,0.06)]
              rounded-[22px]
              sm:rounded-[26px]
              lg:rounded-[28px]
              px-3
              sm:px-4
              lg:px-5
              py-3
              sm:py-3.5
              lg:py-4
              box-border
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
                min-w-0
                flex-1
                bg-transparent
                outline-none
                px-2
                sm:px-3
                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
                text-[#0f172a]
              "
            />

            <button
              className="
                shrink-0
                bg-[#0f172a]
                text-white
                px-4
                sm:px-5
                py-2
                rounded-full
                text-xs
                sm:text-sm
                font-semibold
                hover:bg-blue-600
                transition
              "
            >
              Search
            </button>

          </div>

        </div>

        {/* QUICK ACTIONS */}

        <div
          className="
            mt-4
            sm:mt-5
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            sm:gap-3
            px-2
          "
        >

          <a
            href="#add-profile"
            className="
              px-4
              sm:px-5
              py-2.5
              sm:py-3
              rounded-full
              bg-gradient-to-r
              from-[#4f46e5]
              to-[#06b6d4]
              text-white
              text-xs
              sm:text-sm
              font-semibold
              shadow-lg
              hover:scale-105
              transition
              whitespace-nowrap
            "
          >
            + Create Your Profile
          </a>

          <a
            href="#categories"
            className="
              px-4
              sm:px-5
              py-2.5
              sm:py-3
              rounded-full
              bg-white/80
              border
              border-white
              text-[#0f172a]
              text-xs
              sm:text-sm
              font-semibold
              shadow-sm
              hover:bg-white
              transition
              whitespace-nowrap
            "
          >
            Explore Categories
          </a>

        </div>

      </div>

      {/* HERO BACKGROUND / ART */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            right-0
            top-0
            h-full
            w-1/2
            overflow-hidden
          "
        >

          <img
            src="/assets/hero-art.jpg"
            alt=""
            className="
              absolute
              top-0
              left-[-60px]
              w-[calc(100%+60px)]
              h-full
              object-cover
              object-[65%_center]
            "
          />

        </div>

      </div>

    </section>
  )
}
