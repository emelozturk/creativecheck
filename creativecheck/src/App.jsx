import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CategoryChips from './components/CategoryChips'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfilePage from './components/AddProfilePage'

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div
      className="min-h-screen scroll-smooth overflow-hidden"
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background:
          'radial-gradient(circle at 0% 25%, rgba(236,72,153,0.22), transparent 28%), radial-gradient(circle at 100% 20%, rgba(249,115,22,0.25), transparent 30%), radial-gradient(circle at 100% 55%, rgba(6,182,212,0.22), transparent 28%), linear-gradient(135deg,#fff7fb 0%,#f5f3ff 45%,#ecfeff 100%)'
      }}
    >
      <Navbar />

      <main>
        <section id="discover" className="relative">
          <Hero />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </section>

        <section id="categories">
          <CategoryChips />
        </section>

        <section id="studios">
          <ExploreSection searchQuery={searchQuery} />
        </section>

        <section id="agencies">
          <FeatureStrip />
        </section>

        <section id="resources">
          <div className="max-w-5xl mx-auto px-8 py-20">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-white/60">
              <h2 className="text-4xl font-extrabold mb-4">
                Resources
              </h2>

              <p className="text-gray-500">
                CreativeCheck resources, public information guidance and platform updates will appear here.
              </p>
            </div>
          </div>
        </section>

        <section id="add-profile">
          <AddProfilePage />
        </section>
      </main>

      <section id="about">
        <Footer />
      </section>
    </div>
  )
}
