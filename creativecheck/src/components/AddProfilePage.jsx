import { useState } from 'react'
import { supabase } from '../supabase'

export default function AddProfilePage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    const form = e.target

    setLoading(true)
    setMessage('')

    /* REQUIRED PUBLIC LINK */

    const hasPublicLink =
      form.website.value.trim() ||
      form.instagram.value.trim() ||
      form.portfolio_url.value.trim()

    if (!hasPublicLink) {
      setMessage(
        'Please add at least one public link: website, Instagram or portfolio.'
      )

      setLoading(false)
      return
    }

    /* PROFILE DATA */

    const profileData = {
      full_name: form.full_name.value,
      profession: form.profession.value,
      city: form.city.value,
      country: form.country.value,
      bio: form.bio.value,
      website: form.website.value,
      instagram: form.instagram.value,
      portfolio_url: form.portfolio_url.value,
      email: form.email.value,
      status: 'pending'
    }

    const { error } = await supabase
      .from('profiles')
      .insert([profileData])

    if (error) {
      console.error(error)

      setMessage(
        'Something went wrong. Please try again.'
      )

      setLoading(false)
      return
    }

    setMessage(
      'Profile submitted successfully and pending review.'
    )

    form.reset()

    setLoading(false)
  }

  return (
    <section
      className="
        max-w-4xl
        mx-auto
        px-8
        py-14
      "
    >

      <div
        className="
          rounded-[36px]
          bg-white/80
          backdrop-blur-xl
          border
          border-white/80
          shadow-[0_20px_60px_rgba(15,23,42,0.08)]
          p-8
          md:p-10
        "
      >

        {/* HEADER */}

        <div className="mb-10">

          <p
            className="
              text-xs
              uppercase
              tracking-[3px]
              text-blue-500
              font-black
              mb-3
            "
          >
            Submit Your Profile
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-black
              tracking-[-3px]
              text-[#0f172a]
              leading-[1]
            "
          >
            Join
            <span className="gradient-check">
              {' '}CreativeCheck
            </span>
          </h2>

          <p
            className="
              mt-5
              text-[16px]
              text-gray-500
              leading-relaxed
              max-w-2xl
            "
          >
            Submit your professional public profile
            for CreativeCheck review and discovery.
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* FULL NAME */}

          <input
            type="text"
            name="full_name"
            required
            placeholder="Full Name"
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-[#0f172a]
            "
          />

          {/* PROFESSION */}

          <input
            type="text"
            name="profession"
            required
            placeholder="Profession"
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-[#0f172a]
            "
          />

          {/* CITY + COUNTRY */}

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="city"
              placeholder="City"
              className="
                w-full
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-5
                py-4
                text-[#0f172a]
              "
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              className="
                w-full
                rounded-2xl
                border
                border-gray-200
                bg-white
                px-5
                py-4
                text-[#0f172a]
              "
            />

          </div>

          {/* BIO */}

          <textarea
            name="bio"
            required
            rows="5"
            placeholder="Short professional bio — required for review"
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-[#0f172a]
              resize-none
            "
          />

          {/* WEBSITE */}

          <input
            type="url"
            name="website"
            placeholder="Website URL"
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-[#0f172a]
            "
          />

          {/* INSTAGRAM */}

          <input
            type="url"
            name="instagram"
            placeholder="Instagram Profile URL"
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-[#0f172a]
            "
          />

          {/* PORTFOLIO */}

          <input
            type="url"
            name="portfolio_url"
            placeholder="Portfolio URL"
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-[#0f172a]
            "
          />

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-[#0f172a]
            "
          />

          {/* INFO */}

          <div
            className="
              rounded-2xl
              bg-blue-50
              border
              border-blue-100
              p-5
            "
          >

            <p
              className="
                text-sm
                text-blue-700
                leading-relaxed
              "
            >
              Please add at least one public link:
              website, Instagram or portfolio.
              Incomplete profiles may not be approved.
            </p>

          </div>

          {/* CONSENT */}

          <label
            className="
              flex
              items-start
              gap-3
              text-sm
              text-gray-500
              leading-relaxed
            "
          >

            <input
              type="checkbox"
              required
              className="mt-1"
            />

            <span>
              I confirm that submitted information
              is publicly shareable and may be reviewed
              before publication on CreativeCheck.
            </span>

          </label>

          {/* SUBMIT */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-[#4f46e5]
              via-[#2563eb]
              to-[#06b6d4]
              text-white
              font-semibold
              shadow-xl
              hover:scale-[1.01]
              transition
              disabled:opacity-50
            "
          >

            {loading
              ? 'Submitting...'
              : 'Submit Profile'}

          </button>

          {/* MESSAGE */}

          {message && (

            <div
              className="
                rounded-2xl
                bg-gray-50
                border
                border-gray-200
                px-5
                py-4
                text-sm
                text-gray-600
              "
            >
              {message}
            </div>

          )}

        </form>

      </div>

    </section>
  )
}
