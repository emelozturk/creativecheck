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
    <div className="max-w-[780px] mx-auto px-6 mt-6 mb-8">
      <div
        className="flex items-center bg-white rounded-full px-6 py-2"
        style={{
          boxShadow:
            '0 4px 40px rgba(0,0,0,0.11), 0 1px 8px rgba(124,58,237,0.08)'
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2.2"
          strokeLinecap="round"
          className="flex-shrink-0 mr-3"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.35-4.35" />
        </svg>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) =>
            e.key === 'Enter' && handleSearch()
          }
          placeholder="Search creatives, artists, studios, agencies, production companies…"
          className="flex-1 border-none outline-none bg-transparent text-[14.5px] text-gray-700 font-medium placeholder-gray-400 py-3"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}
        />

        <button
          onClick={handleSearch}
          className="ml-3 flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-opacity hover:opacity-85"
          style={{
            background: '#7c3aed',
            boxShadow: '0 4px 18px rgba(124,58,237,0.4)'
          }}
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.6"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>
    </div>
  )
}
