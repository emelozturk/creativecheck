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
        className="max-w-7xl mx-auto px-8 py-10"
      >

        <div
          className="
            rounded-[36px]
            p-8
            md:p-10
            text-white
            shadow-[0_24px_70px_rgba(15,23,42,0.22)]
            overflow-hidden
            relative
          "
          style={{
            background:
              'linear-gradient(135deg,#0f172a 0%,#312e81 45%,#7c3aed 100%)'
          }}
        >

          <div className="relative z-10 grid lg:grid-cols-2 gap-10">

            {/* CREATIVECHECK */}
            <div>

              <p className="text-xs uppercase tracking-[3px] text-violet-200 font-black mb-4">
                About CreativeCheck
              </p>

              <h2 className="text-3xl md:text-4xl font-black tracking-[-2px] mb-5">
                Public discovery for the creative economy.
              </h2>

              <p className="text-sm md:text-[15px] text-white/75 leading-relaxed">
                CreativeCheck helps people discover creative professionals through
                public visibility, portfolio presence and reviewed profile information.
                The platform supports creatives, studios, agencies and production
                companies by making professional creative profiles easier to find,
                understand and connect with.
              </p>

              <p className="text-sm md:text-[15px] text-white/65 leading-relaxed mt-5">
                CreativeCheck is designed as an informational discovery platform.
                It does not provide legal conclusions, endorsements, guarantees or
                background checks. Profiles may be reviewed before publication to
                protect quality, accuracy and trust.
              </p>

            </div>

            {/* FOUNDER */}
            <div>

              <p className="text-xs uppercase tracking-[3px] text-pink-200 font-black mb-4">
                About the Founder
              </p>

              <h3 className="text-2xl md:text-3xl font-black tracking-[-1px] mb-5">
                Founded by Emel Ozturk
              </h3>

              <p className="text-sm md:text-[15px] text-white/75 leading-relaxed">
                CreativeCheck was founded by Emel Ozturk — an award-winning filmmaker
                and photographer whose work has been published across international
                magazines and creative media platforms.
              </p>

              <p className="text-sm md:text-[15px] text-white/70 leading-relaxed mt-5">
                With years of experience across photography, filmmaking, visual
                storytelling and creative production, Emel developed CreativeCheck
                after recognising the growing need for a more trusted, transparent and
                professionally structured discovery platform for the creative industry.
              </p>

              <p className="text-sm md:text-[15px] text-white/65 leading-relaxed mt-5">
                Alongside her creative career, Emel expanded her legal education with
                a focus on technology, artificial intelligence and the legal protection
                of creative industries. Her academic research explores the impact of AI
                and emerging technologies on the creative sector, with a particular
                focus on protecting creators’ rights, professional visibility and
                ethical development within the evolving digital landscape.
              </p>

            </div>

          </div>

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
