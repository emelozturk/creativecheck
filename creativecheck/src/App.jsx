import { useState } from 'react'
import Hero from './components/Hero'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfilePage from './components/AddProfilePage'

const categoryGroups = [
  {
    title: 'Visual Arts',
    items: ['Photographers', 'Graphic Designers', 'Illustrators', 'Digital Artists', 'Art Directors']
  },
  {
    title: 'Film & Media',
    items: ['Filmmakers', 'Video Editors', 'Cinematographers', 'Producers', 'Screenwriters']
  },
  {
    title: 'Fashion & Beauty',
    items: ['Models', 'Stylists', 'Makeup Artists', 'Hair Stylists', 'Fashion Designers']
  },
  {
    title: 'Performance & Music',
    items: ['Actors', 'Musicians', 'Dancers', 'Voice Artists', 'Music Producers']
  },
  {
    title: 'Creative Business',
    items: ['Studios', 'Agencies', 'Production Companies', 'Creative Directors', 'Brand Teams']
  }
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background:
          'linear-gradient(135deg,#fff8fb 0%,#f8f5ff 45%,#f3fdff 100%)'
      }}
    >
      <section id="discover">
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black tracking-[-2px] text-[#0f172a]">
            Creative Categories
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Explore creative professionals by discipline, industry and public professional presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white/75 backdrop-blur-xl rounded-3xl border border-white/70 shadow-xl p-7"
            >
              <h3 className="text-xl font-black text-[#0f172a] mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSearchQuery(item)}
                    className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-semibold text-gray-700 hover:border-violet-300 hover:text-violet-600 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="studios" className="relative z-10">
        <ExploreSection searchQuery={searchQuery} />
      </section>

      <section id="resources" className="relative z-10">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="rounded-[40px] p-14 border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl">
            <h2 className="text-5xl font-black tracking-[-2px] text-[#020617] mb-6">
              Resources
            </h2>

            <p className="text-[19px] leading-relaxed text-gray-600 max-w-3xl">
              CreativeCheck provides guidance for public professional visibility,
              profile submissions, information correction, removal requests and trusted
              creative discovery. The platform is designed to help creatives and users
              navigate public creative profiles responsibly.
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10">
        <div className="max-w-6xl mx-auto px-8 py-20">
          <div className="rounded-[40px] p-14 bg-[#0f172a] text-white shadow-2xl">
            <h2 className="text-5xl font-black tracking-[-2px] mb-6">
              About CreativeCheck
            </h2>

            <p className="text-[19px] leading-relaxed text-gray-300 max-w-4xl">
              CreativeCheck is a public creative discovery platform designed to help users
              explore creative professionals through public visibility, portfolio presence
              and professional information. The platform supports creatives, studios,
              agencies and production companies by making creative profiles easier to find,
              review and connect with.
            </p>

            <p className="text-[15px] leading-relaxed text-gray-400 max-w-4xl mt-6">
              CreativeCheck is an informational platform. It does not provide legal
              conclusions, endorsements, guarantees or background checks. Profiles may be
              reviewed before publication to protect quality, accuracy and trust.
            </p>
          </div>
        </div>
      </section>

      <section id="add-profile">
        <AddProfilePage />
      </section>

      <FeatureStrip />

      <Footer />
    </div>
  )
}
