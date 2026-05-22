import { useState, useEffect } from 'react'
import LogoIcon from './LogoIcon'

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.7 6.7 0 0 0 21 12.8z" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
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
  const [mobileMenu, setMobileMenu] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.body.style.background = dark ? '#0b1020' : '#fdf8f8'
    document.body.style.color = dark ? '#f8fafc' : '#111827'
  }, [dark])

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        dark
          ? 'bg-[#0b1020]/90 border-white/10'
          : 'bg-[rgba(253,248,248,0.9)] border-black/[0.07]'
      }`}
    >
      <div className="max-w-[1300px] mx-auto px-5 md:px-8 h-[68px] flex items-center justify-between gap-4">

        <a
          href="#discover"
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <LogoIcon size={42} />

          <span className="text-[18px] md:text-[19.5px] font-extrabold tracking-tight leading-none">
            <span className={dark ? 'text-white' : 'text-gray-900'}>
              Creative
            </span>

            <span className="gradient-check">
              Check
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">

          <div className="relative">
            <button
              onClick={() =>
                setOpenMenu(openMenu === 'categories' ? null : 'categories')
              }
              className={`text-[15px] font-medium ${
                dark ? 'text-gray-200' : 'text-gray-600'
              }`}
            >
              Categories
            </button>

            {openMenu === 'categories' && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 grid grid-cols-5 gap-5">

                {categories.map(([title, items]) => (
                  <div key={title}>
                    <h4 className="text-xs font-bold text-violet-600 uppercase mb-3">
                      {title}
                    </h4>

                    {items.map((item) => (
                      <a
                        key={item}
                        href="#studios"
                        className="block py-2 text-sm text-gray-700 hover:text-black"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}

              </div>
            )}
          </div>

          <a
            href="#resources"
            className={`text-[15px] font-medium ${
              dark ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            Resources
          </a>

          <a
            href="#about"
            className={`text-[15px] font-medium ${
              dark ? 'text-gray-200' : 'text-gray-600'
            }`}
          >
            About
          </a>
        </div>

        <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">

          <a
            href="#add-profile"
            className="bg-gray-900 text-white text-[13px] font-semibold px-5 py-[10px] rounded-full flex items-center gap-1.5 hover:bg-gray-700 transition"
          >
            <span className="text-lg leading-none">
              +
            </span>

            Add Your Profile
          </a>

          <button
            onClick={() => setDark(!dark)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              dark
                ? 'bg-white text-gray-900 border-white'
                : 'bg-white text-gray-500 border-gray-200'
            }`}
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">

          <button
            onClick={() => setDark(!dark)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              dark
                ? 'bg-white text-gray-900 border-white'
                : 'bg-white text-gray-500 border-gray-200'
            }`}
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`w-10 h-10 rounded-full border flex items-center justify-center ${
              dark
                ? 'border-white/10 text-white'
                : 'border-gray-200 text-gray-700 bg-white'
            }`}
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div
          className={`md:hidden border-t ${
            dark
              ? 'bg-[#0b1020] border-white/10'
              : 'bg-white border-gray-100'
          }`}
        >
          <div className="px-6 py-6 space-y-5">

            <a
              href="#categories"
              onClick={() => setMobileMenu(false)}
              className={`block text-sm font-semibold ${
                dark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Categories
            </a>

            <a
              href="#resources"
              onClick={() => setMobileMenu(false)}
              className={`block text-sm font-semibold ${
                dark ? 'text-white' : 'text-gray-800'
              }`}
            >
              Resources
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenu(false)}
              className={`block text-sm font-semibold ${
                dark ? 'text-white' : 'text-gray-800'
              }`}
            >
              About
            </a>

            <a
              href="#add-profile"
              onClick={() => setMobileMenu(false)}
              className="block bg-violet-600 text-white text-center rounded-2xl py-4 font-semibold"
            >
              Add Your Profile
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}
