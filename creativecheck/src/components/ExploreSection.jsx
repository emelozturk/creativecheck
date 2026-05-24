import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function ExploreSection({ searchQuery = '' }) {

  const [profiles, setProfiles] = useState([])

  useEffect(() => {

    fetchProfiles()

  }, [])

  async function fetchProfiles() {

    const { data, error } = await supabase
      .from('profiles')
      .select('*')

    if (error) {

      console.error(error)

    } else {

      setProfiles(data || [])

    }

  }

  const filteredProfiles = profiles.filter((profile) => {

    const query = searchQuery.toLowerCase()

    return (

      profile.full_name?.toLowerCase().includes(query) ||

      profile.profession?.toLowerCase().includes(query) ||

      profile.category?.toLowerCase().includes(query)

    )

  })

  return (

    <section className="max-w-7xl mx-auto px-8 py-8">

      <div className="mb-8">

        <p className="text-xs uppercase tracking-[3px] text-violet-500 font-black mb-3">
          Explore Creatives
        </p>

        <h2 className="text-3xl md:text-4xl font-black tracking-[-2px] text-[#0f172a]">
          Discover creative professionals
        </h2>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {filteredProfiles.map((profile) => (

          <div
            key={profile.id}
            className="
              rounded-[28px]
              p-6
              bg-white/70
              backdrop-blur-xl
              border
              border-white/80
              shadow-[0_10px_30px_rgba(15,23,42,0.06)]
            "
          >

            <div className="flex items-center justify-between mb-5">

              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-br
                  from-violet-500
                  to-pink-500
                "
              />

              {profile.verified && (

                <div
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-emerald-100
                    text-emerald-700
                    text-xs
                    font-bold
                  "
                >
                  Verified
                </div>

              )}

            </div>

            <h3 className="text-2xl font-black text-[#0f172a]">
              {profile.full_name}
            </h3>

            <p className="text-violet-600 font-semibold mt-2">
              {profile.profession}
            </p>

            <p className="text-gray-500 text-sm mt-2">
              {profile.category}
            </p>

            {profile.bio && (

              <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                {profile.bio}
              </p>

            )}

          </div>

        ))}

      </div>

    </section>

  )
}
