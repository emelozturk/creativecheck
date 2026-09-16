import { useEffect, useRef, useState } from 'react'
import { supabase } from '../supabase'
import { track } from '../analytics'

function MemberAccess({ type }) {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function sendLink(e) {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    const clean = email.trim().toLowerCase()
    if (!clean) {
      setMessage('Please enter your email address.')
      setLoading(false)
      return
    }

    const redirectUrl = `${window.location.origin}${window.location.pathname}?profile=${type || 'choose'}`
    const { error } = await supabase.auth.signInWithOtp({
      email: clean,
      options: { emailRedirectTo: redirectUrl, shouldCreateUser: true }
    })

    if (error) {
      setMessage(error.message)
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <div className="member-access-card" style={{ width:'min(680px,92vw)', maxWidth:680, margin:'0 auto 24px', background:'#071a33', borderRadius:14, padding:'34px 30px', color:'#fff', textAlign:'center' }}>
        <div style={{fontSize:10,letterSpacing:'.22em',fontWeight:800,opacity:.8}}>CHECK YOUR EMAIL</div>
        <h3 style={{fontFamily:'Georgia,serif',fontSize:'clamp(30px,4vw,44px)',fontWeight:400,margin:'10px 0'}}>Your secure link is on its way.</h3>
        <p style={{color:'rgba(255,255,255,.72)',lineHeight:1.65,maxWidth:560,margin:'0 auto'}}>Open the email we sent to <strong>{email}</strong> and click the secure CreativeCheck sign-in link. Your profile form will open automatically.</p>
        <button type="button" onClick={() => setSent(false)} style={{marginTop:20,padding:'11px 16px',borderRadius:10,border:'1px solid rgba(255,255,255,.2)',background:'transparent',color:'#fff',cursor:'pointer'}}>Use a different email</button>
      </div>
    )
  }

  return (
    <div className="member-access-card" style={{ width:'min(680px,92vw)', maxWidth:680, margin:'0 auto 24px', background:'#071a33', borderRadius:14, padding:'34px 30px', color:'#fff', textAlign:'center' }}>
      <div style={{fontSize:10,letterSpacing:'.22em',fontWeight:800,opacity:.8}}>MEMBER ACCESS</div>
      <h3 style={{fontFamily:'Georgia,serif',fontSize:'clamp(30px,4vw,44px)',fontWeight:400,margin:'10px 0'}}>Create your free profile.</h3>
      <p style={{color:'rgba(255,255,255,.72)',lineHeight:1.65,maxWidth:560,margin:'0 auto 22px'}}>Enter your email and we’ll send you a secure sign-in link. After you click it, your profile form will open here.</p>
      <form onSubmit={sendLink} style={{display:'flex',gap:10,maxWidth:540,margin:'0 auto',flexWrap:'wrap',justifyContent:'center'}}>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="Email address" style={{flex:'1 1 280px',padding:'14px 16px',borderRadius:12,border:'1px solid rgba(255,255,255,.2)',background:'#fff',color:'#111318'}} />
        <button disabled={loading} type="submit" style={{padding:'14px 18px',borderRadius:12,border:0,background:'#fff',color:'#071a33',fontWeight:700,cursor:'pointer'}}>{loading?'Sending…':'Send Secure Sign-In Link →'}</button>
      </form>
      {message && <p style={{color:'#ffb4b4',marginTop:14,fontSize:13}}>{message}</p>}
    </div>
  )
}

