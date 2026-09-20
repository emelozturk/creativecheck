const SUPABASE_URL='https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY='sb_publishable_-sTc8wYEmrNKb-gtHc_qHA_cxq9M5lS'
const BASE='https://creativecheck.app'

const categories={
  photographers:{title:'Photographers',intro:'Discover photographers and photography professionals through CreativeCheck.',ids:[1],terms:['photographer','photography']},
  filmmakers:{title:'Filmmakers',intro:'Discover filmmakers, directors, producers and film professionals through CreativeCheck.',ids:[2],terms:['filmmaker','film maker','director','producer','film production','cinematographer']},
  designers:{title:'Designers',intro:'Discover designers and design professionals through CreativeCheck.',ids:[3,8,11,12],terms:['designer','design']},
  artists:{title:'Artists',intro:'Discover artists and visual arts professionals through CreativeCheck.',ids:[4],terms:['artist','illustrator','fine art','visual artist','ceramic','painting','mixed media']},
  musicians:{title:'Musicians',intro:'Discover musicians, composers and music professionals through CreativeCheck.',ids:[6],terms:['musician','composer','music','singer']},
  'creative-businesses':{title:'Creative Businesses',intro:'Discover creative businesses, studios, agencies and production companies through CreativeCheck.',ids:[13,14,15],terms:['agency','studio','production company','creative company','creative business','brand','organisation','organization']}
}

const resources={
  'find-creative-talent':{
    title:'How to Find Creative Talent for a Project',
    description:'A practical guide to finding photographers, filmmakers, designers, artists and other creative professionals for projects.',
    intro:'Finding the right creative person is easier when you start with a clear brief, the right discipline and a professional way to compare relevant portfolios.',
    sections:[
      ['Start with the creative requirement','Define the role, deliverables, location, dates, budget range and the type of creative expertise you actually need. A focused brief makes discovery more useful for everyone.'],
      ['Search by discipline and location','Explore photographers, filmmakers, designers, artists and musicians, then narrow discovery by location where relevant.'],
      ['Review the professional presence','Look at the person’s published biography, discipline, location and links to their existing website or portfolio.'],
      ['Make contact with a clear brief','Explain the project, expected contribution, timing and next step so both sides can decide whether the opportunity is suitable.']
    ]
  },
  'creative-portfolio-guide':{
    title:'How to Build a Strong Creative Professional Profile',
    description:'Practical guidance for photographers, filmmakers, designers, artists and other creatives building a professional online presence.',
    intro:'A strong creative profile should make it easy for someone to understand who you are, what you do and where they can see your work.',
    sections:[
      ['Lead with a clear professional identity','Use the name and discipline you want people to remember. A concise description is more useful than a long list of unrelated services.'],
      ['Connect your existing work','Link the website, portfolio, Instagram, Vimeo or other professional platforms where your work already lives.'],
      ['Add useful context','Location, experience, specialisms and a focused biography can help potential collaborators understand whether your work is relevant.'],
      ['Keep it current','Review your profile when your portfolio, location, discipline or professional links change.']
    ]
  },
  'creative-production-network':{
    title:'Creative Production Network: Photographers, Filmmakers, Studios and More',
    description:'Explore how a connected creative network can help professionals and businesses discover collaborators, projects and specialist services.',
    intro:'Creative production often requires a combination of photographers, filmmakers, designers, artists, producers, studios and specialist businesses.',
    sections:[
      ['One project can require many disciplines','A campaign, film, editorial or brand project may involve several creative roles.'],
      ['Professional discovery matters','Public professional profiles give collaborators a starting point for understanding someone’s discipline, location and existing online work.'],
      ['Businesses need the network too','Studios, agencies, production companies and creative businesses can use a public profile to explain what they do.'],
      ['Build relationships beyond a single project','A useful creative network can support future collaborations, referrals and opportunities.']
    ]
  },
  'creative-career-networking':{
    title:'Creative Career Networking: A Practical Guide',
    description:'A practical guide to building professional connections across the creative industries.',
    intro:'Creative networking is most useful when it is specific, professional and based on genuine relevance.',
    sections:[
      ['Make your professional identity easy to understand','Your name, discipline, location and a concise description should tell another professional what you do.'],
      ['Show the work you already have','Link to your existing portfolio and professional channels so people can move from discovery to evidence of your work.'],
      ['Network around genuine relevance','Look for people whose disciplines, projects or services genuinely overlap with what you are building.'],
      ['Keep your presence accurate','Update outdated links, descriptions and locations so professional discovery remains useful.']
    ]
  }
}

