import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function ExploreSection() {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    const { data, error } = await supabase
      .from('creator_profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error) {
      setProfiles(data)
    }
  }

  return (
    <section
      id="discover"
      className="max-w-7xl mx-auto px-8 py-20"
    >
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-extrabold">
            Discover Creators
          </h2>

          <p className="text-gray-500 mt-2">
            Explore creative professionals from around the world.
          </p>
        </div>
      </div>

      {profiles.length === 0 ? (
        <div className="text-gray-400">
          No creator profiles yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map(profile => (
            <div
              key={profile.id}
              className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-400 to-pink-400" />

                <div>
                  <h3 className="text-xl font-bold">
                    {profile.full_name}
                  </h3>

                  <p className="text-gray-500">
                    {profile.profession}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-5">
                <p>
                  <span className="font-semibold">
                    Category:
                  </span>{' '}
                  {profile.category}
                </p>

                <p>
                  <span className="font-semibold">
                    Location:
                  </span>{' '}
                  {profile.city}, {profile.country}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {profile.bio}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