function ProfileForm({ isBusiness, session }) {
  const [loading,setLoading] = useState(false)
  const [message,setMessage] = useState('')
  const startedRef = useRef(false)

  function markStarted(){ if(!startedRef.current){ startedRef.current=true; track('signup_started',{query:isBusiness?'business':'creative'}) } }

  async function handleSubmit(e){
    e.preventDefault()
    const form=e.currentTarget
    setLoading(true)
    setMessage('')
    const hasPublicLink=form.website.value.trim()||form.instagram.value.trim()||form.portfolio_url.value.trim()
    if(!hasPublicLink){setMessage('Please add at least one public link: website, Instagram or portfolio.');setLoading(false);return}
    const profileData={
      full_name:isBusiness?form.company_name.value:form.full_name.value,
      email:session.user.email,
      profession:isBusiness?form.business_type.value:form.profession.value,
      category:isBusiness?form.industry.value:form.category.value,
      city:form.city.value,country:form.country.value,
      website:form.website.value,instagram:form.instagram.value,portfolio_url:form.portfolio_url.value,
      bio:form.bio.value,profile_type:isBusiness?'business':'creative',status:'pending',verified:false
    }
    const {error}=await supabase.from('profiles').insert([profileData])
    if(error){console.error(error);setMessage(error.message?.includes('duplicate')?'A profile may already exist for this email.':'Something went wrong. Please try again.');setLoading(false);return}
    track('signup_completed',{query:isBusiness?'business':'creative'})
    setMessage(isBusiness?'Creative Business profile submitted successfully and pending review.':'Creative profile submitted successfully and pending review.')
    form.reset();startedRef.current=false;setLoading(false)
  }

  return (
    <section className={`separate-profile-form ${isBusiness?'business-profile-submit':'creative-profile-submit'}`} style={{width:'min(680px,92vw)',maxWidth:680,margin:'0 auto 24px',background:'#fff',borderRadius:16,overflow:'hidden',color:'#0f172a',boxShadow:'0 20px 60px rgba(15,23,42,.10)'}}>
      <div style={{background:'#071a33',padding:'28px 30px',color:'#fff'}}>
        <div style={{fontSize:10,letterSpacing:'.22em',fontWeight:800,opacity:.8}}>JOIN CREATIVECHECK</div>
        <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(32px,4vw,48px)',fontWeight:400,margin:'8px 0'}}>{isBusiness?'Create your Creative Business profile':'Create your Creative profile'}</h2>
        <p style={{margin:0,color:'rgba(255,255,255,.72)',lineHeight:1.6}}>Signed in as {session.user.email}</p>
      </div>
      <div style={{padding:'28px'}}>
        <form onFocus={markStarted} onSubmit={handleSubmit} style={{display:'grid',gap:16}}>
          {isBusiness ? <>
            <input type="text" name="company_name" required placeholder="Company / Business Name" />
            <input type="text" name="business_type" required placeholder="Business Type — e.g. Production Company, Creative Agency, Studio, Brand" />
            <input type="text" name="industry" required placeholder="Creative Industry / Speciality" />
          </> : <>
            <input type="text" name="full_name" required placeholder="Full Name" />
            <input type="text" name="profession" required placeholder="Profession — e.g. Film Director, Photographer, Designer" />
            <input type="text" name="category" required placeholder="Creative Field / Speciality" />
          </>}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="country" placeholder="Country" />
          </div>
          <textarea name="bio" required rows="5" placeholder={isBusiness?'Short business description — required for review':'Short professional bio — required for review'} />
          <input type="url" name="website" placeholder={isBusiness?'Company Website URL':'Website URL'} />
          <input type="url" name="instagram" placeholder={isBusiness?'Business Instagram URL':'Instagram Profile URL'} />
          <input type="url" name="portfolio_url" placeholder={isBusiness?'Company / Work Showcase URL':'Portfolio / Work URL'} />
          <div style={{padding:16,borderRadius:12,background:'#eff6ff',border:'1px solid #dbeafe',color:'#1d4ed8',fontSize:14,lineHeight:1.5}}>Please add at least one public link: website, Instagram or portfolio.</div>
          <label style={{display:'flex',gap:10,alignItems:'flex-start',fontSize:13,color:'#64748b',lineHeight:1.5}}><input type="checkbox" required style={{marginTop:3}} /><span>I confirm that submitted information is publicly shareable and may be reviewed before publication on CreativeCheck.</span></label>
          <button type="submit" disabled={loading} style={{padding:'15px 18px',border:0,borderRadius:12,background:'#3158c7',color:'#fff',fontWeight:700,cursor:'pointer'}}>{loading?'Submitting…':isBusiness?'Submit Creative Business Profile':'Submit Creative Profile'}</button>
          {message && <div style={{padding:14,borderRadius:12,background:'#f8fafc',fontSize:14,color:'#475569'}}>{message}</div>}
        </form>
      </div>
    </section>
  )
}

export default function AddProfilePage({ type }) {
  const [session,setSession]=useState(null)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    let active=true
    supabase.auth.getSession().then(({data})=>{if(active){setSession(data.session);setLoading(false)}})
    const {data:listener}=supabase.auth.onAuthStateChange((_event,next)=>{setSession(next);setLoading(false)})
    return ()=>{active=false;listener.subscription.unsubscribe()}
  },[])

  useEffect(()=>{if(session?.user?.id){supabase.rpc('claim_profile_for_current_user').catch(()=>{})}},[session?.user?.id])

  if(loading) return <div style={{textAlign:'center',padding:30,color:'#777'}}>Checking member access…</div>
  if(!session) return <MemberAccess type={type} />
  if(type==='creative') return <ProfileForm isBusiness={false} session={session} />
  if(type==='business') return <ProfileForm isBusiness={true} session={session} />
  return <div style={{width:'100%'}}><ProfileForm isBusiness={false} session={session}/><ProfileForm isBusiness={true} session={session}/></div>
}
