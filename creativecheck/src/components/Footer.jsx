import LogoIcon from './LogoIcon'

const FOOTER_LINKS = {
  Platform: ['Discover','Categories','Studios','Agencies'],
  Company:  ['About','Resources','Blog','Press'],
  Legal:    ['Privacy Policy','Terms of Service','Disclaimer','Copyright Notice'],
  Support:  ['Contact','Profile Removal','Information Correction','Help Centre'],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1300px] mx-auto px-8 pt-14 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoIcon size={38}/>
              <span className="text-[17px] font-extrabold">
                <span className="text-white">Creative</span>
                <span className="gradient-check">Check</span>
              </span>
            </div>
            <p className="text-[12.5px] text-gray-400 leading-relaxed">
              An open directory for the global creative ecosystem.
            </p>
          </div>
          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h4 className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-[13px] text-gray-400 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimers */}
        <div className="border-t border-gray-800 pt-8 space-y-3">
          <p className="text-[12px] text-gray-500 leading-relaxed max-w-4xl">
            CreativeCheck provides informational summaries based on publicly available professional
            information, links and review activity. We do not verify, endorse or guarantee any
            individual, company or organisation listed on the platform.
          </p>
          <p className="text-[12px] text-gray-600">
            All trademarks, logos and public references belong to their respective owners.
          </p>
          <p className="text-[12px] text-gray-600">
            © {new Date().getFullYear()} CreativeCheck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
