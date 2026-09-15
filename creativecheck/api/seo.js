const SUPABASE_URL='https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY='sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'
const BASE='https://creativecheck.app'

const categories={
  photographers:{title:'Photographers',intro:'Discover photographers and photography professionals through CreativeCheck.',ids:[1]},
  filmmakers:{title:'Filmmakers',intro:'Discover filmmakers, directors, producers and film professionals through CreativeCheck.',ids:[2]},
  designers:{title:'Designers',intro:'Discover designers and design professionals through CreativeCheck.',ids:[3,8,11,12]},
  artists:{title:'Artists',intro:'Discover artists and visual arts professionals through CreativeCheck.',ids:[4]},
  musicians:{title:'Musicians',intro:'Discover musicians, composers and music professionals through CreativeCheck.',ids:[6]},
  'creative-businesses':{title:'Creative Businesses',intro:'Discover creative businesses, studios, agencies and production companies through CreativeCheck.',ids:[13,14,15]}
}
const terms={
  photographers:['photographer','photography'],filmmakers:['filmmaker','film maker','director','producer','film production'],designers:['designer','design'],artists:['artist','illustrator','fine art','visual artist'],musicians:['musician','composer','music','singer'],'creative-businesses':['agency','studio','production company','creative company','creative business','brand','organisation','organization']
}
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))
const slugify=value=>String(value||'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')
const safeUrl=value=>{try{const u=new URL(String(value||'').trim());return ['http:','https:'].includes(u.protocol)?u.toString():''}catch{return ''}}
const profileUrl=p=>`${BASE}/profile/${slugify(p.full_name||'creative-profile')}-${p.id}`

async function getProfiles(){
  const r=await fetch(`${SUPABASE_URL}/rest/v1/profiles?status=eq.approved&select=id,full_name,profession,category,city,country,website,instagram,portfolio_url,bio,avatar_url,status,verified,created_at,discipline_id,profile_type&order=created_at.desc&limit=1000`,{headers:{apikey:SUPABASE_KEY,Authorization:`Bearer ${SUPABASE_KEY}`}})
  if(!r.ok) throw new Error(`profiles ${r.status}`)
  const data=await r.json()
  return Array.isArray(data)?data:[]
}
function matchesCategory(p,key){
  const c=categories[key]
  const text=[p.profession,p.category,p.full_name].filter(Boolean).join(' ').toLowerCase()
  return c.ids.includes(Number(p.discipline_id)) || (terms[key]||[]).some(t=>text.includes(t))
}
function layout({title,description,canonical,body,jsonld,noindex=false}){
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="${noindex?'noindex,nofollow':'index,follow,max-image-preview:large'}"><link rel="canonical" href="${esc(canonical)}"><meta property="og:type" content="website"><meta property="og:site_name" content="CreativeCheck"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(canonical)}"><script type="application/ld+json">${JSON.stringify(jsonld)}</script></head><body><header><a href="/">CreativeCheck</a> · <a href="/creatives">Creative Professionals</a> · <a href="/creative-businesses">Creative Businesses</a></header><main>${body}</main><footer><a href="/photographers">Photographers</a> · <a href="/filmmakers">Filmmakers</a> · <a href="/designers">Designers</a> · <a href="/artists">Artists</a> · <a href="/musicians">Musicians</a> · <a href="/creative-businesses">Creative Businesses</a> · <a href="/?join=1">Create Your Profile</a></footer></body></html>`
}
function itemList(profiles){return {'@type':'ItemList',itemListElement:profiles.slice(0,50).map((p,i)=>({'@type':'ListItem',position:i+1,name:p.full_name||'Creative professional',url:profileUrl(p)}))}}
function profileCard(p){
  const place=[p.city,p.country].filter(Boolean).join(', ')
  const meta=[p.profession,place].filter(Boolean).join(' · ')
  return `<li><a href="${esc(profileUrl(p))}"><strong>${esc(p.full_name||'Creative professional')}</strong></a>${meta?` — ${esc(meta)}`:''}</li>`
}
function breadcrumbList(items){return {'@type':'BreadcrumbList',itemListElement:items.map((item,i)=>{const x={'@type':'ListItem',position:i+1,name:item.name};if(item.url)x.item=item.url;return x})}}

