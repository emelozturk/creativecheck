import { useRef } from 'react'
import ProfileCard from './ProfileCard'
import { PROFILES } from '../data/profiles'

export default function ExploreSection() {
  const rowRef = useRef(null)
  const scroll = dir => rowRef.current?.scrollBy({ left: dir * 250, behavior: 'smooth' })

  return (
    <section className="max-w-[1300px] mx-auto px-8 pb-20">
      {/* Section header */}
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-[24px] font-extrabold text-gray-900 tracking-tight mb-1">
            Explore the Creative World
          </h2>
          <p className="text-[13.5px] text-gray-500">
            Browse professionals and companies across the global creative ecosystem.
          </p>
        </div>
        <a href="#" className="flex items-center gap-1 text-[13.5px] font-semibold text-violet-600 hover:text-violet-800 transition-colors whitespace-nowrap ml-6">
          View all
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* Scrollable card row */}
      <div className="relative">
        <div ref={rowRef} className="scroll-hide flex gap-[18px] overflow-x-auto pb-2">
          {PROFILES.map(p => <ProfileCard key={p.id} profile={p}/>)}
        </div>
        {/* Scroll arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full border border-gray-200 flex items-center justify-center z-10 hover:border-violet-300 transition-colors"
          style={{ boxShadow:'0 4px 16px rgba(0,0,0,0.12)', transform:'translateY(-50%)' }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>
  )
}
