import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function ExploreSection({ searchQuery = '' }) {

  const [profiles, setProfiles] = useState([])
  const [selectedProfile, setSelectedProfile] = useState(null)

  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('status', 'approved')

    if (!error) {
      setProfiles(data)
    }
  }

  const filteredProfiles = profiles.filter((profile) =>
    `${profile.full_name} ${profile.profession} ${profile.category}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )

  return (
    <section
      id="discover"
      className="max-w-7xl mx-auto px-8 py-20"
    >

      <div className="flex items-center justify-between mb-10">

        <div>
          <h2 className="text-3xl font-extrabold">
            Explore the Creative World
          </h2>

          <p className="text-gray-500 mt-2">
            Browse professionals across the global creative ecosystem.
          </p>
        </div>

        <a
          href="#add-profile"
          className="text-violet-600 font-semibold"
        >
          Add your profile →
        </a>

      </div>

      {filteredProfiles.length === 0 && (

        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 text-center">

          <h3 className="text-2xl font-bold text-gray-900">
            No profiles found
          </h3>

          <p className="text-gray-500 mt-3">
            No approved profiles yet.
          </p>

        </div>

      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProfiles.map((profile) => (

          <div
            key={profile.id}
            className="
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-gray-100
              p-6
              hover:-translate-y-1
              hover:shadow-2xl
              transition
            "
          >

            <div className="relative h-44 rounded-2xl mb-6 overflow-hidden">

              <img
                src={
                  profile.avatar_url ||
                  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop'
                }
                alt={profile.full_name}
                className="w-full h-full object-cover"
              />

              <span
                className="
                  absolute
                  top-4
                  left-4
                  rounded-full
                  bg-white/90
                  px-3
                  py-1
                  text-xs
                  font-bold
                  text-gray-700
                  shadow
                "
              >
                Verified
              </span>

            </div>

            <h3 className="text-xl font-bold">
              {profile.full_name}
            </h3>

            <p className="text-gray-600">
              {profile.profession}
            </p>

            <p className="text-gray-400 mt-2">
              {profile.category}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-3">

              <div className="rounded-2xl bg-gray-50 p-3 text-center">

                <p className="text-xl font-extrabold">
                  92
                </p>

                <p className="text-xs text-gray-400">
                  Score
                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 p-3 text-center">

                <p className="text-xl font-extrabold">
                  14
                </p>

                <p className="text-xs text-gray-400">
                  Links
                </p>

              </div>

              <div className="rounded-2xl bg-gray-50 p-3 text-center">

                <p className="text-sm font-bold">
                  Active
                </p>

                <p className="text-xs text-gray-400">
                  Activity
                </p>

              </div>

            </div>

            <p className="mt-5 text-sm text-gray-500">

              {profile.bio ||
                'Public creative profile available on CreativeCheck.'}

            </p>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => setSelectedProfile(profile)}
                className="
                  flex-1
                  rounded-full
                  bg-gray-900
                  px-4
                  py-2
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  hover:bg-gray-700
                  transition
                "
              >
                View Profile
              </button>

              <a
                href={profile.website_url || '#'}
                target="_blank"
                className="
                  rounded-full
                  border
                  border-gray-200
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  text-gray-600
                  hover:border-violet-300
                  transition
                "
              >
                Website
              </a>

            </div>

          </div>

        ))}

      </div>

      {selectedProfile && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

          <div
            className="
              max-w-xl
              w-full
              rounded-3xl
              bg-white
              p-8
              shadow-2xl
              max-h-[90vh]
              overflow-y-auto
            "
          >

            <div className="flex items-start justify-between gap-6">

              <div>

                <span
                  className="
                    inline-block
                    rounded-full
                    bg-violet-100
                    px-3
                    py-1
                    text-xs
                    font-bold
                    text-violet-700
                    mb-4
                  "
                >
                  Verified
                </span>

                <h3 className="text-3xl font-extrabold">
                  {selectedProfile.full_name}
                </h3>

                <p className="text-gray-600 mt-1">
                  {selectedProfile.profession}
                </p>

                <p className="text-gray-400 mt-1">
                  {selectedProfile.category}
                </p>

              </div>

              <button
                onClick={() => setSelectedProfile(null)}
                className="
                  rounded-full
                  bg-gray-100
                  px-3
                  py-1
                  text-gray-500
                  hover:bg-gray-200
                "
              >
                ✕
              </button>

            </div>

            <img
              src={
                selectedProfile.avatar_url ||
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop'
              }
              alt={selectedProfile.full_name}
              className="
                mt-8
                h-48
                w-full
                rounded-2xl
                object-cover
              "
            />

            <p className="mt-6 text-gray-600 leading-relaxed">

              {selectedProfile.bio ||
                'Public creative profile available on CreativeCheck.'}

            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">

              <a
                href={selectedProfile.website_url || '#'}
                target="_blank"
                className="
                  rounded-full
                  bg-gray-900
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Website
              </a>

              <a
                href={selectedProfile.instagram_url || '#'}
                target="_blank"
                className="
                  rounded-full
                  border
                  border-gray-200
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-gray-700
                "
              >
                Instagram
              </a>

            </div>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5 text-sm text-gray-500">

              <p className="font-semibold text-gray-700 mb-2">
                Source Transparency
              </p>

              <p>
                CreativeCheck provides informational summaries
                based on publicly available professional information,
                public links and portfolio visibility.
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}
