{/* NAVBAR */}
<div
  className="
    w-full
    flex
    items-center
    justify-between
    px-4
    py-2
    rounded-[22px]
    border
    border-white/60
    bg-white/70
    backdrop-blur-2xl
    shadow-[0_8px_40px_rgba(15,23,42,0.06)]
  "
>

  {/* LOGO */}
  <a
    href="#discover"
    className="flex items-center gap-2"
  >
    <LogoIcon size={30} />

    <h1 className="text-[24px] font-black tracking-[-1px] leading-none">

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
      gap-7
      bg-white/80
      backdrop-blur-xl
      px-5
      py-2
      rounded-full
      border
      border-white/70
      shadow-md
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
          text-[13px]
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
          text-[9px]
          text-gray-500
          mt-[2px]
        "
      >
        Explore
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
          text-[13px]
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
          text-[9px]
          text-gray-500
          mt-[2px]
        "
      >
        Guides
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
          text-[13px]
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
          text-[9px]
          text-gray-500
          mt-[2px]
        "
      >
        Platform
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
      px-4
      py-2
      rounded-full
      bg-[#071133]
      text-white
      text-[12px]
      font-bold
      shadow-[0_10px_30px_rgba(15,23,42,0.18)]
      hover:scale-105
      hover:bg-violet-600
      transition-all
      duration-300
    "
  >
    + Add Profile
  </a>

</div>
