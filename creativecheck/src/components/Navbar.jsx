import { useState } from 'react'
import LogoIcon from './LogoIcon'

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

const categories = [
  ['Visual Arts', ['Photography', 'Illustration', 'Graphic Design', 'Art Direction', 'Digital Art']],
  ['Film & Media', ['Filmmakers', 'Directors', 'Editors', 'Cinematographers', 'Producers']],
  ['Fashion & Talent', ['Models', 'Stylists', 'Makeup Artists', 'Hair Stylists', 'Casting Talent']],
  ['Music & Performance', ['Musicians', 'Dancers', 'Actors', 'Performers', 'Voice Artists']],
  ['Business & Studios', ['Studios', 'Creative Agencies', 'Production Companies', 'Brand Teams', 'Content Creators']]
]

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)

  return (
    <nav className="sticky top-0 z-50 bg-[rgba(253,248,248,0.9)] backdrop-blur-md border-b border-black/[0.07]">
      <div className="max-w-[1300px] mx-auto px-8 h-[68px] flex items-center justify-between gap-6">

        <a href="#discover" className="flex items-center gap-2.5 flex-shrink-0">
          <LogoIcon size={44} />
          <span className="text-[19.5px] font-extrabold tracking-tight leading-none">
            <span className="text-gray-900">Creative</span>
            <span className="gradient-check">Check</span>
          </span>
        </a>

        <div className="flex items-center gap-10 flex-1 justify-center">

          <div className="relative">
            <button onClick={() => setOpenMenu(openMenu === 'categories' ? null : 'categories')} className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
              Categories
            </button>

            {openMenu === 'categories' && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 grid grid-cols-5 gap-5">
                {categories.map(([title, items]) => (
                  <div key={title}>
                    <h4 className="text-xs font-bold text-violet-600 uppercase mb-3">{title}</h4>
                    {items.map(item => (
                      <a key={item} href="#studios" className="block py-2 text-sm text-gray-700 hover:text-black">
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => setOpenMenu(openMenu === 'resources' ? null : 'resources')} className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
              Resources
            </button>

            {openMenu === 'resources' && (
              <div className="absolute top-10 left-0 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 space-y-3">
                <a href="#resources" className="block">
                  <p className="font-bold text-gray-900">Creative Guides</p>
                  <p className="text-sm text-gray-500">Tips for portfolios, visibility and professional growth.</p>
                </a>
                <a href="#resources" className="block">
                  <p className="font-bold text-gray-900">Legal & Business Support</p>
                  <p className="text-sm text-gray-500">Basic guidance for contracts, rights and creative work.</p>
                </a>
                <a href="#resources" className="block">
                  <p className="font-bold text-gray-900">Public Links & Reviews</p>
                  <p className="text-sm text-gray-500">Understand public presence and online professional signals.</p>
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => setOpenMenu(openMenu === 'about' ? null : 'about')} className="text-[15px] font-medium text-gray-600 hover:text-gray-900">
              About
            </button>

            {openMenu === 'about' && (
              <div className="absolute top-10 left-0 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 p-5">
                <h3 className="font-extrabold text-lg text-gray-900 mb-2">
                  About CreativeCheck
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  CreativeCheck is a public creative directory helping people discover photographers, filmmakers, models, studios, agencies and creative professionals with confidence.
                </p>
                <p className="text-xs text-gray-400 mt-4">
                  We provide informational summaries based on public professional presence, links and portfolio visibility — not allegations or endorsements.
                </p>
                <div className="mt-5 grid gap-2">
                  <a href="#about" className="text-sm font-semibold text-violet-600">Transparency Policy</a>
                  <a href="#add-profile" className="text-sm font-semibold text-violet-600">Submit Your Profile</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2.5 flex-shrink-0">
          <a href="#add-profile" className="bg-gray-900 text-white text-[13px] font-semibold px-5 py-[10px] rounded-full flex items-center gap-1.5 hover:bg-gray-700">
            <span className="text-lg leading-none">+</span>
            Add Your Profile
          </a>

          <button className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-violet-300">
            <SunIcon />
          </button>
        </div>
      </div>
    </nav>
  )
}
