import { LocationIcon, VerifiedIcon, SOCIAL_ICONS, BADGE_ICONS } from './Icons'

export default function ProfileCard({ profile }) {
  const BadgeIcon = BADGE_ICONS[profile.badgeIcon]

  return (
    <div className="card-hover bg-white rounded-[20px] overflow-hidden flex-shrink-0 cursor-pointer"
         style={{ width: 210, boxShadow: '0 2px 24px rgba(0,0,0,0.08)' }}>

      {/* Image / banner */}
      <div className="relative" style={{ height: 176, background: profile.gradient }}>
        {/* Centre avatar */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[62px] h-[62px] rounded-full flex items-center justify-center text-[21px] font-extrabold text-white"
               style={{
                 background: 'rgba(255,255,255,0.18)',
                 border: '2.5px solid rgba(255,255,255,0.42)',
                 fontFamily: "'Plus Jakarta Sans', sans-serif",
                 letterSpacing: '1px',
               }}>
            {profile.name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute bottom-[10px] right-[10px] w-[30px] h-[30px] rounded-full flex items-center justify-center"
             style={{ background: profile.badgeColor, boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          {BadgeIcon && <BadgeIcon size={13} color="white" sw={1.8}/>}
        </div>
      </div>

      {/* Card info */}
      <div className="p-[14px_15px_16px]">
        {/* Name + verified */}
        <div className="flex items-center gap-[5px] mb-[3px]">
          <span className="font-bold text-[14px] text-gray-900 truncate">{profile.name}</span>
          {profile.verified && <VerifiedIcon size={15}/>}
        </div>

        {/* Role */}
        <p className="text-[12px] text-gray-500 mb-[6px]">{profile.role}</p>

        {/* Location */}
        <div className="flex items-center gap-[4px] mb-[11px]">
          <LocationIcon size={11} color="#f97316" sw={2.2}/>
          <span className="text-[11.5px] text-gray-400 font-medium">{profile.location}</span>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-[6px] flex-wrap">
          {profile.links.map(key => {
            const Icon = SOCIAL_ICONS[key]
            return Icon ? (
              <button key={key}
                      className="w-[28px] h-[28px] rounded-full border border-gray-200 flex items-center justify-center hover:border-violet-300 hover:bg-violet-50 transition-colors">
                <Icon size={12} color="#6b7280" sw={1.6}/>
              </button>
            ) : null
          })}
          {profile.extra > 0 && (
            <span className="text-[11px] font-semibold text-violet-600 bg-violet-50 border border-violet-200 rounded-full px-[7px] py-[2px]">
              +{profile.extra}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
