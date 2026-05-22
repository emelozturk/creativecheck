import { useState } from 'react'
import Hero from './components/Hero'
import CategoryChips from './components/CategoryChips'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfilePage from './components/AddProfilePage'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div
      className="min-h-screen overflow-hidden"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background:
          'linear-gradient(135deg,#fff7fb 0%,#f5f3ff 45%,#ecfeff 100%)'
      }}
    >

      {/* PREMIUM HERO */}
      <section id="discover">
        <Hero />
      </section>

      {/* CATEGORIES */}
      <section
        id="categories"
        className="relative z-10 mt-[-30px]"
      >
        <CategoryChips />
      </section>

      {/* EXPLORE */}
      <section
        id="studios"
        className="relative z-10 pt-8"
      >
        <ExploreSection
          searchQuery={searchQuery}
        />
      </section>

      {/* FEATURES */}
      <section
        id="agencies"
        className="relative z-10"
      >
        <FeatureStrip />
      </section>

      {/* RESOURCES */}
      <section
        id="resources"
        className="relative z-10"
      >
        <div className="max-w-6xl mx-auto px-8 py-20">

          <div
            className="rounded-[36px] p-14 border border-white/50"
            style={{
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(20px)',
              boxShadow:
                '0 20px 70px rgba(15,23,42,0.08)'
            }}
          >

            <h2 className="text-5xl font-black tracking-[-2px] text-[#0f172a] mb-6">
              Creative Resources
            </h2>

            <p className="text-[18px] leading-relaxed text-gray-600 max-w-3xl">
              CreativeCheck resources, public
              information guidance, creative industry
              visibility tools and trusted discovery
              updates will appear here.
            </p>

          </div>

        </div>
      </section>

      {/* ADD PROFILE */}
      <section id="add-profile">
        <AddProfilePage />
      </section>

      {/* FOOTER */}
      <section id="about">
        <Footer />
      </section>

    </div>
  )
}
