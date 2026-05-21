# CreativeCheck

A premium creative-industry discovery platform. Discover creatives, artists, studios, agencies, and production companies across the global creative ecosystem.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Tech Stack
- React 18
- Tailwind CSS 3
- Vite 4
- Plus Jakarta Sans (Google Fonts)

## Project Structure

```
creativecheck/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx          # Sticky nav with logo + links
    │   ├── LogoIcon.jsx        # Rainbow arc SVG logo
    │   ├── HeroBackground.jsx  # Painterly blob backgrounds
    │   ├── Hero.jsx            # Hero section
    │   ├── SearchBar.jsx       # Search input
    │   ├── CategoryChips.jsx   # Filter chips
    │   ├── ProfileCard.jsx     # Profile card component
    │   ├── ExploreSection.jsx  # Horizontal card scroll
    │   ├── FeatureStrip.jsx    # Bottom feature cards
    │   ├── Icons.jsx           # All SVG icons
    │   └── Footer.jsx          # Footer with disclaimers
    └── data/
        ├── profiles.js         # Mock profile + feature data
        └── categories.js       # Category taxonomy
```

## Legal Notice

CreativeCheck displays publicly available information only.
We do not verify, endorse or guarantee any listed individual or organisation.

## Build for Production

```bash
npm run build
npm run preview
```
