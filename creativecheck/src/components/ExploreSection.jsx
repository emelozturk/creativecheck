import { useEffect, useState } from 'react'

const SUPABASE_URL = 'https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY = 'sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'

export default function ExploreSection({ searchQuery = '' }) {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    try {
      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/profiles?status=eq.approved&select=*&order=created_at.desc`,
        {
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`
          }
        }
      )

      const data = await response.json()
      setProfiles(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Profile fetch error:', error)
      setProfiles([])
    } finally {
      setLoading(false)
    }
  }

  const filteredProfiles = profiles.filter((profile) => {
    const query = searchQuery.toLowerCase().trim()

    if (!query) return true

    return (
      profile.full_name?.toLowerCase().includes(query) ||
      profile.profession?.toLowerCase().includes(query) ||
      profile.category?.toLowerCase().includes(query) ||
      profile.city?.toLowerCase().includes(query) ||
      profile.country?.toLowerCase().includes(query)
    )
  })

  return (
    <section className="max-w-7xl mx-auto px-8 py-8">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[3px] text-violet-500 font-black mb-3">
          Explore Creatives
        </p>

        <h2 className="text-3xl md:text-4xl font-black tracking-[-2px] text-[#0f172a]">
          Discover creative professionals
        </h2>
      </div>

      {loading && (
        <p className="text-gray-500">
          Loading approved profiles...
        </p>
      )}

      {!loading && filteredProfiles.length === 0 && (
        <div className="rounded-3xl p-8 bg-white/70 backdrop-blur-xl border border-white/80 text-center">
          <h3 className="text-xl font-black text-[#0f172a]">
            No approved profiles yet
          </h3>

          <p className="text-gray-500 mt-2">
            Approved profiles will appear here.
          </p>
        </div>
      )}

      {!loading && filteredProfiles.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="rounded-[28px] p-6 bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400" />

                {profile.verified && (
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    Verified
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-black text-[#0f172a]">
                {profile.full_name || 'Creative Profile'}
              </h3>

              <p className="text-violet-600 font-semibold mt-2">
                {profile.profession || 'Creative Professional'}
              </p>

              <p className="text-gray-500 text-sm mt-2">
                {profile.category}
              </p>

              {(profile.city || profile.country) && (
                <p className="text-gray-400 text-sm mt-1">
                  {[profile.city, profile.country].filter(Boolean).join(', ')}
                </p>
              )}

              {profile.bio && (
                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  {profile.bio}
                </p>
              )}

              <div className="flex flex-wrap gap-3 mt-6">
                {profile.website && (
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-violet-600"
                  >
                    Website →
                  </a>
                )}

                {profile.instagram && (
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-pink-600"
                  >
                    Instagram →
                  </a>
                )}

                {profile.portfolio_url && (
                  <a
                    href={profile.portfolio_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-orange-600"
                  >
                    Portfolio →
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
