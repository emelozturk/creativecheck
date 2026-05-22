import { useState } from 'react'
import LogoIcon from './LogoIcon'

export default function Footer() {
  const [openContact, setOpenContact] = useState(false)

  return (
    <>
      <footer id="about" className="bg-[#0b1220] text-gray-300 px-8 py-14">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-12">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <LogoIcon size={40} />

                <span className="text-xl font-extrabold text-white">
                  Creative<span className="gradient-check">Check</span>
                </span>
              </div>

              <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
                CreativeCheck is a public creative directory for discovering creative professionals,
                studios, agencies and production companies with confidence.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6">
                COMPANY
              </h4>

              <div className="space-y-4">
                <a href="#about" className="block hover:text-white transition">
                  About CreativeCheck
                </a>

                <a href="#resources" className="block hover:text-white transition">
                  Resources
                </a>

                <a href="#categories" className="block hover:text-white transition">
                  Creative Categories
                </a>

                <a href="#add-profile" className="block hover:text-white transition">
                  Submit Your Profile
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6">
                LEGAL & SUPPORT
              </h4>

              <div className="space-y-4">

                <button
                  onClick={() => setOpenContact(true)}
                  className="block hover:text-white transition text-left"
                >
                  Contact Support
                </button>

                <button
                  onClick={() => setOpenContact(true)}
                  className="block hover:text-white transition text-left"
                >
                  Profile Removal Request
                </button>

                <button
                  onClick={() => setOpenContact(true)}
                  className="block hover:text-white transition text-left"
                >
                  Information Correction
                </button>

                <button
                  onClick={() => setOpenContact(true)}
                  className="block hover:text-white transition text-left"
                >
                  Help Centre
                </button>

              </div>
            </div>

          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-xs text-gray-500 leading-relaxed">
            <p>
              CreativeCheck provides informational summaries based on publicly available professional
              information, public links and portfolio visibility.
            </p>

            <p className="mt-3">
              CreativeCheck does not verify, endorse or guarantee any individual,
              company or organisation listed on the platform.
            </p>

            <p className="mt-3">
              © 2026 CreativeCheck. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {openContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
          <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl relative">

            <button
              onClick={() => setOpenContact(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
            >
              ✕
            </button>

            <h3 className="text-3xl font-extrabold text-gray-900">
              Contact CreativeCheck
            </h3>

            <p className="text-gray-500 mt-2 mb-8">
              Send your request, support question or profile update.
            </p>

            <form
              action="https://formspree.io/f/mkoebgly"
              method="POST"
              className="space-y-5"
            >

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-3 outline-none focus:border-violet-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-3 outline-none focus:border-violet-400"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full rounded-2xl border border-gray-200 px-5 py-3 outline-none focus:border-violet-400 resize-none"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-violet-600 text-white py-4 font-semibold hover:bg-violet-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  )
}
