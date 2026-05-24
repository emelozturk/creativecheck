import { useState } from 'react'
import Hero from './components/Hero'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfilePage from './components/AddProfilePage'

const categoryGroups = [
  {
    title: 'Visual Arts',
    color: '#7c3aed',
    items: ['Photographers', 'Designers', 'Illustrators']
  },
  {
    title: 'Film & Media',
    color: '#ec4899',
    items: ['Filmmakers', 'Editors', 'Producers']
  },
  {
    title: 'Fashion & Beauty',
    color: '#f97316',
    items: ['Models', 'Stylists', 'Makeup Artists']
  },
  {
    title: 'Performance & Music',
    color: '#06b6d4',
    items: ['Actors', 'Musicians', 'Dancers']
  },
  {
    title: 'Creative Business',
    color: '#10b981',
    items: ['Studios', 'Agencies', 'Production Companies']
  }
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen overflow-hidden">

      {/* HERO */}
      <section id="discover">
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="max-w-7xl mx-auto px-8 py-8"
      >

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">

          {categoryGroups.map((group) => (

            <button
              key={group.title}
              onClick={() => setSearchQuery(group.title)}
              className="
                group
                rounded-2xl
                p-4
                text-left
                bg-white/70
                backdrop-blur-xl
                border
                border-white/80
                shadow-[0_10px_30px_rgba(15,23,42,0.05)]
                hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div
                className="w-9 h-9 rounded-xl mb-3"
                style={{
                  background:
                    `linear-gradient(135deg, ${group.color}, #ffffff)`
                }}
              />

              <h3 className="text-[15px] font-black text-[#0f172a]">
                {group.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {group.items.join(' • ')}
              </p>

            </button>

          ))}

        </div>

      </section>

      {/* EXPLORE */}
      <section
        id="studios"
        className="relative z-10"
      >
        <ExploreSection searchQuery={searchQuery} />
      </section>

      {/* RESOURCES */}
      <section
        id="resources"
        className="max-w-7xl mx-auto px-8 py-8"
      >

        <div className="grid md:grid-cols-3 gap-4">

          {[
            [
              'Profile Review',
              'Reviewed before public display.',
              '#7c3aed'
            ],

            [
              'Correction Requests',
              'Update or remove information.',
              '#ec4899'
            ],

            [
              'Trust Notice',
              'Discovery only, no guarantees.',
              '#f97316'
            ]

          ].map(([title, text, color]) => (

            <div
              key={title}
              className="
                rounded-2xl
                p-5
                bg-white/70
                backdrop-blur-xl
                border
                border-white/80
                shadow-[0_10px_30px_rgba(15,23,42,0.05)]
              "
            >

              <div
                className="w-10 h-1 rounded-full mb-4"
                style={{ background: color }}
              />

              <h3 className="font-black text-[#0f172a]">
                {title}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-8 py-8"
      >

        <div
          className="
            rounded-3xl
            p-7
            text-white
            shadow-[0_20px_60px_rgba(15,23,42,0.18)]
          "
          style={{
            background:
              'linear-gradient(135deg,#0f172a 0%,#312e81 50%,#7c3aed 100%)'
          }}
        >

          <p className="text-xs uppercase tracking-[3px] text-violet-200 font-black mb-3">
            About CreativeCheck
          </p>

          <h2 className="text-3xl md:text-4xl font-black tracking-[-2px] mb-3">
            Public discovery for the creative economy.
          </h2>

          <p className="text-sm md:text-[15px] text-white/75 max-w-4xl leading-relaxed">
            CreativeCheck helps people discover creative professionals through public visibility,
            portfolio presence and reviewed profile information.
          </p>

        </div>

      </section>

      {/* ADD PROFILE */}
      <section id="add-profile">
        <AddProfilePage />
      </section>

      {/* FEATURES */}
      <FeatureStrip />

      {/* FOOTER */}
      <Footer />

    </div>
  )
}
