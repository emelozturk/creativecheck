import { useState } from 'react'
import Hero from './components/Hero'
import ExploreSection from './components/ExploreSection'
import FeatureStrip from './components/FeatureStrip'
import Footer from './components/Footer'
import AddProfilePage from './components/AddProfilePage'

const categoryGroups = [
  {
    title: 'Visual Arts',
    color: '#4f46e5',
    items: ['Photographers', 'Designers', 'Illustrators']
  },
  {
    title: 'Film & Media',
    color: '#2563eb',
    items: ['Filmmakers', 'Editors', 'Producers']
  },
  {
    title: 'Fashion & Beauty',
    color: '#7c3aed',
    items: ['Models', 'Stylists', 'Makeup Artists']
  },
  {
    title: 'Performance & Music',
    color: '#06b6d4',
    items: ['Actors', 'Musicians', 'Dancers']
  },
  {
    title: 'Creative Business',
    color: '#0f172a',
    items: ['Studios', 'Agencies', 'Production Companies']
  }
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen overflow-hidden">

      <section id="discover">
        <Hero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </section>

      <section id="categories" className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {categoryGroups.map((group) => (
            <button
              key={group.title}
              onClick={() => setSearchQuery(group.title)}
              className="group rounded-2xl p-4 text-left bg-white/80 border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div
                className="w-9 h-9 rounded-xl mb-3"
                style={{
                  background: `linear-gradient(135deg, ${group.color}, #dbeafe)`
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

        <div className="flex justify-center mt-8">
          <a
            href="#add-profile"
            className="px-7 py-4 rounded-full bg-[#0f172a] text-white font-semibold shadow-xl hover:bg-blue-600 transition"
          >
            + Join CreativeCheck
          </a>
        </div>
      </section>

      <section id="studios">
        <ExploreSection searchQuery={searchQuery} />
      </section>

      <section id="resources" className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            ['Profile Review', 'Reviewed before public display.', '#4f46e5'],
            ['Correction Requests', 'Update or remove information.', '#2563eb'],
            ['Trust Notice', 'Discovery only, no guarantees.', '#06b6d4']
          ].map(([title, text, color]) => (
            <div
              key={title}
              className="rounded-2xl p-5 bg-white/80 border border-white shadow-sm"
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

      <section id="about" className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-5">

          <div className="relative overflow-hidden rounded-[34px] p-8 bg-gradient-to-br from-[#0f172a] via-[#1d4ed8] to-[#06b6d4] text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

            <p className="relative z-10 text-xs uppercase tracking-[3px] text-blue-100 font-black mb-4">
              About CreativeCheck
            </p>

            <h2 className="relative z-10 text-3xl md:text-5xl font-black tracking-[-3px] leading-[1] mb-5">
              A discovery layer
              <br />
              for the global
              <br />
              creative industry.
            </h2>

            <p className="relative z-10 text-[15px] text-white/80 leading-relaxed max-w-xl">
              CreativeCheck is a public creative discovery platform helping users explore
              creatives, studios, agencies and production companies through portfolio
              presence, professional visibility and reviewed profile information.
            </p>

            <p className="relative z-10 text-[15px] text-white/70 leading-relaxed max-w-xl mt-5">
              The platform is designed to support transparency, discoverability and
              professional visibility for the global creative community.
            </p>

            <div className="relative z-10 mt-7">
              <a
                href="#add-profile"
                className="inline-flex items-center px-6 py-3 rounded-full bg-white text-[#0f172a] font-semibold shadow-xl hover:scale-105 transition"
              >
                Create Your Profile
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[34px] p-8 bg-white/85 border border-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />

            <p className="relative z-10 text-xs uppercase tracking-[3px] text-blue-500 font-black mb-4">
              Founder
            </p>

            <h2 className="relative z-10 text-3xl md:text-5xl font-black tracking-[-3px] text-[#0f172a] leading-[1] mb-5">
              Founded by
              <br />
              Emel Ozturk
            </h2>

           {/* FOUNDER */}

<section
  id="founder"
  className="
    max-w-6xl
    mx-auto
    px-6
    md:px-10
    py-24
  "
>

  <div
    className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/20
      bg-white/70
      backdrop-blur-2xl
      shadow-[0_25px_80px_rgba(15,23,42,0.10)]
      p-8
      md:p-14
    "
  >

    {/* BACKGROUND GLOW */}

    <div
      className="
        absolute
        -top-32
        -right-32
        w-[420px]
        h-[420px]
        rounded-full
        blur-3xl
        opacity-30
      "
      style={{
        background:
          'linear-gradient(135deg,#4f46e5,#06b6d4,#8b5cf6)'
      }}
    />

    <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT */}

      <div>

        <p
          className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2
            rounded-full
            text-xs
            font-black
            tracking-[3px]
            uppercase
            text-white
            mb-6
          "
          style={{
            background:
              'linear-gradient(135deg,#4f46e5,#06b6d4)'
          }}
        >
          Founder
        </p>

        <h2
          className="
            text-5xl
            md:text-6xl
            font-black
            tracking-[-4px]
            leading-[0.95]
            text-[#0f172a]
          "
        >
          Built by
          <br />

          <span className="gradient-check">
            Emel Ozturk
          </span>
        </h2>

      </div>

      {/* RIGHT */}

      <div
        className="
          text-[17px]
          leading-relaxed
          text-gray-600
          space-y-6
        "
      >

        <p>
          Emel Ozturk is an award-winning filmmaker,
          photographer and creative entrepreneur
          whose visual work has been published in
          international magazines and creative media platforms.
        </p>

        <p>
          Alongside a professional background in media
          and visual storytelling, Emel also studied law
          and pursued a legal master’s degree focused on
          Technology, AI and Legal Services.
        </p>

        <p>
          Her academic and professional work explores
          The impact of emerging technologies and artificial
          intelligence within the creative industries,
          particularly focusing on creator visibility,
          intellectual property protection,
          digital identity and legal rights in evolving
          creative ecosystems.
        </p>

        <p>
          CreativeCheck was created to help creatives,
          artists, filmmakers, photographers,
          agencies and production professionals gain
          trusted visibility while protecting
          The value of creative work in the age
          of emerging technology.
        </p>

      </div>

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
