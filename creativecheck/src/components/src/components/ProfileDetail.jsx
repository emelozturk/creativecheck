export default function ProfileDetail({ profile }) {
  if (!profile) {
    return null
  }

  return (
    <section className="max-w-5xl mx-auto px-8 py-20">
      <div className="bg-white rounded-[32px] shadow-xl border border-gray-100 overflow-hidden">

        <div
          className="h-56"
          style={{
            background:
              'linear-gradient(135deg,#7c3aed,#ec4899,#ff7a18,#14b8a6)'
          }}
        />

        <div className="p-10">
          <div className="flex items-start justify-between gap-8">

            <div>
              <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-violet-700 mb-5">
                Public Presence Verified
              </span>

              <h1 className="text-5xl font-black tracking-[-2px] text-[#0f172a]">
                {profile.full_name || profile.name}
              </h1>

              <p className="text-xl text-gray-600 mt-3">
                {profile.profession || profile.role}
              </p>

              <p className="text-gray-400 mt-2">
                {profile.city || profile.location}
              </p>
            </div>

          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="rounded-3xl bg-gray-50 p-6">
              <p className="text-3xl font-black text-[#0f172a]">92</p>
              <p className="text-sm text-gray-500 mt-1">Public Score</p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6">
              <p className="text-3xl font-black text-[#0f172a]">14</p>
              <p className="text-sm text-gray-500 mt-1">Public Links</p>
            </div>

            <div className="rounded-3xl bg-gray-50 p-6">
              <p className="text-3xl font-black text-[#0f172a]">Active</p>
              <p className="text-sm text-gray-500 mt-1">Activity</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-extrabold text-[#0f172a]">
              Profile Summary
            </h2>

            <p className="text-gray-600 leading-relaxed mt-4">
              {profile.bio || 'Public creative profile available on CreativeCheck.'}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {profile.website && (
              <a
                href={profile.website}
                target="_blank"
                className="rounded-full bg-[#0f172a] px-6 py-3 text-white font-semibold"
              >
                Website
              </a>
            )}

            {profile.instagram && (
              <a
                href={profile.instagram}
                target="_blank"
                className="rounded-full border border-gray-200 px-6 py-3 text-gray-700 font-semibold"
              >
                Instagram
              </a>
            )}

            {profile.portfolio_url && (
              <a
                href={profile.portfolio_url}
                target="_blank"
                className="rounded-full border border-gray-200 px-6 py-3 text-gray-700 font-semibold"
              >
                Portfolio
              </a>
            )}
          </div>

          <div className="mt-10 rounded-3xl bg-gray-50 p-6 text-sm text-gray-500 leading-relaxed">
            <p className="font-bold text-gray-700 mb-2">
              Source Transparency
            </p>

            <p>
              CreativeCheck provides informational summaries based on user-submitted
              profile information, public professional visibility, public links and
              portfolio presence. CreativeCheck does not provide legal conclusions,
              endorsements, guarantees or background checks.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
