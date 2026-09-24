import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../supabase'
import { track } from '../analytics'

const AUTH_REDIRECT_URL = 'https://creativecheck.app/'

function isBusiness(profile){ return profile.profile_type === 'business' }

function CommunityStats(){
  const [stats,setStats]=useState({professionals:0,businesses:0,countries:0,continents:0})
  useEffect(()=>{
    let active=true
    async function load(){
      const {data,error}=await supabase.from('profiles').select('profile_type,country_code').eq('status','approved').eq('verified',true)
      if(error||!Array.isArray(data)||!active)return
      const continentMap={GB:'Europe',IN:'Asia',US:'North America',IT:'Europe',AE:'Asia',AU:'Oceania',CA:'North America',ID:'Asia',IR:'Asia',JO:'Asia',UG:'Africa',KE:'Africa',TR:'Europe'}
      const countries=new Set(data.map(p=>p.country_code).filter(Boolean))
      const continents=new Set(data.map(p=>continentMap[String(p.country_code||'').toUpperCase()]).filter(Boolean))
      setStats({professionals:data.filter(p=>p.profile_type!=='business').length,businesses:data.filter(p=>p.profile_type==='business').length,countries:countries.size,continents:continents.size})
    }
    load(); return()=>{active=false}
  },[])
  const items=[['professionals','Creative Professionals','26+'],['businesses','Creative Businesses','6+'],['countries','Countries','14+'],['continents','Continents','5']]
  return <div className="community-stats" aria-label="CreativeCheck community statistics"><div className="community-stats-grid">{items.map(([key,label,display])=><article key={key}><strong>{display}</strong><span>{label}</span></article>)}</div></div>
}

function publicName(profile){
  const full=String(profile.full_name || 'Creative').trim() || 'Creative'
  const parts=full.split(/\s+/).filter(Boolean)
  if(parts.length<=1)return parts[0] || 'Creative'
  const first=parts[0]
  const surnameInitials=parts.slice(1).map(part=>part.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ]/g,'').charAt(0).toUpperCase()).filter(Boolean)
  return surnameInitials.length ? `${first} ${surnameInitials.join('-')}` : first
}

function initialsFor(profile){
  const full=String(profile.full_name || 'Creative').trim() || 'Creative'
  const parts=full.split(/\s+/).filter(Boolean)
  if(parts.length<=1)return full.charAt(0).toUpperCase() || 'C'
  return `${parts[0].charAt(0).toUpperCase()}${parts[parts.length-1].charAt(0).toUpperCase()}`
}

