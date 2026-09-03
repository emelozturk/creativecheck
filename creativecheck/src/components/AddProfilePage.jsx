import { useState } from 'react'
import { supabase } from '../supabase'

export default function AddProfilePage({ type = 'chooser' }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(type === 'creative' || type === 'business')
  const isBusiness = type === 'business'

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    setLoading(true)
    setMessage('')
    const hasPublicLink = form.website.value.trim() || form.instagram.value.trim() || form.portfolio_url.value.trim()
    if (!hasPublicLink) {
      setMessage('Please add at least one public link: website, Instagram or portfolio.')
      setLoading(false)
      return
    }
    const profileData = {
      full_name: isBusiness ? form.company_name.value : form.full_name.value,
      email: form.email.value,
      profession: isBusiness ? form.business_type.value : form.profession.value,
      category: isBusiness ? form.industry.value : form.category.value,
      city: form.city.value,
      country: form.country.value,
      website: form.website.value,
      instagram: form.instagram.value,
      portfolio_url: form.portfolio_url.value,
      bio: form.bio.value,
      profile_type: type,
      status: 'pending',
      verified: false
    }
    const { error } = await supabase.from('profiles').insert([profileData])
    if (error) {
      console.error(error)
      setMessage('Something went wrong. Please try again.')
      setLoading(false)
      return
    }
    setMessage(isBusiness ? 'Creative Business profile submitted successfully and pending review.' : 'Creative profile submitted successfully and pending review.')
    form.reset()
    setLoading(false)
  }

  return (
    <details open={open} onToggle={e => setOpen(e.currentTarget.open)} className={`profile-submit-details ${isBusiness ? 'business-profile-submit' : 'creative-profile-submit'}`} style={{display:'block',width:'min(680px, 76vw)',maxWidth:'680px',margin:'0 auto',background:isBusiness?'#d9e3f4':'#e9d7e8',backgroundImage:'none',borderRadius:'14px',overflow:'hidden'}}>
      <summary className="profile-submit-trigger" style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',boxSizing:'border-box',textAlign:'center',cursor:'pointer'}}>
        <span className="profile-submit-kicker" style={{display:'block',width:'100%',textAlign:'center'}}>JOIN CREATIVECHECK</span>
        <span className="profile-submit-title" style={{display:'block',width:'100%',textAlign:'center'}}>{isBusiness ? 'Creative Business Profile' : 'Creative Profile'} <span>↗</span></span>
        <span className="profile-submit-copy" style={{display:'block',width:'100%',textAlign:'center',margin:'0 auto'}}>{isBusiness ? 'Create a professional profile for your agency, studio, production company or creative organisation.' : 'Create your professional CreativeCheck profile as an individual creative.'}</span>
      </summary>
      <section className="max-w-4xl mx-auto px-8 py-14">
        <div className="rounded-[36px] bg-white/80 backdrop-blur-xl border border-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[3px] text-blue-500 font-black mb-3">{isBusiness ? 'CREATIVE BUSINESS PROFILE' : 'CREATIVE PROFILE'}</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-3px] text-[#0f172a] leading-[1]">Join <span className="gradient-check">CreativeCheck</span> as a {isBusiness ? 'Creative Business' : 'Creative'}</h2>
          <p className="mt-5 text-[16px] text-gray-500 leading-relaxed max-w-2xl">{isBusiness ? 'This is a separate profile form for creative businesses.' : 'This is a separate profile form for individual creative professionals.'}</p>
          <form onSubmit={handleSubmit} className="space-y-5 mt-8">
            {isBusiness ? <>
              <input type="text" name="company_name" required placeholder="Company / Business Name" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
              <input type="email" name="email" required placeholder="Business Email Address" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
              <input type="text" name="business_type" required placeholder="Business Type — e.g. Production Company, Creative Agency, Studio, Brand" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
              <input type="text" name="industry" required placeholder="Creative Industry / Speciality" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
            </> : <>
              <input type="text" name="full_name" required placeholder="Full Name" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
              <input type="email" name="email" required placeholder="Email Address" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
              <input type="text" name="profession" required placeholder="Profession — e.g. Film Director, Photographer, Designer" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
              <input type="text" name="category" required placeholder="Creative Field / Speciality" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
            </>}
            <div className="grid md:grid-cols-2 gap-4"><input type="text" name="city" placeholder="City" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" /><input type="text" name="country" placeholder="Country" className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" /></div>
            <textarea name="bio" required rows="5" placeholder={isBusiness ? 'Short business description — required for review' : 'Short professional bio — required for review'} className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a] resize-none" />
            <input type="url" name="website" placeholder={isBusiness ? 'Company Website URL' : 'Website URL'} className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
            <input type="url" name="instagram" placeholder={isBusiness ? 'Business Instagram URL' : 'Instagram Profile URL'} className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
            <input type="url" name="portfolio_url" placeholder={isBusiness ? 'Company / Work Showcase URL' : 'Portfolio / Work URL'} className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[#0f172a]" />
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5"><p className="text-sm text-blue-700 leading-relaxed">Please add at least one public link: website, Instagram or portfolio. Incomplete profiles may not be approved.</p></div>
            <label className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed"><input type="checkbox" required className="mt-1" /><span>I confirm that submitted information is publicly shareable and may be reviewed before publication on CreativeCheck.</span></label>
            <button type="submit" disabled={loading} className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#4f46e5] via-[#2563eb] to-[#06b6d4] text-white font-semibold shadow-xl hover:scale-[1.01] transition disabled:opacity-50">{loading ? 'Submitting...' : isBusiness ? 'Submit Creative Business Profile' : 'Submit Creative Profile'}</button>
            {message && <div className="rounded-2xl bg-gray-50 border border-gray-200 px-5 py-4 text-sm text-gray-600">{message}</div>}
          </form>
        </div>
      </section>
    </details>
  )
}
