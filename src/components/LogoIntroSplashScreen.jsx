import React, { useState, useEffect } from 'react';

export default function LogoIntroSplashScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Auto transition cleanly into the site after 1.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      handleExit();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Allow any keypress or click to dismiss immediately
  useEffect(() => {
    const handleKeyDown = () => {
      handleExit();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExit = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Mobile Mall"
      onClick={handleExit}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#020705] cursor-pointer transition-all duration-500 ease-out select-none ${
        isFadingOut
          ? 'opacity-0 scale-110 pointer-events-none filter blur-md'
          : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.25) 0%, rgba(7, 26, 19, 0.95) 50%, #020705 90%)
        `
      }}
    >
      {/* Background Animated Ambient Space & Gold Particle Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Gold Radial Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[650px] h-[420px] sm:h-[650px] bg-[#D4AF37]/20 rounded-full blur-[110px] anim-gold-aura" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] bg-[#10B981]/15 rounded-full blur-[80px]" />

        {/* Ambient Subtle Diagonal Gold Beams */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, rgba(229, 192, 123, 0.04) 0px, rgba(229, 192, 123, 0.04) 1px, transparent 1px, transparent 60px)`
          }}
        />

        {/* Subtle Star / Sparkle Specks */}
        <div className="absolute top-[22%] left-[28%] w-1.5 h-1.5 rounded-full bg-[#F3E5AB] shadow-[0_0_8px_#F3E5AB] opacity-80 animate-ping" />
        <div className="absolute top-[34%] right-[24%] w-1 h-1 rounded-full bg-[#E5C07B] shadow-[0_0_6px_#E5C07B] opacity-75" />
        <div className="absolute bottom-[28%] left-[26%] w-1 h-1 rounded-full bg-[#D4AF37] shadow-[0_0_6px_#D4AF37] opacity-60" />
        <div className="absolute bottom-[24%] right-[28%] w-1.5 h-1.5 rounded-full bg-[#F3E5AB] shadow-[0_0_8px_#F3E5AB] opacity-70 animate-pulse" />
      </div>

      {/* Center Stage: ONLY the Animated Official Logo - Zero text, zero letters, zero extra elements */}
      <div className="relative z-10 flex items-center justify-center pointer-events-none">
        {/* Outward Shockwave Ripple Rings */}
        <div className="absolute w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 rounded-full border-2 border-[#D4AF37]/90 anim-shockwave-1" />
        <div className="absolute w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 rounded-full border border-[#F3E5AB]/75 anim-shockwave-2" />

        {/* Circular Gold Emblem Shell */}
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-br from-[#FFE79A] via-[#D4AF37] to-[#8C6819] shadow-[0_0_75px_rgba(212,175,55,0.7)] anim-cinematic-pop">
          {/* Inner Dark Onyx Frame with High Gloss Border */}
          <div className="w-full h-full rounded-full p-1 bg-[#020705] flex items-center justify-center overflow-hidden relative shadow-inner">
            
            {/* The Official Mobile Mall Logo Image Asset */}
            <img
              src="/assets/aistudio/857933617_122098904577520697_1007430803464821606_n_803cc052.jpg"
              alt="Mobile Mall"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                e.currentTarget.src = '/mobile-mall-logo.jpg';
              }}
            />

            {/* Specular Diagonal Light Flare Glint */}
            <div
              className="absolute inset-0 pointer-events-none anim-glint-sweep"
              style={{
                background: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.85) 50%, transparent 80%)',
                mixBlendMode: 'screen',
                width: '200%',
                height: '200%'
              }}
            />

            {/* High-Gloss Radial Highlight Reflection */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 35% 25%, rgba(255,255,255,0.35) 0%, transparent 60%)'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
