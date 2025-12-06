import React from 'react';

interface SkinCubeProps {
  className?: string;
}

const SkinCube: React.FC<SkinCubeProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of skin layers showing epidermis, dermis and a hair follicle"
    >
      <defs>
        <linearGradient id="dermisGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" /> {/* orange-400 */}
          <stop offset="100%" stopColor="#ea580c" /> {/* orange-600 */}
        </linearGradient>
        <linearGradient id="sideGradient" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" stopColor="#0ea5e9" />
           <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Group with slight perspective tilt if needed, but keeping it flat-isometric for stability */}
      <g transform="translate(10, 10)">
        
        {/* Right Side Face (Deep Blue) */}
        <path d="M150 50 L180 30 L180 130 L150 150 Z" fill="url(#sideGradient)" stroke="#0284c7" strokeWidth="1"/>
        
        {/* Top Face (Skin Surface - Light Blue/Cyan) */}
        <path d="M30 50 L150 50 L180 30 L60 30 Z" fill="#bae6fd" stroke="#7dd3fc" strokeWidth="2" />
        
        {/* Front Face (Cross Section background) */}
        <path d="M30 50 L150 50 L150 150 L30 150 Z" fill="#fff7ed" />
        
        {/* Epidermis (Top Layer - Wavy) */}
        <path d="M30 50 L150 50 L150 75 Q120 85 90 75 Q60 65 30 75 Z" fill="#fdba74" stroke="#f97316" strokeWidth="1" />
        
        {/* Dermis (Middle Layer - Orange Gradient) */}
        <path d="M30 75 Q60 65 90 75 Q120 85 150 75 L150 120 L30 120 Z" fill="url(#dermisGradient)" />
        
        {/* Subcutaneous / Bottom Layer (Patterned or simpler) */}
        <path d="M30 120 L150 120 L150 150 L30 150 Z" fill="#ffedd5" />
        <circle cx="50" cy="135" r="8" fill="#fbbf24" opacity="0.4" />
        <circle cx="80" cy="138" r="10" fill="#fbbf24" opacity="0.4" />
        <circle cx="110" cy="132" r="9" fill="#fbbf24" opacity="0.4" />
        <circle cx="135" cy="138" r="7" fill="#fbbf24" opacity="0.4" />

        {/* Hair Follicle Detail */}
        {/* The bulb in dermis */}
        <path d="M85 120 Q90 135 95 120" fill="none" stroke="#0ea5e9" strokeWidth="3" />
        {/* The shaft going up */}
        <path d="M90 120 L90 50" stroke="#0ea5e9" strokeWidth="4" />
        {/* The hair sticking out of top */}
        <path d="M90 50 Q100 20 80 10" stroke="#0f172a" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Decorative Veins/Nerves in Dermis */}
        <path d="M40 90 Q60 100 80 90 T140 95" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.6" strokeDasharray="3 2" />
        
        {/* Surface Pores/Details */}
        <circle cx="60" cy="40" r="1.5" fill="#0f172a" opacity="0.3" transform="skewX(-45)" />
        <circle cx="120" cy="40" r="1.5" fill="#0f172a" opacity="0.3" transform="skewX(-45)" />
        
        {/* Border for Front Face to crisp it up */}
        <rect x="30" y="50" width="120" height="100" fill="none" stroke="#f97316" strokeWidth="2" />

      </g>
    </svg>
  );
};

export default SkinCube;
