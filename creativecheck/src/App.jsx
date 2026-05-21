import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CategoryChips from './components/CategoryChips'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdf8f8]" style={{ fontFamily:"'Plus Jakarta Sans', sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <CategoryChips />
        <ExploreSection />
        <FeatureStrip />
      </main>
      <Footer />
    </div>
  )
}
