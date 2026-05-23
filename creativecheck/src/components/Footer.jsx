import { useState } from 'react'
import LogoIcon from './LogoIcon'

export default function Footer() {
  const [popup, setPopup] = useState(null)

  const data = {
    about: {
      title: 'About CreativeCheck',
      text: 'CreativeCheck is a modern public creative discovery platform helping users explore photographers, filmmakers, models and creators through trusted public visibility and portfolio presence.'
    },

    privacy: {
      title: 'Privacy Policy',
      text: 'CreativeCheck only displays submitted or publicly available professional information. Users may request profile correction or removal at any time.'
    },

    disclaimer: {
      title: 'Disclaimer',
      text: 'CreativeCheck is an informational discovery platform and does not provide endorsements, legal conclusions, guarantees or verification services.'
    }
  }

  return (
    <>
      <footer className="bg-[#07111f] text-white px-8 py-20 rounded-t-[40px]">

        <div className="max-w-7xl mx-auto">

          {/* TOP */}
          <div className="flex flex-col lg:flex-row justify-between gap-16">

            {/* LEFT */}
            <div className="max-w-md">

              <div className="flex items-center gap-3 mb-6">
                <LogoIcon size={42} />

                <h2 className="text-3xl font-black">
                  Creative
                  <span className="bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Check
                  </span>
                </h2>
              </div>

              <p className="text-gray-400 leading-[1.9] text-[15px]">
                Discover creative professionals through public visibility,
                portfolio presence and trusted creative discovery.
              </p>

            </div>

            {/* RIGHT */}
            <div className="flex flex-wrap gap-10">

              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-[0.25em] mb-5">
                  Navigation
                </h4>

                <div className="space-y-4">

                  <a
                    href="#discover"
                    className="block hover:text-violet-400 transition"
                  >
                    Discover
                  </a>

                  <a
                    href="#resources"
                    className="block hover:text-violet-400 transition"
                  >
                    Resources
                  </a>

                  <button
                    onClick={() => setPopup(data.about)}
                    className="hover:text-violet-400 transition"
                  >
                    About
                  </button>

                </div>
              </div>

              <div>
                <h4 className="text-sm text-gray-500 uppercase tracking-[0.25em] mb-5">
                  Legal
                </h4>

                <div className="space-y-4">

                  <button
                    onClick={() => setPopup(data.privacy)}
                    className="block hover:text-violet-400 transition text-left"
                  >
                    Privacy Policy
                  </button>

                  <button
                    onClick={() => setPopup(data.disclaimer)}
                    className="block hover:text-violet-400 transition text-left"
                  >
                    Disclaimer
                  </button>

                </div>
              </div>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-white/10 mt-16 pt-8">

            <p className="text-gray-500 text-sm">
              © 2026 CreativeCheck. All rights reserved.
            </p>

          </div>

        </div>

      </footer>

      {/* MODAL */}
      {popup && (

        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-6">

          <div className="bg-white max-w-2xl w-full rounded-[32px] p-10 relative shadow-2xl">

            <button
              onClick={() => setPopup(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition"
            >
              ✕
            </button>

            <h2 className="text-4xl font-black text-[#07111f] mb-6">
              {popup.title}
            </h2>

            <p className="text-gray-600 leading-[2] text-[16px]">
              {popup.text}
            </p>

          </div>

        </div>

      )}
    </>
  )
}
