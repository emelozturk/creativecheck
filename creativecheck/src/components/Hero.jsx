{/* CATEGORY SECTIONS */}
<div
  id="categories"
  className="mt-10 max-w-6xl mx-auto space-y-8"
>

  {/* VISUAL ARTS */}
  <div>
    <h3 className="text-sm font-black tracking-[2px] uppercase text-gray-400 mb-4">
      Visual Arts
    </h3>

    <div className="flex flex-wrap gap-4">
      {[
        'Photographers',
        'Graphic Designers',
        'Illustrators',
        'Digital Artists',
        'Visual Artists',
        'Animators',
        'Art Directors',
        'Creative Directors'
      ].map((item) => (
        <button
          key={item}
          className="
            px-5
            py-3
            rounded-full
            bg-white/70
            backdrop-blur-xl
            border
            border-white/80
            text-[#0f172a]
            font-semibold
            shadow-lg
            hover:scale-105
            hover:bg-white
            transition
          "
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* FILM & MEDIA */}
  <div>
    <h3 className="text-sm font-black tracking-[2px] uppercase text-gray-400 mb-4">
      Film & Media
    </h3>

    <div className="flex flex-wrap gap-4">
      {[
        'Filmmakers',
        'Video Editors',
        'Cinematographers',
        'Producers',
        'Screenwriters',
        'Journalists',
        'Content Creators',
        'Podcasters'
      ].map((item) => (
        <button
          key={item}
          className="
            px-5
            py-3
            rounded-full
            bg-white/70
            backdrop-blur-xl
            border
            border-white/80
            text-[#0f172a]
            font-semibold
            shadow-lg
            hover:scale-105
            hover:bg-white
            transition
          "
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* FASHION & BEAUTY */}
  <div>
    <h3 className="text-sm font-black tracking-[2px] uppercase text-gray-400 mb-4">
      Fashion & Beauty
    </h3>

    <div className="flex flex-wrap gap-4">
      {[
        'Models',
        'Stylists',
        'Fashion Designers',
        'Makeup Artists',
        'Hair Stylists',
        'Brand Strategists',
        'Influencers'
      ].map((item) => (
        <button
          key={item}
          className="
            px-5
            py-3
            rounded-full
            bg-white/70
            backdrop-blur-xl
            border
            border-white/80
            text-[#0f172a]
            font-semibold
            shadow-lg
            hover:scale-105
            hover:bg-white
            transition
          "
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* PERFORMANCE & MUSIC */}
  <div>
    <h3 className="text-sm font-black tracking-[2px] uppercase text-gray-400 mb-4">
      Performance & Music
    </h3>

    <div className="flex flex-wrap gap-4">
      {[
        'Actors',
        'Musicians',
        'Dancers',
        'DJ’s',
        'Music Producers',
        'Voice Actors',
        'Sound Designers'
      ].map((item) => (
        <button
          key={item}
          className="
            px-5
            py-3
            rounded-full
            bg-white/70
            backdrop-blur-xl
            border
            border-white/80
            text-[#0f172a]
            font-semibold
            shadow-lg
            hover:scale-105
            hover:bg-white
            transition
          "
        >
          {item}
        </button>
      ))}
    </div>
  </div>

  {/* CREATIVE BUSINESS */}
  <div>
    <h3 className="text-sm font-black tracking-[2px] uppercase text-gray-400 mb-4">
      Creative Business
    </h3>

    <div className="flex flex-wrap gap-4">
      {[
        'Creative Agencies',
        'Production Companies',
        'Studios',
        'PR Specialists',
        'Marketing Creators',
        'Social Media Managers',
        'Interior Designers',
        'Architects',
        'Set Designers'
      ].map((item) => (
        <button
          key={item}
          className="
            px-5
            py-3
            rounded-full
            bg-white/70
            backdrop-blur-xl
            border
            border-white/80
            text-[#0f172a]
            font-semibold
            shadow-lg
            hover:scale-105
            hover:bg-white
            transition
          "
        >
          {item}
        </button>
      ))}
    </div>
  </div>

</div>
