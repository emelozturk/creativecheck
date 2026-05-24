import { useState } from 'react'

const SUPABASE_URL = 'https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY = 'sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'

export default function AddProfilePage() {

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)
    setMessage('')

    const form = e.target

    const profileData = {

      full_name: form.full_name.value,

      email: form.email.value,

      profession: form.profession.value,

      category: form.category.value,

      city: form.city.value,

      country: form.country.value,

      website: form.website.value,

      instagram: form.instagram.value,

      portfolio_url: form.portfolio_url.value,

      avatar_url: form.avatar_url.value,

      bio: form.bio.value,

      status: 'pending',

      verified: false

    }

    try {

      const response = await fetch(
        `${SUPABASE_URL}/rest/v1/profiles`,
        {
          method: 'POST',

          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json',
            Prefer: 'return=minimal'
          },

          body: JSON.stringify(profileData)
        }
      )

      if (response.ok) {

        setMessage(
          'Profile submitted successfully. It will be reviewed before publishing.'
        )

        form.reset()

        setTimeout(() => {

          setOpen(false)

          setMessage('')

          document
            .getElementById('discover')
            ?.scrollIntoView({
              behavior: 'smooth'
            })

        }, 1800)

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

      <div
        className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
          border
          border-gray-100
          text-center
        "
      >

        <h2 className="text-4xl font-extrabold mb-3">
          Add Your Profile
        </h2>

        <p className="text-gray-500 mb-8">
          Submit your public creative profile for
          review before it appears on CreativeCheck.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="
            bg-black
            text-white
            rounded-full
            px-8
            py-4
            font-semibold
            hover:opacity-90
            transition
          "
        >
          Open Profile Form
        </button>

      </div>

      {open && (

        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/50
            px-6
          "
        >

          <div
            className="
              w-full
              max-w-2xl
              rounded-3xl
              bg-white
              p-8
              shadow-2xl
              relative
              max-h-[90vh]
              overflow-y-auto
            "
          >

            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                top-5
                right-5
                w-9
                h-9
                rounded-full
                bg-gray-100
                hover:bg-gray-200
                text-gray-500
              "
            >
              ✕
            </button>

            <h3 className="text-3xl font-extrabold text-gray-900">
              Submit Your Profile
            </h3>

            <p className="text-gray-500 mt-2 mb-8">
              Your profile will be reviewed before publishing.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >

              <input
                name="full_name"
                placeholder="Full Name"
                required
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="profession"
                placeholder="Profession"
                required
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="category"
                placeholder="Category"
                required
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="city"
                placeholder="City"
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="country"
                placeholder="Country"
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="website"
                type="url"
                placeholder="Website"
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="instagram"
                type="url"
                placeholder="Instagram URL"
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="portfolio_url"
                type="url"
                placeholder="Portfolio URL"
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <input
                name="avatar_url"
                type="url"
                placeholder="Profile Image URL"
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <textarea
                name="bio"
                placeholder="Short Bio"
                rows="5"
                className="
                  rounded-2xl
                  border
                  border-gray-200
                  px-5
                  py-4
                "
              />

              <label
                className="
                  flex
                  gap-3
                  text-xs
                  text-gray-500
                  leading-relaxed
                "
              >

                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />

                I confirm that the information
                submitted is accurate, belongs to me,
                and may be reviewed by CreativeCheck
                before publication.

              </label>

              <button
                type="submit"
                disabled={loading}
                className="
                  bg-black
                  text-white
                  rounded-2xl
                  py-4
                  font-semibold
                  hover:opacity-90
                  transition
                  disabled:opacity-50
                "
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
