import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

export default function ExploreSection({ searchQuery }) {

  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetchProfiles()

  }, [])

  async function fetchProfiles() {

    setLoading(true)

    const { data, error } = await supabase

      .from('profiles')

      .select('*')

      .eq('status', 'approved')

      .order('created_at', { ascending: false })

    if (error) {

      console.error(error)

    } else {

      setProfiles(data || [])

    }

    setLoading(false)

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

      <div className="flex items-center justify-between mb-6">

        <div>

          <p className="text-xs uppercase tracking-[3px] text-violet-500 font-black mb-3">
            Explore Creatives
          </p>

          <h2 className="text-3xl md:text-4xl font-black tracking-[-2px] text-[#0f172a]">
            Discover creative professionals
          </h2>

        </div>

      </div>

      {loading ? (

        <div className="text-gray-500">
          Loading profiles...
        </div>

      ) : filteredProfiles.length === 0 ? (

        <div
          className="
            rounded-3xl
            p-10
            text-center
            bg-white/70
            backdrop-blur-xl
            border
            border-white/80
          "
        >

          <h3 className="text-2xl font-black text-[#0f172a] mb-3">
            No profiles found
          </h3>

          <p className="text-gray-500">
            Try another search or category.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

          {filteredProfiles.map((profile) => (

            <div
              key={profile.id}
              className="
                overflow-hidden
                rounded-[30px]
                bg-white/70
                backdrop-blur-xl
                border
                border-white/80
                shadow-[0_15px_40px_rgba(15,23,42,0.06)]
              "
            >

              <div className="p-6">

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

                {profile.portfolio_url && (

                  <a
                    href={profile.portfolio_url}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      mt-6
                      text-sm
                      font-semibold
                      text-violet-600
                      hover:text-violet-800
                    "
                  >
                    View Portfolio →
                  </a>

                )}

              </div>

            </div>

          ))}

        </div>

      )}

    </section>

  )
}
