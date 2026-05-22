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
              CreativeCheck is a public creative directory for discovering creative professionals,
              studios, agencies and production companies with confidence.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6">
              COMPANY
            </h4>

            <div className="space-y-4">
              <a href="#about" className="block hover:text-white transition">
                About CreativeCheck
              </a>

              <a href="#resources" className="block hover:text-white transition">
                Resources
              </a>

              <a href="#categories" className="block hover:text-white transition">
                Creative Categories
              </a>

              <a href="#add-profile" className="block hover:text-white transition">
                Submit Your Profile
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.2em] text-gray-400 mb-6">
              LEGAL & SUPPORT
            </h4>

            <div className="space-y-4">
              <a href="mailto:oztremel@gmail.com?subject=CreativeCheck Contact" className="block hover:text-white transition">
                Contact: oztremel@gmail.com
              </a>

              <a href="mailto:oztremel@gmail.com?subject=CreativeCheck Profile Removal Request" className="block hover:text-white transition">
                Profile Removal Request
              </a>

              <a href="mailto:oztremel@gmail.com?subject=CreativeCheck Information Correction" className="block hover:text-white transition">
                Information Correction
              </a>

              <a href="mailto:oztremel@gmail.com?subject=CreativeCheck Help Centre" className="block hover:text-white transition">
                Help Centre
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-xs text-gray-500 leading-relaxed">
          <p>
            CreativeCheck provides informational summaries based on publicly available professional
            information, public links and portfolio visibility.
          </p>

          <p className="mt-3">
            CreativeCheck does not verify, endorse or guarantee any individual, company or organisation
            listed on the platform. All trademarks, logos and public references belong to their
            respective owners.
          </p>

          <p className="mt-3">
            © 2026 CreativeCheck. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
