import HeroBackground from './HeroBackground'
import LogoIcon from './LogoIcon'

export default function Hero() {
  return (
    <section className="relative min-h-[490px] flex flex-col items-center justify-center overflow-hidden pt-16 pb-8">
      <HeroBackground />

      {/* Hero logo */}
      <div className="relative z-10 mb-5" style={{ filter: 'drop-shadow(0 10px 40px rgba(124,58,237,0.22))' }}>
        <LogoIcon size={168} />
      </div>

      {/* Wordmark */}
      <h1 className="relative z-10 font-extrabold text-center leading-[1.0] tracking-tight mb-4"
          style={{ fontSize:'clamp(52px,9vw,88px)' }}>
        <span className="text-gray-900">Creative</span>
        <span className="gradient-check">Check</span>
      </h1>

      {/* Tagline */}
      <p className="relative z-10 text-[11.5px] font-semibold tracking-[5px] text-gray-500 uppercase text-center">
        Discover&nbsp;&nbsp;Creatives&nbsp;&nbsp;with&nbsp;&nbsp;Confidence
      </p>
    </section>
  )
}
