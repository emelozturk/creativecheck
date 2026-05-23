{/* NAVBAR */}
<div
  className="
    w-full
    flex
    items-center
    justify-between
    px-6
    py-3
    rounded-[26px]
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
    className="flex items-center gap-3"
  >
    <LogoIcon size={38} />

    <h1 className="text-[32px] font-black tracking-[-2px] leading-none">

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
      gap-10
      bg-white/80
      backdrop-blur-xl
      px-8
      py-3
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
          text-[15px]
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
          text-[10px]
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
          text-[15px]
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
          text-[10px]
          text-gray-500
          mt-1
        "
      >
        Public guides
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
          text-[15px]
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
          text-[10px]
          text-gray-500
          mt-1
        "
      >
        Platform info
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
      px-6
      py-3
      rounded-full
      bg-[#071133]
      text-white
      text-[14px]
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
