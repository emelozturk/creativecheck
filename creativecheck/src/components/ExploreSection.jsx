import { useState } from 'react'

const profiles = [
  {
    name: 'Lina Moreau',
    role: 'Photographer',
    location: 'Paris, France',
    badge: 'Verified',
    bio: 'Fashion and editorial photographer with a public portfolio and professional online presence.',
    website: '#',
    instagram: '#',
    portfolio: '#',
    score: '92',
    links: '14',
    activity: 'High',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Alex Rivera',
    role: 'Filmmaker',
    location: 'Los Angeles, USA',
    badge: 'Featured',
    bio: 'Independent filmmaker focused on commercial, music video and documentary projects.',
    website: '#',
    instagram: '#',
    portfolio: '#',
    score: '88',
    links: '11',
    activity: 'High',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Sara Kim',
    role: 'Model',
    location: 'Seoul, South Korea',
    badge: 'Talent',
    bio: 'Model with public portfolio visibility and professional creative collaborations.',
    website: '#',
    instagram: '#',
    portfolio: '#',
    score: '84',
    links: '9',
    activity: 'Medium',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function ExploreSection({ searchQuery = '' }) {
  const [selectedProfile, setSelectedProfile] = useState(null)

  const filteredProfiles = profiles.filter((profile) =>
    `${profile.name} ${profile.role} ${profile.location} ${profile.badge}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  return (
    <section id="studios" className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-extrabold">Explore the Creative World</h2>
          <p className="text-gray-500 mt-2">
            Browse professionals across the global creative ecosystem.
          </p>
        </div>

        <a href="#add-profile" className="text-violet-600 font-semibold">
          Add your profile →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProfiles.map((profile) => (
          <div key={profile.name} className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 hover:-translate-y-1 hover:shadow-2xl transition">
            <div className="relative h-44 rounded-2xl mb-6 overflow-hidden">
              <img src={profile.image} alt={profile.name} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-700 shadow">
                {profile.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p className="text-gray-600">{profile.role}</p>
            <p className="text-gray-400 mt-2">{profile.location}</p>

            <p className="mt-5 text-sm text-gray-500">
              Public professional presence available.
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setSelectedProfile(profile)}
                className="flex-1 rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-700 transition"
              >
                View Profile
              </button>

              <a href={profile.website} className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:border-violet-300 transition">
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
                <h3 className="text-3xl font-extrabold">{selectedProfile.name}</h3>
                <p className="text-gray-600 mt-1">{selectedProfile.role}</p>
                <p className="text-gray-400 mt-1">{selectedProfile.location}</p>
              </div>

              <button onClick={() => setSelectedProfile(null)} className="rounded-full bg-gray-100 px-3 py-1 text-gray-500 hover:bg-gray-200">
                ✕
              </button>
            </div>

            <img src={selectedProfile.image} alt={selectedProfile.name} className="mt-8 h-48 w-full rounded-2xl object-cover" />

            <p className="mt-6 text-gray-600 leading-relaxed">
              {selectedProfile.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
