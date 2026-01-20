interface GraffitiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

const GraffitiLogo = ({ size = 'md', className = '' }: GraffitiLogoProps) => {
  const sizeClasses = {
    sm: 'text-lg sm:text-xl',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl md:text-4xl',
    hero: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
  };

  return (
    <div className={`graffiti-logo ${className}`}>
      <span 
        className={`font-extrabold tracking-tight ${sizeClasses[size]}`}
        style={{
          background: 'linear-gradient(135deg, hsl(18 100% 50%) 0%, hsl(25 90% 45%) 50%, hsl(0 0% 20%) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,77,0,0.2)',
          filter: 'drop-shadow(2px 2px 4px rgba(255,77,0,0.3))',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '-0.02em',
          position: 'relative',
        }}
      >
        <span style={{ 
          position: 'relative',
          display: 'inline-block',
        }}>
          GH
          <span 
            style={{
              position: 'absolute',
              top: '-2px',
              right: '-8px',
              width: '12px',
              height: '12px',
              background: 'radial-gradient(circle, hsl(18 100% 50%) 0%, transparent 70%)',
              borderRadius: '50%',
              opacity: 0.6,
            }}
          />
        </span>
        {' '}
        <span className="hidden xs:inline">Chapa y Pintura</span>
      </span>
      
      {/* Spray effect decoration */}
      <svg 
        className="absolute -bottom-1 left-0 w-full h-2 opacity-40"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sprayGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#ff4d00', stopOpacity: 0 }} />
            <stop offset="20%" style={{ stopColor: '#ff4d00', stopOpacity: 0.8 }} />
            <stop offset="80%" style={{ stopColor: '#ff4d00', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#ff4d00', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path 
          d="M0,4 Q10,2 20,4 T40,4 T60,4 T80,4 T100,4" 
          fill="none" 
          stroke="url(#sprayGrad)" 
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default GraffitiLogo;
