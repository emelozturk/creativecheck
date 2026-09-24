import React, {useEffect, useMemo, useState} from 'react'

const SUPABASE_URL='https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY='sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'

function getProfileId(){
  const path=window.location.pathname
  const match=path.match(/-(\d+)\/?$/)
  return match?.[1] || new URLSearchParams(window.location.search).get('id')
}

export default function PublicProfilePage(){
  const [profile,setProfile]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState('')
  const id=useMemo(getProfileId,[])

  useEffect(()=>{
    if(!id){setError('Profile not found.');setLoading(false);return}
    fetch(SUPABASE_URL+'/rest/v1/profiles?id=eq.'+encodeURIComponent(id)+'&status=eq.approved&select=id,full_name,profession,category,city,country,website,instagram,portfolio_url,bio,avatar_url,profile_type,verified', {
      headers:{apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY}
    })
      .then(r=>{if(!r.ok) throw new Error('Unable to load profile');return r.json()})
      .then(rows=>{if(!rows?.length) throw new Error('Profile not found.');setProfile(rows[0])})
      .catch(e=>setError(e.message||'Unable to load profile.'))
      .finally(()=>setLoading(false))
  },[id])

  if(loading) return <main className="profile-page"><div className="profile-shell"><p className="profile-muted">Loading profile…</p></div></main>
  if(error) return <main className="profile-page"><div className="profile-shell"><a className="profile-brand" href="/">CREATIVECHECK</a><div className="profile-empty"><h1>Profile unavailable</h1><p>{error}</p><a href="/">Back to CreativeCheck</a></div></div></main>

  const links=[
    ['Website',profile.website],
    ['Portfolio',profile.portfolio_url],
    ['Instagram',profile.instagram]
  ].filter(([,url])=>url)

  return <main className="profile-page">
    <div className="profile-shell">
      <header className="profile-header">
        <a className="profile-brand" href="/">CREATIVECHECK</a>
        <a className="profile-discover" href="/">Discover creatives →</a>
      </header>
      <section className="profile-card">
        <div className="profile-avatar">
          {profile.avatar_url ? <img src={profile.avatar_url} alt={profile.full_name||'CreativeCheck profile'}/> : <span>{(profile.full_name||'C').trim().charAt(0).toUpperCase()}</span>}
        </div>
        <div className="profile-kicker">{profile.profile_type==='business'?'CREATIVE BUSINESS':'CREATIVE PROFESSIONAL'}</div>
        <h1>{profile.full_name||'Creative professional'}</h1>
        {profile.profession && <p className="profile-role">{profile.profession}</p>}
        {(profile.city||profile.country) && <p className="profile-location">{[profile.city,profile.country].filter(Boolean).join(', ')}</p>}
        {profile.verified && <span className="profile-verified">VERIFIED PROFILE</span>}
        {profile.bio && <p className="profile-bio">{profile.bio}</p>}
        {links.length>0 && <div className="profile-links">{links.map(([label,url])=><a key={label} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</div>}
      </section>
      <section className="profile-upgrade">
        <div><span className="profile-kicker">CREATIVECHECK</span><h2>Want more from your profile?</h2><p>Upgrade when you are ready for increased visibility, professional connections and more ways to grow on CreativeCheck.</p></div>
        <a href="/#membership">Upgrade to Premium →</a>
      </section>
      <footer className="profile-footer">Discover · Connect · Grow</footer>
    </div>
  </main>
}

export const profilePageStyles = `
:root{font-family:Plus Jakarta Sans,Arial,sans-serif;color:#10213f;background:#f7f8fb}
.profile-page{min-height:100vh;padding:32px 20px 60px;background:linear-gradient(180deg,#f7f8fb 0%,#fff 60%)}
.profile-shell{max-width:980px;margin:0 auto}
.profile-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:70px}
.profile-brand{font-weight:900;letter-spacing:.08em;text-decoration:none;color:#10213f}
.profile-discover{color:#10213f;text-decoration:none;font-size:14px}
.profile-card{background:#fff;border:1px solid #e7eaf0;padding:64px;border-radius:4px;box-shadow:0 18px 50px rgba(16,33,63,.07)}
.profile-avatar{width:116px;height:116px;border-radius:50%;overflow:hidden;background:#e9eef5;display:grid;place-items:center;margin-bottom:30px}
.profile-avatar img{width:100%;height:100%;object-fit:cover}
.profile-avatar span{font-size:42px;font-weight:800;color:#10213f}
.profile-kicker{font-size:11px;font-weight:800;letter-spacing:.15em;color:#60708b}
.profile-card h1{font-size:clamp(40px,6vw,76px);line-height:.95;margin:12px 0 14px;letter-spacing:-.045em}
.profile-role{font-size:20px;margin:0 0 6px}
.profile-location{color:#60708b;margin:0}
.profile-verified{display:inline-block;margin-top:18px;padding:7px 10px;border:1px solid #dce3ec;font-size:10px;letter-spacing:.12em;font-weight:800}
.profile-bio{max-width:720px;font-size:18px;line-height:1.7;margin:42px 0 0;color:#394963}
.profile-links{display:flex;gap:12px;flex-wrap:wrap;margin-top:34px}
.profile-links a,.profile-upgrade>a{padding:13px 18px;border:1px solid #10213f;color:#10213f;text-decoration:none;font-weight:700;font-size:13px}
.profile-upgrade{margin-top:28px;padding:34px 38px;background:#10213f;color:#fff;display:flex;justify-content:space-between;gap:28px;align-items:center}
.profile-upgrade h2{font-size:28px;margin:7px 0}
.profile-upgrade p{max-width:620px;color:#dbe3ef;line-height:1.6;margin:0}
.profile-upgrade>a{border-color:#fff;color:#fff;white-space:nowrap}
.profile-empty{padding:100px 0}.profile-empty h1{font-size:48px}.profile-empty a{color:#10213f}
.profile-muted,.profile-footer{color:#60708b}.profile-footer{text-align:center;padding-top:45px;font-size:12px;letter-spacing:.12em}
@media(max-width:700px){.profile-page{padding:22px 16px 40px}.profile-header{margin-bottom:40px}.profile-card{padding:34px 24px}.profile-card h1{font-size:44px}.profile-upgrade{display:block;padding:28px 24px}.profile-upgrade>a{display:inline-block;margin-top:22px}}
`
