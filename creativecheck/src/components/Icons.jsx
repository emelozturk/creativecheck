/* Centralised icon library for chips, badges, social links */

function Svg({ children, size = 14, color = "#6b7280", sw = 1.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  )
}

export function CameraIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </Svg>
  )
}

export function FilmIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <rect x="2" y="2" width="20" height="20" rx="2.18"/>
      <line x1="7"  y1="2"  x2="7"  y2="22"/>
      <line x1="17" y1="2"  x2="17" y2="22"/>
      <line x1="2"  y1="12" x2="22" y2="12"/>
      <line x1="2"  y1="7"  x2="7"  y2="7"/>
      <line x1="2"  y1="17" x2="7"  y2="17"/>
      <line x1="17" y1="17" x2="22" y2="17"/>
      <line x1="17" y1="7"  x2="22" y2="7"/>
    </Svg>
  )
}

export function UserIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </Svg>
  )
}

export function SparklesIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/>
      <path d="M5 17l.7 2.1L7.8 20l-2.1.9L5 23l-.9-2.1L2 20l2.1-.9L5 17z"/>
      <path d="M19 2l.5 1.5L21 4l-1.5.5L19 6l-.5-1.5L17 4l1.5-.5L19 2z"/>
    </Svg>
  )
}

export function TheaterIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M2 10s3-3 3-8h14c0 5 3 8 3 8"/>
      <path d="M6 15s2 2 6 2 6-2 6-2"/>
      <path d="M2 10h20"/>
      <path d="M6 10v5"/>
      <path d="M18 10v5"/>
    </Svg>
  )
}

export function MusicIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6"  cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </Svg>
  )
}

export function PenIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </Svg>
  )
}

export function PlayIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <polygon points="5 3 19 12 5 21 5 3"/>
    </Svg>
  )
}

export function BuildingIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </Svg>
  )
}

export function UsersIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </Svg>
  )
}

export function ClapperboardIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M4 11v8a2 2 0 002 2h12a2 2 0 002-2v-8H4zM4 11l2-7h12l2 7"/>
      <line x1="12" y1="4" x2="12" y2="11"/>
      <line x1="8"  y1="4.5" x2="9.5" y2="11"/>
      <line x1="16" y1="4.5" x2="14.5" y2="11"/>
    </Svg>
  )
}

export function GlobeIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/>
    </Svg>
  )
}

export function InstagramIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </Svg>
  )
}

export function BehanceIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M2 7h7c1.8 0 3 1 3 2.5S10.8 12 9 12H2V7zm0 5h8c2 0 3.5 1 3.5 3S11 18 9 18H2v-6z"/>
      <line x1="14" y1="8" x2="19" y2="8"/>
    </Svg>
  )
}

export function LinkedInIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </Svg>
  )
}

export function YoutubeIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.45a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </Svg>
  )
}

export function VimeoIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M22 7.1c-.1 3-2.2 7.2-6.3 12.5C11.5 24.8 8 25.3 6 22.8L4.5 15c-.6-2.2.4-3.2 1.8-3.2 1.3 0 2.9 1.6 4 4.8C12 13 13.5 9.5 15.5 8c1.7-1.2 2.8-.6 3.4.9"/>
    </Svg>
  )
}

export function TikTokIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
    </Svg>
  )
}

export function ShieldIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </Svg>
  )
}

export function StarIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </Svg>
  )
}

export function ScissorsIcon({ size, color, sw }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </Svg>
  )
}

export function LocationIcon({ size = 12, color = "#f97316", sw = 2.2 }) {
  return (
    <Svg size={size} color={color} sw={sw}>
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </Svg>
  )
}

export function VerifiedIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8" fill="#2563eb"/>
      <path d="M5 8.2l2.1 2.1 3.9-4.2" stroke="white" strokeWidth="1.55"
            strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  )
}

export const CHIP_ICONS = {
  camera: CameraIcon,
  film: FilmIcon,
  user: UserIcon,
  sparkles: SparklesIcon,
  theater: TheaterIcon,
  music: MusicIcon,
  pen: PenIcon,
  play: PlayIcon,
  building: BuildingIcon,
  users: UsersIcon,
  clapperboard: ClapperboardIcon,
}

export const SOCIAL_ICONS = {
  globe: GlobeIcon,
  instagram: InstagramIcon,
  behance: BehanceIcon,
  linkedin: LinkedInIcon,
  youtube: YoutubeIcon,
  vimeo: VimeoIcon,
  tiktok: TikTokIcon,
}

export const BADGE_ICONS = {
  camera: CameraIcon,
  film: FilmIcon,
  user: UserIcon,
  scissors: ScissorsIcon,
  music: MusicIcon,
  shield: ShieldIcon,
  pen: PenIcon,
}
