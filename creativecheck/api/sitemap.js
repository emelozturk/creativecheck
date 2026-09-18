const SUPABASE_URL='https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY='sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'
const BASE='https://creativecheck.app'

const categoryTerms={
  photographers:['photographer','photography'],
  filmmakers:['filmmaker','film maker','director','producer','film production'],
  designers:['designer','design'],
  artists:['artist','illustrator','fine art','visual artist'],
  musicians:['musician','composer','music','singer'],
  'creative-businesses':['agency','studio','production company','creative company','creative business','brand','organisation','organization']
}
const disciplineMap={photographers:[1],filmmakers:[2],designers:[3,8,11,12],artists:[4],musicians:[6], 'creative-businesses':[13,14,15]}
const slugify=v=>String(v||'creative').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')
const esc=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&apos;')

function matchesCategory(p,key){
  if(key==='creative-businesses' && String(p.profile_type||'').toLowerCase()==='business') return true
  const text=[p.profession,p.category,p.full_name].filter(Boolean).join(' ').toLowerCase()
  return (disciplineMap[key]||[]).includes(Number(p.discipline_id)) || (categoryTerms[key]||[]).some(t=>text.includes(t))
}

export default async function handler(req,res){
  try{
    const response=await fetch(`${SUPABASE_URL}/rest/v1/profiles?status=eq.approved&select=id,full_name,profession,category,city,country,discipline_id,profile_type,created_at&order=created_at.desc&limit=1000`,{headers:{apikey:SUPABASE_KEY,Authorization:`Bearer ${SUPABASE_KEY}`}})
    if(!response.ok) throw new Error(`profiles ${response.status}`)
    const profiles=await response.json()
    if(!Array.isArray(profiles)) throw new Error('invalid profiles response')

    const urls=[{loc:`${BASE}/`,priority:'1.0',changefreq:'weekly'},{loc:`${BASE}/creatives`,priority:'0.9',changefreq:'weekly'}]
    Object.keys(categoryTerms).forEach(k=>urls.push({loc:`${BASE}/${k}`,priority:'0.8',changefreq:'weekly'}))
    const locationCounts=new Map()

    profiles.forEach(p=>{
      if(!p.id) return
      const slug=`${slugify(p.full_name||'creative-profile')}-${p.id}`
      urls.push({loc:`${BASE}/profile/${slug}`,priority:'0.7',changefreq:'monthly'})
      Object.keys(categoryTerms).forEach(k=>{
        if(matchesCategory(p,k) && String(p.city||'').trim()){ const key=`${k}|${slugify(p.city)}`; locationCounts.set(key,(locationCounts.get(key)||0)+1) }
      })
    })

    locationCounts.forEach((count,key)=>{const [k,loc]=key.split('|');if(k&&loc&&count>=2)urls.push({loc:`${BASE}/${k}/${loc}`,priority:'0.6',changefreq:'weekly'})})
    const unique=[...new Map(urls.map(u=>[u.loc,u])).values()]
    const xml=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${unique.map(u=>`<url><loc>${esc(u.loc)}</loc><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('')}</urlset>`
    res.statusCode=200;res.setHeader('Content-Type','application/xml; charset=utf-8');res.setHeader('Cache-Control','public, s-maxage=3600, stale-while-revalidate=86400');res.setHeader('X-Content-Type-Options','nosniff');res.end(xml)
  }catch(e){console.error('Sitemap error:',e);res.statusCode=503;res.setHeader('Content-Type','application/xml; charset=utf-8');res.setHeader('Cache-Control','no-store');res.end('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>')}
}
