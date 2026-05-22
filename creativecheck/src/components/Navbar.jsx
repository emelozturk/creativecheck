import LogoIcon from './LogoIcon'

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(253,248,248,0.88)] backdrop-blur-md border-b border-black/[0.07]">
      <div className="max-w-[1300px] mx-auto px-8 h-[68px] flex items-center justify-between gap-6">
        
        <a href="#discover" className="flex items-center gap-2.5 flex-shrink-0">
          <LogoIcon size={44} />
          <span className="text-[19.5px] font-extrabold tracking-tight leading-none">
            <span className="text-gray-900">Creative</span>
            <span className="gradient-check">Check</span>
          </span>
        </a>

        <div className="flex items-center gap-10 flex-1 justify-center">
          <a href="#categories" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Categories
          </a>

          <a href="#resources" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
            Resources
          </a>

          <a href="#about" className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          <a
            href="#add-profile"
            className="bg-gray-900 text-white text-[13px] font-semibold px-5 py-[10px] rounded-full flex items-center gap-1.5 hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            <span className="text-lg leading-none">+</span>
            Add Your Profile
          </a>

          <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-violet-300 transition-colors">
            <SunIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}
