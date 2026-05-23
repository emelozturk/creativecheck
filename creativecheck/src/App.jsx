import { useState } from 'react'
import Hero from './components/Hero'
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
          'linear-gradient(135deg,#fff8fb 0%,#f8f5ff 45%,#f3fdff 100%)'
      }}
    >

      {/* HERO */}
      <section id="discover">
        <Hero />
      </section>

      {/* EXPLORE */}
      <section
        id="studios"
        className="relative z-10 -mt-10"
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
            className="rounded-[40px] p-14 border border-white/60"
            style={{
              background:
                'rgba(255,255,255,0.65)',
              backdropFilter:
                'blur(24px)',
              boxShadow:
                '0 20px 80px rgba(15,23,42,0.08)'
            }}
          >

            <div className="max-w-3xl">

              <div
                className="inline-flex items-center px-5 py-2 rounded-full mb-6"
                style={{
                  background:
                    'linear-gradient(135deg,#7c3aed,#ec4899)',
                  color: 'white'
                }}
              >
                <span className="text-[12px] font-black tracking-[2px] uppercase">
                  CreativeCheck Resources
                </span>
              </div>

              <h2 className="text-6xl font-black tracking-[-3px] leading-[1] text-[#020617] mb-8">
                Trusted Creative
                <br />
                Visibility Platform
              </h2>

              <p className="text-[20px] leading-relaxed text-gray-600">
                CreativeCheck helps discover creatives
                through public professional visibility,
                portfolios, industry presence and trusted
                discovery systems.
              </p>

            </div>

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
