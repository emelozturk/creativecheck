import LogoIcon from './LogoIcon'

const NAV_LINKS = ['Discover','Categories','Studios','Agencies','Resources','About']

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  )
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[rgba(253,248,248,0.88)] backdrop-blur-md border-b border-black/[0.07]">
      <div className="max-w-[1300px] mx-auto px-8 h-[68px] flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <LogoIcon size={44} />
          <span className="text-[19.5px] font-extrabold tracking-tight leading-none">
            <span className="text-gray-900">Creative</span>
            <span className="gradient-check">Check</span>
          </span>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-9 flex-1 justify-center">
          {NAV_LINKS.map(l => (
            <a key={l} href="#"
              className="text-[13.5px] font-medium text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
              {l}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button className="bg-gray-900 text-white text-[13px] font-semibold px-5 py-[10px] rounded-full flex items-center gap-1.5 hover:bg-gray-700 transition-colors whitespace-nowrap">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.8" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add Your Profile
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-violet-300 transition-colors">
            <SunIcon />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-violet-300 transition-colors">
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}
