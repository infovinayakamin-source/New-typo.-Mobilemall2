import React from 'react';

// 100% Authentic, Original Mobile Phone Cutouts & Vectors (No Fake CSS Mockups)
const authenticPhones = [
  {
    id: 'iphone-16-pro',
    name: 'Apple iPhone 16 Pro',
    image: '/phones/iphone-16-pro.svg',
    alt: 'Apple iPhone 16 Pro Titanium Original Device',
    tag: 'iPhone 16 Pro'
  },
  {
    id: 'samsung-z-fold6',
    name: 'Samsung Galaxy Z Fold6',
    image: '/phones/samsung-z-fold6.png',
    alt: 'Samsung Galaxy Z Fold6 Original Foldable Flagship',
    tag: 'Galaxy Z Fold6'
  },
  {
    id: 'google-pixel-8-pro-back',
    name: 'Google Pixel 8 Pro',
    image: '/phones/google-pixel-8-pro-back.svg',
    alt: 'Google Pixel 8 Pro Original Camera Visor',
    tag: 'Pixel 8 Pro'
  },
  {
    id: 'iphone-16',
    name: 'Apple iPhone 16',
    image: '/phones/iphone-16.svg',
    alt: 'Apple iPhone 16 Original Colorway',
    tag: 'iPhone 16'
  },
  {
    id: 'samsung-galaxy-ultra',
    name: 'Samsung Galaxy Ultra Flagship',
    image: '/phones/samsung-galaxy-s22-ultra.png',
    alt: 'Samsung Galaxy Ultra Series Original Flagships',
    tag: 'Galaxy Ultra'
  },
  {
    id: 'google-pixel-8-pro-front',
    name: 'Google Pixel 8 Pro Display',
    image: '/phones/google-pixel-8-pro.svg',
    alt: 'Google Pixel 8 Pro Original Actua OLED Display',
    tag: 'Pixel OLED'
  },
  {
    id: 'nothing-phone',
    name: 'Nothing Phone (1)',
    image: '/phones/nothing-phone.svg',
    alt: 'Nothing Phone Original Glyph Interface',
    tag: 'Nothing Phone'
  },
  {
    id: 'ipad-pro',
    name: 'Apple iPad Pro Liquid Retina',
    image: '/phones/ipad-pro.png',
    alt: 'Apple iPad Pro Original M-Series Tablet',
    tag: 'iPad Pro'
  },
  {
    id: 'iphone-15-pro',
    name: 'Apple iPhone 15 Pro Titanium',
    image: '/phones/iphone-15-pro.svg',
    alt: 'Apple iPhone 15 Pro Original Titanium Flagship',
    tag: 'iPhone 15 Pro'
  }
];

export default function HeroMotionPhones() {
  // Tripled for a seamless, continuous infinite horizontal stream loop
  const displayPhones = [...authenticPhones, ...authenticPhones, ...authenticPhones];

  return (
    <div className="relative w-full my-6 select-none">
      
      {/* Keyframe Animations for Genuine Floating Mobile Phones */}
      <style>{`
        @keyframes ogPhonesStream {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }

        @keyframes organicFloatOdd {
          0%, 100% {
            transform: translateY(0px) rotate(-1.5deg);
          }
          50% {
            transform: translateY(-20px) rotate(1.2deg);
          }
        }

        @keyframes organicFloatEven {
          0%, 100% {
            transform: translateY(-16px) rotate(1.2deg);
          }
          50% {
            transform: translateY(12px) rotate(-1.5deg);
          }
        }

        .og-phones-track {
          display: flex;
          width: max-content;
          animation: ogPhonesStream 32s linear infinite !important;
          will-change: transform;
        }

        .og-phones-track:hover {
          animation-play-state: paused;
        }

        .og-float-odd {
          animation: organicFloatOdd 4.6s ease-in-out infinite;
          will-change: transform;
        }

        .og-float-even {
          animation: organicFloatEven 5.2s ease-in-out infinite 0.8s;
          will-change: transform;
        }
      `}</style>

      {/* Atmospheric Stage Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[320px] bg-gradient-to-r from-[#10B981]/15 via-[#E5C07B]/18 to-[#10B981]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* ============================================================
          PURE ORIGINAL MOBILES IN MOTION
          Genuine, authentic flagship devices floating freely with zero fake frames
         ============================================================ */}
      <div className="relative py-4 overflow-hidden">
        
        {/* Soft edge blur vignettes for seamless entrance and exit */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#030C08] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#030C08] to-transparent z-20 pointer-events-none" />

        <div className="og-phones-track flex gap-8 sm:gap-14 py-6 px-6 items-center">
          {displayPhones.map((phone, idx) => {
            const isOdd = idx % 2 === 1;
            return (
              <div
                key={`${phone.id}-${idx}`}
                className={`flex-shrink-0 ${
                  isOdd ? 'og-float-odd' : 'og-float-even'
                } transition-transform duration-500 hover:scale-110 cursor-pointer`}
              >
                {/* 
                  100% PURE ORIGINAL MOBILE DEVICE (NO FAKE FRAMES, NO FAKE NOTCH, NO CARDS)
                */}
                <div className="relative flex flex-col items-center justify-center">
                  
                  {/* Authentic Physical Device Image with 3D Depth Shadow */}
                  <img
                    src={phone.image}
                    alt={phone.alt}
                    className="h-64 sm:h-80 md:h-92 w-auto object-contain select-none filter drop-shadow-[0_24px_38px_rgba(0,0,0,0.85)] drop-shadow-[0_4px_12px_rgba(229,192,123,0.15)] transition-all duration-300 pointer-events-none"
                    loading="lazy"
                  />

                  {/* Soft Ambient Floating Reflection / Shadow on Stage Floor */}
                  <div className="w-2/3 h-3 bg-black/80 rounded-full blur-md mt-4 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:w-4/5" />

                </div>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
