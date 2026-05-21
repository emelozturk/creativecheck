import { useState } from 'react'
import { supabase } from '../supabase'

export default function AddProfilePage() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('Submitting...')

    const form = new FormData(e.target)

    const profile = {
      full_name: form.get('full_name'),
      username: form.get('username').toLowerCase().replace(/\s+/g, '-'),
      profession: form.get('profession'),
      category: form.get('category'),
      city: form.get('city'),
      country: form.get('country'),
      bio: form.get('bio')
    }

    const { error } = await supabase
      .from('creator_profiles')
      .insert([profile])

    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Profile submitted successfully.')
      e.target.reset()
    }

    setLoading(false)
  }

  return (
    <section id="add-profile" className="max-w-3xl mx-auto px-8 py-24">
      <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
        <h2 className="text-4xl font-extrabold mb-3">Add Your Profile</h2>
        <p className="text-gray-500 mb-10">Join the CreativeCheck directory.</p>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <input name="full_name" placeholder="Full Name" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="username" placeholder="Username" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="profession" placeholder="Profession" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="category" placeholder="Category" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="city" placeholder="City" className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="country" placeholder="Country" className="rounded-2xl border border-gray-200 px-5 py-4" />
          <textarea name="bio" placeholder="Short Bio" rows="5" className="rounded-2xl border border-gray-200 px-5 py-4" />

          <button disabled={loading} type="submit" className="bg-black text-white rounded-2xl py-4 font-semibold">
            {loading ? 'Submitting...' : 'Submit Profile'}
          </button>

          {message && <p className="text-sm text-gray-600">{message}</p>}
        </form>
      </div>
    </section>
  )
}
