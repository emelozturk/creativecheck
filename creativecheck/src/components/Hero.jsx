import { useState } from 'react'
import LogoIcon from './LogoIcon'

const info = {
  about: {
    title: 'About CreativeCheck',
    text: 'CreativeCheck is a public creative discovery platform that helps users explore creative professionals through public professional visibility, portfolio presence and trusted discovery signals.'
  },

  privacy: {
    title: 'Privacy Policy',
    text: 'CreativeCheck only collects information submitted by users or publicly available professional information. Users may request correction or removal of their profile information.'
  },

  terms: {
    title: 'Terms of Service',
    text: 'Users are responsible for submitting accurate information that belongs to them. CreativeCheck may review, reject, update or remove profiles where necessary.'
  },

  disclaimer: {
    title: 'Disclaimer',
    text: 'CreativeCheck is an informational discovery platform. It does not provide legal conclusions, official certification, endorsements, guarantees or background checks.'
  },

  copyright: {
    title: 'Copyright Notice',
    text: 'All images, logos, names, trademarks and creative works remain the property of their respective owners. Copyright concerns can be submitted for review.'
  },

  removal: {
    title: 'Profile Removal',
    text: 'If you want your profile removed or corrected, you can contact CreativeCheck and request profile removal, clarification or information correction.'
  }
}

export default function Footer() {
  const [active, setActive] = useState(null)

  return (
    <>
      <footer
        id="about"
        className="bg-[#07111f] text-gray-300 px-8 py-20"
      >
        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="grid lg:grid-cols-3 gap-16">

            {/* LEFT */}
            <div>

              <div className="flex items-center gap-3 mb-6">
                <LogoIcon size={44} />

                <span className="text-3xl font-black text-white tracking-[-1px]">
                  Creative
                  <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Check
                  </span>
                </span>
              </div>

              <p className="text-[15px] leading-[1.9] text-gray-400 max-w-sm">
                CreativeCheck helps users discover photographers,
                filmmakers, models, creators and creative professionals
                through trusted public visibility and portfolio discovery.
              </p>

            </div>

            {/* CENTER */}
            <div>

              <h4 className="text-[12px] tracking-[0.35em] font-bold text-gray-500 mb-8">
                NAVIGATION
              </h4>

              <div className="space-y-5">

                <a
                  href="#discover"
                  className="block text-[17px] hover:text-white transition"
                >
                  Discover
                </a>

                <a
                  href="#resources"
                  className="block text-[17px] hover:text-white transition"
                >
                  Resources
                </a>

                <button
                  onClick={() => setActive(info.about)}
                  className="block text-[17px] hover:text-white transition text-left"
                >
                  About
                </button>

              </div>

            </div>

            {/* RIGHT */}
            <div>

              <h4 className="text-[12px] tracking-[0.35em] font-bold text-gray-500 mb-8">
                LEGAL & SUPPORT
              </h4>

              <div className="space-y-5">

                <button
                  onClick={() => setActive(info.privacy)}
                  className="block text-[17px] hover:text-white transition text-left"
                >
                  Privacy Policy
                </button>

                <button
                  onClick={() => setActive(info.terms)}
                  className="block text-[17px] hover:text-white transition text-left"
                >
                  Terms of Service
                </button>

                <button
                  onClick={() => setActive(info.disclaimer)}
                  className="block text-[17px] hover:text-white transition text-left"
                >
                  Disclaimer
                </button>

                <button
                  onClick={() => setActive(info.copyright)}
                  className="block text-[17px] hover:text-white transition text-left"
                >
                  Copyright Notice
                </button>

                <button
                  onClick={() => setActive(info.removal)}
                  className="block text-[17px] hover:text-white transition text-left"
                >
                  Profile Removal
                </button>

              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-16 pt-8">

            <p className="text-gray-500 text-[13px] leading-relaxed max-w-5xl">
              CreativeCheck provides informational summaries based on publicly available professional information,
              portfolio visibility, public links and public-facing references.
              CreativeCheck does not provide legal conclusions, verification services,
              endorsements or accusations.
            </p>

            <p className="text-gray-600 text-sm mt-6">
              © 2026 CreativeCheck. All rights reserved.
            </p>

          </div>

        </div>
      </footer>

      {/* POPUP */}
      {active && (

        <div className="fixed inset-0 z-[999] flex items-end justify-center bg-black/60 backdrop-blur-sm px-4">

          <div
            className="w-full max-w-3xl bg-white rounded-t-[34px] p-10 shadow-2xl animate-slide-up"
          >

            <div className="flex items-start justify-between gap-6">

              <div>

                <h2 className="text-4xl font-black text-[#0f172a] mb-6 tracking-[-1px]">
                  {active.title}
                </h2>

                <p className="text-gray-600 leading-[2] text-[16px]">
                  {active.text}
                </p>

              </div>

              <button
                onClick={() => setActive(null)}
                className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold transition"
              >
                ✕
              </button>

            </div>

          </div>

        </div>

      )}
    </>
  )
}
