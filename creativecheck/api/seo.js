const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://gnqrakuhmzchwherombt.supabase.co'
const SUPABASE_KEY = process.env.SUPABASE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY
const BASE = 'https://creativecheck.app'

const categories = {
  photographers: { title: 'Photographers', terms: ['photographer', 'photography'], intro: 'Discover photographers and photography professionals through CreativeCheck.' },
  filmmakers: { title: 'Filmmakers', terms: ['filmmaker', 'film maker', 'cinematographer', 'film editor', 'director', 'producer'], intro: 'Discover filmmakers, directors, producers and film professionals through CreativeCheck.' },
  designers: { title: 'Designers', terms: ['designer', 'design'], intro: 'Discover designers and design professionals through CreativeCheck.' },
  artists: { title: 'Artists', terms: ['artist', 'visual art', 'illustrator', 'painter', 'sculptor'], intro: 'Discover artists and visual arts professionals through CreativeCheck.' },
  musicians: { title: 'Musicians', terms: ['musician', 'music', 'composer', 'singer', 'producer'], intro: 'Discover musicians, composers and music professionals through CreativeCheck.' },
  'creative-businesses': { title: 'Creative Businesses', terms: [], intro: 'Discover creative businesses, studios, agencies and production companies through CreativeCheck.' }
}
const disciplineIds = { photographers: [1], filmmakers: [2], designers: [3, 8, 11, 12], artists: [4], musicians: [6] }

