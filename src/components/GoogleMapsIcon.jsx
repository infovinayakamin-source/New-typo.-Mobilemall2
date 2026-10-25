import React from 'react';

/**
 * Official Google Maps Pin vector icon with accurate 5-segment geometry
 */
export default function GoogleMapsIcon({ className = "w-5 h-5", dropShadow = true }) {
  return (
    <svg
      viewBox="0 0 92.3 132.3"
      className={`${className} ${dropShadow ? 'filter drop-shadow-[0_2px_8px_rgba(66,133,244,0.35)]' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Maps"
    >
      <path fill="#1a73e8" d="M60.2 2.2C55.8.8 51 0 46.1 0 32 0 19.3 6.4 10.8 16.5l21.8 18.3L60.2 2.2z" />
      <path fill="#ea4335" d="M10.8 16.5C4.1 24.5 0 34.9 0 46.1c0 8.7 1.7 15.7 4.6 22l28-33.3-21.8-18.3z" />
      <path fill="#4285f4" d="M46.2 28.5c9.7 0 17.6 7.9 17.6 17.6 0 4.3-1.6 8.3-4.2 11.4 0 0 13.9-16.6 23.6-28.2C77.4 18 69.6 9 60.2 2.2L32.6 34.8c3.4-3.8 8.2-6.3 13.6-6.3z" />
      <path fill="#fbbc04" d="M59.6 57.5c-3.4 4.1-8.5 6.7-14.2 6.7-9.7 0-17.6-7.9-17.6-17.6 0-1.8.3-3.6.8-5.2L4.6 68.1c4.5 9.7 12.1 17.4 20.1 27.6l34.9-41.5-13-16.7z" />
      <path fill="#34a853" d="M46.1 132.3c15.4-23.7 34.8-43.7 34.8-63.7 0-7.3-1.8-14.2-4.9-20.3L24.7 95.7c4 5.1 8 10.5 11.9 16.3 4.5 7.1 7.1 13.9 9.5 20.3z" />
    </svg>
  );
}
