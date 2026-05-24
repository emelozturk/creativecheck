import { useState } from 'react'

export default function Footer() {
  const [showContact, setShowContact] = useState(false)
  const [showRemoval, setShowRemoval] = useState(false)

  return (
    <footer className="max-w-7xl mx-auto px-8 pt-10 pb-16">

      <div className="rounded-[36px] overflow-hidden border border-white/70 bg-white/75 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

        {/* TOP */}
        <div className="grid lg:grid-cols-4 gap-10 p-10">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black tracking-[-2px] text-[#0f172a]">
              Creative<span className="gradient-check">Check</span>
            </h2>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              Public creative discovery platform helping users explore creatives,
              studios, agencies and production companies through public visibility
              and portfolio presence.
            </p>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[2px] text-gray-400 mb-5">
              Platform
            </h3>

            <div className="flex flex-col gap-3 text-[15px] font-semibold text-[#0f172a]">

              <a href="#discover" className="hover:text-violet-600 transition">
                Discover
              </a>

              <a href="#categories" className="hover:text-violet-600 transition">
                Categories
              </a>

              <a href="#resources" className="hover:text-violet-600 transition">
                Resources
              </a>

              <a href="#about" className="hover:text-violet-600 transition">
                About
              </a>

            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[2px] text-gray-400 mb-5">
              Legal
            </h3>

            <div className="flex flex-col gap-3 text-[15px] font-semibold text-[#0f172a]">

              <button className="text-left hover:text-violet-600 transition">
                Privacy Policy
              </button>

              <button className="text-left hover:text-violet-600 transition">
                Disclaimer
              </button>

              <button
                onClick={() => setShowRemoval(true)}
                className="text-left hover:text-violet-600 transition"
              >
                Profile Removal
              </button>

            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-black uppercase tracking-[2px] text-gray-400 mb-5">
              Contact
            </h3>

            <button
              onClick={() => setShowContact(true)}
              className="
                px-5
                py-3
                rounded-full
                bg-[#0f172a]
                text-white
                text-sm
                font-semibold
                hover:bg-violet-600
                transition
              "
            >
              Contact CreativeCheck
            </button>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/70 px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © 2026 CreativeCheck. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Public creative discovery platform.
          </p>

        </div>

      </div>

      {/* CONTACT MODAL */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">

          <div className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#0f172a]">
                Contact CreativeCheck
              </h2>

              <button
                onClick={() => setShowContact(false)}
                className="text-2xl text-gray-400 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Message..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none resize-none"
              />

              <button
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-[#0f172a]
                  text-white
                  font-semibold
                  hover:bg-violet-600
                  transition
                "
              >
                Send Message
              </button>

            </div>

          </div>

        </div>
      )}

      {/* PROFILE REMOVAL MODAL */}
      {showRemoval && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">

          <div className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#0f172a]">
                Profile Removal Request
              </h2>

              <button
                onClick={() => setShowRemoval(false)}
                className="text-2xl text-gray-400 hover:text-black"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Please provide your profile removal request..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none resize-none"
              />

              <button
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-red-500
                  text-white
                  font-semibold
                  hover:bg-red-600
                  transition
                "
              >
                Submit Request
              </button>

            </div>

          </div>

        </div>
      )}

    </footer>
  )
}