function esc(value = '') { return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])) }
function slugify(value) { return String(value || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') }
function profileSlug(p) { return `${slugify(p.full_name || 'creative-profile')}-${p.id}` }
function categoryMatch(p, key) {
  if (key === 'creative-businesses') return p.profile_type === 'business'
  const ids = disciplineIds[key] || []
  if (ids.includes(Number(p.discipline_id))) return true
  const text = [p.profession, p.category].filter(Boolean).join(' ').toLowerCase()
  return (categories[key]?.terms || []).some(t => text.includes(t))
}
async function getProfiles() {
  if (!SUPABASE_KEY) throw new Error('Missing Supabase server key')
  const r = await fetch(`${SUPABASE_URL}/rest/v1/profiles?status=eq.approved&select=id,full_name,profession,category,city,country,discipline_id,profile_type,bio,website,instagram,portfolio_url&order=created_at.desc&limit=100` , { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } })
  if (!r.ok) throw new Error(`Supabase ${r.status}`)
  return await r.json()
}
function layout({ title, description, canonical, body, jsonld }) {
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${esc(canonical)}"><meta property="og:type" content="website"><meta property="og:site_name" content="CreativeCheck"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(canonical)}"><script type="application/ld+json">${JSON.stringify(jsonld)}</script></head><body><header><a href="/">CreativeCheck</a> · <a href="/creatives">Creative Professionals</a> · <a href="/creative-businesses">Creative Businesses</a></header><main>${body}</main><footer><a href="/photographers">Photographers</a> · <a href="/filmmakers">Filmmakers</a> · <a href="/designers">Designers</a> · <a href="/artists">Artists</a> · <a href="/musicians">Musicians</a> · <a href="/?join=1">Create Your Profile</a></footer><script type="module" crossorigin src="/assets/index-6713e4d2.js"></script></body></html>`
}
function profileCard(p) { return `<article><h2><a href="/profile/${esc(profileSlug(p))}">${esc(p.full_name || 'Creative Profile')}</a></h2><p>${esc(p.profession || 'Creative Professional')}</p><p>${esc([p.city, p.country].filter(Boolean).join(', '))}</p></article>` }
function directoryHtml(profiles, key, location) {
  const cat = categories[key]
  const nice = location ? location.split(/\s+/).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ') : ''
  const title = location ? `${cat.title} in ${nice} | CreativeCheck` : `${cat.title} | CreativeCheck`
  const description = location ? `Discover ${cat.title.toLowerCase()} in ${nice} on CreativeCheck. Explore public professional profiles and creative connections.` : cat.intro
  const canonical = `${BASE}/${key}${location ? `/${slugify(location)}` : ''}`
  const filtered = profiles.filter(p => categoryMatch(p, key) && (!location || [p.city, p.country].filter(Boolean).join(' ').toLowerCase().includes(location.toLowerCase())))
  const cities = [...new Set(profiles.filter(p => categoryMatch(p, key)).map(p => p.city).filter(Boolean))].sort()
  const locationLinks = cities.slice(0, 50).map(c => `<a href="/${key}/${esc(slugify(c))}">${esc(cat.title)} in ${esc(c)}</a>`).join(' · ')
  const cards = filtered.map(profileCard).join('') || '<p>No approved profiles are currently listed for this location.</p>'
  const body = `<h1>${esc(location ? `${cat.title} in ${nice}` : cat.title)}</h1><p>${esc(description)}</p>${!location && locationLinks ? `<nav><strong>Explore by location:</strong> ${locationLinks}</nav>` : ''}<section>${cards}</section>`
  return layout({ title, description, canonical, body, jsonld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: location ? `${cat.title} in ${nice}` : cat.title, description, url: canonical } })
}

export default async function handler(req, res) {
  const path = String(req.query.path || '/').replace(/\/$/, '') || '/'
  try {
    const profiles = await getProfiles()
    if (path === '/creatives') {
      const creative = profiles.filter(p => p.profile_type === 'creative')
      const body = `<h1>Creative Professionals</h1><p>Discover photographers, filmmakers, designers, artists, musicians and other creative professionals through CreativeCheck.</p>${creative.map(profileCard).join('')}`
      const html = layout({ title: 'Creative Professionals | CreativeCheck', description: 'Discover creative professionals worldwide on CreativeCheck.', canonical: `${BASE}/creatives`, body, jsonld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Creative Professionals', url: `${BASE}/creatives` } })
      res.status(200).setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400').send(html); return
    }
    const match = path.match(/^\/(photographers|filmmakers|designers|artists|musicians|creative-businesses)(?:\/([^/]+))?$/)
    if (match) {
      const html = directoryHtml(profiles, match[1], match[2] ? decodeURIComponent(match[2]).replace(/-/g, ' ') : '')
      res.status(200).setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400').send(html); return
    }
    const pm = path.match(/^\/profile\/([^/]+)$/)
    if (pm) {
      const idMatch = pm[1].match(/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/i)
      const p = idMatch ? profiles.find(x => x.id === idMatch[1]) : null
      if (!p) { res.status(404).send('<h1>CreativeCheck profile not found</h1><p><a href="/creatives">Explore creative professionals</a></p>'); return }
      const canonical = `${BASE}/profile/${profileSlug(p)}`, title = `${p.full_name || 'Creative Professional'} | CreativeCheck`, description = `${p.profession || 'Creative professional'}${p.city ? ` in ${p.city}` : ''}${p.country ? `, ${p.country}` : ''}. Discover this public professional profile on CreativeCheck.`
      const links = [p.website, p.instagram, p.portfolio_url].filter(Boolean).map(u => `<a href="${esc(u)}">${esc(u)}</a>`).join(' · ')
      const body = `<h1>${esc(p.full_name || 'Creative Professional')}</h1><h2>${esc(p.profession || 'Creative Professional')}</h2><p>${esc([p.city, p.country].filter(Boolean).join(', '))}</p>${p.bio ? `<p>${esc(p.bio)}</p>` : ''}${links ? `<p>${links}</p>` : ''}<p><a href="/creatives">Explore more creative professionals</a></p>`
      const mainEntity = { '@type': p.profile_type === 'business' ? 'Organization' : 'Person', name: p.full_name || 'Creative Professional', url: canonical }
      if (p.profession) mainEntity.jobTitle = p.profession
      if (p.website) mainEntity.sameAs = [p.website]
      const html = layout({ title, description, canonical, body, jsonld: { '@context': 'https://schema.org', '@type': 'ProfilePage', name: title, url: canonical, mainEntity } })
      res.status(200).setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400').send(html); return
    }
    res.status(404).send('<h1>CreativeCheck page not found</h1><p><a href="/">Return to CreativeCheck</a></p>')
  } catch (error) { res.status(500).send('<h1>CreativeCheck</h1><p>Temporary server error.</p>') }
}
