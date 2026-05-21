import { FEATURES } from '../data/profiles'
import { ShieldIcon, GlobeIcon, StarIcon } from './Icons'

function FeatureIcon({ icon, bg }) {
  const icons = {
    shield: <ShieldIcon size={22} color="white" sw={1.8}/>,
    globe:  <GlobeIcon  size={22} color="white" sw={1.8}/>,
    star:   <StarIcon   size={22} color="white" sw={1.8}/>,
    'check-shield': (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  }
  return (
    <div className="w-[50px] h-[50px] rounded-[14px] flex items-center justify-center mb-4 flex-shrink-0"
         style={{ background: bg }}>
      {icons[icon] || null}
    </div>
  )
}

export default function FeatureStrip() {
  return (
    <section className="border-t border-gray-100 py-14" style={{ background: '#f9fafb' }}>
      <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map(f => (
          <div key={f.id} className="bg-white rounded-[20px] p-7"
               style={{ boxShadow: '0 2px 18px rgba(0,0,0,0.05)' }}>
            <FeatureIcon icon={f.icon} bg={f.iconBg}/>
            <h3 className="text-[14.5px] font-bold text-gray-900 mb-2 leading-snug">{f.title}</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
