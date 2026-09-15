const BASE = 'https://creativecheck.app'

const categories = {
  photographers: { title: 'Photographers', intro: 'Discover photographers and photography professionals through CreativeCheck.' },
  filmmakers: { title: 'Filmmakers', intro: 'Discover filmmakers, directors, producers and film professionals through CreativeCheck.' },
  designers: { title: 'Designers', intro: 'Discover designers and design professionals through CreativeCheck.' },
  artists: { title: 'Artists', intro: 'Discover artists and visual arts professionals through CreativeCheck.' },
  musicians: { title: 'Musicians', intro: 'Discover musicians, composers and music professionals through CreativeCheck.' },
  'creative-businesses': { title: 'Creative Businesses', intro: 'Discover creative businesses, studios, agencies and production companies through CreativeCheck.' }
}

function esc(value = '') {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

function titleFromSlug(slug) {
  return String(slug || '')
    .replace(/-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i, '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
}

function layout({ title, description, canonical, body, jsonld }) {
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${esc(canonical)}"><meta property="og:type" content="website"><meta property="og:site_name" content="CreativeCheck"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(canonical)}"><script type="application/ld+json">${JSON.stringify(jsonld)}</script></head><body><header><a href="/">CreativeCheck</a> · <a href="/creatives">Creative Professionals</a> · <a href="/creative-businesses">Creative Businesses</a></header><main>${body}</main><footer><a href="/photographers">Photographers</a> · <a href="/filmmakers">Filmmakers</a> · <a href="/designers">Designers</a> · <a href="/artists">Artists</a> · <a href="/musicians">Musicians</a> · <a href="/?join=1">Create Your Profile</a></footer></body></html>`
}

export default async function handler(req, res) {
  const path = String((req.query && req.query.path) || '/').replace(/\/$/, '') || '/'

  try {
    if (path === '/creatives') {
      const body = `<h1>Creative Professionals</h1><p>Discover photographers, filmmakers, designers, artists, musicians and other creative professionals through CreativeCheck.</p><h2>Explore creative categories</h2><ul><li><a href="/photographers">Photographers</a></li><li><a href="/filmmakers">Filmmakers</a></li><li><a href="/designers">Designers</a></li><li><a href="/artists">Artists</a></li><li><a href="/musicians">Musicians</a></li></ul>`
      const html = layout({
        title: 'Creative Professionals | CreativeCheck',
        description: 'Discover creative professionals worldwide on CreativeCheck.',
        canonical: `${BASE}/creatives`,
        body,
        jsonld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Creative Professionals', url: `${BASE}/creatives` }
      })
      res.status(200).setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400').send(html)
      return
    }

    const match = path.match(/^\/(photographers|filmmakers|designers|artists|musicians|creative-businesses)(?:\/([^/]+))?$/)
    if (match) {
      const key = match[1]
      const locationSlug = match[2]
      const location = locationSlug ? decodeURIComponent(locationSlug).replace(/-/g, ' ') : ''
      const cat = categories[key]
      const nice = location.replace(/\b\w/g, c => c.toUpperCase())
      const name = location ? `${cat.title} in ${nice}` : cat.title
      const title = `${name} | CreativeCheck`
      const description = location
        ? `Discover ${cat.title.toLowerCase()} in ${nice} on CreativeCheck. Explore public professional profiles and creative connections.`
        : cat.intro
      const canonical = `${BASE}/${key}${locationSlug ? `/${locationSlug}` : ''}`
      const body = `<h1>${esc(name)}</h1><p>${esc(description)}</p><p>CreativeCheck is a public discovery platform for creative professionals and creative businesses.</p><p><a href="/creatives">Explore all creative professionals</a></p>`
      const html = layout({
        title,
        description,
        canonical,
        body,
        jsonld: { '@context': 'https://schema.org', '@type': 'CollectionPage', name, description, url: canonical }
      })
      res.status(200).setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400').send(html)
      return
    }

    const pm = path.match(/^\/profile\/([^/]+)$/)
    if (pm) {
      const name = titleFromSlug(pm[1])
      const canonical = `${BASE}${path}`
      const title = `${name} | CreativeCheck`
      const description = `Discover ${name}, a creative professional with a public profile on CreativeCheck.`
      const body = `<h1>${esc(name)}</h1><p>Creative professional profile on CreativeCheck.</p><p>CreativeCheck is a public discovery platform for creative professionals and creative businesses.</p><p><a href="/creatives">Explore more creative professionals</a></p>`
      const html = layout({
        title,
        description,
        canonical,
        body,
        jsonld: { '@context': 'https://schema.org', '@type': 'ProfilePage', name: title, url: canonical, mainEntity: { '@type': 'Person', name, url: canonical } }
      })
      res.status(200).setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400').send(html)
      return
    }

    res.status(404).send('<h1>CreativeCheck page not found</h1><p><a href="/">Return to CreativeCheck</a></p>')
  } catch (error) {
    console.error('SEO renderer error:', error)
    res.status(500).send('<h1>CreativeCheck</h1><p>Temporary server error.</p>')
  }
}
