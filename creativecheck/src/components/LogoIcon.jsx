export default function LogoIcon({ size = 48 }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '18px',
        background:
          'linear-gradient(135deg,#4f46e5 0%,#7c3aed 45%,#06b6d4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 14px 35px rgba(79,70,229,0.35)'
      }}
    >
      <svg
        width={size * 0.62}
        height={size * 0.62}
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M44 18C40.5 14.5 35.8 12.5 30.8 12.5C20.7 12.5 12.5 20.7 12.5 30.8C12.5 40.9 20.7 49.1 30.8 49.1C36.1 49.1 40.9 46.9 44.2 43.3"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M24 31.5L31 38.5L49 20.5"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M46 10L54 18"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
