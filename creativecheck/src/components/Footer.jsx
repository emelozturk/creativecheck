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
        className="bg-[#0b1220] text-gray-300 px-8 py-16"
      >
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-14">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <LogoIcon size={42} />

                <span className="text-2xl font-extrabold text-white">
                  Creative<span className="gradient-check">Check</span>
                </span>
              </div>

              <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
                A public creative discovery platform focused on professional visibility,
                portfolio presence and trusted creative discovery.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-[0.25em] text-gray-500 mb-6">
                COMPANY
              </h4>

              <div className="space-y-4">
                <button onClick={() => setActive(info.about)} className="block hover:text-white transition text-left">
                  About
                </button>

                <a href="#discover" className="block hover:text-white transition">
                  Discover
                </a>

                <a href="#resources" className="block hover:text-white transition">
                  Resources
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-[0.25em] text-gray-500 mb-6">
                LEGAL & SUPPORT
              </h4>

              <div className="space-y-4">
                <button onClick={() => setActive(info.privacy)} className="block hover:text-white transition text-left">
                  Privacy Policy
                </button>

                <button onClick={() => setActive(info.terms)} className="block hover:text-white transition text-left">
                  Terms of Service
                </button>

                <button onClick={() => setActive(info.disclaimer)} className="block hover:text-white transition text-left">
                  Disclaimer
                </button>

                <button onClick={() => setActive(info.copyright)} className="block hover:text-white transition text-left">
                  Copyright Notice
                </button>

                <button onClick={() => setActive(info.removal)} className="block hover:text-white transition text-left">
                  Profile Removal / Correction
                </button>
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-14 pt-8 text-xs text-gray-500 leading-relaxed">
            <p>
              CreativeCheck provides informational summaries based on publicly available professional information,
              portfolio visibility, public links and public-facing references.
            </p>

            <p className="mt-3">
              © 2026 CreativeCheck. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {active && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 px-4">
          <div className="w-full max-w-3xl bg-white rounded-t-[32px] p-8 shadow-2xl animate-slide-up">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                  {active.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-[16px]">
                  {active.text}
                </p>
              </div>

              <button
                onClick={() => setActive(null)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
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
