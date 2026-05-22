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
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop'
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
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop'
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
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Marcus Stone',
    role: 'Stylist',
    location: 'London, UK',
    badge: 'Creative',
    bio: 'Creative stylist working across fashion, editorial and production styling.',
    website: '#',
    instagram: '#',
    portfolio: '#',
    score: '81',
    links: '8',
    activity: 'Medium',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Elena Petrova',
    role: 'Dancer',
    location: 'Berlin, Germany',
    badge: 'Performance',
    bio: 'Performance artist and dancer with public creative presence.',
    website: '#',
    instagram: '#',
    portfolio: '#',
    score: '79',
    links: '6',
    activity: 'Growing',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop'
  },
  {
    name: 'Studio Parallel',
    role: 'Creative Agency',
    location: 'Amsterdam, Netherlands',
    badge: 'Agency',
    bio: 'Creative agency with public business visibility, portfolio links and brand collaborations.',
    website: '#',
    instagram: '#',
    portfolio: '#',
    score: '95',
    links: '22',
    activity: 'Very High',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop'
  }
]

export default function ExploreSection() {
  const [selectedProfile, setSelectedProfile] = useState(null)

  return (
    <section id="studios" className="max-w-7xl mx-auto px-8 py-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-extrabold">
            Explore the Creative World
          </h2>

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
            <div className="relative h-44 rounded-2xl mb-6 overflow-hidden">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />

              <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-700 shadow">
                {profile.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold">
              {profile.name}
            </h3>

            <p className="text-gray-600">
              {profile.role}
            </p>

            <p className="text-gray-400 mt-2">
              {profile.location}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-gray-50 p-3 text-center">
                <p className="text-xl font-extrabold">
                  {profile.score}
                </p>

                <p className="text-xs text-gray-400">
                  Score
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3 text-center">
                <p className="text-xl font-extrabold">
                  {profile.links}
                </p>

                <p className="text-xs text-gray-400">
                  Links
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-3 text-center">
                <p className="text-sm font-bold">
                  {profile.activity}
                </p>

                <p className="text-xs text-gray-400">
                  Activity
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm text-gray-500">
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
                href={profile.website}
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

            <img
              src={selectedProfile.image}
              alt={selectedProfile.name}
              className="mt-8 h-48 w-full rounded-2xl object-cover"
            />

            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-gray-50 p-4 text-center">
                <p className="text-2xl font-extrabold">
                  {selectedProfile.score}
                </p>

                <p className="text-xs text-gray-400">
                  Public Score
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 text-center">
                <p className="text-2xl font-extrabold">
                  {selectedProfile.links}
                </p>

                <p className="text-xs text-gray-400">
                  Public Links
                </p>
              </div>

              <div className="rounded-2xl bg-gray-50 p-4 text-center">
                <p className="text-sm font-bold">
                  {selectedProfile.activity}
                </p>

                <p className="text-xs text-gray-400">
                  Activity
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {selectedProfile.bio}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href={selectedProfile.website}
                target="_blank"
                className="rounded-full bg-gray-900 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Website
              </a>

              <a
                href={selectedProfile.instagram}
                target="_blank"
                className="rounded-full border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700"
              >
                Instagram
              </a>

              <a
                href={selectedProfile.portfolio}
                target="_blank"
                className="rounded-full border border-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-700"
              >
                Portfolio
              </a>

              <a
                href="#add-profile"
                onClick={() => setSelectedProfile(null)}
                className="rounded-full bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact / Submit
              </a>
            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">
              <p className="font-semibold text-gray-700 mb-2">
                Source Transparency
              </p>

              <p>
                CreativeCheck provides informational summaries based on publicly available professional information, public links and portfolio visibility.
              </p>

              <p className="mt-3 text-xs text-gray-400">
                CreativeCheck does not verify, endorse or guarantee any individual, company or organisation listed on the platform.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