function CommunitySignupPrompt({onClose}){\n  return <div role="dialog" aria-modal="true" aria-labelledby="community-signup-title" onClick={onClose} style={{position:'fixed',inset:0,zIndex:120,background:'rgba(17,19,24,.68)',backdropFilter:'blur(8px)',display:'grid',placeItems:'center',padding:22}}>\n    <div onClick={event=>event.stopPropagation()} style={{width:'min(560px,100%)',background:'#f4f1eb',padding:'38px 34px',border:'1px solid rgba(255,255,255,.3)',boxShadow:'0 24px 70px rgba(0,0,0,.22)'}}>\n      <button type="button" onClick={onClose} aria-label="Close" style={{float:'right',border:0,background:'transparent',fontSize:28,cursor:'pointer',color:'#111318'}}>×</button>\n      <div style={{fontSize:10,letterSpacing:'.18em',fontWeight:800,color:'#3158c7'}}>CREATIVECHECK · COMMUNITY</div>\n      <h2 id="community-signup-title" style={{fontFamily:'Georgia,serif',fontSize:'clamp(32px,5vw,48px)',fontWeight:400,lineHeight:.98,margin:'12px 0 14px'}}>Want to see more?</h2>\n      <p style={{fontSize:15,lineHeight:1.7,color:'#625e57',margin:'0 0 24px'}}>If you want to see more information about the CreativeCheck community, please create your account.</p>\n      <a href="#profile-choice" onClick={onClose} style={{display:'inline-block',padding:'13px 18px',background:'#203b88',color:'#fff',fontSize:10,letterSpacing:'.12em',textTransform:'uppercase',textDecoration:'none'}}>Create Your Account →</a>\n    </div>\n  </div>\n}\n\nfunction ProfileCard({profile,onOpen,member}){
  const displayName=publicName(profile)
  const initials=initialsFor(profile)
  const bio=String(profile.bio||'').trim()
  function openProfile(){ track('profile_card_clicked',{profile_id:profile.id}); if(!member){ onOpen?.('__signup__'); return } onOpen?.(profile) }
  return <article className={`member-compact-card ${member?'member-card-full':'member-card-teaser'}`} onClick={openProfile} role={member?'button':undefined} tabIndex={member?0:undefined} onKeyDown={e=>{if(member&&(e.key==='Enter'||e.key===' '))openProfile()}}>
    <div className="member-card-top">{profile.avatar_url?<img className="member-avatar-image" src={profile.avatar_url} alt="" />:<span className="member-initials">{initials}</span>}{profile.verified&&<span className="member-verified">Reviewed</span>}</div>
    <h4 style={{display:'block',visibility:'visible',opacity:1,color:'#111318',fontSize:'19px',lineHeight:1.1,margin:'8px 0 3px',fontWeight:600}}>{displayName}</h4>
    <p className="member-profession"><strong>{profile.profession||'Creative Professional'}</strong></p>
    <p className="member-location">{[profile.city,profile.country].filter(Boolean).join(', ')||profile.category||'Creative'}</p>
    {bio&&<p className="member-bio-teaser">{bio}</p>}
    {!member&&<span className="member-lock-label">Members can view full profile ↗</span>}
  </article>
}
function CommunityAccessBox(){
  const [email,setEmail]=useState(''),[sent,setSent]=useState(false),[loading,setLoading]=useState(false),[message,setMessage]=useState('')
  async function sendLink(e){
    e.preventDefault()
    const clean=email.trim().toLowerCase()
    if(!clean)return
    setLoading(true);setMessage('');setSent(false)
    const {error}=await supabase.auth.signInWithOtp({email:clean,options:{emailRedirectTo:AUTH_REDIRECT_URL,shouldCreateUser:true}})
    if(error){
      console.error('CreativeCheck magic link error:',error)
      const raw=String(error.message||'').toLowerCase()
      if(raw.includes('rate limit') || raw.includes('60 seconds') || raw.includes('too many')){
        setMessage('Please wait a minute before requesting another sign-in link.')
      }else if(raw.includes('not found') || raw.includes('signup is disabled') || raw.includes('signups not allowed')){
        setMessage('This email address is not registered with CreativeCheck.')
      }else{
        setMessage('We could not send the sign-in link. Please try again in a moment.')
      }
      setLoading(false);return
    }
    setSent(true);setLoading(false)
  }
  return <div style={{maxWidth:760,margin:'0 0 28px',padding:'20px',border:'1px solid rgba(17,19,24,.12)',background:'#f7f4ee'}}>
    <strong style={{display:'block',fontFamily:'Georgia,serif',fontSize:21,fontWeight:400}}>Discover the CreativeCheck Community</strong>
    <p style={{margin:'7px 0 14px',color:'#6b675f',lineHeight:1.6}}>Explore the people and businesses shaping today&apos;s creative world.</p>
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:12}}>
      <a href="#profile-choice" style={{display:'inline-block',padding:'11px 15px',background:'#203b88',color:'#fff',fontSize:10,letterSpacing:'.12em',textTransform:'uppercase'}}>Create Your Profile →</a>
      <span style={{fontSize:12,color:'#6b675f'}}>or</span>
      {!sent?<form onSubmit={sendLink} style={{display:'flex',flexWrap:'wrap',gap:8,alignItems:'center',flex:1,minWidth:260}}>
        <label htmlFor="community-registered-email" style={{fontSize:11,color:'#4f4b45'}}>If you are already registered, please enter your email address to see the community members.</label>
        <input id="community-registered-email" value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="Registered email address" autoComplete="email" style={{flex:'1 1 220px',minWidth:200,padding:'11px 12px',border:'1px solid rgba(17,19,24,.18)',background:'#fff'}}/>
        <button type="submit" disabled={loading} style={{padding:'11px 15px',background:'#111318',color:'#fff',border:0,fontSize:10,letterSpacing:'.1em',textTransform:'uppercase',cursor:'pointer'}}>{loading?'Sending…':'See Community Members →'}</button>
      </form>:<div style={{fontSize:12,color:'#3158c7'}}>Your secure magic link has been sent to <strong>{email}</strong>.</div>}
    </div>
    {message&&<p style={{margin:'10px 0 0',fontSize:12,color:'#9a3f3f'}}>{message}</p>}
    <p style={{margin:'14px 0 0',fontSize:11,color:'#6b675f'}}><strong style={{fontSize:13,color:'#111318'}}>FREE</strong> — Create your free professional account to see the community and join CreativeCheck.</p>
  </div>
}

