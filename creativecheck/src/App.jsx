import founderPhoto from './assets/founder-original.jpg'
import { useState } from 'react'
import ExploreSection from './components/ExploreSection'
import AddProfilePage from './components/AddProfilePage'
import './index.css'

const roadmap = [
  ['01','AI Matching','AI-assisted discovery and recommendations built around real creative needs.','MATCH'],
  ['02','Job Board','Creative jobs, freelance briefs and project opportunities.','WORK'],
  ['03','Invoices','Future invoicing tools designed around creative work.','WORK'],
  ['04','Contracts','Future contract tools for clearer creative collaborations.','WORK'],
  ['05','Legal & Business Professional Matching','Discover and connect with trusted legal, accounting, IP and business professionals.','CONNECT'],
  ['06','Education & Resources','Curated learning, practical resources and creative-industry knowledge.','GROW'],
  ['07','Promote','Future ways to increase visibility and reach the right audience.','GROW'],
  ['08','Events','Discover and share creative events, festivals and networking.','CONNECT'],
  ['09','Community','A deeper layer for conversations, knowledge sharing and peer support.','CONNECT'],
  ['10','Insights','Future visibility and profile-performance insights.','GROW'],
  ['11','Global Reach','A connected creative ecosystem across disciplines and borders.','GROW'],
]

const businessFuture = [
  ['Business profiles','A dedicated presence for agencies, studios, production companies and creative businesses.'],
  ['Talent discovery','Future tools to help businesses find relevant creative professionals.'],
  ['Job & project posting','Publish creative opportunities and briefs to the community.'],
  ['Promote','Future premium visibility for businesses and opportunities.'],
  ['Professional matching','Future connections with relevant legal, accounting, IP and business professionals.'],
]

