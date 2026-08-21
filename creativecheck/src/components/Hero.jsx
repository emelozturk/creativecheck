import heroArt from '../assets/hero-art.jpg'

export default function Hero({
  searchQuery,
  setSearchQuery
}) {
  return (
    <section id="discover" className="hero-section">

      <div className="hero-content">

        <div className="hero-eyebrow">
          THE HOME OF CREATIVE MINDS
        </div>

        <h1 className="hero-title">
          The Home of
          <br />
          <span>Creative Minds</span>
        </h1>

        <p className="hero-description">
          Discover and connect with creative professionals
          and creative businesses worldwide.
        </p>

        <div className="hero-search">

          <span className="hero-search-icon">
            ⌕
          </span>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search creatives, skills or services..."
          />

          <select
            className="hero-category"
            defaultValue="all"
            aria-label="Creative category"
          >
            <option value="all">All categories</option>
            <option value="visual">Visual Arts</option>
            <option value="film">Film & Media</option>
            <option value="fashion">Fashion & Beauty</option>
            <option value="music">Music & Performance</option>
            <option value="design">Design</option>
          </select>

          <button
            type="button"
            className="hero-search-button"
            aria-label="Search"
          >
            →
          </button>

        </div>

        <div className="hero-coming-label">
          COMING NEXT
        </div>

        <div className="hero-feature-grid">

          <div className="hero-feature">
            <span>✧</span>
            <div>
              <strong>AI Matching</strong>
              <small>Smart creative connections</small>
            </div>
          </div>

          <div className="hero-feature">
            <span>▤</span>
            <div>
              <strong>Projects & Opportunities</strong>
              <small>Discover new opportunities</small>
            </div>
          </div>

          <div className="hero-feature">
            <span>▧</span>
            <div>
              <strong>Contracts & Invoices</strong>
              <small>Professional creative tools</small>
            </div>
          </div>

          <div className="hero-feature">
            <span>▦</span>
            <div>
              <strong>Events & Workshops</strong>
              <small>Learn, connect and grow</small>
            </div>
          </div>

          <div className="hero-feature">
            <span>♧</span>
            <div>
              <strong>Business & Legal Connections</strong>
              <small>Find the right professionals</small>
            </div>
          </div>

        </div>

        <div className="hero-notice">
          <span>◇</span>

          <p>
            <strong>Important:</strong> CreativeCheck is a
            connection platform only. We do not provide legal,
            business or financial advice. We connect you with
            the right professionals.
          </p>
        </div>

      </div>

      <div className="hero-art">

        <img
          src={heroArt}
          alt="CreativeCheck creative artwork"
        />

      </div>

    </section>
  )
}
