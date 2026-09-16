import { useRef, useState } from 'react'
import { supabase } from '../supabase'
import { track } from '../analytics'

function CommunityIntro(){
  const [email,setEmail]=useState(''),[sent,setSent]=useState(false),[loading,setLoading]=useState(false),[message,setMessage]=useState('')
  async function sendLink(e){
    e.preventDefault();setLoading(true);setMessage('')
    const clean=email.trim().toLowerCase()
    const {error}=await supabase.auth.signInWithOtp({email:clean,options:{emailRedirectTo:`${window.location.origin}${window.location.pathname}`,shouldCreateUser:false}})
    if(error){setMessage('Please check that this is the email you registered with.');setLoading(false);return}
    setSent(true);setLoading(false)
  }
  return <section className="community-intro-card">
    <span className="section-label">MEET THE COMMUNITY</span>
    <h2>Discover the CreativeCheck Community.</h2>
    <p>Explore the people and businesses shaping today&apos;s creative world.</p>
    <div className="community-actions">
      <a className="primary-button" href="#members">Explore the Community <span>→</span></a>
      <a className="text-link" href="#profile-choice">Create Your Profile <span>→</span></a>
    </div>
    <div className="community-member-access">
      <div className="community-member-copy"><strong>Already registered?</strong><span>Check the profiles with your registered email.</span></div>
      {sent?<div className="community-sent">Your secure magic link has been sent to <strong>{email}</strong>.</div>:<form onSubmit={sendLink} className="community-access-form"><input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="Enter your registered email" autoComplete="email"/><button type="submit" disabled={loading}>{loading?'Sending…':'Send Magic Link →'}</button></form>}
      {message&&<p className="community-error">{message}</p>}
    </div>
    <p className="community-free-note"><strong>FREE</strong> — Create your professional profile and join CreativeCheck.</p>
  </section>
}

function TypeChoice({onChoose}){
  return <section id="profile-choice" className="profile-type-card">
    <div className="profile-type-head"><span className="section-label light">JOIN CREATIVECHECK</span><h2>Create your profile.</h2><p>Choose one option to create your profile.</p></div>
    <div className="profile-type-grid">
      <button type="button" onClick={()=>onChoose('creative')}><span className="type-kicker">FOR INDIVIDUALS</span><strong>Creatives</strong><span>Create your <b>FREE</b> CreativeCheck profile.</span><b>Create Creative Profile →</b></button>
      <button type="button" onClick={()=>onChoose('business')}><span className="type-kicker">FOR ORGANISATIONS</span><strong>Business Creatives</strong><span>Create your <b>FREE</b> CreativeCheck business profile.</span><b>Create Business Profile →</b></button>
    </div>
  </section>
}

function ProfileForm({isBusiness,onBack,onSubmitted}){
  const [loading,setLoading]=useState(false),[message,setMessage]=useState(''),startedRef=useRef(false)
  function markStarted(){if(!startedRef.current){startedRef.current=true;track('signup_started',{query:isBusiness?'business':'creative'})}}
  async function handleSubmit(e){
    e.preventDefault();const form=e.currentTarget;setLoading(true);setMessage('')
    const cleanEmail=form.email.value.trim().toLowerCase();const hasPublicLink=form.website.value.trim()||form.instagram.value.trim()||form.portfolio_url.value.trim()
    if(!hasPublicLink){setMessage('Please add at least one public link: website, Instagram or work link.');setLoading(false);return}
    const {data,error}=await supabase.rpc('submit_profile',{p_full_name:isBusiness?form.company_name.value:form.full_name.value,p_email:cleanEmail,p_profession:isBusiness?form.business_type.value:form.profession.value,p_category:isBusiness?form.industry.value:form.category.value,p_city:form.city.value,p_country:form.country.value,p_website:form.website.value,p_instagram:form.instagram.value,p_portfolio_url:form.portfolio_url.value,p_bio:form.bio.value,p_profile_type:isBusiness?'business':'creative'})
    if(error){setMessage(error.message||'Something went wrong. Please try again.');setLoading(false);return}
    track('signup_completed',{query:isBusiness?'business':'creative'});onSubmitted(data);setLoading(false)
  }
  return <section className="profile-form-card"><div className="profile-form-head"><span className="section-label light">CREATE PROFILE · {isBusiness?'BUSINESS CREATIVE':'CREATIVE'}</span><h2>{isBusiness?'Create your Business Creative profile':'Create your Creative profile'}</h2><p>Create your professional presence for <strong>FREE</strong>.</p></div><div className="profile-form-body"><button type="button" onClick={onBack} className="back-link">← Choose a different profile type</button><form onFocus={markStarted} onSubmit={handleSubmit} className="profile-form">{isBusiness?<><input type="text" name="company_name" required placeholder="Company / Business Name"/><input type="text" name="business_type" required placeholder="Business Type — e.g. Production Company, Creative Agency, Studio, Brand"/><input type="text" name="industry" required placeholder="Creative Industry / Speciality"/></>:<><input type="text" name="full_name" required placeholder="Full Name"/><input type="text" name="profession" required placeholder="Profession — e.g. Film Director, Photographer, Designer"/><input type="text" name="category" required placeholder="Creative Field / Speciality"/></>}<input type="email" name="email" required placeholder="Email Address" autoComplete="email"/><div className="profile-two-col"><input type="text" name="city" placeholder="City"/><input type="text" name="country" placeholder="Country"/></div><textarea name="bio" required rows="5" placeholder={isBusiness?'Short business description — required for review':'Short professional bio — required for review'}/><input type="url" name="website" placeholder={isBusiness?'Company Website URL':'Website URL'}/><input type="url" name="instagram" placeholder={isBusiness?'Business Instagram URL':'Instagram Profile URL'}/><input type="url" name="portfolio_url" placeholder={isBusiness?'Company / Work Showcase URL':'Portfolio / Work URL'}/><div className="profile-note">Please add at least one public link: website, Instagram or work link.</div><label className="profile-confirm"><input type="checkbox" required/><span>I confirm that submitted information is publicly shareable and may be reviewed before publication on CreativeCheck.</span></label><button type="submit" disabled={loading} className="profile-submit">{loading?'Submitting…':isBusiness?'Submit Business Creative Profile':'Submit Creative Profile'}</button>{message&&<div className="profile-message">{message}</div>}</form></div></section>
}

export default function AddProfilePage({type}){
  const[selectedType,setSelectedType]=useState(null),[submitted,setSubmitted]=useState(false)
  if(type==='business')return null
  if(submitted)return <section className="profile-success-card"><span className="section-label">PROFILE SUBMITTED</span><h2>Thank you. Your profile is now with CreativeCheck.</h2><p>We&apos;ll review your profile before publication. Once approved, you&apos;ll be able to access the community. If you return later, use your registered email to receive a secure magic link.</p></section>
  return <div className="signup-flow"><CommunityIntro/>{!selectedType?<TypeChoice onChoose={next=>setSelectedType(next)}/>:<ProfileForm isBusiness={selectedType==='business'} onBack={()=>setSelectedType(null)} onSubmitted={()=>setSubmitted(true)}/>}</div>
}
