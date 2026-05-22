import { useState } from 'react'

export default function App() {
  const [search, setSearch] = useState('')

  const profiles = [
    { name: 'Lina Moreau', role: 'Photographer', location: 'Paris, France' },
    { name: 'Alex Rivera', role: 'Filmmaker', location: 'Los Angeles, USA' },
    { name: 'Sara Kim', role: 'Model', location: 'Seoul, South Korea' },
    { name: 'Marcus Stone', role: 'Stylist', location: 'London, UK' },
    { name: 'Elena Petrova', role: 'Dancer', location: 'Berlin, Germany' },
    { name: 'Studio Parallel', role: 'Creative Agency', location: 'Amsterdam, Netherlands' }
  ]

  const filteredProfiles = profiles.filter((profile) =>
    `${profile.name} ${profile.role} ${profile.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#fdf8f8] text-gray-900 scroll-smooth">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#discover" className="text-2xl font-extrabold">
            Creative
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-transparent">
              Check
            </span>
          </a>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#discover">Discover</a>
            <a href="#categories">Categories</a>
            <a href="#studios">Studios</a>
            <a href="#resources">Resources</a>
            <a href="#about">About</a>
          </div>

          <a
            href="#add-profile"
            className="bg-black text-white px-5 py-3 rounded-full text-sm font-semibold"
          >
            + Add Your Profile
          </a>
        </div>
      </nav>

      <section
        id="discover"
        className="relative overflow-hidden px-8 py-24 text-center"
      >
        <div className="absolute -left-20 top-20 w-80 h-80 bg-purple-300/30 rounded-full blur-3xl" />
        <div className="absolute right-0 top-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-0 w-80 h-80 bg-teal-300/30 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="mx-auto mb-8 w-36 h-36 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-teal-400 flex items-center justify-center shadow-2xl">
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-5xl font-black">
              ✓
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            Creative
            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-teal-400 bg-clip-text text-transparent">
              Check
            </span>
          </h1>

          <p className="mt-5 uppercase tracking-[0.35em] text-sm font-bold text-gray-600">
            Discover Creatives With Confidence
          </p>

          <div className="mt-10 max-w-3xl mx-auto bg-white rounded-full shadow-xl p-3 flex items-center gap-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search creatives, artists, studios, agencies..."
              className="flex-1 px-5 py-4 bg-transparent outline-none"
            />

            <button className="w-14 h-14 rounded-full bg-purple-600 text-white text-xl">
              🔍
            </button>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="max-w-6xl mx-auto px-8 py-10"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'Photography',
            'Film & Video',
            'Models & Talent',
            'Styling & Beauty',
            'Performance',
            'Music',
            'Design',
            'Content Creators',
            'Studios',
            'Agencies',
            'Production Companies'
          ].map((item) => (
            <span
              key={item}
              className="bg-white rounded-full px-5 py-3 shadow text-sm font-semibold"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section
        id="studios"
        className="max-w-7xl mx-auto px-8 py-20"
      >
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold">
            Explore the Creative World
          </h2>

          <p className="text-gray-500 mt-2">
            Browse professionals and companies across the global creative ecosystem.
          </p>
        </div>

        {filteredProfiles.length === 0 ? (
          <div className="text-center text-gray-400 text-lg">
            No creators found.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProfiles.map((profile) => (
              <div
                key={profile.name}
                className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:-translate-y-1 hover:shadow-2xl transition"
              >
                <div className="h-44 rounded-2xl bg-gradient-to-br from-violet-400 via-pink-400 to-orange-300 mb-6" />

                <h3 className="text-xl font-bold">
                  {profile.name}
                </h3>

                <p className="text-gray-600">
                  {profile.role}
                </p>

                <p className="text-gray-400 mt-2">
                  {profile.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section
        id="resources"
        className="max-w-7xl mx-auto px-8 py-16"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {[
            ['Public Professional Presence', 'We summarise publicly available information.'],
            ['Public Links & Portfolios', 'View websites, portfolios and public social links.'],
            ['Public Review Activity', 'See public review activity where available.'],
            ['Transparent & Neutral', 'Informational summaries, not allegations.']
          ].map(([title, text]) => (
            <div
              key={title}
              className="bg-white rounded-3xl shadow p-6"
            >
              <h3 className="font-bold text-lg">
                {title}
              </h3>

              <p className="text-gray-500 mt-2 text-sm">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="add-profile"
        className="max-w-3xl mx-auto px-8 py-24"
      >
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
          <h2 className="text-4xl font-extrabold mb-3">
            Add Your Profile
          </h2>

          <p className="text-gray-500 mb-10">
            Join the CreativeCheck directory.
          </p>

          <form
            action="https://formspree.io/f/mkoebgly"
            method="POST"
            target="_blank"
            className="grid gap-5"
          >
            <input
              name="full_name"
              placeholder="Full Name"
              required
              className="rounded-2xl border border-gray-200 px-5 py-4"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="rounded-2xl border border-gray-200 px-5 py-4"
            />

            <input
              name="profession"
              placeholder="Profession"
              required
              className="rounded-2xl border border-gray-200 px-5 py-4"
            />

            <input
              name="category"
              placeholder="Category"
              required
              className="rounded-2xl border border-gray-200 px-5 py-4"
            />

            <input
              name="city"
              placeholder="City"
              className="rounded-2xl border border-gray-200 px-5 py-4"
            />

            <input
              name="country"
              placeholder="Country"
              className="rounded-2xl border border-gray-200 px-5 py-4"
            />

            <textarea
              name="bio"
              placeholder="Short Bio"
              rows="5"
              className="rounded-2xl border border-gray-200 px-5 py-4"
            />

            <button
              type="submit"
              className="bg-black text-white rounded-2xl py-4 font-semibold"
            >
              Submit Profile
            </button>
          </form>
        </div>
      </section>

      <footer
        id="about"
        className="max-w-7xl mx-auto px-8 py-12 text-sm text-gray-500"
      >
        CreativeCheck provides informational summaries based on publicly available professional information, links and review activity.
      </footer>
    </div>
  )
}
