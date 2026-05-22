import { useState } from 'react'

export default function AddProfilePage() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setMessage('')

    const formData = new FormData(e.target)

    try {
      const response = await fetch(
        'https://formspree.io/f/mkoebgly',
        {
          method: 'POST',
          mode: 'cors',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        }
      )

      if (response.ok) {
        setMessage('Profile submitted successfully.')

        e.target.reset()

        setTimeout(() => {
          setOpen(false)
          setMessage('')

          const discover =
            document.getElementById('discover')

          if (discover) {
            discover.scrollIntoView({
              behavior: 'smooth'
            })
          }
        }, 1500)
      } else {
        setMessage(
          'Something went wrong. Please try again.'
        )
      }
    } catch (error) {
      setMessage(
        'Something went wrong. Please try again.'
      )
    }

    setLoading(false)
  }

  return (
    <section
      id="add-profile"
      className="max-w-3xl mx-auto px-8 py-24"
    >
      <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100 text-center">

        <h2 className="text-4xl font-extrabold mb-3">
          Add Your Profile
        </h2>

        <p className="text-gray-500 mb-8">
          Join the CreativeCheck directory and submit your
          public creative profile.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white rounded-full px-8 py-4 font-semibold hover:opacity-90 transition"
        >
          Open Profile Form
        </button>

      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">

          <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
            >
              ✕
            </button>

            <h3 className="text-3xl font-extrabold text-gray-900">
              Submit Your Profile
            </h3>

            <p className="text-gray-500 mt-2 mb-8">
              Share your public professional information
              for review.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >

              <input
                name="full_name"
                placeholder="Full Name"
                required
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="profession"
                placeholder="Profession"
                required
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="category"
                placeholder="Category"
                required
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="city"
                placeholder="City"
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="country"
                placeholder="Country"
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="website"
                type="url"
                placeholder="Website"
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="instagram"
                type="url"
                placeholder="Instagram URL"
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <input
                name="portfolio_url"
                type="url"
                placeholder="Portfolio URL"
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <textarea
                name="bio"
                placeholder="Short Bio"
                rows="5"
                className="rounded-2xl border border-gray-200 px-5 py-4"
              />

              <p className="text-xs text-gray-400 leading-relaxed">
                By submitting, you confirm that the
                information provided is public-facing
                professional information. CreativeCheck
                may review submissions before publishing.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white rounded-2xl py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading
                  ? 'Submitting...'
                  : 'Submit Profile'}
              </button>

              {message && (
                <p className="text-sm text-gray-600">
                  {message}
                </p>
              )}

            </form>

          </div>

        </div>
      )}
    </section>
  )
}
