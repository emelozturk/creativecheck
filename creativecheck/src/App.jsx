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
                bg-white/80
                border
                border-white
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition
              "
            >

              <div
                className="w-9 h-9 rounded-xl mb-3"
                style={{
                  background:
                    `linear-gradient(135deg, ${group.color}, #dbeafe)`
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
            className="
              px-7
              py-4
              rounded-full
              bg-[#0f172a]
              text-white
              font-semibold
              shadow-xl
              hover:bg-blue-600
              transition
            "
          >
            + Join CreativeCheck
          </a>

        </div>

      </section>

      {/* EXPLORE */}

      <section id="studios">
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
              '#4f46e5'
            ],

            [
              'Correction Requests',
              'Update or remove information.',
              '#2563eb'
            ],

            [
              'Trust Notice',
              'Discovery only, no guarantees.',
              '#06b6d4'
            ]

          ].map(([title, text, color]) => (

            <div
              key={title}
              className="
                rounded-2xl
                p-5
                bg-white/80
                border
                border-white
                shadow-sm
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
        className="max-w-7xl mx-auto px-8 py-8"
      >

        <div className="grid lg:grid-cols-2 gap-5">

          {/* ABOUT PLATFORM */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              p-8
              bg-gradient-to-br
              from-[#0f172a]
              via-[#1d4ed8]
              to-[#06b6d4]
              text-white
              shadow-[0_20px_60px_rgba(15,23,42,0.18)]
            "
          >

            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />

            <p
              className="
                relative
                z-10
                text-xs
                uppercase
                tracking-[3px]
                text-blue-100
                font-black
                mb-4
              "
            >
              About CreativeCheck
            </p>

            <h2
              className="
                relative
                z-10
                text-3xl
                md:text-5xl
                font-black
                tracking-[-3px]
                leading-[1]
                mb-5
              "
            >
              A discovery layer
              <br />
              for the global
              <br />
              creative industry.
            </h2>

            <p
              className="
                relative
                z-10
                text-[15px]
                text-white/80
                leading-relaxed
                max-w-xl
              "
            >
              CreativeCheck is a public creative discovery platform
              helping users explore creatives, studios, agencies and
              production companies through portfolio presence,
              professional visibility and reviewed profile information.
            </p>

            <p
              className="
                relative
                z-10
                text-[15px]
                text-white/70
                leading-relaxed
                max-w-xl
                mt-5
              "
            >
              The platform is designed to support transparency,
              discoverability and professional visibility for the
              global creative community.
            </p>

            <div className="relative z-10 mt-7">

              <a
                href="#add-profile"
                className="
                  inline-flex
                  items-center
                  px-6
                  py-3
                  rounded-full
                  bg-white
                  text-[#0f172a]
                  font-semibold
                  shadow-xl
                  hover:scale-105
                  transition
                "
              >
                Create Your Profile
              </a>

            </div>

          </div>

          {/* FOUNDER */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[34px]
              p-8
              bg-white/85
              border
              border-white
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
            "
          >

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60" />

            <p
              className="
                relative
                z-10
                text-xs
                uppercase
                tracking-[3px]
                text-blue-500
                font-black
                mb-4
              "
            >
              Founder
            </p>

            <h2
              className="
                relative
                z-10
                text-3xl
                md:text-5xl
                font-black
                tracking-[-3px]
                text-[#0f172a]
                leading-[1]
                mb-5
              "
            >
              Founded by
              <br />
              Emel Ozturk
            </h2>

            <p
              className="
                relative
                z-10
                text-[15px]
                text-gray-600
                leading-relaxed
              "
            >
              CreativeCheck was founded by Emel Ozturk,
              combining creative industry experience with
              legal knowledge to create a more transparent,
              professional and discoverable ecosystem for
              creatives worldwide.
            </p>

            <p
              className="
                relative
                z-10
                text-[15px]
                text-gray-500
                leading-relaxed
                mt-5
              "
            >
              The mission behind CreativeCheck is to help
              creatives gain visibility while encouraging
              responsible use of public information and
              ethical creative discovery systems.
            </p>

            <div className="relative z-10 mt-7 flex flex-wrap gap-3">

              <div
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-50
                  text-blue-700
                  text-sm
                  font-semibold
                "
              >
                Creative Industry
              </div>

              <div
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-indigo-50
                  text-indigo-700
                  text-sm
                  font-semibold
                "
              >
                Legal Knowledge
              </div>

              <div
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-50
                  text-cyan-700
                  text-sm
                  font-semibold
                "
              >
                Creative Technology
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ADD PROFILE */}

      <section id="add-profile">
        <AddProfilePage />
      </section>

      <FeatureStrip />

      <Footer />

    </div>
  )
}
