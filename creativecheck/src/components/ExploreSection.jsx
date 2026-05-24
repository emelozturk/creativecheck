import { useEffect, useState } from 'react'

const SUPABASE_URL = 'https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY = 'sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'

export default function ExploreSection({ searchQuery = '' }) {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProfile, setSelectedProfile] = useState(null)

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

  const Avatar = ({ profile, large = false }) => {
    const size = large ? 'w-28 h-28 rounded-[30px]' : 'w-20 h-20 rounded-[24px]'

    if (profile.avatar_url) {
      return (
        <img
          src={profile.avatar_url}
          alt={profile.full_name || 'Creative profile'}
          onError={(e) => {
            e.currentTarget.style.display = 'none'
            e.currentTarget.nextSibling.style.display = 'flex'
          }}
          className={`${size} object-cover border border-white/80 shadow-xl`}
        />
      )
    }

    return (
      <div
        className={`${size} flex items-center justify-center bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-white text-2xl font-black shadow-xl`}
      >
        {profile.full_name?.charAt(0) || 'C'}
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-8 py-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[4px] text-violet-500 font-black mb-3">
          Explore Creatives
        </p>

        <h2 className="text-4xl md:text-5xl font-black tracking-[-3px] text-[#0f172a]">
          Discover creative professionals
        </h2>
      </div>

      {loading && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-[34px] p-6 bg-white/60 backdrop-blur-2xl border border-white/80 animate-pulse"
            >
              <div className="w-20 h-20 rounded-[24px] bg-gray-200 mb-6" />
              <div className="h-7 rounded-xl bg-gray-200 mb-3" />
              <div className="h-5 rounded-xl bg-gray-100 w-2/3 mb-3" />
              <div className="h-4 rounded-xl bg-gray-100 mb-2" />
              <div className="h-4 rounded-xl bg-gray-100 w-4/5" />
            </div>
          ))}
        </div>
      )}

      {!loading && filteredProfiles.length === 0 && (
        <div className="rounded-[34px] p-10 bg-white/70 backdrop-blur-xl border border-white/80 text-center">
          <h3 className="text-2xl font-black text-[#0f172a]">
            No approved profiles yet
          </h3>

          <p className="text-gray-500 mt-2">
            Approved profiles will appear here.
          </p>
        </div>
      )}

      {!loading && filteredProfiles.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfiles.map((profile) => (
            <button
              key={profile.id}
              onClick={() => {
                setSelectedProfile(profile)
                window.history.replaceState(null, '', `/#profile-${profile.id}`)
              }}
              className="group text-left rounded-[36px] p-[1px] bg-gradient-to-br from-violet-500/50 via-pink-400/40 to-orange-300/50 shadow-[0_20px_60px_rgba(124,58,237,0.12)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-full rounded-[36px] p-6 bg-white/75 backdrop-blur-2xl border border-white/80">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <Avatar profile={profile} />

                    <div
                      className="hidden w-20 h-20 rounded-[24px] items-center justify-center bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-white text-2xl font-black shadow-xl"
                    >
                      {profile.full_name?.charAt(0) || 'C'}
                    </div>
                  </div>

                  {profile.verified && (
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black">
                      Verified
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black tracking-[-1px] text-[#0f172a]">
                  {profile.full_name || 'Creative Profile'}
                </h3>

                <p className="text-violet-600 font-bold mt-2">
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
                  <p className="text-gray-500 text-sm mt-5 leading-relaxed line-clamp-3">
                    {profile.bio}
                  </p>
                )}

                <p className="mt-6 text-sm font-black text-violet-600">
                  View Profile →
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-6">
          <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[40px] bg-white shadow-2xl">
            <div
              className="h-48 rounded-t-[40px]"
              style={{
                background:
                  'radial-gradient(circle at 20% 20%, #ec4899, transparent 35%), radial-gradient(circle at 80% 20%, #f97316, transparent 35%), linear-gradient(135deg,#7c3aed,#312e81)'
              }}
            />

            <div className="p-8 -mt-16">
              <div className="flex items-end justify-between gap-6 mb-8">
                <div className="flex items-end gap-5">
                  <div className="relative">
                    <Avatar profile={selectedProfile} large />

                    <div
                      className="hidden w-28 h-28 rounded-[30px] items-center justify-center bg-gradient-to-br from-violet-500 via-pink-500 to-orange-400 text-white text-4xl font-black border-4 border-white shadow-xl"
                    >
                      {selectedProfile.full_name?.charAt(0) || 'C'}
                    </div>
                  </div>

                  <div className="pb-2">
                    <h2 className="text-3xl md:text-4xl font-black tracking-[-2px] text-[#0f172a]">
                      {selectedProfile.full_name || 'Creative Profile'}
                    </h2>

                    <p className="text-violet-600 font-semibold mt-2">
                      {selectedProfile.profession || 'Creative Professional'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedProfile(null)
                    window.history.replaceState(null, '', '/')
                  }}
                  className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 text-xl"
                >
                  ×
                </button>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {selectedProfile.verified && (
                  <span className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                    Verified Creative
                  </span>
                )}

                {selectedProfile.category && (
                  <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-xs font-bold">
                    {selectedProfile.category}
                  </span>
                )}

                {(selectedProfile.city || selectedProfile.country) && (
                  <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-xs font-bold">
                    {[selectedProfile.city, selectedProfile.country].filter(Boolean).join(', ')}
                  </span>
                )}
              </div>

              {selectedProfile.bio && (
                <div className="mb-8">
                  <h3 className="text-sm uppercase tracking-[2px] font-black text-gray-400 mb-3">
                    Profile Summary
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {selectedProfile.bio}
                  </p>
                </div>
              )}

              <div className="grid md:grid-cols-3 gap-3">
                {selectedProfile.website && (
                  <a
                    href={selectedProfile.website}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-[#0f172a] text-white px-5 py-4 text-center font-semibold hover:bg-violet-600 transition"
                  >
                    ↗ Website
                  </a>
                )}

                {selectedProfile.instagram && (
                  <a
                    href={selectedProfile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-pink-50 text-pink-600 px-5 py-4 text-center font-semibold hover:bg-pink-100 transition"
                  >
                    ◎ Instagram
                  </a>
                )}

                {selectedProfile.portfolio_url && (
                  <a
                    href={selectedProfile.portfolio_url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-orange-50 text-orange-600 px-5 py-4 text-center font-semibold hover:bg-orange-100 transition"
                  >
                    ◉ Portfolio
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
