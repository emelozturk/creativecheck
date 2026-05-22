import ProfileCard from './ProfileCard'

const profiles = [
  {
    name: 'Lina Moreau',
    role: 'Photographer',
    location: 'Paris, France',
    badge: 'Verified'
  },
  {
    name: 'Alex Rivera',
    role: 'Filmmaker',
    location: 'Los Angeles, USA',
    badge: 'Featured'
  },
  {
    name: 'Sara Kim',
    role: 'Model',
    location: 'Seoul, South Korea',
    badge: 'Talent'
  },
  {
    name: 'Marcus Stone',
    role: 'Stylist',
    location: 'London, UK',
    badge: 'Creative'
  },
  {
    name: 'Elena Petrova',
    role: 'Dancer',
    location: 'Berlin, Germany',
    badge: 'Performance'
  },
  {
    name: 'Studio Parallel',
    role: 'Creative Agency',
    location: 'Amsterdam, Netherlands',
    badge: 'Agency'
  }
]

export default function ExploreSection() {
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
            <div className="relative h-44 rounded-2xl bg-gradient-to-br from-violet-400 via-pink-400 to-orange-300 mb-6 overflow-hidden">
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

            <p className="mt-4 text-sm text-gray-500">
              Public professional presence available.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
