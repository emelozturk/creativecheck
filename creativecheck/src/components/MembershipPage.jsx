import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

const BUCKET = 'premium-profile-images'

const PLANS = {
  creative: {
    code: 'premium_monthly',
    label: 'INDIVIDUAL PREMIUM',
    title: 'Premium for Creatives',
    price: '£6',
    description: 'Build your presence. Connect globally. Get discovered.',
    features: [
      'Professional Profile',
      'Professional Connections',
      'Global Reach',
      'Increased Visibility',
      'Promote Your Profile',
      'Professional Image'
    ]
  },
  business: {
    code: 'business_monthly',
    label: 'BUSINESS PREMIUM',
    title: 'Premium for Creative Businesses',
    price: '£39',
    description: 'Discover creative talent. Build your business presence. Reach further.',
    features: [
      'Business Profile',
      'Creative Talent Discovery',
      'Creative Connections',
      'Global Reach',
      'Increased Visibility',
      'Promote Your Business'
    ]
  }
}

function PremiumImage({src}){
  if(!src) return <div className="membership-image-placeholder"><span>PREMIUM</span><strong>Add your image</strong></div>
  return <img className="membership-profile-image" src={src} alt="Premium profile preview" />
}

function PlanCard({type,previewMode,onSelect}){
  const plan=PLANS[type]
  return <article className={`membership-card premium membership-card-${type}`}>
    <div className="membership-card-topline">
      <span className="membership-kicker">{plan.label}</span>
      <span className="membership-status">{previewMode?'PREVIEW':'PREMIUM'}</span>
    </div>
    <h3>{plan.title}</h3>
    <p>{plan.description}</p>
    <ul>{plan.features.map(feature=><li key={feature}>{feature}</li>)}</ul>
    <div className="membership-action-row">
      <span className="membership-price">{plan.price}<span>/month</span></span>
      <button type="button" className="membership-button" onClick={()=>onSelect(type)}>Explore Premium</button>
    </div>
    <small className="membership-note">Payments are not connected yet.</small>
  </article>
}

export default function MembershipPage(){
  const [session,setSession]=useState(null)
  const [subscription,setSubscription]=useState(null)
  const [profile,setProfile]=useState(null)
  const [loading,setLoading]=useState(true)
  const [uploading,setUploading]=useState(false)
  const [message,setMessage]=useState('')
  const [previewImage,setPreviewImage]=useState('')
  const [selectedType,setSelectedType]=useState('creative')
  const previewMode=new URLSearchParams(window.location.search).get('premium_preview')==='1'
  const premium=previewMode || ['active','trialing'].includes(subscription?.status)
  const currentType=profile?.profile_type==='business'?'business':'creative'
  const activePlan=PLANS[selectedType]

  async function load(){
    setLoading(true)
    const {data:{session:current}}=await supabase.auth.getSession()
    setSession(current)
    if(current?.user?.id){
      const [{data:subs},{data:ownedProfile}]=await Promise.all([
        supabase.from('subscriptions').select('plan_code,status,current_period_end,cancel_at_period_end').eq('user_id',current.user.id).in('plan_code',['premium_monthly','business_monthly']).in('status',['active','trialing']).order('created_at',{ascending:false}).limit(1),
        supabase.from('profiles_private').select('id,full_name,profile_type,avatar_url').eq('user_id',current.user.id).maybeSingle()
      ])
      const sub=subs?.[0]||null
      setSubscription(sub)
      setProfile(ownedProfile||null)
      if(sub?.plan_code==='business_monthly') setSelectedType('business')
      else if(ownedProfile?.profile_type==='business') setSelectedType('business')
    }
    setLoading(false)
  }

  useEffect(()=>{
    load()
    const {data:listener}=supabase.auth.onAuthStateChange(()=>load())
    return()=>listener.subscription.unsubscribe()
  },[])

  async function uploadImage(event){
    const file=event.target.files?.[0]
    if(!file)return
    if(!file.type.startsWith('image/')){setMessage('Please choose an image file.');return}
    if(file.size>5*1024*1024){setMessage('Please choose an image smaller than 5MB.');return}
    setMessage('')
    if(previewMode){
      setPreviewImage(URL.createObjectURL(file))
      setMessage('Preview image added locally. No payment or account data was changed.')
      return
    }
    if(!premium || !session?.user?.id || !profile?.id){
      setMessage('Premium access is required to upload a profile image.')
      return
    }
    setUploading(true)
    const ext=(file.name.split('.').pop()||'jpg').toLowerCase()
    const path=session.user.id + '/profile.' + ext
    const {error:uploadError}=await supabase.storage.from(BUCKET).upload(path,file,{upsert:true,contentType:file.type,cacheControl:'3600'})
    if(uploadError){setMessage(uploadError.message||'Image upload failed.');setUploading(false);return}
    const {data:urlData}=supabase.storage.from(BUCKET).getPublicUrl(path)
    const {error:updateError}=await supabase.from('profiles_private').update({avatar_url:urlData.publicUrl}).eq('id',profile.id)
    if(updateError){setMessage(updateError.message||'We could not save your image.');setUploading(false);return}
    setProfile({...profile,avatar_url:urlData.publicUrl})
    setMessage('Your premium profile image is now saved.')
    setUploading(false)
  }

  return <section className="membership-shell" id="membership">
    <div className="membership-intro">
      <span className="section-label">MEMBERSHIP · PREMIUM</span>
      <h2>Choose your<br/><em>creative presence.</em></h2>
      <p>Free profiles stay exactly as they are. Premium is designed around the different needs of creative professionals and creative businesses.</p>
    </div>

    {previewMode && <div className="membership-preview-banner"><strong>Premium Preview Mode</strong><span>This is a safe product preview before payments are connected.</span></div>}

    <div className="membership-grid membership-grid-two">
      <PlanCard type="creative" previewMode={previewMode} onSelect={setSelectedType}/>
      <PlanCard type="business" previewMode={previewMode} onSelect={setSelectedType}/>
    </div>

    <div className="membership-community">
      <span className="section-label">CREATIVECHECK COMMUNITY</span>
      <h3>Discover. Connect. Grow.</h3>
      <p>Be part of a global creative network built for professional connections and discovery.</p>
    </div>

    <div className="membership-dashboard">
      <div className="membership-dashboard-copy">
        <span className="section-label">{activePlan.label}</span>
        <h3>{activePlan.title}</h3>
        <p>{activePlan.description}</p>
        <ul className="membership-selected-features">{activePlan.features.map(feature=><li key={feature}>{feature}</li>)}</ul>
        <div className="membership-owner">{profile?.full_name||'Your CreativeCheck profile'}<span>{selectedType==='business'?'Creative Business':'Creative Professional'}</span></div>
        <label className="membership-upload-button">
          {uploading?'Uploading…':'Choose image'}
          <input type="file" accept="image/jpeg,image/png,image/webp" onChange={uploadImage} disabled={!premium||uploading}/>
        </label>
        {message&&<p className="membership-message">{message}</p>}
      </div>
      <div className="membership-preview-card">
        <div className="membership-preview-label">PROFILE PREVIEW</div>
        <div className="membership-preview-media"><PremiumImage src={previewImage||profile?.avatar_url}/></div>
        <div className="membership-preview-name">{profile?.full_name||'Your Creative Profile'}</div>
        <div className="membership-preview-role">{selectedType==='business'?'Creative Business':'Creative Professional'}</div>
        <span className="membership-premium-tag">PREMIUM · {activePlan.price}/MONTH</span>
      </div>
    </div>
  </section>
}
