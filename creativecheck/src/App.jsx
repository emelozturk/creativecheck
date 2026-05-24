import { useState } from 'react'
import Hero from './components/Hero'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfilePage from './components/AddProfilePage'

const categoryGroups = [
  { title: 'Visual Arts', color: '#7c3aed', items: ['Photographers', 'Designers', 'Illustrators', 'Art Directors'] },
  { title: 'Film & Media', color: '#ec4899', items: ['Filmmakers', 'Editors', 'Cinematographers', 'Producers'] },
  { title: 'Fashion & Beauty', color: '#f97316', items: ['Models', 'Stylists', 'Makeup Artists', 'Fashion Designers'] },
  { title: 'Performance & Music', color: '#06b6d4', items: ['Actors', 'Musicians', 'Dancers', 'Voice Artists'] },
  { title: 'Creative Business', color: '#10b981', items: ['Studios', 'Agencies', 'Production Companies', 'Creative Directors'] }
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: 'linear-gradient(135deg,#fffafc 0%,#f8f5ff 50%,#f4fdff 100%)'
      }}
    >
      <section id="discover">
        <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-end justify-between gap-8 mb-8">
          <div>
            <p className="text-xs font-black tracking-[3px] uppercase text-violet-500 mb-3">
              Creative Fields
            </p>

            <h2 className="text-3xl md:text-4xl font-black tracking-[-2px] text-[#0f172a]">
              Explore by category
            </h2>
          </div>

          <p className="hidden md:block text-gray-500 max-w-md text-sm leading-relaxed">
            Browse creative talent by discipline, industry and professional presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {categoryGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[26px] p-5 bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
            >
              <div
                className="w-10 h-10 rounded-2xl mb-4"
                style={{
                  background: `linear-gradient(135deg, ${group.color}, #ffffff)`
                }}
              />

              <h3 className="text-[16px] font-black text-[#0f172a] mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSearchQuery(item)}
                    className="px-3 py-1.5 rounded-full bg-white border border-gray-100 text-xs font-semibold text-gray-600 hover:text-violet-600 hover:border-violet-200 transition"
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
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-5">
            {[
              {
                title: 'Profile Guidance',
                text: 'Learn how public creative profiles are reviewed before appearing on CreativeCheck.',
                color: '#7c3aed'
              },
              {
                title: 'Information Control',
                text: 'Request correction, update or removal of public-facing professional information.',
                color: '#ec4899'
              },
              {
                title: 'Trust & Transparency',
                text: 'CreativeCheck provides discovery information, not legal conclusions or guarantees.',
                color: '#f97316'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[30px] p-7 bg-white/75 backdrop-blur-xl border border-white/80 shadow-[0_10px_35px_rgba(15,23,42,0.06)]"
              >
                <div
                  className="w-12 h-1.5 rounded-full mb-5"
                  style={{ background: item.color }}
                />

                <h3 className="text-xl font-black text-[#0f172a] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="rounded-[36px] p-8 md:p-10 bg-[#0f172a] text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <p className="text-xs font-black tracking-[3px] uppercase text-violet-300 mb-4">
              About CreativeCheck
            </p>

            <h2 className="text-3xl md:text-5xl font-black tracking-[-2px] mb-5">
              A public discovery layer for the creative economy.
            </h2>

            <p className="text-gray-300 max-w-4xl text-[16px] leading-relaxed">
              CreativeCheck helps users discover creative professionals through public visibility,
              portfolio presence and professional information. Profiles may be reviewed before
              publication to protect quality, accuracy and trust.
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
