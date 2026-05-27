import { useState } from 'react'

export default function Footer() {
  const [showContact, setShowContact] = useState(false)
  const [showRemoval, setShowRemoval] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e, type) => {
    e.preventDefault()

    setLoading(true)
    setMessage('')

    const formData = new FormData(e.target)
    formData.append('request_type', type)

    try {
      const response = await fetch(
        'https://formspree.io/f/mkoebgly',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        }
      )

      if (response.ok) {

        setMessage(
          'Your request has been sent successfully.'
        )

        e.target.reset()

        setTimeout(() => {
          setShowContact(false)
          setShowRemoval(false)
          setMessage('')
        }, 1500)

      } else {

        setMessage(
          'Something went wrong. Please try again.'
        )

      }

    } catch {

      setMessage(
        'Something went wrong. Please try again.'
      )

    }

    setLoading(false)
  }

  return (
    <footer className="max-w-7xl mx-auto px-8 pt-10 pb-16">

      <div
        className="
          rounded-[36px]
          overflow-hidden
          border
          border-white/20
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(15,23,42,0.18)]
        "
        style={{
          background:
            'linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(49,46,129,0.95) 45%, rgba(124,58,237,0.92) 100%)'
        }}
      >

        {/* TOP */}

        <div className="grid lg:grid-cols-4 gap-10 p-10">

          {/* BRAND */}

          <div>

            <h2 className="text-3xl font-black tracking-[-2px] text-white">
              Creative
              <span className="gradient-check">
                Check
              </span>
            </h2>

            <p className="mt-4 text-sm text-gray-300 leading-relaxed">
              A public creative discovery platform
              for creatives, studios, agencies and
              production companies.
            </p>

          </div>

          {/* PLATFORM */}

          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-[2px]
                text-gray-200/80
                mb-5
              "
            >
              Platform
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
                text-[15px]
                font-semibold
                text-white
              "
            >

              <a
                href="#discover"
                className="hover:text-violet-300 transition"
              >
                Discover creatives
              </a>

              <a
                href="#categories"
                className="hover:text-violet-300 transition"
              >
                Creative categories
              </a>

              <a
                href="#resources"
                className="hover:text-violet-300 transition"
              >
                Resources & guidance
              </a>

              <a
                href="#add-profile"
                className="hover:text-violet-300 transition"
              >
                Submit your profile
              </a>

            </div>

          </div>

          {/* LEGAL */}

          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-[2px]
                text-gray-200/80
                mb-5
              "
            >
              Legal & Trust
            </h3>

            <div
              className="
                flex
                flex-col
                gap-5
                text-[15px]
                font-semibold
                text-white
              "
            >

              <details>

                <summary
                  className="
                    list-none
                    cursor-pointer
                    hover:text-violet-300
                    transition
                  "
                >
                  Privacy Policy
                </summary>

                <p className="mt-3 text-xs leading-relaxed text-gray-300">
                  CreativeCheck may collect publicly submitted
                  professional information, portfolio links and
                  profile details for discovery purposes.
                  Users may request correction or removal
                  of information.
                </p>

              </details>

              <details>

                <summary
                  className="
                    list-none
                    cursor-pointer
                    hover:text-violet-300
                    transition
                  "
                >
                  Terms of Service
                </summary>

                <p className="mt-3 text-xs leading-relaxed text-gray-300">
                  CreativeCheck is intended for informational
                  and discovery purposes only.
                  Users are responsible for the accuracy
                  of submitted information.
                </p>

              </details>

              <details>

                <summary
                  className="
                    list-none
                    cursor-pointer
                    hover:text-violet-300
                    transition
                  "
                >
                  Disclaimer
                </summary>

                <p className="mt-3 text-xs leading-relaxed text-gray-300">
                  CreativeCheck does not provide legal conclusions,
                  endorsements, guarantees, background checks
                  or verification services.
                </p>

              </details>

              <button
                onClick={() => setShowRemoval(true)}
                className="
                  text-left
                  hover:text-violet-300
                  transition
                "
              >
                Profile removal / correction
              </button>

            </div>

          </div>

          {/* CONTACT */}

          <div>

            <h3
              className="
                text-sm
                font-black
                uppercase
                tracking-[2px]
                text-gray-200/80
                mb-5
              "
            >
              Contact
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed mb-5">
              For support, correction requests,
              partnerships or general enquiries.
            </p>

            <button
              onClick={() => setShowContact(true)}
              className="
                px-5
                py-3
                rounded-full
                bg-white
                text-[#0f172a]
                text-sm
                font-semibold
                hover:bg-violet-200
                transition
              "
            >
              Contact CreativeCheck
            </button>

            {/* SOCIALS */}

            <div className="flex items-center gap-5 mt-5">

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/creativecheck.app/"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-pink-300
                  hover:text-white
                  transition
                "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.8h8.5a3.95 3.95 0 013.95 3.95v8.5a3.95 3.95 0 01-3.95 3.95h-8.5a3.95 3.95 0 01-3.95-3.95v-8.5A3.95 3.95 0 017.75 3.8zm8.95 1.35a.85.85 0 100 1.7.85.85 0 000-1.7zM12 6.85A5.15 5.15 0 106.85 12 5.156 5.156 0 0012 6.85zm0 1.8A3.35 3.35 0 118.65 12 3.354 3.354 0 0112 8.65z"/>
                </svg>

                Instagram

              </a>

              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/company/creativecheck/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  text-cyan-300
                  hover:text-white
                  transition
                "
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.11c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.76V22h-3V8z"/>
                </svg>

                LinkedIn

              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div
          className="
            border-t
            border-white/10
            px-10
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-sm text-gray-300">
            © 2026 CreativeCheck.
            All rights reserved.
          </p>

          <p className="text-sm text-gray-200/80">
            Public visibility · Portfolio presence · Trusted discovery
          </p>

        </div>

      </div>

      {/* CONTACT MODAL */}

      {showContact && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            backdrop-blur-sm
            p-6
          "
        >

          <form
            onSubmit={(e) =>
              handleSubmit(e, 'Contact Request')
            }
            className="
              w-full
              max-w-lg
              rounded-[32px]
              bg-white
              p-8
              shadow-2xl
            "
          >

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-black text-[#0f172a]">
                Contact CreativeCheck
              </h2>

              <button
                type="button"
                onClick={() => setShowContact(false)}
                className="
                  text-2xl
                  text-gray-400
                  hover:text-black
                "
              >
                ×
              </button>

            </div>

            <div className="space-y-4">

              <input
                name="name"
                required
                placeholder="Your name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                "
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                "
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Message..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                  resize-none
                "
              />

              <button
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-[#0f172a]
                  text-white
                  font-semibold
                  hover:bg-violet-600
                  transition
                  disabled:opacity-50
                "
              >
                {loading
                  ? 'Sending...'
                  : 'Send Message'}
              </button>

              {message && (
                <p className="text-sm text-gray-500">
                  {message}
                </p>
              )}

            </div>

          </form>

        </div>

      )}

      {/* REMOVAL MODAL */}

      {showRemoval && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/40
            backdrop-blur-sm
            p-6
          "
        >

          <form
            onSubmit={(e) =>
              handleSubmit(
                e,
                'Profile Removal / Correction Request'
              )
            }
            className="
              w-full
              max-w-lg
              rounded-[32px]
              bg-white
              p-8
              shadow-2xl
            "
          >

            <div className="flex items-center justify-between mb-6">

              <h2 className="text-2xl font-black text-[#0f172a]">
                Profile Removal / Correction
              </h2>

              <button
                type="button"
                onClick={() => setShowRemoval(false)}
                className="
                  text-2xl
                  text-gray-400
                  hover:text-black
                "
              >
                ×
              </button>

            </div>

            <div className="space-y-4">

              <input
                name="name"
                required
                placeholder="Full name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                "
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                "
              />

              <input
                name="profile_link"
                placeholder="Profile link or name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                "
              />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Please explain what should be corrected or removed..."
                className="
                  w-full
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                  outline-none
                  resize-none
                "
              />

              <button
                disabled={loading}
                className="
                  w-full
                  py-4
                  rounded-2xl
                  bg-red-500
                  text-white
                  font-semibold
                  hover:bg-red-600
                  transition
                  disabled:opacity-50
                "
              >
                {loading
                  ? 'Sending...'
                  : 'Submit Request'}
              </button>

              {message && (
                <p className="text-sm text-gray-500">
                  {message}
                </p>
              )}

            </div>

          </form>

        </div>

      )}

    </footer>
  )
}
