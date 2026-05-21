import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CategoryChips from './components/CategoryChips'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfilePage from './components/AddProfilePage'

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#fdf8f8] scroll-smooth"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <Navbar />

      <main>
        <section id="discover">
          <Hero />
          <SearchBar />
        </section>

        <section id="categories">
          <CategoryChips />
        </section>

        <section id="studios">
          <ExploreSection />
        </section>

        <section id="agencies">
          <FeatureStrip />
        </section>

        <section id="resources">
          <AddProfilePage />
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
