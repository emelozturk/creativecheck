import { useState } from 'react'
import LogoIcon from './LogoIcon'

export default function Footer() {
  const [openContact, setOpenContact] = useState(false)

  return (
    <>
      <footer id="about" className="bg-[#0b1220] text-gray-300 px-8 py-14">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-4 gap-12">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <LogoIcon size={40} />

                <span className="text-xl font-extrabold text-white">
                  Creative<span className="gradient-check">Check</span>
                </span>
              </div>

              <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
                CreativeCheck is a public creative directory designed to help users
                discover creative professionals, agencies, studios and production companies
                through public professional visibility and portfolio presence.
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

                <div className="text-sm leading-relaxed text-gray-400">
                  <p>
                    CreativeCheck is a modern public creative directory designed to help users discover photographers,
                    filmmakers, models, agencies, studios and creative professionals through public professional visibility.
                  </p>

                  <p className="mt-4">
                    The platform focuses on transparency, portfolio presence, public-facing references and creative ecosystem discovery.
                  </p>

                  <p className="mt-4">
                    CreativeCheck helps creatives showcase their public work while allowing users, brands and collaborators
                    to explore talent with confidence.
                  </p>
                </div>

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
                LEGAL
              </h4>

              <div className="space-y-4 text-sm leading-relaxed">

                <div>
                  <p className="font-semibold text-white mb-1">
                    Privacy Policy
                  </p>

                  <p className="text-gray-400">
                    CreativeCheck only displays informational summaries based on publicly available professional information and public links.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">
                    Disclaimer
                  </p>

                  <p className="text-gray-400">
                    CreativeCheck does not verify, endorse or guarantee any listed individual,
                    organisation or company.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">
                    Information Accuracy
                  </p>

                  <p className="text-gray-400">
                    If information is inaccurate, outdated or incomplete, users may request corrections or removal.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">
                    Copyright Notice
                  </p>

                  <p className="text-gray-400">
                    All trademarks, logos, images and references belong to their respective owners.
                  </p>
                </div>

              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6">
                SUPPORT
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
              CreativeCheck provides informational summaries based on publicly
              available professional information, portfolio visibility,
              public links and public-facing references.
            </p>

            <p className="mt-3">
              CreativeCheck is an informational platform only and does not provide
              legal conclusions, verification services, endorsements or accusations.
            </p>

            <p className="mt-3">
              Listed individuals or organisations may contact CreativeCheck to request
              information correction, clarification or removal.
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
              Send your support request, correction request or message.
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
