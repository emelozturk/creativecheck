import { useEffect, useState } from 'react'
import { supabase } from '../supabase'

const BUCKET = 'premium-profile-images'

function PremiumImage({src, preview=false}){
  if(!src) return <div className="membership-image-placeholder"><span>PREMIUM</span><strong>Add your image</strong></div>
  return <img className="membership-profile-image" src={src} alt="Premium profile preview" />
}

export default function MembershipPage(){
  const [session,setSession]=useState(null)
  const [subscription,setSubscription]=useState(null)
  const [profile,setProfile]=useState(null)
  const [loading,setLoading]=useState(true)
  const [uploading,setUploading]=useState(false)
  const [message,setMessage]=useState('')
  const [previewImage,setPreviewImage]=useState('')
  const previewMode=new URLSearchParams(window.location.search).get('premium_preview')==='1'
  const premium=previewMode || ['active','trialing'].includes(subscription?.status)

  async function load(){
    setLoading(true)
    const {data:{session:current}}=await supabase.auth.getSession()
    setSession(current)
    if(current?.user?.id){
      const [{data:sub},{data:ownedProfile}]=await Promise.all([
        supabase.from('subscriptions').select('plan_code,status,current_period_end,cancel_at_period_end').eq('user_id',current.user.id).eq('plan_code','premium_monthly').in('status',['active','trialing']).order('created_at',{ascending:false}).limit(1).maybeSingle(),
        supabase.from('profiles_private').select('id,full_name,profile_type,avatar_url').eq('user_id',current.user.id).maybeSingle()
      ])
      setSubscription(sub||null)
      setProfile(ownedProfile||null)
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
      <span className="section-label">MEMBERSHIP · V1</span>
      <h2>Make your profile<br/><em>stand out.</em></h2>
      <p>Free profiles stay exactly as they are. Premium adds a visual profile image and, next, promotional visibility.</p>
    </div>

    {previewMode && <div className="membership-preview-banner"><strong>Premium Preview Mode</strong><span>This is a safe product preview before payments are connected.</span></div>}

    <div className="membership-grid">
      <article className="membership-card free">
        <span className="membership-kicker">FREE PROFILE</span>
        <h3>Stay discoverable.</h3>
        <p>Your existing CreativeCheck profile remains free and unchanged.</p>
        <ul><li>Professional identity</li><li>Public discovery</li><li>Professional links</li><li>No profile image in V1</li></ul>
        <span className="membership-price">£0</span>
      </article>

      <article className="membership-card premium">
        <div className="membership-card-topline"><span className="membership-kicker">PREMIUM</span><span className="membership-status">{premium?'PREMIUM ACCESS':'NEXT STEP'}</span></div>
        <h3>Show your work.</h3>
        <p>Premium gives creative professionals and businesses a visual profile presence.</p>
        <ul><li>Upload a profile / featured image</li><li>Premium profile presentation</li><li>Promote your profile — coming next</li><li>Insights — coming next</li></ul>
        <div className="membership-action-row">
          <span className="membership-price">£6<span>/month</span></span>
          <button type="button" className="membership-button" disabled={!previewMode && !premium}>Upgrade to Premium</button>
        </div>
        {!premium && <small className="membership-note">Payments are not connected yet.</small>}
      </article>
    </div>

    <div className="membership-dashboard">
      <div className="membership-dashboard-copy">
        <span className="section-label">YOUR PREMIUM PROFILE</span>
        <h3>{premium?'Add your image':'Premium image area'}</h3>
        <p>{premium?'Choose one strong image for your CreativeCheck profile. This is the first Premium feature we are testing.':'The image uploader will become available when Premium is active.'}</p>
        {profile?.full_name&&<div className="membership-owner">{profile.full_name}<span>{profile.profile_type==='business'?'Business':'Creative Professional'}</span></div>}
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
        <div className="membership-preview-role">{profile?.profile_type==='business'?'Creative Business':'Creative Professional'}</div>
        <span className="membership-premium-tag">PREMIUM</span>
      </div>
    </div>
  </section>
}
