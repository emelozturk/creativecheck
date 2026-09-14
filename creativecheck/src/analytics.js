import { supabase } from './supabase'

const SESSION_KEY = 'cc_analytics_session'

function getSessionId() {
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY)
    if (existing) return existing
    const id = typeof crypto?.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`
    window.sessionStorage.setItem(SESSION_KEY, id)
    return id
  } catch {
    return 'anonymous'
  }
}

export function track(eventName, fields = {}) {
  if (typeof window === 'undefined') return
  const payload = {
    event_name: eventName,
    session_id: getSessionId(),
    referrer: document.referrer || null,
    path: window.location.pathname + window.location.search,
    ...fields,
  }
  supabase.from('analytics_events').insert([payload]).then(({ error }) => {
    if (error) console.debug('Analytics event failed:', error.message)
  })
}
