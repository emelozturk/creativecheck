import { useEffect, useMemo, useState } from 'react'

const SUPABASE_URL = 'https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY = 'sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'

const businessTerms = ['agency','studio','studios','production','productions','company','companies','creative business','label','collective','media group','design firm','consultancy']

function isBusiness(profile) {
  if (profile.profile_type === 'business' || profile.account_type === 'business') return true
  if (profile.profile_type === 'individual' || profile.account_type === 'individual') return false
  const text = [profile.full_name, profile.profession, profile.category, profile.bio].filter(Boolean).join(' ').toLowerCase()
  return businessTerms.some(term => text.includes(term))
}

function ProfileCard({ profile, onOpen }) {
  const initials = (profile.full_name || 'Creative').trim().split(/\s+/).filter(Boolean).slice(0,2).map(x => x[0].toUpperCase()).join('') || 'C'
  const links = [
    profile.website && ['Website', profile.website],
    profile.instagram && ['Instagram', profile.instagram],
    profile.portfolio_url && ['Work', profile.portfolio_url],
  ].filter(Boolean)
  return (
    <article className="member-compact-card" onClick={() => onOpen(profile)} role="button" tabIndex={0} onKeyDown={e => { if(e.key==='Enter' || e.key===' ') onOpen(profile) }}>
      <div className="member-card-top">
        <span className="member-initials">{initials}</span>
        {profile.verified && <span className="member-verified">Verified</span>}
      </div>
      <h4>{profile.full_name || 'Creative Profile'}</h4>
      <p className="member-profession">{profile.profession || 'Creative Professional'}</p>
      <p className="member-location">{[profile.city, profile.country].filter(Boolean).join(', ') || profile.category || 'Creative'}</p>
      {links.length > 0 && <div className="member-links" onClick={e => e.stopPropagation()}>{links.slice(0,2).map(([label,url]) => <a key={label} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
      {profile.bio && <button className="member-bio-button" onClick={e => {e.stopPropagation(); onOpen(profile)}}>Bio +</button>}
    </article>
  )
}

export default function ExploreSection({ searchQuery = '' }) {
  const [profiles, setProfiles] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [filter, setFilter] = useState('all')

  useEffect(() => { fetchProfiles() }, [])

  async function fetchProfiles() {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/profiles?status=eq.approved&select=*&order=created_at.desc`, { headers:{ apikey:SUPABASE_KEY, Authorization:`Bearer ${SUPABASE_KEY}` } })
      const data = await response.json()
      setProfiles(Array.isArray(data) ? data : [])
    } catch (error) { console.error('Profile fetch error:', error); setProfiles([]) }
    finally { setLoading(false) }
  }

  const filtered = useMemo(() => profiles.filter(profile => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return true
    return [profile.full_name,profile.profession,profile.category,profile.city,profile.country,profile.bio].filter(Boolean).join(' ').toLowerCase().includes(q)
  }), [profiles, searchQuery])

  const creatives = filtered.filter(p => !isBusiness(p))
  const businesses = filtered.filter(p => isBusiness(p))
  const visible = filter === 'creatives' ? creatives : filter === 'businesses' ? businesses : filtered

  return (
    <section style={{maxWidth:1280,margin:'0 auto',padding:'0 5.5vw 70px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:30,borderBottom:'1px solid rgba(17,19,24,.13)',paddingBottom:22,marginBottom:25}}>
        <div>
          <div style={{fontSize:10,letterSpacing:'.22em',fontWeight:800,color:'#77736b'}}>03 / OUR CREATIVE COMMUNITY</div>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(44px,5vw,72px)',lineHeight:.9,fontWeight:400,letterSpacing:'-.05em',margin:'13px 0 0'}}>Meet the<br/><em style={{color:'#5d6670'}}>community.</em></h2>
        </div>
        <div style={{display:'flex',gap:4,border:'1px solid rgba(17,19,24,.14)',padding:3}}>
          {[['all','All'],['creatives','Creatives'],['businesses','Business']].map(([key,label])=><button key={key} onClick={()=>setFilter(key)} style={{padding:'10px 13px',fontSize:10,textTransform:'uppercase',letterSpacing:'.1em',background:filter===key?'#171717':'transparent',color:filter===key?'#fbfaf7':'#66625b',cursor:'pointer'}}>{label}</button>)}
        </div>
      </div>

      {loading && <div style={{padding:'35px 0',fontFamily:'Georgia,serif',fontSize:25,color:'#77736b'}}>Loading the creative community…</div>}
      {!loading && visible.length===0 && <div style={{padding:'35px 0',borderTop:'1px solid rgba(17,19,24,.1)',color:'#77736b'}}>No approved profiles match this search yet.</div>}
      {!loading && visible.length>0 && (
        <>
          {filter==='all' ? <>
            {creatives.length>0 && <MemberGroup title="Creatives" count={creatives.length} profiles={creatives} onOpen={setSelectedProfile}/>} 
            {businesses.length>0 && <MemberGroup title="Business" count={businesses.length} profiles={businesses} onOpen={setSelectedProfile}/>} 
          </> : <MemberGroup title={filter==='businesses'?'Business':'Creatives'} count={visible.length} profiles={visible} onOpen={setSelectedProfile}/>} 
        </>
      )}

      {selectedProfile && <ProfileModal profile={selectedProfile} onClose={()=>setSelectedProfile(null)} />}
    </section>
  )
}

function MemberGroup({title,count,profiles,onOpen}) {
  return <div style={{marginBottom:35}}>
    <div style={{display:'flex',alignItems:'baseline',gap:10,marginBottom:12}}><h3 style={{fontFamily:'Georgia,serif',fontSize:25,fontWeight:400,margin:0}}>{title}</h3><span style={{fontSize:10,letterSpacing:'.15em',color:'#8d8a83'}}>{String(count).padStart(2,'0')}</span></div>
    <div className="member-grid-compact">{profiles.map(profile=><ProfileCard key={profile.id} profile={profile} onOpen={onOpen}/>)}</div>
  </div>
}

function ProfileModal({profile,onClose}) {
  return <div style={{position:'fixed',inset:0,zIndex:100,background:'rgba(17,19,24,.72)',backdropFilter:'blur(10px)',display:'grid',placeItems:'center',padding:24}} onClick={onClose}>
    <div onClick={e=>e.stopPropagation()} style={{width:'min(700px,100%)',maxHeight:'88vh',overflow:'auto',background:'#f4f1eb',padding:40,border:'1px solid rgba(255,255,255,.2)'}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:20,alignItems:'start'}}><div><div style={{fontFamily:'Georgia,serif',fontSize:'clamp(34px,5vw,54px)',lineHeight:.95}}>{profile.full_name || 'Creative Profile'}</div><div style={{marginTop:9,color:'#5d6670',fontWeight:700,fontSize:13}}>{profile.profession || 'Creative Professional'}</div></div><button onClick={onClose} style={{fontSize:28,cursor:'pointer'}}>×</button></div>
      <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:22}}>{[profile.category,[profile.city,profile.country].filter(Boolean).join(', ')].filter(Boolean).map((x,i)=><span key={i} style={{fontSize:9,letterSpacing:'.1em',textTransform:'uppercase',padding:'8px 10px',border:'1px solid rgba(17,19,24,.15)'}}>{x}</span>)}</div>
      {profile.bio && <p style={{fontSize:15,lineHeight:1.8,color:'#625e57',marginTop:28}}>{profile.bio}</p>}
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:30}}>
        {profile.website && <a href={profile.website} target="_blank" rel="noreferrer" style={{padding:'13px 17px',background:'#171717',color:'#fff',fontSize:10}}>Website ↗</a>}
        {profile.instagram && <a href={profile.instagram} target="_blank" rel="noreferrer" style={{padding:'13px 17px',border:'1px solid rgba(17,19,24,.2)',fontSize:10}}>Instagram ↗</a>}
        {profile.portfolio_url && <a href={profile.portfolio_url} target="_blank" rel="noreferrer" style={{padding:'13px 17px',border:'1px solid rgba(17,19,24,.2)',fontSize:10}}>External work ↗</a>}
      </div>
    </div>
  </div>
}