function esc(value){return String(value==null?'':value).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
function slugify(value){return String(value||'creative').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'')}
function profileUrl(p){return BASE+'/profile/'+slugify(p.full_name||'creative-profile')+'-'+p.id}
function safeUrl(value){try{const u=new URL(String(value||'').trim());return ['http:','https:'].includes(u.protocol)?u.toString():''}catch(e){return ''}}

async function getProfiles(){
  const url=SUPABASE_URL+'/rest/v1/profiles?status=eq.approved&select=id,full_name,profession,category,city,country,website,instagram,portfolio_url,bio,avatar_url,status,verified,created_at,discipline_id,profile_type&order=created_at.desc&limit=1000'
  const r=await fetch(url,{headers:{apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY}})
  if(!r.ok) throw new Error('profiles '+r.status)
  const data=await r.json()
  if(!Array.isArray(data)) throw new Error('invalid profiles response')
  return data
}
function matchesCategory(p,key){
  const c=categories[key]
  if(key==='creative-businesses' && String(p.profile_type||'').toLowerCase()==='business') return true
  const text=[p.profession,p.category,p.full_name].filter(Boolean).join(' ').toLowerCase()
  return c.ids.includes(Number(p.discipline_id)) || c.terms.some(function(t){return text.includes(t)})
}
function profileCard(p){
  const place=[p.city,p.country].filter(Boolean).join(', ')
  const meta=[p.profession,place].filter(Boolean).join(' · ')
  return '<li><a href="'+esc(profileUrl(p))+'"><strong>'+esc(p.full_name||'Creative professional')+'</strong></a>'+(meta?' — '+esc(meta):'')+'</li>'
}
function itemList(profiles){
  return {'@type':'ItemList','itemListElement':profiles.slice(0,50).map(function(p,i){return {'@type':'ListItem',position:i+1,name:p.full_name||'Creative professional',url:profileUrl(p)}})}
}
function breadcrumbs(items){
  return {'@type':'BreadcrumbList','itemListElement':items.map(function(item,i){const x={'@type':'ListItem',position:i+1,name:item.name};if(item.url)x.item=item.url;return x})}
}
function layout(o){
  return '<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(o.title)+'</title><meta name="description" content="'+esc(o.description)+'"><meta name="robots" content="'+(o.noindex?'noindex,nofollow':'index,follow,max-image-preview:large')+'"><link rel="canonical" href="'+esc(o.canonical)+'"><meta property="og:type" content="website"><meta property="og:site_name" content="CreativeCheck"><meta property="og:title" content="'+esc(o.title)+'"><meta property="og:description" content="'+esc(o.description)+'"><meta property="og:url" content="'+esc(o.canonical)+'"><meta name="twitter:card" content="summary"><meta name="twitter:title" content="'+esc(o.title)+'"><meta name="twitter:description" content="'+esc(o.description)+'"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><script type="application/ld+json">'+JSON.stringify(o.jsonld)+'</script></head><body><header><a href="/">CreativeCheck</a> · <a href="/creatives">Creative Professionals</a> · <a href="/creative-businesses">Creative Businesses</a> · <a href="/resources">Resources</a></header><main>'+o.body+'</main><footer><a href="/photographers">Photographers</a> · <a href="/filmmakers">Filmmakers</a> · <a href="/designers">Designers</a> · <a href="/artists">Artists</a> · <a href="/musicians">Musicians</a> · <a href="/creative-businesses">Creative Businesses</a> · <a href="/resources">Resources</a> · <a href="/?join=1">Create Your Profile</a></footer></body></html>'
}
function send(res,status,html,cache){
  res.status(status).setHeader('Cache-Control',cache||'public, s-maxage=3600, stale-while-revalidate=86400').setHeader('X-Content-Type-Options','nosniff').setHeader('Content-Type','text/html; charset=utf-8').send(html)
}
function locationLinks(profiles,key){
  const counts=new Map()
  profiles.forEach(function(p){
    if(!matchesCategory(p,key)||!String(p.city||'').trim()) return
    const city=String(p.city).trim(),slug=slugify(city),old=counts.get(slug)||{city:city,count:0}
    old.count++;counts.set(slug,old)
  })
  return Array.from(counts.entries()).filter(function(x){return x[1].count>=2}).sort(function(a,b){return b[1].count-a[1].count}).slice(0,20).map(function(x){return '<li><a href="/'+key+'/'+x[0]+'">'+esc(x[1].city)+'</a> ('+x[1].count+')</li>'}).join('')
}

