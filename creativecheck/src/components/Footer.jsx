import LogoIcon from './LogoIcon'

export default function Footer() {
  return (
    <footer id="about" className="bg-[#0b1220] text-gray-300 px-8 py-14">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <LogoIcon size={40} />

              <span className="text-xl font-extrabold text-white">
                Creative<span className="gradient-check">Check</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              CreativeCheck is a public creative directory designed to help users discover creative professionals through public professional visibility and portfolio presence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6">
              COMPANY
            </h4>

            <div className="space-y-4">
              <a href="#discover" className="block hover:text-white transition">
                Discover
              </a>

              <a href="#resources" className="block hover:text-white transition">
                Resources
              </a>

              <a href="#about" className="block hover:text-white transition">
                About
              </a>

              <a href="#add-profile" className="block hover:text-white transition">
                Submit Your Profile
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6">
              LEGAL
            </h4>

            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                CreativeCheck provides informational summaries based on publicly available professional information, portfolio visibility and public-facing references.
              </p>

              <p>
                CreativeCheck does not provide legal conclusions, verification services, endorsements or guarantees.
              </p>

              <p>
                Users may request information correction or profile removal.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-xs text-gray-500">
          © 2026 CreativeCheck. All rights reserved.
        </div>

      </div>
    </footer>
  )
}
