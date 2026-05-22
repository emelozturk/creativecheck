import ProfileCard from './ProfileCard'

const profiles = [
  {
    name: 'Lina Moreau',
    role: 'Photographer',
    location: 'Paris, France'
  },
  {
    name: 'Alex Rivera',
    role: 'Filmmaker',
    location: 'Los Angeles, USA'
  },
  {
    name: 'Sara Kim',
    role: 'Model',
    location: 'Seoul, South Korea'
  },
  {
    name: 'Marcus Stone',
    role: 'Stylist',
    location: 'London, UK'
  },
  {
    name: 'Elena Petrova',
    role: 'Dancer',
    location: 'Berlin, Germany'
  },
  {
    name: 'Studio Parallel',
    role: 'Creative Agency',
    location: 'Amsterdam, Netherlands'
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
          <ProfileCard
            key={profile.name}
            name={profile.name}
            role={profile.role}
            location={profile.location}
          />
        ))}
      </div>
    </section>
  )
}
