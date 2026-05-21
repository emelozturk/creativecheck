import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CategoryChips from './components/CategoryChips'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfileModal from './components/AddProfileModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className="min-h-screen bg-[#fdf8f8]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navbar onAddProfile={() => setIsModalOpen(true)} />

      <main>
        <Hero />
        <SearchBar />
        <CategoryChips />
        <ExploreSection />
        <FeatureStrip />
      </main>

      <Footer />

      <AddProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
