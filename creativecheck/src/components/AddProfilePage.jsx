import { useState } from 'react'
import { supabase } from '../supabase'

export default function AddProfilePage() {
  const [form, setForm] = useState({
    full_name: '',
    username: '',
    profession: '',
    category: '',
    bio: '',
    city: '',
    country: '',
    website: '',
    portfolio_url: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const cleanUsername = form.username
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')

    const { error } = await supabase
      .from('creator_profiles')
      .insert([
        {
          full_name: form.full_name,
          username: cleanUsername,
          profession: form.profession,
          category: form.category,
          bio: form.bio,
          city: form.city,
          country: form.country,
          website: form.website,
          portfolio_url: form.portfolio_url,
          is_public: true
        }
      ])

    if (error) {
      setMessage('Something went wrong: ' + error.message)
    } else {
      setMessage('Profile submitted successfully. It will appear after review.')
      setForm({
        full_name: '',
        username: '',
        profession: '',
        category: '',
        bio: '',
        city: '',
        country: '',
        website: '',
        portfolio_url: ''
      })
    }

    setLoading(false)
  }

  return (
    <section
      id="add-profile"
      className="max-w-3xl mx-auto px-8 py-24"
    >
      <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">

        <h2 className="text-4xl font-extrabold mb-3">
          Add Your Profile
        </h2>

        <p className="text-gray-500 mb-10">
          Join the CreativeCheck directory. Submit your public creative profile for review.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-5">

          <input
            name="full_name"
            value={form.full_name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="rounded-2xl border border-gray-200 px-5 py-4"
            required
          />

          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            type="text"
            placeholder="Username / profile slug"
            className="rounded-2xl border border-gray-200 px-5 py-4"
            required
          />

          <input
            name="profession"
            value={form.profession}
            onChange={handleChange}
            type="text"
            placeholder="Profession"
            className="rounded-2xl border border-gray-200 px-5 py-4"
            required
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            type="text"
            placeholder="Category"
            className="rounded-2xl border border-gray-200 px-5 py-4"
            required
          />

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            type="text"
            placeholder="Country"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            name="website"
            value={form.website}
            onChange={handleChange}
            type="url"
            placeholder="Website"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            name="portfolio_url"
            value={form.portfolio_url}
            onChange={handleChange}
            type="url"
            placeholder="Portfolio URL"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Short Bio"
            rows="5"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-2xl py-4 font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Profile'}
          </button>

          {message && (
            <p className="text-sm text-gray-600">
              {message}
            </p>
          )}

        </form>
      </div>
    </section>
  )
}
