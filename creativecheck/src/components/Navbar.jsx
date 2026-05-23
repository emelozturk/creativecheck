import LogoIcon from './LogoIcon'

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-8 px-6 relative z-50">

      <div
        className="
          w-full
          max-w-[1500px]
          flex
          items-center
          justify-between
          px-8
          py-6
          rounded-[32px]
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
          <LogoIcon />

          <h1 className="text-[58px] font-black tracking-[-4px] leading-none">

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
            gap-14
            bg-white/80
            backdrop-blur-xl
            px-10
            py-5
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
                text-[18px]
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
                text-[12px]
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
                text-[18px]
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
                text-[12px]
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
                text-[18px]
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
                text-[12px]
                text-gray-500
                mt-1
              "
            >
              Platform information
            </span>
          </a>

        </nav>

        {/* CTA BUTTON */}
        <a
          href="#add-profile"
          className="
            hidden
            md:flex
            items-center
            justify-center
            px-9
            py-5
            rounded-full
            bg-[#071133]
            text-white
            text-[20px]
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

    </header>
  )
}