export default function ExploreSection({searchQuery=''}){
  const[profiles,setProfiles]=useState([]),[loading,setLoading]=useState(true),[selectedProfile,setSelectedProfile]=useState(null),[filter,setFilter]=useState('all'),[member,setMember]=useState(false)
  useEffect(()=>{loadProfiles();const{data:listener}=supabase.auth.onAuthStateChange(()=>loadProfiles());return()=>listener.subscription.unsubscribe()},[])
  useEffect(()=>{const q=searchQuery.trim();if(q.length<2)return;const timer=window.setTimeout(()=>track('search_performed',{query:q.slice(0,120)}),700);return()=>window.clearTimeout(timer)},[searchQuery])
  useEffect(()=>{if(filter!=='all')track('filter_applied',{query:filter})},[filter])
  async function loadProfiles(){
    setLoading(true)
    try{
      const {data:fullData,error:fullError}=await supabase.rpc('get_member_profiles')
      if(!fullError && Array.isArray(fullData)){setProfiles(fullData);setMember(true);return}
      const {data,error}=await supabase.from('profiles').select('*').eq('status','approved').order('created_at',{ascending:false})
      if(error)throw error
      setProfiles(Array.isArray(data)?data:[]);setMember(false)
    }catch(error){console.error('Profile fetch error:',error);setProfiles([]);setMember(false)}finally{setLoading(false)}
  }
  const filtered=useMemo(()=>profiles.filter(profile=>{const q=searchQuery.toLowerCase().trim();if(!q)return true;return[profile.full_name,profile.profession,profile.category,profile.city,profile.country,profile.bio].filter(Boolean).join(' ').toLowerCase().includes(q)}),[profiles,searchQuery])
  const creatives=filtered.filter(p=>!isBusiness(p)),businesses=filtered.filter(isBusiness),visible=filter==='creatives'?creatives:filter==='businesses'?businesses:filtered
  return <section id="members" style={{maxWidth:1280,margin:'0 auto',padding:'0 5.5vw 45px'}}>
    <div className="community-header-integrated">
      <div className="community-heading-row">
        <div><div style={{fontSize:10,letterSpacing:'.22em',fontWeight:800,color:'#3158c7'}}>03 / OUR CREATIVE COMMUNITY</div><h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(42px,5vw,68px)',lineHeight:.9,fontWeight:400,letterSpacing:'-.05em',margin:'10px 0 0'}}>Meet the<br/><em style={{color:'#3158c7'}}>community.</em></h2></div>
        <div className="community-filters">{[['all','All'],['creatives','Creatives'],['businesses','Creative Businesses']].map(([key,label])=><button key={key} onClick={()=>setFilter(key)} style={{padding:'9px 12px',fontSize:10,textTransform:'uppercase',letterSpacing:'.1em',background:filter===key?'#203b88':'transparent',color:filter===key?'#fbfaf7':'#66625b',cursor:'pointer'}}>{label}</button>)}</div>
      </div>
      <CommunityStats/>
    </div>
    <CommunityAccessBox/>
    {loading&&<div style={{padding:'25px 0',fontFamily:'Georgia,serif',fontSize:22,color:'#77736b'}}>Loading the creative community…</div>}
    {!loading&&visible.length===0&&<div style={{padding:'25px 0',borderTop:'1px solid rgba(17,19,24,.1)',color:'#77736b'}}>No approved profiles match this search yet.</div>}
    {!loading&&visible.length>0&&<>{filter==='all'?<>{creatives.length>0&&<MemberGroup title="Creatives" count={creatives.length} profiles={creatives} onOpen={setSelectedProfile} member={member}/>} {businesses.length>0&&<MemberGroup title="Creative Businesses" count={businesses.length} profiles={businesses} onOpen={setSelectedProfile} member={member}/>}</>:<MemberGroup title={filter==='businesses'?'Creative Businesses':'Creatives'} count={visible.length} profiles={visible} onOpen={setSelectedProfile} member={member}/>}</>}
    {selectedProfile==='__signup__'&&<CommunitySignupPrompt onClose={()=>setSelectedProfile(null)}/>}\n    {selectedProfile&&selectedProfile!=='__signup__'&&member&&<ProfileModal profile={selectedProfile} onClose={()=>setSelectedProfile(null)}/>}</section>
}
function MemberGroup({title,count,profiles,onOpen,member}){return <div style={{marginBottom:22}}><div style={{display:'flex',alignItems:'baseline',gap:9,marginBottom:9}}><h3 style={{fontFamily:'Georgia,serif',fontSize:22,fontWeight:400,margin:0}}>{title}</h3><span style={{fontSize:9,letterSpacing:'.15em',color:'#8d8a83'}}>{String(count).padStart(2,'0')}</span></div><div className="member-grid-compact">{profiles.map(profile=><ProfileCard key={profile.id} profile={profile} onOpen={onOpen} member={member}/>)}</div></div>}
function ProfileModal({profile,onClose}){const displayName=publicName(profile);useEffect(()=>{if(profile?.id)track('profile_viewed',{profile_id:profile.id})},[profile?.id]);return <div style={{position:'fixed',inset:0,zIndex:100,background:'rgba(17,19,24,.72)',backdropFilter:'blur(10px)',display:'grid',placeItems:'center',padding:24}} onClick={onClose}><div onClick={e=>e.stopPropagation()} style={{width:'min(700px,100%)',maxHeight:'88vh',overflow:'auto',background:'#f4f1eb',padding:40,border:'1px solid rgba(255,255,255,.2)'}}><div style={{display:'flex',justifyContent:'space-between',gap:20,alignItems:'start'}}><div><div style={{fontFamily:'Georgia,serif',fontSize:'clamp(34px,5vw,54px)',lineHeight:.95}}>{displayName}</div><div style={{marginTop:9,color:'#203b88',fontWeight:800,fontSize:14}}>{profile.profession||'Creative Professional'}</div><div style={{marginTop:6,color:'#77736b',fontSize:13}}>{[profile.city,profile.country].filter(Boolean).join(', ')}</div></div><button onClick={onClose} style={{fontSize:28,cursor:'pointer'}}>×</button></div>{profile.bio&&<p style={{fontSize:15,lineHeight:1.8,color:'#625e57',marginTop:28}}>{profile.bio}</p>}<div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:30}}>{profile.website&&<a href={profile.website} target='_blank' rel='noreferrer' style={{padding:'13px 17px',background:'#203b88',color:'#fff',fontSize:10}} onClick={()=>track('outbound_link_clicked',{profile_id:profile.id,href:profile.website})}>Website ↗</a>}{profile.instagram&&<a href={profile.instagram} target='_blank' rel='noreferrer' style={{padding:'13px 17px',border:'1px solid rgba(17,19,24,.2)',fontSize:10}} onClick={()=>track('outbound_link_clicked',{profile_id:profile.id,href:profile.instagram})}>Instagram ↗</a>}{profile.portfolio_url&&<a href={profile.portfolio_url} target='_blank' rel='noreferrer' style={{padding:'13px 17px',border:'1px solid rgba(17,19,24,.2)',fontSize:10}} onClick={()=>track('outbound_link_clicked',{profile_id:profile.id,href:profile.portfolio_url})}>External work ↗</a>}</div></div></div>}
