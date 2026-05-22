export default function SearchBar({
  searchQuery,
  setSearchQuery
}) {

  const handleSearch = () => {
    const section = document.getElementById('studios')

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="max-w-[860px] mx-auto px-6 mt-6 mb-10">

      {/* FILTER CHIPS */}
      <div className="flex items-center gap-3 flex-wrap justify-center mb-5">

        <button
          className="px-4 py-2 rounded-full text-[12px] font-bold bg-violet-600 text-white shadow-md hover:opacity-90 transition"
        >
          All
        </button>

        <button
          className="px-4 py-2 rounded-full text-[12px] font-bold bg-white border border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50 transition"
        >
          ✓ Verified
        </button>

        <button
          className="px-4 py-2 rounded-full text-[12px] font-bold bg-white border border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50 transition"
        >
          Studios
        </button>

        <button
          className="px-4 py-2 rounded-full text-[12px] font-bold bg-white border border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50 transition"
        >
          Agencies
        </button>

        <button
          className="px-4 py-2 rounded-full text-[12px] font-bold bg-white border border-gray-200 text-gray-700 hover:border-violet-300 hover:bg-violet-50 transition"
        >
          Photographers
        </button>

      </div>

      {/* SEARCH BAR */}
      <div
        className="flex items-center bg-white rounded-[26px] px-6 py-3 border border-gray-100"
        style={{
          boxShadow:
            '0 10px 50px rgba(0,0,0,0.08), 0 2px 12px rgba(124,58,237,0.06)'
        }}
      >

        {/* SEARCH ICON */}
        <svg
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="flex-shrink-0 mr-4"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>

        {/* INPUT */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' && handleSearch()
          }
          placeholder="Search verified creatives, agencies, filmmakers, photographers, studios..."
          className="flex-1 border-none outline-none bg-transparent text-[15px] text-gray-700 font-semibold placeholder-gray-400 py-3"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}
        />

        {/* SEARCH BUTTON */}
        <button
          onClick={handleSearch}
          className="ml-4 flex-shrink-0 rounded-[18px] px-5 h-[48px] flex items-center justify-center transition-all hover:scale-105"
          style={{
            background: '#7c3aed',
            boxShadow: '0 6px 24px rgba(124,58,237,0.35)'
          }}
        >

          <span className="text-white text-[13px] font-bold tracking-wide">
            SEARCH
          </span>

        </button>
      </div>
    </div>
  )
}
