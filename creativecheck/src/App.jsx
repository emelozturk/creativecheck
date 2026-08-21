import founderPhoto from './assets/founder-original.jpg'
import { useState } from 'react'
import ExploreSection from './components/ExploreSection'
import AddProfilePage from './components/AddProfilePage'
import './index.css'

const upcoming = [
  ['✧', 'AI Matching', 'Smart connections'],
  ['▤', 'Projects & Opportunities', 'New opportunities every day'],
  ['▧', 'Contracts & Invoices', 'Professional tools for creatives'],
  ['▦', 'Events & Workshops', 'Learn, connect and grow'],
  ['♧', 'Business & Legal Connections', 'Connect with trusted advisors'],
]

const futureFeatures = [
  ['✣', 'AI Project Matching', 'Find the right fit'],
  ['▣', 'Jobs & Opportunities', 'Discover new projects'],
  ['▤', 'Contracts & Invoices', 'Professional tools'],
  ['▦', 'Events & Workshops', 'Grow your skills'],
  ['▥', 'Magazine & Insights', 'Creative knowledge'],
  ['♧', 'Legal & Business Support', 'Connect with experts'],
]

export default function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="cc-site">

      <header className="cc-header">
        <a href="#discover" className="cc-brand" aria-label="CreativeCheck home">
          <span className="cc-mark">C</span>
          <span>
            <strong>CREATIVECHECK</strong>
            <small>CONNECT · COLLABORATE · CREATE</small>
          </span>
        </a>

        <nav className="cc-nav">
          <a className="active" href="#discover">Discover</a>
          <a href="#members">Professionals</a>
          <a href="#members">Businesses</a>
          <a href="#founder">Founder</a>
          <a href="#about">About</a>
          <a href="#future">Resources <span>⌄</span></a>
        </nav>

        <div className="cc-header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() =>
              document.getElementById('creative-search')?.focus()
            }
          >
            ⌕
          </button>

          <a href="#login">Log in</a>

          <a className="cc-join" href="#add-profile">
            Join CreativeCheck
          </a>
        </div>
      </header>

      <main>

        <section id="discover" className="cc-hero">

          <div className="cc-hero-copy">

            <h1>
              The Home of
              <br />
              <em>Creative Minds</em>
            </h1>

            <p className="cc-hero-desc">
              Discover and connect with creative professionals
              <br />
              and creative businesses worldwide.
            </p>

            <div className="cc-search" id="creative-search-wrap">

              <span className="search-icon">⌕</span>

              <input
                id="creative-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search creatives, skills or services..."
                aria-label="Search creatives, skills or services"
              />

              <span className="search-divider" />

              <span className="search-category">
                All categories⌄
              </span>

              <button
                className="search-submit"
                onClick={() =>
                  document
                    .getElementById('members')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                →
              </button>

            </div>

            <div className="cc-coming-title">
              COMING NEXT
            </div>

            <div className="cc-upcoming-grid">

              {upcoming.map(([icon, title, text]) => (

                <div
                  className="cc-upcoming-card"
                  key={title}
                >

                  <span className="upcoming-icon">
                    {icon}
                  </span>

                  <div>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>

                </div>

              ))}

            </div>

            <div className="cc-notice">

              <span className="notice-icon">
                ♢
              </span>

              <div>
                <b>Important:</b> CreativeCheck is a connection platform only.
                <br />
                We do not provide legal, business or financial advice.
                We connect you with the right professionals.
              </div>

            </div>

          </div>

          <div
            className="cc-hero-art"
            aria-hidden="true"
          />

        </section>


        <section id="members">

          <ExploreSection
            searchQuery={searchQuery}
          />

        </section>


        <section
          id="future"
          className="cc-future"
        >

          <div className="future-lead">
            <strong>
              More tools. More connections.
            </strong>

            <span>
              More opportunities. Coming soon.
            </span>
          </div>

          {futureFeatures.map(
            ([icon, title, text]) => (

              <div
                className="future-item"
                key={title}
              >

                <span>{icon}</span>

                <div>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </div>

              </div>

            )
          )}

          <a
            href="#future"
            className="future-button"
          >
            See All Upcoming Features&nbsp; →
          </a>

        </section>


        <section
          id="founder"
          className="cc-founder"
        >

          <div className="founder-photo-wrap">

            <img
              src={founderPhoto}
              alt="Emel Ozturk"
              className="founder-photo"
            />

          </div>


          <div className="founder-copy">

            <span className="section-label">
              FOUNDER
            </span>

            <h2>
              Emel Ozturk
            </h2>

            <p>
              <strong>
                Award-winning filmmaker, photographer
                &amp; creative entrepreneur.
              </strong>
            </p>

            <p>
              Law graduate and currently pursuing a
              Master’s in <strong>AI, Technology &amp;
              Legal Services</strong>.
            </p>

            <p>
              Emel is building CreativeCheck to strengthen
              the creative community through professional
              opportunities, education, collaboration and
              industry connections.
            </p>

            <a href="#about">
              More about Emel&nbsp; →
            </a>

          </div>


          <div
            id="about"
            className="founder-about"
          >

            <span className="section-label">
              ABOUT CREATIVECHECK
            </span>

            <p>
              CreativeCheck is an AI-powered platform built
              to create a stronger, more connected creative
              ecosystem — where creative professionals and
              creative businesses can connect, collaborate,
              learn and grow.
            </p>

            <p>
              Its purpose is to bring creative talent,
              creative businesses, knowledge and opportunity
              closer together across the creative industries.
            </p>

            <a href="#discover">
              Learn more about us&nbsp; →
            </a>

          </div>

        </section>


        <section
          id="add-profile"
          className="cc-add-profile"
        >

          <AddProfilePage />

        </section>

      </main>


      <footer className="cc-footer">

        <div className="footer-brand">

          <span className="cc-mark">
            C
          </span>

          <span>
            <strong>CREATIVECHECK</strong>
            <small>
              CONNECT · COLLABORATE · CREATE
            </small>
          </span>

        </div>


        <nav className="footer-links">

          <a href="#about">About</a>
          <a href="#discover">How It Works</a>
          <a href="#members">Community</a>
          <a href="#add-profile">Help Center</a>
          <a href="#about">Legals</a>
          <a href="#about">Responsibilities</a>
          <a href="#about">Terms</a>
          <a href="#about">Privacy</a>

        </nav>


        <div className="footer-social">

          <span>◎</span>
          <span>in</span>
          <span>𝕏</span>
          <span>▶</span>

          <small>
            © 2025 CreativeCheck. All rights reserved.
          </small>

        </div>

      </footer>

    </div>
  )
}
