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
  return (
    <button onClick={() => onOpen(profile)} style={{textAlign:'left',border:'1px solid rgba(17,19,24,.12)',background:'rgba(255,255,255,.72)',padding:22,borderRadius:4,display:'block',width:'100%',cursor:'pointer',transition:'transform .2s, box-shadow .2s'}} onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 20px 45px rgba(20,18,14,.10)'}} onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',gap:15}}>
        <div style={{width:58,height:58,borderRadius:'50%',display:'grid',placeItems:'center',background:'linear-gradient(135deg,#b69a67,#6d7255 55%,#5b2634)',color:'#fff',fontFamily:'Georgia,serif',fontSize:20}}>{initials}</div>
        {profile.verified && <span style={{fontSize:8,letterSpacing:'.15em',textTransform:'uppercase',color:'#6d7255',border:'1px solid rgba(109,114,85,.35)',padding:'6px 7px'}}>Verified</span>}
      </div>
      <div style={{marginTop:24,fontFamily:'Georgia,serif',fontSize:23,fontWeight:500,color:'#111318'}}>{profile.full_name || 'Creative Profile'}</div>
      <div style={{marginTop:7,fontSize:11,fontWeight:700,color:'#5b2634'}}>{profile.profession || 'Creative Professional'}</div>
      <div style={{marginTop:5,fontSize:10,color:'#77736b'}}>{profile.category || 'Creative'}</div>
      {(profile.city || profile.country) && <div style={{marginTop:5,fontSize:10,color:'#969188'}}>{[profile.city,profile.country].filter(Boolean).join(', ')}</div>}
      {profile.bio && <p style={{margin:'16px 0 0',fontSize:11,lineHeight:1.65,color:'#6b665e'}}>{profile.bio}</p>}
      <div style={{marginTop:20,fontSize:9,fontWeight:800,letterSpacing:'.12em',textTransform:'uppercase',color:'#111318'}}>View profile <span style={{color:'#b69a67'}}>→</span></div>
    </button>
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
    <section style={{maxWidth:1280,margin:'0 auto',padding:'0 5.5vw 120px'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'end',gap:30,borderBottom:'1px solid rgba(17,19,24,.13)',paddingBottom:28,marginBottom:40}}>
        <div>
          <div style={{fontSize:9,letterSpacing:'.25em',fontWeight:800,color:'#77736b'}}>03 / OUR CREATIVE COMMUNITY</div>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'clamp(42px,5vw,70px)',lineHeight:.95,fontWeight:400,letterSpacing:'-.05em',margin:'16px 0 0'}}>Meet the people<br/><em style={{color:'#5b2634'}}>behind the work.</em></h2>
        </div>
        <div style={{display:'flex',gap:4,border:'1px solid rgba(17,19,24,.14)',padding:3}}>
          {[['all','All'],['creatives','Creatives'],['businesses','Business']].map(([key,label])=><button key={key} onClick={()=>setFilter(key)} style={{padding:'11px 14px',fontSize:9,textTransform:'uppercase',letterSpacing:'.1em',background:filter===key?'#111318':'transparent',color:filter===key?'#fbfaf7':'#66625b',cursor:'pointer'}}>{label}</button>)}
        </div>
      </div>

      {loading && <div style={{padding:'55px 0',fontFamily:'Georgia,serif',fontSize:24,color:'#77736b'}}>Loading the creative community…</div>}
      {!loading && visible.length===0 && <div style={{padding:'55px 0',borderTop:'1px solid rgba(17,19,24,.1)',color:'#77736b'}}>No approved profiles match this search yet.</div>}
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
  return <div style={{marginBottom:72}}>
    <div style={{display:'flex',alignItems:'baseline',gap:12,marginBottom:20}}><h3 style={{fontFamily:'Georgia,serif',fontSize:28,fontWeight:400,margin:0}}>{title}</h3><span style={{fontSize:9,letterSpacing:'.15em',color:'#a09278'}}>{String(count).padStart(2,'0')}</span></div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(245px,1fr))',gap:14}}>{profiles.map(profile=><ProfileCard key={profile.id} profile={profile} onOpen={onOpen}/>)}</div>
  </div>
}

function ProfileModal({profile,onClose}) {
  return <div style={{position:'fixed',inset:0,zIndex:100,background:'rgba(17,19,24,.72)',backdropFilter:'blur(10px)',display:'grid',placeItems:'center',padding:24}} onClick={onClose}>
    <div onClick={e=>e.stopPropagation()} style={{width:'min(760px,100%)',maxHeight:'90vh',overflow:'auto',background:'#f4f1eb',padding:42,border:'1px solid rgba(255,255,255,.2)'}}>
      <div style={{display:'flex',justifyContent:'space-between',gap:20}}><div><div style={{fontFamily:'Georgia,serif',fontSize:42}}>{profile.full_name || 'Creative Profile'}</div><div style={{marginTop:8,color:'#5b2634',fontWeight:700,fontSize:12}}>{profile.profession || 'Creative Professional'}</div></div><button onClick={onClose} style={{fontSize:28,cursor:'pointer'}}>×</button></div>
      {profile.bio && <p style={{fontSize:14,lineHeight:1.8,color:'#625e57',marginTop:30}}>{profile.bio}</p>}
      <div style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:25}}>{[profile.category,[profile.city,profile.country].filter(Boolean).join(', ')].filter(Boolean).map((x,i)=><span key={i} style={{fontSize:9,letterSpacing:'.1em',textTransform:'uppercase',padding:'8px 10px',border:'1px solid rgba(17,19,24,.15)'}}>{x}</span>)}</div>
      <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:35}}>
        {profile.website && <a href={profile.website} target="_blank" rel="noreferrer" style={{padding:'13px 17px',background:'#111318',color:'#fff',fontSize:10}}>Website ↗</a>}
        {profile.instagram && <a href={profile.instagram} target="_blank" rel="noreferrer" style={{padding:'13px 17px',border:'1px solid rgba(17,19,24,.2)',fontSize:10}}>Instagram ↗</a>}
        {profile.portfolio_url && <a href={profile.portfolio_url} target="_blank" rel="noreferrer" style={{padding:'13px 17px',border:'1px solid rgba(17,19,24,.2)',fontSize:10}}>External work ↗</a>}
      </div>
    </div>
  </div>
}
