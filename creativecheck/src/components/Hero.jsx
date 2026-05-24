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
      {/* HEADER */}
      <header className="flex items-center justify-between">
        {/* LOGO */}
        <a href="#discover" className="flex items-center gap-4">
          <LogoIcon size={54} />

          <h1 className="text-[42px] font-black tracking-[-3px]">
            <span className="text-[#0f172a]">Creative</span>

            <span className="gradient-check">
              Check
            </span>
          </h1>
        </a>

        {/* NAVBAR */}
        <nav className="hidden lg:flex items-center gap-10 text-[16px] font-bold text-[#0f172a]">
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
            px-8
            py-4
            rounded-full
            font-bold
            shadow-xl
            hover:bg-violet-600
            transition
          "
        >
          + Add Your Profile
        </a>
      </header>

      {/* HERO CONTENT */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">

        <h2 className="text-[72px] md:text-[104px] font-black tracking-[-6px] leading-[0.95] text-[#0f172a]">
          Discover Creatives
          <br />

          <span className="gradient-check">
            with Confidence
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-[22px] text-gray-600 leading-relaxed">
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
              border-white/70
              shadow-xl
              rounded-full
              px-6
              py-4
            "
          >

            <input
              type="text"
              placeholder="Search photographers, filmmakers, models..."
              className="
                w-full
                bg-transparent
                outline-none
                px-4
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
                font-bold
                hover:bg-violet-600
                transition
              "
            >
              Search
            </button>

          </div>
        </div>

        {/* CATEGORY SECTIONS */}
        <div
          id="categories"
          className="mt-10 max-w-5xl mx-auto space-y-5 w-full"
        >

          {[
            {
              title: 'Visual Arts',
              items: [
                'Photographers',
                'Graphic Designers',
                'Illustrators',
                'Digital Artists'
              ]
            },
            {
              title: 'Film & Media',
              items: [
                'Filmmakers',
                'Video Editors',
                'Cinematographers',
                'Producers'
              ]
            },
            {
              title: 'Fashion & Beauty',
              items: [
                'Models',
                'Stylists',
                'Makeup Artists',
                'Fashion Designers'
              ]
            },
            {
              title: 'Performance & Music',
              items: [
                'Actors',
                'Musicians',
                'Dancers',
                'Voice Actors'
              ]
            },
            {
              title: 'Creative Business',
              items: [
                'Studios',
                'Agencies',
                'Production Companies',
                'Creative Directors'
              ]
            }
          ].map((group) => (
            <details
              key={group.title}
              className="
                bg-white/70
                backdrop-blur-xl
                border
                border-white/80
                rounded-3xl
                shadow-lg
                px-6
                py-5
                text-left
              "
            >
              <summary
                className="
                  cursor-pointer
                  list-none
                  flex
                  items-center
                  justify-between
                  text-[#0f172a]
                  font-black
                  text-[18px]
                "
              >
                {group.title}

                <span className="text-violet-600 text-[24px]">
                  +
                </span>
              </summary>

              <div className="flex flex-wrap gap-3 mt-5">
                {group.items.map((item) => (
                  <button
                    key={item}
                    className="
                      px-5
                      py-3
                      rounded-full
                      bg-white
                      border
                      border-gray-200
                      text-[#0f172a]
                      font-semibold
                      shadow-sm
                      hover:scale-105
                      transition
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </details>
          ))}

        </div>

      </div>
    </section>
  )
}