const creativeFuture = [
  ['Enhanced visibility','Future tools designed to increase professional discoverability.'],
  ['Opportunity access','Better access to jobs, projects and opportunities across the ecosystem.'],
  ['Human-led matching','Founder-led introductions based on real creative needs.'],
  ['AI Matching','Future AI-assisted matching to relevant people and opportunities.'],
  ['Global discovery','A wider network connecting creative professionals across disciplines and borders.'],
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [audience, setAudience] = useState('business')
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return <div className="cc-site">
    <header className="cc-header">
      <a href="#discover" className="cc-brand"><span className="cc-mark">C</span><span><strong>CREATIVECHECK</strong><small>DISCOVER · CONNECT · GROW</small></span></a>
      <nav className="cc-nav"><a href="#discover" className="active">Discover</a><a href="#members">Members</a><a href="#audiences">For Creatives</a><a href="#roadmap">Coming Soon</a><a href="#about">About</a></nav>
      <div className="cc-header-actions"><button className="header-search" onClick={()=>document.getElementById('creative-search')?.focus()} aria-label="Search">⌕</button><a className="cc-join" href="#add-profile-form">Create Your Profile</a></div>
    </header>

    <main>
      <section id="discover" className="cc-hero-premium">
        <div className="cc-hero-copy"><div className="eyebrow">THE CREATIVE ECOSYSTEM</div><h1>Discover.<br/><em>Connect. Grow.</em></h1><p className="cc-hero-desc">A professional discovery platform for creatives and creative businesses — giving the people behind the work a place to be found, connected and seen.</p><div className="hero-actions"><a className="primary-button" href="#add-profile-form">Create Your Profile <span>↗</span></a><button className="secondary-button" onClick={()=>scrollTo('members')}>Explore Members <span>↓</span></button></div><div className="cc-search premium-search"><span className="search-icon">⌕</span><input id="creative-search" value={searchQuery} onChange={e=>setSearchQuery(e.target.value)} placeholder="Search creatives, disciplines or services..."/><button className="search-submit" onClick={()=>scrollTo('members')}>→</button></div><div className="hero-proof"><span>LIVE NOW</span><b>Professional profiles</b><i/><b>Public discovery</b><i/><b>Networking & connection</b></div></div>
        <div className="cc-hero-art-premium" aria-label="Abstract creative collage">
          <div className="paint-swipe swipe-one"/><div className="paint-swipe swipe-two"/><div className="paint-swipe swipe-three"/>
          <div className="art-canvas"><span className="canvas-sun"/><span className="canvas-line line-one"/><span className="canvas-line line-two"/><span className="canvas-shape"/></div>
          <div className="art-camera"><span className="camera-lens"/><span className="camera-top"/></div>
          <div className="art-film"><span/><span/><span/><span/><span/><span/></div>
          <div className="art-brush brush-one"/><div className="art-brush brush-two"/>
          <div className="art-palette"><i/><i/><i/><i/><b/></div>
          <div className="hero-word hero-word-a">CREATE</div><div className="hero-word hero-word-b">CONNECT</div>
          <div className="hero-art-note">Made for the people<br/>behind the work.</div>
        </div>
      </section>

      <section className="current-section"><div className="section-intro"><span className="section-label">01 / LIVE NOW</span><h2>Start with a<br/><em>professional presence.</em></h2><p>Today, CreativeCheck gives creatives and creative businesses a professional profile, public discoverability and a place to begin meaningful connections.</p></div><div className="current-grid"><article><span>01</span><h3>Professional Profiles</h3><p>Create a profile representing your creative identity, discipline, experience and professional presence.</p></article><article><span>02</span><h3>Public Discovery</h3><p>Be discovered by people and businesses looking for creative talent, skills and services.</p></article><article><span>03</span><h3>Networking</h3><p>Build connections across disciplines and become part of the wider creative ecosystem.</p></article><article><span>04</span><h3>External Presence</h3><p>Connect your existing professional presence so people can discover more about you.</p></article></div></section>

      <section id="members" className="members-section"><ExploreSection searchQuery={searchQuery}/></section>

      <section id="audiences" className="audience-section"><div className="audience-head"><div><span className="section-label">02 / WHO IT IS FOR</span><h2>Two sides of the<br/><em>creative ecosystem.</em></h2></div><div className="audience-toggle"><button className={audience==='business'?'selected':''} onClick={()=>setAudience('business')}>Business</button><button className={audience==='creatives'?'selected':''} onClick={()=>setAudience('creatives')}>Creatives</button></div></div><div className="audience-content">{audience==='business'?<><div className="audience-statement"><span className="big-number">B</span><h3>For creative businesses</h3><p>Agencies, studios, production companies and creative businesses can build a professional presence and, as the roadmap develops, discover talent, publish opportunities and grow visibility.</p><a href="#add-profile-form" className="text-link">Create a business profile <span>→</span></a></div><div className="future-list"><div className="list-title">COMING SOON</div>{businessFuture.map(([title,text],i)=><div className="future-row" key={title}><span>0{i+1}</span><div><h4>{title}</h4><p>{text}</p></div></div>)}</div></>:<><div className="audience-statement"><span className="big-number">C</span><h3>For creatives</h3><p>Filmmakers, photographers, designers, artists, writers, musicians and creative professionals can create a professional identity and become easier to discover.</p><a href="#add-profile-form" className="text-link">Create your creative profile <span>→</span></a></div><div className="future-list"><div className="list-title">COMING SOON</div>{creativeFuture.map(([title,text],i)=><div className="future-row" key={title}><span>0{i+1}</span><div><h4>{title}</h4><p>{text}</p></div></div>)}</div></>}</div></section>

      <section id="roadmap" className="roadmap-section"><div className="roadmap-top"><div><span className="section-label light">03 / COMING SOON</span><h2>The next layer of<br/><em>CreativeCheck.</em></h2></div><p>Future features are clearly separated from what is available today. The roadmap grows the platform from discovery and connection into a wider creative ecosystem.</p></div><div className="roadmap-flow"><span>DISCOVER</span><b>→</b><span>CONNECT</span><b>→</b><span>MATCH</span><b>→</b><span>WORK</span><b>→</b><span>GROW</span></div><div className="roadmap-grid">{roadmap.map(([num,title,text,stage])=><article key={title}><div className="roadmap-number">{num}</div><div><div className="stage-tag">{stage}</div><h3>{title}</h3><p>{text}</p><span className="coming-badge">COMING SOON</span></div></article>)}</div></section>

      <section id="about" className="founder-section"><div className="founder-image"><img src={founderPhoto} alt="CreativeCheck Founder"/></div><div className="founder-copy"><span className="section-label">04 / THE FOUNDER</span><h2>Built from the<br/><em>inside of the industry.</em></h2><p className="founder-lead">CreativeCheck was created from first-hand experience of the creative world and a belief that technology should support creative people — not replace them.</p><p>Founder <strong>Emel Ozturk</strong> is an award-winning filmmaker and photographer, creative entrepreneur and LLM student specialising in AI, Technology &amp; Legal Services.</p></div></section>

      <section className="join-section"><div><span className="section-label light">05 / JOIN</span><h2>Make your creative<br/><em>presence discoverable.</em></h2><p>Create your profile and become part of CreativeCheck.</p></div><div className="join-card"><div className="join-mark">C</div><h3>Ready to be discovered?</h3><a className="primary-button light-button" href="#add-profile-form">Create Your Profile <span>↗</span></a></div></section>
      <div id="add-profile-form" className="profile-form-anchor"><AddProfilePage/></div>
    </main>
    <footer className="cc-footer-premium"><div className="footer-brand"><span className="cc-mark">C</span><span><strong>CREATIVECHECK</strong><small>DISCOVER · CONNECT · GROW</small></span></div><div className="footer-links"><a href="#about">About</a><a href="#members">Members</a><a href="#audiences">For Creatives</a><a href="#roadmap">Coming Soon</a><a href="#add-profile-form">Create Profile</a></div><div className="footer-note">© 2026 CreativeCheck<br/>A platform for creatives and creative businesses.</div></footer>
  </div>
}
