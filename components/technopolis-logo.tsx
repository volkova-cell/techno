export default function TechnopolisLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" className="w-full h-full bg-card">
        {/* Geometric logo inspired by Technopolis Moscow */}
        <defs>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Main geometric shape */}
        <polygon points="20,20 80,20 90,35 80,80 20,80 10,35" fill="url(#techGradient)" className="text-primary" />

        {/* Inner accent lines */}
        <polygon points="30,30 70,30 75,40 70,70 30,70 25,40" fill="none" stroke="white" strokeWidth="2" />

        {/* Center element */}
        <circle cx="50" cy="50" r="8" fill="white" />
        <circle cx="50" cy="50" r="4" fill="currentColor" className="text-primary" />
      </svg>
    </div>
  )
}
