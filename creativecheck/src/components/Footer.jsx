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
      const response = await fetch('https://formspree.io/f/mkoebgly', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' }
      })

      if (response.ok) {
        setMessage('Your request has been sent successfully.')
        e.target.reset()

        setTimeout(() => {
          setShowContact(false)
          setShowRemoval(false)
          setMessage('')
        }, 1500)
      } else {
        setMessage('Something went wrong. Please try again.')
      }
    } catch {
      setMessage('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  return (
    <footer className="max-w-7xl mx-auto px-8 pt-10 pb-16">
      <div className="rounded-[36px] overflow-hidden border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

        <div className="grid lg:grid-cols-4 gap-10 p-10">

          <div>
            <h2 className="text-3xl font-black tracking-[-2px] text-[#0f172a]">
              Creative<span className="gradient-check">Check</span>
            </h2>

            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              A public creative discovery platform for creatives, studios,
              agencies and production companies.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[2px] text-gray-400 mb-5">
              Platform
            </h3>

            <div className="flex flex-col gap-3 text-[15px] font-semibold text-[#0f172a]">
              <a href="#discover" className="hover:text-violet-600 transition">Discover creatives</a>
              <a href="#categories" className="hover:text-violet-600 transition">Creative categories</a>
              <a href="#resources" className="hover:text-violet-600 transition">Resources & guidance</a>
              <a href="#add-profile" className="hover:text-violet-600 transition">Submit your profile</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[2px] text-gray-400 mb-5">
              Legal & Trust
            </h3>

            <div className="flex flex-col gap-3 text-[15px] font-semibold text-[#0f172a]">
              <button className="text-left hover:text-violet-600 transition">
                Privacy Policy
              </button>

              <button className="text-left hover:text-violet-600 transition">
                Terms of Service
              </button>

              <button className="text-left hover:text-violet-600 transition">
                Disclaimer
              </button>

              <button
                onClick={() => setShowRemoval(true)}
                className="text-left hover:text-violet-600 transition"
              >
                Profile removal / correction
              </button>
            </div>

            <p className="mt-5 text-xs text-gray-400 leading-relaxed">
              CreativeCheck is an informational discovery platform. It does not
              provide endorsements, guarantees, background checks or legal conclusions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[2px] text-gray-400 mb-5">
              Contact
            </h3>

            <p className="text-sm text-gray-500 leading-relaxed mb-5">
              For support, correction requests, partnership enquiries or general questions.
            </p>

            <button
              onClick={() => setShowContact(true)}
              className="px-5 py-3 rounded-full bg-[#0f172a] text-white text-sm font-semibold hover:bg-violet-600 transition"
            >
              Contact CreativeCheck
            </button>
          </div>

        </div>

        <div className="border-t border-white/70 px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 CreativeCheck. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Public visibility · Portfolio presence · Trusted discovery
          </p>
        </div>
      </div>

      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">
          <form
            onSubmit={(e) => handleSubmit(e, 'Contact Request')}
            className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#0f172a]">
                Contact CreativeCheck
              </h2>

              <button type="button" onClick={() => setShowContact(false)} className="text-2xl text-gray-400 hover:text-black">
                ×
              </button>
            </div>

            <div className="space-y-4">
              <input name="name" required placeholder="Your name" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none" />
              <input name="email" type="email" required placeholder="Email address" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none" />
              <textarea name="message" rows="5" required placeholder="Message..." className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none resize-none" />

              <button disabled={loading} className="w-full py-4 rounded-2xl bg-[#0f172a] text-white font-semibold hover:bg-violet-600 transition disabled:opacity-50">
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {message && <p className="text-sm text-gray-500">{message}</p>}
            </div>
          </form>
        </div>
      )}

      {showRemoval && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-6">
          <form
            onSubmit={(e) => handleSubmit(e, 'Profile Removal / Correction Request')}
            className="w-full max-w-lg rounded-[32px] bg-white p-8 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-[#0f172a]">
                Profile Removal / Correction
              </h2>

              <button type="button" onClick={() => setShowRemoval(false)} className="text-2xl text-gray-400 hover:text-black">
                ×
              </button>
            </div>

            <div className="space-y-4">
              <input name="name" required placeholder="Full name" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none" />
              <input name="email" type="email" required placeholder="Email address" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none" />
              <input name="profile_link" placeholder="Profile link or name" className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none" />

              <textarea
                name="message"
                rows="5"
                required
                placeholder="Please explain what should be corrected or removed..."
                className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none resize-none"
              />

              <button disabled={loading} className="w-full py-4 rounded-2xl bg-red-500 text-white font-semibold hover:bg-red-600 transition disabled:opacity-50">
                {loading ? 'Sending...' : 'Submit Request'}
              </button>

              {message && <p className="text-sm text-gray-500">{message}</p>}
            </div>
          </form>
        </div>
      )}
    </footer>
  )
}
