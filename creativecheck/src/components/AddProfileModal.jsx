import { useState } from 'react'
import { X } from 'lucide-react'
import { supabase } from '../supabase'

export default function AddProfileModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    profession: '',
    category: '',
    city: '',
    country: '',
    bio: ''
  })

  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('Saving...')

    const { error } = await supabase
      .from('creator_profiles')
      .insert([form])

    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Profile submitted successfully!')
      setForm({
        full_name: '',
        email: '',
        profession: '',
        category: '',
        city: '',
        country: '',
        bio: ''
      })
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Add Your Profile</h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {['full_name', 'email', 'profession', 'category', 'city', 'country'].map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field.replace('_', ' ')}
              className="rounded-xl border px-4 py-3"
              required
            />
          ))}

          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Short bio"
            className="rounded-xl border px-4 py-3"
            rows="4"
          />

          <button className="rounded-xl bg-black px-5 py-3 font-semibold text-white">
            Submit Profile
          </button>

          {message && <p className="text-sm">{message}</p>}
        </form>
      </div>
    </div>
  )
}