export default async function handler(req,res){
  const path=String(req.query&&req.query.path||'/').replace(/\/$/,'')||'/'
  try{
    if(path==='/resources'){
      const links=Object.entries(resources).map(function(x){return '<li><a href="/resources/'+x[0]+'">'+esc(x[1].title)+'</a><p>'+esc(x[1].description)+'</p></li>'}).join('')
      const canonical=BASE+'/resources'
      const body='<h1>Creative Resources</h1><p>Practical guides for creative professionals and creative businesses covering professional visibility, discovery and networking.</p><ul>'+links+'</ul><p><a href="/creatives">Explore creative professionals</a> · <a href="/creative-businesses">Explore creative businesses</a></p>'
      const jsonld={'@context':'https://schema.org','@type':'CollectionPage','name':'Creative Resources','description':'Practical guides for creative professionals and creative businesses.','url':canonical}
      send(res,200,layout({title:'Creative Resources | CreativeCheck',description:'Practical guides for creative professionals and creative businesses.',canonical:canonical,body:body,jsonld:jsonld}))
      return
    }
    const rm=path.match(/^\/resources\/([^/]+)$/)
    if(rm && resources[rm[1]]){
      const resource=resources[rm[1]],canonical=BASE+'/resources/'+rm[1]
      const sections=resource.sections.map(function(s){return '<section><h2>'+esc(s[0])+'</h2><p>'+esc(s[1])+'</p></section>'}).join('')
      const body='<article><p><a href="/resources">CreativeCheck Resources</a></p><h1>'+esc(resource.title)+'</h1><p>'+esc(resource.intro)+'</p>'+sections+'<p><a href="/creatives">Explore creative professionals</a> · <a href="/creative-businesses">Explore creative businesses</a> · <a href="/?join=1">Create your free profile</a></p></article>'
      const jsonld={'@context':'https://schema.org','@type':'Article','headline':resource.title,'description':resource.description,'url':canonical,'author':{'@type':'Organization','name':'CreativeCheck','url':BASE},'publisher':{'@type':'Organization','name':'CreativeCheck','url':BASE},'mainEntityOfPage':canonical}
      send(res,200,layout({title:resource.title+' | CreativeCheck',description:resource.description,canonical:canonical,body:body,jsonld:jsonld}))
      return
    }
    if(path==='/creatives'){
      const profiles=await getProfiles(),canonical=BASE+'/creatives'
      const body='<h1>Creative Professionals</h1><p>Discover photographers, filmmakers, designers, artists, musicians and other creative professionals through CreativeCheck.</p><h2>Explore creative categories</h2><ul><li><a href="/photographers">Photographers</a></li><li><a href="/filmmakers">Filmmakers</a></li><li><a href="/designers">Designers</a></li><li><a href="/artists">Artists</a></li><li><a href="/musicians">Musicians</a></li><li><a href="/creative-businesses">Creative Businesses</a></li></ul><h2>Featured profiles</h2><ul>'+profiles.slice(0,50).map(profileCard).join('')+'</ul>'
      const jsonld={'@context':'https://schema.org','@type':'CollectionPage','name':'Creative Professionals','url':canonical,'mainEntity':itemList(profiles),'breadcrumb':breadcrumbs([{name:'CreativeCheck',url:BASE},{name:'Creative Professionals',url:canonical}])}
      send(res,200,layout({title:'Creative Professionals | CreativeCheck',description:'Discover creative professionals worldwide on CreativeCheck.',canonical:canonical,body:body,jsonld:jsonld}))
      return
    }
    const cm=path.match(/^\/(photographers|filmmakers|designers|artists|musicians|creative-businesses)(?:\/([^/]+))?$/)
    if(cm){
      const key=cm[1],locationSlug=cm[2],c=categories[key],profiles=await getProfiles()
      let results=profiles.filter(function(p){return matchesCategory(p,key)})
      const location=locationSlug?decodeURIComponent(locationSlug).replace(/-/g,' '):''
      if(location) results=results.filter(function(p){return String(p.city||'').trim().toLowerCase()===location.toLowerCase()})
      if(location && results.length<2){
        res.setHeader('X-Robots-Tag','noindex')
        send(res,404,'<html><head><meta name="robots" content="noindex,nofollow"><title>Location not found | CreativeCheck</title></head><body><h1>No matching profiles found</h1><a href="/creatives">Explore CreativeCheck</a></body></html>','no-store')
        return
      }
      const nice=location.replace(/\b\w/g,function(x){return x.toUpperCase()}),name=location?c.title+' in '+nice:c.title
      const canonical=BASE+'/'+key+(locationSlug?'/'+locationSlug:'')
      const description=location?'Discover '+c.title.toLowerCase()+' in '+nice+' on CreativeCheck. Explore public professional profiles and creative connections.':c.intro
      const list=results.length?'<h2>Profiles</h2><ul>'+results.slice(0,100).map(profileCard).join('')+'</ul>':'<p>Explore CreativeCheck to discover approved creative professionals and businesses.</p>'
      const locations=locationLinks(profiles,key),locationSection=!locationSlug&&locations?'<h2>Explore by location</h2><ul>'+locations+'</ul>':''
      const related=Object.entries(categories).filter(function(x){return x[0]!==key}).map(function(x){return '<li><a href="/'+x[0]+'">'+esc(x[1].title)+'</a></li>'}).join('')
      const body='<h1>'+esc(name)+'</h1><p>'+esc(description)+'</p><p>CreativeCheck is a public discovery platform for creative professionals and creative businesses.</p>'+list+locationSection+'<h2>Explore related creative categories</h2><ul>'+related+'</ul><p><a href="/creatives">Explore all creative professionals</a></p>'
      const crumbs=[{name:'CreativeCheck',url:BASE},{name:c.title,url:BASE+'/'+key}]
      if(location) crumbs.push({name:nice,url:canonical})
      const jsonld={'@context':'https://schema.org','@type':'CollectionPage','name':name,'description':description,'url':canonical,'mainEntity':itemList(results),'breadcrumb':breadcrumbs(crumbs)}
      send(res,200,layout({title:name+' | CreativeCheck',description:description,canonical:canonical,body:body,jsonld:jsonld}))
      return
    }
    const pm=path.match(/^\/profile\/([^/]+)$/)
    if(pm){
      const raw=pm[1],match=raw.match(/-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i),id=match&&match[1]
      const profiles=await getProfiles(),p=id?profiles.find(function(x){return String(x.id).toLowerCase()===id.toLowerCase()}):null
      if(!p){res.setHeader('X-Robots-Tag','noindex');send(res,404,'<html><head><meta name="robots" content="noindex,nofollow"><title>Profile not found | CreativeCheck</title></head><body><h1>CreativeCheck profile not found</h1><a href="/creatives">Explore CreativeCheck</a></body></html>','no-store');return}
      const name=String(p.full_name||'Creative professional').trim(),profession=String(p.profession||p.category||'Creative professional').trim(),place=[p.city,p.country].filter(Boolean).join(', '),canonical=profileUrl(p)
      const links=[safeUrl(p.website),safeUrl(p.instagram),safeUrl(p.portfolio_url)].filter(Boolean)
      const type=String(p.profile_type||'').toLowerCase()==='business'?'Organization':'Person'
      const entity={'@type':type,name:name,url:canonical}
      if(p.profession && type==='Person') entity.jobTitle=p.profession
      if(place) entity.address={'@type':'PostalAddress',addressLocality:p.city||undefined,addressCountry:p.country||undefined}
      if(p.bio) entity.description=String(p.bio).trim().slice(0,500)
      if(p.avatar_url){const image=safeUrl(p.avatar_url);if(image)entity.image=image}
      if(links.length)entity.sameAs=Array.from(new Set(links))
      const description='Discover '+name+', '+profession+(place?' in '+place:'')+', on CreativeCheck.'
      const bio=p.bio?'<p>'+esc(p.bio)+'</p>':''
      const external=links.map(function(u){return '<li><a href="'+esc(u)+'" rel="nofollow noopener noreferrer">'+esc(new URL(u).hostname.replace(/^www\./,''))+'</a></li>'}).join('')
      const body='<h1>'+esc(name)+'</h1><p>'+esc(profession)+(place?' · '+esc(place):'')+'</p>'+bio+(external?'<h2>Professional links</h2><ul>'+external+'</ul>':'')+'<p><a href="/creatives">Explore more creative professionals</a></p>'
      const jsonld={'@context':'https://schema.org','@type':'ProfilePage','name':name+' | CreativeCheck','url':canonical,'mainEntity':entity,'breadcrumb':breadcrumbs([{name:'CreativeCheck',url:BASE},{name:type==='Organization'?'Creative Businesses':'Creative Professionals',url:type==='Organization'?BASE+'/creative-businesses':BASE+'/creatives'},{name:name,url:canonical}])}
      send(res,200,layout({title:name+' | CreativeCheck',description:description,canonical:canonical,body:body,jsonld:jsonld}))
      return
    }
    res.setHeader('X-Robots-Tag','noindex')
    send(res,404,'<html><head><meta name="robots" content="noindex,nofollow"><title>Page not found | CreativeCheck</title></head><body><h1>CreativeCheck page not found</h1><a href="/">Return to CreativeCheck</a></body></html>','no-store')
  }catch(error){
    console.error('SEO renderer error:',error)
    res.setHeader('X-Robots-Tag','noindex')
    send(res,503,'<html><head><meta name="robots" content="noindex,nofollow"><title>Temporary server error | CreativeCheck</title></head><body><h1>CreativeCheck</h1><p>Temporary server error.</p></body></html>','no-store')
  }
}