export default async function handler(req,res){
  const path=String((req.query&&req.query.path)||'/').replace(/\/$/,'')||'/'
  try{
    if(path==='/creatives'){
      const profiles=await getProfiles()
      const body=`<h1>Creative Professionals</h1><p>Discover photographers, filmmakers, designers, artists, musicians and other creative professionals through CreativeCheck.</p><h2>Explore creative categories</h2><ul><li><a href="/photographers">Photographers</a></li><li><a href="/filmmakers">Filmmakers</a></li><li><a href="/designers">Designers</a></li><li><a href="/artists">Artists</a></li><li><a href="/musicians">Musicians</a></li></ul><h2>Featured profiles</h2><ul>${profiles.slice(0,50).map(profileCard).join('')}</ul>`
      const canonical=`${BASE}/creatives`
      const jsonld={'@context':'https://schema.org','@type':'CollectionPage',name:'Creative Professionals',url:canonical,mainEntity:itemList(profiles),breadcrumb:breadcrumbList([{name:'CreativeCheck',url:BASE},{name:'Creative Professionals',url:canonical}])}
      const html=layout({title:'Creative Professionals | CreativeCheck',description:'Discover creative professionals worldwide on CreativeCheck.',canonical,body,jsonld})
      res.status(200).setHeader('Cache-Control','public, s-maxage=3600, stale-while-revalidate=86400').send(html);return
    }

    const match=path.match(/^\/(photographers|filmmakers|designers|artists|musicians|creative-businesses)(?:\/([^/]+))?$/)
    if(match){
      const key=match[1],locationSlug=match[2],c=categories[key]
      const profiles=await getProfiles()
      let results=profiles.filter(p=>matchesCategory(p,key))
      const location=locationSlug?decodeURIComponent(locationSlug).replace(/-/g,' '):''
      if(location) results=results.filter(p=>String(p.city||'').trim().toLowerCase()===location.toLowerCase())
      const nice=location.replace(/\b\w/g,c=>c.toUpperCase())
      const name=location?`${c.title} in ${nice}`:c.title
      const canonical=`${BASE}/${key}${locationSlug?`/${locationSlug}`:''}`
      const description=location?`Discover ${c.title.toLowerCase()} in ${nice} on CreativeCheck. Explore public professional profiles and creative connections.`:c.intro
      const list=results.length?`<h2>Profiles</h2><ul>${results.slice(0,100).map(profileCard).join('')}</ul>`:'<p>Explore CreativeCheck to discover approved creative professionals and businesses.</p>'
      const body=`<h1>${esc(name)}</h1><p>${esc(description)}</p><p>CreativeCheck is a public discovery platform for creative professionals and creative businesses.</p>${list}<p><a href="/creatives">Explore all creative professionals</a></p>`
      const crumbs=[{name:'CreativeCheck',url:BASE},{name:c.title,url:`${BASE}/${key}`}];if(location)crumbs.push({name:nice,url:canonical})
      const jsonld={'@context':'https://schema.org','@type':'CollectionPage',name,description,url:canonical,mainEntity:itemList(results),breadcrumb:breadcrumbList(crumbs)}
      const html=layout({title:`${name} | CreativeCheck`,description,canonical,body,jsonld})
      res.status(200).setHeader('Cache-Control','public, s-maxage=3600, stale-while-revalidate=86400').send(html);return
    }

    const pm=path.match(/^\/profile\/([^/]+)$/)
    if(pm){
      const raw=pm[1]
      const idMatch=raw.match(/-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i)
      const id=idMatch?.[1]
      const profiles=await getProfiles()
      const p=id?profiles.find(x=>String(x.id).toLowerCase()===id.toLowerCase()):null
      if(!p){res.status(404).setHeader('X-Robots-Tag','noindex').send('<!doctype html><html lang="en"><head><meta name="robots" content="noindex,nofollow"><title>Profile not found | CreativeCheck</title></head><body><h1>CreativeCheck profile not found</h1><p><a href="/creatives">Explore CreativeCheck</a></p></body></html>');return}
      const name=String(p.full_name||'Creative professional').trim(),place=[p.city,p.country].filter(Boolean).join(', '),profession=String(p.profession||p.category||'Creative professional').trim()
      const canonical=profileUrl(p)
      if(path!==new URL(canonical).pathname){res.status(301).setHeader('Location',canonical).setHeader('Cache-Control','public, max-age=86400').send('');return}
      const description=`Discover ${name}, ${profession}${place?` in ${place}`:''}, on CreativeCheck.`
      const type=String(p.profile_type||'').toLowerCase()==='business'?'Organization':'Person'
      const externalLinks=[safeUrl(p.website),safeUrl(p.instagram),safeUrl(p.portfolio_url)].filter(Boolean)
      const entity={'@type':type,name,url:canonical}
      if(place) entity.address={'@type':'PostalAddress',addressLocality:p.city||undefined,addressCountry:p.country||undefined}
      if(p.profession) entity.jobTitle=p.profession
      if(p.bio) entity.description=String(p.bio).trim().slice(0,500)
      if(p.avatar_url){const image=safeUrl(p.avatar_url);if(image)entity.image=image}
      if(externalLinks.length)entity.sameAs=[...new Set(externalLinks)]
      const crumbs=[{name:'CreativeCheck',url:BASE},{name:type==='Organization'?'Creative Businesses':'Creative Professionals',url:type==='Organization'?`${BASE}/creative-businesses`:`${BASE}/creatives`},{name,url:canonical}]
      const links=externalLinks.length?`<h2>Professional links</h2><ul>${externalLinks.map(u=>`<li><a href="${esc(u)}" rel="nofollow noopener noreferrer">${esc(new URL(u).hostname.replace(/^www\./,''))}</a></li>`).join('')}</ul>`:''
      const bio=p.bio?`<p>${esc(String(p.bio).trim())}</p>`:''
      const body=`<h1>${esc(name)}</h1><p>${esc(profession)}${place?` · ${esc(place)}`:''}</p>${bio}<p>Public professional profile on CreativeCheck.</p>${links}<p><a href="/creatives">Explore more creative professionals</a></p>`
      const jsonld={'@context':'https://schema.org','@type':'ProfilePage',name:`${name} | CreativeCheck`,url:canonical,mainEntity:entity,breadcrumb:breadcrumbList(crumbs)}
      const html=layout({title:`${name} | CreativeCheck`,description,canonical,body,jsonld})
      res.status(200).setHeader('Cache-Control','public, s-maxage=3600, stale-while-revalidate=86400').send(html);return
    }
    res.status(404).setHeader('X-Robots-Tag','noindex').send('<!doctype html><html lang="en"><head><meta name="robots" content="noindex,nofollow"><title>Page not found | CreativeCheck</title></head><body><h1>CreativeCheck page not found</h1><p><a href="/">Return to CreativeCheck</a></p></body></html>')
  }catch(error){console.error('SEO renderer error:',error);res.status(500).setHeader('X-Robots-Tag','noindex').send('<!doctype html><html lang="en"><head><meta name="robots" content="noindex,nofollow"><title>Temporary server error | CreativeCheck</title></head><body><h1>CreativeCheck</h1><p>Temporary server error.</p></body></html>')}
}
