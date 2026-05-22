import { useState } from 'react'

const profiles = [
  {
    name: 'Lina Moreau',
    role: 'Photographer',
    location: 'Paris, France',
    badge: 'Verified',
    bio: 'Fashion and editorial photographer with a public portfolio and professional online presence.'
  },
  {
    name: 'Alex Rivera',
    role: 'Filmmaker',
    location: 'Los Angeles, USA',
    badge: 'Featured',
    bio: 'Independent filmmaker focused on commercial, music video and documentary projects.'
  },
  {
    name: 'Sara Kim',
    role: 'Model',
    location: 'Seoul, South Korea',
    badge: 'Talent',
    bio: 'Model with public portfolio visibility and professional creative collaborations.'
  },
  {
    name: 'Marcus Stone',
    role: 'Stylist',
    location: 'London, UK',
    badge: 'Creative',
    bio: 'Creative stylist working across fashion, editorial and production styling.'
  },
  {
    name: 'Elena Petrova',
    role: 'Dancer',
    location: 'Berlin, Germany',
    badge: 'Performance',
    bio: 'Performance artist and dancer with public creative presence.'
  },
  {
    name: 'Studio Parallel',
    role: 'Creative Agency',
    location: 'Amsterdam, Netherlands',
    badge: 'Agency',
    bio: 'Creative agency with public business visibility, portfolio links and brand collaborations.'
  }
]

export default function ExploreSection() {
  const [selectedProfile, setSelectedProfile] = useState(null)

  return (
    <section id="studios" className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-extrabold">Explore the Creative World</h2>
          <p className="text-gray-500 mt-2">
            Browse professionals and companies across the global creative ecosystem.
          </p>
        </div>

        <a href="#add-profile" className="text-violet-600 font-semibold">
          Add your profile →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-2xl transition"
          >
            <div className="relative h-44 rounded-2xl bg-gradient-to-br from-violet-400 via-pink-400 to-orange-300 mb-6 overflow-hidden">
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-700 shadow">
                {profile.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-gray-600">{profile.role}</p>
            <p className="text-gray-400 mt-2">{profile.location}</p>

            <p className="mt-4 text-sm text-gray-500">
              Public professional presence available.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelectedProfile(profile)}
                className="flex-1 rounded-full bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-gray-700 transition"
              >
                View Profile
              </button>

              <a
                href="#"
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:border-violet-300 transition"
              >
                Website
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">
          <div className="max-w-xl w-full rounded-3xl bg-white p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700 mb-4">
                  {selectedProfile.badge}
                </span>

                <h3 className="text-3xl font-extrabold">
                  {selectedProfile.name}
                </h3>

                <p className="text-gray-600 mt-1">
                  {selectedProfile.role}
                </p>

                <p className="text-gray-400 mt-1">
                  {selectedProfile.location}
                </p>
              </div>

              <button
                onClick={() => setSelectedProfile(null)}
                className="rounded-full bg-gray-100 px-3 py-1 text-gray-500 hover:bg-gray-200"
              >
                ✕
              </button>
            </div>

            <div className="mt-8 h-48 rounded-2xl bg-gradient-to-br from-violet-400 via-pink-400 to-orange-300" />

            <p className="mt-6 text-gray-600 leading-relaxed">
              {selectedProfile.bio}
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">
              CreativeCheck provides informational summaries based on publicly available professional information.
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
