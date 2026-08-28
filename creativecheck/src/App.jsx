import founderPhoto from './assets/founder-original.jpg'
import { useState } from 'react'
import ExploreSection from './components/ExploreSection'
import AddProfilePage from './components/AddProfilePage'
import './index.css'

const upcoming = [
  ['✣', 'AI Matching', 'Smart connections to the right people and opportunities'],
  ['▣', 'Job Board', 'Find and post jobs, freelance gigs and creative projects'],
  ['▤', 'Invoices', 'Create and send professional invoices with ease'],
  ['▥', 'Contracts', 'Simple, secure contracts for creative collaborations'],
  ['♧', 'Legal & Business Professional Matching', 'Connect with trusted legal and business professionals who understand the creative world'],
]

const futureFeatures = [
  ['✣', 'AI Matching', 'Smart matching to connect you with the right people and opportunities'],
  ['▣', 'Job Board', 'Find and post jobs, freelance gigs and creative projects'],
  ['▤', 'Invoices', 'Create and send professional invoices with ease'],
  ['▥', 'Contracts', 'Simple, secure contracts for creative collaborations'],
  ['♧', 'Legal & Business Professional Matching', 'Connect with trusted professionals who understand the creative world'],
  ['✦', 'Education & Resources', 'Learn, grow and stay informed with curated education and tools'],
  ['✧', 'Promote', 'Promote your work, services and opportunities to the right audience'],
  ['◈', 'Events', 'Discover and share creative events, festivals and networking'],
  ['○', 'Community', 'Join conversations, share ideas and support each other'],
  ['◉', 'Insights', 'Track your profile performance and understand your growth'],
  ['◎', 'Global Reach', 'One global platform to connect and collaborate without borders'],
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="cc-site">
      <header className="cc-header">
        <a href="#discover" className="cc-brand" aria-label="CreativeCheck home">
          <span className="cc-mark">C</span>
          <span><strong>CREATIVECHECK</strong><small>DISCOVER · CONNECT · GROW</small></span>
        </a>
        <nav className="cc-nav">
          <a className="active" href="#discover">Discover</a><a href="#members">Professionals</a><a href="#members">Businesses</a><a href="#founder">Founder</a><a href="#about">About</a><a href="#future">Roadmap <span>⌄</span></a>
        </nav>
        <div className="cc-header-actions"><button className="icon-button" aria-label="Search" onClick={() => document.getElementById('creative-search')?.focus()}>⌕</button><a href="#login">Log in</a><a className="cc-join" href="#add-profile">Create Your Profile</a></div>
      </header>
      <main>
        <section id="discover" className="cc-hero">
          <div className="cc-hero-copy">
            <h1>The Home of<br /><em>Creative Minds</em></h1>
            <p className="cc-hero-desc">Discover creatives and creative businesses worldwide.</p>
            <div className="cc-search" id="creative-search-wrap"><span className="search-icon">⌕</span><input id="creative-search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search creatives, skills or services..." aria-label="Search creatives, skills or services" /><span className="search-divider" /><span className="search-category">All categories⌄</span><button className="search-submit" onClick={() => document.getElementById('members')?.scrollIntoView({ behavior: 'smooth' })}>→</button></div>
            <div className="cc-coming-title">COMING SOON</div>
            <div className="cc-upcoming-grid">{upcoming.map(([icon, title, text]) => (<div className="cc-upcoming-card" key={title}><span className="upcoming-icon">{icon}</span><div><strong>{title}</strong><small>{text}</small></div></div>))}</div>
            <div className="cc-notice"><span className="notice-icon">♢</span><div><b>Important:</b> CreativeCheck is a discovery and connection platform. We connect members with relevant professionals; we do not provide legal, business or financial advice.</div></div>
          </div>
          <div className="cc-hero-art" aria-hidden="true" />
        </section>
        <section id="members"><ExploreSection searchQuery={searchQuery} /></section>
        <section id="future" className="cc-future">
          <div className="future-lead"><strong>CREATIVECHECK ROADMAP</strong><span>Future features built around Discover · Connect · Match · Work · Grow.</span></div>
          {futureFeatures.map(([icon, title, text]) => (<div className="future-item" key={title}><span>{icon}</span><div><strong>{title}</strong><small>{text}</small><em>COMING SOON</em></div></div>))}
          <a href="#add-profile" className="future-button">Join CreativeCheck Today&nbsp; →</a>
        </section>
        <section id="founder" className="cc-founder">
          <div className="founder-photo-wrap"><img src={founderPhoto} alt="CreativeCheck Founder" className="founder-photo" /></div>
          <div className="founder-copy"><span className="section-label">FOUNDER</span><h2>Emel Ozturk</h2><p><strong>Award-winning filmmaker, photographer &amp; creative entrepreneur.</strong></p><p>LLM student in <strong>AI, Technology &amp; Legal Services</strong>.</p><p>CreativeCheck was created from first-hand experience of the creative world and a belief that technology can be used as a tool to make creative discovery and connection easier.</p><a href="#about">More about the Founder&nbsp; →</a></div>
          <div id="about" className="founder-about"><span className="section-label">ABOUT CREATIVECHECK</span><p>CreativeCheck is a platform built for creatives and creative businesses to create professional profiles, increase visibility and discover the wider creative ecosystem.</p><p>Our long-term vision is to bring responsible technology and AI together with human creativity — supporting discovery, connection, matching and growth without replacing the people who make the work.</p><a href="#discover">Discover CreativeCheck&nbsp; →</a></div>
        </section>
        <section id="add-profile" className="cc-add-profile"><AddProfilePage /></section>
      </main>
      <footer className="cc-footer"><div className="footer-brand"><span className="cc-mark">C</span><span><strong>CREATIVECHECK</strong><small>DISCOVER · CONNECT · GROW</small></span></div><nav className="footer-links"><a href="#about">About</a><a href="#discover">How It Works</a><a href="#members">Community</a><a href="#add-profile">Create Profile</a><a href="#future">Roadmap</a><a href="#about">Responsibilities</a><a href="#about">Terms</a><a href="#about">Privacy</a></nav><div className="footer-social"><span>◎</span><span>in</span><span>𝕏</span><span>▶</span><small>© 2026 CreativeCheck. All rights reserved.</small></div></footer>
    </div>
  )
}
