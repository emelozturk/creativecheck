import {
  LocationIcon,
  VerifiedIcon,
  SOCIAL_ICONS,
  BADGE_ICONS
} from './Icons'

export default function ProfileCard({ profile }) {
  const BadgeIcon = BADGE_ICONS[profile.badgeIcon]

  return (
    <div
      className="group bg-white rounded-[24px] overflow-hidden flex-shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-1"
      style={{
        width: 220,
        boxShadow: '0 4px 30px rgba(0,0,0,0.08)'
      }}
    >
      {/* HEADER */}
      <div
        className="relative"
        style={{
          height: 190,
          background: profile.gradient
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(255,255,255,0.8), transparent 45%)'
          }}
        />

        {/* VERIFIED BADGE */}
        {profile.verified && (
          <div
            className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full"
            style={{
              background: 'rgba(255,255,255,0.16)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.25)'
            }}
          >
            <VerifiedIcon size={13} />
            <span className="text-[10px] font-bold text-white tracking-wide">
              VERIFIED
            </span>
          </div>
        )}

        {/* AVATAR */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-[74px] h-[74px] rounded-full flex items-center justify-center text-[24px] font-extrabold text-white shadow-2xl"
            style={{
              background: 'rgba(255,255,255,0.18)',
              border: '2.5px solid rgba(255,255,255,0.42)',
              backdropFilter: 'blur(8px)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              letterSpacing: '1px'
            }}
          >
            {profile.name
              .split(' ')
              .map(n => n[0])
              .join('')}
          </div>
        </div>

        {/* CATEGORY */}
        <div
          className="absolute bottom-[12px] right-[12px] w-[34px] h-[34px] rounded-full flex items-center justify-center"
          style={{
            background: profile.badgeColor,
            boxShadow: '0 6px 16px rgba(0,0,0,0.25)'
          }}
        >
          {BadgeIcon && (
            <BadgeIcon
              size={15}
              color="white"
              sw={2}
            />
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-[16px]">
        {/* NAME */}
        <div className="flex items-center gap-[6px] mb-[4px]">
          <span className="font-extrabold text-[15px] text-gray-900 truncate">
            {profile.name}
          </span>

          {profile.verified && (
            <VerifiedIcon size={16} />
          )}
        </div>

        {/* ROLE */}
        <p className="text-[12.5px] text-gray-500 mb-[8px] leading-relaxed">
          {profile.role}
        </p>

        {/* LOCATION */}
        <div className="flex items-center gap-[5px] mb-[14px]">
          <LocationIcon
            size={12}
            color="#f97316"
            sw={2.2}
          />

          <span className="text-[11.5px] text-gray-400 font-semibold">
            {profile.location}
          </span>
        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-[7px] flex-wrap">
          {profile.links.map(key => {
            const Icon = SOCIAL_ICONS[key]

            return Icon ? (
              <button
                key={key}
                className="w-[30px] h-[30px] rounded-full border border-gray-200 flex items-center justify-center transition-all hover:border-violet-300 hover:bg-violet-50 hover:scale-110"
              >
                <Icon
                  size={13}
                  color="#6b7280"
                  sw={1.7}
                />
              </button>
            ) : null
          })}

          {profile.extra > 0 && (
            <span className="text-[11px] font-bold text-violet-700 bg-violet-50 border border-violet-200 rounded-full px-[8px] py-[3px]">
              +{profile.extra}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
